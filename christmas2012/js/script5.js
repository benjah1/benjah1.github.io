var dPi = Math.PI/180;
var fps = 60;

jQuery(function($){
/*
		$('#button').click(function(){
			alert('hi');
		});
		
		var wrap = $('<div id="wrap" class="td">');
		wrap.append($('body').contents());
		$('body').append(wrap);
		var wrap2 = $('<div id="wrap2" class="td">this is wrap2</div>');
		$('body').append(wrap2);
		$('body').append($('<span id="output">'));


		var dump = function(obj){
			$('span#output').text(obj);
		}
*/		
		var myworld = new World();
		var sides = Array(
			$('#sideL1'),
			$('#sideL2'),
			$('#sideL3'),
			$('#sideL4'),
			$('#sideTop'),
			$('#sideTop2')
		);
		
		var gift = myworld.createObject({
			local:Array(1,0,0,0,
						0,1,0,0,
						0,0,1,0,
						0,0,0,1),
			world:Array(1,0,0,0,
						0,1,0,0,
						0,0,1,0,
						0,0,0,1)
		});	

		var sideobjs = Array();
		for(i=0;i<sides.length;++i){
			sideobjs[i] = myworld.createObject({
				local:Array(1,0,0,0,
							0,1,0,0,
							0,0,1,0,
							0,0,0,1),
				world:Array(1,0,0,0,
							0,1,0,0,
							0,0,1,0,
							0,0,0,1),
				elm:sides[i]
			});
			myworld.addParent(sideobjs[i],gift);
		}
	
/*	
				mat4.rotateY(obj.local,270*dPi);
				mat4.translate(obj.local,vec3.create(Array(50,0,0)));
				mat4.translate(obj.world,vec3.create(Array(100,50,0)));
*/		
			myworld.update(sideobjs[0],function(obj){
				mat4.translate(obj.local,vec3.create(Array(0,0,69.5)));
				//mat4.translate(obj.world,vec3.create(Array(0,70,0)));
			});
			myworld.update(sideobjs[2],function(obj){
				mat4.translate(obj.local,vec3.create(Array(0,0,-69.5)));
				//mat4.translate(obj.world,vec3.create(Array(0,-70,0)));
			});
			myworld.update(sideobjs[1],function(obj){
				mat4.rotateY(obj.local,90*dPi);
				mat4.translate(obj.local,vec3.create(Array(0,0,-79.5)));
				//mat4.translate(obj.world,vec3.create(Array(-80,0,0)));
			});
			myworld.update(sideobjs[3],function(obj){
				mat4.rotateY(obj.local,270*dPi);
				mat4.translate(obj.local,vec3.create(Array(0,0,-79.5)));
				//mat4.translate(obj.world,vec3.create(Array(80,0,0)));
			});
			myworld.update(sideobjs[4],function(obj){
				mat4.rotateX(obj.local,90.1*dPi);
				mat4.translate(obj.local,vec3.create(Array(0,0,59.5)));
				//mat4.translate(obj.world,vec3.create(Array(80,0,0)));
			});
			myworld.update(sideobjs[5],function(obj){
				//mat4.rotateX(obj.local,90.1*dPi);
				//mat4.scale(obj.local,vec3.create(Array(1.2,1.2,1.2)));
				mat4.translate(obj.local,vec3.create(Array(0,-30,0)));
				mat4.translate(obj.world,vec3.create(Array(0,-60,0)));
				
				obj.animates.push(new Animate({
					func:mat4.rotateX,
					type:'rotate',
					easing:'sin',
					args:[obj.world],
					from:0,
					to:30*dPi,
					time:36000,
					circle:5000
				}));
			});

			myworld.update(gift,function(obj){
				mat4.rotateX(obj.local,-30*dPi);
				mat4.rotateY(obj.local,1*dPi);
				mat4.translate(obj.local,vec3.create(Array(0,0,60)));
				//mat4.translate(obj.world,vec3.create(Array(80,0,0)));
			});
			
			//myworld.start();
			
		var ox=oy=0;
		var ishold = false;

		$('body').mousedown(function(e){
			ishold=true;
			ox = parseInt(e.clientX, 10);
			oy = parseInt(e.clientY, 10);
		});
		$('body').mouseup(function(e){
			ishold=false;
			
			var x = parseInt(e.clientX, 10);
			var y = parseInt(e.clientY, 10);
			dx = (x - 200)/20;
			dy = ( y - 200)/20;
			
			myworld.update(gift,function(obj){
				obj.animates = Array();
/*
				obj.animates.push(new Animate({
					func:mat4.rotateX,
					type:'rotate',
					easing:'easeIn',
					args:[obj.local],
					from:0,
					to:dy,
					time:5000
				}));
*/
				obj.animates.push(new Animate({
					func:mat4.rotateY,
					type:'rotate',
					easing:'easeIn',
					args:[obj.local],
					from:0,
					to:dx,
					time:5000
				}));
			});
			ox=x;
			oy=y;
		});
		
		$('body').ontouchend=function(){
			alert('tr');
		};
		
});
