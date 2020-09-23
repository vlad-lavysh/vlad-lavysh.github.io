"use strict";

const $burger = document.querySelector(".menu-burger");

$burger.addEventListener("click", () => {
  document.querySelector(".header__content").classList.toggle("show-menu");
});

if (document.querySelector(".search-page")) {
  const enterBtns = document
    .querySelector(".header__enter-btns")
    .querySelectorAll(".regular-btn");

  enterBtns.forEach((el) => {
    el.setAttribute("href", `pages/${el.getAttribute("href")}`);
  });
}
