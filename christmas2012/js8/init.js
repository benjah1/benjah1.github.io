function initWorld(myworld){
		var o = Array();

		/*o['stage'] = myworld.createObject({});*/

/* initial objects*/
		/*///////////////////////////
		ground
		///////////////////////////*/
		o['groundY'] = myworld.createObject({});
		o['ground'] = myworld.createObject({elm:$('#ground')});
		myworld.addParent(o['ground'],o['groundY']);

		/*///////////////////////////
		greeting
		///////////////////////////*/
		o['greeting'] = myworld.createObject({elm:$('#greeting')});
		myworld.addParent(o['greeting'],o['ground']);

		/*///////////////////////////
		tree
		///////////////////////////*/
		o['tree0'] = myworld.createObject({elm:$('#tree0')});
		myworld.addParent(o['tree0'],o['ground']);
		o['tree1'] = myworld.createObject({elm:$('#tree1')});
		myworld.addParent(o['tree1'],o['tree0']);
		o['tree2'] = myworld.createObject({elm:$('#tree2')});
		myworld.addParent(o['tree2'],o['tree1']);
		o['tree3'] = myworld.createObject({elm:$('#tree3')});
		myworld.addParent(o['tree3'],o['tree2']);
		o['star'] = myworld.createObject({elm:$('#star')});
		myworld.addParent(o['star'],o['tree3']);

		/*///////////////////////////
		snowman
		///////////////////////////*/
		o['snowman0'] = myworld.createObject({elm:$('#snowman0')});
		myworld.addParent(o['snowman0'],o['ground']);
		o['snowman1'] = myworld.createObject({elm:$('#snowman1')});
		myworld.addParent(o['snowman1'],o['snowman0']);
		o['snowman2'] = myworld.createObject({elm:$('#snowman2')});
		myworld.addParent(o['snowman2'],o['snowman0']);
		o['snowman3'] = myworld.createObject({elm:$('#snowman3')});
		myworld.addParent(o['snowman3'],o['snowman1']);
		o['snowman4'] = myworld.createObject({elm:$('#snowman4')});
		myworld.addParent(o['snowman4'],o['snowman2']);

		/*///////////////////////////
		box
		///////////////////////////*/
		o['boxa'] = myworld.createObject({});
		o['boxa0'] = myworld.createObject({elm:$('#boxa0')});
		o['boxa1'] = myworld.createObject({elm:$('#boxa1')});
		o['boxa2'] = myworld.createObject({elm:$('#boxa2')});
		o['boxa3'] = myworld.createObject({elm:$('#boxa3')});
		myworld.addParent(o['boxa'],o['ground']);
		myworld.addParent(o['boxa0'],o['boxa']);
		myworld.addParent(o['boxa1'],o['boxa']);
		myworld.addParent(o['boxa2'],o['boxa']);
		myworld.addParent(o['boxa3'],o['boxa']);

		o['boxb'] = myworld.createObject({});
		o['boxb0'] = myworld.createObject({elm:$('#boxb0')});
		o['boxb1'] = myworld.createObject({elm:$('#boxb1')});
		o['boxb2'] = myworld.createObject({elm:$('#boxb2')});
		o['boxb3'] = myworld.createObject({elm:$('#boxb3')});
		myworld.addParent(o['boxb'],o['ground']);
		myworld.addParent(o['boxb0'],o['boxb']);
		myworld.addParent(o['boxb1'],o['boxb']);
		myworld.addParent(o['boxb2'],o['boxb']);
		myworld.addParent(o['boxb3'],o['boxb']);

		o['boxc'] = myworld.createObject({});
		o['boxc0'] = myworld.createObject({elm:$('#boxc0')});
//		o['boxc1'] = myworld.createObject({elm:$('#boxc1')});
		o['boxc2'] = myworld.createObject({elm:$('#boxc2')});
		o['boxc3'] = myworld.createObject({elm:$('#boxc3')});
		o['boxc4'] = myworld.createObject({elm:$('#boxc4')});
		myworld.addParent(o['boxc'],o['ground']);
		myworld.addParent(o['boxc0'],o['boxc']);
//		myworld.addParent(o['boxc1'],o['boxc']);
		myworld.addParent(o['boxc2'],o['boxc']);
		myworld.addParent(o['boxc3'],o['boxc']);
		myworld.addParent(o['boxc4'],o['boxc']);


/* initial positions */

		/*///////////////////////////
		box
		///////////////////////////*/
		myworld.update(o['boxa0'],function(obj){
			mat4.translate(obj.local,vec3.create(Array(0,20,0)));
			mat4.translate(obj.world,vec3.create(Array(0,0,10)));
			mat4.rotateX(obj.local,90*dPi);
		});
		myworld.update(o['boxa1'],function(obj){
			mat4.translate(obj.local,vec3.create(Array(-20,0,0)));
			mat4.translate(obj.world,vec3.create(Array(0,0,10)));
			mat4.rotateX(obj.local,90*dPi);
			mat4.rotateY(obj.local,90*dPi);
		});
		myworld.update(o['boxa2'],function(obj){
			mat4.translate(obj.local,vec3.create(Array(0,0,10)));
			mat4.translate(obj.world,vec3.create(Array(0,0,10)));
		});
		myworld.update(o['boxa3'],function(obj){
			mat4.translate(obj.local,vec3.create(Array(20,0,0)));
			mat4.translate(obj.world,vec3.create(Array(0,0,10)));
			mat4.rotateX(obj.local,90*dPi);
			mat4.rotateY(obj.local,90*dPi);
		});
		
		myworld.update(o['boxb0'],function(obj){
			mat4.translate(obj.local,vec3.create(Array(0,15,0)));
			mat4.translate(obj.world,vec3.create(Array(0,0,15)));
			mat4.rotateX(obj.local,90*dPi);
		});
		myworld.update(o['boxb1'],function(obj){
			mat4.translate(obj.local,vec3.create(Array(-15,0,0)));
			mat4.translate(obj.world,vec3.create(Array(0,0,15)));
			mat4.rotateX(obj.local,90*dPi);
			mat4.rotateY(obj.local,90*dPi);
		});
		myworld.update(o['boxb2'],function(obj){
			mat4.translate(obj.local,vec3.create(Array(0,0,15)));
			mat4.translate(obj.world,vec3.create(Array(0,0,15)));
		});
		myworld.update(o['boxb3'],function(obj){
			mat4.translate(obj.local,vec3.create(Array(15,0,0)));
			mat4.translate(obj.world,vec3.create(Array(0,0,15)));
			mat4.rotateX(obj.local,90*dPi);
			mat4.rotateY(obj.local,90*dPi);
		});
		
		myworld.update(o['boxc0'],function(obj){
			mat4.translate(obj.local,vec3.create(Array(0,30,0)));
			mat4.translate(obj.world,vec3.create(Array(0,0,10)));
			mat4.rotateX(obj.local,90*dPi);
		});
/*
		myworld.update(o['boxc1'],function(obj){
			mat4.translate(obj.local,vec3.create(Array(-30,0,0)));
			mat4.translate(obj.world,vec3.create(Array(0,0,10)));
			mat4.rotateX(obj.local,90*dPi);
			mat4.rotateY(obj.local,90*dPi);
		});
*/
		myworld.update(o['boxc2'],function(obj){
			mat4.translate(obj.local,vec3.create(Array(0,0,10)));
			mat4.translate(obj.world,vec3.create(Array(0,0,10)));
		});
		myworld.update(o['boxc3'],function(obj){
			mat4.translate(obj.local,vec3.create(Array(30,0,0)));
			mat4.translate(obj.world,vec3.create(Array(0,0,10)));
			mat4.rotateX(obj.local,90*dPi);
			mat4.rotateY(obj.local,90*dPi);
		});
		myworld.update(o['boxc4'],function(obj){
			mat4.translate(obj.local,vec3.create(Array(0,0,-10)));
			mat4.translate(obj.world,vec3.create(Array(0,0,10)));
		});
	
		myworld.update(o['boxa'],function(obj){
			mat4.translate(obj.world,vec3.create(Array(-50,80,0)));
		});
		myworld.update(o['boxb'],function(obj){
			mat4.translate(obj.world,vec3.create(Array(-50,80,20)));
		});
		myworld.update(o['boxc'],function(obj){
			mat4.translate(obj.local,vec3.create(Array(30,0,0)));
			mat4.translate(obj.world,vec3.create(Array(-80,80,0)));
			mat4.rotateY(obj.world,-73*dPi);
		});

		/*///////////////////////////
		snowman
		///////////////////////////*/
		myworld.update(o['snowman4'],function(obj){
			mat4.translate(obj.local,vec3.create(Array(0,-15,0)));
			mat4.translate(obj.world,vec3.create(Array(-5,-10,5)));
		});
		myworld.update(o['snowman3'],function(obj){
			mat4.translate(obj.local,vec3.create(Array(0,-15,0)));
			mat4.translate(obj.world,vec3.create(Array(5,-10,5)));
		});
		myworld.update(o['snowman2'],function(obj){
			mat4.translate(obj.local,vec3.create(Array(0,-30,0)));
			mat4.translate(obj.world,vec3.create(Array(45,-10,5)));
		});
		myworld.update(o['snowman1'],function(obj){
			mat4.translate(obj.local,vec3.create(Array(0,-40,0)));
			mat4.translate(obj.world,vec3.create(Array(-20,-20,10)));
		});
		myworld.update(o['snowman0'],function(obj){
			mat4.translate(obj.local,vec3.create(Array(0,-50,0)));
			mat4.translate(obj.world,vec3.create(Array(80,60,40)));

			mat4.rotateX(obj.local,-89*dPi);
			mat4.rotateY(obj.local,-10*dPi);
		});

		/*///////////////////////////
		tree
		///////////////////////////*/
		myworld.update(o['star'],function(obj){
			mat4.translate(obj.world,vec3.create(Array(0,-30,5)));
			mat4.rotateX(obj.world,-5*dPi);	
		});
		myworld.update(o['tree3'],function(obj){
			mat4.translate(obj.world,vec3.create(Array(0,-50,5)));
		});
		myworld.update(o['tree2'],function(obj){
			mat4.translate(obj.world,vec3.create(Array(0,-60,5)));
		});
		myworld.update(o['tree1'],function(obj){
			mat4.translate(obj.world,vec3.create(Array(0,-50,5)));
			mat4.rotateX(obj.world,5*dPi);
		});
		myworld.update(o['tree0'],function(obj){
			mat4.translate(obj.local,vec3.create(Array(50,0,0)));
			mat4.translate(obj.world,vec3.create(Array(-150,-20,50)));

			mat4.rotateX(obj.local,-89*dPi);
			mat4.rotateY(obj.local,20*dPi);
		});

		/*///////////////////////////
		tree
		///////////////////////////*/
		myworld.update(o['greeting'],function(obj){
			mat4.translate(obj.local,vec3.create(Array(50,0,0)));
			mat4.translate(obj.world,vec3.create(Array(-120,80,80)));

			mat4.rotateX(obj.local,-110*dPi);
			mat4.rotateY(obj.local,-5*dPi);
		});

		/*///////////////////////////
		ground
		///////////////////////////*/
		myworld.update(o['ground'],function(obj){
			mat4.translate(obj.local,vec3.create(Array(0,0,0)));
			mat4.translate(obj.world,vec3.create(Array(300,-50,80)));
			mat4.rotateX(obj.local,89*dPi);
			mat4.rotateZ(obj.local,1*dPi);
			//obj.olocal = mat4.create(obj.local);
		});
		
		return o;

}
