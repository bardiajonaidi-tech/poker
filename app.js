/* ================= language & theme ================= */
const I18N={
fa:{
  appTitle:'حساب‌کتاب پوکر',
  authTitle:'وارد میز شو', signIn:'ورود', signUp:'ثبت‌نام', namePh:'اسمت (همینو بقیه می‌بینن)', emailPh:'ایمیل', passPh:'رمز (حداقل ۶ حرف)',
  needName:'اسمت رو بنویس.', shortPass:'رمز باید حداقل ۶ حرف باشه.', checkEmail:'یه ایمیل تأیید برات فرستاده شد. روی لینکش بزن و بعد وارد شو.',
  notConfirmed:'هنوز ایمیلت رو تأیید نکردی. لینک توی ایمیلت رو بزن.', badLogin:'ایمیل یا رمز اشتباهه.', emailTaken:'با این ایمیل قبلاً ثبت‌نام شده. از «ورود» استفاده کن.',
  authFail:'ورود انجام نشد. دوباره امتحان کن.', signOut:'خروج',
  configT:'تنظیمات ناقصه', configP:'آدرس و کلید Supabase توی فایل config.js وارد نشده. راهنمای README رو ببین.',
  netDownT:'سرور در دسترس نیست', netDownP:'به Supabase وصل نشد. اینترنت رو چک کن. اگه از ایران وصل نمی‌شه، شاید فیلترشکن لازم باشه.',
  tagline:'روم بساز، خریدها و تحویلی‌ها رو ثبت کن، آخر شب ببین کی به کی چقدر بده.',
  signedInAs:'وارد شدی با', you:'تو', someone:'یه نفر',
  themeAuto:'◐ خودکار', themeLight:'☀ روشن', themeDark:'☾ تاریک', langBtn:'English',
  loadingT:'در حال باز کردن میز…', loadingP:'چند لحظه صبر کن.',
  signinT:'اول وارد شو', signinP:'برای استفاده باید با حساب Claude وارد شده باشی و این صفحه با تو به اشتراک گذاشته شده باشه.',
  noIdP:'حسابت اینجا شناخته نشد. با حساب Claude وارد شو و دوباره صفحه رو باز کن.',
  viewOnlyNote:'دسترسی تو فقط دیدنه. برای ساخت روم، صاحب صفحه باید تو رو به‌عنوان Editor اضافه کنه.',
  rooms:'روم‌ها', roomNamePh:'اسم روم جدید (مثلاً پنج‌شنبه‌ها خونه‌ی سینا)', createRoom:'ساخت روم',
  needRoomName:'یه اسم برای روم بنویس.', noCreatePerm:'اجازه‌ی ساخت روم نداری. صاحب صفحه باید تو رو به‌عنوان Editor اضافه کنه.', createFail:'روم ساخته نشد. یه بار دیگه امتحان کن.',
  roomsLoadFail:'لیست روم‌ها باز نشد. صفحه رو دوباره باز کن.',
  noRoomsT:'هنوز رومی نیست', noRoomsP:'اسم یه روم رو بالا بنویس و «ساخت روم» رو بزن. بعد بقیه می‌تونن بازی رو زنده ببینن.',
  youAdmin:'ادمین تویی', adminIs:'ادمین: ', lastGame:'آخرین بازی: ', created:'ساخته شده: ', nGames:n=>`${n} بازی`,
  back:'→ روم‌ها', roomMissing:'این روم پیدا نشد', unitLabel:'مبلغ هر Buy-in:',
  viewerNote:'فقط ادمین این روم می‌تونه Buy-in و Cash-out ثبت کنه. تو همه چیز رو زنده می‌بینی.',
  tabLive:'بازی امشب', tabHistory:'تاریخچه', tabChart:'نمودار عملکرد',
  noGame:'الان بازی‌ای در جریان نیست', startGame:'شروع بازی جدید',
  idleAdminLast:'بازیکن‌های بازی قبل خودکار اضافه می‌شن.', idleAdminFirst:'بازی رو شروع کن و بازیکن‌ها رو اضافه کن.',
  idleViewer:'وقتی ادمین بازی رو شروع کنه، اینجا زنده نشون داده می‌شه.', roomLoadFail:'اطلاعات این روم باز نشد.',
  totalIn:'کل خریدها', totalOut:'کل تحویلی‌ها', diff:'اختلاف',
  players:'بازیکن‌ها', newPlayerPh:'اسم بازیکن جدید', add:'اضافه کن',
  noPlayersAdmin:'هنوز بازیکنی نیست. اسم اولین نفر رو بالا بنویس.', noPlayers:'هنوز بازیکنی اضافه نشده.',
  del:'حذف', delBuy:'حذف این خرید', buyins:n=>`Buy-in‌ها (${n}):`, other:'مبلغ دیگه', ok:'ثبت', cashout:'Cash-out:',
  balanced:'✓ حساب جوره. جمع تحویلی‌ها با جمع خریدها برابره.',
  unbalanced:(more,amt,hint)=>`حساب جور نیست: تحویلی‌ها ${more?'بیشتر':'کمتر'} از خریدها هستن، به اندازه‌ی ${amt} تومان.${hint?' یه نفر چیپ‌هاش رو اشتباه شمرده یا یه خرید ثبت نشده.':''}`,
  settleTitle:'تسویه، کی به کی بده', families:'خانواده‌ها', famHint:'اعضای یه خانواده با هم حساب می‌شن',
  famNamePh:'اسم خانواده (مثلاً خانواده رضایی)', makeFamily:'ساخت خانواده', split:'جدا کن',
  allInFam:'همه‌ی بازیکن‌ها توی یه خانواده هستن.', pickTwo:'حداقل دو نفر رو انتخاب کن.', needFamName:'یه اسم برای خانواده بنویس.',
  pays:'←  بده به', cur:'تومان', noTx:'وقتی تحویلی‌ها ثبت بشن، اینجا لیست پرداخت‌ها میاد.',
  excel:'خروجی اکسل', copy:'کپی نتیجه', copied:'کپی شد ✓', copyFail:'کپی نشد', endGame:'پایان بازی',
  saved:'ذخیره شد ✓', declined:'لغو شد', saveFail:'ذخیره نشد',
  saving:'در حال ذخیره…', noPerm:'اجازه‌ی ثبت نداری.', netFail:'ذخیره نشد. اتصال رو چک کن.', closeFail:'بازی بسته نشد. دوباره امتحان کن.',
  endEmpty:'بازی بدون بازیکن پاک بشه؟', endOk:'بازی تموم شه و بره توی تاریخچه؟', endDiff:a=>`حساب ${a} تومان اختلاف داره. با همین وضع تموم شه؟`,
  yesEnd:'آره، تمومش کن', no:'نه',
  histEmptyT:'هنوز بازی‌ای تموم نشده', histEmptyP:'هر بازی که ادمین «پایان بازی» رو بزنه، اینجا ذخیره می‌شه.',
  nPlayers:n=>`${n} بازیکن`, nightWinner:'برنده‌ی شب: ',
  thPlayer:'بازیکن', thBuys:'Buy-in', thIn:'خرید', thOut:'Cash-out', thNet:'سود / ضرر',
  delGame:'حذف این بازی', delGameQ:'این بازی برای همیشه از تاریخچه پاک بشه؟', yesDel:'آره، پاک کن', delFail:'پاک نشد.',
  chartTitle:'سود و ضرر تجمعی', chartSub:'جمع برد و باخت هر نفر از اولین بازی تا الان، به هزار تومان',
  chartEmpty:'بعد از اولین بازی تموم‌شده، نمودار اینجا میاد.', chartAria:'نمودار سود و ضرر تجمعی بازیکن‌ها', tonight:'امشب',
  boardTitle:'جدول بازیکن‌ها', thGames:'بازی', thWins:'برد', thTotal:'جمع', thAvg:'میانگین هر شب', thBest:'بهترین شب', thWorst:'بدترین شب',
  txtTitle:'نتیجه پوکر', txtFams:'خانواده‌ها:', txtPays:'پرداخت‌ها:',
  x:{amount:'مبلغ',time:'ساعت',sumIn:'جمع خرید',net:'سود / ضرر',totIn:'کل خرید',totOut:'کل تحویل',balanced:'✓ حساب جوره',diff:'اختلاف',
     settle:'تسویه',payer:'پرداخت‌کننده',payee:'دریافت‌کننده',amtCur:'مبلغ (تومان)',timeline:'ریز زمانی',jalali:'تاریخ شمسی',greg:'تاریخ میلادی',
     player:'بازیکن',type:'نوع',cashout:'Cash-out (تحویل)',arrow:'←'}
},
en:{
  appTitle:'Poker Ledger',
  authTitle:'Take a seat', signIn:'Sign in', signUp:'Sign up', namePh:'Your name (others see this)', emailPh:'Email', passPh:'Password (6+ characters)',
  needName:'Enter your name.', shortPass:'Password needs at least 6 characters.', checkEmail:'We sent you a confirmation email. Click the link, then sign in.',
  notConfirmed:'Your email isn’t confirmed yet. Click the link in your inbox.', badLogin:'Wrong email or password.', emailTaken:'That email is already registered. Use “Sign in”.',
  authFail:'Couldn’t sign in. Try again.', signOut:'Sign out',
  configT:'Setup incomplete', configP:'The Supabase URL and key aren’t set in config.js. See the README.',
  netDownT:'Server unreachable', netDownP:'Couldn’t reach Supabase. Check your connection; from Iran you may need a VPN.',
  tagline:'Open a room, log every buy-in and cash-out, and see who owes whom at the end of the night.',
  signedInAs:'Signed in as', you:'you', someone:'Someone',
  themeAuto:'◐ Auto', themeLight:'☀ Light', themeDark:'☾ Dark', langBtn:'فارسی',
  loadingT:'Setting up the table…', loadingP:'One moment.',
  signinT:'Sign in first', signinP:'You need to be signed in to Claude, and this page has to be shared with you.',
  noIdP:'Your account wasn’t recognised here. Sign in to Claude and open the page again.',
  viewOnlyNote:'You can view only. To create rooms, the page owner has to add you as an Editor.',
  rooms:'Rooms', roomNamePh:'New room name (e.g. Thursdays at Sina’s)', createRoom:'Create room',
  needRoomName:'Give the room a name.', noCreatePerm:'You can’t create rooms. The page owner has to add you as an Editor.', createFail:'The room wasn’t created. Try again.',
  roomsLoadFail:'Couldn’t load the rooms. Reopen the page.',
  noRoomsT:'No rooms yet', noRoomsP:'Type a room name above and press “Create room”. Everyone else can then follow the game live.',
  youAdmin:'You’re admin', adminIs:'Admin: ', lastGame:'Last game: ', created:'Created: ', nGames:n=>`${n} games`,
  back:'← Rooms', roomMissing:'Room not found', unitLabel:'Buy-in amount:',
  viewerNote:'Only this room’s admin can log buy-ins and cash-outs. You see everything live.',
  tabLive:'Tonight', tabHistory:'History', tabChart:'Performance',
  noGame:'No game in progress', startGame:'Start a new game',
  idleAdminLast:'Players from the last game are added for you.', idleAdminFirst:'Start the game and add players.',
  idleViewer:'When the admin starts a game, it shows up here live.', roomLoadFail:'Couldn’t load this room.',
  totalIn:'Total buy-ins', totalOut:'Total cash-outs', diff:'Difference',
  players:'Players', newPlayerPh:'New player name', add:'Add',
  noPlayersAdmin:'No players yet. Type the first name above.', noPlayers:'No players added yet.',
  del:'Remove', delBuy:'Remove this buy-in', buyins:n=>`Buy-ins (${n}):`, other:'Other amount', ok:'Add', cashout:'Cash-out:',
  balanced:'✓ Balanced. Cash-outs match buy-ins.',
  unbalanced:(more,amt,hint)=>`Doesn’t balance: cash-outs are ${amt} Toman ${more?'more':'less'} than buy-ins.${hint?' Someone miscounted chips or a buy-in is missing.':''}`,
  settleTitle:'Settle up', families:'Families', famHint:'Family members settle as one',
  famNamePh:'Family name (e.g. The Rezaeis)', makeFamily:'Create family', split:'Split up',
  allInFam:'Every player is already in a family.', pickTwo:'Pick at least two players.', needFamName:'Give the family a name.',
  pays:'pays →', cur:'Toman', noTx:'Once cash-outs are in, the payments show up here.',
  excel:'Export Excel', copy:'Copy result', copied:'Copied ✓', copyFail:'Couldn’t copy', endGame:'End game',
  saved:'Saved ✓', declined:'Cancelled', saveFail:'Not saved',
  saving:'Saving…', noPerm:'You can’t make changes here.', netFail:'Not saved. Check your connection.', closeFail:'Couldn’t end the game. Try again.',
  endEmpty:'Delete this game with no players?', endOk:'End the game and move it to history?', endDiff:a=>`The books are off by ${a} Toman. End the game anyway?`,
  yesEnd:'Yes, end it', no:'No',
  histEmptyT:'No finished games yet', histEmptyP:'Each game the admin ends is saved here.',
  nPlayers:n=>`${n} players`, nightWinner:'Winner: ',
  thPlayer:'Player', thBuys:'Buy-ins', thIn:'In', thOut:'Cash-out', thNet:'Net',
  delGame:'Delete game', delGameQ:'Delete this game from history for good?', yesDel:'Yes, delete', delFail:'Not deleted.',
  chartTitle:'Running total', chartSub:'Each player’s cumulative net since the first game, in thousands of Toman',
  chartEmpty:'The chart appears after the first finished game.', chartAria:'Cumulative net per player', tonight:'that night',
  boardTitle:'Leaderboard', thGames:'Games', thWins:'Wins', thTotal:'Total', thAvg:'Avg / night', thBest:'Best night', thWorst:'Worst night',
  txtTitle:'Poker result', txtFams:'Families:', txtPays:'Payments:',
  x:{amount:'Amount',time:'Time',sumIn:'Total in',net:'Net',totIn:'Total in',totOut:'Total out',balanced:'✓ Balanced',diff:'Difference',
     settle:'Settle up',payer:'Pays',payee:'Receives',amtCur:'Amount (Toman)',timeline:'Timeline',jalali:'Persian date',greg:'Date',
     player:'Player',type:'Type',cashout:'Cash-out',arrow:'→'}
}};
const store={get(k){try{return localStorage.getItem(k)}catch(e){return null}},set(k,v){try{localStorage.setItem(k,v)}catch(e){}}};
let lang=store.get('pk-lang')==='en'?'en':'fa';
let themePref=['light','dark'].includes(store.get('pk-theme'))?store.get('pk-theme'):'auto';
const t=(k,...a)=>{const v=I18N[lang][k];return typeof v==='function'?v(...a):(v??k);};
const X=k=>I18N[lang].x[k];
const LOC=()=>lang==='fa'?'fa-IR':'en-US';

