$(document).ready(function() {
  $('.zoom').magnify();
  if ( $(window).width() < 1000) {
    $("#scr-2").html(
      "<img src='images/sequence-mobile.jpg' class='zoom' data-magnify-src='images/sequence-mobile-large.jpg'><a href='#scr-3'><h5 class='statement scroll-down'>▽</h5></a>"
    );
    $("#myCarousel").html(
      "<div class='carousel-image-block'><img class='carousel-image' src='images/carousel-1.jpg'><img class='carousel-image' src='images/carousel-2.jpg'><img class='carousel-image' src='images/carousel-3.jpg'></div>"
    )
  }
});
