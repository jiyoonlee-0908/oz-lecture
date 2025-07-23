/******************************
 * 유저 닉네임 (가짜 로그인)
 ******************************/
function getNickname() {
  return localStorage.getItem("prompot_nickname") || "익명";
}
function setNickname(n) {
  localStorage.setItem("prompot_nickname", n);
}

/******************************
 * 실제 프롬프트 데이터
 *  └ 기존 3개 + 새로 준 3개(립글로스, 코드 리뷰, 케이팝 피규어)
 *  └ 내용은 원문을 최대한 살리되 불필요 반복/오타만 최소 정리
 ******************************/
const prompts = [
  {
    id: 1,
    title: "자영업자를 위한 고객 응대 매뉴얼을 작성하는 프롬프트",
    author: "이안녕",
    date: "2025.01.13",
    desc: "자영업자를 위한 고객 응대 매뉴얼을 간결·실용적으로 작성하도록 지시하는 프롬프트",
    env: "ChatGPT 4o를 사용했어요.",
    platform: "ChatGPT",
    price: 0,
    category: "work",
    tags: ["자영업", "고객응대", "매뉴얼"],
    views: 599,
    likes: 120,
    ratingSum: 0,
    ratingCount: 0,
    content: `프롬프트 소개

ChatGPT 4o를 사용했어요.
프롬프트 실행환경

ChatGPT
프롬프트복사하기
자영업자를 위한 고객 응대 매뉴얼을 작성하세요.

1. 고객과의 원활한 소통과 신뢰를 쌓기 위한 기본 원칙을 포함하세요.
2. 상황별 응대 예시를 추가하세요(예: 불만 고객 대응, 단골 고객 관리, 신규 고객 맞이 등).
3. 매뉴얼은 간결하고 실용적이어야 하며, 누구나 따라 할 수 있는 내용으로 구성하세요.
4. 최종적으로 매뉴얼을 따랐을 때 기대할 수 있는 효과를 간단히 설명하세요.

활용 팁

1. 업종별로 고객 응대 방식이 다르므로 해당 업종(카페, 미용실, 식당, 소매점 등)에 맞는 상황을 구체적으로 설정하면 좋습니다.
2. 실제 자주 발생하는 상황을 떠올려 매뉴얼에 포함할 수 있습니다. (예: 고객이 지나치게 긴 대기 시간에 불만을 표현할 때, 재고가 부족할 때 고객의 신뢰를 유지하는 방법)`
  },
  {
    id: 2,
    title: "소설 플롯 짜주는 프롬프트",
    author: "홍안녕",
    date: "2025.07.18",
    desc: "장르와 조건만 넣으면 상세 플롯을 뽑아주는 창작 지원 프롬프트",
    env: "Copilot",
    platform: "Copilot",
    price: 0,
    category: "edu",
    tags: ["소설", "플롯", "창작"],
    views: 276,
    likes: 30,
    ratingSum: 0,
    ratingCount: 0,
    content: `프롬프트 소개

쓰고 싶은 장르와 아주 약간의 구상은 있으나 막연할 때, 머릿속 느낌을 모아 질문해보세요. AI가 구체화해 줍니다.
프롬프트 실행환경

Copilot
프롬프트복사하기
너는 전도유망한 [소설 장르] 소설가야. [소설 장르의 대표적인 소설들] 등 세계적으로 대성공한 작품들을 탐독하며 글쓰기를 공부했고, 벌써 12권짜리 시리즈도 성공적으로 연재한 작가지. 그런 네가 이제 다음 [소설 장르] 소설을 집필하려고 해.
다음 소설의 플롯을 구상해줘. 플롯은 최소 큼직한 사건 N개 이상을 아주 상세하게 담고 있어야 해. 그리고 반드시 [원하는 분량] 이상으로 적어줘.

플롯에는 다음 내용이 포함되면 좋겠어.
1. 원하는 조건
2. 원하는 조건
3. 원하는 조건
4. 원하는 조건
5. 원하는 조건

활용 팁
1. 결과물이 마음에 안 들면 새로고침해서 다시 질문해보세요. 같은 질문도 답이 계속 바뀝니다!
2. 창의적인 모드를 선택해 주세요.`
  },
  {
    id: 3,
    title: "강의 복습 노트 생성 프롬프트 (강화 버전 v2)",
    author: "김안녕",
    date: "2025.05.24",
    desc: "강의 TXT/PPT/초기정리본을 종합해 완전한 복습 노트를 만드는 초장문 프롬프트",
    env: "Gemini",
    platform: "Gemini",
    price: 0,
    category: "edu",
    tags: ["복습", "강의노트", "학습"],
    views: 21021,
    likes: 344,
    ratingSum: 0,
    ratingCount: 0,
    content: `프롬프트 소개

프롬프트 실행환경

Gemini
프롬프트복사하기
## 🤖 통합 강의 복습 노트 생성 프롬프트 (강화 버전 v2)

당신은 해당 과목에서 A+를 받은, 매우 친절하고 설명 잘하는 3학년 선배이자 AI 학습 조교입니다. 후배에게 시험공부 핵심을 짚어주며 돕는다는 마음으로, 아래 입력 자료를 종합 분석하고 유기적으로 결합하여 상세하고 충실한 '복습 노트'를 생성해 주십시오. 가장 중요한 원칙은 원본 강의의 핵심 내용, 특히 교수/강사의 강조점이 누락되지 않도록 하는 것입니다. 분량 제한 없이 완전성을 최우선으로 하며, 딱딱한 설명 대신 부드러운 구어체와 격려를 적절히 섞어 주세요.

### Ⅰ. 입력 자료
1. Perplexity 출력(Claude 초기 정리): 주요 개념/차트 설명/외부 인용 분석 및 '[자료 간 불일치/핵심 보완점]', '[최신 정보/관점 변화]', '[학생 이해 지원 필요]' 태그 포함 가능
2. 강의 텍스트(.txt): 교수의 구두 강조점(“중요하다”, “시험에 나올 것” 등) 명시
3. 강의 PPT(.pdf / 이미지): 핵심 차트·그래프·다이어그램 등 시각 자료

### Ⅱ. 작업 지시
1. 강조점 식별·통합·심층 반영  
   - 세 자료에서 교수의 명시/암시 강조점을 누락 없이 종합  
   - 우선순위: TXT 1순위 > PPT 2순위 > 초기 정리 3순위  
   - 불일치 시 TXT 우선, 맥락 보충/불일치 자체를 학습 포인트로 설명  
   - 모든 강조점은 '수업 요약'·'핵심 포인트'에 상세 반영

2. 콘텐츠 합성 & 초기 정리 결과 전략적 활용  
   - 초기 정리의 태그/요약 적극 활용하여 핵심 포인트, 용어, 복습 문제 설계  
   - TXT와 PPT 내용을 의미론적으로 결합(단순 나열 금지)  
   - 중복은 간결화하되 연결관계를 명확히 기술  
   - 시각 자료 해석은 데이터 나열이 아니라 의미/경향/현실 적용까지 다각적으로

3. 복습 노트 구조(일반 텍스트, 섹션 사이 한 줄 공백)
- [강의 주제명] 복습 노트 (제목)
- 수업 요약: 전체 핵심 메시지/목표/중요 시각 자료를 유기적으로 통합
- 핵심 포인트: 반드시 기억할 내용 3~5개 이상, 충분한 설명 포함
- 주요 용어: “한국어(영어)” 형식, 상세 설명/예시. '[학생 이해 지원 필요]' 용어 우선
- 복습 문제(수정됨):
  * 객관식 1 (TXT 기반 심층 이해형) – 4지선다
  * 객관식 2 (PPT 시각 자료 분석형) – 4지선다
  * 서술형 1 (통합적 사고/응용력 평가형)
- 정답 및 해설(신설됨): 각 문제에 정답 + 왜 정답/오답인지, 확인 개념/중요성까지 메타인지 설명 제공

### Ⅳ. 형식 및 추가 요구사항
1. Markdown 금지, 일반 텍스트 사용. 섹션 간 빈 줄 1줄
2. 분량: A4 1~2장 이상 가능. 완전성 최우선
3. 언어/어조: 한국어, 학술적 정확성 + 친근한 어조
4. 용어 표기 일관성: 첫 등장 시 영어 병기
5. 초기 정리의 외부 URL은 참고용, 최종 노트에 포함 금지
6. 직관적 활용 가능하도록 논리적 흐름/가독성 확보`
  },
  {
    id: 4,
    title: "립글로스 광고 이미지",
    author: "박안녕",
    date: "2025.07.18",
    desc: "고급스러운 코스메틱 광고 사진 스타일 이미지 생성 프롬프트",
    env: "DALL-E",
    platform: "DALL-E",
    price: 0,
    category: "image",
    tags: ["광고", "이미지", "코스메틱"],
    views: 50,
    likes: 15,
    ratingSum: 0,
    ratingCount: 0,
    content: `프롬프트 소개

립글로스 광고 스타일의 이미지
프롬프트 실행환경

DALL-E
프롬프트복사하기
고급스러운 코스메틱 광고 사진 스타일. 은은한 핑크 그라데이션 배경 앞에 세 개의 세련된 립글로스 튜브가 정돈된 구도로 배치되어 있음. 투명하고 반짝이는 핑크빛 뚜껑, 우아한 화이트 바디에 ‘Gloss’라는 글자가 고급스럽게 인쇄되어 있음. 한 립글로스는 브러쉬가 꺼내져 있으며 끝에 선명한 핑크 컬러의 글로스가 물방울처럼 맺혀있음. 깨끗한 반사 효과가 바닥에 나타나고, 전체적으로 밝고 세련되며 고퀄리티 화장품 브랜드 광고 같은 느낌.`
  },
  {
    id: 5,
    title: "GPT 자동 코드 리뷰",
    author: "황안녕",
    date: "2025.02.27",
    desc: "가독성·성능·보안 관점으로 코드를 자동 리뷰하고 수정안을 제시",
    env: "ChatGPT",
    platform: "ChatGPT",
    price: 0,
    category: "dev",
    tags: ["코드리뷰", "개발", "QA"],
    views: 1832,
    likes: 157,
    ratingSum: 0,
    ratingCount: 0,
    content: `프롬프트 소개

✔ 개발자가 작성한 코드를 ChatGPT로 자동 리뷰  
✔ 가독성/성능/보안 측면 분석 및 문제 지점에 주석 달아 설명  
✔ 개선 사항을 반영한 수정 코드 버전 제시  
✔ 언어/스타일 가이드를 명시하면 해당 기준에 맞춰 리뷰

프롬프트 실행환경

ChatGPT
프롬프트복사하기
🔆 당신은 경험 많은 소프트웨어 엔지니어이자 코드 리뷰어입니다.
- 사용자가 제공한 코드를 분석하여 가독성, 성능, 보안 측면에서 면밀히 검토하세요.
- 개선이 필요한 부분을 찾아내고, 문제점과 개선 방법을 코드 내 주석으로 명확하게 표시합니다.
- 그런 다음, 이러한 개선 사항을 반영한 수정된 코드 버전을 제시하세요.
- 사용자가 프로그래밍 언어나 코딩 스타일 가이드를 명시한 경우, 해당 언어나 스타일 가이드의 권장사항을 리뷰에 반영하세요.

활용 팁

💛 프롬프트 사용: 위 본문을 복사 후 코드 블록(\`\`\`)으로 코드를 붙여넣으면 정확히 분석됩니다.  
💛 언어/스타일 가이드 명시: "언어: Java, 스타일: Google Java Style Guide 준수"처럼 밝혀주세요.  
💛 대화 활용: 제안된 수정 코드가 동일 기능을 하는지 등 추가 질문 가능  
💛 검증 및 테스트: 실제 동작 확인은 반드시 본인이 테스트하세요.`
  },
  {
    id: 6,
    title: "케이팝 데몬 헌터즈 피규어",
    author: "정안녕",
    date: "2025.07.14",
    desc: "애니 원안을 기반으로 한 K-POP Demon Hunters 헌트릭스 피규어 스타일 이미지",
    env: "DALL-E",
    platform: "DALL-E",
    price: 0,
    category: "image",
    tags: ["피규어", "이미지", "케이팝"],
    views: 96,
    likes: 5,
    ratingSum: 0,
    ratingCount: 0,
    content: `프롬프트 소개

케이팝 데몬 헌터즈 '헌트릭스'를 피규어 형태로 만들었어요
프롬프트 실행환경

DALL-E
프롬프트복사하기
A highly detailed PVC figure set of the Huntress trio from K-Pop Demon Hunters, inspired by their original animated design. The figures capture their sleek K-pop idol aesthetic with holographic, iridescent stage outfits, long flowing hair in bright colors, and confident runway-style poses. Each figure has a glossy finish with subtle sparkles, and details such as hair accessories, gold shoulder accents, and platform boots. The expressions are cheerful yet powerful, representing their dual role as idols and demon hunters. The base is shaped like a futuristic concert stage with translucent lights and shimmering effects, adding energy and drama to the display.`
  }
];

