const projects = [
  {
    "key": "arcana",
    "title": "아르카나",
    "display": "ARCANA",
    "type": "UNREAL ENGINE 5.4 · TEAM PROJECT 02",
    "cover": "assets/arcana/main-menu.png",
    "preview": [
      "assets/arcana/01_home.gif",
      "assets/arcana/02_chat_jihee.gif",
      "assets/arcana/03_calendar.gif"
    ],
    "tags": [
      "C++",
      "Blueprint",
      "UMG",
      "Subsystem",
      "HTTP · JSON",
      "DataTable"
    ],
    "video": "",
    "kicker": "게임 속 일상을 연결하는 휴대폰",
    "desc": "아르카나 팀 프로젝트에서 휴대폰 UI와 앱 기능을 구현했습니다. UMG·블루프린트와 휴대폰 관련 C++를 연결해 대화, 일정 확인, 장소 이동, 사진 촬영을 하나의 휴대폰에서 사용할 수 있도록 구성했습니다. C++로는 기능 함수를 구현하고 블루프린트로는 C++로 구현된 함수를 연결하여 사용하는 구조를 사용하였습니다. Diversion·Discord·Notion·스프레드시트로 변경 사항을 공유하며 콘텐츠를 통합했습니다.",
    "notes": [
      "담당: 홈·메신저·캘린더·지도·호감도·갤러리·카메라·화면 설정",
      "C++ Subsystem에서 데이터와 기능 처리, UMG·Blueprint에서 화면 구성",
      "Diversion 기반 버전 관리, Discord·Notion·스프레드시트 협업"
    ],
    "scene": "#24172d",
    "ink": "#fff5f7",
    "accent": "#ff78a8",
    "role": "휴대폰 UI · 앱 기능",
    "focus": "C++ · UMG · Blueprint",
    "mobilePreviewMode": "portrait"
  },
  {
    "key": "rpg",
    "title": "언실드 RPG",
    "display": "UNSHIELDED RPG",
    "type": "UNREAL ENGINE 5.4.4 · 3인 제작 · 4주",
    "cover": "assets/images/rpg-overview.png",
    "preview": [
      "assets/videos/rpg-airbreath-play.gif",
      "assets/videos/rpg-tornado-play.gif",
      "assets/videos/rpg-superarmor-play.gif"
    ],
    "tags": [
      "Blueprint",
      "Behavior Tree",
      "DataTable",
      "Niagara",
      "SVN",
      "Notion"
    ],
    "video": "https://youtu.be/eZbv3sPX9Xo?si=Lp---S_0J7X1L-Tb",
    "kicker": "몬스터·NPC·스토리를 맡은 팀 RPG",
    "desc": "4주 동안 제작한 3인 정통 RPG 프로젝트입니다. 저는 일반/보스 몬스터, NPC, 퀘스트와 스토리 흐름을 담당했습니다. SVN·Discord·Notion·스프레드시트로 변경 사항을 공유하며 콘텐츠를 통합했습니다.",
    "notes": [
      "담당: 일반 몬스터·보스·NPC·스토리",
      "스테이지별 일반 몬스터와 보스 구성",
      "SVN 기반 버전 관리, Discord·Notion 협업"
    ],
    "scene": "#5f3026",
    "ink": "#fff3dc",
    "accent": "#ffc36e",
    "role": "몬스터 · NPC · 스토리",
    "focus": "Behavior Tree · DataTable"
  },
  {
    "key": "soul",
    "title": "C++ 소울 게임",
    "display": "C++ SOUL GAME",
    "type": "UNREAL ENGINE 5.4.4 · 1인 제작",
    "cover": "assets/images/soul-overview.png",
    "preview": [
      "assets/videos/soul-combo-play.gif",
      "assets/videos/soul-justdodge-play.gif",
      "assets/videos/soul-summon-play.gif"
    ],
    "tags": [
      "C++",
      "Enhanced Input",
      "Behavior Tree",
      "State Tree",
      "DataTable"
    ],
    "video": "https://youtu.be/7zkvwNFyI7s?si=SZ6avf-XBMMUHzIr",
    "kicker": "C++를 중심으로 설계한 소울라이크",
    "desc": "공통 BaseCharacter를 만들고 플레이어·일반 몬스터·보스를 자식 클래스로 확장했습니다. 전투의 핵심 로직은 C++로 작성하고, 블루프린트는 에셋과 세부 값 조정에 사용했습니다.",
    "notes": [
      "BaseCharacter → Player / Monster 계층 구조",
      "C++ 80%, Blueprint 20%로 역할 분리",
      "플레이어와 몬스터의 공통 기능을 베이스에 집중"
    ],
    "scene": "#11161d",
    "ink": "#f3f5f7",
    "accent": "#ff625e",
    "role": "전투 · AI · 보스 패턴",
    "focus": "C++ · State Tree · Input"
  },
  {
    "key": "network",
    "title": "1vs1 카드 배틀",
    "display": "NETWORK BATTLE",
    "type": "UNREAL ENGINE 5.4 · 3인 제작",
    "cover": "assets/images/network-overview.png",
    "preview": [
      "assets/images/network-overview.png",
      "assets/images/network-hand-card-update.png",
      "assets/images/network-action-queue.png"
    ],
    "tags": [
      "Blueprint",
      "Networking",
      "Server RPC",
      "Client RPC",
      "GameState",
      "PlayerController"
    ],
    "video": "https://youtu.be/ml2ENxkPXpk",
    "kicker": "서버 권한 중심으로 구성한 턴 전투",
    "desc": "GameState에서 팀 캐릭터와 전투 시작 조건을 관리하고, BP_TurnPlayerController에서 타깃 선택·스킬 요청·액션 큐·카드 상태를 처리하는 방식으로 네트워크 전투 흐름을 구성했습니다. 단순히 멀티플레이가 된다는 결과보다, 서버와 각 클라이언트가 어떤 책임을 갖는지 보여주는 로직을 중심으로 정리했습니다.",
    "notes": [
      "GameState: 팀 캐릭터 등록·전투 시작·턴 우선순위 관리",
      "TurnPlayerController: 서버 스킬 요청·액션 큐·카드 상태 처리",
      "Owning Client RPC와 Server RPC를 용도에 맞게 분리"
    ],
    "scene": "#173557",
    "ink": "#eef8ff",
    "accent": "#63d5ff",
    "role": "턴 전투 · 동기화",
    "focus": "Replication · RPC"
  },
  {
    "key": "vr",
    "title": "VR 방탈출",
    "display": "VR ESCAPE",
    "type": "UNREAL ENGINE 5.4.4 · 1인 제작",
    "cover": "assets/images/vr-overview.png",
    "preview": [
      "assets/videos/vr-puzzle1-play.gif",
      "assets/videos/vr-puzzle2-play.gif",
      "assets/videos/vr-puzzle3-play.gif"
    ],
    "tags": [
      "C++",
      "Blueprint",
      "Oculus VR",
      "UMG",
      "Niagara"
    ],
    "video": "https://youtu.be/UYV-2LxlilY?si=ug2M52ZKUwMmlfyC",
    "kicker": "VR 초보자도 바로 즐기는 4개 퍼즐",
    "desc": "C++과 블루프린트를 혼합해 제작한 간단한 VR 방탈출 게임입니다. VR 튜토리얼처럼 조작 안내를 배치하고, 그랩·이동·던지기 같은 기본 동작을 자연스럽게 익히도록 퍼즐을 구성했습니다.",
    "notes": [
      "Oculus VR 기반 1인 제작",
      "짧고 가볍게 한 판 즐기는 구조",
      "총 4개의 단계형 퍼즐 배치"
    ],
    "scene": "#51466f",
    "ink": "#f8f5ff",
    "accent": "#c8a8ff",
    "role": "그랩 · 퍼즐 · 인터랙션",
    "focus": "VR · C++ · Blueprint"
  },
  {
    "key": "monkey",
    "title": "원숭이 슈팅 게임",
    "display": "MONKEY SHOOTER",
    "type": "UNREAL ENGINE 5.4.4 · 1인 제작",
    "cover": "assets/images/monkey-overview.png",
    "preview": [
      "assets/videos/monkey-gameplay-play.gif",
      "assets/videos/monkey-destroy-play.gif",
      "assets/videos/monkey-pickup-play.gif"
    ],
    "tags": [
      "Blueprint",
      "Line Trace",
      "UMG",
      "Collision",
      "Gameplay Logic"
    ],
    "video": "https://youtu.be/HSRcO-d8vxs?si=j7crxd6yCKkhDm9I",
    "kicker": "바나나 총으로 목표를 파괴하는 FPS",
    "desc": "디폴트 폰과 라인 트레이스를 활용해 제작한 1인칭 슈팅 게임입니다. 슈팅·아이템 획득·체력/속도 변화·목표물 파괴를 하나의 게임 루프로 연결했습니다.",
    "notes": [
      "언리얼 엔진 학습 2개월 차 제작",
      "디폴트 폰 기반 1인칭 슈팅",
      "블루프린트로 게임플레이 로직 구성"
    ],
    "scene": "#6b5b20",
    "ink": "#fff7d7",
    "accent": "#ffe65e",
    "role": "슈팅 · 픽업 · HUD",
    "focus": "Line Trace · UMG"
  },
  {
    "key": "draw",
    "title": "10초 드로우 게임",
    "display": "10 SECOND DRAW",
    "type": "UNREAL ENGINE 5.4.4 · 1인 제작",
    "cover": "assets/images/draw-overview.png",
    "preview": [
      "assets/videos/draw-field-play.gif",
      "assets/videos/draw-card-play.gif",
      "assets/videos/draw-hover-play.gif"
    ],
    "tags": [
      "UMG",
      "Blueprint",
      "Widget Animation",
      "UI Interaction"
    ],
    "video": "https://youtu.be/ov-J3BMVgFs?si=DvRL9jB_GB8YHD1a",
    "kicker": "유희왕 콘셉트의 10초 타이밍 게임",
    "desc": "카드를 누른 상태에서 마음속으로 10초를 세고, 타이밍에 맞춰 마우스를 놓는 간단한 UMG 게임입니다. 결과에 따라 승리 엔딩을 보여주도록 게임 루프를 구성했습니다.",
    "notes": [
      "언리얼 엔진 학습 1개월 차 제작",
      "UMG만으로 구성한 2D 게임",
      "타이밍 결과에 따라 엔딩 연출 분기"
    ],
    "scene": "#7d2e28",
    "ink": "#fff4ed",
    "accent": "#ff9f7d",
    "role": "UI 애니메이션 · 게임 루프",
    "focus": "UMG · Widget Animation"
  }
];

