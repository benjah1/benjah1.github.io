var Animate = function(args){
	//this.num = args.num;
	this.func = args.func;
	this.type = args.type;
	this.easing = args.easing;
	this.args = args.args;
	this.time = args.time*fps/1000;
	switch(this.easing){
	case 'linear':
		this.from = args.from;
		this.to = args.to
		this.dt = function(){return (this.to-this.from)/this.time;}
		break;
	case 'easeIn':
		this.from = args.from;
		this.to = args.to;
		var tt = this.time;
		this.dt = function(){
			return (2*(this.to-this.from)/(tt*(tt-1)))*this.time;
		}
		break;
	case 'sin':
		this.from = args.from;
		this.to = args.to;
		this.circle = args.circle*fps/1000;
		var tt = this.time;
		this.dt = function(){
			return (Math.sin(2*Math.PI*(tt-this.time+1)/this.circle)-Math.sin(2*Math.PI*(tt-this.time)/this.circle))*this.to;
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
		//console.log(this.tmp);
	return this;
}

var World = function(args){
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
		this.notifyUpdate(id);
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
				//this.renderUpdate(pid);
				obj.tmp = mat4.multiply(this.obj[pid].tmp,obj.world,mat4.create());
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
			if(this.obj[o].elm){
				this.obj[o].elm.css(cssTransform,'matrix3d('+mat4.str(this.obj[o].tmp)+')');
				this.obj[o].elm.css('z-index',Math.ceil(9999-this.obj[o].tmp[14]*100));
			}
			/*dump( mat4.str(mat4.multiply(this.obj[o].local,this.obj[o].world,mat4.create())) );*/
		}
	}
	var world = this;
	//this.start = function(){
		this.live = setInterval(function(){
			world.render();
		},1000/fps);
	//}

	return this;
}