/******************************
 * DOM 요소
 ******************************/
const promptGrid = document.getElementById("promptGrid");
const searchInput = document.getElementById("searchInput");
const tabs = document.querySelectorAll("#categoryTabs .nav-link");

const promptModal = new bootstrap.Modal(document.getElementById("promptModal"));
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalContent = document.getElementById("modalContent");
const modalPrice = document.getElementById("modalPrice");
const modalBookmarkBtn = document.getElementById("modalBookmarkBtn");
const modalLikeBtn = document.getElementById("modalLikeBtn");
const likeCountText = document.getElementById("likeCountText");
const modalMeta = document.getElementById("modalMeta");

const avgStars = document.getElementById("avgStars");
const avgRatingText = document.getElementById("avgRatingText");
const reviewForm = document.getElementById("reviewForm");
const reviewText = document.getElementById("reviewText");
const reviewStarInput = document.getElementById("reviewStarInput");
const reviewList = document.getElementById("reviewList");

const commentForm = document.getElementById("commentForm");
const commentText = document.getElementById("commentText");
const commentList = document.getElementById("commentList");

const bookmarkCanvasEl = document.getElementById("bookmarkCanvas");
const bookmarkCanvas = new bootstrap.Offcanvas(bookmarkCanvasEl);
const bookmarkGrid = document.getElementById("bookmarkGrid");

