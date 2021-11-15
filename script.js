const hamburger = document.querySelector(".header-hamburger");
const menu = document.querySelector(".header-drop-list");
const loadbutton = document.querySelector(".load-more-button-frame");
const loadbuttoncontainer = document.querySelector(".load-more-button-container");
const hiddenCards = document.querySelectorAll('.completed-airdrops-frame.ca-frame-hidden')

hamburger.addEventListener("click", function() {
  menu.classList.toggle("opened");
});

hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("hamburger-rotate");
});

loadbutton.addEventListener("click", function() {
  hiddenCards.forEach(function(card) {
    card.classList.remove('ca-frame-hidden')
  })
  loadbuttoncontainer.classList.add("ca-frame-hidden")  
});