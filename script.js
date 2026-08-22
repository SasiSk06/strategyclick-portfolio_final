const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

if (menuToggle && mobileNav) {
  menuToggle.addEventListener("click", () => {
    const open = mobileNav.classList.toggle("open");

    menuToggle.setAttribute(
      "aria-expanded",
      String(open)
    );

    document.body.classList.toggle(
      "menu-open",
      open
    );
  });

  mobileNav
    .querySelectorAll("a")
    .forEach((link) => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("open");
        document.body.classList.remove("menu-open");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );
      });
    });
}


window.addEventListener("resize", () => {
  if (
    window.innerWidth > 850 &&
    mobileNav &&
    menuToggle
  ) {
    mobileNav.classList.remove("open");
    document.body.classList.remove("menu-open");

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );
  }
});


/* =========================
   SCROLL REVEAL
========================= */

const revealItems =
  document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer =
    new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "visible"
            );

            obs.unobserve(
              entry.target
            );
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin:
          "0px 0px -40px 0px",
      }
    );

  revealItems.forEach((item) => {
    observer.observe(item);
  });
} else {
  revealItems.forEach((item) => {
    item.classList.add("visible");
  });
}


/* =========================
   PORTFOLIO FILTER
========================= */

const filterButtons =
  document.querySelectorAll(
    ".filter-btn"
  );

const portfolioCards =
  document.querySelectorAll(
    ".portfolio-card"
  );

filterButtons.forEach((button) => {
  button.addEventListener(
    "click",
    () => {
      const filter =
        button.dataset.filter;

      filterButtons.forEach(
        (btn) => {
          btn.classList.remove(
            "active"
          );
        }
      );

      button.classList.add(
        "active"
      );

      portfolioCards.forEach(
        (card) => {
          card.classList.toggle(
            "hide",
            filter !== "all" &&
              card.dataset.category !==
                filter
          );
        }
      );
    }
  );
});


/* =========================
   TESTIMONIAL READ MORE
========================= */

const reviewMore =
  document.querySelector(
    ".review-more"
  );

const reviewFull =
  document.querySelector(
    ".review-full"
  );

if (reviewMore && reviewFull) {
  reviewMore.addEventListener(
    "click",
    () => {
      const expanded =
        reviewMore.getAttribute(
          "aria-expanded"
        ) === "true";

      reviewMore.setAttribute(
        "aria-expanded",
        String(!expanded)
      );

      reviewFull.hidden =
        expanded;

      reviewMore.innerHTML =
        expanded
          ? 'Read More <span>→</span>'
          : 'Show Less <span>↑</span>';
    }
  );
}


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
  document.querySelectorAll(
    "main section[id]"
  );

const desktopLinks =
  document.querySelectorAll(
    ".desktop-nav a"
  );

function updateNav() {
  let current = "";

  const position =
    window.scrollY + 130;

  sections.forEach(
    (section) => {
      if (
        position >=
          section.offsetTop &&
        position <
          section.offsetTop +
            section.offsetHeight
      ) {
        current =
          section.id;
      }
    }
  );

  desktopLinks.forEach(
    (link) => {
      link.classList.toggle(
        "active",
        link.getAttribute(
          "href"
        ) === `#${current}`
      );
    }
  );
}

window.addEventListener(
  "scroll",
  updateNav,
  {
    passive: true,
  }
);

window.addEventListener(
  "load",
  updateNav
);


/* =========================
   HEADER SHADOW
========================= */

const header =
  document.getElementById(
    "siteHeader"
  );

function headerShadow() {
  if (!header) return;

  header.style.boxShadow =
    window.scrollY > 20
      ? "0 10px 35px rgba(0,0,0,.28)"
      : "none";
}

window.addEventListener(
  "scroll",
  headerShadow,
  {
    passive: true,
  }
);

window.addEventListener(
  "load",
  headerShadow
);


/* =========================
   CONTACT FORM
========================= */

const contactForm =
  document.getElementById(
    "contactForm"
  );

if (contactForm) {
  contactForm.addEventListener(
    "submit",
    (event) => {
      event.preventDefault();

      const getValue = (id) =>
        document
          .getElementById(id)
          .value
          .trim();

      const message =
`Hi StrategyClick,

I'm interested in your digital marketing services.

Name: ${getValue("name")}
Business: ${getValue("company") || "Not provided"}
Phone: ${getValue("phone")}
Email: ${getValue("email") || "Not provided"}
Service: ${getValue("service")}

Requirement:
${getValue("message")}`;

      const whatsappNumber =
        "919159596960";

      const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          message
        )}`;

      window.open(
        whatsappURL,
        "_blank",
        "noopener,noreferrer"
      );
    }
  );
}


/* =========================
   CURRENT YEAR
========================= */

const footerText =
  document.querySelector(
    ".footer-bottom p"
  );

if (footerText) {
  footerText.textContent =
    `© ${new Date().getFullYear()} StrategyClick. All Rights Reserved.`;
}

/* =========================
   PREMIUM PROCESS SECTION
========================= */

(function setupPremiumProcess(){
  if (!document.getElementById("processPremiumStyles")) {
    const link = document.createElement("link");
    link.id = "processPremiumStyles";
    link.rel = "stylesheet";
    link.href = "process-fix.css";
    document.head.appendChild(link);
  }

  const processSection = document.getElementById("process");
  if (!processSection) return;

  const processText = processSection.querySelector(".section-head p");
  if (processText) {
    processText.innerHTML =
      '<span>A clear, proven process that turns strategy into results.</span>' +
      '<span>We follow these 7 steps to ensure consistent, measurable success.</span>';
  }

  const svgIcons = [
    '<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="19" cy="19" r="10"/><path d="M26 26l9 9"/><path d="M14 23v-6M19 23v-9M24 23v-4"/></svg>',
    '<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="22" cy="24" r="13"/><circle cx="22" cy="24" r="7"/><path d="M22 24l14-14M31 10h5v5"/></svg>',
    '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M17 29c-3-2-5-6-5-10 0-7 5-12 12-12s12 5 12 12c0 4-2 8-5 10-2 2-3 3-3 6h-8c0-3-1-4-3-6Z"/><path d="M20 39h8M21 43h6"/><path d="M24 2v-2M9 8l-3-3M39 8l3-3"/></svg>',
    '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M18 30 9 39l3-11L31 9c3-3 7-3 10-1l-1 8c0 5-4 9-9 9h-4"/><path d="M20 28l-6-1M27 21l6 6"/><circle cx="32" cy="16" r="2"/></svg>',
    '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 38h32M12 34V23h6v11M22 34V15h6v19M32 34V9h6v25"/><path d="m10 17 9-7 7 4 12-10"/><circle cx="38" cy="4" r="2"/></svg>',
    '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 38h32M12 34V25h6v9M22 34V19h6v15M32 34V11h6v23"/><path d="M10 19c7 0 10-5 14-8 4-3 8-4 14-5"/><path d="m34 4 4 2-2 4"/></svg>',
    '<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="12" y="8" width="24" height="32" rx="3"/><path d="M18 8V5h12v3M18 17h12M18 23h12M18 29h8"/><circle cx="32" cy="31" r="5"/><path d="M32 28v3l2 2"/></svg>'
  ];

  processSection.querySelectorAll(".process-icon").forEach((icon, index) => {
    if (svgIcons[index]) icon.innerHTML = svgIcons[index];
  });
})();
