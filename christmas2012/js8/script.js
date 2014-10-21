var dPi = Math.PI/180;
var fps = 60;
var domTransform,cssTransform,
	cssTransformStyle,
	domPerspective,cssPerspective;

function domToCss(property) {
	var css = property.replace(/([A-Z])/g, function (str, m1) {
		return '-' + m1.toLowerCase();
	}).replace(/^ms-/,'-ms-');

	return css;
}

jQuery(function($){

		domTransform = Modernizr.prefixed('transform');
		cssTransform = domToCss(domTransform);
	
		cssTransformStyle = cssTransform + '-style';
		
		domPerspective = Modernizr.prefixed('perspective');
		cssPerspective = domToCss(domPerspective);
		
		$('#stage').css(cssTransformStyle,'preserve-3d').css(cssPerspective,600);

		var myworld = new World();
			//myworld.start();
			
		var objects = initWorld(myworld);

		var ox=oy=0;
		var ishold = false;

		$('body').mousedown(function(e){
			ishold=true;
			ox = parseInt(e.clientX, 10);
			oy = parseInt(e.clientY, 10);
		});
		$('body').mousemove(function(e){
			ishold=false;
			
			var x = parseInt(e.clientX, 10),
					y = parseInt(e.clientY, 10),
					p = $('#stage').offset();
					
			if(Math.abs(x-p.left-300)>400)
				x = p.left +300+(x>p.left+300?1:-1)*400; 
			if(Math.abs(y-p.top-200)>250)
				y = p.top +250+(x>p.top+200?1:-1)*200; 


			var dx = -(p.left+300-x)/1000, 
					dy = (p.top+200-y)/2000;
//console.log(dx+' '+dy);
			
			myworld.update(objects['ground'],function(obj){
				//obj.animates = Array();
				var tmpdx = obj.dx?obj.dx:0;
				obj.animates.push(new Animate({
					func:mat4.rotateY,
					type:'rotate',
					easing:'easeIn',
					args:[obj.world],
					from:tmpdx,
					to:dx,
					time:1000
				}));
				obj.dx=dx;
			});

			myworld.update(objects['groundY'],function(obj){
				//obj.animates = Array();
				var tmpdy = obj.dy?obj.dy:0;
				obj.animates.push(new Animate({
					func:mat4.rotateX,
					type:'rotate',
					easing:'easeIn',
					args:[obj.world],
					from:tmpdy,
					to:dy,
					time:1000
				}));
				obj.dy=dy;
			});

			ox=x;
			oy=y;
		});

		myworld.update(objects['snowman1'],function(obj){
			obj.animates.push(new Animate({
				func:mat4.rotateZ,
				type:'rotate',
				easing:'sin',
				args:[obj.world],
				from:0,
				to:10*dPi,
				time:360000,
				circle:1000
			}));
		});
	
		myworld.update(objects['snowman2'],function(obj){
			obj.animates.push(new Animate({
				func:mat4.rotateZ,
				type:'rotate',
				easing:'sin',
				args:[obj.world],
				from:0,
				to:8*dPi,
				time:360000,
				circle:1000
			}));
		});
	

		$('#envelope').click(function(){
			$('#stage,#content,#share,#donate,#footer').css('display','block');
			$('body > #conver').css('display','none');

return false;

			(function(d, s, id) {
			  var js, fjs = d.getElementsByTagName(s)[0];
			  if (d.getElementById(id)) return;
			  js = d.createElement(s); js.id = id;
			  js.src = "http://connect.facebook.net/en_US/all.js#xfbml=1";
			  fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));

			(function(){
			  var _w = 90 , _h = 24;
			  var param = {
				url:location.href,
				type:'2',
				count:'1', /**是否显示分享数，1显示(可选)*/
				appkey:'', /**您申请的应用appkey,显示分享来源(可选)*/
				title:'', /**分享的文字内容(可选，默认为所在页面的title)*/
				pic:'', /**分享图片的路径(可选)*/
				ralateUid:'1202042481', /**关联用户的UID，分享微博会@该用户(可选)*/
				language:'zh_cn', /**设置语言，zh_cn|zh_tw(可选)*/
				rnd:new Date().valueOf()
			  }
			  var temp = [];
			  for( var p in param ){
				temp.push(p + '=' + encodeURIComponent( param[p] || '' ) )
			  }
			  $('.weibo-share span').append('<iframe allowTransparency="true" frameborder="0" scrolling="no" src="http://hits.sinajs.cn/A1/weiboshare.html?' + temp.join('&') + '" width="'+ _w+'" height="'+_h+'"></iframe>')
			})();

			(function(d,s,id){
				var js,fjs=d.getElementsByTagName(s)[0];
				if(!d.getElementById(id)){
					js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";
					fjs.parentNode.insertBefore(js,fjs);
				}
			})(document,"script","twitter-wjs");
	
		});

});
