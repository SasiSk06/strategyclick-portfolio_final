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
