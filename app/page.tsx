"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import BrandLogo from "./components/brand-logo";

const projects = [
  { id: "safety", category: "SAFETY EDUCATION", title: "생활·교통안전교육", description: "교실에서 함께 배우는 안전. 교육 현장의 일부를 담았습니다.", image: "/images/band/safety-classroom-crop.jpg", alt: "안전교육 현장의 책상과 주황색 의자, 학습자의 뒷모습 일부", detail: "제공받은 BAND의 교통안전교육 기록에서 선별한 사진입니다. 얼굴이 포함된 영역을 제외한 교육장 장면입니다. 교육과정의 법정 인정이나 자격을 의미하지 않습니다." },
  { id: "ai", category: "AI EDUCATION", title: "AI 활용 실습교육", description: "노트북과 필기 도구를 준비하고, 직접 익혀가는 AI 활용.", image: "/images/band/ai-practice-crop.jpg", alt: "AI 활용교육 중 노트북을 앞에 두고 필기하는 학습자의 손과 뒷모습 일부", detail: "제공받은 BAND의 AI 활용 강의 기록에서 선별한 실습 장면입니다. 노트북과 필기 도구를 중심으로, 얼굴이 보이지 않는 일부 영역만 표시합니다." },
  { id: "materials", category: "LEARNING MATERIALS", title: "실습과 함께하는 배움", description: "화면과 교재를 함께 살피며, 배운 내용을 하나씩 기록합니다.", image: "/images/band/ai-materials-crop.jpg", alt: "AI 강의 현장의 노트북과 교재, 마우스와 필기 도구", detail: "AI 활용 강의 사진에서 교육 자료와 실습 장비가 보이는 부분을 선별했습니다. 동일한 강의 기록의 다른 장면으로, 별도 교육 실적으로 중복 집계하지 않습니다." },
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
        <a className="wordmark" href="#home" aria-label="SAFEMIND 홈페이지 처음으로"><BrandLogo /></a>
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
          <div className="section-label"><span>02 / LEARNING IN PRACTICE</span><span>교육 현장의 기록</span></div>
          <div className="section-heading"><h2>안전과 AI를 배우는 현장.</h2><p>제공받은 현장 사진의 일부 영역을 편집했습니다.</p></div>
          <div className="project-grid">{projects.map(project => <article className="project" key={project.id}>
            <button className="project-art project-photo" aria-label={`${project.title} 상세 ${openedProject === project.id ? "닫기" : "보기"}`} aria-expanded={openedProject === project.id} aria-controls={`detail-${project.id}`} onClick={() => setOpenedProject(openedProject === project.id ? null : project.id)}>
              <Image src={project.image} alt={project.alt} fill sizes="(max-width: 700px) calc(100vw - 48px), 30vw" className="project-photo-image" />
              <span className="project-photo-action" aria-hidden="true">자세히 보기 <span className="round-arrow">↗</span></span>
            </button>
            <div className="project-meta"><span>{project.category}</span><span className="sample-label">사진 기록</span></div><h3>{project.title}</h3><p>{project.description}</p>
            <div id={`detail-${project.id}`} hidden={openedProject !== project.id} className="project-detail"><strong>사진 기록 안내</strong><p>{project.detail}</p></div>
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
      <footer className="footer"><a href="#home" className="wordmark" aria-label="SAFEMIND 홈페이지 처음으로"><BrandLogo /></a><a className="footer-phone" href="tel:+821072592558">전화 010-7259-2558</a><a href="https://github.com/c7609chj8-dot/hyunju-brand" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span><span className="sr-only"> (새 창)</span></a><span>© {new Date().getFullYear()} SAFEMIND</span></footer>
    </>
  );
}