const projectList = document.querySelector('#project-list');
const body = document.body;
const bgImage = document.querySelector('#scene-bg-image');
const giantWord = document.querySelector('#giant-word');
const previewMedia = document.querySelector('#preview-media');
const previewCount = document.querySelector('#preview-media-count');
const projectType = document.querySelector('#project-type');
const projectTitle = document.querySelector('#project-title');
const projectCaption = document.querySelector('#project-caption');
const projectTags = document.querySelector('#project-tags');
const railCount = document.querySelector('#rail-count');
const quickRole = document.querySelector('#quick-role');
const quickFocus = document.querySelector('#quick-focus');

const previewThemes = {
  arcana:{
    bg:'#35142d',surface:'#551d43',surface2:'#6a2553',
    text:'#fff7fb',muted:'#efbfd3',line:'#9d4e79',
    accent:'#ff4f91',accent2:'#b76cff',accentText:'#260817',
    header:'rgba(53,20,45,.96)',media:'#180911',next:'#421a36',
    shadow:'rgba(38,0,22,.42)',
    hero:'radial-gradient(circle at 82% 18%,rgba(255,79,145,.34),transparent 35%),radial-gradient(circle at 13% 82%,rgba(183,108,255,.22),transparent 31%),linear-gradient(145deg,#35142d,#5e2149)'
  },
  rpg:{
    bg:'#d8b36f',surface:'#f1dca8',surface2:'#d5ad67',
    text:'#2f1b0c',muted:'#6f4e2e',line:'#a77c3f',
    accent:'#c7462c',accent2:'#e2a21e',accentText:'#fff7e6',
    header:'rgba(232,207,157,.97)',media:'#251409',next:'#caae76',
    shadow:'rgba(71,43,16,.22)',
    hero:'radial-gradient(circle at 80% 20%,rgba(226,162,30,.39),transparent 34%),radial-gradient(circle at 17% 78%,rgba(199,70,44,.16),transparent 29%),linear-gradient(145deg,#efd9a4,#c99e59)'
  },
  soul:{
    bg:'#1b0b0b',surface:'#321312',surface2:'#45191a',
    text:'#fff1eb',muted:'#d7aba2',line:'#7b3732',
    accent:'#ff5a43',accent2:'#a51f2a',accentText:'#180806',
    header:'rgba(27,11,11,.97)',media:'#080504',next:'#24100f',
    shadow:'rgba(0,0,0,.44)',
    hero:'radial-gradient(circle at 78% 24%,rgba(255,90,67,.31),transparent 33%),radial-gradient(circle at 16% 76%,rgba(165,31,42,.23),transparent 30%),linear-gradient(145deg,#1b0b0b,#351311)'
  },
  network:{
    bg:'#07325f',surface:'#104c80',surface2:'#17639d',
    text:'#effbff',muted:'#abdcef',line:'#3681af',
    accent:'#52e3ff',accent2:'#ff9b42',accentText:'#061722',
    header:'rgba(7,50,95,.96)',media:'#06182b',next:'#103c69',
    shadow:'rgba(0,17,38,.4)',
    hero:'radial-gradient(circle at 80% 18%,rgba(82,227,255,.32),transparent 34%),radial-gradient(circle at 18% 78%,rgba(255,155,66,.15),transparent 30%),linear-gradient(145deg,#07325f,#155487)'
  },
  vr:{
    bg:'#d8caf4',surface:'#f2e9ff',surface2:'#c7b1ee',
    text:'#2c1742',muted:'#6b5680',line:'#a487d0',
    accent:'#7048df',accent2:'#e374cf',accentText:'#ffffff',
    header:'rgba(216,202,244,.97)',media:'#21152f',next:'#cdbce9',
    shadow:'rgba(75,46,113,.2)',
    hero:'radial-gradient(circle at 78% 20%,rgba(227,116,207,.38),transparent 33%),radial-gradient(circle at 12% 75%,rgba(112,72,223,.22),transparent 30%),linear-gradient(145deg,#eee5ff,#c8b3ef)'
  },
  monkey:{
    bg:'#d7ca65',surface:'#f4e7a0',surface2:'#c6b542',
    text:'#29270b',muted:'#625d2b',line:'#95862f',
    accent:'#6f861d',accent2:'#f08b2e',accentText:'#fffde9',
    header:'rgba(225,214,112,.97)',media:'#25230c',next:'#cabb59',
    shadow:'rgba(58,52,9,.21)',
    hero:'radial-gradient(circle at 80% 20%,rgba(240,139,46,.33),transparent 34%),radial-gradient(circle at 15% 76%,rgba(111,134,29,.24),transparent 29%),linear-gradient(145deg,#eee4a2,#c4b244)'
  },
  draw:{
    bg:'#e79c83',surface:'#ffd8c9',surface2:'#e78368',
    text:'#3a1c18',muted:'#744439',line:'#bd6f59',
    accent:'#e74633',accent2:'#7447dc',accentText:'#ffffff',
    header:'rgba(239,172,148,.97)',media:'#2b1715',next:'#db9279',
    shadow:'rgba(74,35,29,.2)',
    hero:'radial-gradient(circle at 82% 18%,rgba(116,71,220,.26),transparent 33%),radial-gradient(circle at 15% 78%,rgba(231,70,51,.30),transparent 31%),linear-gradient(145deg,#f4c2ae,#df846b)'
  }
};

