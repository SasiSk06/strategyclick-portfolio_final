const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

if (menuToggle && mobileNav) {
  menuToggle.addEventListener("click", () => {
    const open = mobileNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("menu-open", open);
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      document.body.classList.remove("menu-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 850 && mobileNav && menuToggle) {
    mobileNav.classList.remove("open");
    document.body.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

/* =========================
   SCROLL REVEAL
========================= */

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

/* =========================
   PORTFOLIO FILTER
========================= */

const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioCards = document.querySelectorAll(".portfolio-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    portfolioCards.forEach((card) => {
      card.classList.toggle("hide", filter !== "all" && card.dataset.category !== filter);
    });
  });
});

/* =========================
   TESTIMONIAL READ MORE
========================= */

const reviewMore = document.querySelector(".review-more");
const reviewFull = document.querySelector(".review-full");

if (reviewMore && reviewFull) {
  reviewMore.addEventListener("click", () => {
    const expanded = reviewMore.getAttribute("aria-expanded") === "true";
    reviewMore.setAttribute("aria-expanded", String(!expanded));
    reviewFull.hidden = expanded;
    reviewMore.innerHTML = expanded ? 'Read More <span>→</span>' : 'Show Less <span>↑</span>';
  });
}

/* =========================
   ACTIVE NAVIGATION
========================= */

const sections = document.querySelectorAll("main section[id]");
const desktopLinks = document.querySelectorAll(".desktop-nav a");

function updateNav() {
  let current = "";
  const position = window.scrollY + 130;
  sections.forEach((section) => {
    if (position >= section.offsetTop && position < section.offsetTop + section.offsetHeight) current = section.id;
  });
  desktopLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
  });
}

window.addEventListener("scroll", updateNav, { passive: true });
window.addEventListener("load", updateNav);

/* =========================
   HEADER SHADOW
========================= */

const header = document.getElementById("siteHeader");
function headerShadow() {
  if (!header) return;
  header.style.boxShadow = window.scrollY > 20 ? "0 10px 35px rgba(0,0,0,.28)" : "none";
}
window.addEventListener("scroll", headerShadow, { passive: true });
window.addEventListener("load", headerShadow);

/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const getValue = (id) => document.getElementById(id).value.trim();
    const message = `Hi StrategyClick,\n\nI'm interested in your digital marketing services.\n\nName: ${getValue("name")}\nBusiness: ${getValue("company") || "Not provided"}\nPhone: ${getValue("phone")}\nEmail: ${getValue("email") || "Not provided"}\nService: ${getValue("service")}\n\nRequirement:\n${getValue("message")}`;
    const whatsappNumber = "919159596960";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  });
}

/* =========================
   CURRENT YEAR
========================= */

const footerText = document.querySelector(".footer-bottom p");
if (footerText) footerText.textContent = `© ${new Date().getFullYear()} StrategyClick. All Rights Reserved.`;

/* =========================
   PREMIUM PROCESS SECTION
========================= */

(function setupPremiumProcess(){
  if (!document.getElementById("processPremiumStyles")) {
    const link = document.createElement("link");
    link.id = "processPremiumStyles";
    link.rel = "stylesheet";
    link.href = "process-premium.css?v=20260823-execute-v9";
    document.head.appendChild(link);
  }

  const processSection = document.getElementById("process");
  if (!processSection) return;

  const processText = processSection.querySelector(".section-head p");
  if (processText) {
    processText.innerHTML = '<span>A clear, proven process that turns strategy into results.</span><span>We follow these 7 steps to ensure consistent, measurable success.</span>';
  }

  const svgIcons = [
    '<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="20" cy="20" r="12"/><path d="M29 29l9 9"/><path d="M14 24v-5M20 24V15M26 24v-8"/></svg>',
    '<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="22" cy="24" r="14"/><circle cx="22" cy="24" r="7"/><path d="M22 24 37 9M32 8h7v7"/><path d="m35 11 4-4"/></svg>',
    '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M16 28c-3-2-5-6-5-10 0-7 6-13 13-13s13 6 13 13c0 4-2 8-5 10-2 2-3 4-3 6H19c0-2-1-4-3-6Z"/><path d="M19 38h10M21 43h6"/><path d="M24 1v3M7 8l3 3M41 8l-3 3M3 21h4M41 21h4"/></svg>',
    '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M29 7c7-4 12-3 12-3s1 5-3 12L25 30l-9 3 3-9L29 7Z"/><circle cx="32.5" cy="13.5" r="3.2"/><path d="M24 29 16 37"/><path d="M16 29l-7 2 3-7"/><path d="M22 36l-2 7 7-3"/><path d="M17 36c-4 1-7 4-8 8 4-1 7-4 8-8Z"/></svg>',
    '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M7 34V24h6v10M17 34V19h6v15M27 34V13h6v21"/><path d="m8 18 8-7 7 4 11-9"/><path d="M30 6h6v6"/><circle cx="34" cy="34" r="6"/><path d="m38 38 5 5"/></svg>',
    '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M7 38h34M10 34V26h6v8M21 34V20h6v14M32 34V12h6v22"/><path d="m9 20 10-8 8 4 12-11"/><path d="M34 5h6v6"/></svg>',
    '<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="10" y="8" width="28" height="34" rx="3"/><path d="M18 8V5h12v3M16 17h16M16 23h12M16 29h8"/><circle cx="31" cy="31" r="7"/><path d="M31 24v7h7"/></svg>'
  ];

  processSection.querySelectorAll(".process-icon").forEach((icon, index) => {
    if (svgIcons[index]) icon.innerHTML = svgIcons[index];
  });
})();

/* =========================
   ABOUT ABSTRACT ACCENTS
========================= */

(function loadAboutAbstractStyles(){
  if (document.getElementById("aboutAbstractStyles")) return;
  const link = document.createElement("link");
  link.id = "aboutAbstractStyles";
  link.rel = "stylesheet";
  link.href = "about-abstract.css?v=20260822-dots-v2";
  document.head.appendChild(link);
})();