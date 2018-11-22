var nav = document.querySelector(".menu__list");
var navBtn = document.querySelector(".menu__button");



navBtn.addEventListener("click", function () {
  if (nav.classList.contains("menu__list--closed")) {
    nav.classList.remove("menu__list--closed");
    nav.classList.add("menu__list--opened");
  }
  else {
    nav.classList.remove("menu__list--opened");
    nav.classList.add("menu__list--closed");
  }
})



