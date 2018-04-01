$(document).ready(function(){
    // Activate Carousel
  $(".carousel").carousel();

  // Enable Carousel Indicators
  $(".item").click(function(){
      $(".carousel").carousel(1);
  });

  $(".titleCarousel h3").hide()
  $(".titleCarousel h3:first-child").show();

  // Enable Carousel Controls
  $(".left").click(function(){
      $(".carousel").carousel("prev");
  });

  $(".right").click(function(){
      $(".carousel").carousel("next");
  });

  $(".paragrapheMain").not("#paraAccueil").css("font-size", "1.4em");

  $(".carousel-indicators, .item").hover(function() {
    $(".carousel img").css("opacity", "0.8");
  }, function() {
    $(".carousel img").css("opacity", "1");
  });

  
});