function applyPreviewTheme(key){
  const t=previewThemes[key] || previewThemes.arcana;
  const vars={
    '--preview-bg':t.bg,'--preview-surface':t.surface,'--preview-surface2':t.surface2,
    '--preview-text':t.text,'--preview-muted':t.muted,'--preview-line':t.line,
    '--preview-accent':t.accent,'--preview-accent2':t.accent2,'--preview-accent-text':t.accentText,
    '--preview-header':t.header,'--preview-media':t.media,'--preview-next':t.next,
    '--preview-shadow':t.shadow,'--preview-hero-bg':t.hero
  };
  Object.entries(vars).forEach(([name,value])=>overlay.style.setProperty(name,value));
  overlay.dataset.project=key;
}

function youtubeVideoId(url){
  if(!url) return '';
  try{
    const parsed=new URL(url);
    const host=parsed.hostname.replace(/^www\./,'');
    if(host==='youtu.be') return parsed.pathname.split('/').filter(Boolean)[0] || '';
    const queryId=parsed.searchParams.get('v');
    if(queryId) return queryId;
    const parts=parsed.pathname.split('/').filter(Boolean);
    if(parts[0]==='embed' || parts[0]==='shorts') return parts[1] || '';
    return parts.at(-1) || '';
  }catch(error){
    return '';
  }
}

