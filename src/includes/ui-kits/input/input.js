import "@chenfengyuan/datepicker/dist/datepicker.js";
// Select dropwown --------------
const select = document.querySelector(".select");
const selectTitle = select.querySelector(".select__title");
const selectContent = select.querySelector(".select__content");

// Toggle menu
selectTitle.addEventListener("click", () => {
  if ("active" === select.getAttribute("data-state")) {
    select.setAttribute("data-state", "");
  } else {
    select.setAttribute("data-state", "active");
  }
});

// Select preferenses --------------
selectContent.addEventListener("click", (elem) => {
  if (elem.target.classList.contains("btn-plus")) {
    add(elem.target);
  }
  if (elem.target.classList.contains("btn-minus")) {
    reduce(elem.target);
  }
});

function add(el) {
  el.previousSibling.textContent == 5
    ? (el.previousSibling.textContent = 5)
    : el.previousSibling.textContent++;
}
function reduce(el) {
  el.nextSibling.textContent == 0
    ? (el.nextSibling.textContent = 0)
    : el.nextSibling.textContent--;
}

// Datepicker --------------------
$('[data-toggle="datepicker"]').datepicker();
//document.getElementById('arrowBack')

// --- elem.target.closest('.item__calc').previousSibling ---
