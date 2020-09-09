const select = document.querySelectorAll(".select"),
  selectTitleLittle = document.querySelector(".dropdown-1"),
  selectTitle = document.querySelectorAll(".select__title"),
  selectContent = document.querySelectorAll(".select__content"),
  resetSelect = document.querySelector(".resetSelect"),
  applySelect = document.querySelector(".applySelect");

let questsCount = 0,
  quantitySum = 0,
  kidsQuantity = 0;

for (let i = 0; i < select.length; i++) {
  selectToggle(selectTitle[i], select[i]);
  selectOptions(selectContent[i]);
}

// Toggle dropdown
function selectToggle(selectTitle, select, selectContent) {
  selectTitle.addEventListener("click", (elem) => {
    if ("active" === select.getAttribute("data-state")) {
      select.setAttribute("data-state", "");

      if (elem.target.classList.contains("dropdown-2"))
        dropdownQuests(false, selectTitle, select);
      else if (elem.target.classList.contains("dropdown-1"))
        dropdownRoomAmenities(false, selectTitle);
      //
    } else {
      select.setAttribute("data-state", "active");

      if (elem.target.classList.contains("dropdown-2"))
        dropdownQuests(true, selectTitle, select);
      else if (elem.target.classList.contains("dropdown-1"))
        dropdownRoomAmenities(true, selectTitle);
    }
  });
}

// Dropdown with a choice amenities of the room
function dropdownRoomAmenities(isActive, selectTitle) {
  isActive
    ? (selectTitle.style.borderColor = "rgba(31, 32, 65, 0.5)")
    : (selectTitle.style.borderColor = "rgba(31, 32, 65, 0.25)");

  const amenitiesArr = Array.from(
    selectTitle.nextSibling.querySelectorAll(".item")
  );

  let dropdownAmenitiesLabel = "";

  amenitiesArr.forEach((elem) => {
    const amenityQuantity = +elem.querySelector(".quantity").textContent;
    let amenityName = elem.querySelector("span").textContent;

    if (amenityName == "Спальни") {
      if (amenityQuantity == 1) amenityName = "спальня, ";
      else if (1 < amenityQuantity && amenityQuantity < 5)
        amenityName = "спальни, ";
      else amenityName = "спален, ";
    } else if (amenityName == "Кровати") {
      if (amenityQuantity == 1) amenityName = "кровать, ";
      else if (1 < amenityQuantity && amenityQuantity < 5)
        amenityName = "кровати, ";
      else amenityName = "кроватей, ";
    } else {
      if (amenityQuantity == 1) amenityName = "ванная комната";
      else if (1 < amenityQuantity && amenityQuantity < 5)
        amenityName = "ванные комнаты";
      else amenityName = "ванных комнат";
    }

    amenityQuantity
      ? (dropdownAmenitiesLabel += `${amenityQuantity} ${amenityName}`)
      : (dropdownAmenitiesLabel += "");
  });

  if (!dropdownAmenitiesLabel) dropdownAmenitiesLabel = "Параметры";
  else if (dropdownAmenitiesLabel.length > 23)
    dropdownAmenitiesLabel = dropdownAmenitiesLabel.slice(0, 24) + "...";

  selectTitle.textContent = dropdownAmenitiesLabel;
}

// Dropdown with a choice of the number of guests
function dropdownQuests(isActive, selectTitle, select) {
  if (isActive) {
    selectTitle.style.borderColor = "rgba(31, 32, 65, 0.5)";

    resetSelect.style.pointerEvents = "auto";
    resetSelect.style.cursor = "pointer";
    applySelect.style.visibility = "visible";
  } else {
    selectTitle.style.borderColor = "rgba(31, 32, 65, 0.25)";

    resetSelect.style.pointerEvents = "none";
    resetSelect.style.cursor = "auto";
    applySelect.style.visibility = "hidden";
  }

  // Reset dropdown button
  resetSelect.addEventListener("click", () => {
    Array.from(document.querySelectorAll(".v-2")).map((item) => {
      item.textContent = 0;
    });
    resetSelect.style.visibility = "hidden";
    selectTitle.textContent = "Сколько гостей";

    Array.from(select.querySelectorAll(".btn-minus")).map((item) =>
      item.classList.add("disabled")
    );

    Array.from(select.querySelectorAll(".btn-plus")).map((item) =>
      item.classList.remove("disabled")
    );

    questsCount = quantitySum = kidsQuantity = 0;
  });

  // Apply dropdown button
  applySelect.addEventListener("click", () => {
    select.setAttribute("data-state", "");

    selectTitle.style.borderColor = "rgba(31, 32, 65, 0.25)";
    applySelect.style.visibility = "hidden";
    resetSelect.style.pointerEvents = "none";
    resetSelect.style.cursor = "auto";

    questsCount = 0;

    Array.from(document.querySelectorAll(".v-2")).map((item) => {
      questsCount += +item.textContent;
    });

    kidsQuantity = +applySelect.parentElement.previousElementSibling.querySelector(
      ".quantity"
    ).textContent;

    // Setting text
    if (questsCount) {
      let notBabiesOptionName = "",
        babiesOptionLabel = "",
        babiesOptionName = "";

      if (questsCount == 1) notBabiesOptionName = "гость";
      else if (1 < questsCount && questsCount < 5)
        notBabiesOptionName = "гостя";
      else notBabiesOptionName = "гостей";

      if (kidsQuantity == 1) babiesOptionName = "младенец";
      else if (1 < kidsQuantity && kidsQuantity < 5)
        babiesOptionName = "младенца";
      else babiesOptionName = "младенцев";

      if (kidsQuantity)
        babiesOptionLabel = `, ${kidsQuantity} ${babiesOptionName}`;

      selectTitle.textContent = `${questsCount} ${notBabiesOptionName}${babiesOptionLabel}`;
    } else selectTitle.textContent = "Сколько гостей";
  });
}

// Select preferenses
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

// Add preferense
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

// Reduce preferense
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
