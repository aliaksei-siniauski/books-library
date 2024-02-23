export { switchMenu, closeMenu };
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header-nav");
const navList = document.querySelector(".nav");
const navItems = document.querySelectorAll(".nav__item");
const body = document.querySelector("body");
const hamburgerLineCenter = document.querySelector(".hamburger__line");

const switchMenu = () => {
  setTimeout(() => {
    hamburger.classList.toggle("open");
    hamburgerLineCenter.classList.toggle("open");
    nav.classList.toggle("open");
    navList.classList.toggle("open");
    body.classList.toggle("stop-scrolling");
  }, 300);
};
hamburger.addEventListener("click", switchMenu);

const closeMenu = () => {
  setTimeout(() => {
    hamburger.classList.remove("open");
    hamburgerLineCenter.classList.remove("open");
    nav.classList.remove("open");
    navList.classList.remove("open");
    body.classList.remove("stop-scrolling");
  }, 300);
};
navItems.forEach((el) => el.addEventListener("click", closeMenu));
