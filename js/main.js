$(document).ready(function(){
    // Activate Carousel
  $("#myCarousel").carousel();

  // Enable Carousel Indicators
  $(".item").click(function(){
      $("#myCarousel").carousel(1);
  });

  // Enable Carousel Controls
  $(".left").click(function(){
      $("#myCarousel").carousel("prev");
  });

  $(".right").click(function(){
      $("#myCarousel").carousel("next");
  });

  $(".carousel-indicators, .carousel-inner").hover(function() {
    $("#myCarousel img").css("opacity", "0.8");
  }, function() {
    $("#myCarousel img").css("opacity", "1");
  });
});
