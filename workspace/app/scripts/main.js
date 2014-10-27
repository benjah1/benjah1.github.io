'use strict';

(function($) {
	$(function($) {
	
		// Anchor link
    $('.page-scroll a').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1000);
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
				if ( sy >= header.height() - 100 ) {
					header.addClass('navbar-shrink');
				}
				else {
					header.removeClass('navbar-shrink');
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

    (function(b,o,i,l,e,r){
			b.GoogleAnalyticsObject=l;
			if ('undefined' === b[l]) {
				b[l] = function(){
					b[l].q = b[l].q;
					if ('undefined' === typeof b[l].q) {
						b[l].q = [];
						b[l].q.push(arguments);
					}
				};
			}
			b[l].l=+new Date();
			e=o.createElement(i);
			r=o.getElementsByTagName(i)[0];
			e.src='//www.google-analytics.com/analytics.js';
			r.parentNode.insertBefore(e,r);
		}(window,document,'script','ga'));
		window.ga('create','UA-55892930-1');
		window.ga('send','pageview');
	});
})(window.jQuery);