// -----------------------
// 실제 프롬프트 데이터 (예시 10개)
// -----------------------
const prompts = [
  {
    id: 101,
    title: "유튜브 영상 스크립트 생성 프롬프트",
    desc: "주제/길이/톤만 넣으면 챕터별 스크립트와 썸네일까지 한 번에",
    content: `[역할] 너는 유튜브 콘텐츠 작가이자 편집 디렉터야.
[입력] 주제, 타깃 시청자, 영상 길이(분), 톤(밝게/차분/프로페셔널 등)
[출력]
1) 오프닝 훅(3가지 안)  
2) 본문을 3~5개 챕터로 나눠 대본 작성  
3) 엔딩 멘트 + CTA(구독/댓글 유도)  
4) 썸네일 문구 5개  
5) 영상 설명란(SEO 키워드 포함)`,
    price: 0,
    category: "work",
    tags: ["유튜브", "콘텐츠", "스크립트"],
    popularity: 120
  },
  {
    id: 102,
    title: "서비스 1P/3P 기획서 자동화 프롬프트",
    desc: "아이디어만 넣으면 1페이지·3페이지 구조로 정리해주는 프롬프트",
    content: `[역할] 너는 스타트업 서비스 PM이자 전략 컨설턴트야.
[입력] 서비스 아이디어 키워드, 타깃, 해결하려는 문제, 예상 기능
[출력]
- 1페이지 요약: 문제/해결/가치제안/타깃/차별점/수익모델(선택)
- 3페이지 버전: 시장분석/경쟁분석/핵심 기능 플로우/로드맵/리스크 & 대응전략`,
    price: 2000,
    category: "work",
    tags: ["기획", "템플릿", "스타트업"],
    popularity: 95
  },
  {
    id: 103,
    title: "브랜드 네이밍 + 슬로건 제안 프롬프트",
    desc: "키워드만 넣으면 20개 이상의 네이밍/슬로건/도메인 추천",
    content: `[역할] 너는 브랜드 네이밍 전문가야.
[입력] 핵심 키워드, 업종, 타깃, 지향 이미지(예: 친근/고급/혁신)
[출력]
1) 네이밍 20개 (국문/영문 섞어 제안)  
2) 각 네이밍 한줄 설명  
3) 짧은 슬로건 또는 태그라인 제안  
4) 사용 가능한 도메인(가능하다면 .com, .co, .io 등)`,
    price: 1500,
    category: "design",
    tags: ["브랜딩", "네이밍", "슬로건"],
    popularity: 60
  },
  {
    id: 104,
    title: "코드 리팩토링 & 테스트 포인트 도출 프롬프트",
    desc: "레거시 JS/TS 코드를 붙여넣으면 개선안과 테스트 케이스까지",
    content: `[역할] 너는 시니어 프론트엔드 개발자이자 코드 리뷰어야.
[입력] 기존 JS/TS 코드
[출력]
1) 문제점 리스트업 (성능/가독성/안전성)  
2) 리팩토링 제안 코드와 설명  
3) 유닛 테스트 포인트/케이스 나열  
4) 추가 개선 아이디어(타입 안전성, 예외 처리 등)`,
    price: 0,
    category: "dev",
    tags: ["개발", "리팩토링", "테스트"],
    popularity: 110
  },
  {
    id: 105,
    title: "IR 피치덱/발표 스크립트 생성 프롬프트",
    desc: "3/5/7분 버전으로 핵심 메시지 정리 및 슬라이드 구성 제안",
    content: `[역할] 너는 스타트업 IR 코치이자 스토리텔러야.
[입력] 회사 개요(문제/해결/시장/비즈니스모델/트랙션 등)
[출력]
1) 3/5/7분 버전별 발표 스크립트  
2) 각 슬라이드별 제목과 핵심 포인트  
3) 투자자 Q&A 예상 질문 10개 & 답변 가이드`,
    price: 3000,
    category: "work",
    tags: ["IR", "Pitch", "Startup"],
    popularity: 80
  },
  {
    id: 106,
    title: "학습 계획표 & 커리큘럼 자동 설계 프롬프트",
    desc: "학생 수준/목표에 맞춘 주간/월간 학습 플랜을 자동 생성",
    content: `[역할] 너는 교육 커리큘럼 디자이너야.
[입력] 학습자 나이/수준, 목표(시험, 자격증, 프로젝트 등), 가능 학습 시간
[출력]
- 주간/월간 학습 계획표(테이블)
- 각 주차 핵심 학습 목표/컨텐츠
- 복습/평가 포인트`,
    price: 0,
    category: "edu",
    tags: ["교육", "플랜", "커리큘럼"],
    popularity: 70
  },
  {
    id: 107,
    title: "마케팅 카피 & A/B 테스트 문구 세트 프롬프트",
    desc: "제품/타깃/채널만 주면 헤드라인·바디카피·CTA를 A/B로 뽑아줌",
    content: `[역할] 너는 디지털 마케터이자 카피라이터야.
[입력] 제품/서비스 정보, 타깃, 채널(랜딩페이지/인스타/뉴스레터 등), 톤앤매너
[출력]
1) 헤드라인 5개 x A/B 두 안  
2) 본문 카피 3세트  
3) CTA 문구 10개  
4) 해시태그/키워드`,
    price: 1000,
    category: "work",
    tags: ["마케팅", "카피", "A/B테스트"],
    popularity: 50
  },
  {
    id: 108,
    title: "노션 템플릿 구조/프로퍼티 설계 프롬프트",
    desc: "목적에 맞는 노션 데이터베이스 구조와 프로퍼티/자동화 제안",
    content: `[역할] 너는 노션 파워유저 & 워크플로우 디자이너야.
[입력] 사용 목적(프로젝트 관리/콘텐츠 캘린더/OKR 등), 팀 규모, 필요한 뷰
[출력]
- 데이터베이스 테이블 구조(프로퍼티 정의)  
- 권장 뷰(캘린더/갤러리/칸반 등)  
- 템플릿 페이지 구조 및 자동화 아이디어`,
    price: 0,
    category: "work",
    tags: ["노션", "템플릿", "워크플로우"],
    popularity: 65
  },
  {
    id: 109,
    title: "블로그 글(SEO 최적화) 자동 생성 프롬프트",
    desc: "키워드/타겟만 주면 목차/본문/메타태그까지 SEO 최적화 글 작성",
    content: `[역할] 너는 SEO 컨설턴트이자 콘텐츠 작가야.
[입력] 핵심 키워드, 타깃 독자, 글 길이, 톤
[출력]
1) SEO 최적화 목차(Keyword 포함)  
2) 각 섹션 본문(실제 예시/데이터/FAQ 포함)  
3) 메타 타이틀/디스크립션/OG태그 제안`,
    price: 0,
    category: "work",
    tags: ["SEO", "블로그", "콘텐츠"],
    popularity: 130
  },
  {
    id: 110,
    title: "커버레터/자기소개서 맞춤 작성 프롬프트",
    desc: "공고/이력서 기반으로 문항별 맞춤 커버레터 작성",
    content: `[역할] 너는 HR 전문가이자 커리어 코치야.
[입력] 지원 회사/직무, 채용 공고, 본인 이력/경험
[출력]
- 문항별(또는 항목별) 답변 초안  
- 핵심 키워드 삽입 포인트  
- 수정/보완 체크리스트`,
    price: 0,
    category: "edu",
    tags: ["취업", "자기소개서", "커버레터"],
    popularity: 40
  }
];