const overlay = document.querySelector('#project-preview');
const profile = document.querySelector('#profile-panel');

let currentProject = 0;
let currentPreviewMedia = 0;
let currentDetailMedia = 0;
let wheelLocked = false;

// Media transitions can overlap when users click quickly.
// Tokens make sure only the newest request is allowed to update the DOM.
let projectSwitchToken = 0;
let smallPreviewToken = 0;
let detailMediaToken = 0;

const previewWindow = document.querySelector('.preview-window');
const detailMediaStage = document.querySelector('.detail-media-stage');

function waitForMedia(src){
  return new Promise(resolve=>{
    const image = new Image();
    let finished = false;
    const done = ()=>{
      if(finished) return;
      finished = true;
      resolve(src);
    };
    image.onload = done;
    image.onerror = done;
    image.src = src;
    if(image.complete) done();
  });
}

function warmProjectMedia(project){
  const work = ()=>project.preview.forEach(src=>waitForMedia(src));
  if('requestIdleCallback' in window){
    requestIdleCallback(work,{timeout:1200});
  } else {
    setTimeout(work,300);
  }
}

const esc = value => String(value).replace(/[&<>"']/g, char => ({
  '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
}[char]));

function buildProjectList(){
  projectList.innerHTML = projects.map((p,index)=>`
    <button class="project-button ${index===0?'active':''} ${p.display.length >= 13 ? 'long-title' : ''}" data-index="${index}" type="button">
      <span class="num">${String(index+1).padStart(2,'0')}</span>
      <span class="name">${esc(p.display)}</span>
    </button>
  `).join('');

  projectList.querySelectorAll('.project-button').forEach(button=>{
    const index = Number(button.dataset.index);
    button.addEventListener('mouseenter',()=>selectProject(index));
    button.addEventListener('focus',()=>selectProject(index));
    button.addEventListener('click',()=>{
      const touchLike = window.matchMedia('(hover: none), (pointer: coarse)').matches;
      if(touchLike){
        selectProject(index);
      } else {
        openProject(index);
      }
    });
  });
}

