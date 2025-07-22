// -----------------------
// 더미 데이터
// -----------------------
const prompts = [
  {
    id: 1,
    title: "IR 피칭 스크립트 작성 프롬프트",
    desc: "스타트업 IR 발표용 3/5/7분 버전 스크립트를 단계별로 생성",
    content: `[역할] 너는 스타트업 IR 코치다.
[목표] 3/5/7분 버전에 맞게 핵심 메시지를 정리...
[출력] 각 분량 별 스크립트 + 발표 흐름`,
    price: 3000,
    category: "work",
    tags: ["IR", "Pitch", "Startup"]
  },
  {
    id: 2,
    title: "코드 리팩토링 가이드 프롬프트",
    desc: "레거시 JS/TS 코드를 함수 단위로 리팩토링하도록 단계별 지침 생성",
    content: `[역할] 코드 리뷰어이자 리팩토링 코치.
[목표] 함수 단위 리팩토링 체크리스트를 작성...
[출력] 단계별 수정 제안, 테스트 포인트`,
    price: 0,
    category: "dev",
    tags: ["개발", "리팩토링"]
  },
  {
    id: 3,
    title: "브랜드 네이밍 아이디어 프롬프트",
    desc: "브랜드 키워드를 바탕으로 20개 이상의 네이밍과 설명 생성",
    content: `[역할] 브랜드 네이밍 전문가.
[입력] 브랜드 키워드, 업종, 타겟
[출력] 20개 네이밍 + 한줄 설명 + 도메인 제안`,
    price: 2000,
    category: "design",
    tags: ["브랜딩", "네이밍"]
  },
  {
    id: 4,
    title: "학습 계획표 작성 프롬프트",
    desc: "학생 수준과 목표에 맞춘 주간/월간 학습 계획표를 자동 생성",
    content: `[역할] 교육 커리큘럼 디자이너.
[입력] 나이, 목표, 시간, 과목
[출력] 주간/월간 플랜 테이블`,
    price: 0,
    category: "edu",
    tags: ["교육", "플랜"]
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

  // 모달 북마크 버튼 동기화
  if (currentPromptId === id) {
    setModalBookmarkState();
  }

  // 북마크 오프캔버스 열려있으면 다시 렌더
  if (bookmarkCanvasEl.classList.contains("show")) {
    renderBookmarks();
  }
}

// -----------------------
// 필터링 & 검색
// -----------------------
function applyFilters() {
  const kw = searchInput.value.trim().toLowerCase();
  const list = prompts.filter(p => {
    const byCat = currentCategory === "all" || p.category === currentCategory;
    const byKw =
      !kw ||
      p.title.toLowerCase().includes(kw) ||
      p.desc.toLowerCase().includes(kw) ||
      p.tags.some(t => t.toLowerCase().includes(kw));
    return byCat && byKw;
  });
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
renderPrompts(prompts);
