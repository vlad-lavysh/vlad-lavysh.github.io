"use strict";

const pagesNumbers = document.querySelectorAll(".num");
const nextPage = document.querySelector(".next-page");

const paginationContainer = document.querySelector(".pagination__pages");

pagesNumbers[0].classList.add("active");

paginationContainer.addEventListener("click", (elem) => {
  if (elem.target.classList.contains("num")) {
    elem.target.classList.add("active");

    pagesNumbers.forEach((el) => {
      if (el != elem.target) el.classList.remove("active");
    });
  }

  let currentElem = document.querySelector(".active");

  if (elem.target.closest(".next-page")) {
    currentElem.classList.remove("active");

    if (currentElem.nextSibling && currentElem.nextSibling != nextPage)
      currentElem.nextSibling.classList.add("active");
    else if (currentElem.nextSibling == nextPage)
      currentElem.classList.add("active");
  }
});
