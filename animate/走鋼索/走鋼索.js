(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"走鋼索_atlas_1", frames: [[0,52,89,30],[0,0,97,50],[99,0,48,96]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_5 = function() {
	this.initialize(ss["走鋼索_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["走鋼索_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["走鋼索_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(img.CachedBmp_7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3050,358);


(lib.CachedBmp_6 = function() {
	this.initialize(img.CachedBmp_6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3050,358);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.頭部 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010F39").s().p("AgoAxQghglAFgaQAEgOAXgXQARgRAkABQAfABATAKIAHAIQADALgKAKQgOgBgOAEQgdAHgEAUQgGgDgHgCQgPgEADAOQAEARAEAFQAFAFAIgEIgiAlg");
	this.shape.setTransform(6.9795,6.8223);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DFEFE6").s().p("AghAxIgMg5QgjgoANgiQAFAEAFgDIADgCQAEACAEgCIAMgGIATgFQATgFATgCIAfASQACAGABAOIABARQACAEAMANQABACgIAJQAGAkgHAEQgEADgHABIgKABQgVAHgWAiQgUAggDACIgKg1g");
	this.shape_1.setTransform(7.7474,12.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.頭部, new cjs.Rectangle(0,0,14.9,22.7), null);


(lib.左鞋 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#465068").s().p("AgBApQgMgEgOgIIgLgGIgEAKIgzgRIASgoIAFgBQAJgRAKgHQAVgPAEAzIAQANQASAPAHAEQASAKA8AZQhDgDgbgKg");
	this.shape.setTransform(9.35,5.3383);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.左鞋, new cjs.Rectangle(0,0,18.7,10.7), null);


(lib.左手 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.左手, new cjs.Rectangle(0,0,44.5,15), null);


(lib.左小腿 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#465068").s().p("AACC8IgvgMIgHgCQAGgIAIhhQAIhjAAhDIADg9IAbgZQAdgRATAuQAOA2gWCWQgLBLgOBAg");
	this.shape.setTransform(5.2972,18.8804);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.左小腿, new cjs.Rectangle(0,0,10.6,37.8), null);


(lib.左大腿 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#465068").s().p("ABVCvQgPgJgRgSIgPgQQgUgphPhQQhEhEgJgrIAAgBIgBgMIABgBQABgdAKgRQAOgaAiAGQAuAJASAMQAJAHAVAeIAGAFIAyBPQA0BbARBIQgEA5gcAAQgKAAgNgHg");
	this.shape.setTransform(14,18.1692);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.左大腿, new cjs.Rectangle(0,0,28,36.4), null);


(lib.右鞋 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010F39").s().p("AgFAHQgEgLgDgPIgBgNIgKADIgSgyIArgMIAcAHQAWALgdAcIgBAWQgBAWABAJQACATARBBQgmg4gIgdg");
	this.shape.setTransform(4.15,9.15);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.右鞋, new cjs.Rectangle(0,0,8.3,18.3), null);


(lib.右手 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.CachedBmp_4();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.右手, new cjs.Rectangle(0,0,48.5,25), null);


(lib.右小腿 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010F39").s().p("AiOBzIgWgxIgCgHQAKAABSg0QBTg0A2gqIAygiIAlAGQAfAOgZAqQgjAsiEBJQhDAkg7Acg");
	this.shape.setTransform(16.7158,12.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.右小腿, new cjs.Rectangle(0,0,33.5,24.5), null);


(lib.右大腿 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#010F39").s().p("ABBC6QgOgKgQgUIgMgSQgPgqhJhgQg+hPAEgvIAAgLQAAgJAGABQAaguAmgEQAzgGAnBaIAnBUQApBhAIBKQgLA0gZAAQgLAAgNgKg");
	this.shape.setTransform(12.4875,19.661);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.右大腿, new cjs.Rectangle(0,0,25,39.3), null);


(lib.上半身 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.CachedBmp_3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.上半身, new cjs.Rectangle(0,0,24,48), null);


(lib.Tween6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(-762.4,-89.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-762.4,-89.4,1525,179);


(lib.Tween5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(-762.4,-89.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-762.4,-89.4,1525,179);


(lib.走鋼索人 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 骨架_1
	this.ikNode_18 = new lib.右鞋();
	this.ikNode_18.name = "ikNode_18";
	this.ikNode_18.setTransform(36.25,107.95,0.9993,0.9993,-57.6846,0,0,6.2,1.7);

	this.ikNode_16 = new lib.右小腿();
	this.ikNode_16.name = "ikNode_16";
	this.ikNode_16.setTransform(60.35,86.7,0.9995,0.9995,-13.8981,0,0,30.7,5.6);

	this.ikNode_2 = new lib.頭部();
	this.ikNode_2.name = "ikNode_2";
	this.ikNode_2.setTransform(54.15,18.1,1,1,0,0,0,7.5,18.1);

	this.ikNode_1 = new lib.上半身();
	this.ikNode_1.name = "ikNode_1";
	this.ikNode_1.setTransform(54.05,22.7,1,1,0,0,0,14.2,9.2);

	this.ikNode_14 = new lib.右大腿();
	this.ikNode_14.name = "ikNode_14";
	this.ikNode_14.setTransform(51.05,52.65,0.9995,0.9995,7.5693,0,0,9.1,4);

	this.ikNode_4 = new lib.左手();
	this.ikNode_4.name = "ikNode_4";
	this.ikNode_4.setTransform(57.8,22.5,1,1,0,0,0,12.3,10.1);

	this.ikNode_6 = new lib.右手();
	this.ikNode_6.name = "ikNode_6";
	this.ikNode_6.setTransform(46,25.35,1,1,0,0,0,46,6.5);

	this.ikNode_8 = new lib.左大腿();
	this.ikNode_8.name = "ikNode_8";
	this.ikNode_8.setTransform(59.75,51.9,0.9997,0.9997,8.5538,0,0,12,3.1);

	this.ikNode_10 = new lib.左小腿();
	this.ikNode_10.name = "ikNode_10";
	this.ikNode_10.setTransform(66.6,79.2,0.9998,0.9998,8.5218,0,0,5.5,3.2);

	this.ikNode_12 = new lib.左鞋();
	this.ikNode_12.name = "ikNode_12";
	this.ikNode_12.setTransform(60.05,111.6,0.9997,0.9997,-14.0104,0,0,5,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_12,p:{rotation:-14.0104,x:60.05,y:111.6,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.2,scaleX:0.9998,scaleY:0.9998,rotation:8.5218,x:66.6,y:79.2}},{t:this.ikNode_8,p:{regX:12,regY:3.1,rotation:8.5538,x:59.75,y:51.9,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_6,p:{rotation:0,x:46,y:25.35,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:0,x:57.8,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.1,scaleX:0.9995,scaleY:0.9995,rotation:7.5693,x:51.05,y:52.65}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.6,scaleX:0.9995,scaleY:0.9995,rotation:-13.8981,x:60.35,y:86.7,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9993,scaleY:0.9993,rotation:-57.6846,x:36.25,y:107.95,regY:1.7}}]}).to({state:[{t:this.ikNode_12,p:{rotation:-14.1285,x:60.15,y:111.6,regY:2.6}},{t:this.ikNode_10,p:{regX:5.6,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:8.1545,x:66.55,y:79.3}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:8.3219,x:59.6,y:51.95,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_6,p:{rotation:1.1244,x:45.85,y:25.15,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:1.42,x:57.75,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:7.4199,x:51.15,y:52.65}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-14.1118,x:60.4,y:86.55,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-57.2158,x:36.4,y:108,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-14.2484,x:60.25,y:111.6,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:7.7864,x:66.35,y:79.3}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:8.0897,x:59.4,y:52,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:2.2501,x:45.8,y:25,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:2.8399,x:57.75,y:22.55,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:7.2682,x:51.1,y:52.6}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.6,scaleX:0.9994,scaleY:0.9994,rotation:-14.3256,x:60.55,y:86.4,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-56.747,x:36.5,y:108.1,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-14.3703,x:60.3,y:111.65,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.2,scaleX:0.9997,scaleY:0.9997,rotation:7.4184,x:66.3,y:79.1}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:7.8564,x:59.25,y:52,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_6,p:{rotation:3.3749,x:45.65,y:24.9,regX:45.9,regY:6.5}},{t:this.ikNode_4,p:{rotation:4.2599,x:57.7,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.1,scaleX:0.9993,scaleY:0.9993,rotation:7.1175,x:50.95,y:52.6}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.6,scaleX:0.9994,scaleY:0.9994,rotation:-14.538,x:60.55,y:86.4,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9993,scaleY:0.9993,rotation:-56.2772,x:36.65,y:108.15,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-14.4904,x:60.45,y:111.75,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:7.0507,x:66.15,y:79.2}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:7.6252,x:59.05,y:52.05,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_6,p:{rotation:4.5002,x:45.75,y:24.75,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:5.6807,x:57.75,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:6.9677,x:51.05,y:52.55}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-14.7521,x:60.7,y:86.5,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-55.8083,x:36.85,y:108.25,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-14.6106,x:60.55,y:111.8,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.4,scaleX:0.9997,scaleY:0.9997,rotation:6.6835,x:66.05,y:79.35}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:7.3914,x:58.8,y:52.05,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_6,p:{rotation:5.6253,x:45.7,y:24.55,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:7.1006,x:57.7,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:6.8161,x:51.05,y:52.55}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-14.9649,x:60.75,y:86.4,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-55.3383,x:36.95,y:108.2,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-14.7309,x:60.6,y:111.8,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:6.3146,x:65.9,y:79.25}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:7.1595,x:58.55,y:52.05,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:6.751,x:45.7,y:24.4,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:8.5206,x:57.7,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:6.6646,x:51,y:52.5}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-15.1797,x:60.85,y:86.3,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-54.8696,x:37.15,y:108.35,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-14.8512,x:60.75,y:111.85,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:5.947,x:65.85,y:79.25}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:6.9269,x:58.4,y:52.15,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_6,p:{rotation:7.8758,x:45.6,y:24.25,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:9.9414,x:57.7,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:6.515,x:50.95,y:52.55}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-15.3938,x:61,y:86.3,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-54.4013,x:37.3,y:108.35,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-14.9709,x:60.8,y:111.85,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.4,scaleX:0.9997,scaleY:0.9997,rotation:5.5795,x:65.7,y:79.35}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:6.6952,x:58.15,y:52.15,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_6,p:{rotation:9.0009,x:45.65,y:24.1,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:11.3612,x:57.7,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:6.3642,x:50.9,y:52.5}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-15.608,x:61,y:86.2,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-53.9319,x:37.45,y:108.4,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-15.092,x:61,y:111.9,regY:2.6}},{t:this.ikNode_10,p:{regX:5.6,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:5.2115,x:65.75,y:79.2}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:6.4628,x:57.95,y:52.15,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_6,p:{rotation:10.1259,x:45.6,y:23.95,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:12.7817,x:57.7,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:6.213,x:50.9,y:52.5}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-15.8217,x:61.1,y:86.15,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-53.4626,x:37.6,y:108.4,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-15.2127,x:61,y:111.95,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:4.8437,x:65.5,y:79.15}},{t:this.ikNode_8,p:{regX:12,regY:3.2,rotation:6.2297,x:57.7,y:52.15,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:11.2515,x:45.5,y:23.8,regX:45.9,regY:6.5}},{t:this.ikNode_4,p:{rotation:14.2014,x:57.65,y:22.5,regX:12.2,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:6.0624,x:50.9,y:52.5}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-16.0361,x:61.15,y:86,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-52.9943,x:37.75,y:108.4,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-15.3332,x:61.15,y:111.95,regY:2.6}},{t:this.ikNode_10,p:{regX:5.6,regY:3.4,scaleX:0.9997,scaleY:0.9997,rotation:4.476,x:65.6,y:79.3}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:5.9982,x:57.55,y:52.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_6,p:{rotation:12.377,x:45.55,y:23.6,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:15.6219,x:57.75,y:22.55,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:5.912,x:50.9,y:52.5}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-16.2482,x:61.3,y:85.95,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-52.5248,x:37.9,y:108.55,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-15.4535,x:61.25,y:111.95,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:4.1077,x:65.35,y:79.15}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:5.7662,x:57.4,y:52.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_6,p:{rotation:13.5019,x:45.6,y:23.45,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:17.0422,x:57.7,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:5.7617,x:50.8,y:52.45}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.6,scaleX:0.9994,scaleY:0.9994,rotation:-16.4619,x:61.3,y:85.8,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-52.0551,x:38.05,y:108.5,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-15.5734,x:61.3,y:112,regY:2.6}},{t:this.ikNode_10,p:{regX:5.6,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:3.7404,x:65.4,y:79.15}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:5.5341,x:57.2,y:52.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_6,p:{rotation:14.6268,x:45.5,y:23.3,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:18.4626,x:57.65,y:22.6,regX:12.3,regY:10.2}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:5.6105,x:50.75,y:52.45}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-16.6761,x:61.5,y:85.85,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9993,scaleY:0.9993,rotation:-51.5846,x:38.25,y:108.6,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-15.6943,x:61.45,y:112,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.4,scaleX:0.9997,scaleY:0.9997,rotation:3.3715,x:65.15,y:79.15}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:5.3023,x:56.95,y:52.2,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:15.7519,x:45.4,y:23.1,regX:45.9,regY:6.5}},{t:this.ikNode_4,p:{rotation:19.8824,x:57.7,y:22.65,regX:12.3,regY:10.2}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:5.4593,x:50.7,y:52.4}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-16.89,x:61.5,y:85.8,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-51.1166,x:38.35,y:108.65,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-15.8153,x:61.5,y:112,regY:2.6}},{t:this.ikNode_10,p:{regX:5.6,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:3.0054,x:65.15,y:79.05}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:5.0695,x:56.75,y:52.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_6,p:{rotation:16.8769,x:45.5,y:22.95,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:21.3028,x:57.75,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:5.3082,x:50.7,y:52.45}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-17.1031,x:61.65,y:85.75,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-50.6477,x:38.55,y:108.7,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-15.9352,x:61.7,y:112.1,regY:2.7}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:2.6368,x:64.9,y:79}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:4.8368,x:56.55,y:52.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_6,p:{rotation:18.0023,x:45.5,y:22.85,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:22.7231,x:57.75,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:5.1579,x:50.65,y:52.45}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-17.3175,x:61.7,y:85.65,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-50.1778,x:38.65,y:108.7,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-16.0545,x:61.7,y:112,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:2.2691,x:64.85,y:79}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:4.6035,x:56.35,y:52.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_6,p:{rotation:19.1275,x:45.45,y:22.65,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:24.143,x:57.65,y:22.5,regX:12.2,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:5.0069,x:50.6,y:52.4}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-17.5314,x:61.8,y:85.6,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-49.7097,x:38.85,y:108.7,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-16.1763,x:61.85,y:112,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:1.9016,x:64.8,y:79}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:4.3718,x:56.1,y:52.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_6,p:{rotation:20.2528,x:45.5,y:22.5,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:25.5633,x:57.75,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:4.8558,x:50.55,y:52.4}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-17.745,x:61.8,y:85.6,regX:30.6}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-49.2399,x:39.05,y:108.7,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-16.2964,x:62,y:112,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:1.5332,x:64.6,y:78.95}},{t:this.ikNode_8,p:{regX:12,regY:3.2,rotation:4.1395,x:55.8,y:52.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_6,p:{rotation:21.3782,x:45.55,y:22.45,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:26.9838,x:57.65,y:22.65,regX:12.3,regY:10.2}},{t:this.ikNode_14,p:{regX:9.1,scaleX:0.9994,scaleY:0.9994,rotation:4.7057,x:50.4,y:52.35}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-17.9586,x:61.95,y:85.5,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-48.771,x:39.2,y:108.8,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-15.9662,x:61.6,y:112.2,regY:2.7}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:1.9339,x:64.55,y:79.05}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:4.9106,x:56.2,y:52.25,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_6,p:{rotation:21.3244,x:45.5,y:22.55,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:26.8986,x:57.7,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:4.6486,x:50.65,y:52.35}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-21.2387,x:62.05,y:85.5,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-51.2424,x:40.65,y:110.05,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-15.6373,x:61.25,y:112.1,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.4,scaleX:0.9997,scaleY:0.9997,rotation:2.3339,x:64.35,y:79.2}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:5.68,x:56.4,y:52.2,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_6,p:{rotation:21.2702,x:45.4,y:22.55,regX:45.9,regY:6.5}},{t:this.ikNode_4,p:{rotation:26.8133,x:57.75,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:4.5925,x:50.75,y:52.4}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-24.5193,x:62.15,y:85.45,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-53.714,x:42.15,y:111.2,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-15.3083,x:60.8,y:112.25,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:2.7348,x:64.3,y:79.25}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:6.4505,x:56.6,y:52.15,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_6,p:{rotation:21.2168,x:45.5,y:22.65,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:26.7293,x:57.75,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:4.5354,x:50.85,y:52.4}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-27.7994,x:62.3,y:85.5,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-56.1871,x:43.8,y:112.25,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-14.9789,x:60.5,y:112.25,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:3.135,x:64.1,y:79.3}},{t:this.ikNode_8,p:{regX:12.1,regY:3.1,rotation:7.2212,x:56.85,y:52,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:21.163,x:45.5,y:22.65,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:26.644,x:57.7,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9993,scaleY:0.9993,rotation:4.4793,x:50.85,y:52.35}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-31.079,x:62.5,y:85.45,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-58.6581,x:45.5,y:113.25,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-14.6488,x:60.15,y:112.35,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:3.5345,x:64.05,y:79.4}},{t:this.ikNode_8,p:{regX:12.1,regY:3.1,rotation:7.9916,x:57.15,y:52,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:21.1088,x:45.5,y:22.65,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:26.5588,x:57.75,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:4.4223,x:50.95,y:52.4}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-34.36,x:62.5,y:85.45,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-61.1301,x:47.25,y:114.1,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-14.3198,x:59.75,y:112.3,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.4,scaleX:0.9997,scaleY:0.9997,rotation:3.935,x:63.9,y:79.55}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:8.7589,x:57.3,y:52.1,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:21.0554,x:45.5,y:22.75,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:26.4747,x:57.65,y:22.6,regX:12.3,regY:10.2}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:4.3652,x:51,y:52.4}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-37.641,x:62.65,y:85.4,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-63.6024,x:49,y:114.95,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-13.9906,x:59.45,y:112.4,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:4.3357,x:63.8,y:79.5}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:9.5305,x:57.6,y:52.1,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:21.0012,x:45.5,y:22.8,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:26.3899,x:57.65,y:22.4,regX:12.2,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:4.3099,x:51.1,y:52.45}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-40.9213,x:62.8,y:85.4,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9993,scaleY:0.9993,rotation:-66.0735,x:50.9,y:115.7,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-13.6619,x:59.05,y:112.45,regY:2.6}},{t:this.ikNode_10,p:{regX:5.6,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:4.7357,x:63.75,y:79.5}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:10.301,x:57.85,y:52.1,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_6,p:{rotation:20.9478,x:45.5,y:22.85,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:26.305,x:57.7,y:22.45,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:4.2529,x:51.15,y:52.45}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-44.2008,x:62.9,y:85.4,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-68.5468,x:52.8,y:116.3,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-13.3335,x:58.65,y:112.45,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:5.136,x:63.5,y:79.6}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:11.0719,x:58,y:52,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_6,p:{rotation:20.8943,x:45.5,y:22.95,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:26.2202,x:57.75,y:22.45,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.1,scaleX:0.9994,scaleY:0.9994,rotation:4.1959,x:51.15,y:52.4}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.6,scaleX:0.9994,scaleY:0.9994,rotation:-47.4807,x:62.85,y:85.35,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-71.0186,x:54.65,y:116.8,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-13.0049,x:58.25,y:112.65,regY:2.7}},{t:this.ikNode_10,p:{regX:5.5,regY:3.4,scaleX:0.9997,scaleY:0.9997,rotation:5.5365,x:63.3,y:79.75}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:11.841,x:58.25,y:52.05,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_6,p:{rotation:20.8401,x:45.55,y:23,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:26.1354,x:57.75,y:22.4,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.1,scaleX:0.9994,scaleY:0.9994,rotation:4.1398,x:51.2,y:52.45}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-50.7619,x:63.1,y:85.4,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-73.49,x:56.6,y:117.3,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-12.6756,x:57.9,y:112.5,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:5.9373,x:63.2,y:79.6}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:12.6115,x:58.45,y:52,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_6,p:{rotation:20.7867,x:45.5,y:23.1,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:26.0505,x:57.7,y:22.4,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.1,scaleX:0.9994,scaleY:0.9994,rotation:4.0827,x:51.35,y:52.45}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-54.0417,x:63.15,y:85.3,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-75.9627,x:58.55,y:117.55,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-12.3459,x:57.6,y:112.6,regY:2.7}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:6.3374,x:63.1,y:79.65}},{t:this.ikNode_8,p:{regX:12,regY:3.2,rotation:13.381,x:58.6,y:51.9,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:20.7328,x:45.5,y:23.2,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:25.9653,x:57.75,y:22.45,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.1,scaleX:0.9994,scaleY:0.9994,rotation:4.0257,x:51.4,y:52.45}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-57.3222,x:63.35,y:85.4,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-78.4356,x:60.5,y:117.75,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-12.0159,x:57.2,y:112.45,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.4,scaleX:0.9997,scaleY:0.9997,rotation:6.7371,x:62.9,y:79.8}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:14.1518,x:58.95,y:51.85,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:20.6785,x:45.5,y:23.3,regX:46,regY:6.6}},{t:this.ikNode_4,p:{rotation:25.8808,x:57.7,y:22.4,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.1,scaleX:0.9994,scaleY:0.9994,rotation:3.9688,x:51.45,y:52.45}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-60.6021,x:63.4,y:85.35,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9993,scaleY:0.9993,rotation:-80.9072,x:62.6,y:117.85,regY:1.8}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-11.6861,x:56.75,y:112.45,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:7.1372,x:62.75,y:79.65}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:14.9225,x:59.2,y:51.8,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:20.6251,x:45.5,y:23.4,regX:46,regY:6.6}},{t:this.ikNode_4,p:{rotation:25.796,x:57.7,y:22.4,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:3.9117,x:51.65,y:52.5}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-63.8829,x:63.5,y:85.35,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9993,scaleY:0.9993,rotation:-83.3787,x:64.45,y:117.8,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-11.3576,x:56.35,y:112.35,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:7.5375,x:62.65,y:79.6}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:15.6925,x:59.45,y:51.75,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:20.5709,x:45.5,y:23.45,regX:46,regY:6.6}},{t:this.ikNode_4,p:{rotation:25.7107,x:57.7,y:22.4,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:3.8556,x:51.75,y:52.45}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-67.1624,x:63.65,y:85.3,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9993,scaleY:0.9993,rotation:-85.8502,x:66.45,y:117.65,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-11.0278,x:56,y:112.35,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.2,scaleX:0.9997,scaleY:0.9997,rotation:7.9383,x:62.5,y:79.55}},{t:this.ikNode_8,p:{regX:12.1,regY:3.1,rotation:16.4623,x:59.65,y:51.65,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:20.5178,x:45.55,y:23.4,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:25.6263,x:57.75,y:22.35,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:3.7987,x:51.8,y:52.45}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-70.4443,x:63.75,y:85.4,regX:30.6}},{t:this.ikNode_18,p:{scaleX:0.9993,scaleY:0.9993,rotation:-88.3225,x:68.4,y:117.5,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-10.6992,x:55.6,y:112.25,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:8.3384,x:62.3,y:79.7}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:17.2326,x:59.85,y:51.7,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:20.4635,x:45.55,y:23.5,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:25.541,x:57.7,y:22.35,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:3.7416,x:51.9,y:52.5}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-73.7242,x:63.85,y:85.25,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9993,scaleY:0.9993,rotation:-90.7909,x:70.3,y:117.2,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-10.3691,x:55.2,y:112.2,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:8.738,x:62.25,y:79.65}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:18.0035,x:60.1,y:51.65,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:20.4096,x:45.45,y:23.5,regX:45.9,regY:6.5}},{t:this.ikNode_4,p:{rotation:25.4565,x:57.7,y:22.35,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:3.6855,x:52,y:52.5}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-77.0045,x:64,y:85.3,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9993,scaleY:0.9993,rotation:-93.2626,x:72.3,y:116.7,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-10.0413,x:54.85,y:112.15,regY:2.6}},{t:this.ikNode_10,p:{regX:5.6,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:9.1383,x:62.2,y:79.7}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:18.7737,x:60.3,y:51.6,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:20.3562,x:45.6,y:23.65,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:25.3717,x:57.6,y:22.35,regX:12.2,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:3.6286,x:52.1,y:52.5}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.6,scaleX:0.9994,scaleY:0.9994,rotation:-80.2851,x:63.95,y:85.25,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9993,scaleY:0.9993,rotation:-95.7342,x:74.25,y:116.15,regY:1.8}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-9.7111,x:54.55,y:112.05,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:9.5381,x:61.9,y:79.6}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:19.544,x:60.6,y:51.55,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:20.3023,x:45.6,y:23.7,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:25.2864,x:57.7,y:22.35,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:3.5716,x:52.2,y:52.5}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-83.5654,x:64.2,y:85.25,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9993,scaleY:0.9993,rotation:-98.206,x:76.05,y:115.45,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-9.1082,x:53.65,y:111.9,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:10.57,x:61.65,y:79.7}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:19.8588,x:60.45,y:51.55,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_6,p:{rotation:19.2876,x:45.5,y:23.9,regX:46,regY:6.6}},{t:this.ikNode_4,p:{rotation:24.0224,x:57.75,y:22.3,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:2.8653,x:52.1,y:52.5}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-81.5442,x:64.5,y:85.05,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9993,scaleY:0.9993,rotation:-96.5058,x:75.3,y:115.7,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-8.5046,x:52.8,y:111.8,regY:2.6}},{t:this.ikNode_10,p:{regX:5.6,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:11.6039,x:61.45,y:79.8}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:20.1745,x:60.3,y:51.55,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_6,p:{rotation:18.2718,x:45.6,y:23.8,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:22.7583,x:57.75,y:22.35,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:2.1569,x:52.05,y:52.5}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-79.5229,x:64.85,y:85.1,regX:30.6}},{t:this.ikNode_18,p:{scaleX:0.9993,scaleY:0.9993,rotation:-94.8045,x:74.55,y:115.95,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-7.9012,x:51.85,y:111.7,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.2,scaleX:0.9997,scaleY:0.9997,rotation:12.6368,x:60.95,y:79.6}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:20.49,x:60.2,y:51.65,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:17.2574,x:45.6,y:23.95,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:21.4936,x:57.7,y:22.35,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:1.4488,x:52,y:52.5}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-77.5009,x:65.2,y:84.8,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9993,scaleY:0.9993,rotation:-93.1031,x:73.8,y:116.1,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-7.2968,x:51.05,y:111.6,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:13.668,x:60.65,y:79.75}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:20.8042,x:60,y:51.65,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:16.242,x:45.5,y:24,regX:45.9,regY:6.5}},{t:this.ikNode_4,p:{rotation:20.2295,x:57.7,y:22.4,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:0.7401,x:51.95,y:52.45}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-75.4811,x:65.6,y:84.65,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9993,scaleY:0.9993,rotation:-91.4009,x:73.05,y:116.2,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-6.694,x:50.15,y:111.45,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:14.7019,x:60.3,y:79.8}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:21.1206,x:59.95,y:51.65,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:15.2265,x:45.65,y:24.1,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:18.9647,x:57.7,y:22.4,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:0.0315,x:51.95,y:52.4}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.6,scaleX:0.9994,scaleY:0.9994,rotation:-73.4595,x:65.8,y:84.45,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9993,scaleY:0.9993,rotation:-89.7052,x:72.3,y:116.3,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-6.0904,x:49.3,y:111.25,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:15.7353,x:60.1,y:79.85}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:21.436,x:59.75,y:51.7,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:14.2114,x:45.65,y:24.2,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:17.7009,x:57.7,y:22.35,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:-0.671,x:51.85,y:52.5}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-71.4384,x:66.25,y:84.25,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9993,scaleY:0.9993,rotation:-88.004,x:71.45,y:116.3,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-5.4865,x:48.4,y:111.1,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:16.7671,x:59.8,y:79.9}},{t:this.ikNode_8,p:{regX:12.1,regY:3.1,rotation:21.7517,x:59.65,y:51.65,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_6,p:{rotation:13.1963,x:45.65,y:24.4,regX:46,regY:6.6}},{t:this.ikNode_4,p:{rotation:16.4362,x:57.7,y:22.5,regX:12.3,regY:10.2}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:-1.3806,x:51.8,y:52.5}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-69.4167,x:66.7,y:84.15,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9993,scaleY:0.9993,rotation:-86.3018,x:70.7,y:116.25,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-4.8833,x:47.55,y:110.95,regY:2.6}},{t:this.ikNode_10,p:{regX:5.6,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:17.8002,x:59.65,y:79.9}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:22.066,x:59.45,y:51.75,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:12.181,x:45.6,y:24.35,regX:45.9,regY:6.5}},{t:this.ikNode_4,p:{rotation:15.1722,x:57.6,y:22.4,regX:12.2,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:-2.0869,x:51.8,y:52.45}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.6,scaleX:0.9994,scaleY:0.9994,rotation:-67.3946,x:66.85,y:83.9,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9993,scaleY:0.9993,rotation:-84.5999,x:70.05,y:116.25,regY:1.8}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-4.2796,x:46.7,y:110.85,regY:2.7}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:18.8329,x:59.2,y:79.9}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:22.3825,x:59.35,y:51.75,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:11.1659,x:45.7,y:24.45,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:13.9077,x:57.7,y:22.4,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:-2.7961,x:51.75,y:52.45}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-65.3742,x:67.3,y:83.7,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-82.8985,x:69.1,y:116.1,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-3.6756,x:45.85,y:110.65,regY:2.7}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:19.8657,x:58.85,y:79.9}},{t:this.ikNode_8,p:{regX:12,regY:3.2,rotation:22.6978,x:59.05,y:51.8,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:10.1508,x:45.7,y:24.5,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:12.643,x:57.75,y:22.4,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:-3.5032,x:51.7,y:52.45}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-63.3528,x:67.65,y:83.55,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-81.1978,x:68.3,y:116,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-3.0729,x:45,y:110.3,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.4,scaleX:0.9997,scaleY:0.9997,rotation:20.8976,x:58.55,y:80.05}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:23.0129,x:59.05,y:51.85,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:9.1355,x:45.6,y:24.6,regX:45.9,regY:6.5}},{t:this.ikNode_4,p:{rotation:11.379,x:57.7,y:22.45,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:-4.2126,x:51.6,y:52.4}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-61.3332,x:67.95,y:83.4,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-79.4972,x:67.5,y:115.75,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.4678,x:44.15,y:110.05,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:21.9308,x:58.3,y:79.95}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:23.3276,x:58.95,y:51.85,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_6,p:{rotation:8.1203,x:45.7,y:24.8,regX:46,regY:6.6}},{t:this.ikNode_4,p:{rotation:10.1144,x:57.75,y:22.4,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:-4.9199,x:51.6,y:52.45}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-59.3111,x:68.25,y:83.05,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-77.7954,x:66.65,y:115.55,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-1.864,x:43.35,y:109.85,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:22.963,x:57.95,y:80}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:23.6424,x:58.75,y:51.9,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:7.1059,x:45.75,y:24.75,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:8.8505,x:57.7,y:22.55,regX:12.3,regY:10.2}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:-5.6281,x:51.55,y:52.45}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-57.29,x:68.6,y:82.95,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-76.0926,x:65.85,y:115.25,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-1.2612,x:42.5,y:109.55,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:23.9969,x:57.65,y:80.05}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:23.958,x:58.6,y:51.85,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:6.0902,x:45.8,y:24.85,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:7.5855,x:57.7,y:22.4,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:-6.3353,x:51.55,y:52.4}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-55.2688,x:69,y:82.75,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9993,scaleY:0.9993,rotation:-74.3935,x:65.1,y:114.9,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-0.6577,x:41.65,y:109.3,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:25.0282,x:57.45,y:80.05}},{t:this.ikNode_8,p:{regX:12.1,regY:3.1,rotation:24.274,x:58.55,y:51.8,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:5.0756,x:45.65,y:24.9,regX:45.9,regY:6.5}},{t:this.ikNode_4,p:{rotation:6.3216,x:57.7,y:22.45,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9993,scaleY:0.9993,rotation:-7.0435,x:51.45,y:52.4}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-53.2475,x:69.25,y:82.45,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-72.6917,x:64.2,y:114.6,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-0.0542,x:40.75,y:109.05,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:26.0617,x:57.15,y:80.05}},{t:this.ikNode_8,p:{regX:12,regY:3.2,rotation:24.5886,x:58.2,y:51.9,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:4.06,x:45.85,y:25,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:5.0572,x:57.7,y:22.45,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:-7.751,x:51.4,y:52.4}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-51.2265,x:69.55,y:82.25,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-70.9901,x:63.35,y:114.1,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:0.5448,x:40.05,y:108.75,regY:2.6}},{t:this.ikNode_10,p:{regX:5.6,regY:3.4,scaleX:0.9997,scaleY:0.9997,rotation:27.0939,x:56.9,y:80.2}},{t:this.ikNode_8,p:{regX:12.1,regY:3.1,rotation:24.9041,x:58.2,y:51.85,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:3.0448,x:45.85,y:25.1,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:3.7927,x:57.7,y:22.45,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:-8.4604,x:51.4,y:52.4}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.6,scaleX:0.9994,scaleY:0.9994,rotation:-49.204,x:69.8,y:81.95,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9993,scaleY:0.9993,rotation:-69.2877,x:62.6,y:113.7,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:1.1484,x:39.2,y:108.45,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.2,scaleX:0.9997,scaleY:0.9997,rotation:28.1266,x:56.6,y:80}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:25.2198,x:58.05,y:52,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:2.0296,x:45.75,y:25.3,regX:45.9,regY:6.6}},{t:this.ikNode_4,p:{rotation:2.5283,x:57.75,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:-9.1679,x:51.35,y:52.45}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-47.1835,x:70.15,y:81.85,regX:30.6}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-67.5874,x:61.75,y:113.15,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:1.752,x:38.3,y:108.15,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:29.1578,x:56.25,y:80.1}},{t:this.ikNode_8,p:{regX:12,regY:3.2,rotation:25.5363,x:57.75,y:51.95,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:1.0151,x:45.9,y:25.25,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:1.2643,x:57.75,y:22.45,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:-9.8767,x:51.25,y:52.4}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-45.1621,x:70.4,y:81.6,regX:30.6}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-65.8855,x:61,y:112.65,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:2.3558,x:37.6,y:107.8,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:30.1927,x:55.95,y:80.1}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:25.8516,x:57.75,y:52,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:0,x:46,y:25.35,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:0,x:57.8,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9993,scaleY:0.9993,rotation:-10.5843,x:51.2,y:52.4}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.6,scaleX:0.9994,scaleY:0.9994,rotation:-43.1408,x:70.8,y:81.25,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-64.1843,x:60.25,y:112,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:1.9165,x:38,y:108,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:29.5334,x:56.1,y:80.05}},{t:this.ikNode_8,p:{regX:12,regY:3.2,rotation:25.489,x:57.65,y:51.95,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:0,x:46,y:25.35,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:0,x:57.8,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:-9.8758,x:51.3,y:52.4}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.6,scaleX:0.9994,scaleY:0.9994,rotation:-42.3341,x:70.5,y:81.55,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9993,scaleY:0.9993,rotation:-63.6936,x:59.5,y:112.05,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:1.4781,x:38.6,y:108.25,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.4,scaleX:0.9997,scaleY:0.9997,rotation:28.8752,x:56.25,y:80.25}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:25.1291,x:57.75,y:52.05,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:0,x:46,y:25.35,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:0,x:57.8,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:-9.1652,x:51.4,y:52.45}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-41.5277,x:70.3,y:81.85,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-63.206,x:58.8,y:112.1,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:1.039,x:39.05,y:108.45,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.2,scaleX:0.9997,scaleY:0.9997,rotation:28.2169,x:56.5,y:80.05}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:24.7671,x:57.75,y:52,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:0,x:46,y:25.35,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:0,x:57.8,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:-8.458,x:51.55,y:52.4}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-40.7209,x:69.95,y:82.05,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-62.7162,x:58.1,y:112.25,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:0.6008,x:39.55,y:108.65,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:27.5593,x:56.55,y:80.15}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:24.4059,x:57.75,y:52,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:0,x:46,y:25.35,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:0,x:57.8,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:-7.7474,x:51.55,y:52.4}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-39.9148,x:69.65,y:82.35,regX:30.6}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-62.2266,x:57.4,y:112.3,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:0.1618,x:40.05,y:108.85,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:26.901,x:56.85,y:80.15}},{t:this.ikNode_8,p:{regX:12.1,regY:3.1,rotation:24.0453,x:57.8,y:52,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:0,x:46,y:25.35,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:0,x:57.8,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:-7.0391,x:51.65,y:52.4}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-39.1075,x:69.4,y:82.55,regX:30.6}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-61.7377,x:56.7,y:112.35,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-0.272,x:40.55,y:109.1,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.2,scaleX:0.9997,scaleY:0.9997,rotation:26.2428,x:57.1,y:80.1}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:23.6847,x:57.75,y:52,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:0,x:46,y:25.35,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:0,x:57.8,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:-6.33,x:51.8,y:52.45}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-38.3016,x:69.2,y:82.75,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-61.2479,x:56.05,y:112.4,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-0.711,x:41.15,y:109.25,regY:2.6}},{t:this.ikNode_10,p:{regX:5.6,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:25.5837,x:57.3,y:80.25}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:23.324,x:57.8,y:52.05,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:0,x:46,y:25.35,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:0,x:57.8,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:-5.6201,x:51.9,y:52.5}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-37.4943,x:68.9,y:83,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-60.758,x:55.4,y:112.5,regY:1.8}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-1.1484,x:41.65,y:109.45,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:24.9261,x:57.35,y:80.15}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:22.9627,x:57.75,y:52,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:0,x:46,y:25.35,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:0,x:57.8,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:-4.9111,x:51.95,y:52.45}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-36.6886,x:68.45,y:83.25,regX:30.6}},{t:this.ikNode_18,p:{scaleX:0.9993,scaleY:0.9993,rotation:-60.2699,x:54.6,y:112.5,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-1.5884,x:42.1,y:109.6,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:24.2687,x:57.55,y:80.1}},{t:this.ikNode_8,p:{regX:12,regY:3.2,rotation:22.6018,x:57.6,y:51.95,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_6,p:{rotation:0,x:46,y:25.35,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:0,x:57.8,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:-4.202,x:52,y:52.5}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.6,scaleX:0.9994,scaleY:0.9994,rotation:-35.8813,x:68.2,y:83.3,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-59.7799,x:53.85,y:112.5,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.0267,x:42.7,y:109.75,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.2,scaleX:0.9997,scaleY:0.9997,rotation:23.61,x:57.7,y:80.05}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:22.2409,x:57.75,y:52.05,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:0,x:46,y:25.35,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:0,x:57.8,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:-3.4936,x:52.1,y:52.5}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-35.0761,x:67.95,y:83.6,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-59.2909,x:53.15,y:112.5,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.4652,x:43.2,y:110,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:22.9508,x:57.9,y:80.15}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:21.8789,x:57.75,y:52,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:0,x:46,y:25.35,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:0,x:57.8,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:-2.7839,x:52.2,y:52.5}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-34.2687,x:67.7,y:83.8,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-58.8014,x:52.45,y:112.55,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-2.9038,x:43.7,y:110.15,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:22.293,x:58.1,y:80.15}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:21.5185,x:57.8,y:52.05,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:0,x:46,y:25.35,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:0,x:57.8,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:-2.0747,x:52.35,y:52.5}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.6,scaleX:0.9994,scaleY:0.9994,rotation:-33.463,x:67.35,y:83.95,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-58.3121,x:51.8,y:112.45,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-3.3435,x:44.2,y:110.3,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:21.6353,x:58.3,y:80.2}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:21.1583,x:57.8,y:52,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:0,x:46,y:25.35,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:0,x:57.8,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:-1.3657,x:52.4,y:52.5}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-32.6557,x:67.05,y:84.2,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-57.8224,x:51.1,y:112.45,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-3.7816,x:44.7,y:110.4,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.4,scaleX:0.9997,scaleY:0.9997,rotation:20.977,x:58.45,y:80.25}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:20.7967,x:57.75,y:52,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:0,x:46,y:25.35,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:0,x:57.8,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:-0.657,x:52.5,y:52.5}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-31.8497,x:66.75,y:84.4,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-57.3347,x:50.4,y:112.35,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-4.22,x:45.3,y:110.7,regY:2.7}},{t:this.ikNode_10,p:{regX:5.5,regY:3.4,scaleX:0.9997,scaleY:0.9997,rotation:20.3192,x:58.55,y:80.3}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:20.4358,x:57.8,y:52,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:0,x:46,y:25.35,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:0,x:57.8,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:0.0472,x:52.55,y:52.5}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-31.0428,x:66.55,y:84.65,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9993,scaleY:0.9993,rotation:-56.845,x:49.65,y:112.3,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-4.6577,x:45.8,y:110.75,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:19.6607,x:58.8,y:80.1}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:20.0738,x:57.75,y:52,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_6,p:{rotation:0,x:46,y:25.35,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:0,x:57.8,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:0.7567,x:52.65,y:52.5}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-30.2361,x:66,y:84.8,regX:30.6}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-56.3556,x:49,y:112.25,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-5.0974,x:46.4,y:110.9,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.2,scaleX:0.9996,scaleY:0.9996,rotation:19.0016,x:59,y:80}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:19.7139,x:57.75,y:52,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:0,x:46,y:25.35,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:0,x:57.8,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:1.4672,x:52.8,y:52.55}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-29.43,x:65.85,y:84.85,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-55.8663,x:48.3,y:112.15,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-5.5357,x:46.9,y:111,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.4,scaleX:0.9997,scaleY:0.9997,rotation:18.3434,x:59.15,y:80.3}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:19.3524,x:57.75,y:52,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:0,x:46,y:25.35,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:0,x:57.8,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:2.1762,x:52.8,y:52.55}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-28.6225,x:65.6,y:85.05,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-55.3766,x:47.6,y:112.15,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-5.9752,x:47.4,y:111.25,regY:2.7}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:17.6855,x:59.35,y:80.1}},{t:this.ikNode_8,p:{regX:12.1,regY:3.1,rotation:18.9909,x:57.85,y:51.95,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:0,x:46,y:25.35,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:0,x:57.8,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:2.8855,x:52.9,y:52.5}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-27.8163,x:65.25,y:85.25,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9993,scaleY:0.9993,rotation:-54.8868,x:46.9,y:112.05,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-6.4132,x:47.9,y:111.3,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.2,scaleX:0.9997,scaleY:0.9997,rotation:17.0285,x:59.5,y:80}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:18.6308,x:57.8,y:52,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:0,x:46,y:25.35,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:0,x:57.8,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:3.5935,x:53,y:52.55}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-27.0095,x:64.9,y:85.4,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-54.3989,x:46.2,y:111.95,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-6.8518,x:48.5,y:111.4,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:16.37,x:59.65,y:80.1}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:18.2682,x:57.8,y:52,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:0,x:46,y:25.35,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:0,x:57.8,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:4.3038,x:53.05,y:52.55}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.6,scaleX:0.9994,scaleY:0.9994,rotation:-26.2032,x:64.6,y:85.4,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-53.9088,x:45.5,y:111.8,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-7.2907,x:49.05,y:111.5,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:15.7115,x:59.85,y:80.15}},{t:this.ikNode_8,p:{regX:12,regY:3.2,rotation:17.9086,x:57.7,y:52,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_6,p:{rotation:0,x:46,y:25.35,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:0,x:57.8,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:5.0121,x:53.15,y:52.5}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.6,scaleX:0.9994,scaleY:0.9994,rotation:-25.3964,x:64.2,y:85.65,regX:30.6}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-53.4188,x:44.8,y:111.65,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-7.7298,x:49.6,y:111.7,regY:2.7}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:15.0532,x:60,y:80.15}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:17.5469,x:57.8,y:52,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:0,x:46,y:25.35,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:0,x:57.8,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:5.7212,x:53.25,y:52.5}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-24.5906,x:63.9,y:85.85,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-52.9306,x:44.15,y:111.55,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-8.1671,x:50.1,y:111.7,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.4,scaleX:0.9997,scaleY:0.9997,rotation:14.3936,x:60.25,y:80.2}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:17.187,x:57.8,y:51.95,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:0,x:46,y:25.35,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:0,x:57.8,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:6.4295,x:53.3,y:52.55}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-23.7832,x:63.65,y:85.95,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-52.4406,x:43.6,y:111.5,regY:1.8}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-8.6064,x:50.7,y:111.8,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:13.7365,x:60.4,y:80.05}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:16.8265,x:57.8,y:52,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:0,x:46,y:25.35,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:0,x:57.8,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.1,scaleX:0.9993,scaleY:0.9993,rotation:7.1387,x:53.3,y:52.55}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-22.9763,x:63.3,y:86.05,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-51.951,x:42.75,y:111.2,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-9.0452,x:51.2,y:111.85,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:13.0785,x:60.6,y:80.05}},{t:this.ikNode_8,p:{regX:12.1,regY:3.1,rotation:16.464,x:57.8,y:51.9,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:0,x:46,y:25.35,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:0,x:57.8,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:7.848,x:53.45,y:52.6}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-22.1705,x:62.95,y:86.2,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-51.4622,x:42.1,y:111.1,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-9.484,x:51.8,y:112,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:12.4204,x:60.8,y:80.05}},{t:this.ikNode_8,p:{regX:12,regY:3.2,rotation:16.1031,x:57.65,y:51.95,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:0,x:46,y:25.35,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:0,x:57.8,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:8.5569,x:53.55,y:52.6}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-21.3633,x:62.7,y:86.35,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-50.9723,x:41.4,y:110.95,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-9.9223,x:52.25,y:112.05,regY:2.6}},{t:this.ikNode_10,p:{regX:5.6,regY:3.4,scaleX:0.9997,scaleY:0.9997,rotation:11.7619,x:61.05,y:80.2}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:15.743,x:57.85,y:52.05,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:0,x:46,y:25.35,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:0,x:57.8,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.1,scaleX:0.9994,scaleY:0.9994,rotation:9.2654,x:53.55,y:52.6}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-20.557,x:62.3,y:86.5,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-50.4836,x:40.75,y:110.75,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-10.3604,x:52.85,y:112.15,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:11.1043,x:61.15,y:79.95}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:15.3818,x:57.85,y:52,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:0,x:46,y:25.35,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:0,x:57.8,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:9.9752,x:53.75,y:52.65}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-19.7496,x:61.95,y:86.6,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-49.994,x:40.1,y:110.55,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-10.7998,x:53.45,y:112.2,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:10.4455,x:61.35,y:79.95}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:15.0209,x:57.8,y:52,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:0,x:46,y:25.35,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:0,x:57.8,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9993,scaleY:0.9993,rotation:10.6832,x:53.85,y:52.65}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-18.9442,x:61.6,y:86.65,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-49.5049,x:39.4,y:110.3,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-11.2391,x:54,y:112.3,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:9.7881,x:61.55,y:79.95}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:14.6584,x:57.8,y:52,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:0,x:46,y:25.35,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:0,x:57.8,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.1,scaleX:0.9993,scaleY:0.9993,rotation:11.3926,x:53.8,y:52.6}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.6,scaleX:0.9994,scaleY:0.9994,rotation:-18.1367,x:61.3,y:86.6,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-49.0154,x:38.75,y:110.1,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-11.6771,x:54.6,y:112.35,regY:2.6}},{t:this.ikNode_10,p:{regX:5.6,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:9.1295,x:61.85,y:79.9}},{t:this.ikNode_8,p:{regX:12,regY:3.2,rotation:14.2986,x:57.7,y:52,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_6,p:{rotation:0,x:46,y:25.35,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:0,x:57.8,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:12.1031,x:54,y:52.65}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-17.3303,x:61.05,y:86.8,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-48.5262,x:38.05,y:109.85,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-12.1169,x:55.15,y:112.4,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.2,scaleX:0.9997,scaleY:0.9997,rotation:8.4718,x:61.95,y:79.7}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:13.938,x:57.85,y:52,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:0,x:46,y:25.35,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:0,x:57.8,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:12.8108,x:54.05,y:52.65}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-16.523,x:60.6,y:86.9,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-48.0372,x:37.45,y:109.65,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-12.5547,x:55.7,y:112.45,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:7.8129,x:62.1,y:79.8}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:13.577,x:57.8,y:52.05,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:0,x:46,y:25.35,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:0,x:57.8,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:13.5204,x:54.2,y:52.65}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-15.7179,x:60.3,y:87,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-47.5473,x:36.9,y:109.45,regY:1.8}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-12.9941,x:56.2,y:112.65,regY:2.7}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:7.1557,x:62.25,y:79.8}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:13.2162,x:57.85,y:51.95,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:0,x:46,y:25.35,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:0,x:57.8,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.1,scaleX:0.9994,scaleY:0.9994,rotation:14.2289,x:54.15,y:52.6}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-14.9106,x:60,y:87.05,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-47.0581,x:36.1,y:109.1,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-13.4334,x:56.75,y:112.6,regY:2.7}},{t:this.ikNode_10,p:{regX:5.5,regY:3.4,scaleX:0.9997,scaleY:0.9997,rotation:6.4977,x:62.4,y:79.85}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:12.8536,x:57.85,y:52,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_6,p:{rotation:0,x:46,y:25.35,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:0,x:57.8,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9993,scaleY:0.9993,rotation:14.9393,x:54.35,y:52.6}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-14.1037,x:59.7,y:87.05,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-46.5685,x:35.5,y:108.9,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-13.8699,x:57.3,y:112.5,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:5.8398,x:62.55,y:79.75}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:12.4925,x:57.8,y:51.95,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:0,x:46,y:25.35,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:0,x:57.8,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.1,scaleX:0.9993,scaleY:0.9993,rotation:15.6477,x:54.3,y:52.6}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-13.2987,x:59.3,y:87.25,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-46.0796,x:34.8,y:108.6,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-14.309,x:57.9,y:112.5,regY:2.6}},{t:this.ikNode_10,p:{regX:5.5,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:5.1808,x:62.8,y:79.7}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:12.1317,x:57.85,y:52,scaleX:0.9996,scaleY:0.9996}},{t:this.ikNode_6,p:{rotation:0,x:46,y:25.35,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:0,x:57.8,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.1,scaleX:0.9994,scaleY:0.9994,rotation:16.3575,x:54.45,y:52.6}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.6,scaleX:0.9994,scaleY:0.9994,rotation:-12.4928,x:58.9,y:87.15,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-45.5902,x:34.2,y:108.25,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-14.7473,x:58.45,y:112.55,regY:2.6}},{t:this.ikNode_10,p:{regX:5.6,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:4.5225,x:63.05,y:79.7}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:11.7713,x:57.85,y:52,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_6,p:{rotation:0,x:46,y:25.35,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:0,x:57.8,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9993,scaleY:0.9993,rotation:17.0657,x:54.65,y:52.6}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-11.6858,x:58.6,y:87.4,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-45.1002,x:33.55,y:108,regY:1.7}}]},1).to({state:[{t:this.ikNode_12,p:{rotation:-15.1862,x:58.95,y:112.6,regY:2.6}},{t:this.ikNode_10,p:{regX:5.6,regY:3.3,scaleX:0.9997,scaleY:0.9997,rotation:3.864,x:63.3,y:79.65}},{t:this.ikNode_8,p:{regX:12.1,regY:3.2,rotation:11.4115,x:57.8,y:52,scaleX:0.9997,scaleY:0.9997}},{t:this.ikNode_6,p:{rotation:0,x:46,y:25.35,regX:46,regY:6.5}},{t:this.ikNode_4,p:{rotation:0,x:57.8,y:22.5,regX:12.3,regY:10.1}},{t:this.ikNode_14,p:{regX:9.2,scaleX:0.9994,scaleY:0.9994,rotation:17.776,x:54.75,y:52.6}},{t:this.ikNode_1},{t:this.ikNode_2},{t:this.ikNode_16,p:{regY:5.7,scaleX:0.9994,scaleY:0.9994,rotation:-10.8795,x:58.25,y:87.45,regX:30.7}},{t:this.ikNode_18,p:{scaleX:0.9992,scaleY:0.9992,rotation:-44.6115,x:32.95,y:107.7,regY:1.7}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.1,-0.3,97.5,128.5);


// stage content:
(lib.走鋼索 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 人
	this.instance = new lib.走鋼索人();
	this.instance.setTransform(109.05,69.2,0.5602,0.5602,0,0,0,45,61.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(101).to({y:68.95},0).wait(499));

	// 鋼索
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("Eh23AAAMDtvAAA");
	this.shape.setTransform(760.75,101.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(600));

	// 背景
	this.instance_1 = new lib.Tween5("synched",0);
	this.instance_1.setTransform(762.4,89.45);

	this.instance_2 = new lib.Tween6("synched",0);
	this.instance_2.setTransform(-262.4,89.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},599).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,x:-262.4},599).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-774.8,89,2299.8,90);
// library properties:
lib.properties = {
	id: '40584155C066764CAC244B8DFC57E457',
	width: 500,
	height: 178,
	fps: 10,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_7.png", id:"CachedBmp_7"},
		{src:"images/CachedBmp_6.png", id:"CachedBmp_6"},
		{src:"images/走鋼索_atlas_1.png", id:"走鋼索_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['40584155C066764CAC244B8DFC57E457'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;