function setCssTheme(p){
  document.documentElement.style.setProperty('--scene',p.scene);
  document.documentElement.style.setProperty('--ink',p.ink);
  document.documentElement.style.setProperty('--accent',p.accent);
}

function updatePreviewFrameMode(project){
  const portrait = project.mobilePreviewMode === 'portrait';
  previewWindow?.classList.toggle('portrait-media', portrait);
}

async function selectProject(index, animate=true){
  const token = ++projectSwitchToken;
  ++smallPreviewToken; // cancel any pending GIF change from the previous project

  currentProject = (index + projects.length) % projects.length;
  currentPreviewMedia = 0;
  const p = projects[currentProject];
  setCssTheme(p);
  updatePreviewFrameMode(p);

  // Text and active state can change immediately.
  projectType.textContent = p.type;
  projectTitle.textContent = p.title;
  projectCaption.textContent = p.kicker;
  projectTags.innerHTML = p.tags.map(tag=>`<span>${esc(tag)}</span>`).join('');
  railCount.textContent = `${String(currentProject+1).padStart(2,'0')} / ${String(projects.length).padStart(2,'0')}`;
  quickRole.textContent = p.role;
  quickFocus.textContent = p.focus;
  document.querySelectorAll('.project-button').forEach((button,i)=>button.classList.toggle('active',i===currentProject));

  const topTechnical = document.querySelector('#top-technical');
  if (topTechnical) topTechnical.href = `technical.html?project=${p.key}#${p.key}`;

  // Hide the previous visual completely while the newly selected media is prepared.
  previewWindow?.classList.add('media-loading');
  previewMedia.style.opacity = '0';
  previewMedia.style.visibility = 'hidden';

  if(animate){
    bgImage.style.opacity = '.12';
    bgImage.style.transform = 'scale(1.09)';
    giantWord.style.opacity = '0';
    giantWord.style.transform = 'translateX(-35px)';
  }

  await Promise.all([
    waitForMedia(p.cover),
    waitForMedia(p.preview[0])
  ]);

  // A newer project selection happened while loading: do nothing.
  if(token !== projectSwitchToken) return;

  bgImage.src = p.cover;
  bgImage.alt = `${p.title} 배경`;
  giantWord.textContent = p.display;

  previewMedia.src = p.preview[0];
  previewMedia.alt = `${p.title} 대표 미디어`;
  previewCount.textContent = `01 / ${String(p.preview.length).padStart(2,'0')}`;

  previewMedia.style.visibility = 'visible';
  previewWindow?.classList.remove('media-loading');

  requestAnimationFrame(()=>{
    if(token !== projectSwitchToken) return;
    bgImage.style.opacity = '.58';
    bgImage.style.transform = 'scale(1.035)';
    giantWord.style.opacity = '1';
    giantWord.style.transform = 'translateX(0)';
    previewMedia.style.opacity = '1';
  });

  // Prepare the other two GIFs after the first frame is visible.
  warmProjectMedia(p);
}

