"use strict";

const $optionToggle = document.getElementById("optionToggle");

$optionToggle.addEventListener("click", () => {
  document
    .querySelector(".rooms-page__options")
    .classList.toggle("options-active");
});