function applyTheme(){
  let dark;
  if(themePref==='auto'){
    const host=document.documentElement.getAttribute('data-theme');
    dark=host?host==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;
  }else dark=themePref==='dark';
  document.documentElement.classList.toggle('light',!dark);
  const b=document.getElementById('themeBtn');
  if(b){b.textContent=t(themePref==='auto'?'themeAuto':themePref==='light'?'themeLight':'themeDark');}
}
try{window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',applyTheme);}catch(e){}
try{new MutationObserver(applyTheme).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});}catch(e){}

function applyStatic(){
  const w=document.getElementById('wrap');
  w.dir=lang==='fa'?'rtl':'ltr';w.lang=lang;document.documentElement.lang=lang;
  document.title=t('appTitle');
  document.querySelectorAll('[data-i18n]').forEach(el=>el.textContent=t(el.dataset.i18n));
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>el.placeholder=t(el.dataset.i18nPh));
  document.getElementById('langBtn').textContent=t('langBtn');
  document.getElementById('backBtn').textContent=t('back');
  applyTheme();
}

/* ================= helpers ================= */
const fa=n=>Math.round(n).toLocaleString(LOC());
const toEn=s=>String(s).replace(/[۰-۹]/g,d=>'۰۱۲۳۴۵۶۷۸۹'.indexOf(d)).replace(/[٠-٩]/g,d=>'٠١٢٣٤٥٦٧٨٩'.indexOf(d));
const num=s=>{const v=parseFloat(toEn(s).replace(/[^\d.]/g,''));return isNaN(v)?0:v};
const fmtInput=v=>v?Number(v).toLocaleString('en-US'):'';
const now=()=>Date.now();
const dFa=t=>t?(lang==='fa'?new Date(t).toLocaleDateString('fa-IR-u-ca-persian'):new Date(t).toLocaleDateString('en-GB',{day:'numeric',month:'short',year:'numeric'})):'';
const dFaShort=t=>t?(lang==='fa'?new Date(t).toLocaleDateString('fa-IR-u-ca-persian',{month:'numeric',day:'numeric'}):new Date(t).toLocaleDateString('en-GB',{day:'numeric',month:'short'})):'';
const dFaLong=t=>t?(lang==='fa'?new Date(t).toLocaleDateString('fa-IR-u-ca-persian',{weekday:'long',day:'numeric',month:'long'}):new Date(t).toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long'})):'';
const tFa=t=>t?new Date(t).toLocaleTimeString(LOC(),{hour:'2-digit',minute:'2-digit',hour12:false}):'';
const dXl=t=>{if(!t)return'';const o={};new Intl.DateTimeFormat('en-US-u-ca-persian-nu-latn',{year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(t).forEach(x=>o[x.type]=x.value);return`${o.year}/${o.month}/${o.day}`};
const gXl=t=>{if(!t)return'';const d=new Date(t),p=n=>String(n).padStart(2,'0');return`${d.getFullYear()}-${p(d.getMonth()+1)}-${p(d.getDate())}`};
const hXl=t=>{if(!t)return'';const d=new Date(t),p=n=>String(n).padStart(2,'0');return`${p(d.getHours())}:${p(d.getMinutes())}`};
const sgn=n=>(n>0?'+':'')+fa(n);
const cls=n=>n>0?'pos':n<0?'neg':'zero';
function esc(s){return String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]))}
const $=id=>document.getElementById(id);
const clone=o=>JSON.parse(JSON.stringify(o));
const newId=p=>p+Date.now().toString(36)+Math.random().toString(36).slice(2,6);

