jQuery(function($){
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
		var fps = 60;
	
		var Animate = function(args){
			//this.num = args.num;
			this.func = args.func;
			this.type = args.type;
			this.method = args.method;
			this.args = args.args;
			switch(this.method){
			case 'linear':
				this.time = args.time;
				this.from = args.from;
				this.to = args.to
				this.dt = function(){return (this.to-this.from)/this.time;}
				break;
			case 'easeIn':
				this.time = args.time*fps/1000;
				this.from = args.from;
				this.to = args.to;
				var tt = this.time;
				this.dt = function(){
					return (2*(this.to-this.from)/(tt*(tt-1)))*this.time;
				
					
					return tmp;
				}
				break;
			}

			
			this.animates = Array();
			this.animates['rotate'] = function(){
				this.func(this.args[0],this.dt());
				--this.time;
				if(this.time<1)
					return false;
				return true;
			}
			
			this.animate = this.animates[this.type];
			
			return this;
		}
		
		var Object = function(args){
			this.local = mat4.create(args.local);
			this.world = mat4.create(args.world);
			this.elm = args.elm;
			this.needUpdate = 1;
			this.animates = Array();
			if(args.init!=null){
				args.init(this);
			}
			/*this.parentObjID = Array();*/
			this.tmp = mat4.multiply(this.world,this.local,mat4.create());
			return this;
		}
		
		var World = function(){
			/*this.world*/
			/*this.perspective*/
			this.obj = Array();
			this.objCount = 0;/*id*/
			
			this.parentToChild = Array();
			this.childToParent = Array();
			
			
			this.addParent = function(child,parent){
				this.childToParent[child]=parent;
				this.parentToChild[parent].push(child);
				this.render();
			}
			
			this.createObject = function(args){
				var o = new Object(args);				
				return this.push(o);
			}
			
			this.push = function(o){
				o.id = this.objCount;
				this.parentToChild[this.objCount] = Array();
				this.obj[this.objCount] = o;
				this.render();
				return this.objCount++;
			}
			
			this.notifyUpdate = function(parent){
				if($.isArray(this.parentToChild[parent])){
					for(i in this.parentToChild[parent]){
						this.notifyUpdate(this.parentToChild[parent][i]);
					}
				}
				this.obj[parent].needUpdate = 1;
			}
			
			this.update = function(id,func){
				func(this.obj[id]);
				//this.notifyUpdate(id);
			}
			
			this.renderUpdate = function(id){
				var obj = this.obj[id];
				if(obj.animates.length > 0 || obj.needUpdate == 1){
					for(a in obj.animates){
						if(!obj.animates[a].animate()){
							delete obj.animates[a];
						}
					}
					this.notifyUpdate(id);

					if(typeof this.childToParent[id] != 'undefined' ){

						var pid = this.childToParent[id];
						this.renderUpdate(pid);
						obj.tmp = mat4.multiply(obj.world,this.obj[pid].tmp,mat4.create());
						obj.tmp = mat4.multiply(obj.tmp,obj.local,mat4.create());
					}else{
						obj.tmp = mat4.multiply(obj.world,obj.local,mat4.create());
					}
					//console.log(tmp);
					//console.log(tmp[14]);
					obj.needUpdate = 0;
				}
			}

			/*var render = function(){*/
			this.render = function(){
				for(o in this.obj){
					/* console.log(mat4.str(this.obj[o].local));
*/
			//console.log(o);
					this.renderUpdate(o);
					this.obj[o].elm.css('-webkit-transform','matrix3d('+mat4.str(this.obj[o].tmp)+')');
					//this.obj[o].elm.css('z-index',Math.ceil(9999-this.obj[o].tmp[14]*100));
					/*dump( mat4.str(mat4.multiply(this.obj[o].local,this.obj[o].world,mat4.create())) );*/
				}
			}
			return this;
		}
		
		var myworld = new World();
		var timer = setInterval(function(){
			myworld.render();
		},1000/fps);
 /* / */

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
			parent: object1,
			init:function(obj){
				mat4.rotateY(obj.local,270*dPi);
				mat4.translate(obj.local,vec3.create(Array(50,0,0)));
				mat4.translate(obj.world,vec3.create(Array(100,50,0)));
			}
		});
		
		myworld.addParent(object2,object1);
		
		var ox=oy=0;
		/*
		$('body').mousemove(function (e) {
			var x = parseInt(e.clientX, 10);
			var y = parseInt(e.clientY, 10);
			dx = (ox - x)/2;
			dy = (oy - y)/2;
			
if(ishold){
}
			ox=x;
			oy=y;
			//myworld.render();
			return true;
		});
*/
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
			
			myworld.update(object1,function(obj){
				obj.animates = Array();
				obj.animates.push(new Animate({
					func:mat4.rotateX,
					type:'rotate',
					method:'easeIn',
					args:[obj.local],
					from:0,
					to:dy,
					time:5000
				}));
				obj.animates.push(new Animate({
					func:mat4.rotateY,
					type:'rotate',
					method:'easeIn',
					args:[obj.local],
					from:0,
					to:dx,
					time:5000
				}));
			});
//alert(dx);			
			ox=x;
			oy=y;
		});
		
		$('body').ontouchend=function(){
			alert('tr');
		};
		
});
