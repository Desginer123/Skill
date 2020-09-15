$(function(){
   $('.promo__slider-wrapper').slick({
      slidesToShow: 1,
      arrows: true,
		dots: true,
		speed: 1200,
		autoplay: true,
		easing: 'easeOutExpo',
		// variableWidth: true,
		autoplaySpeed: 3500,
      touchThreshold: 8,
      prevArrow: '<button type="button" class="slick-prev"><img src="/images/prev.svg"</button>',
      nextArrow: '<button type="button" class="slick-next"><img src="/images/next.svg"</button>',
      dotsClass: 'slick-dots slider__dots',
  });
  
  $(function($) {
      $(window).scroll(function(){
          if($(this).scrollTop()>84){
              $('.promo__aside').addClass('fixed');
          }
          else if ($(this).scrollTop()<100){
              $('.promo__aside').removeClass('fixed');
          }
      });
    });
});

let arr = document.querySelector('.scroll-to-top')
//
function scrollUp() {
if (window.pageYOffset > 500) {
arr.style.opacity = '1'
} else { arr.style.opacity = '0' }
}
//
arr.onclick = function () {
window.scrollTo(0,0)
}
window.onscroll = scrollUp

$("a").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    $('html, body').animate({ scrollTop: destination }, 2600);
      return false;
  });


$(document).ready(function() {

	$('.image-popup-zoom').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true
		}
		
	});

	$('.image-popup-zoom').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		image: {
			verticalFit: false
		}
	});

	$('.image-popup-zoom').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

});


$(document).ready(function() {
	$('.news-rainbow__wrapper').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
	});
});

$(document).ready(function() {
	$('.news__games-block').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
	});
});

$(document).ready(function() {
	$('.event__guarden-of-memory-wrapper').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
	});
});

$(function () { 
	$('.menu a').each(function () {
		 var location = window.location.href;
		 var link = this.href; 
		 if(location == link) {
			  $(this).addClass('active_hover');
		 }
	});
});