// -----------------------
// 요소 참조
// -----------------------
const promptGrid = document.getElementById("promptGrid");
const searchInput = document.getElementById("searchInput");
const tabs = document.querySelectorAll("#categoryTabs .nav-link");

const promptModal = new bootstrap.Modal(document.getElementById("promptModal"));
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalContent = document.getElementById("modalContent");
const modalPrice = document.getElementById("modalPrice");
const modalBookmarkBtn = document.getElementById("modalBookmarkBtn");

const bookmarkCanvasEl = document.getElementById("bookmarkCanvas");
const bookmarkCanvas = new bootstrap.Offcanvas(bookmarkCanvasEl);
const bookmarkGrid = document.getElementById("bookmarkGrid");

const loginModal = new bootstrap.Modal(document.getElementById("loginModal"));
const loginOpenBtn = document.getElementById("loginOpenBtn");
const bookmarkToggle = document.getElementById("bookmarkToggle");

const sortSelect = document.getElementById("sortSelect");
const freeOnly = document.getElementById("freeOnly");
const paidOnly = document.getElementById("paidOnly");

let currentCategory = "all";
let currentPromptId = null;

// -----------------------
// 북마크 (localStorage)
// -----------------------
function getBookmarks() {
  return JSON.parse(localStorage.getItem("prompot_bookmarks") || "[]");
}
function setBookmarks(arr) {
  localStorage.setItem("prompot_bookmarks", JSON.stringify(arr));
}

