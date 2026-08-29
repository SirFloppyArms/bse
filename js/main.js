const header = document.querySelector(".site-header");
const root = document.documentElement;
const navToggle = document.querySelector(".nav-toggle");
const mobilePanel = document.querySelector(".mobile-nav-panel");
const mobileLinks = document.querySelectorAll(".mobile-nav a");

/* ---- Scroll state: add .header-scrolled when past hero ---- */
const heroSection = document.querySelector(".hero");

function updateHeaderScrollState() {
  if (!header || !heroSection) return;
  const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
  const scrollY = window.scrollY;
  header.classList.toggle(
    "header-scrolled",
    scrollY > heroBottom - window.innerHeight * 0.5
  );
}

/* ---- Back-to-top button: reveal after the user scrolls past
      the services section ---- */
const backToTop = document.querySelector(".back-to-top");
const servicesSection = document.getElementById("services");

function updateBackToTopState() {
  if (!backToTop || !servicesSection) return;
  const servicesBottom =
    servicesSection.offsetTop + servicesSection.offsetHeight;
  const show = window.scrollY > servicesBottom;

  backToTop.classList.toggle("is-visible", show);
  backToTop.setAttribute("aria-hidden", String(!show));
  backToTop.tabIndex = show ? 0 : -1;
}

/* ---- Anchor offset (measured once + on window resize only) ---- */
/* NOTE: --header-height is a FIXED constant in CSS (64px).
   We do NOT dynamically update it, because doing so creates a
   feedback loop: changing min-height -> ResizeObserver fires ->
   changes min-height again -> infinite loop on iOS overscroll. */

function updateAnchorOffset() {
  if (!header) return;
  root.style.setProperty(
    "--anchor-offset",
    `${Math.ceil(header.offsetHeight)}px`
  );
}

updateAnchorOffset();
updateHeaderScrollState();
updateBackToTopState();

window.addEventListener("load", function () {
  updateAnchorOffset();
  updateHeaderScrollState();
  updateBackToTopState();
});

/* Use a debounced resize listener - only fires on actual
   window resize, NOT during iOS rubber-band overscroll. */
let resizeTimer;
window.addEventListener("resize", function () {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function () {
    updateAnchorOffset();
    updateBackToTopState();
  }, 150);
});

/* Throttled scroll listener for header + back-to-top state */
let scrollTicking = false;
window.addEventListener("scroll", function () {
  if (!scrollTicking) {
    window.requestAnimationFrame(function () {
      updateHeaderScrollState();
      updateBackToTopState();
      scrollTicking = false;
    });
    scrollTicking = true;
  }
});

/* --- Back-to-top click: smooth scroll to top --- */
if (backToTop) {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  );

  backToTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: reduceMotion.matches ? "auto" : "smooth"
    });
  });
}

/* ---- Year ---- */
const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

/* ---- Hamburger toggle ---- */
function toggleMenu(forceState) {
  if (!navToggle || !mobilePanel) return;

  const isOpen =
    forceState !== undefined
      ? forceState
      : navToggle.getAttribute("aria-expanded") === "false";

  navToggle.setAttribute("aria-expanded", String(isOpen));
  mobilePanel.setAttribute("aria-hidden", String(!isOpen));
  document.body.style.overflow = isOpen ? "hidden" : "";
}

if (navToggle) {
  navToggle.addEventListener("click", () => toggleMenu());
}

/* Close on link click */
mobileLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    toggleMenu(false);
  });
});

/* Close on Escape key */
document.addEventListener("keydown", function (e) {
  if (
    navToggle &&
    mobilePanel &&
    e.key === "Escape" &&
    mobilePanel.getAttribute("aria-hidden") === "false"
  ) {
    toggleMenu(false);
    navToggle.focus();
  }
});

/* Close on click outside the panel */
document.addEventListener("click", function (e) {
  if (
    navToggle &&
    mobilePanel &&
    mobilePanel.getAttribute("aria-hidden") === "false" &&
    !mobilePanel.contains(e.target) &&
    !navToggle.contains(e.target)
  ) {
    toggleMenu(false);
  }
});

/* Re-lock body scroll on resize if menu is open */
window.addEventListener("resize", function () {
  if (mobilePanel && mobilePanel.getAttribute("aria-hidden") === "false") {
    document.body.style.overflow = "hidden";
  }
});