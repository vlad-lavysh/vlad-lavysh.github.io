import "@chenfengyuan/datepicker/dist/datepicker.js";
// Select dropwown --------------
const select = document.querySelectorAll(".select");
const selectTitleLittle = document.querySelector(".dropdown-1");
const selectTitle = document.querySelectorAll(".select__title");
const selectContent = document.querySelectorAll(".select__content");
const resetSelect = document.querySelector(".resetSelect");
const applySelect = document.querySelector(".applySelect");
let questsCount = 0;
let quantitySum = 0;

for (let i = 0; i < 3; i++) {
  selectToggle(selectTitle[i], select[i]);
  selectOptions(selectContent[i]);
}
//selectToggle(selectTitle[0], select[0]);
//selectOptions(selectContent[0]);

//selectToggle(selectTitle[1], select[1]);
//selectOptions(selectContent[1]);

//selectToggle(selectTitle[2], select[2]);
//selectOptions(selectContent[2]);

resetSelect.addEventListener("click", () => {
  Array.from(document.querySelectorAll(".v-2")).map((item) => {
    item.textContent = 0;
  });
  resetSelect.style.visibility = "hidden";
  selectTitle[1].textContent = "Сколько гостей";

  // \/ ---------- Need to redo (DRY) ------------ \/
  Array.from(select[1].querySelectorAll(".btn-minus")).map((item) =>
    item.classList.add("disabled")
  );

  Array.from(select[1].querySelectorAll(".btn-plus")).map((item) =>
    item.classList.remove("disabled")
  );
  // /\ ---------- Need to redo (DRY) ------------ /\

  questsCount = 0;
  quantitySum = 0;
});

applySelect.addEventListener("click", () => {
  select[1].setAttribute("data-state", "");
  Array.from(document.querySelectorAll(".v-2")).map((item) => {
    questsCount += +item.textContent;
  });

  questsCount
    ? (selectTitle[1].textContent = `Гостей ${questsCount}`)
    : (selectTitle[1].textContent = "Сколько гостей");
});

// Toggle menu
function selectToggle(selectTitle, select) {
  selectTitle.addEventListener("click", () => {
    if ("active" === select.getAttribute("data-state")) {
      select.setAttribute("data-state", "");

      // Title of little input

      //const names = ["кровати", "спальни", "ванные комнаты"];
      //for (let item of document.querySelectorAll(".v-1")) {
      //  if (item.textContent == 0) return;

      //  let i = 0;
      //  const elemTitle = names[i] + " " + item.textContent;
      //  i++;

      //  selectTitleLittle.textContent += elemTitle;
      //}
    } else {
      select.setAttribute("data-state", "active");
    }
  });
}

// Select preferenses --------------
function selectOptions(selectContent) {
  selectContent.addEventListener("click", (elem) => {
    if (elem.target.classList.contains("btn-plus")) {
      add(elem.target);
    }
    if (elem.target.classList.contains("btn-minus")) {
      reduce(elem.target);
      if (quantitySum == 0) resetSelect.style.visibility = "hidden";
    }
  });
}

function add(el) {
  if (el.previousSibling.textContent == 5) return;
  else {
    resetSelect.style.visibility = "visible";
    el.previousSibling.textContent++;
    quantitySum++;
  }
  el.previousSibling.textContent == 5
    ? el.classList.add("disabled")
    : el.classList.remove("disabled");

  el.previousSibling.previousSibling.classList.remove("disabled");
}

function reduce(el) {
  if (el.nextSibling.textContent == 0) return;
  else {
    el.nextSibling.textContent--;
    quantitySum--;
  }
  el.nextSibling.textContent == 0
    ? el.classList.add("disabled")
    : el.classList.remove("disabled");

  el.nextSibling.nextSibling.classList.remove("disabled");
}

// Datepicker --------------------
$('[data-toggle="datepicker"]').datepicker();
