const likeButtons = document.querySelectorAll(".like-container");

likeButtons.forEach((elem) => {
  elem.addEventListener("click", () => {
    if (elem.classList.contains("like-active")) {
      elem.classList.remove("like-active");
      elem.lastChild.textContent--;
    } else {
      elem.classList.add("like-active");
      elem.lastChild.textContent++;
    }
  });
});
