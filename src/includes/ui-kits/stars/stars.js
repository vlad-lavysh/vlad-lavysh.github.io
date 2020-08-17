"use strict";

const $starsContainer = document.querySelector("#clickableStars");

$starsContainer.addEventListener("click", (elem) => {
  elem.target.style.backgroundPositionY = "-3px";
  seachPreviousSibling(elem.target);
  seachNextSibling(elem.target);
});

function seachPreviousSibling(elem) {
  if (elem.previousSibling) {
    const elemSibling = elem.previousSibling;
    elemSibling.style.backgroundPositionY = "-3px";

    seachPreviousSibling(elemSibling);
  } else return;
}

function seachNextSibling(elem) {
  if (elem.nextSibling) {
    const elemSibling = elem.nextSibling;
    elemSibling.style.backgroundPositionY = "-32px";

    seachNextSibling(elemSibling);
  } else return;
}
