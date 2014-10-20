'use strict';

(function($) {
	$(function($) {
	
		// Anchor link
    $('.page-scroll a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
    });

		// Highlight the top nav as scrolling occurs
		$('body').scrollspy({
			target: '.navbar-fixed-top'
		});

		// Closes the Responsive Menu on Menu Item Click
		$('.navbar-collapse ul li a').click(function() {
			$('.navbar-toggle:visible').click();
		});
		
		// Sticky header
		(function($) {
			var header = $('.navbar-fixed-top' ),
				didScroll = false,
				changeHeaderOn = 300;

			function init() {
				$(window).scroll(function() {
					if( !didScroll ) {
						didScroll = true;
						setTimeout( scrollPage, 250 );
					}
				});
			}

			function scrollPage() {
				var sy = $(window).scrollTop();
				if ( sy >= changeHeaderOn ) {
					header.addClass('navbar-shrink');
				}
				else {
					header.removeClass('navbar-shrink');
				}
				didScroll = false;
			}

			init();
		})($);

	});
})(window.jQuery);