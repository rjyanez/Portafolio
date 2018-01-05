// Efecto sticky en el menu

window.onscroll = function() {myFunction()};
var navbar = document.getElementById("menu");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("menu-bottom");
    navbar.classList.remove("menu-top");
  } else {
    navbar.classList.remove("menu-bottom");
    navbar.classList.add("menu-top");
  }
}