//let inputLeft = document.getElementById("input-left");
//let inputRight = document.getElementById("input-right");
//let range = document.querySelector(".slider > .range");
//let priceFrom = document.querySelector(".price-from");
//let priceTo = document.querySelector(".price-to");
//let priceRange = document.querySelector(".price-range");

//setLeftValue();
//setRightValue();

//function setLeftValue() {
//  let _this = inputLeft,
//    min = parseInt(_this.min),
//    max = parseInt(_this.max);

//  _this.value = Math.min(
//    parseInt(_this.value),
//    parseInt(inputRight.value) - 50
//  );

//  addSpaces(_this.value, priceFrom);

//  priceRange.textContent = `${priceFrom.textContent} - ${priceTo.textContent}`;

//  let percent = ((_this.value - min) / (max - min)) * 100;

//  range.style.left = percent + "%";
//}

//function setRightValue() {
//  let _this = inputRight,
//    min = parseInt(_this.min),
//    max = parseInt(_this.max);

//  _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 50);

//  addSpaces(_this.value, priceTo);

//  priceRange.textContent = `${priceFrom.textContent} - ${priceTo.textContent}`;

//  let percent = ((_this.value - min) / (max - min)) * 100;

//  range.style.right = 100 - percent + "%";
//}

//function addSpaces(value, elem) {
//  if (value.length === 5) {
//    elem.textContent = `${value.replace(/(\d{2})/, "$1 ")}₽`;
//  } else if (value.length === 4) {
//    elem.textContent = `${value.replace(/(\d{1})/, "$1 ")}₽`;
//  } else {
//    elem.textContent = `${value}₽`;
//  }
//}

//inputLeft.addEventListener("input", setLeftValue);
//inputRight.addEventListener("input", setRightValue);
