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
		var GET = function (name) {
			name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
			var regex = new RegExp('[\\?&]' + name + '=([^&#]*)'),
					results = regex.exec(location.search);
			return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
		}, type = GET('t'), num = $('<span class="number print-only">(647) 938-2330</span>');
		
		switch (type) {
			case 'frontend':
				$('.php').css('display', 'none');
				break;
			case 'php':
				$('.frontend').css('display', 'none');
				break;
			default: 
				$('.frontend').css('display', 'none');
				break;
		}
		
		if ('' !== type) {
			$('span.email').after(num);
		}
	})($);

});