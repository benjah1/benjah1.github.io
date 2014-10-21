$(function(){
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
		
		var dPi = Math.PI/180; /* / */
		
		var Object = function(args){
			this.local = mat4.create(args.local);
			this.world = mat4.create(args.world);
			this.elm = args.elm;
			this.needUpdate = 1;
			if(args.init!=null){
				args.init(this);
			}
			/*this.parentObjID = Array();*/
			return this;
		}
		
		var World = function(){
			/*this.world*/
			/*this.perspective*/
			this.obj = Array();
			this.objCount = 0;/*id*/
			
			this.createObject = function(args){
				var o = new Object(args);
				return this.push(o);
			}
			
			this.push = function(o){
				this.obj[this.objCount] = o;
				
				return this.objCount++;
			}
			
			this.update = function(id,func){
				func(this.obj[id]);
				this.obj[id].needUpdate = 1;
			}
			
			var renderUpdate = function(obj){
				obj.tmp = mat4.multiply(obj.world,obj.local,mat4.create());
				//console.log(tmp);
				//console.log(tmp[14]);
				obj.needUpdate = 0;
			}

			/*var render = function(){*/
			this.render = function(){
				for(o in this.obj){
					/* console.log(mat4.str(this.obj[o].local));
*/
					if(this.obj[o].needUpdate == 1){
						renderUpdate(this.obj[o]);
					}
					this.obj[o].elm.css('-webkit-transform','matrix3d('+mat4.str(this.obj[o].tmp)+')');
					this.obj[o].elm.css('z-index',Math.ceil(9999-this.obj[o].tmp[14]*100));
					/*dump( mat4.str(mat4.multiply(this.obj[o].local,this.obj[o].world,mat4.create())) );*/
				}
			}

			return this;
		}
		
		var myworld = new World();
		var timer = setInterval(function(){
			myworld.render();
		},1000/24);

		var object1 = myworld.createObject({
			local:Array(1,0,0,0,
						0,1,0,0,
						0,0,1,0,
						0,0,0,1),
			world:Array(1,0,0,0,
						0,1,0,0,
						0,0,1,0,
						0,0,0,1),
			elm:wrap
		});
		

		var object2 = myworld.createObject({
			local:Array(1,0,0,0,
						0,1,0,0,
						0,0,1,0,
						0,0,0,1),
			world:Array(1,0,0,0,
						0,1,0,0,
						0,0,1,0,
						0,0,0,1),
			elm:wrap2,
			init:function(obj){
				mat4.rotateY(obj.local,90*dPi);
				mat4.translate(obj.local,vec3.create(Array(-50,0,0)));
				mat4.translate(obj.world,vec3.create(Array(100,50,0)));
			}
		});
		
		var ox=oy=0;
		$('body').mousemove(function (e) {
			var x = parseInt(e.clientX, 10);
			var y = parseInt(e.clientY, 10);
			dx = (ox - x)/2;
			dy = (oy - y)/2;
			

			myworld.update(object1,function(obj){
				mat4.rotateX(obj.local,dy*dPi);
				mat4.rotateY(obj.local,dx*dPi);
			});

			myworld.update(object2,function(obj){
				mat4.rotateX(obj.world,dy*dPi);
				mat4.rotateY(obj.world,dx*dPi);
			});
			
			ox=x;
			oy=y;
			//myworld.render();
			return true;
		});
		
		/*
		var 
		var n=Array();
		n[0]=Array(1,0,0,0);
		n[1]=Array(0,1,0,0);
		n[2]=Array(0,0,1,0);
		n[3]=Array(0,0,0,1);
		n = translate(n,Array(50,0,0),wrap2);
		//n = yrotate(n,90,wrap2);
		//n = move(n,Array(50,50,0,1),wrap2);
		wrap2.css('-webkit-transform','matrix3d('+n.join(',')+')');
		wrap2.css('-moz-transform','matrix3d('+n.join(',')+')');
		
		//console.log(m3);
		var m=Array();
		m[0]=Array(1,0,0,0);
		m[1]=Array(0,1,0,0);
		m[2]=Array(0,0,1,0);
		m[3]=Array(0,0,0,1);
		wrap.css('-webkit-transform','matrix3d('+m.join(',')+')');
		wrap.css('-moz-transform','matrix3d('+m.join(',')+')');
		
		var ox=oy=0;
		var ishold = false;
		$('body').mousemove(function (e) {
			var x = parseInt(e.clientX, 10);
			var y = parseInt(e.clientY, 10);
			dx = ox - x;
			dy = oy - y;
			//console.log(xmouse);
			if(!ishold){
			//return;
				n = yrotate(n,dx,wrap2);
				n = xrotate(n,dy,wrap2);
			}else{
				m = yrotate(m,dx,wrap);
				m = xrotate(m,dy,wrap);
				n = yrotate(n,dx,wrap2);
				n = xrotate(n,dy,wrap2);
			}
			ox=x;
			oy=y;
			return true;
		});
			obj.css('-webkit-transform','matrix3d('+m.join(',')+')');
			obj.css('-moz-transform','matrix3d('+m.join(',')+')');
		
		$('body').mousedown(function(e){
			ishold=true;
			ox = parseInt(e.clientX, 10);
			oy = parseInt(e.clientY, 10);
		} );
		$('body').mouseup(function(e){
			ishold=false;
			ox = parseInt(e.clientX, 10);
			oy = parseInt(e.clientY, 10);
		} );
		*/
});
