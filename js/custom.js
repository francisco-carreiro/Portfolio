//=====================================================================================
//  01.   Preloader For Hide loader
//  02.   Scroll Top
//  03.   Navbar scrolling navbar Fixed
//  04.   Services Slider
//  05.   Skill Counter
//  06.   LightBox / Fancybox
//  07.   Gallery With Filters List
//=====================================================================================

(function ($) {
  "use strict";

  var $body = $("body"),
    $window = $(window),
    $contact = $('#contact-form')

  $body.scrollspy({
    target: ".navbar-collapse",
    offset: 20

  });

  //=====================================================================================
  //  01.   Preloader For Hide loader
  //=====================================================================================

  function handlePreloader() {
    if ($('.preloader').length) {
      $('.preloader').delay(500).fadeOut(500);
      $('body').removeClass('page-load');
    }
  }

  $window.on('load', function () {
    handlePreloader();
  });

  //=====================================================================================
  // 02.  Scroll Top
  //======================================================================================

  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $('#scroll').fadeIn();
    } else {
      $('#scroll').fadeOut();
    }
  });
  $('#scroll').click(function () {
    $("html, body").animate({
      scrollTop: 0
    }, 1000);
    return false;
  });

  //====================================================================================
  // 03.    Navbar scrolling navbar Fixed
  //====================================================================================

  $window.on("scroll", function () {

    var bodyScroll = $window.scrollTop(),
      navbar = $(".main_nav"),
      logo = $(".main_nav .navbar-brand> img");

    if (bodyScroll > 100) {

      navbar.addClass("nav-scroll");
    } else {

      navbar.removeClass("nav-scroll");
    }
  });

  //=====================================================================================
  //  04.   Services Slider
  //=====================================================================================

  $('.services_item').owlCarousel({
    loop: true,
    autoplay: false,
    autoplayTimeout: 5000,
    nav: true,
    dots: false,
    navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
    responsive: {

      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1024: {
        items: 3
      },
      1200: {
        items: 3
      }
    }

  });

  //=====================================================================================
  // 05.   Skill Counter
  //=====================================================================================

  function factCounter() {
    if ($('.fact-counter').length) {
      $('.fact-counter .count.animated').each(function () {

        var $t = $(this),
          n = $t.find(".count-num").attr("data-stop"),
          r = parseInt($t.find(".count-num").attr("data-speed"), 10);

        if (!$t.hasClass("counted")) {
          $t.addClass("counted");
          $({
            countNum: $t.find(".count-text").text()
          }).animate({
            countNum: n
          }, {
            duration: r,
            easing: "linear",
            step: function () {
              $t.find(".count-num").text(Math.floor(this.countNum));
            },
            complete: function () {
              $t.find(".count-num").text(this.countNum);
            }
          });
        }

        //set skill building height


        var size = $(this).children('.progress-bar').attr('aria-valuenow');
        $(this).children('.progress-bar').css('width', size + '%');

      });
    }
  }

  if ($('.wow').length) {
    var wow = new WOW({
      boxClass: 'wow', // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset: 0, // distance to the element when triggering the animation (default is 0)
      mobile: true, // trigger animations on mobile devices (default is true)
      live: true // act on asynchronously loaded content (default is true)
    });
    wow.init();
  }

  // When document is Scrollig, do

  $(window).on('scroll', function () {
    factCounter();
  });

  //=====================================================================================
  //  06.   LightBox / Fancybox
  //=====================================================================================

  $('[data-fancybox="gallery"]').fancybox({
    animationEffect: "zoom-in-out",
    transitionEffect: "slide",
    transitionEffect: "slide",
  });

  //=====================================================================================
  //  07.   Gallery With Filters List
  //=====================================================================================

  if ($('.filter-list').length) {
    $('.filter-list').mixItUp({});
  }



})(jQuery);