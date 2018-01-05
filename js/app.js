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

// Efectos de las animaciones

$("#titulo").waypoint(function() {
	$(this).toggleClass($(this).data('animated'));
},
{ offset: 'bottom-in-view' });
/*
$("[class*='animated']").waypoint(function() {
	$(this).toggleClass($(this).data('animated'));
}); */
/* http://www.oxygenna.com/tutorials/scroll-animations-using-waypoints-js-animate-css */