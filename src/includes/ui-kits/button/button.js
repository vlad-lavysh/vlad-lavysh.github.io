// Like button
const likeButton = document.querySelector(".like-container");

likeButton.addEventListener("click", () => {
  const $heart = document.querySelector(".like-container__heart");

  if (likeButton.classList.contains("like-active")) {
    likeButton.classList.remove("like-active");
    //$heart.classList.remove("like-active__heart");
    document.getElementById("likesCount").textContent--;
  } else {
    likeButton.classList.add("like-active");
    //$heart.classList.add("like-active__heart");
    document.getElementById("likesCount").textContent++;
  }
});