async function moveSmallPreview(step){
  const p = projects[currentProject];
  const projectAtRequest = currentProject;
  const token = ++smallPreviewToken;

  currentPreviewMedia = (currentPreviewMedia + step + p.preview.length) % p.preview.length;
  const mediaIndex = currentPreviewMedia;
  const src = p.preview[mediaIndex];

  previewWindow?.classList.add('media-loading');
  previewMedia.style.opacity = '0';
  previewMedia.style.visibility = 'hidden';

  await waitForMedia(src);

  // Ignore an older request if the user clicked again or changed project.
  if(token !== smallPreviewToken || projectAtRequest !== currentProject) return;

  previewMedia.src = src;
  previewMedia.alt = `${p.title} 미디어 ${mediaIndex+1}`;
  previewCount.textContent = `${String(mediaIndex+1).padStart(2,'0')} / ${String(p.preview.length).padStart(2,'0')}`;

  previewMedia.style.visibility = 'visible';
  previewWindow?.classList.remove('media-loading');
  requestAnimationFrame(()=>{
    if(token === smallPreviewToken) previewMedia.style.opacity = '1';
  });
}

document.querySelector('#preview-prev').addEventListener('click',e=>{e.stopPropagation();moveSmallPreview(-1)});
document.querySelector('#preview-next').addEventListener('click',e=>{e.stopPropagation();moveSmallPreview(1)});

