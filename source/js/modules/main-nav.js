const navMain = document.querySelector(".main-nav");
const navToggle = document.querySelector(".main-nav__toggle");
const logo = document.querySelector(".page-header__logo");

const openMenu = function() {
  navMain.classList.remove("main-nav--nojs");

  navToggle.addEventListener("click", function() {

    if (navMain.classList.contains("main-nav--closed")) {
      navMain.classList.remove("main-nav--closed");
      navMain.classList.add("main-nav--opened");
      logo.classList.add("main-nav--opened");
    } else {
      navMain.classList.add("main-nav--closed");
      navMain.classList.remove("main-nav--opened");
      logo.classList.remove("main-nav--opened");
    }
  });
};

export {openMenu};
