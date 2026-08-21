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

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

window.addEventListener("load", () => {
  document.querySelectorAll(".hero .reveal").forEach((item, index) => {
    setTimeout(() => {
      item.classList.add("visible");
    }, index * 160);
  });
});

const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioCards = document.querySelectorAll(".portfolio-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    portfolioCards.forEach((card) => {
      card.classList.toggle(
        "hide",
        filter !== "all" && card.dataset.category !== filter
      );
    });
  });
});

const reviewMore = document.querySelector(".review-more");
const reviewFull = document.querySelector(".review-full");

if (reviewMore && reviewFull) {
  reviewMore.addEventListener("click", () => {
    const expanded =
      reviewMore.getAttribute("aria-expanded") === "true";

    reviewMore.setAttribute(
      "aria-expanded",
      String(!expanded)
    );

    reviewFull.hidden = expanded;

    reviewMore.innerHTML = expanded
      ? 'Read More <span>→</span>'
      : 'Show Less <span>↑</span>';
  });
}

const sections = document.querySelectorAll("main section[id]");
const desktopLinks = document.querySelectorAll(".desktop-nav a");

function updateActiveNavigation() {
  const position = window.scrollY + 155;
  let current = "";

  sections.forEach((section) => {
    if (
      position >= section.offsetTop &&
      position < section.offsetTop + section.offsetHeight
    ) {
      current = section.id;
    }
  });

  desktopLinks.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${current}`
    );
  });
}

window.addEventListener(
  "scroll",
  updateActiveNavigation,
  { passive: true }
);

window.addEventListener(
  "load",
  updateActiveNavigation
);

const siteHeader = document.getElementById("siteHeader");

function updateHeaderShadow() {
  if (!siteHeader) return;

  siteHeader.style.boxShadow =
    window.scrollY > 20
      ? "0 8px 30px rgba(6,26,53,.08)"
      : "none";
}

window.addEventListener(
  "scroll",
  updateHeaderShadow,
  { passive: true }
);

window.addEventListener(
  "load",
  updateHeaderShadow
);

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name =
      document.getElementById("name").value.trim();

    const email =
      document.getElementById("email").value.trim();

    const phone =
      document.getElementById("phone").value.trim();

    const company =
      document.getElementById("company").value.trim();

    const service =
      document.getElementById("service").value;

    const message =
      document.getElementById("message").value.trim();

    const whatsappMessage =
`Hi StrategyClick,

I'm interested in your digital marketing services.

Name: ${name}
Business: ${company || "Not provided"}
Phone: ${phone}
Email: ${email || "Not provided"}
Service: ${service}

Requirement:
${message}`;

    const whatsappNumber = "919159596960";

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`;

    window.open(
      whatsappURL,
      "_blank",
      "noopener,noreferrer"
    );
  });
}

const footerText =
  document.querySelector(".footer-bottom p");

if (footerText) {
  footerText.textContent =
    `© ${new Date().getFullYear()} StrategyClick. All Rights Reserved.`;
}
