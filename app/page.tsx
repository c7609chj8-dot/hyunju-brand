"use client";

import { useState, type FormEvent } from "react";
import BrandLogo from "./components/brand-logo";

const projects = [
  { id: "brand", number: "01", category: "BRAND STRATEGY", title: "나다운 방향을 찾는 일", description: "브랜드의 질문에서 시작해, 하나의 메시지로 정리하는 과정.", theme: "sage", word: "Clarity.", detail: "실제 프로젝트로 교체할 예시입니다. 프로젝트의 배경, 해결한 문제, 본인의 역할, 결과를 순서대로 소개하면 좋습니다." },
  { id: "content", number: "02", category: "CONTENT & STORY", title: "생각을 이야기로 만드는 일", description: "작은 관찰을 모아, 오래 기억되는 콘텐츠로 연결하기.", theme: "sand", word: "Perspective.", detail: "콘텐츠 사례를 소개할 자리입니다. 기획 의도와 독자, 제작 과정, 확인 가능한 반응을 실제 자료로 채워 주세요." },
  { id: "experience", number: "03", category: "EXPERIENCE DESIGN", title: "경험에 의미를 더하는 일", description: "사람의 입장에서 질문하고, 더 나은 접점을 설계하기.", theme: "blue", word: "Connection.", detail: "협업 또는 경험 설계 사례를 소개할 자리입니다. 담당 범위와 협업 과정, 최종 산출물을 중심으로 작성해 주세요." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openedProject, setOpenedProject] = useState<string | null>(null);
  const [formMessage, setFormMessage] = useState("");

  function previewInquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormMessage("입력 내용을 확인했습니다. 현재는 화면 시안으로, 문의가 전송되거나 저장되지 않습니다.");
  }

  return (
    <>
      <a className="skip-link" href="#main">본문으로 이동</a>
      <header className="header">
        <a className="wordmark" href="#home" aria-label="세이프마인드 홈페이지 처음으로"><BrandLogo /></a>
        <button className="menu-toggle" aria-expanded={menuOpen} aria-controls="navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "닫기" : "메뉴"}</button>
        <nav id="navigation" aria-label="주 메뉴" className={menuOpen ? "navigation is-open" : "navigation"}>
          <a href="#about" onClick={() => setMenuOpen(false)}>소개</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>포트폴리오</a>
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>이야기 나누기 <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <main id="main">
        <section id="home" className="hero section-shell">
          <div className="hero-copy">
            <p className="eyebrow"><span className="small-line" /> A PERSONAL SPACE BY HYUNJU</p>
            <h1>나다운 시선으로,<br />의미 있는 <span className="highlight">연결</span>을.</h1>
            <p className="hero-description">생각을 정리하고, 가능성을 발견하고,<br />작은 시작을 가치 있는 경험으로 이어갑니다.</p>
            <a className="button button-dark" href="#work">작업 살펴보기 <span aria-hidden="true">↗</span></a>
            <div className="hero-footnote"><span className="dot" /> 생각과 경험을 기록하는 공간</div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="art-topline"><span>THE ART OF BECOMING</span><span>VOL. 01</span></div>
            <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
            <span className="art-h">h.</span>
            <div className="art-caption"><span>A unique perspective.<br />A meaningful connection.</span><span className="art-star">+</span></div>
          </div>
          <div className="hero-bottom"><span>THOUGHTFUL IDEAS. MEANINGFUL WORK.</span><a href="#about">아래로 살펴보기 <span aria-hidden="true">↓</span></a></div>
        </section>

        <section id="about" className="about section-shell">
          <div className="section-label"><span>01 / ABOUT</span><span>나를 소개합니다</span></div>
          <div className="about-grid">
            <h2>좋은 연결은<br /><span className="muted">좋은 질문에서.</span></h2>
            <div className="about-copy"><p className="lead">안녕하세요, 현주입니다.<br />이곳에 저만의 시선과 이야기를 담아갑니다.</p><p>어떤 일을 하는지, 무엇을 중요하게 생각하는지,<br className="desktop-break" /> 그리고 어떤 경험을 쌓아왔는지 소개하려 합니다.</p><p className="draft-note">소개 문구 초안입니다. 실제 전문 분야와 경력에 맞춰 채워갈 예정입니다.</p><a className="text-link" href="#contact">함께 나눌 이야기가 있나요? <span aria-hidden="true">↗</span></a></div>
          </div>
          <div className="approach"><p className="approach-intro">앞으로 담아갈<br /><strong>세 가지 이야기</strong></p>{[{ n: "01", title: "나만의 관점", text: "관찰과 질문에서 발견한 생각" }, { n: "02", title: "경험의 기록", text: "과정과 배움을 담은 작업 이야기" }, { n: "03", title: "새로운 연결", text: "함께 만들어갈 다음 가능성" }].map(item => <div className="approach-item" key={item.n}><span>{item.n}</span><h3>{item.title}</h3><p>{item.text}</p></div>)}</div>
        </section>

        <section id="work" className="work section-shell">
          <div className="section-label"><span>02 / SELECTED WORK</span><span>경험을 담는 방식</span></div>
          <div className="section-heading"><h2>생각이 작업이 되는 순간.</h2><p>실제 사례를 채워갈 포트폴리오 예시입니다.</p></div>
          <div className="project-grid">{projects.map(project => <article className="project" key={project.id}>
            <button className={`project-art ${project.theme}`} aria-label={`${project.title} 예시 상세 ${openedProject === project.id ? "닫기" : "보기"}`} aria-expanded={openedProject === project.id} aria-controls={`detail-${project.id}`} onClick={() => setOpenedProject(openedProject === project.id ? null : project.id)}>
              <span className="project-art-top">CONCEPT STUDY <span>{project.number}</span></span>
              <span className="project-art-word">{project.word}</span><span className="project-art-circle" /><span className="project-art-line" />
              <span className="project-art-bottom">HYUNJU / PORTFOLIO TEMPLATE <span className="round-arrow" aria-hidden="true">↗</span></span>
            </button>
            <div className="project-meta"><span>{project.category}</span><span className="sample-label">예시</span></div><h3>{project.title}</h3><p>{project.description}</p>
            <div id={`detail-${project.id}`} hidden={openedProject !== project.id} className="project-detail"><strong>이곳에 담을 내용</strong><p>{project.detail}</p></div>
          </article>)}</div>
        </section>

        <section id="contact" className="contact section-shell">
          <div className="contact-copy"><p className="eyebrow">03 / LET’S CONNECT</p><h2>다음 이야기는<br />함께 만들어볼까요?</h2><p>안전교육·AI 교육에 관해 이야기 나눠요.<br />강의·협업 문의는 전화로 연락해 주세요.</p><a className="contact-phone" href="tel:+821072592558" aria-label="강의·협업 문의 전화 010-7259-2558"><span>강의·협업 문의</span><strong>010-7259-2558</strong></a><span className="contact-note">아래 폼은 미리보기입니다. 실제 문의는 전화로 부탁드립니다.</span></div>
          <form className="contact-form" onSubmit={previewInquiry} onChange={() => setFormMessage("")}>
            <div className="form-row"><label>이름<input name="name" autoComplete="name" placeholder="어떻게 불러드릴까요?" required maxLength={80} /></label><label>이메일<input name="email" type="email" autoComplete="email" placeholder="답변받을 이메일" required maxLength={254} /></label></div>
            <label>나누고 싶은 이야기<textarea name="message" placeholder="어떤 이야기를 함께 나누고 싶으신가요?" required minLength={10} maxLength={3000} rows={4} /></label>
            <div className="form-bottom"><p>입력 정보는 저장되지 않습니다.</p><button className="button button-light" type="submit">입력 내용 확인 <span aria-hidden="true">↗</span></button></div>
            <p className="form-status" role="status">{formMessage}</p>
          </form>
        </section>
      </main>
      <footer className="footer"><a href="#home" className="wordmark" aria-label="세이프마인드 홈페이지 처음으로"><BrandLogo /></a><a className="footer-phone" href="tel:+821072592558">전화 010-7259-2558</a><a href="https://github.com/c7609chj8-dot/hyunju-brand" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span><span className="sr-only"> (새 창)</span></a><span>© {new Date().getFullYear()} 세이프마인드</span></footer>
    </>
  );
}
