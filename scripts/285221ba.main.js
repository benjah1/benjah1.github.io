"use strict";window.jQuery(function(a){a(".page-scroll a").bind("click",function(b){var c=a(this);a("html, body").stop().animate({scrollTop:a(c.attr("href")).offset().top},1e3),b.preventDefault()}),function(a){function b(){a(window).scroll(function(){f||(f=!0,setTimeout(c,250))})}function c(){var b=a(window).scrollTop();b>=d.height()-200?e.addClass("navbar-shrink"):e.removeClass("navbar-shrink"),f=!1}var d=a("header"),e=a(".navbar-fixed-top"),f=!1;b()}(a),function(a){var b=function(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var b=new RegExp("[\\?&]"+a+"=([^&#]*)"),c=b.exec(location.search);return null===c?"":decodeURIComponent(c[1].replace(/\+/g," "))},c=b("t"),d=a('<span class="number print-only">(647) 938-2330</span>');switch(c){case"frontend":a(".php").css("display","none");break;case"php":a(".frontend").css("display","none");break;default:a(".frontend").css("display","none")}""!==c&&a("span.email").after(d)}(a)});