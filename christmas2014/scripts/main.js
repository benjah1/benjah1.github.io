"use strict";var App=angular.module("xmas",[]);App.controller("mainCtrl",["$scope","$window","extend","jQuery","PagePointer","SlidePointer","utility",function(e,t,n,o,a,s){e.book=null,e.pages=a.pages,e.slide=s.slide,e.curr="page0",e.$on("getBook",function(t,n){e.book=n});var i=function(){var n,a,s=0,i=0,r=800,l=600,c=!1,u={},g={},p={},f=50,d=s/4,h=s/2,m=0,C=0,P=0,v=function(){o(".card").hasClass("page1")?(m=Math.map(s/2-p.x,s/2,-s/2,-25,25),C=Math.map(2*i/3-p.y,2*i/3,-i/3,2,-15),o(".scene").transform({rotate:{x:Math.floor(C)+"deg",y:Math.floor(m)+"deg"}})):o(".scene").css("transform","none")};return{mousedown:function(e){var t=e.touches;t&&t.length?(u.x=t[0].pageX,u.y=t[0].pageY,g.x=t[0].pageX,g.y=t[0].pageY,p.x=t[0].pageX,p.y=t[0].pageY,o(".scene").css("transition","transform 0.4s"),v()):(u.x=e.pageX,u.y=e.pageY,g.x=e.pageX,g.y=e.pageY),n=0,a=0,c=!0},mousemove:function(t){var a=t.touches;if(a&&a.length?(p.x=a[0].pageX,p.y=a[0].pageY):(p.x=t.pageX,p.y=t.pageY),(Math.abs(g.x-p.x)>10||Math.abs(g.y-p.y)>10)&&v(),!0===c&&Math.abs(g.x-p.x)>20){n=u.x-p.x,console.log(n);var s=Math.abs(n);e.book.isControl()?e.book.isControl()&&(e.book.drag(n,h),f>s?(e.book.cancel(),c=!1):s>h&&(e.book.release(),c=!1)):o(".card").hasClass("page1")?0===P&&(o(".scene").addClass("down"),setTimeout(function(){o(".scene").removeClass("up")},10),P=setTimeout(function(){n>f&&e.book.hasNext()?(e.book.next(),n=h/3):-1*f>n&&e.book.hasPrevious()&&(e.book.previous(),n=h/3*-1),u.x=g.x+n,g.x=u.x,P=0,c=!0,e.book.drag(f,h),setTimeout(function(){e.book.drag(n,h)},100)},1e3)):n>f&&e.book.hasNext()?e.book.next():-1*f>n&&e.book.hasPrevious()&&e.book.previous(),g.x=p.x,g.y=p.y}},mouseup:function(){c&&(c=!1,e.book.isControl()&&(Math.abs(n)<d?e.book.cancel():Math.abs(n)>=d&&e.book.release()))},resize:function(){if(s=o(t).width(),i=o(t).height(),d=s/4,h=s/2,s>r&&i>l)o(".stage").css("margin",(i-l)/2+"px "+(s-r)/2+"px"),o(".stage").transform({scale:{x:1,y:1,z:1}});else{var e=r/l;e>s/i?(o(".stage").css("margin",(i-s/e)/2+"px 0px").css("transform-origin","top left 0"),o(".stage").transform({scale:{x:s/r,y:s/r,z:s/r}})):(o(".stage").css("margin","0px "+(s-i*e)/2+"px").css("transform-origin","top left 0"),o(".stage").transform({scale:{x:i/l,y:i/l,z:i/l}}))}}}}();angular.element(t).bind("mousedown",i.mousedown).bind("mousemove",i.mousemove).bind("mouseup",i.mouseup).bind("touchstart",i.mousedown).bind("touchmove",i.mousemove).bind("touchend",i.mouseup).bind("touchcancel",i.mouseup).bind("resize",i.resize),i.resize()}]),App.constant("jQuery",window.jQuery),App.factory("extend",function(){return function(e,t){var n=function(){var n=arguments,o={},a=function(e){function t(t){return e.apply(this,t)}return t.prototype=e.prototype,new t(n)}(t),s=function(e){function t(t){return e.apply(this,t)}return t.prototype=e.prototype,new t(n)}(e);return Object.keys(a).map(function(e){o[e]=a[e]}),Object.keys(s).map(function(e){o[e]=s[e]}),o["super"]=function(){return a},"function"==typeof o.init&&o.init(),o};return n}}),App.factory("extendDeep",function(){return function e(t){return angular.forEach(arguments,function(n){n!==t&&angular.forEach(n,function(n,o){t[o]&&t[o].constructor&&t[o].constructor===Object?e(t[o],n):t[o]=n})}),t}}),App.service("PagePointer",["jQuery",function(e){var t=e(".card");t.addClass("page0"),e("#p0").css("display","block");var n=function(n){this.dragOpenStart=function(){e("#p"+n).css("display","block")},this.dragOpen=function(){},this.dragOpenComplete=function(){},this.dragCloseStart=function(){},this.dragClose=function(){},this.dragCloseComplete=function(){},this.openStart=function(){t.addClass("page"+n)},this.openComplete=function(){this.getElement().removeClass("next-open").removeClass("prev-open").removeClass("next-close").removeClass("prev-close"),window.ga("send","event","page","open",n)},this.closeStart=function(){t.removeClass("page"+n)},this.closeComplete=function(){this.getElement().removeClass("next-open").removeClass("prev-open").removeClass("next-close").removeClass("prev-close"),e("#p"+n).css("display","none")}},o=function(n){this.dragOpenStart=function(){e("#p"+n).css("display","block")},this.dragCloseStart=function(){this["super"]().dragCloseStart()},this.openStart=function(){t.addClass("page"+n)},this.openComplete=function(){e(".scene").addClass("up"),e(".scene").removeClass("down"),this.getElement().removeClass("next-open").removeClass("prev-open").removeClass("next-close").removeClass("prev-close"),window.ga("send","event","page","open",n)},this.closeStart=function(){t.removeClass("page"+n)},this.closeComplete=function(){e(".scene").removeClass("down"),this.getElement().removeClass("next-open").removeClass("prev-open").removeClass("next-close").removeClass("prev-close"),e("#p"+n).css("display","none")}};this.pages=[n,o,n]}]),App.service("SlidePointer",["jQuery",function(e){var t=function(e,t,n){for(var o,a,s,i=angular.element('<div class="slide '+n+'">'),r=[angular.element('<div class="aside">'),angular.element('<div class="bside">')],l=[e,t],c=0;c<l.length;++c){for(s=r[c],o=0;8>o;++o)a=l[c].clone(),a=angular.element('<div class="overflow">').append(a),a=angular.element('<div class="inner">').append(a),s.append(a),s=a;i.append(r[c])}return i},n=function(){this.dragStart=function(n,o){o.addClass("next-close"),n.addClass("next-open");var a=t(o.children("div"),n.children("div"),"next");e(".card").append(a),this.setElement(a),a=e(a),a.find(".inner").transform({rotate:{y:"-0.1deg"}}),a.find(".aside").transform({rotate:{y:"-0.1deg"}}),a.find(".bside").transform({rotate:{y:"-0.1deg"},translate:{z:"-1px"}})},this.drag=function(t,n){var o=e(this.getElement());o.find(".inner").transform({rotate:{y:Math.map(t,0,n,0,-10)+"deg"}}),o.find(".aside").transform({rotate:{y:Math.map(t,0,n,0,-100)+"deg"}}),o.find(".bside").transform({rotate:{y:Math.map(t,0,n,0,-100)+"deg"},translate:{z:"-1px"}})},this.dragComplete=function(){var t=e(this.getElement());t.find(".inner").transform({rotate:{y:"0deg"}}),t.find(".aside").transform({rotate:{y:"-180deg"}}),t.find(".bside").transform({rotate:{y:"-180deg"},translate:{z:"-1px"}})},this.dragCancel=function(){var t=e(this.getElement());t.find(".inner").transform({rotate:{y:"0deg"}}),t.find(".aside").transform({rotate:{y:"0deg"}}),t.find(".bside").transform({rotate:{y:"0deg"},translate:{z:"-1px"}})},this.complete=function(){this.getElement().remove()}},o=function(){this.dragStart=function(n,o){o.addClass("prev-close"),n.addClass("prev-open");var a=t(n.children("div"),o.children("div"),"prev");e(".card").append(a),this.setElement(a),a=e(a),a.find(".inner").transform({rotate:{y:"0.1deg"}}),a.find(".aside").transform({rotate:{y:"-180deg"}}),a.find(".bside").transform({rotate:{y:"-180deg"},translate:{z:"-1px"}})},this.drag=function(t,n){t=Math.abs(t);var o=e(this.getElement());o.find(".inner").transform({rotate:{y:Math.map(t,0,n,0,10)+"deg"}}),o.find(".aside").transform({rotate:{y:Math.map(t,0,n,-180,-80)+"deg"}}),o.find(".bside").transform({rotate:{y:Math.map(t,0,n,-180,-80)+"deg"},translate:{z:"-1px"}})},this.dragComplete=function(){var t=e(this.getElement());t.find(".inner").transform({rotate:{y:"0deg"}}),t.find(".aside").transform({rotate:{y:"0deg"}}),t.find(".bside").transform({rotate:{y:"0deg"},translate:{z:"-1px"}})},this.dragCancel=function(){var t=e(this.getElement());t.find(".inner").transform({rotate:{y:"0deg"}}),t.find(".aside").transform({rotate:{y:"-180deg"}}),t.find(".bside").transform({rotate:{y:"-180deg"},translate:{z:"-1px"}})},this.complete=function(){this.getElement().remove()}};this.slide={next:n,previous:o}}]),App.service("utility",["extendDeep","jQuery",function(e,t){String.prototype.format=function(){var e=arguments;return this.replace(/\{(\d+)\}/g,function(t,n){return"undefined"!=typeof e[n]?e[n]:""})},Math.map=function(e,t,n,o,a){return(o-a)*(e-n)/(t-n)+a},Math.limit=function(e,t,n){return e>t?t:n>e?n:e},t.fn.transform=function(n){return t(this).each(function(){var o=e({rotate:{x:0,y:0,z:0},scale:{x:1,y:1,z:1},translate:{x:0,y:0,z:0}},n),a="rotateX({0}) rotateY({1}) rotateZ({2}) scale3d({3},{4},{5}) translate3d({6},{7},{8})",s=a.format(o.rotate.x,o.rotate.y,o.rotate.z,o.scale.x,o.scale.y,o.scale.z,o.translate.x,o.translate.y,o.translate.z);t(this).css(Modernizr.prefixed("transform"),s)}),this}}]),App.directive("book",["$window","BookIterator","IPagePointer","ISlidePointer","extend",function(e,t,n,o,a){var s,i=function(e,i){var r,l,c,u,g,p,f=[],d=i.children();for(r=0;r<d.length;++r)l="function"==typeof e.pagePointers[r]?a(e.pagePointers[r],n):n,c=new l(r),c.setElement(angular.element(d[r])),f.push(c);g="undefined"!=typeof e.slidePointers&&"function"==typeof e.slidePointers.next?a(e.slidePointers.next,o):o,p="undefined"!=typeof e.slidePointers&&"function"==typeof e.slidePointers.previous?a(e.slidePointers.previous,o):o,u={next:new g,previous:new p},s=new t(f,u,1),e.$emit(e.getBook,s)};return{restrict:"A",link:i,scope:{pagePointers:"=pages",slidePointers:"=slide",getBook:"@"}}}]),App.factory("BookIterator",["BookStateDrag","BookStateRelease","BookStateCancel",function(e,t,n){return function(o,a,s){var i,r=o,l=0,c=1e3*s||1,u=!1,g=a;this.isControl=function(){return u},this.next=function(){if(!this.hasNext())throw"You have reached the end.";u=!0,i=new e(r[l+1],r[l],g.next,function(){++l}),i.dragStart()},this.previous=function(){if(!this.hasPrevious())throw"You have reached the beginning.";u=!0,i=new e(r[l-1],r[l],g.previous,function(){--l}),i.dragStart()},this.drag=function(e,t){if(!u)throw"The book is not in control.";i.drag(e,t)},this.release=function(){if(!u)throw"The book is not in control.";i.dragComplete(),i=new t(i),i.release(),setTimeout(function(){u=!1,i.complete(),i=null},c)},this.cancel=function(){if(!u)throw"The book is not in control.";i.dragComplete(),i=new n(i),i.release(),setTimeout(function(){u=!1,i.complete(),i=null},c)},this.hasNext=function(){return l<r.length-1?!0:!1},this.hasPrevious=function(){return l>0?!0:!1},this.getCurr=function(){return l}}}]),App.factory("IBookState",function(){return function(){var e,t,n,o;this.setSlide=function(e){o=e},this.getSlide=function(){return o},this.setPageOpen=function(t){e=t},this.getPageClose=function(){return t},this.setPageClose=function(e){t=e},this.getPageOpen=function(){return e},this.setCallBack=function(e){n=e},this.completeCallback=function(){return n}}}),App.factory("BookStateCancel",["PageStateCancelOpen","PageStateCancelClose","BookStateRelease","extend",function(e,t,n,o){return o(function(){this.init=function(){this["super"]().init(),this.getPageOpen().setState(e),this.getPageClose().setState(t)},this.release=function(){this.getSlide().dragCancel(),this.getPageOpen().releaseStart(),this.getPageClose().releaseStart()},this.complete=function(){this.getSlide().complete(),this.getPageOpen().releaseComplete(),this.getPageClose().releaseComplete()}},n)}]),App.factory("BookStateDrag",["Page","PageStateDragOpen","PageStateDragClose","Slide","IBookState","extend",function(e,t,n,o,a,s){return s(function(a,s,i,r){this.init=function(){this.setSlide(new o),this.getSlide().setPointer(i),this.setPageOpen(new e),this.getPageOpen().setPointer(a),this.getPageOpen().setState(t),this.setPageClose(new e),this.getPageClose().setPointer(s),this.getPageClose().setState(n),this.setCallBack(r)},this.dragStart=function(){this.getSlide().dragStart(this.getPageOpen().getElement(),this.getPageClose().getElement()),this.getPageOpen().dragStart(),this.getPageClose().dragStart()},this.drag=function(e,t){this.getSlide().drag(e,t),this.getPageOpen().drag(),this.getPageClose().drag()},this.dragComplete=function(){this.getPageOpen().dragComplete(),this.getPageClose().dragComplete()}},a)}]),App.factory("BookStateRelease",["PageStateReleaseOpen","PageStateReleaseClose","IBookState","extend",function(e,t,n,o){return o(function(n){this.init=function(){this.setSlide(n.getSlide()),this.setPageOpen(n.getPageOpen()),this.setPageClose(n.getPageClose()),this.setCallBack(n.completeCallback()),this.getPageOpen().setState(e),this.getPageClose().setState(t)},this.release=function(){this.getSlide().dragComplete(),this.getPageOpen().releaseStart(),this.getPageClose().releaseStart()},this.complete=function(){this.getPageOpen().releaseComplete(),this.getPageClose().releaseComplete(),this.getSlide().complete(),this.completeCallback()()}},n)}]),App.factory("IPageState",function(){return function(e){this.getPointer=function(){return e}}}),App.factory("PageStateDragClose",["PageStateDragOpen","extend",function(e,t){return t(function(){this.dragStart=function(){this.getPointer().dragCloseStart()},this.drag=function(){this.getPointer().dragClose()},this.dragComplete=function(){this.getPointer().dragCloseComplete()}},e)}]),App.factory("PageStateDragOpen",["IPageState","extend",function(e,t){return t(function(){this.dragStart=function(){this.getPointer().dragOpenStart()},this.drag=function(){this.getPointer().dragOpen()},this.dragComplete=function(){this.getPointer().dragOpenComplete()}},e)}]),App.factory("PageStateReleaseOpen",["IPageState","extend",function(e,t){return t(function(){this.releaseStart=function(){this.getPointer().openStart()},this.releaseComplete=function(){this.getPointer().openComplete()}},e)}]),App.factory("PageStateReleaseClose",["PageStateReleaseOpen","extend",function(e,t){return t(function(){this.releaseStart=function(){this.getPointer().closeStart()},this.releaseComplete=function(){this.getPointer().closeComplete()}},e)}]),App.factory("PageStateCancelOpen",["PageStateReleaseOpen","extend",function(e,t){return t(function(){this.releaseStart=function(){this.getPointer().closeStart()},this.releaseComplete=function(){this.getPointer().closeComplete()}},e)}]),App.factory("PageStateCancelClose",["PageStateCancelOpen","extend",function(e,t){return t(function(){this.releaseStart=function(){this.getPointer().openStart()},this.releaseComplete=function(){this.getPointer().openComplete()}},e)}]),App.factory("IPagePointer",function(){return function(){var e;this.setElement=function(t){e=t},this.getElement=function(){return e},this.dragOpenStart=function(){},this.dragOpen=function(){},this.dragOpenComplete=function(){},this.dragCloseStart=function(){},this.dragClose=function(){},this.dragCloseComplete=function(){},this.openStart=function(){},this.openComplete=function(){},this.closeStart=function(){},this.closeComplete=function(){}}}),App.factory("ISlidePointer",function(){return function(){var e;this.setElement=function(t){e=t},this.getElement=function(){return e},this.dragStart=function(){},this.drag=function(){},this.dragComplete=function(){},this.dragCancel=function(){},this.release=function(){},this.complete=function(){}}}),App.factory("Page",function(){return function(){var e,t;this.setPointer=function(t){e=t},this.setState=function(n){t=n(e)},this.getElement=function(){return e.getElement()},this.dragStart=function(){t.dragStart()},this.drag=function(){t.drag()},this.dragComplete=function(){t.dragComplete()},this.releaseStart=function(){t.releaseStart()},this.releaseComplete=function(){t.releaseComplete()}}}),App.factory("Slide",function(){return function(){var e;this.setPointer=function(t){e=t},this.getPointer=function(){return e},this.dragStart=function(t,n){e.dragStart(t,n)},this.drag=function(t,n){e.drag(t,n)},this.dragComplete=function(){e.dragComplete()},this.dragCancel=function(){e.dragCancel()},this.release=function(){e.release()},this.complete=function(){e.complete()}}});