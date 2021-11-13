const hamburger = document.querySelector(".header-hamburger");
const menu = document.querySelector(".header-drop-list");

hamburger.addEventListener("click", function() {
  menu.classList.toggle("opened");
});