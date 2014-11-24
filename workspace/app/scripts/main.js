'use strict';

window.jQuery(function($) {

	// Anchor link
	$('.page-scroll a').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1000);
		event.preventDefault();
	});

	// Sticky header
	(function($) {
		var header = $('header' ),
			navbar = $('.navbar-fixed-top' ),
			didScroll = false;

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
			if ( sy >= header.height() - 200 ) {
				navbar.addClass('navbar-shrink');
			}
			else {
				navbar.removeClass('navbar-shrink');
			}
			didScroll = false;
		}

		init();
	})($);
	
	// specify resume 
	(function($) {
		var num = $('<span class="number print-only">(647) 938-2330</span>');
		$('span.email').after(num);
	})($);

	(function($) {
		var waitGA = function() {
			if('undefined' === typeof window.ga) {
				setTimeout(waitGA, 100);
			} else {
				runGA(window.ga);
			}
		};

		var runGA = function(ga) {
	    ga('create', 'UA-55892930-1', 'auto');
	    ga('send', 'pageview');

	    $('.btn-social').click(function() {
	    	var d = $(this).data('ga');
	    	ga('send', 'event', 'social', 'click', d);
	    });
	    $('.btn-resume').click(function() {
				var d = $(this).data('ga');
	    	ga('send', 'event', 'resume', 'click', d);
	    });
	    $('.portfolio-link').click(function() {
				var d = $(this).data('ga');
	    	ga('send', 'event', 'portfolio', 'click', d);
	    });
	  };

		waitGA();
	})($);
});