/* ================= game math (works on any game object) ================= */
function totals(g){
  const rows=(g.players||[]).map(p=>{const inn=(p.buys||[]).reduce((a,b)=>a+b.a,0);return{...p,inn,net:(p.out||0)-inn}});
  const tin=rows.reduce((a,r)=>a+r.inn,0), tout=rows.reduce((a,r)=>a+(r.out||0),0);
  return{rows,tin,tout,diff:tout-tin};
}
function units(g,rows){
  const fams=(g.families||[]).map(f=>({name:f.name,ids:f.members,fam:true,members:rows.filter(r=>f.members.includes(r.id)).map(r=>r.name),net:0}));
  const out=[];
  fams.forEach(f=>{f.net=rows.filter(r=>f.ids.includes(r.id)).reduce((a,r)=>a+r.net,0);if(f.members.length)out.push(f);});
  rows.forEach(r=>{if(!fams.some(f=>f.ids.includes(r.id)))out.push({name:r.name,members:[r.name],net:r.net,fam:false});});
  return out;
}
const SEP=()=>lang==='fa'?'، ':', ';
const label=u=>u.fam?`${u.name} (${u.members.join(SEP())})`:u.name;
function settle(g,rows){
  const us=units(g,rows);
  const cred=us.filter(r=>r.net>0).map(r=>({u:r,a:r.net})).sort((a,b)=>b.a-a.a);
  const debt=us.filter(r=>r.net<0).map(r=>({u:r,a:-r.net})).sort((a,b)=>b.a-a.a);
  const tx=[];let i=0,j=0;
  while(i<debt.length&&j<cred.length){
    const x=Math.min(debt[i].a,cred[j].a);
    if(x>0.5)tx.push({from:label(debt[i].u),to:label(cred[j].u),fu:debt[i].u,tu:cred[j].u,amt:x});
    debt[i].a-=x;cred[j].a-=x;
    if(debt[i].a<0.5)i++; if(cred[j].a<0.5)j++;
  }
  return tx;
}
const who=(u,c)=>u.fam?`<span class="who"><span class="${c}">${esc(u.name)}</span><span class="mem">${u.members.map(esc).join(SEP())}</span></span>`:`<span class="${c}">${esc(u.name)}</span>`;
function resultText(g){
  const{rows}=totals(g);const tx=settle(g,rows);
  return[t('txtTitle')+' '+dFa(g.startedAt)+':',...rows.map(r=>`${r.name}: ${sgn(r.net)}`),
    ...((g.families||[]).length?['',t('txtFams'),...units(g,rows).filter(u=>u.fam).map(u=>`${label(u)}: ${sgn(u.net)}`)]:[]),
    '',t('txtPays'),...tx.map(x=>`${x.from} ${X('arrow')} ${x.to}: ${fa(x.amt)} ${t('cur')}`)].join('\n');
}
async function copyText(btn,txt){
  try{await navigator.clipboard.writeText(txt);btn.textContent=t('copied');}
  catch(e){btn.textContent=t('copyFail');}
  setTimeout(()=>btn.textContent=t('copy'),1500);
}