function renderDetail(index){
  ++detailMediaToken;
  currentProject = index;
  currentDetailMedia = 0;
  const p = projects[index];
  applyPreviewTheme(p.key);
  document.querySelector('#preview-index').textContent = `PROJECT ${String(index+1).padStart(2,'0')} / ${String(projects.length).padStart(2,'0')}`;
  document.querySelector('#preview-type').textContent = p.type;
  document.querySelector('#detail-title').textContent = p.title;
  document.querySelector('#detail-kicker').textContent = p.kicker;
  document.querySelector('#detail-desc').textContent = p.desc;
  document.querySelector('#detail-notes').innerHTML = p.notes.map((note,i)=>`<div class="detail-note"><b>${String(i+1).padStart(2,'0')}</b><span>${esc(note)}</span></div>`).join('');
  document.querySelector('#preview-tags').innerHTML = p.tags.map(tag=>`<span>${esc(tag)}</span>`).join('');
  document.querySelector('#technical-link').href = `technical.html?project=${p.key}#${p.key}`;

  // YouTube playback lives inside the media panel for consistency with Technical Detail.
  const demo = document.querySelector('#demo-link');
  if(demo) demo.hidden = true;

  // Keep an external YouTube link visible inside the media panel for every
  // project that owns a YouTube gameplay video, regardless of the selected GIF.
  const persistentYoutube = document.querySelector('#detail-youtube-open');
  const videoId = youtubeVideoId(p.video);
  if(persistentYoutube){
    if(videoId){
      persistentYoutube.href = p.video;
      persistentYoutube.textContent = '▶ YOUTUBE에서 보기 ↗';
      persistentYoutube.hidden = false;
      persistentYoutube.dataset.persistent = 'true';
    }else{
      persistentYoutube.href = '#';
      persistentYoutube.hidden = true;
      persistentYoutube.dataset.persistent = 'false';
    }
  }

  const next = projects[(index+1)%projects.length];
  document.querySelector('#next-name').textContent = next.title;
  renderDetailMedia();
}

function detailMediaItems(project){
  const items=[];
  const videoId=youtubeVideoId(project.video);
  if(videoId) items.push({type:'youtube',src:project.video,id:videoId,label:'GAMEPLAY VIDEO / YOUTUBE'});
  project.preview.forEach(src=>items.push({type:'image',src,label:src.split('/').pop()}));
  return items;
}

async function renderDetailMedia(){
  const p = projects[currentProject];
  const projectAtRequest = currentProject;
  const items=detailMediaItems(p);
  if(currentDetailMedia >= items.length) currentDetailMedia=0;
  const mediaIndex = currentDetailMedia;
  const item = items[mediaIndex];
  const token = ++detailMediaToken;
  const img = document.querySelector('#detail-media');
  const iframe = document.querySelector('#detail-youtube');
  const youtubeOpen = document.querySelector('#detail-youtube-open');

  detailMediaStage?.classList.add('media-loading');
  img.style.opacity = '0';
  img.style.visibility = 'hidden';
  iframe.hidden=true;
  iframe.removeAttribute('src');

  // The YouTube link is persistent for projects with a gameplay video.
  if(youtubeVideoId(p.video)){
    youtubeOpen.href = p.video;
    youtubeOpen.textContent = '▶ YOUTUBE에서 보기 ↗';
    youtubeOpen.hidden = false;
  }else{
    youtubeOpen.hidden = true;
  }

  if(item.type==='youtube'){
    if(token !== detailMediaToken || projectAtRequest !== currentProject) return;
    iframe.src=`https://www.youtube-nocookie.com/embed/${item.id}?rel=0&modestbranding=1`;
    iframe.title=`${p.title} 플레이 영상`;
    iframe.hidden=false;
    youtubeOpen.href=item.src;
    youtubeOpen.textContent='▶ YOUTUBE에서 보기 ↗';
    youtubeOpen.hidden=false;
    document.querySelector('#detail-media-label').textContent = `VIDEO 01 / ${String(items.length).padStart(2,'0')}`;
    document.querySelector('#detail-media-name').textContent = item.label;
    detailMediaStage?.classList.remove('media-loading');
  }else{
    await waitForMedia(item.src);
    if(token !== detailMediaToken || projectAtRequest !== currentProject || mediaIndex !== currentDetailMedia) return;
    img.src = item.src;
    img.alt = `${p.title} 미디어 ${mediaIndex+1}`;
    img.style.visibility = 'visible';
    detailMediaStage?.classList.remove('media-loading');
    requestAnimationFrame(()=>{ if(token === detailMediaToken) img.style.opacity = '1'; });
    document.querySelector('#detail-media-label').textContent = `MEDIA ${String(mediaIndex+1).padStart(2,'0')} / ${String(items.length).padStart(2,'0')}`;
    document.querySelector('#detail-media-name').textContent = item.label;
  }

  document.querySelector('#detail-dots').innerHTML = items.map((m,i)=>`<button type="button" class="detail-dot ${i===mediaIndex?'active':''} ${m.type==='youtube'?'video-dot':''}" data-media-index="${i}" aria-label="${m.type==='youtube'?'플레이 영상':'미디어 '+(i+1)}"></button>`).join('');
  document.querySelectorAll('.detail-dot').forEach(dot=>dot.addEventListener('click',()=>{
    currentDetailMedia = Number(dot.dataset.mediaIndex);
    renderDetailMedia();
  }));
}