const loginModal = new bootstrap.Modal(document.getElementById("loginModal"));
const loginOpenBtn = document.getElementById("loginOpenBtn");
const nicknameInput = document.getElementById("nicknameInput");
const loginForm = document.getElementById("loginForm");

const sortSelect = document.getElementById("sortSelect");
const freeOnly = document.getElementById("freeOnly");
const paidOnly = document.getElementById("paidOnly");
const bookmarkToggle = document.getElementById("bookmarkToggle");

let currentCategory = "all";
let currentPromptId = null;
let currentReviewStars = 0;

/******************************
 * LocalStorage Helpers
 ******************************/
function getLS(key, def) {
  try { return JSON.parse(localStorage.getItem(key)) ?? def; }
  catch { return def; }
}
function setLS(key, val) { localStorage.setItem(key, JSON.stringify(val)); }

function getBookmarks() { return getLS("prompot_bookmarks", []); }
function setBookmarks(arr) { setLS("prompot_bookmarks", arr); }

function getLikes() { return getLS("prompot_likes", []); }
function setLikes(arr) { setLS("prompot_likes", arr); }

function getReviews() { return getLS("prompot_reviews", {}); }
function setReviews(obj) { setLS("prompot_reviews", obj); }

function getComments() { return getLS("prompot_comments", {}); }
function setComments(obj) { setLS("prompot_comments", obj); }

