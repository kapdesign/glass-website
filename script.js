const menuToggle = document.querySelector(".menu-toggle input");
const links = document.querySelector(".links");

menuToggle.addEventListener("click", function () {
  links.classList.toggle("slide");
});
