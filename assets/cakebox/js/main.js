(function($) {
  "use strict";
    
    //   Preloader
    $(".preloader").fadeOut(500);
    
    

  // offcanvas menu
  $(".menu-icon").on("click", function () {
    $(".offcanvas-menu,.offcanvas-overly").addClass("active");
    $(document.body).addClass('body-overflow');
    return false;
  });
  $(".menu-close,.offcanvas-overly").on("click", function () {
      $(".offcanvas-menu,.offcanvas-overly").removeClass("active");
      $(document.body).removeClass('body-overflow');
      
  });
    

    // Scroll Sticky
  var windows = $(window);
  var Header = $(".header-default");  
  if (Header.length) {
    var navOffset = Header.offset().top;
    windows.on('scroll', function() {
      var scroll = windows.scrollTop();
      if (scroll > navOffset) {
        $(".header-default").addClass('sticky');
      }
      else {
        $(".header-default").removeClass('sticky');
      }
    });
  }
  var documentElem = $(document), navAppear = $('header'), lastScrollTop=0;
  documentElem.on('scroll', function() {
    var currentScrollTop = $(this).scrollTop();
    if(currentScrollTop > lastScrollTop) navAppear.addClass('nav-out');
    else navAppear.removeClass('nav-out');
    lastScrollTop = currentScrollTop;
  });

$('.cakes-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        responsiveClass:true,
        autoplay:true,
        autoplayTimeout:5000,
        navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        responsive:{
          0:{
            items:1,
          },
          600:{
            items:2,
          },
          1000:{
            items:3,
            loop:true
          }
        }
      });

  
  // $('.cat-carousel').owlCarousel({
  //       loop:true,
  //       margin:10,
  //       nav:true,
  //       dots:false,
  //       responsiveClass:true,
  //       autoplay:true,
  //       autoplayTimeout:5000,
  //       navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
  //       responsive:{
  //         0:{
  //           items:1,
  //         },
  //         600:{
  //           items:2,
  //         },
  //         1000:{
  //           items:3,
  //           loop:true
  //         }
  //       }
  //     });

  $('.products .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    dots:false,
    nav:true,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    rewindNav : true,
    autoplay:true,
    autoplayTimeout:6000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            dots:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            loop:true
        },
    }
});
 
 $('.feat-products .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    dots:false,
    nav:true,
    interval: 4000,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    rewindNav : true,
    autoplay:true,
    autoplayTimeout:6000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            dots:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav: true,
            loop:true
        },
    }
});

$('.carousel').carousel({

    interval: 4000,

    pause: "hover"

});
/*
// Home Main Slider
    
    $('.home-main-slider .owl-carousel').owlCarousel({
    loop:true,
    items: 1,
    loop:true,
    margin:0,
    dots:true,
    nav:false,
    autoplay:true,
    autoplayTimeout:9000,
    autoplayHoverPause:true

}); 
    
   
    
// Product Benfits
$('.product-list .owl-carousel').owlCarousel({
    loop:true,
    items: 1,
    loop:true,
    margin:0,
    dots:true,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true

}); 

$('.carousel').carousel({

    interval: 6000,

    pause: "hover"

});

    
// Product Carousel
$('.products .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    dots:false,
    nav:true,
    navText : ["",""],
    rewindNav : true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false,
            dots:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            loop:false
        },
    }
})    
    
    
// Testimonials    
$('.testimonial-carousel').owlCarousel({
    items:1,
    loop:true,
    margin:40,
    nav:true,
    navText : ["",""],
    rewindNav : true,
    dots:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            nav:false,
            dots:true
        },
        600:{
            nav:false
        },
        1000:{
            nav:true,
            dots:false
        },
    }
})*/

})(jQuery);