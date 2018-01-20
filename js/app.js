var navbar = document.getElementById("menu"),
    sticky = navbar.offsetTop;

var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];
  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }
  this.el.innerHTML = '<span class="escritura">'+this.txt+'</span>';
  var that = this;
  var delta = 200 - Math.random() * 100;
  if (this.isDeleting) { delta /= 2; }
  if (!this.isDeleting && this.txt === fullTxt) {
  delta = this.period;
  this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }
  setTimeout(function() {that.tick();}, delta);
};

function typeText() {
  var elements = document.getElementsByClassName('tipeo');
  for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
  }
};

function stickyMenu() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("menu-bottom");
    navbar.classList.remove("menu-top");
  } else {
    navbar.classList.remove("menu-bottom");
    navbar.classList.add("menu-top");
  }
}

function animated() {
  $(".animated").waypoint(function() {
    $(this).removeClass('hide');
    $(this).addClass($(this).data('animated'));
  }, { offset: '90%'});
};
function openTimeline() {
  $('.time-list > .time-item').click(function(){
    $(".time-list > div.active").removeClass("active");
    $(".timeline-content > div.show").removeClass("show");
    $(this).addClass("active");
    $(".timeline-content > div"+$(this).data('timeline')).addClass("show");    
  });
};
function openSlider(){
  var slideIndex = 1;
  $('.slider > div.slider-button').click(function(){
    if($(this).hasClass('slider-top')){
      showSlider(slideIndex += -1,$(this).parent().attr('id')); 
    }else{
      showSlider(slideIndex += 1,$(this).parent().attr('id')); 
    }
  });
  function showSlider(n,id) {
    var x = $('#'+id+'.slider > div.slider-content');
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} 
    for ( var i = 0; i < x.length; i++) {
      $(x[i]).removeClass("show");      
    }
    $(x[slideIndex-1]).addClass("show"); 
  };
};

$( document ).ready(function() {animated(),typeText(),openTimeline(),openSlider()});
window.onscroll = function() {stickyMenu()};
