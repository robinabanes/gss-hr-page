$(document).ready(function(){
  //ANCHOR
  $("a").on('click', function(event) {

     // Make sure this.hash has a value before overriding default behavior
     if (this.hash !== "") {
       // Prevent default anchor click behavior
       event.preventDefault();

       // Store hash
       var hash = this.hash;

       // Using jQuery's animate() method to add smooth page scroll
       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
       $('html, body').animate({
         scrollTop: $(hash).offset().top
       }, 800, function(){

         // Add hash (#) to URL when done scrolling (default click behavior)
         window.location.hash = hash;
       });
     } // End if
   });

    $(".cp-nav-text_1").click(function(){
        $(".cp-nav-link").removeClass("is-active");
        $(this).addClass("is-active");
        $(".cp-slider").removeClass("is-active");
        $(".slider-container_1").addClass("is-active");
        $(".slider-container_1").get(0).slick.setPosition();


    });

    $(".cp-nav-text_2").click(function(){
        $(".cp-nav-link").removeClass("is-active");
        $(this).addClass("is-active");
        $(".cp-slider").removeClass("is-active");
        $(".slider-container_2").addClass("is-active");
        $(".slider-container_2").get(0).slick.setPosition();
    });

    $(".cp-nav-text_3").click(function(){
        $(".cp-nav-link").removeClass("is-active");
        $(this).addClass("is-active");
        $(".cp-slider").removeClass("is-active");
        $(".slider-container_3").addClass("is-active");
        $(".slider-container_3").get(0).slick.setPosition();
    });

    $(".cp-nav-text_4").click(function(){
        $(".cp-nav-link").removeClass("is-active");
        $(this).addClass("is-active");
        $(".cp-slider").removeClass("is-active");
        $(".slider-container_4").addClass("is-active");
        $(".slider-container_4").get(0).slick.setPosition();
    });

    //GSS MAPS
    $("#gss-map_ph").click(function(){
      $(".gss-ph-iframe").removeClass("hide");
      $(".gss-jp-iframe").addClass("hide");
    });
    $("#gss-map_jp").click(function(){
      $(".gss-jp-iframe").removeClass("hide");
      $(".gss-jp-iframe").addClass("show");
      $(".gss-ph-iframe").addClass("hide");
    });


  });

    $('.slider-nav').slick({
     slidesToShow: 4,
     slidesToScroll: 1,
     speed: 300,
     dots: false,
     focusOnSelect: true
    });

    // CAREER PATH - SLIDER
    $('.slider-container_1').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         dots: false,
         infinite: false,
         speed: 300,
         fade: true,
         focusOnSelect: true
    });
    $('.slider-container_2').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         dots: false,
         infinite: false,
         speed: 300,
         fade: true,
         focusOnSelect: true
    });
    $('.slider-container_3').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         dots: false,
         infinite: false,
         speed: 300,
         fade: true,
         focusOnSelect: true
    });
    $('.slider-container_4').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         dots: false,
         infinite: false,
         speed: 300,
         fade: true,
         focusOnSelect: true
    });

//   STICKY NAV BAR


    var yourNavigation = $("#nav-cont");
        stickyDiv = "sticky";
        yourHeader = $('#header-container').height();

    $(window).scroll(function() {
      if( $(this).scrollTop() > 980) {
        yourNavigation.addClass(stickyDiv);
      } else {
        yourNavigation.removeClass(stickyDiv);
      }
    });


    $(function($) {
      $('a[href*="#"]:not([href="#"])').click(function(e) {
         if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {


          var target = $(this.hash);

          headerHeight = 120;

          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

          if (target.length) {
            $('html,body').stop().animate({
              scrollTop: target.offset().top - 100 //offsets for fixed header
            }, 'linear');

          }
        }
      });
    });