// -----------------------
// 렌더링
// -----------------------
function renderPrompts(list) {
  promptGrid.innerHTML = "";
  list.forEach(p => {
    const col = document.createElement("div");
    col.className = "col-md-6 col-xl-4";
    col.innerHTML = `
      <div class="card prompt-card h-100" data-id="${p.id}">
        <div class="card-body">
          <h5 class="card-title fw-semibold mb-2">${p.title}</h5>
          <p class="card-text small text-muted">${p.desc}</p>
          <div class="mb-2">
            ${p.tags.map(t => `<span class="badge bg-secondary tag-badge">#${t}</span>`).join("")}
          </div>
          <div class="d-flex justify-content-between align-items-center">
            <span class="fw-bold">${p.price > 0 ? "₩" + p.price.toLocaleString() : "무료"}</span>
            <i class="bi ${getBookmarks().includes(p.id) ? "bi-bookmark-fill text-orange" : "bi-bookmark"} bookmark-icon" data-id="${p.id}"></i>
          </div>
        </div>
      </div>
    `;
    // 카드 클릭 이벤트
    col.querySelector(".prompt-card").addEventListener("click", e => {
      if (e.target.classList.contains("bookmark-icon")) return;
      openPromptModal(p.id);
    });
    // 북마크 버튼
    col.querySelector(".bookmark-icon").addEventListener("click", e => {
      e.stopPropagation();
      toggleBookmark(p.id, e.target);
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
    const col = document.createElement("div");
    col.className = "col-12";
    col.innerHTML = `
      <div class="card h-100 prompt-card" data-id="${p.id}">
        <div class="card-body">
          <h6 class="fw-semibold mb-1">${p.title}</h6>
          <p class="small text-muted mb-2">${p.desc}</p>
          <div class="d-flex justify-content-between align-items-center">
            <span class="fw-bold">${p.price > 0 ? "₩" + p.price.toLocaleString() : "무료"}</span>
            <i class="bi bi-bookmark-fill text-orange bookmark-icon" data-id="${p.id}"></i>
          </div>
        </div>
      </div>
    `;
    // 카드 클릭
    col.querySelector(".prompt-card").addEventListener("click", e => {
      if (e.target.classList.contains("bookmark-icon")) return;
      openPromptModal(p.id);
    });
    // 아이콘 클릭
    col.querySelector(".bookmark-icon").addEventListener("click", e => {
      e.stopPropagation();
      toggleBookmark(p.id, e.target);
    });

    bookmarkGrid.appendChild(col);
  });
}

// -----------------------
// 모달
// -----------------------
function openPromptModal(id) {
  const p = prompts.find(x => x.id === id);
  if (!p) return;
  currentPromptId = id;
  modalTitle.textContent = p.title;
  modalDesc.textContent = p.desc;
  modalContent.textContent = p.content;
  modalPrice.textContent = p.price > 0 ? "₩" + p.price.toLocaleString() : "무료";
  // 북마크 버튼 상태
  setModalBookmarkState();
  promptModal.show();
}

function setModalBookmarkState() {
  const isBookmarked = getBookmarks().includes(currentPromptId);
  modalBookmarkBtn.innerHTML = isBookmarked
    ? `<i class="bi bi-bookmark-fill text-orange"></i> 북마크됨`
    : `<i class="bi bi-bookmark-plus"></i> 북마크`;
}

// -----------------------
// 북마크 토글
// -----------------------
function toggleBookmark(id, iconEl) {
  const bookmarks = getBookmarks();
  const idx = bookmarks.indexOf(id);
  if (idx >= 0) bookmarks.splice(idx, 1);
  else bookmarks.push(id);
  setBookmarks(bookmarks);

  // 아이콘 상태 변경
  if (iconEl) {
    iconEl.classList.toggle("bi-bookmark");
    iconEl.classList.toggle("bi-bookmark-fill");
    iconEl.classList.toggle("text-orange");
  }

  // 모달 버튼 동기화
  if (currentPromptId === id) {
    setModalBookmarkState();
  }

  // 북마크 오프캔버스 열려있으면 다시 렌더
  if (bookmarkCanvasEl.classList.contains("show")) {
    renderBookmarks();
  }
}

// -----------------------
// 필터링 + 정렬
// -----------------------
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

  // 무료/유료 필터
  if (freeOnly.checked) {
    list = list.filter(p => p.price === 0);
  }
  if (paidOnly.checked) {
    list = list.filter(p => p.price > 0);
  }

  // 정렬
  const sortVal = sortSelect.value;
  if (sortVal === "popular") {
    list.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
  } else if (sortVal === "priceAsc") {
    list.sort((a, b) => (a.price || 0) - (b.price || 0));
  } else if (sortVal === "priceDesc") {
    list.sort((a, b) => (b.price || 0) - (a.price || 0));
  }

  renderPrompts(list);
}

// -----------------------
// 이벤트 바인딩
// -----------------------
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

bookmarkToggle.addEventListener("click", () => {
  renderBookmarks();
  bookmarkCanvas.show();
});

loginOpenBtn.addEventListener("click", () => loginModal.show());

// -----------------------
// 초기 렌더
// -----------------------
applyFilters(); // (renderPrompts 대신 한번에 필터/정렬 적용)