/******************************
 * 렌더링
 ******************************/
function renderPrompts(list) {
  promptGrid.innerHTML = "";
  list.forEach(p => {
    const avg = p.ratingCount ? (p.ratingSum / p.ratingCount).toFixed(1) : "0.0";
    const likedNow = getLikes().includes(p.id);
    const col = document.createElement("div");
    col.className = "col-md-6 col-xl-4";
    col.innerHTML = `
      <div class="card prompt-card h-100" data-id="${p.id}">
        <div class="card-body">
          <h5 class="card-title fw-semibold mb-1">${p.title}</h5>
          <div class="small text-muted mb-1">${p.author} · ${p.date}</div>
          <p class="card-text small text-muted">${p.desc}</p>
          <div class="mb-2">
            ${p.tags.map(t => `<span class="badge bg-secondary tag-badge">#${t}</span>`).join("")}
          </div>
          <div class="d-flex justify-content-between align-items-center small">
            <span class="fw-bold">${p.price > 0 ? "₩" + p.price.toLocaleString() : "무료"}</span>
            <span>
              <i class="bi bi-star-fill text-warning"></i> ${avg} · 
              <i class="bi bi-heart${likedNow ? '-fill text-danger' : ''} like-icon" data-id="${p.id}"></i> ${p.likes}
            </span>
          </div>
        </div>
      </div>
    `;
    col.querySelector(".prompt-card").addEventListener("click", e => {
      if (e.target.classList.contains("like-icon")) return;
      openPromptModal(p.id);
    });
    col.querySelector(".like-icon").addEventListener("click", e => {
      e.stopPropagation();
      toggleLike(p.id, e.target);
    });
    promptGrid.appendChild(col);
  });
}

function renderBookmarks() {
  const ids = getBookmarks();
  bookmarkGrid.innerHTML = "";
  if (!ids.length) {
    bookmarkGrid.innerHTML = `<p class="text-muted small">북마크가 없습니다.</p>`;
    return;
  }
  prompts.filter(p => ids.includes(p.id)).forEach(p => {
    const avg = p.ratingCount ? (p.ratingSum / p.ratingCount).toFixed(1) : "0.0";
    const col = document.createElement("div");
    col.className = "col-12";
    col.innerHTML = `
      <div class="card h-100 prompt-card" data-id="${p.id}">
        <div class="card-body">
          <h6 class="fw-semibold mb-1">${p.title}</h6>
          <p class="small text-muted mb-2">${p.desc}</p>
          <div class="d-flex justify-content-between align-items-center small">
            <span class="fw-bold">${p.price > 0 ? "₩" + p.price.toLocaleString() : "무료"}</span>
            <span>
              <i class="bi bi-star-fill text-warning"></i> ${avg} · 
              <i class="bi bi-bookmark-fill text-orange bookmark-icon" data-id="${p.id}"></i>
            </span>
          </div>
        </div>
      </div>
    `;
    col.querySelector(".prompt-card").addEventListener("click", e => {
      if (e.target.classList.contains("bookmark-icon")) return;
      openPromptModal(p.id);
    });
    col.querySelector(".bookmark-icon").addEventListener("click", e => {
      e.stopPropagation();
      toggleBookmark(p.id, null);
      renderBookmarks();
    });
    bookmarkGrid.appendChild(col);
  });
}

/******************************
 * 모달
 ******************************/
function openPromptModal(id) {
  const p = prompts.find(x => x.id === id);
  if (!p) return;
  currentPromptId = id;

  p.views = (p.views || 0) + 1;

  modalTitle.textContent = p.title;
  modalDesc.textContent = p.desc;
  modalContent.textContent = p.content;
  modalPrice.textContent = p.price > 0 ? "₩" + p.price.toLocaleString() : "무료";

  modalMeta.innerHTML = `
    <span class="badge bg-light text-dark"><i class="bi bi-person"></i> ${p.author}</span>
    <span class="badge bg-light text-dark"><i class="bi bi-calendar-event"></i> ${p.date}</span>
    <span class="badge bg-light text-dark"><i class="bi bi-eye"></i> ${p.views}</span>
  `;

  setModalBookmarkState();
  setModalLikeState();

  renderRatingArea();
  renderReviews();
  renderComments();

  promptModal.show();
}

/******************************
 * 북마크
 ******************************/
function setModalBookmarkState() {
  const isBookmarked = getBookmarks().includes(currentPromptId);
  modalBookmarkBtn.innerHTML = isBookmarked
    ? `<i class="bi bi-bookmark-fill text-orange"></i> 북마크됨`
    : `<i class="bi bi-bookmark-plus"></i> 북마크`;
}
function toggleBookmark(id, iconEl) {
  const bookmarks = getBookmarks();
  const idx = bookmarks.indexOf(id);
  if (idx >= 0) bookmarks.splice(idx, 1);
  else bookmarks.push(id);
  setBookmarks(bookmarks);

  if (iconEl) {
    iconEl.classList.toggle("bi-bookmark");
    iconEl.classList.toggle("bi-bookmark-fill");
    iconEl.classList.toggle("text-orange");
  }
  if (currentPromptId === id) setModalBookmarkState();
}

/******************************
 * 좋아요
 ******************************/
function setModalLikeState() {
  const liked = getLikes().includes(currentPromptId);
  modalLikeBtn.innerHTML = liked
    ? `<i class="bi bi-heart-fill text-danger"></i> <span id="likeCountText">${getCurrentPrompt().likes}</span>`
    : `<i class="bi bi-heart"></i> <span id="likeCountText">${getCurrentPrompt().likes}</span>`;
}
function toggleLike(id, iconEl) {
  const likesArr = getLikes();
  const p = prompts.find(x => x.id === id);
  const liked = likesArr.includes(id);
  if (liked) {
    likesArr.splice(likesArr.indexOf(id), 1);
    p.likes = Math.max(0, (p.likes || 0) - 1);
  } else {
    likesArr.push(id);
    p.likes = (p.likes || 0) + 1;
  }
  setLikes(likesArr);

  if (iconEl) {
    iconEl.classList.toggle("bi-heart");
    iconEl.classList.toggle("bi-heart-fill");
    iconEl.classList.toggle("text-danger");
    const txt = iconEl.parentNode;
    txt.innerHTML = `${iconEl.outerHTML} ${p.likes}`;
  }
  if (currentPromptId === id) {
    likeCountText.textContent = p.likes;
    setModalLikeState();
  }
}

/******************************
 * 평점 / 리뷰
 ******************************/
function getCurrentPrompt() {
  return prompts.find(x => x.id === currentPromptId);
}
function drawStars(container, rating) {
  container.innerHTML = "";
  for (let i = 1; i <= 5; i++) {
    const iTag = document.createElement("i");
    iTag.className = `bi ${i <= rating ? "bi-star-fill filled star" : "bi-star star"}`;
    container.appendChild(iTag);
  }
}
function renderRatingArea() {
  const p = getCurrentPrompt();
  const avg = p.ratingCount ? (p.ratingSum / p.ratingCount) : 0;
  drawStars(avgStars, Math.round(avg));
  avgRatingText.textContent = `${avg.toFixed(1)} / 5 (${p.ratingCount}명)`;

  reviewStarInput.innerHTML = "";
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("i");
    star.className = "bi bi-star";
    star.dataset.val = i;
    star.addEventListener("click", () => {
      currentReviewStars = i;
      [...reviewStarInput.querySelectorAll("i")].forEach((s, idx) => {
        s.className = idx < i ? "bi bi-star-fill filled" : "bi bi-star";
      });
    });
    reviewStarInput.appendChild(star);
  }
  currentReviewStars = 0;
}
function renderReviews() {
  const all = getReviews();
  const list = all[currentPromptId] || [];
  reviewList.innerHTML = "";
  if (!list.length) {
    reviewList.innerHTML = `<p class="text-muted small">아직 리뷰가 없습니다.</p>`;
    return;
  }
  list.forEach(r => {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
      stars += `<i class="bi ${i <= r.rating ? "bi-star-fill text-warning" : "bi-star text-warning"}"></i>`;
    }
    const div = document.createElement("div");
    div.className = "review-item";
    div.innerHTML = `
      <div class="d-flex justify-content-between">
        <div class="fw-semibold">${r.user}</div>
        <div class="review-meta">${r.date}</div>
      </div>
      <div class="mb-1">${stars}</div>
      <div>${r.text}</div>
    `;
    reviewList.appendChild(div);
  });
}

/******************************
 * 댓글
 ******************************/
function renderComments() {
  const all = getComments();
  const list = all[currentPromptId] || [];
  commentList.innerHTML = "";
  if (!list.length) {
    commentList.innerHTML = `<p class="text-muted small mb-0">첫 댓글을 남겨보세요!</p>`;
    return;
  }
  list.slice().reverse().forEach(c => {
    const div = document.createElement("div");
    div.className = "comment-item";
    div.innerHTML = `
      <div class="d-flex justify-content-between">
        <div class="fw-semibold">${c.user}</div>
        <div class="comment-meta">${c.date}</div>
      </div>
      <div>${c.text}</div>
    `;
    commentList.appendChild(div);
  });
}

/******************************
 * 필터 & 정렬
 ******************************/
function applyFilters() {
  const kw = searchInput.value.trim().toLowerCase();

  let list = prompts.filter(p => {
    const byCat = currentCategory === "all" || p.category === currentCategory;
    const byKw =
      !kw ||
      p.title.toLowerCase().includes(kw) ||
      p.desc.toLowerCase().includes(kw) ||
      p.tags.some(t => t.toLowerCase().includes(kw));
    return byCat && byKw;
  });

  if (freeOnly.checked) list = list.filter(p => p.price === 0);
  if (paidOnly.checked) list = list.filter(p => p.price > 0);

  const sortVal = sortSelect.value;
  if (sortVal === "popular") {
    list.sort((a, b) => (b.likes || 0) - (a.likes || 0));
  } else if (sortVal === "recent") {
    list.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (sortVal === "rating") {
    list.sort((a, b) => {
      const aAvg = a.ratingCount ? a.ratingSum / a.ratingCount : 0;
      const bAvg = b.ratingCount ? b.ratingSum / b.ratingCount : 0;
      return bAvg - aAvg;
    });
  } else if (sortVal === "priceAsc") {
    list.sort((a, b) => (a.price || 0) - (b.price || 0));
  } else if (sortVal === "priceDesc") {
    list.sort((a, b) => (b.price || 0) - (a.price || 0));
  }

  renderPrompts(list);
}

/******************************
 * 이벤트 바인딩
 ******************************/
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    currentCategory = tab.dataset.cat;
    applyFilters();
  });
});

searchInput.addEventListener("input", applyFilters);
sortSelect.addEventListener("change", applyFilters);

freeOnly.addEventListener("change", () => {
  if (freeOnly.checked) paidOnly.checked = false;
  applyFilters();
});
paidOnly.addEventListener("change", () => {
  if (paidOnly.checked) freeOnly.checked = false;
  applyFilters();
});

modalBookmarkBtn.addEventListener("click", () => {
  if (currentPromptId != null) toggleBookmark(currentPromptId, null);
});
modalLikeBtn.addEventListener("click", () => {
  if (currentPromptId != null) toggleLike(currentPromptId, null);
});

bookmarkToggle.addEventListener("click", () => {
  renderBookmarks();
  bookmarkCanvas.show();
});

loginOpenBtn.addEventListener("click", () => {
  nicknameInput.value = getNickname() === "익명" ? "" : getNickname();
  loginModal.show();
});
loginForm.addEventListener("submit", e => {
  e.preventDefault();
  const nick = nicknameInput.value.trim() || "익명";
  setNickname(nick);
  loginModal.hide();
});

/* 리뷰 작성 */
reviewForm.addEventListener("submit", e => {
  e.preventDefault();
  if (!currentPromptId) return;
  if (currentReviewStars === 0) {
    alert("별점을 선택하세요!");
    return;
  }
  const txt = reviewText.value.trim();
  if (txt.length < 5) {
    alert("리뷰는 5자 이상 입력해주세요.");
    return;
  }

  const revObj = getReviews();
  const arr = revObj[currentPromptId] || [];
  arr.push({
    user: getNickname(),
    rating: currentReviewStars,
    text: txt,
    date: new Date().toLocaleDateString()
  });
  revObj[currentPromptId] = arr;
  setReviews(revObj);

  const p = getCurrentPrompt();
  p.ratingSum += currentReviewStars;
  p.ratingCount += 1;

  reviewText.value = "";
  currentReviewStars = 0;
  [...reviewStarInput.querySelectorAll("i")].forEach(s => s.className = "bi bi-star");

  renderRatingArea();
  renderReviews();
});

/* 댓글 작성 */
commentForm.addEventListener("submit", e => {
  e.preventDefault();
  if (!currentPromptId) return;
  const txt = commentText.value.trim();
  if (!txt) return;

  const cmObj = getComments();
  const arr = cmObj[currentPromptId] || [];
  arr.push({
    user: getNickname(),
    text: txt,
    date: new Date().toLocaleString()
  });
  cmObj[currentPromptId] = arr;
  setComments(cmObj);

  commentText.value = "";
  renderComments();
});

/******************************
 * 초기 실행
 ******************************/
applyFilters();