async function buildXlsx(g){
  const{rows,tin,tout,diff}=totals(g);
  const D=lang==='fa'?dXl:gXl;
  const ev=[];
  rows.forEach(r=>{
    r.buys.forEach((b,i)=>ev.push({t:b.t,name:r.name,type:'Buy-in '+(i+1),a:b.a}));
    if(r.out||r.outT)ev.push({t:r.outT,name:r.name,type:X('cashout'),a:r.out||0});
  });
  ev.sort((x,y)=>(x.t||0)-(y.t||0));
  const first=ev.find(e=>e.t)?.t||now();

  const C={felt:'FF14593F',felt2:'FF1D7552',mint:'FFE3F1E8',zebra:'FFF4F9F6',gold:'FFC8952D',goldL:'FFFBF1DC',
           ink:'FF17211C',muted:'FF5D6B63',line:'FFC9D6CE',white:'FFFFFFFF',gain:'FF137A43',loss:'FFB3261E'};
  const F='Tahoma', MONEY='#,##0', NET='[Color10]+#,##0;[Red]-#,##0;0';
  const fill=c=>({type:'pattern',pattern:'solid',fgColor:{argb:c}});
  const thin={style:'thin',color:{argb:C.line}};
  const box={top:thin,bottom:thin,left:thin,right:thin};
  const center={horizontal:'center',vertical:'middle'};
  const style=(cell,o)=>{for(const k in o)if(o[k]!==undefined)cell[k]=o[k];return cell;};

  const wb=new ExcelJS.Workbook();wb.creator='Poker Ledger';wb.created=new Date();

  /* ---------- Sheet 1: grid ---------- */
  const ws=wb.addWorksheet('Buy-ins',{views:[{rightToLeft:lang==='fa',state:'frozen',xSplit:1,ySplit:3,showGridLines:false}],properties:{defaultRowHeight:20}});
  const nC=1+rows.length*2, lastCol=Math.max(nC,3);
  ws.getColumn(1).width=16;
  rows.forEach((r,i)=>{ws.getColumn(2+i*2).width=14;ws.getColumn(3+i*2).width=8;});

  ws.mergeCells(1,1,1,lastCol);
  style(ws.getCell(1,1),{value:'♠ Poker Night   —   '+(lang==='fa'?dXl(first)+'   ('+gXl(first)+')':gXl(first)),
    font:{name:F,size:14,bold:true,color:{argb:C.white}},fill:fill(C.felt),alignment:center});
  ws.getRow(1).height=32;

  style(ws.getCell(2,1),{value:'',fill:fill(C.felt2)});
  style(ws.getCell(3,1),{value:'',fill:fill(C.mint),border:box});
  rows.forEach((r,i)=>{
    const c=2+i*2;
    ws.mergeCells(2,c,2,c+1);
    style(ws.getCell(2,c),{value:r.name,font:{name:F,size:12,bold:true,color:{argb:C.white}},fill:fill(C.felt2),alignment:center,border:box});
    style(ws.getCell(3,c),{value:X('amount'),font:{name:F,size:9,bold:true,color:{argb:C.felt}},fill:fill(C.mint),alignment:center,border:box});
    style(ws.getCell(3,c+1),{value:X('time'),font:{name:F,size:9,bold:true,color:{argb:C.felt}},fill:fill(C.mint),alignment:center,border:box});
  });
  ws.getRow(2).height=26;

  const maxB=Math.max(0,...rows.map(r=>r.buys.length));
  for(let k=0;k<maxB;k++){
    const R=4+k, z=k%2?fill(C.zebra):fill(C.white);
    style(ws.getCell(R,1),{value:'Buy-in '+(k+1),font:{name:F,bold:true,color:{argb:C.ink}},fill:z,alignment:center,border:box});
    rows.forEach((r,i)=>{
      const c=2+i*2,b=r.buys[k];
      style(ws.getCell(R,c),{value:b?b.a:null,numFmt:MONEY,font:{name:F,color:{argb:C.ink}},fill:z,alignment:center,border:box});
      style(ws.getCell(R,c+1),{value:b?hXl(b.t):null,font:{name:F,size:9,color:{argb:C.muted}},fill:z,alignment:center,border:box});
    });
  }
  const T=4+maxB, colL=c=>ws.getColumn(c).letter;
  const sumRow=(R,label,bg,fg)=>style(ws.getCell(R,1),{value:label,font:{name:F,bold:true,color:{argb:fg}},fill:fill(bg),alignment:center,border:box});
  sumRow(T,X('sumIn'),C.mint,C.felt);
  sumRow(T+1,'Cash-out',C.goldL,C.ink);
  sumRow(T+2,X('net'),C.felt,C.white);
  const top={...box,top:{style:'medium',color:{argb:C.felt}}};
  rows.forEach((r,i)=>{
    const c=2+i*2,L=colL(c);
    style(ws.getCell(T,c),{value:maxB?{formula:`SUM(${L}4:${L}${T-1})`,result:r.inn}:r.inn,numFmt:MONEY,font:{name:F,bold:true,color:{argb:C.felt}},fill:fill(C.mint),alignment:center,border:top});
    style(ws.getCell(T,c+1),{value:r.buys.length+'×',font:{name:F,size:9,color:{argb:C.muted}},fill:fill(C.mint),alignment:center,border:top});
    style(ws.getCell(T+1,c),{value:r.out||0,numFmt:MONEY,font:{name:F,bold:true,color:{argb:C.ink}},fill:fill(C.goldL),alignment:center,border:box});
    style(ws.getCell(T+1,c+1),{value:hXl(r.outT)||null,font:{name:F,size:9,color:{argb:C.muted}},fill:fill(C.goldL),alignment:center,border:box});
    ws.mergeCells(T+2,c,T+2,c+1);
    style(ws.getCell(T+2,c),{value:{formula:`${L}${T+1}-${L}${T}`,result:r.net},numFmt:NET,font:{name:F,size:12,bold:true},fill:fill(C.white),alignment:center,border:{...box,bottom:{style:'medium',color:{argb:C.felt}}}});
  });
  ws.getCell(T+2,1).border={...box,bottom:{style:'medium',color:{argb:C.felt}}};
  [T,T+1,T+2].forEach(R=>ws.getRow(R).height=24);
  ws.getRow(T+2).height=28;

  const chk=T+4;
  ws.mergeCells(chk,1,chk,lastCol);
  const ok=Math.abs(diff)<1;
  style(ws.getCell(chk,1),{value:`${X('totIn')}: ${tin.toLocaleString('en-US')}    |    ${X('totOut')}: ${tout.toLocaleString('en-US')}    |    ${ok?X('balanced'):X('diff')+': '+diff.toLocaleString('en-US')}`,
    font:{name:F,size:10,bold:true,color:{argb:ok?C.gain:C.loss}},fill:fill(ok?C.mint:C.goldL),alignment:center});
  ws.getRow(chk).height=24;

  /* ---------- helper for list sheets ---------- */
  const listSheet=(name,head,widths,data,fmt)=>{
    const w=wb.addWorksheet(name,{views:[{rightToLeft:lang==='fa',state:'frozen',ySplit:2,showGridLines:false}]});
    widths.forEach((x,i)=>w.getColumn(i+1).width=x);
    w.mergeCells(1,1,1,head.length);
    style(w.getCell(1,1),{value:name+'   —   '+D(first),font:{name:F,size:13,bold:true,color:{argb:C.white}},fill:fill(C.felt),alignment:center});
    w.getRow(1).height=30;
    head.forEach((h,i)=>style(w.getCell(2,i+1),{value:h,font:{name:F,bold:true,color:{argb:C.white}},fill:fill(C.felt2),alignment:center,border:box}));
    w.getRow(2).height=24;
    data.forEach((row,k)=>{
      const z=k%2?fill(C.zebra):fill(C.white);
      row.forEach((v,i)=>style(w.getCell(3+k,i+1),{value:v,font:{name:F,color:{argb:C.ink},...(fmt[i]?.font||{})},numFmt:fmt[i]?.numFmt,fill:z,alignment:center,border:box}));
      w.getRow(3+k).height=22;
    });
    if(!data.length){w.mergeCells(3,1,3,head.length);style(w.getCell(3,1),{value:'—',alignment:center,font:{name:F,color:{argb:C.muted}}});}
    return w;
  };

  const tx=settle(g,rows);
  listSheet(X('settle'),[X('payer'),'',X('payee'),X('amtCur')],[30,5,30,16],
    tx.map(q=>[q.from,X('arrow'),q.to,Math.round(q.amt)]),
    [{font:{bold:true,color:{argb:C.loss}}},{font:{color:{argb:C.muted}}},{font:{bold:true,color:{argb:C.gain}}},{numFmt:MONEY,font:{bold:true}}]);

  listSheet(X('timeline'),[X('jalali'),X('greg'),X('time'),X('player'),X('type'),X('amtCur')],[13,13,9,16,18,16],
    ev.map(e=>[dXl(e.t),gXl(e.t),hXl(e.t),e.name,e.type,e.a]),
    [{font:{color:{argb:C.muted}}},{font:{color:{argb:C.muted}}},{},{font:{bold:true}},{},{numFmt:MONEY}]);

  const buf=await wb.xlsx.writeBuffer();
  return{buf,name:'poker-'+D(first).replace(/\//g,'-')+'.xlsx'};
}


/* ================= app state (Supabase) ================= */
const CFG=window.POKER_CONFIG||{};
let sb=null,me={id:null,name:''};
let roomsList=[];          // rooms visible to everyone signed in
let cur=null;              // open room: {id,room,games,chan}
let game=null;             // local copy of the live game
let tab='live';
let dirty=false,writing=false,saveTimer=null,unitTimer=null,lobbyTimer=null;
let gateKeys=null,lobbyChan=null,authMode='in';

const isAdmin=()=>!!(cur&&cur.room&&me.id&&cur.room.owner===me.id);
const mapRoom=r=>({id:r.id,name:r.name,owner:r.owner,ownerName:r.owner_name||'',unit:Number(r.unit)||0,createdAt:Number(r.created_at)||0,lastAt:Number(r.last_at)||0,games:r.games_count||0});
const mapGame=g=>({id:g.id,status:g.status,startedAt:Number(g.started_at)||0,closedAt:Number(g.closed_at)||0,unit:Number(g.unit)||0,players:g.players||[],families:g.families||[]});
const gameRow=g=>({status:g.status,started_at:g.startedAt,closed_at:g.closedAt||null,unit:g.unit,players:g.players,families:g.families});

function show(which){['gate','auth','lobby','room'].forEach(k=>$(k).hidden=k!==which);}
function gate(title,text,keys){gateKeys=keys||null;$('gateTitle').textContent=title;$('gateText').textContent=text;show('gate');}

/* ================= boot ================= */
applyStatic();gate(t('loadingT'),t('loadingP'),['loadingT','loadingP']);
$('themeBtn').onclick=()=>{themePref=themePref==='auto'?'light':themePref==='light'?'dark':'auto';store.set('pk-theme',themePref);applyTheme();};
$('langBtn').onclick=()=>{lang=lang==='fa'?'en':'fa';store.set('pk-lang',lang);applyStatic();setAuthMode(authMode);refreshAll();};
function refreshAll(){
  $('meName').textContent=me.name||t('you');
  if(!$('lobby').hidden)renderLobby();
  if(cur){renderRoomHead();renderAll();}
  if(!$('gate').hidden&&gateKeys)gate(t(gateKeys[0]),t(gateKeys[1]),gateKeys);
}
(async()=>{
  if(!CFG.url||!CFG.key||CFG.url.includes('YOUR-')||!window.supabase){gate(t('configT'),t('configP'),['configT','configP']);return;}
  sb=window.supabase.createClient(CFG.url,CFG.key);
  if(typeof ExcelJS!=='undefined')$('xlsBtn').hidden=false;
  sb.auth.onAuthStateChange((ev,s)=>{
    // never await Supabase calls inside this callback; hop out first
    setTimeout(()=>{
      if(s&&s.user){if(s.user.id!==me.id)signedIn(s.user);}
      else if(me.id||ev==='SIGNED_OUT'||ev==='INITIAL_SESSION')signedOut();
    },0);
  });
})().catch(()=>gate(t('netDownT'),t('netDownP'),['netDownT','netDownP']));

/* ================= auth ================= */
function setAuthMode(m){
  authMode=m;
  document.querySelectorAll('#authTabs button').forEach(b=>b.setAttribute('aria-selected',b.dataset.mode===m));
  $('authName').hidden=m!=='up';
  $('authPass').autocomplete=m==='up'?'new-password':'current-password';
  $('authSubmit').textContent=t(m==='up'?'signUp':'signIn');
  $('authMsg').textContent='';
}
$('authTabs').addEventListener('click',e=>{const b=e.target.closest('button[data-mode]');if(b)setAuthMode(b.dataset.mode);});
setAuthMode('in');
$('authForm').addEventListener('submit',async e=>{
  e.preventDefault();if(!sb)return;
  const email=$('authEmail').value.trim(),password=$('authPass').value,name=$('authName').value.trim();
  if(authMode==='up'&&!name){$('authMsg').textContent=t('needName');return;}
  if(password.length<6){$('authMsg').textContent=t('shortPass');return;}
  $('authSubmit').disabled=true;$('authMsg').textContent='…';
  try{
    if(authMode==='up'){
      const{data,error}=await sb.auth.signUp({email,password,options:{data:{name}}});
      if(error)throw error;
      $('authMsg').textContent=data.session?'':t('checkEmail');
    }else{
      const{error}=await sb.auth.signInWithPassword({email,password});
      if(error)throw error;
      $('authMsg').textContent='';
    }
  }catch(err){
    const m=String(err&&err.message||'');
    $('authMsg').textContent=/confirm/i.test(m)?t('notConfirmed'):/invalid/i.test(m)?t('badLogin'):/registered|exists/i.test(m)?t('emailTaken'):/fetch|network/i.test(m)?t('netDownP'):t('authFail');
  }
  $('authSubmit').disabled=false;
});
$('signOutBtn').onclick=()=>{flushNow();sb&&sb.auth.signOut();};

function signedIn(u){
  me={id:u.id,name:(u.user_metadata&&u.user_metadata.name)||String(u.email||'').split('@')[0]};
  $('meName').textContent=me.name;$('meAvatar').textContent=(me.name||'?').trim().charAt(0).toUpperCase();
  $('meline').hidden=false;$('authPass').value='';
  show('lobby');renderLobby();loadRooms();
  if(!lobbyChan)lobbyChan=sb.channel('lobby').on('postgres_changes',{event:'*',schema:'public',table:'rooms'},()=>{clearTimeout(lobbyTimer);lobbyTimer=setTimeout(loadRooms,300);}).subscribe();
}
function signedOut(){
  leaveRoom();me={id:null,name:''};roomsList=[];
  if(lobbyChan){sb.removeChannel(lobbyChan);lobbyChan=null;}
  $('meline').hidden=true;show('auth');
}

/* ================= lobby ================= */
async function loadRooms(){
  const{data,error}=await sb.from('rooms').select('*').order('created_at',{ascending:false}).limit(500);
  if(error){$('roomList').innerHTML=`<div class="idle" style="grid-column:1/-1">${t('roomsLoadFail')}</div>`;return;}
  roomsList=data.map(mapRoom);renderLobby();
}
function renderLobby(){
  const list=[...roomsList].sort((a,b)=>(b.owner===me.id)-(a.owner===me.id)||(b.lastAt||b.createdAt)-(a.lastAt||a.createdAt));
  const el=$('roomList');
  if(!list.length){el.innerHTML=`<div class="idle" style="grid-column:1/-1"><span class="big">${t('noRoomsT')}</span>${t('noRoomsP')}</div>`;return;}
  el.innerHTML=list.map(r=>`<button class="room-card" type="button" data-room="${esc(r.id)}">
      ${r.owner===me.id?`<span class="badge">${t('youAdmin')}</span>`:''}
      <span class="rname">${esc(r.name)}</span>
      <span class="rmeta">${t('adminIs')}${esc(r.owner===me.id?t('you'):(r.ownerName||t('someone')))}</span>
      <span class="rmeta">${r.lastAt?t('lastGame')+dFa(r.lastAt):t('created')+dFa(r.createdAt)}${r.games?' · '+t('nGames',fa(r.games)):''}</span>
    </button>`).join('');
}
$('roomList').addEventListener('click',e=>{const b=e.target.closest('.room-card');if(b)openRoom(b.dataset.room);});
$('createForm').addEventListener('submit',async e=>{
  e.preventDefault();
  const name=$('roomName').value.trim();
  if(!name){$('createNote').textContent=t('needRoomName');return;}
  const{data,error}=await sb.from('rooms').insert({name,owner:me.id,owner_name:me.name,unit:200000,created_at:now()}).select().single();
  if(error){$('createNote').textContent=t('createFail');return;}
  $('roomName').value='';$('createNote').textContent='';
  roomsList.unshift(mapRoom(data));openRoom(data.id);
});

/* ================= room ================= */
function openRoom(id){
  leaveRoom();
  cur={id,room:roomsList.find(r=>r.id===id)||null,games:[],chan:null};game=null;dirty=false;
  $('room').classList.toggle('readonly',!isAdmin());
  $('roomTitle').textContent=cur.room?cur.room.name:'…';$('roomOwner').textContent='';
  setTab('live');show('room');
  $('players').classList.add('first');setTimeout(()=>$('players').classList.remove('first'),900);
  loadRoom(id);loadGames(id);
  cur.chan=sb.channel('room-'+id)
    .on('postgres_changes',{event:'*',schema:'public',table:'games'},p=>{
      const rid=(p.new&&p.new.room_id)||(p.old&&p.old.room_id);
      if(!rid||rid===id)loadGames(id);
    })
    .on('postgres_changes',{event:'UPDATE',schema:'public',table:'rooms',filter:'id=eq.'+id},()=>loadRoom(id))
    .subscribe();
}
async function loadRoom(id){
  const{data}=await sb.from('rooms').select('*').eq('id',id).maybeSingle();
  if(!cur||cur.id!==id)return;
  cur.room=data?mapRoom(data):null;
  $('room').classList.toggle('readonly',!isAdmin());
  renderRoomHead();renderAll();
}
async function loadGames(id){
  const{data,error}=await sb.from('games').select('*').eq('room_id',id).order('started_at',{ascending:false}).limit(500);
  if(!cur||cur.id!==id)return;
  if(error){$('idleText').textContent=t('roomLoadFail');return;}
  cur.games=data.map(mapGame);
  const live=cur.games.find(g=>g.status==='live');
  if(!dirty&&!writing)game=live?clone(live):null;
  renderAll();
}
function leaveRoom(){if(cur&&cur.chan)sb.removeChannel(cur.chan);cur=null;game=null;}
$('backBtn').onclick=()=>{flushNow();leaveRoom();show('lobby');loadRooms();};
function renderRoomHead(){
  if(!cur)return;
  const r=cur.room;
  if(!r){$('roomTitle').textContent=t('roomMissing');return;}
  $('roomTitle').textContent=r.name;
  $('roomOwner').textContent=t('adminIs')+(isAdmin()?t('you'):(r.ownerName||t('someone')));
  if(document.activeElement!==$('unit'))$('unit').value=fmtInput(r.unit);
  $('unitView').textContent=fa(r.unit||0)+' '+t('cur');
}
function setTab(k){
  tab=k;
  document.querySelectorAll('.tabs button[data-tab]').forEach(b=>b.setAttribute('aria-selected',b.dataset.tab===k));
  ['live','history','chart'].forEach(x=>$('pane-'+x).hidden=x!==k);
  renderAll();
}
document.querySelector('#room .tabs').addEventListener('click',e=>{const b=e.target.closest('button[data-tab]');if(b)setTab(b.dataset.tab);});
function renderAll(){if(!cur)return;if(tab==='live')renderLive();else if(tab==='history')renderHistory();else renderChart();}

/* unit (room setting) */
$('unit').addEventListener('input',()=>{
  if(!isAdmin())return;
  const v=num($('unit').value);clearTimeout(unitTimer);
  unitTimer=setTimeout(()=>{sb.from('rooms').update({unit:v}).eq('id',cur.id).then(()=>{});},500);
});
$('unit').addEventListener('blur',()=>$('unit').value=fmtInput(num($('unit').value)));
const unitNow=()=>num($('unit').value)||(cur.room&&cur.room.unit)||0;

/* ================= saving the live game ================= */
function save(){dirty=true;setSaveState(t('saving'));clearTimeout(saveTimer);saveTimer=setTimeout(flush,350);}
function flushNow(){if(dirty){clearTimeout(saveTimer);flush();}}
async function flush(){
  if(writing||!cur||!game||!game.id)return;
  writing=true;dirty=false;
  const body=clone(game);
  try{
    const{data,error}=await sb.from('games').update(gameRow(body)).eq('id',body.id).select('id');
    if(error)throw error;
    setSaveState(data&&data.length?t('saved'):t('noPerm'));
  }catch(e){setSaveState(t('netFail'));}
  writing=false;
  if(dirty)flush();
}
function setSaveState(s){$('saveState').textContent=isAdmin()?s:'';}
function touch(){save();renderLive();}

/* ================= live tab ================= */
const SUITS=['♠','♥','♣','♦'];
function renderLive(){
  if(!cur)return;
  const adm=isAdmin();
  $('idle').hidden=!!game;$('liveBody').hidden=!game;
  if(!game){
    const last=cur.games.find(g=>g.status==='closed');
    $('idleText').textContent=adm?(last?t('idleAdminLast'):t('idleAdminFirst')):t('idleViewer');
    return;
  }
  const g=game;
  // keep focus/typing across re-render
  const ae=document.activeElement,fid=ae&&ae.id,fval=ae&&ae.value,fsel=ae&&ae.selectionStart;
  const{rows,tin,tout,diff}=totals(g);
  $('summary').innerHTML=`
    <div class="stat"><span class="lbl">${t('totalIn')}</span><b>${fa(tin)}</b></div>
    <div class="stat"><span class="lbl">${t('totalOut')}</span><b>${fa(tout)}</b></div>
    <div class="stat"><span class="lbl">${t('diff')}</span><b style="color:${Math.abs(diff)<1?'var(--ok-felt)':'var(--bad-felt)'}">${sgn(diff)}</b></div>`;
  const pl=$('players');
  pl.innerHTML=rows.length?'':`<div class="empty">${adm?t('noPlayersAdmin'):t('noPlayers')}</div>`;
  rows.forEach((r,idx)=>{
    const d=document.createElement('div');d.className='player'+(idx%2?' red':'');d.dataset.suit=SUITS[idx%4];
    d.innerHTML=`
      <div class="pname">${esc(r.name)} ${adm?`<button class="ghost" data-del="${r.id}" aria-label="${t('del')} ${esc(r.name)}">${t('del')}</button>`:''}</div>
      <div class="net ${cls(r.net)}">${sgn(r.net)}</div>
      <div class="row2">
        <div class="buy">
          <span class="lbl">${t('buyins',fa(r.buys.length))}</span>
          <span class="chips">${r.buys.map((b,i)=>`<span class="chip" title="${dFa(b.t)} ${tFa(b.t)}">${fa(b.a)} <small>${tFa(b.t)}</small>${adm?`<button data-rm="${r.id}:${i}" aria-label="${t('delBuy')}">×</button>`:''}</span>`).join('')}</span>
          ${adm?`<button data-buy="${r.id}">+ Buy-in</button>
          <input id="custom-${r.id}" placeholder="${t('other')}" inputmode="numeric">
          <button data-custom="${r.id}">${t('ok')}</button>`:''}
        </div>
        <label class="out"><span class="lbl">${t('cashout')}</span>
          ${adm?`<input id="out-${r.id}" data-out="${r.id}" inputmode="numeric" placeholder="${fa(0)}" value="${fmtInput(r.out)}">`:`<b>${r.out?fa(r.out):'—'}</b>`}
          ${r.outT?`<small style="color:var(--muted)">${tFa(r.outT)}</small>`:''}</label>
      </div>`;
    pl.appendChild(d);
  });
  const ch=$('check');
  if(!rows.length)ch.innerHTML='';
  else if(Math.abs(diff)<1)ch.innerHTML=`<span class="ok">${t('balanced')}</span>`;
  else ch.innerHTML=`<div class="alert">${t('unbalanced',diff>0,fa(Math.abs(diff)),!!tout)}</div>`;
  renderFamilies(g,rows,adm);
  const tx=settle(g,rows);
  $('settle').innerHTML=tx.length?tx.map(x=>`<li>${who(x.fu,'from')}<span class="arrow">${t('pays')}</span>${who(x.tu,'to')}<span class="amt">${fa(x.amt)} ${t('cur')}</span></li>`).join('')
    :`<li class="empty">${t('noTx')}</li>`;
  if(fid&&$(fid)&&fid!=='unit'){const el=$(fid);el.focus();if(typeof fval==='string'&&el.value!==fval&&fid.startsWith('custom-'))el.value=fval;try{el.setSelectionRange(fsel,fsel)}catch(e){}}
}
function renderFamilies(g,rows,adm){
  const fams=g.families||[];
  $('famBox').hidden=!adm&&!fams.length;
  $('famList').innerHTML=fams.map(f=>{
    const ms=rows.filter(r=>f.members.includes(r.id));const net=ms.reduce((a,r)=>a+r.net,0);
    return`<div class="fam-item"><span class="fname">${esc(f.name)}</span><span class="mem">${ms.map(r=>esc(r.name)).join(SEP())}</span><span class="net ${cls(net)}">${sgn(net)}</span>${adm?`<button type="button" class="ghost" data-famdel="${f.id}">${t('split')}</button>`:''}</div>`;
  }).join('');
  $('famList').hidden=!fams.length;
  if(!adm)return;
  const taken=new Set(fams.flatMap(f=>f.members));
  const free=rows.filter(r=>!taken.has(r.id));
  const keep=new Set([...document.querySelectorAll('#famPicks input:checked')].map(i=>+i.value));
  $('famPicks').innerHTML=free.length?free.map(r=>`<label class="pick"><input type="checkbox" id="pick-${r.id}" value="${r.id}" ${keep.has(r.id)?'checked':''}>${esc(r.name)}</label>`).join('')
    :`<span class="mem">${t('allInFam')}</span>`;
  $('famForm').querySelector('.row').hidden=free.length<2;
}
const nextPid=()=>Math.max(0,...game.players.map(p=>p.id),...(game.families||[]).map(f=>f.id))+1;

$('startBtn').onclick=async()=>{
  if(!isAdmin()||game)return;
  const last=cur.games.find(g=>g.status==='closed');
  const g={status:'live',startedAt:now(),unit:unitNow(),players:[],families:[]};
  if(last)(last.players||[]).forEach((p,i)=>g.players.push({id:i+1,name:p.name,buys:[],out:0,outT:null}));
  $('startBtn').disabled=true;
  const{data,error}=await sb.from('games').insert({...gameRow(g),room_id:cur.id}).select().single();
  $('startBtn').disabled=false;
  if(error){$('idleText').textContent=t('netFail');return;}
  game=mapGame(data);renderLive();
};
$('addForm').addEventListener('submit',e=>{
  e.preventDefault();if(!isAdmin()||!game)return;
  const n=$('newName').value.trim();if(!n)return;
  const u=unitNow();
  game.players.push({id:nextPid(),name:n,buys:u?[{a:u,t:now()}]:[],out:0,outT:null});
  $('newName').value='';touch();
});
$('players').addEventListener('click',e=>{
  const btn=e.target.closest('button');if(!btn||!isAdmin()||!game)return;
  const find=id=>game.players.find(p=>p.id==id);
  if(btn.dataset.buy){find(btn.dataset.buy).buys.push({a:unitNow(),t:now()});touch();}
  else if(btn.dataset.custom){const inp=$('custom-'+btn.dataset.custom);const v=num(inp.value);if(v>0){find(btn.dataset.custom).buys.push({a:v,t:now()});inp.value='';touch();}}
  else if(btn.dataset.rm){const[id,i]=btn.dataset.rm.split(':');find(id).buys.splice(+i,1);touch();}
  else if(btn.dataset.del){const id=+btn.dataset.del;game.players=game.players.filter(p=>p.id!==id);game.families.forEach(f=>f.members=f.members.filter(m=>m!==id));game.families=game.families.filter(f=>f.members.length>1);touch();}
});
$('players').addEventListener('keydown',e=>{
  if(e.key==='Enter'&&e.target.id.startsWith('custom-')){e.preventDefault();document.querySelector(`[data-custom="${e.target.id.slice(7)}"]`).click();}
  if(e.key==='Enter'&&e.target.dataset.out){e.preventDefault();e.target.blur();}
});
$('players').addEventListener('change',e=>{
  if(!isAdmin()||!game||!e.target.dataset.out)return;
  const p=game.players.find(p=>p.id==e.target.dataset.out);p.out=num(e.target.value);p.outT=now();touch();
});
$('famForm').addEventListener('submit',e=>{
  e.preventDefault();if(!isAdmin()||!game)return;
  const ids=[...document.querySelectorAll('#famPicks input:checked')].map(i=>+i.value);
  const name=$('famName').value.trim();
  if(ids.length<2){$('famMsg').textContent=t('pickTwo');return;}
  if(!name){$('famMsg').textContent=t('needFamName');return;}
  game.families.push({id:nextPid(),name,members:ids});
  $('famName').value='';$('famMsg').textContent='';
  document.querySelectorAll('#famPicks input').forEach(i=>i.checked=false);
  touch();
});
$('famList').addEventListener('click',e=>{
  const b=e.target.closest('[data-famdel]');if(!b||!isAdmin()||!game)return;
  game.families=game.families.filter(f=>f.id!=b.dataset.famdel);touch();
});
$('copyBtn').onclick=()=>game&&copyText($('copyBtn'),resultText(game));
$('xlsBtn').onclick=()=>game&&exportGame(game,$('xlsBtn'));
$('endBtn').onclick=()=>{
  if(!game)return;const{diff,rows}=totals(game);
  $('confirmText').textContent=!rows.length?t('endEmpty'):Math.abs(diff)<1?t('endOk'):t('endDiff',fa(Math.abs(diff)));
  $('confirmBox').hidden=false;
};
$('noEnd').onclick=()=>$('confirmBox').hidden=true;
$('yesEnd').onclick=async()=>{
  $('confirmBox').hidden=true;if(!game||!isAdmin())return;
  const g=game;clearTimeout(saveTimer);
  while(writing)await new Promise(r=>setTimeout(r,100));
  dirty=false;game=null;renderLive();
  try{
    if(!g.players.length){const{error}=await sb.from('games').delete().eq('id',g.id);if(error)throw error;loadGames(cur.id);return;}
    g.status='closed';g.closedAt=now();
    const{error}=await sb.from('games').update(gameRow(g)).eq('id',g.id);
    if(error)throw error;
    const closedCount=cur.games.filter(x=>x.status==='closed'&&x.id!==g.id).length+1;
    await sb.from('rooms').update({last_at:g.startedAt,games_count:closedCount}).eq('id',cur.id);
    await loadGames(cur.id);setTab('history');
  }catch(e){game=g;g.status='live';renderLive();setSaveState(t('closeFail'));}
};

async function exportGame(g,btn){
  if(typeof ExcelJS==='undefined')return;btn.disabled=true;
  try{
    const{buf,name}=await buildXlsx(g);
    const url=URL.createObjectURL(new Blob([buf],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'}));
    const a=document.createElement('a');a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();
    setTimeout(()=>URL.revokeObjectURL(url),4000);btn.textContent=t('saved');
  }catch(e){btn.textContent=t('saveFail');}
  btn.disabled=false;setTimeout(()=>btn.textContent=t('excel'),1800);
}

/* ================= history tab ================= */
function renderHistory(){
  const closed=cur.games.filter(g=>g.status==='closed');
  const el=$('histList');
  if(!closed.length){el.innerHTML=`<div class="idle"><span class="big">${t('histEmptyT')}</span>${t('histEmptyP')}</div>`;return;}
  const open=new Set([...el.querySelectorAll('details[open]')].map(d=>d.dataset.g));
  el.innerHTML=closed.map(g=>{
    const{rows,tin}=totals(g);const top=[...rows].sort((a,b)=>b.net-a.net)[0];const tx=settle(g,rows);
    return`<details class="hgame" data-g="${esc(g.id)}" ${open.has(g.id)?'open':''}>
      <summary>
        <span class="hdate">${dFaShort(g.startedAt)}<small>${esc(dFaLong(g.startedAt).split(' ')[0]||'')}</small></span>
        <span class="hsum">${t('nPlayers',fa(rows.length))}${top&&top.net>0?` · ${t('nightWinner')}<b>${esc(top.name)}</b> <span class="pos">${sgn(top.net)}</span>`:''}</span>
        <span class="hpot">${fa(tin)}</span>
      </summary>
      <div class="hbody">
        <div class="tablewrap"><table class="ntable"><thead><tr><th>${t('thPlayer')}</th><th>${t('thBuys')}</th><th class="num">${t('thIn')}</th><th class="num">${t('thOut')}</th><th class="num">${t('thNet')}</th></tr></thead><tbody>
          ${[...rows].sort((a,b)=>b.net-a.net).map(r=>`<tr><td>${esc(r.name)}</td><td>${fa(r.buys.length)}</td><td class="num">${fa(r.inn)}</td><td class="num">${fa(r.out||0)}</td><td class="num ${cls(r.net)}"><b>${sgn(r.net)}</b></td></tr>`).join('')}
        </tbody></table></div>
        ${tx.length?`<div class="tx">${tx.map(x=>`<span>${who(x.fu,'from')} ${X('arrow')} ${who(x.tu,'to')} : <b>${fa(x.amt)}</b> ${t('cur')}</span>`).join('')}</div>`:''}
        <div class="hbtns">
          ${typeof ExcelJS!=='undefined'?`<button class="primary" data-hx="${esc(g.id)}">${t('excel')}</button>`:''}
          <button data-hc="${esc(g.id)}">${t('copy')}</button>
          ${isAdmin()?`<button class="ghost" data-hdel="${esc(g.id)}">${t('delGame')}</button>`:''}
        </div>
        <div class="alert" data-hconfirm="${esc(g.id)}" hidden>${t('delGameQ')}
          <div style="display:flex;gap:8px;margin-top:8px"><button class="primary" data-hyes="${esc(g.id)}">${t('yesDel')}</button><button data-hno="${esc(g.id)}">${t('no')}</button></div></div>
      </div></details>`;
  }).join('');
}
$('histList').addEventListener('click',async e=>{
  const b=e.target.closest('button');if(!b)return;
  const gid=b.dataset.hx||b.dataset.hc||b.dataset.hdel||b.dataset.hyes||b.dataset.hno;
  const g=cur.games.find(x=>x.id===gid);if(!g)return;
  const box=$('histList').querySelector(`[data-hconfirm="${CSS.escape(gid)}"]`);
  if(b.dataset.hx)exportGame(g,b);
  else if(b.dataset.hc)copyText(b,resultText(g));
  else if(b.dataset.hdel)box.hidden=false;
  else if(b.dataset.hno)box.hidden=true;
  else if(b.dataset.hyes&&isAdmin()){const{error}=await sb.from('games').delete().eq('id',gid);if(error)box.textContent=t('delFail');else loadGames(cur.id);}
});

/* ================= performance tab ================= */
const PALETTE=['#2a78d6','#eb6834','#1baf7a','#eda100','#e87ba4','#008300','#4a3aa7','#e34948'];
function perf(){
  const closed=cur.games.filter(g=>g.status==='closed').sort((a,b)=>a.startedAt-b.startedAt);
  const stats={},order=[];
  closed.forEach(g=>totals(g).rows.forEach(r=>{
    if(!stats[r.name]){stats[r.name]={name:r.name,games:0,total:0,best:-Infinity,worst:Infinity,wins:0};order.push(r.name);}
    const s=stats[r.name];s.games++;s.total+=r.net;s.best=Math.max(s.best,r.net);s.worst=Math.min(s.worst,r.net);if(r.net>0)s.wins++;
  }));
  // colour follows the player (first appearance), capped at 8 drawn lines: most games played wins a slot
  const drawn=[...order].sort((a,b)=>stats[b].games-stats[a].games||order.indexOf(a)-order.indexOf(b)).slice(0,8);
  const color={};order.filter(n=>drawn.includes(n)).forEach((n,i)=>color[n]=PALETTE[i]);
  const series=drawn.map(n=>{let c=0;return{name:n,color:color[n],pts:closed.map(g=>{const r=totals(g).rows.find(x=>x.name===n);const night=r?r.net:null;c+=night||0;return{c,night,played:!!r};})};});
  return{closed,stats,order,series,color};
}
function niceStep(range,count){const raw=range/count,p=Math.pow(10,Math.floor(Math.log10(raw))),m=raw/p;return(m<=1?1:m<=2?2:m<=2.5?2.5:m<=5?5:10)*p;}
function renderChart(){
  const{closed,stats,order,series,color}=perf();
  const box=$('chartBox');
  if(!closed.length){
    $('legend').innerHTML='';
    box.innerHTML=`<div class="empty">${t('chartEmpty')}</div>`;
    $('board').innerHTML='';return;
  }
  $('legend').innerHTML=series.map(s=>`<span><i style="background:${s.color}"></i>${esc(s.name)}</span>`).join('');
  const W=640,H=300,L=58,R=series.length<=4?92:20,T=14,B=36,iw=W-L-R,ih=H-T-B;
  const vals=series.flatMap(s=>s.pts.map(p=>p.c/1000));vals.push(0);
  let lo=Math.min(...vals),hi=Math.max(...vals);if(hi===lo){hi+=1;lo-=1;}
  const step=niceStep(hi-lo,4);lo=Math.floor(lo/step)*step;hi=Math.ceil(hi/step)*step;
  const n=closed.length,x=i=>L+(n===1?iw/2:i*iw/(n-1)),y=v=>T+(hi-v)/(hi-lo)*ih;
  let svg=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${t('chartAria')}">`;
  for(let v=lo;v<=hi+1e-9;v+=step){
    const yy=y(v).toFixed(1);
    svg+=`<line x1="${L}" x2="${W-R}" y1="${yy}" y2="${yy}" stroke="${Math.abs(v)<1e-9?'#7a7062':'#e2d9c6'}" stroke-width="${Math.abs(v)<1e-9?1.5:1}" ${Math.abs(v)<1e-9?'':'stroke-dasharray="3 4"'}/>`;
    svg+=`<text x="${L-8}" y="${(+yy+4)}" text-anchor="end" font-size="11" fill="#7a7062">${fa(v)}</text>`;
  }
  const every=Math.max(1,Math.ceil(n/8));
  closed.forEach((g,i)=>{if(i%every===0||i===n-1)svg+=`<text x="${x(i).toFixed(1)}" y="${H-12}" text-anchor="middle" font-size="11" fill="#7a7062">${dFaShort(g.startedAt)}</text>`;});
  series.forEach(s=>{
    const d=s.pts.map((p,i)=>`${i?'L':'M'}${x(i).toFixed(1)},${y(p.c/1000).toFixed(1)}`).join('');
    svg+=`<path d="${d}" fill="none" stroke="${s.color}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>`;
    s.pts.forEach((p,i)=>{if(p.played)svg+=`<circle cx="${x(i).toFixed(1)}" cy="${y(p.c/1000).toFixed(1)}" r="4" fill="${s.color}" stroke="#fbf7ee" stroke-width="2"/>`;});
  });
  if(series.length<=4){
    const labs=series.map(s=>({s,y:y(s.pts[n-1].c/1000)})).sort((a,b)=>a.y-b.y);
    for(let i=1;i<labs.length;i++)if(labs[i].y-labs[i-1].y<14)labs[i].y=labs[i-1].y+14;
    labs.forEach(l=>svg+=`<text x="${W-R+8}" y="${(l.y+4).toFixed(1)}" font-size="12" font-weight="700" fill="#1d1a16" text-anchor="start" unicode-bidi="plaintext">${esc(l.s.name)}</text>`);
  }
  svg+=`<line id="xhair" x1="0" x2="0" y1="${T}" y2="${T+ih}" stroke="#1d1a16" stroke-width="1" opacity="0"/>`;
  svg+=`<rect x="${L-10}" y="0" width="${iw+20}" height="${H}" fill="transparent" id="hit"/></svg><div class="tip" id="tip" hidden></div>`;
  box.innerHTML=svg;
  const svgEl=box.querySelector('svg'),tip=$('tip'),xh=$('xhair');
  const move=ev=>{
    const rc=svgEl.getBoundingClientRect(),sx=(ev.clientX-rc.left)*W/rc.width;
    const i=n===1?0:Math.max(0,Math.min(n-1,Math.round((sx-L)/(iw/(n-1)))));
    xh.setAttribute('x1',x(i));xh.setAttribute('x2',x(i));xh.setAttribute('opacity','.35');
    const rowsHtml=series.map(s=>({s,p:s.pts[i]})).sort((a,b)=>b.p.c-a.p.c).map(({s,p})=>
      `<div class="tr"><span><i style="background:${s.color}"></i> ${esc(s.name)}${p.played?` <small style="opacity:.7">(${t('tonight')} ${sgn(p.night)})</small>`:''}</span><span>${sgn(p.c)}</span></div>`).join('');
    tip.dir=lang==='fa'?'rtl':'ltr';tip.innerHTML=`<div class="tt">${esc(dFaLong(closed[i].startedAt))}</div>${rowsHtml}`;tip.hidden=false;
    const px=x(i)*rc.width/W,bw=box.clientWidth,tw=tip.offsetWidth;
    tip.style.left=Math.min(Math.max(0,px+12+tw>bw?px-tw-12:px+12),bw-tw)+'px';tip.style.top='8px';
  };
  $('hit').addEventListener('pointermove',move);$('hit').addEventListener('pointerdown',move);
  $('hit').addEventListener('pointerleave',()=>{tip.hidden=true;xh.setAttribute('opacity','0');});
  const list=order.map(nm=>stats[nm]).sort((a,b)=>b.total-a.total);
  $('board').innerHTML=`<thead><tr><th></th><th>${t('thPlayer')}</th><th>${t('thGames')}</th><th>${t('thWins')}</th><th class="num">${t('thTotal')}</th><th class="num">${t('thAvg')}</th><th class="num">${t('thBest')}</th><th class="num">${t('thWorst')}</th></tr></thead><tbody>`+
    list.map((s,i)=>`<tr><td class="rank">${fa(i+1)}</td><td>${color[s.name]?`<i style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${color[s.name]};margin-inline-end:6px"></i>`:''}${esc(s.name)}</td><td>${fa(s.games)}</td><td>${fa(s.wins)}</td>
      <td class="num ${cls(s.total)}"><b>${sgn(s.total)}</b></td><td class="num ${cls(s.total/s.games)}">${sgn(s.total/s.games)}</td><td class="num pos">${sgn(s.best)}</td><td class="num neg">${sgn(s.worst)}</td></tr>`).join('')+'</tbody>';
}
window.addEventListener('beforeunload',flushNow);
