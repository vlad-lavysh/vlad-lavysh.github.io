"use strict";

const $burger = document.querySelector(".menu-burger");

$burger.addEventListener("click", () => {
  document.querySelector(".header__content").classList.toggle("show-menu");
});
