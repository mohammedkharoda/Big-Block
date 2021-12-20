/*=============== SHOW MENU ===============*/
const Menu = document.getElementById("nav-menu");
const Toggle = document.getElementById("nav-toggle");
const Close = document.getElementById("nav-close");

/* ============== Menu Showing ===================== */

// ------------------ Menu Showing ------------

// Validating if constant exists //
if (Toggle) {
  Toggle.addEventListener("click", function () {
    Menu.classList.add("show-menu");
  });
}

// --------------------- Menu Hiding -----------

if (Close) {
  Close.addEventListener("click", function () {
    Menu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/

function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 80) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);

/*=============== QUESTIONS ACCORDION ===============*/
const accordionItems = document.querySelectorAll(".questions__item");

accordionItems.forEach(function (items) {
  // Accordion header is used to store the question header class and than using it to on every items of the click event.
  const accordionHeader = items.querySelector(".questions__header");
  accordionHeader.addEventListener("click", function () {
    const openItem = document.querySelector(".accordion-open");
    if (openItem && openItem !== items) {
      toggleItem(openItem);
    }
    toggleItem(items);
  });
});

const toggleItem = function (items) {
  // toggleItems of the accordion to make the height of the accordion as same as the content height
  const accordionContent = items.querySelector(".questions__content");
  const iconRotate = items.querySelector(".questions__icon");

  if (items.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    items.classList.remove("accordion-open");
    iconRotate.style.transform = "rotate(90deg)";
    iconRotate.style.transition = "ease-in-out 0.5s";
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    items.classList.add("accordion-open");
  }
};

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);
/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 400) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);
/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-foggy-line";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset:true
});

sr.reveal(`.home__data`);
sr.reveal(`.home__img`, { delay: 500 });
sr.reveal(`.home__social`, { delay: 600 });
sr.reveal(`.about__img,.contact__box`, { origin: "left" });
sr.reveal(`.about__data`, { origin: "left" });
sr.reveal(`.steps__card,.product__card,.questions__group,.footer__container`, {
  origin: "100",
});
