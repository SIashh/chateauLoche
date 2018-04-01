$(document).ready(function(){
  console.log("Passe dans jQuery");
    // au clic sur un lien
    $('a.scroll').on('click', function(evt){
       // bloquer le comportement par défaut: on ne rechargera pas la page
       evt.preventDefault();
       // enregistre la valeur de l'attribut  href dans la variable target
	var target = $(this).attr('href');
       /* le sélecteur $(html, body) permet de corriger un bug sur chrome
       et safari (webkit) */
       var heightBandeau = $("#bandana").height();
	$('html, body')
       // on arrête toutes les animations en cours
       .stop()
       /* on fait maintenant l'animation vers le haut (scrollTop) vers
        notre ancre target */
       .animate({scrollTop: $(target).offset().top-heightBandeau}, 1000 );
    });

    $('#fleche').on('click', function(evt){
       // bloquer le comportement par défaut: on ne rechargera pas la page
       evt.preventDefault();
       // enregistre la valeur de l'attribut  href dans la variable target
  var target = $(this).attr('href');
       /* le sélecteur $(html, body) permet de corriger un bug sur chrome
       et safari (webkit) */
       var heightBandeau = $("#bandana").height();
  $('html, body')
       // on arrête toutes les animations en cours
       .stop()
       /* on fait maintenant l'animation vers le haut (scrollTop) vers
        notre ancre target */
       .animate({scrollTop: $(target).offset().top-heightBandeau}, 1000 );
    });

    $("#a").click(function(){
      $(document).scrollTop(150);
    });


    var fadeStart=200 // 100px scroll or less will equiv to 1 opacity
    ,fadeUntil=600 // 200px scroll or more will equiv to 0 opacity
    ,fading = $('#bandana');

    opacity = 0.5;
    rgba = "rgba(63,50,51,"+opacity+")";
    fading.css('background-color',rgba);

    $(window).bind('scroll', function(){
      var offset = $(document).scrollTop()
      ,opacity=0.5
      //console.log("offset = "+offset);
      if( offset<=fadeStart ){
        // $("#logo").animate({height:"100px",width:"200px"exhn},200);
        opacity = 0.5;

      }else if( offset<=fadeUntil ){

        opacity=offset/(fadeUntil);

      }else{
        opacity=1;
      }
      console.log("offset = "+offset+"\n")
      console.log("opacity = "+opacity+"\n")
      rgba = "rgba(63,50,51,"+opacity+")";;
      fading.css('background-color',rgba);
    });

    console.log($(window).height());
    console.log($(window).width());
    console.log($("myVideo").width());
    console.log($("#myVideo").height());



    $("#volume").click(function(){
      console.log($("#myVideo").attr("muted"));
      if( $("#myVideo").prop('muted')){
        $("#myVideo").prop('muted', false);
        $("#volume").html("volume_up");
      }else {
        $("#myVideo").prop('muted', true);
        $("#volume").html("volume_off");
      }

    });
});