function moveDetail(step){
  const items=detailMediaItems(projects[currentProject]);
  currentDetailMedia = (currentDetailMedia + step + items.length) % items.length;
  renderDetailMedia();
}

document.querySelector('#detail-prev').addEventListener('click',()=>moveDetail(-1));
document.querySelector('#detail-next').addEventListener('click',()=>moveDetail(1));

function resetOverlayScroll(){
  overlay.scrollTop = 0;
  if (typeof overlay.scrollTo === 'function') overlay.scrollTo({top:0,left:0,behavior:'auto'});
}

function openProject(index=currentProject){
  resetOverlayScroll();
  renderDetail(index);
  overlay.classList.add('open');
  overlay.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
  requestAnimationFrame(resetOverlayScroll);
}
function closeProject(){
  overlay.classList.remove('open');
  overlay.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
  selectProject(currentProject,false);
  setTimeout(resetOverlayScroll,180);
}

document.querySelector('#open-preview').addEventListener('click',()=>openProject());
document.querySelector('.preview-back').addEventListener('click',closeProject);
document.querySelector('#next-project').addEventListener('click',()=>{
  const next=(currentProject+1)%projects.length;
  resetOverlayScroll();
  renderDetail(next);
  requestAnimationFrame(resetOverlayScroll);
});

function openProfile(){
  profile.scrollTop = 0;
  profile.classList.add('open');
  profile.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
  requestAnimationFrame(()=>profile.scrollTop=0);
}
function closeProfile(){
  profile.classList.remove('open');
  profile.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
}
document.querySelectorAll('[data-open-profile]').forEach(btn=>btn.addEventListener('click',openProfile));
document.querySelectorAll('[data-close-profile]').forEach(btn=>btn.addEventListener('click',closeProfile));

document.addEventListener('keydown',event=>{
  if(event.key==='Escape'){
    if(overlay.classList.contains('open')) closeProject();
    if(profile.classList.contains('open')) closeProfile();
    return;
  }
  if(overlay.classList.contains('open') || profile.classList.contains('open')) return;
  if(event.key==='ArrowDown'){event.preventDefault();selectProject(currentProject+1)}
  if(event.key==='ArrowUp'){event.preventDefault();selectProject(currentProject-1)}
  if(event.key==='Enter') openProject();
});

document.addEventListener('wheel',event=>{
  if(overlay.classList.contains('open') || profile.classList.contains('open') || wheelLocked) return;
  if(Math.abs(event.deltaY)<20) return;
  wheelLocked=true;
  selectProject(currentProject+(event.deltaY>0?1:-1));
  setTimeout(()=>wheelLocked=false,430);
},{passive:true});

const cursorLight=document.querySelector('.cursor-light');
document.addEventListener('pointermove',event=>{
  cursorLight.style.left=event.clientX+'px';
  cursorLight.style.top=event.clientY+'px';
});

function restoreFromUrl(){
  const params = new URLSearchParams(location.search);
  const key = params.get('project');
  const shouldPreview = params.get('preview') === '1';
  const index = projects.findIndex(project=>project.key===key);
  if(index >= 0){
    selectProject(index,false);
    if(shouldPreview){
      openProject(index);
      history.replaceState(null,'',location.pathname);
    }
    return true;
  }
  return false;
}

buildProjectList();
if(!restoreFromUrl()) selectProject(0,false);
