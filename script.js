/* =========================================================
   STRATEGYCLICK — MAIN JAVASCRIPT
========================================================= */


/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

if (menuToggle && mobileNav) {

  menuToggle.addEventListener("click", () => {

    const isOpen = mobileNav.classList.toggle("open");

    menuToggle.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );

    document.body.classList.toggle("menu-open", isOpen);

  });


  const mobileLinks = mobileNav.querySelectorAll("a");

  mobileLinks.forEach((link) => {

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


/* =========================
   CLOSE MOBILE MENU
   WHEN WINDOW RESIZES
========================= */

window.addEventListener("resize", () => {

  if (window.innerWidth > 850 && mobileNav && menuToggle) {

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

const revealElements =
  document.querySelectorAll(".reveal");


const revealObserver =
  new IntersectionObserver(

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
      rootMargin: "0px 0px -40px 0px"
    }

  );


revealElements.forEach((element) => {

  revealObserver.observe(element);

});


/* =========================
   HERO INITIAL REVEAL
========================= */

window.addEventListener("load", () => {

  const heroReveal =
    document.querySelectorAll(
      ".hero .reveal"
    );

  heroReveal.forEach((element, index) => {

    setTimeout(() => {

      element.classList.add("visible");

    }, index * 180);

  });

});


/* =========================
   PORTFOLIO FILTER
========================= */

const filterButtons =
  document.querySelectorAll(".filter-btn");

const portfolioCards =
  document.querySelectorAll(".portfolio-card");


filterButtons.forEach((button) => {

  button.addEventListener("click", () => {

    const filter =
      button.getAttribute("data-filter");


    /* ACTIVE BUTTON */

    filterButtons.forEach((btn) => {

      btn.classList.remove("active");

    });

    button.classList.add("active");


    /* FILTER PROJECTS */

    portfolioCards.forEach((card) => {

      const category =
        card.getAttribute("data-category");


      if (
        filter === "all" ||
        category === filter
      ) {

        card.classList.remove("hide");

      } else {

        card.classList.add("hide");

      }

    });

  });

});


/* =========================
   DESKTOP ACTIVE NAVIGATION
========================= */

const sections =
  document.querySelectorAll(
    "main section[id]"
  );

const desktopLinks =
  document.querySelectorAll(
    ".desktop-nav a"
  );


function updateActiveNavigation() {

  let currentSection = "";

  const scrollPosition =
    window.scrollY + 150;


  sections.forEach((section) => {

    const sectionTop =
      section.offsetTop;

    const sectionHeight =
      section.offsetHeight;


    if (
      scrollPosition >= sectionTop &&
      scrollPosition <
      sectionTop + sectionHeight
    ) {

      currentSection =
        section.getAttribute("id");

    }

  });


  desktopLinks.forEach((link) => {

    link.classList.remove("active");

    const href =
      link.getAttribute("href");


    if (
      href === `#${currentSection}`
    ) {

      link.classList.add("active");

    }

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


/* =========================
   SMOOTH INTERNAL LINKS
========================= */

const internalLinks =
  document.querySelectorAll(
    'a[href^="#"]'
  );


internalLinks.forEach((link) => {

  link.addEventListener("click", (event) => {

    const targetID =
      link.getAttribute("href");


    if (
      !targetID ||
      targetID === "#"
    ) {

      return;

    }


    const targetElement =
      document.querySelector(targetID);


    if (targetElement) {

      event.preventDefault();

      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

  });

});


/* =========================
   CONTACT FORM
========================= */

const contactForm =
  document.getElementById("contactForm");


if (contactForm) {

  contactForm.addEventListener(
    "submit",
    (event) => {

      event.preventDefault();


      const name =
        document
          .getElementById("name")
          .value
          .trim();

      const company =
        document
          .getElementById("company")
          .value
          .trim();

      const phone =
        document
          .getElementById("phone")
          .value
          .trim();

      const email =
        document
          .getElementById("email")
          .value
          .trim();

      const service =
        document
          .getElementById("service")
          .value;

      const message =
        document
          .getElementById("message")
          .value
          .trim();


      /* WHATSAPP MESSAGE */

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


      const encodedMessage =
        encodeURIComponent(
          whatsappMessage
        );


      /* STRATEGYCLICK WHATSAPP NUMBER */

      const whatsappNumber =
        "919159596960";


      const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;


      window.open(
        whatsappURL,
        "_blank",
        "noopener,noreferrer"
      );

    }

  );

}


/* =========================
   HEADER SHADOW ON SCROLL
========================= */

const header =
  document.querySelector(".header");


function updateHeader() {

  if (!header) return;


  if (window.scrollY > 20) {

    header.style.boxShadow =
      "0 8px 30px rgba(6, 26, 53, 0.08)";

  } else {

    header.style.boxShadow =
      "none";

  }

}


window.addEventListener(
  "scroll",
  updateHeader,
  { passive: true }
);

window.addEventListener(
  "load",
  updateHeader
);


/* =========================
   CURRENT YEAR
========================= */

const footerText =
  document.querySelector(
    ".footer-bottom p"
  );


if (footerText) {

  const currentYear =
    new Date().getFullYear();


  footerText.innerHTML =
    `© ${currentYear} StrategyClick. All Rights Reserved.`;

}
