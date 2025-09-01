const projects = [
  {
    title: "'해커스 교육그룹'<br>클론 코딩",
    desc: "해커스 메인페이지를 클론 코딩하며 대형 레이아웃 구조와슬라이더, 탭, 토글 등 다양한 UI 컴포넌트와 인터랙션 구현을 연습했습니다. (반응형 미지원)",
    img: "./img/hackers.png",
    period: "2일",
    contribute: "퍼블리싱 100%",
    tool: "Visual Studio Code",
    lang: "HTML5, CSS3, JS, JQUERY",
    original: "https://www.hackers.com/",
    publish: "https://hackers-edu.netlify.app",
  },
  {
    title: "'스타벅스 코리아'<br>클론 코딩",
    desc: "스타벅스 코리아 메인페이지를 클론하며 스크롤 이벤트, 슬라이드, 인터랙션 구현을 연습했습니다. (반응형 미지원)",
    img: "./img/star.png",
    period: "2일",
    contribute: "퍼블리싱 100%",
    tool: "Visual Studio Code",
    lang: "HTML5, CSS3, JS, JQUERY",
    original: "https://www.starbucks.co.kr/",
    publish: "https://chic-rolypoly-26afa9.netlify.app",
  },
  {
    title: "반응형 메인 페이지<br>(여자)아이들",
    desc: "",
    img: "./img/idle.png",
    period: "7일",
    contribute: "기획 · 디자인 · 퍼블리싱 100%",
    tool: "Photoshop, Illustrator, XD, VS Code",
    lang: "HTML5, CSS3, JS, JQUERY",
    original: "http://www.cubeent.co.kr/idle",
    publish: "https://g-idle.netlify.app/",
  },
  {
    title: "반응형 메인 페이지<br>'퍼펙트 사회 문병일'",
    desc: "",
    img: "./img/perfect.png",
    period: "4일",
    contribute: "기획 · 디자인 · 퍼블리싱 100%",
    tool: "Photoshop, Illustrator, XD, Brackets",
    lang: "HTML5, CSS3, JS, JQUERY",
    original: "https://cafe.naver.com/perfectsahoe",
    publish: "https://perfectsahoe.netlify.app/",
  },
  {
    title: "반응형 메인 페이지<br>스터디카페 '시작'",
    desc: "",
    img: "./img/study_pc.png",
    period: "14일",
    contribute: "기획 · 디자인 · 퍼블리싱 100%",
    tool: "Photoshop, Illustrator, XD, Brackets",
    lang: "HTML5, CSS3, JS, JQUERY",
    original: "http://m.cafesizak.com/",
    publish: "https://sizak-study-cafe.netlify.app/",
  },
  {
    title: "반응형 메인 페이지<br>'아난티코브'",
    desc: "",
    img: "./img/ananti1.png",
    period: "7일",
    contribute: "기획 · 디자인 · 퍼블리싱 100%",
    tool: "Photoshop, Illustrator, XD, Brackets",
    lang: "HTML5, CSS3, JS, JQUERY",
    original: "https://www.ananti.kr/kr/cove/",
    publish: "https://ananticove.netlify.app/",
  },
  {
    title: "라이브러리 활용한<br>패럴렉스 스크롤 구현",
    desc: "",
    img: "./img/skrollr1.png",
    period: "3일",
    contribute: "퍼블리싱 100%",
    tool: "Brackets, Photoshop",
    lang: "HTML5, CSS3, JS, JQUERY",
    original: "#",
    publish: "https://scrollr-effect.netlify.app/",
  },
  {
    title: "모바일 메인 페이지<br>'위드펫 펫시터'",
    desc: "로고,배너,아이콘 디자인",
    img: "./img/withpet.png",
    period: "4일",
    contribute: "기획 · 디자인 · 퍼블리싱 100%",
    tool: "Photoshop, Illustrator, XD, Brackets",
    lang: "HTML5, CSS3, JS, JQUERY",
    original: "#",
    publish: "https://with-pet-mo.netlify.app/",
  },
];

const container = document.getElementById("project-list");
const template = document.getElementById("project-template");
/* 
projects.forEach((p, i) => {
  const clone = template.content.cloneNode(true);

  // 데이터 주입
  clone.querySelector("img").src = p.img;
  clone.querySelector("img").alt = p.title.replace(/<br>/g, " ");
  clone.querySelector("h2").innerHTML = p.title;
  clone.querySelector(".project-desc").textContent = p.desc || "";
  clone.querySelectorAll("td")[0].textContent = p.period;
  clone.querySelectorAll("td")[1].textContent = p.contribute;
  clone.querySelectorAll("td")[2].textContent = p.tool;
  clone.querySelectorAll("td")[3].textContent = p.lang;
  clone.querySelectorAll("a")[0].href = p.original;
  clone.querySelectorAll("a")[1].href = p.publish;

  // 버튼 영역 처리
  const links = clone.querySelectorAll("a");
  const originalBtn = links[0];
  const publishBtn = links[1];

  // Original 버튼 → 링크 없으면 삭제
  if (!p.original || p.original === "#") {
    originalBtn.remove();
    publishBtn.classList.add("full-width");
  } else {
    originalBtn.href = p.original;
  }

  // Publishing 버튼 → 무조건 유지
  publishBtn.href = p.publish;

  // odd/even 자동 색상 클래스
  if (i % 2 === 0) {
    clone.querySelector(".project-item").classList.add("pink");
  } else {
    clone.querySelector(".project-item").classList.add("blue");
  }

  container.appendChild(clone);
});
 */
projects.forEach((p, i) => {
  const clone = template.content.cloneNode(true);

  // 데이터 주입
  clone.querySelector("img").src = p.img;
  clone.querySelector("img").alt = p.title.replace(/<br>/g, " ");
  clone.querySelector("h2").innerHTML = p.title;
  clone.querySelectorAll("td")[0].textContent = p.period;
  clone.querySelectorAll("td")[1].textContent = p.contribute;
  clone.querySelectorAll("td")[2].textContent = p.tool;
  clone.querySelectorAll("td")[3].textContent = p.lang;

  const links = clone.querySelectorAll("a");
  const originalBtn = links[0];
  const publishBtn = links[1];

  if (!p.original || p.original === "#") {
    originalBtn.remove();
    clone.querySelector(".btn_area").classList.add("single-btn");
  } else {
    originalBtn.href = p.original;
  }

  publishBtn.href = p.publish;

  container.appendChild(clone);
});
