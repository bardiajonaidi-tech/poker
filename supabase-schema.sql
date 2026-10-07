-- Poker Ledger — Supabase schema
-- Run this once in Supabase: SQL Editor → New query → paste → Run.

-- Rooms: anyone signed in can see every room; only the creator (admin) can change it.
create table if not exists public.rooms (
  id           uuid primary key default gen_random_uuid(),
  name         text not null check (char_length(name) between 1 and 60),
  owner        uuid not null default auth.uid() references auth.users(id) on delete cascade,
  owner_name   text,
  unit         bigint not null default 200000,
  created_at   bigint not null default (extract(epoch from now()) * 1000)::bigint,
  last_at      bigint,
  games_count  integer not null default 0
);

-- Games: one row per night. players / families are JSON, exactly as the app keeps them.
create table if not exists public.games (
  id          uuid primary key default gen_random_uuid(),
  room_id     uuid not null references public.rooms(id) on delete cascade,
  status      text not null default 'live' check (status in ('live','closed')),
  started_at  bigint not null default (extract(epoch from now()) * 1000)::bigint,
  closed_at   bigint,
  unit        bigint not null default 0,
  players     jsonb not null default '[]'::jsonb,
  families    jsonb not null default '[]'::jsonb
);
create index if not exists games_room_started on public.games (room_id, started_at desc);

-- Row Level Security
alter table public.rooms enable row level security;
alter table public.games enable row level security;

drop policy if exists "rooms readable by signed-in users" on public.rooms;
create policy "rooms readable by signed-in users" on public.rooms
  for select to authenticated using (true);

drop policy if exists "create own rooms" on public.rooms;
create policy "create own rooms" on public.rooms
  for insert to authenticated with check (owner = auth.uid());

drop policy if exists "admin updates room" on public.rooms;
create policy "admin updates room" on public.rooms
  for update to authenticated using (owner = auth.uid()) with check (owner = auth.uid());

drop policy if exists "admin deletes room" on public.rooms;
create policy "admin deletes room" on public.rooms
  for delete to authenticated using (owner = auth.uid());

drop policy if exists "games readable by signed-in users" on public.games;
create policy "games readable by signed-in users" on public.games
  for select to authenticated using (true);

drop policy if exists "admin writes games" on public.games;
create policy "admin writes games" on public.games
  for all to authenticated
  using (exists (select 1 from public.rooms r where r.id = room_id and r.owner = auth.uid()))
  with check (exists (select 1 from public.rooms r where r.id = room_id and r.owner = auth.uid()));

-- Live updates (so everyone sees buy-ins as the admin enters them)
alter table public.games replica identity full;
do $$
begin
  begin alter publication supabase_realtime add table public.rooms; exception when duplicate_object then null; end;
  begin alter publication supabase_realtime add table public.games; exception when duplicate_object then null; end;
end $$;
