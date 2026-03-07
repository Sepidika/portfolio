/* shared.js — inject nav + footer + mobile menu */
window._activePage = null;

function setActive(page) {
  window._activePage = page;
  document.querySelectorAll('.nav-links a, .nav-mobile-menu a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === page);
  });
}

const NAV_HTML = `
<nav>
  <a href="index.html" class="nav-logo">
    <div class="nav-icon">
      <svg viewBox="0 0 48 48" fill="none" width="20" height="20">
        <path d="M6 42L22 8" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/>
        <path d="M38 42L22 8" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/>
        <path d="M13 28L31 28" stroke="#93C5FD" stroke-width="3" stroke-linecap="round"/>
        <circle cx="22" cy="8" r="2.5" fill="#C8522A"/>
      </svg>
    </div>
    <span class="nav-wordmark">aksara<em>.id</em></span>
  </a>
  <div class="nav-links">
    <a href="index.html" data-page="home">Home</a>
    <a href="layanan.html" data-page="layanan">Layanan</a>
    <a href="portofolio.html" data-page="portofolio">Portofolio</a>
    <a href="cara-kerja.html" data-page="cara-kerja">Cara Kerja</a>
    <a href="harga.html" data-page="harga">Harga</a>
  </div>
  <div style="display:flex;align-items:center;gap:12px;">
    <a href="kontak.html" class="nav-cta">Mulai →</a>
    <div class="nav-hamburger" id="hamburger">
      <span></span><span></span><span></span>
    </div>
  </div>
</nav>
<div class="nav-mobile-menu" id="mobileMenu">
  <a href="index.html" data-page="home">Home</a>
  <a href="layanan.html" data-page="layanan">Layanan</a>
  <a href="portofolio.html" data-page="portofolio">Portofolio</a>
  <a href="cara-kerja.html" data-page="cara-kerja">Cara Kerja</a>
  <a href="harga.html" data-page="harga">Harga</a>
  <a href="kontak.html" data-page="kontak">Kontak</a>
</div>`;

const TICKER_HTML = `
<div class="ticker">
  <div class="ticker-track">
    <span class="ticker-item">Website <span class="ticker-sep">✦</span></span>
    <span class="ticker-item">AI Chatbot <span class="ticker-sep">✦</span></span>
    <span class="ticker-item">Copywriting <span class="ticker-sep">✦</span></span>
    <span class="ticker-item">Landing Page <span class="ticker-sep">✦</span></span>
    <span class="ticker-item">Konten Digital <span class="ticker-sep">✦</span></span>
    <span class="ticker-item">Branding <span class="ticker-sep">✦</span></span>
    <span class="ticker-item">Website <span class="ticker-sep">✦</span></span>
    <span class="ticker-item">AI Chatbot <span class="ticker-sep">✦</span></span>
    <span class="ticker-item">Copywriting <span class="ticker-sep">✦</span></span>
    <span class="ticker-item">Landing Page <span class="ticker-sep">✦</span></span>
    <span class="ticker-item">Konten Digital <span class="ticker-sep">✦</span></span>
    <span class="ticker-item">Branding <span class="ticker-sep">✦</span></span>
  </div>
</div>`;

const FOOTER_HTML = `
<footer>
  <div class="footer-top">
    <div class="footer-brand">
      <div class="footer-brand-name">aksara<em>.id</em></div>
      <div class="footer-brand-tagline">Kami tulis, kamu melaju.</div>
    </div>
    <div class="footer-links">
      <div class="footer-col">
        <div class="footer-col-title">Halaman</div>
        <a href="layanan.html">Layanan</a>
        <a href="portofolio.html">Portofolio</a>
        <a href="cara-kerja.html">Cara Kerja</a>
        <a href="harga.html">Harga</a>
      </div>
      <div class="footer-col">
        <div class="footer-col-title">Kontak</div>
        <a href="#">WhatsApp</a>
        <a href="#">Instagram</a>
        <a href="kontak.html">Email</a>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <span class="footer-copy">© 2025 Aksara.id · All rights reserved.</span>
    <span class="footer-badge">Made in Indonesia 🇮🇩</span>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);

  // apply active page if already set via setActive()
  if (window._activePage) {
    document.querySelectorAll('.nav-links a, .nav-mobile-menu a').forEach(a => {
      a.classList.toggle('active', a.dataset.page === window._activePage);
    });
  }

  // hamburger
  document.getElementById('hamburger').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.toggle('open');
  });

  // reveal
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) setTimeout(() => e.target.classList.add('on'), i * 60);
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  // footer
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);
});
