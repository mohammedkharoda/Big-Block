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
  const iconRotate = items.querySelector(".question__icon");

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

/*=============== SHOW SCROLL UP ===============*/

/*=============== DARK LIGHT THEME ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
