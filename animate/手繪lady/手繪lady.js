(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"手繪lady_atlas_1", frames: [[0,0,623,434],[0,436,278,280],[581,467,153,408],[625,0,180,465],[280,669,192,322],[0,718,231,138],[280,436,299,231],[474,877,312,103],[474,669,54,128]]}
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



(lib.CachedBmp_9 = function() {
	this.initialize(ss["手繪lady_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["手繪lady_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["手繪lady_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_6 = function() {
	this.initialize(ss["手繪lady_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["手繪lady_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["手繪lady_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["手繪lady_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["手繪lady_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["手繪lady_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.圖層1影像 = function() {
	this.initialize(img.圖層1影像);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1530,3727);


(lib.圖層1影像_1 = function() {
	this.initialize(img.圖層1影像_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1530,3727);// helper functions:

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


(lib.筆 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 手握筆
	this.instance = new lib.圖層1影像();
	this.instance.setTransform(0,0,0.0979,0.0979);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.筆, new cjs.Rectangle(0,0,149.9,365), null);


// stage content:
(lib.手繪lady = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 手握筆
	this.instance = new lib.圖層1影像_1();
	this.instance.setTransform(-32.35,264.25,0.0979,0.0979);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(139));

	// 筆１２
	this.instance_1 = new lib.筆();
	this.instance_1.setTransform(294.55,463.6,1,1,0,0,0,74.9,182.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(132).to({_off:false},0).wait(1).to({x:284.75,y:476.9},0).wait(1).to({x:293.5,y:490.2},0).wait(1).to({x:296.3,y:508.4},0).to({_off:true},1).wait(4));

	// 遮色片１２ (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_132 = new cjs.Graphics().p("AgJB8QgegDgZgPQgYgPgQgaQgQgZgDgdQgDgiAPgfQAOgcAagSQAbgTAfgEQAdgDAeAMQAeAMAUAYQATAWAGAeQAHAcgHAcQgHAcgUAXQgUAXgbALQgXAJgYAAIgJAAg");
	var mask_graphics_133 = new cjs.Graphics().p("AgsDDQgjAAgdgRQgcgRgRgeQgRgeABghQABghATgeQASgcAdgQQANgGANgEIgCgKQgDgjAPgeQAOgcAagTQAagSAfgEQAegEAeAMQAeAMAUAYQATAXAGAdQAHAdgHAdQgHAcgUAWQgUAWgbALIgOAFQACAJAAAKQABAhgRAfQgRAegdARQgbAQghAAIgCAAg");
	var mask_graphics_134 = new cjs.Graphics().p("ABHEJQgfgCgYgPQgYgPgRgZQgQgZgDgdQgCgRACgQQgQAFgSgBQgjAAgcgRQgdgRgRgeQgQgeABggQABghASgeQASgdAegQQAMgGANgDIgBgLQgDgjAPgeQANgcAbgTQAagSAfgEQAegEAeAMQAeAMAUAYQASAXAHAdQAGAdgHAdQgHAcgUAXQgTAWgbALIgPAFQACAKAAAJQABAKgCALIASgEQAfgDAeALQAeAMAUAYQATAWAHAeQAHAdgHAcQgHAdgTAXQgUAXgbALQgXAKgZAAIgIAAg");
	var mask_graphics_135 = new cjs.Graphics().p("AgHFtQgbgOgSgZQgTgZgEgdQgFgfALgeQALgfAYgUQAVgSAbgIQgXgOgQgZQgQgZgDgdQgCgQACgQQgQAEgSAAQgjAAgcgQQgdgRgRgeQgQgfABghQABghASgdQASgeAegPQAMgGANgEIgBgKQgDgjAPgfQANgcAbgSQAagTAfgEQAegDAeAMQAeAMAUAYQASAWAHAeQAGAdgHAcQgHAcgUAXQgTAXgbALIgPAFQACAJAAAKQABALgCALIASgEQAfgEAeAMQAeAMAUAYQATAWAHAdQAHAdgHAcQgHAcgTAXQgUAXgbAMIgOAFQASALANARQAWAcAEAhQAFAhgOAgQgOAhgcATQgbAUgjADIgKAAQgeAAgYgMg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(132).to({graphics:mask_graphics_132,x:316.9315,y:286.1509}).wait(1).to({graphics:mask_graphics_133,x:312.4036,y:293.2362}).wait(1).to({graphics:mask_graphics_134,x:315.7721,y:300.2253}).wait(1).to({graphics:mask_graphics_135,x:315.7721,y:311.4539}).wait(5));

	// lady12
	this.instance_2 = new lib.CachedBmp_1();
	this.instance_2.setTransform(302.3,281.05,0.5,0.5);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(132).to({_off:false},0).wait(8));

	// 筆１１
	this.instance_3 = new lib.筆();
	this.instance_3.setTransform(147.25,434.4,1,1,0,0,0,74.9,182.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(129).to({_off:false},0).wait(1).to({x:141.3,y:442.8},0).wait(1).to({x:153.2},0).to({_off:true},1).wait(8));

	// 遮色片１１ (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_129 = new cjs.Graphics().p("AgZBLQgWgIgOgRQgVgbAEgiQADgVAPgSQAOgRAVgHQAUgHAVAEQAXAFAPAPQAQAOAHAWQAGAVgGAVQgGAVgRAQQgQAPgWAFQgIABgIAAQgMAAgNgEg");
	var mask_1_graphics_130 = new cjs.Graphics().p("AgGCEQgUgGgNgOQgFgFgHgKQgPgbAGgdQACgOAIgMQgQgIgLgMQgWgcAFgiQADgWAOgRQAPgSAUgHQAVgHAVAFQAWAEAQAPQAQAPAGAWQAGAWgGAVQgDAKgGAKQAPAHALALQAPARADAXQAEAXgJAVQgIASgPANQgQAMgUAEQgHABgHAAQgMAAgLgEg");
	var mask_1_graphics_131 = new cjs.Graphics().p("AgtCEQgTgGgOgOQgFgFgGgKQgQgbAGgdQADgOAHgMQgQgIgLgMQgVgcAEgiQADgWAPgRQAOgSAVgHQAUgHAWAFQAXAEAPAPQAPAPAHAWIAAACIAGgDQAVgHAWAFQAXAEAPAPQAQAPAHAWQAGAWgGAUQgGAVgRAPQgQAQgVAEQgIACgJAAIgDAMQgIASgQANQgQAMgSAEQgIABgHAAQgMAAgMgEg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(129).to({graphics:mask_1_graphics_129,x:165.9361,y:252.9713}).wait(1).to({graphics:mask_1_graphics_130,x:167.5871,y:258.6381}).wait(1).to({graphics:mask_1_graphics_131,x:171.4361,y:258.6381}).wait(9));

	// lady11
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D60B2F").s().p("Ag4A5QgXgYAAghQAAggAXgYQAYgXAgAAQAhAAAYAXQAXAYAAAgQAAAhgXAYQgYAXghAAQggAAgYgXg");
	this.shape.setTransform(170.825,260.625);
	this.shape._off = true;

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(129).to({_off:false},0).wait(11));

	// 筆１０
	this.instance_4 = new lib.筆();
	this.instance_4.setTransform(200.55,449.5,1,1,0,0,0,74.9,182.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(126).to({_off:false},0).wait(1).to({x:215.6,y:455.45},0).wait(1).to({x:234.85,y:456.15},0).to({_off:true},1).wait(11));

	// 遮色片１０ (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_126 = new cjs.Graphics().p("AgLB8QgngEgdgYQgVgSgMgaQgMgaAAgaQAAgRAGgSQAFgRAKgPQAUgfAlgPQAlgPAkAIQAlAIAbAdQAbAdAFAmQAGAkgSAjQgSAkggASQgbAPggAAIgNAAg");
	var mask_2_graphics_127 = new cjs.Graphics().p("ABTCvQgjAAgcgRQgcgRgRgeQgLgWgDgXQgaAKgegDQgngEgdgYQgVgSgMgaQgMgZAAgbQAAgRAGgSQAFgRAKgPQAUgfAlgPQAlgPAlAIQAlAIAaAdQAbAdAFAmIABACQAXgJAbABQAiACAcASQAZARAPAbQAQAbAAAeQABAhgRAeQgRAegdARQgbARgiAAIgCAAg");
	var mask_2_graphics_128 = new cjs.Graphics().p("AAICvQgiAAgcgRQgdgRgRgeQgLgWgDgXQgaAKgegDQgngEgdgYQgVgSgMgaQgMgZAAgbQAAgRAGgSQAFgRAKgPQAUgfAlgPQAlgPAlAIQAlAIAbAdQAbAdAFAmIABACQAXgJAaABQAiACAcASQALgJANgHQAdgQAjACQAiACAcASQAZARAPAbQAQAbAAAeQABAhgRAeQgRAegdARQgcARgjAAQgjAAgcgRIgFgDQgIAHgLAGQgbARgiAAIgCAAg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(126).to({graphics:mask_2_graphics_126,x:229.4134,y:265.9464}).wait(1).to({graphics:mask_2_graphics_127,x:237.8018,y:271.0116}).wait(1).to({graphics:mask_2_graphics_128,x:245.3018,y:271.0116}).wait(12));

	// lady10
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D60B2F").s().p("AhkAcQgWgVgpghIgrgkQgEgCACgEIBDAAQAZAAA5ARQBFAUANADQAYAEAsgFIA8gGIA7ANQgBAEgHAIIgTARIgkAmQgdAYggAAQiRAAgpgpg");
	this.shape_1.setTransform(245.35,274.2);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(126).to({_off:false},0).wait(14));

	// 筆９
	this.instance_5 = new lib.筆();
	this.instance_5.setTransform(198.25,449.6,1,1,0,0,0,74.9,182.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(122).to({_off:false},0).wait(1).to({x:209.8,y:446.45},0).wait(1).to({x:221.7,y:445.75},0).wait(1).to({x:233.25,y:447.5},0).to({_off:true},1).wait(14));

	// 遮色片９ (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_122 = new cjs.Graphics().p("AgaBGQgRgHgMgNQgLgNgFgRQgFgSAEgQQABgIAEgJQAIgQAOgLQAPgLARgDQARgEARAGQASAFANANQANAMAFASQAGARgCARQgDAOgHALQgIAQgQAKQgPAJgRACIgIABQgNAAgNgFg");
	var mask_3_graphics_123 = new cjs.Graphics().p("AhWBPQgRgGgMgNQgLgNgFgSQgFgSAEgQQABgHAEgJQAIgQAOgMQAPgLARgDQASgDARAFQASAGANAMIABABQAFgKAHgJQANgNAQgGQARgFASACQATADAOAKQAOAKAJAQQAIAQABASQAAAKgCAHQgFATgOAPQgYAagkgDQgQgBgPgIQgJgFgHgHIgDAEQgHAPgQAKQgPAKgRACIgIAAQgOAAgNgFg");
	var mask_3_graphics_124 = new cjs.Graphics().p("AiPBTQgRgHgMgNQgLgNgFgRQgFgSAEgQQABgIAEgJQAIgQAOgLQAPgLARgDQASgEARAGQASAFANANIABABQAFgKAIgJQANgNAQgGQARgGARADQATACAOAKQAGAFAFAFIACgCQANgRATgHQATgGAVAEQAVAEAPANQAPAOAGAUQAGAVgFASQgFAUgPAPQgPAPgUAEQgXAGgZgKQgOgGgKgLIgFAGQgYAbgjgDQgQgBgPgJQgJgFgHgHIgDAEQgIAQgQAKQgPAJgRACIgIABQgOAAgNgFg");
	var mask_3_graphics_125 = new cjs.Graphics().p("ACVBiQgTgEgOgNQgPgNgGgRIgCgGIgHACQgXAGgZgKQgOgGgKgLIgFAGQgXAbgkgDQgQgBgPgJQgJgFgHgHIgDAEQgIAQgQAKQgPAJgRACQgSACgRgGQgRgHgMgNQgLgNgFgRQgFgSAEgQQABgIAEgJQAIgQAOgLQAPgLARgDQASgEARAGQASAFANANIABABQAFgKAIgJQANgNAQgGQARgGASADQATACAOAKQAFAFAFAFIACgCQANgRATgHQATgGAVAEQAVAEAPANQAPAOAGAUIABACQAPgGAPACQATABAQALQARALAIAQQAJAQAAAUQgBATgJAQQgNAWgWAJQgOAHgPAAQgJAAgIgCg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(122).to({graphics:mask_3_graphics_122,x:226.1602,y:265.6805}).wait(1).to({graphics:mask_3_graphics_123,x:232.1734,y:264.7095}).wait(1).to({graphics:mask_3_graphics_124,x:237.8621,y:264.3723}).wait(1).to({graphics:mask_3_graphics_125,x:242.6734,y:265.5714}).wait(15));

	// lady09
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D60B2F").s().p("AC3A9IgcABQgwgwgMAAQglAEgWAAQgKAAgQgFQgPgFgLAAQgOAAg3AKIg0AKIhJgFQgCgJAJgDQAxgUAmgUQBKgnAjAAQAGAAATAIQATAHAKAAQADAAAXgIQASgGARAHQAZALAiAmQAlApAIAnQgDgHgagBg");
	this.shape_2.setTransform(243.3451,265.625);
	this.shape_2._off = true;

	var maskedShapeInstanceList = [this.shape_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(122).to({_off:false},0).wait(18));

	// 筆８
	this.instance_6 = new lib.筆();
	this.instance_6.setTransform(287.45,538.45,1,1,0,0,0,74.9,182.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(113).to({_off:false},0).wait(1).to({x:271.95,y:537.95},0).wait(1).to({x:251.95,y:545.95},0).wait(1).to({x:232.95,y:554.95},0).wait(1).to({x:215.45,y:563.45},0).wait(1).to({x:194.95,y:571.95},0).wait(1).to({x:173.95,y:579.95},0).wait(1).to({x:153.95,y:583.45},0).wait(1).to({x:135.95},0).to({_off:true},1).wait(18));

	// 遮色片８ (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_113 = new cjs.Graphics().p("Ag1BwQgegOgTgbQgSgbgDgiQgDghAOgdQAQggAfgUQAggUAiABQAZAAAYAKQAYALARATQASATAIAYQAJAZgCAYQgCAYgKAVQgOAdgcAUQgcATghACIgJAAQgbAAgagMg");
	var mask_4_graphics_114 = new cjs.Graphics().p("AieCEQgfgPgSgaQgTgbgCgiQgDghAOgdQAQggAfgUQAggTAjAAQAaAAAXALQAYAKARATIACACIAFgLQAOggAggUQAfgUAjABQAaAAAYAKQAXALARATQASATAIAYQAJAZgCAZQgCAXgKAVQgOAdgcAUQgcATghACQggADgfgPQgXgLgQgTIgFAMQgNAegdATQgbATghACIgJAAQgcAAgagMg");
	var mask_4_graphics_115 = new cjs.Graphics().p("Aj8CxQgfgOgTgbQgSgbgDgiQgDgiAOgdQAQgfAfgUQAggTAjAAQAZAAAYALIAQAIQADgUAIgSQAQggAfgUQAggTAjAAQAZAAAXALQAYAKARATIACACIAFgLQAPggAggUQAfgUAjABQAaAAAYAKQAXALARATQASATAIAYQAJAZgCAZQgCAYgKAVQgOAcgcAUQgcATghACQggADgfgPQgXgLgQgTIgFAMQgOAegdATQgbATggACQggADgfgPIgNgHQgCAVgJASQgPAegbATQgdATgfACIgKAAQgbAAgagMg");
	var mask_4_graphics_116 = new cjs.Graphics().p("AlSDoQgegPgTgbQgSgagDgiQgCgiAOgeQAPgfAfgUQAggTAjABQAXAAAWAHQABgYAKgWQAQggAfgUQAfgTAkAAQAZAAAYALIAQAIQACgUAJgSQAQggAegUQAfgTAkAAQAZAAAYALQAYAKARATIACACIAEgLQAQggAfgUQAggUAjABQAZAAAYAKQAYALARATQASATAIAYQAJAZgCAZQgCAYgKAVQgOAdgcAUQgcASghACQggADgfgOQgXgLgRgTIgEAMQgOAdgdATQgcATggACQggADgfgPIgNgHQgCAVgIASQgPAegbATQgdATggACQgcACgbgKIAAADQgCAYgKAVQgOAdgcAUQgcATghACIgJAAQgcAAgagMg");
	var mask_4_graphics_117 = new cjs.Graphics().p("Am2EVQgegPgTgbQgTgbgCgiQgDghAOgeQAQggAfgTQAfgUAkABQAZAAAYAKQAOAHAMAJQACgYAKgWQAPgfAfgTQAggUAjAAQAXAAAWAJQABgZAKgXQAQggAfgTQAggUAjAAQAYABAYAKIAQAJQADgUAIgTQAQggAfgTQAggUAjABQAaAAAXAKQAYALARATIACABIAFgLQAPggAggTQAfgUAjAAQAaAAAYALQAXAKARATQASATAIAZQAJAYgCAaQgCAYgKAVQgOAdgcATQgcATghADQggACgfgOQgXgLgQgTIgFAMQgOAdgdATQgbAUghACQggABgfgNIgNgHQgCATgJATQgPAdgbATQgdAUgeACQgdACgbgLIAAAEQgCAYgKAVQgOAdgcATQgcATggADQghACgegOQgNgGgKgIIAAABQgCAYgKAVQgOAdgdAUQgcATggACIgJABQgcAAgagNg");
	var mask_4_graphics_118 = new cjs.Graphics().p("AokE4QgegPgTgbQgSgagDgiQgDgiAOgdQAQggAfgUQAggUAjABQAZAAAYAKQAYALARATIAFAFQABgXAKgVQAQggAfgUQAfgTAkAAQAZAAAYALQAOAGAMAJQABgYALgVQAPgfAfgUQAggUAjABQAXAAAWAIQABgZAKgWQAQggAegUQAfgTAkAAQAZAAAYALIAQAIQADgUAIgSQAQggAfgUQAfgTAkAAQAZAAAYALQAYAKARATIACACIAEgLQAQggAfgUQAggUAjABQAZAAAYAKQAYALARATQASATAIAYQAJAZgCAZQgCAYgKAVQgOAdgcAUQgcATghACQggADgfgPQgXgLgQgTIgFAMQgOAegdATQgcATggACQggADgfgPIgNgHQgCAVgJASQgPAdgbATQgdATggACQgcACgbgKIAAADQgCAYgKAVQgOAdgbAUQgcATghACQggADgfgPQgMgGgKgIIAAACQgDAXgJAVQgOAegdATQgcATggADQghACgegPQgZgMgRgUQgCAXgKAVQgOAdgcAUQgcATghACIgJAAQgcAAgagMg");
	var mask_4_graphics_119 = new cjs.Graphics().p("AqKFOQgfgOgSgbQgTgbgCgiQgDgiAOgdQAPggAggUQAfgTAjAAQAaAAAYALQAVAJAQARIAFgLQAPggAggTQAfgUAjAAQAaAAAYALQAXAKASATIAEAFQACgXAKgVQAPggAggTQAfgTAjABQAZAAAYAKQAPAGALAJQACgYAKgVQAPggAggTQAfgUAiAAQAXAAAWAJQABgZALgXQAPggAggTQAfgUAjAAQAaABAYAKIAQAJQACgUAJgTQAPggAggTQAfgUAjABQAaAAAYAKQAXALASATIABABIAFgLQAPggAggTQAfgUAjAAQAaAAAYALQAXAKASATQARATAJAZQAIAYgCAaQgBAYgLAVQgOAdgcATQgcATggADQghACgegOQgYgMgQgSIgFAMQgOAdgcATQgcAUghACQggACgfgOIgMgHQgDAUgJATQgOAdgcASQgcAUggACQgdACgagLIgBAEQgBAYgLAVQgOAdgcATQgcATggADQghACgdgOQgMgGgLgIIAAABQgCAYgKAVQgOAdgcAUQgcATghACQggADgfgPQgZgMgRgVQgBAYgLAVQgOAdgcATQgcATggADQghACgegPQgUgJgPgPIgFAMQgOAdgcATQgcATggADIgJAAQgcAAgagNg");
	var mask_4_graphics_120 = new cjs.Graphics().p("ArkFgQgfgPgTgbQgSgagDgiQgCgiAOgeQAQgfAfgUQAfgUAjABQAaAAAYALQANAFAKAIQAPgYAagQQAfgUAjABQAaAAAYAKQAVAKARAQIAEgKQAPggAggUQAfgUAkABQAZAAAYAKQAXALASATIAEAFQACgXAKgVQAPggAggTQAfgTAjAAQAZAAAZALQAOAGAMAJQABgYAKgWQAOgfAggUQAggUAiABQAXAAAWAIQABgZALgWQAPggAggUQAfgTAjAAQAaAAAYALIAQAIQACgUAJgSQAPggAggUQAfgTAjAAQAaAAAYALQAYAKARATIABACIAFgLQAPggAggUQAfgUAkABQAZAAAYAKQAXALASATQARATAJAYQAIAZgCAZQgBAYgLAVQgOAdgcAUQgbATghACQghADgegPQgXgLgRgTIgEAMQgOAegdATQgcATghACQgfADgggPIgMgHQgCAVgJASQgPAegcATQgcASggACQgcACgbgKIgBADQgBAYgKAVQgOAdgdAUQgcATggACQghADgegPQgMgGgKgIIAAACQgDAXgKAVQgOAegbATQgcATghADQggACgfgPQgZgMgRgUQgBAXgLAVQgOAdgcAUQgbATghACQghADgegPQgUgKgOgOIgGALQgOAdgbAUQgdATggACQggADgfgPQgLgGgJgGQgOAWgWAQQgdATggACIgKAAQgbAAgagMg");
	var mask_4_graphics_121 = new cjs.Graphics().p("AqcFgQgVgKgPgQQgWALgXACQghACgfgOQgegPgTgbQgSgbgDgiQgCgiAOgdQAPggAfgUQAggTAjAAQAZAAAYALQAXAKARASQAbgOAdABQAZAAAYALQANAFALAIQAOgYAagQQAfgUAkABQAZAAAYAKQAWAKAQAQIAEgKQAQggAfgUQAggUAjABQAZAAAYAKQAYALARATIAFAFQABgXAKgVQAQggAfgTQAfgTAkAAQAYAAAYALQAOAGAMAJQABgYALgWQAPgfAfgUQAggUAjABQAXAAAWAIQABgZAKgWQAQggAfgUQAfgTAkAAQAZAAAYALIAQAIQACgUAJgSQAQggAfgUQAfgTAkAAQAZAAAYALQAYAKARATIACACIAEgLQAQggAfgUQAggUAjABQAZAAAYAKQAYALARATQASATAIAYQAJAZgCAZQgCAYgKAVQgOAdgcAUQgcATghACQggADgfgPQgXgLgRgTIgEAMQgOAegdATQgcATggACQggADgfgPIgNgHQgCAVgJASQgPAegbATQgdASggACQgcACgbgKIAAADQgCAYgKAVQgOAdgcAUQgcATghACQggADgfgPQgMgGgKgIIAAACQgDAXgJAVQgOAegdATQgcATgfADQghACgegPQgZgMgRgUQgCAXgKAVQgOAdgcAUQgcATghACQggADgfgPQgUgKgOgOIgFALQgOAdgcAUQgcATghACQggADgfgPQgLgGgJgGQgOAWgWAQQgdATggACIgJAAQgcAAgagMg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(113).to({graphics:mask_4_graphics_113,x:307.8676,y:354.5428}).wait(1).to({graphics:mask_4_graphics_114,x:297.3501,y:356.5428}).wait(1).to({graphics:mask_4_graphics_115,x:287.8501,y:361.0428}).wait(1).to({graphics:mask_4_graphics_116,x:279.3751,y:366.5428}).wait(1).to({graphics:mask_4_graphics_117,x:269.3501,y:371.0672}).wait(1).to({graphics:mask_4_graphics_118,x:258.3676,y:374.5422}).wait(1).to({graphics:mask_4_graphics_119,x:248.1251,y:376.7922}).wait(1).to({graphics:mask_4_graphics_120,x:239.1001,y:378.5428}).wait(1).to({graphics:mask_4_graphics_121,x:231.8751,y:378.5428}).wait(19));

	// lady08
	this.instance_7 = new lib.CachedBmp_2();
	this.instance_7.setTransform(153.35,351.75,0.5,0.5);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(113).to({_off:false},0).wait(27));

	// 筆７
	this.instance_8 = new lib.筆();
	this.instance_8.setTransform(257.95,464.45,1,1,0,0,0,74.9,182.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(102).to({_off:false},0).wait(1).to({x:251.95,y:481.45},0).wait(1).to({y:499.45},0).wait(1).to({x:258.45,y:518.95},0).wait(1).to({x:276.45,y:527.95},0).wait(1).to({x:296.95,y:526.95},0).wait(1).to({x:318.45,y:521.95},0).wait(1).to({x:341.45,y:521.45},0).wait(1).to({x:362.45,y:527.95},0).wait(1).to({x:379.95,y:544.45},0).wait(1).to({x:390.95,y:562.95},0).to({_off:true},1).wait(27));

	// 遮色片７ (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_102 = new cjs.Graphics().p("Ag1BwQgfgPgSgbQgTgbgCgiQgCggAOgeQAPggAggTQAfgUAiABQAZAAAYALQAYAKARATQASATAIAYQAJAZgCAYQgCAYgKAVQgOAegcATQgcATghACIgJAAQgbAAgagMg");
	var mask_5_graphics_103 = new cjs.Graphics().p("AhSDEQgfgOgTgbQgSgbgDgiQgCgiAOgdQAPgfAggUIANgHQgKgWgCgZQgCgiAOgdQAPggAggUQAfgTAiAAQAZABAYAKQAYALARASQASATAIAZQAJAYgCAaQgCAXgKAWQgOAdgcASQgJAGgKAFIAHAPQAIAYgCAaQgBAXgKAVQgOAegdATQgcATgfADIgKAAQgbAAgagNg");
	var mask_5_graphics_104 = new cjs.Graphics().p("AhOEwQgegPgTgaQgSgbgDgiQgCgiAOgeQAPgfAggUIABgBQgbgOgRgZQgSgbgDghQgCghAOgeQAPggAggTIANgIQgKgVgCgaQgCghAOgeQAPggAggTQAfgUAiABQAZAAAYALQAYAKARATQASATAIAYQAJAZgCAZQgCAYgKAVQgOAegcATQgJAGgKAEIAHAPQAIAZgCAZQgBAWgKAWQgOAdgdAUIgFADQASAKAOAPQARASAJAZQAIAZgCAZQgBAYgLAVQgOAegcATQgcATgfACIgKAAQgbAAgbgMg");
	var mask_5_graphics_105 = new cjs.Graphics().p("AALGFQgegOgSgbQgTgbgCgiQgCgeAKgaQggADgfgPQgfgPgSgaQgTgbgCgiQgCgiAOgeQAPgfAfgUIACgBQgbgNgRgZQgTgbgCgiQgCghAOgeQAPggAfgTIAOgIQgLgVgCgaQgCghAOgeQAQggAfgTQAfgUAjABQAZAAAYALQAXAKASATQARATAJAYQAIAZgCAZQgBAYgLAVQgOAegcATQgIAGgKAEIAGAPQAJAZgCAZQgCAXgKAWQgOAdgcAUIgFADQASAJANAPQARASAJAZQAJAZgCAZQgBAUgHARIAKAAQAZAAAYALQAYALARASQASATAIAZQAJAYgCAaQgCAVgKAXQgPAegbATQgdATggACIgJAAQgcAAgagMg");
	var mask_5_graphics_106 = new cjs.Graphics().p("ABxGPQgegPgTgbIgGgKQgLAMgPALQgcATgfACQghADgfgPQgegOgTgbQgSgbgDgiQgCgeALgaQghADgfgPQgegPgTgaQgSgbgDgiQgCgiAOgeQAPgfAggTIACgBQgcgOgRgZQgSgbgDgiQgCghAOgeQAPggAggTIAOgIQgLgVgCgaQgCghAOgeQAPggAggTQAfgUAjABQAZAAAYALQAYAKARATQARATAIAYQAJAZgCAZQgCAYgKAVQgNAegcATQgJAGgJAEIAGAPQAIAZgCAZQgBAXgKAWQgOAdgdAUIgFADQASAKAOAOQARASAJAZQAIAZgCAZQgBAUgHARIAKAAQAaAAAXALQAYALARASQAKALAIAOQAMgPASgLQAfgUAjABQAaAAAYAKQAXALASATQARATAJAYQAIAZgCAZQgBAXgKAWQgOAdgdAUQgcATggACIgKAAQgbAAgbgMg");
	var mask_5_graphics_107 = new cjs.Graphics().p("AADGPQgdgPgTgbIgGgKQgLAMgPALQgcATggACQghADgfgPQgegOgTgbQgSgbgDgiQgCgeAKgaQggADgfgPQgegPgTgaQgSgbgDgiQgCgiAOgeQAPgfAggTIABgBQgbgOgRgZQgSgbgDgiQgCghAOgeQAPggAggTIANgIQgKgVgCgaQgCghAOgeQAPggAggTQAfgUAjABQAZAAAYALQAYAKARATQASATAIAYQAJAZgCAZQgCAYgKAVQgOAegcATQgJAGgKAEIAHAPQAIAZgCAZQgBAXgKAWQgOAdgdAUIgFADQASAKAOAOQARASAJAZQAIAZgCAZQgBAUgHARIAKAAQAaAAAYALQAYALARASQAKALAHAOQANgPASgLQAegUAjABQAaAAAYAKQAXALASATQAHAIAGAJIADgHQAQggAfgUQAfgTAkAAQAZAAAYALQAYAKARATQARATAJAZQAJAZgCAZQgCAWgKAXQgOAdgdATQgcATggADQghACgegPQgfgOgSgbIgCgDIgDAHQgOAdgdAUQgcATggACIgKAAQgbAAgbgMg");
	var mask_5_graphics_108 = new cjs.Graphics().p("AhnGPQgfgPgSgbIgHgKQgKAMgPALQgdATggACQggADgfgPQgfgOgSgbQgTgbgCgiQgCgeAKgaQggADgfgPQgfgPgSgaQgTgbgCgiQgCgiAOgeQAPgfAfgTIACgBQgbgOgRgZQgTgbgCgiQgCghAOgeQAPggAfgTIAOgIQgLgVgCgaQgCghAOgeQAQggAfgTQAfgUAjABQAaAAAYALQAXAKASATQARATAJAYQAIAZgCAZQgBAYgLAVQgOAegcATQgIAGgKAEIAGAPQAJAZgCAZQgCAXgKAWQgOAdgcAUIgFADQASAKANAOQARASAJAZQAJAZgCAZQgBAUgHARIAKAAQAZAAAYALQAYALARASQALALAHAOQANgPARgLQAggUAjABQAZAAAXAKQAYALARATQAIAIAGAJIADgHQAPggAggUQAfgTAjAAQAaAAAYALQAXAKASATIABABQADgPAGgOQAQggAfgUQAfgTAkAAQAZAAAYALQAYAKARATQASATAIAZQAJAYgCAaQgDAXgJAVQgOAegdATQgcATggACQggADgfgPQgXgLgQgRQgDAPgHAPQgOAdgcATQgcATghADQggACgfgPQgegOgTgbIgCgDIgDAHQgOAdgcAUQgbATghACIgJAAQgcAAgagMg");
	var mask_5_graphics_109 = new cjs.Graphics().p("AjcGPQgfgPgSgbIgHgKQgLAMgOALQgdATggACQggADgfgPQgfgOgSgbQgTgbgCgiQgDgeALgaQghADgegPQgfgPgSgaQgTgbgCgiQgCgiAOgeQAPgfAfgTIACgBQgcgOgQgZQgTgbgCgiQgCghAOgeQAPggAfgTIAOgIQgLgVgCgaQgCghAOgeQAQggAfgTQAfgUAjABQAaAAAYALQAXAKASATQARATAJAYQAIAZgCAZQgBAYgLAVQgOAegcATQgJAGgJAEIAGAPQAJAZgCAZQgCAXgKAWQgOAdgcAUIgGADQASAKAOAOQARASAJAZQAJAZgCAZQgCAUgHARIALAAQAZAAAYALQAYALARASQAKALAIAOQAMgPASgLQAggUAjABQAZAAAYAKQAYALARATQAHAIAGAJIAEgHQAPggAggUQAegTAjAAQAaAAAYALQAXAKASATIAAABQADgPAHgOQAQggAfgUQAfgTAkAAQAZAAAYALQAYAKARATQASATAIAZIADAKIACgDQAPggAggTQAfgUAjAAQAaABAYAKQAYALARASQARATAJAZQAIAYgBAaQgDAYgJAVQgPAdgcATQgcAUggACQggACgfgOQgfgPgSgbQgNgTgFgWIgCAEQgOAegdATQgcATggACQggADgfgPQgXgLgQgRQgDAPgHAPQgOAdgcATQgcATghADQggACgegPQgegOgTgbIgCgDIgDAHQgOAdgcAUQgcATghACIgKAAQgbAAgagMg");
	var mask_5_graphics_110 = new cjs.Graphics().p("AIgG6QgfgPgTgbQgSgbgDgiQgCgdAKgZIgEADQgcATghACQggADgfgPQgegPgTgbQgNgTgFgWIgCAFQgOAdgcATQgcAUghACQggACgfgOQgWgMgQgRQgDAPgHAPQgOAegdATQgbATggACQghADgegPQgfgPgSgbIgCgDIgDAHQgOAegdATQgcATggADQghACgfgOQgegPgTgbIgGgLQgLANgPAKQgcAUggACQghACgfgOQgegPgTgbQgSgbgDgiQgCgdAKgaQggACgfgOQgegPgTgbQgSgbgDgiQgCgiAOgdQAPgfAggTIABgBQgbgPgRgYQgSgbgDgiQgCgiAOgdQAPggAggUIANgHQgKgWgCgZQgCgiAOgdQAPggAggUQAfgTAjAAQAZABAYAKQAYALARASQASATAIAZQAJAYgCAaQgCAXgKAWQgOAdgcATQgJAGgKAFIAHAPQAIAYgCAaQgBAXgKAVQgOAegdATIgFAEQASAJAOAPQARATAJAYQAIAZgCAZQgBATgHASIAKgBQAaABAYAKQAYALARATQAKALAHANQANgPASgLQAfgTAjAAQAaAAAYALQAXAKASATQAHAIAGAJIADgHQAQggAfgTQAfgUAkABQAZAAAXAKQAYALARATIABABQADgQAHgOQAPggAggTQAfgUAjABQAaAAAYAKQAXALASATQARATAJAYIADALIACgEQAPgfAfgUQAggUAjABQAZAAAYALQAYAKARATQARASAJAZQAJAZgCAZQgCATgGARIAJgGQAfgTAjAAQAaAAAYALQAXAKASATQARATAJAZQAJAYgCAaQgDAXgJAVQgOAegcATQgdAUggACIgKAAQgbAAgagMg");
	var mask_5_graphics_111 = new cjs.Graphics().p("AJlIKQgegPgTgbQgSgbgDgiQgBgZAHgWIgMACQghACgegOQgfgPgTgbQgSgbgDgiQgCgdAKgZIgEADQgcATghACQggADgfgPQgegPgTgbQgNgTgFgWIgCAFQgOAdgcATQgcAUghACQggACgfgOQgWgMgQgRQgDAPgHAPQgNAegdATQgcATggACQghADgegPQgfgPgSgbIgCgDIgDAHQgOAegdATQgcATggADQghACgfgOQgegPgTgbIgGgLQgLANgPAKQgcAUggACQghACgfgOQgegPgTgbQgSgbgDgiQgCgdALgaQghACgfgOQgegPgTgbQgSgbgDghQgCgiAOgdQAPggAggTIACgBQgcgPgRgYQgSgbgDgiQgCgiAOgdQAPggAggUIAOgHQgLgWgCgZQgCgiAOgdQAPggAggUQAfgTAjAAQAZABAYAKQAYALARASQASATAIAZQAJAYgCAaQgCAXgKAWQgOAdgcATQgJAGgJAFIAGAPQAIAYgCAaQgBAXgKAVQgOAegdATIgFAEQASAJAOAPQARATAJAZQAIAZgCAZQgBASgHASIAKgBQAaABAYAKQAYALARATQAKALAIANQAMgPASgLQAfgTAjAAQAaAAAYALQAXAKASATQAHAIAGAJIADgHQAQggAfgTQAfgUAkABQAZAAAYAKQAYALARATIABABQADgQAHgOQAOgfAggTQAfgUAjABQAaAAAYAKQAXALASASQARATAJAYIADALIACgEQAPgfAfgUQAggTAjABQAZAAAYALQAYAJARATQARASAJAZQAJAZgCAZQgCATgGARIAJgGQAfgTAjAAQAaAAAYALQAXAKASATQARATAJAZQAJAYgCAaQgCAOgEAOQALgCALAAQAaAAAYALQAXAKASATQARATAJAZQAIAYgCAaQgBAXgKAVQgOAegdATQgcATggADIgKAAQgbAAgbgMg");
	var mask_5_graphics_112 = new cjs.Graphics().p("AKNJ3QgegOgTgbQgSgbgDgiQgCgiAOgdQAMgZAWgRQgdAAgbgNQgegPgTgbQgSgbgDgiQgBgYAHgWIgMABQghADgegPQgfgOgTgbQgSgbgDgiQgCgdAKgaIgEADQgcAUghACQggACgfgOQgegPgTgbQgNgTgFgWIgCAEQgOAegcATQgcATghACQggADgfgPQgVgLgQgRQgDAPgHAPQgOAdgdATQgcATggADQghACgegPQgfgOgSgbIgCgDIgDAHQgOAdgdAUQgcATggACQghADgfgPQgegPgTgbIgGgKQgLANgPAKQgcATggACQghADgfgPQgegOgTgbQgSgbgDgiQgCgdALgaQghADgfgPQgegPgTgaQgSgbgDgiQgCgiAOgeQAPgfAggUIACgBQgcgOgRgZQgSgbgDgiQgCghAOgeQAPggAggTIAOgIQgLgVgCgaQgCghAOgeQAPggAggTQAfgUAjABQAZAAAYALQAYAKARATQASATAIAYQAJAZgCAZQgCAYgKAVQgOAegcATQgJAGgJAEIAGAPQAIAZgCAZQgBAXgKAWQgOAdgdAUIgFADQASAKAOAPQARASAJAZQAIAZgCAZQgBAUgHARIAKAAQAaAAAYALQAYALARASQAKAMAIANQAMgPASgLQAfgUAjABQAaAAAYAKQAXALASATQAHAIAGAJIADgHQAQggAfgUQAfgTAkAAQAZAAAYALQAYAKARATIABABQADgPAHgOQAPggAggUQAegTAjAAQAaAAAYALQAXAKASATQARATAJAZIADALIACgEQAPggAfgTQAggUAjAAQAZABAYAKQAYALARASQARATAJAZQAJAYgCAZQgCATgGARIAJgGQAfgUAjABQAaAAAYAKQAXALASATQARATAJAYQAJAZgCAZQgCAPgEAOQALgCALAAQAaAAAYAKQAXALASATQARATAJAYQAIAZgCAZQgBAXgKAWQgMAZgWARIACAAQAaAAAYALQAXAKASATQARATAJAZQAIAYgCAaQgBAVgLAXQgOAegcATQgcATggADIgJAAQgcAAgbgNg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(102).to({graphics:mask_5_graphics_102,x:280.8065,y:288.1428}).wait(1).to({graphics:mask_5_graphics_103,x:277.8315,y:296.5922}).wait(1).to({graphics:mask_5_graphics_104,x:277.8315,y:307.3428}).wait(1).to({graphics:mask_5_graphics_105,x:281.3565,y:315.8428}).wait(1).to({graphics:mask_5_graphics_106,x:291.6065,y:316.8428}).wait(1).to({graphics:mask_5_graphics_107,x:302.6315,y:316.8428}).wait(1).to({graphics:mask_5_graphics_108,x:313.3565,y:316.8428}).wait(1).to({graphics:mask_5_graphics_109,x:325.0988,y:316.8428}).wait(1).to({graphics:mask_5_graphics_110,x:334.6307,y:321.0928}).wait(1).to({graphics:mask_5_graphics_111,x:341.6065,y:329.0928}).wait(1).to({graphics:mask_5_graphics_112,x:345.6065,y:340.1172}).wait(28));

	// lady07
	this.instance_9 = new lib.CachedBmp_3();
	this.instance_9.setTransform(270.45,282.15,0.5,0.5);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(102).to({_off:false},0).wait(38));

	// 筆６
	this.instance_10 = new lib.筆();
	this.instance_10.setTransform(270.05,435.45,1,1,0,0,0,74.9,182.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(93).to({_off:false},0).wait(1).to({x:264.05,y:451.45},0).wait(1).to({x:255.55,y:469.45},0).wait(1).to({x:242.05,y:480.95},0).wait(1).to({x:226.05,y:490.45},0).wait(1).to({x:205.05},0).wait(1).to({x:187.05,y:480.45},0).wait(1).to({x:173.55,y:467.45},0).wait(1).to({x:163.05,y:447.45},0).to({_off:true},1).wait(38));

	// 遮色片６ (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_93 = new cjs.Graphics().p("AgzBxQgigQgUgeQgNgUgDgWQgCgLAAgNIABgWQAGggAUgZQAQgUAYgNQAggQAlAEQAmAFAcAWQAbAXAMAkQALAkgJAiQgKAjgcAZQgdAZgjAFIgSACQgZAAgagMg");
	var mask_6_graphics_94 = new cjs.Graphics().p("AhWDQQgigQgUgeQgNgUgDgWQgCgLAAgNIABgXQAGggAUgZQAQgTAYgNQALgFAMgEIgCgCQgNgUgDgWQgCgLAAgNIABgXQAGggAUgZQAQgUAYgNQAfgQAmAEQAmAFAcAWQAbAXAMAkQALAkgJAjQgKAjgcAZQgXATgaAHQAJAPAGARQALAkgJAjQgKAjgcAZQgdAZgiAFIgSACQgaAAgagMg");
	var mask_6_graphics_95 = new cjs.Graphics().p("AiKEbQgjgQgTgeQgNgUgEgWQgCgLAAgNIACgXQAFggAVgZQAQgUAYgNQATgJAVgDIgBgBQgCgLAAgNIACgWQAFggAVgZQAQgUAYgNQALgFAMgEIgCgCQgNgUgEgWQgCgLAAgNIACgXQAFggAVgZQAPgUAYgNQAggQAmAEQAlAFAcAWQAcAXALAkQAMAkgKAjQgKAjgcAZQgWAUgbAHQAKAPAFARQAMAjgKAjQgKAjgcAZQgcAZgkAFIgCAAQAHAfgIAdQgKAjgbAZQgcAZgkAFIgSACQgaAAgZgMg");
	var mask_6_graphics_96 = new cjs.Graphics().p("AjTFZQgigPgUgfQgNgUgDgWQgCgKAAgOIABgWQAGghAUgZQAQgTAYgNQAggQAmAEIAIABIAAgCIABgWQAGghAUgZQAQgTAYgMQATgKAVgCIAAgCQgCgKAAgOIABgWQAGghAUgZQAPgTAYgNQALgGAMgDIgCgDQgNgUgDgWQgCgKAAgOIABgWQAGghAUgZQAQgTAYgNQAggQAmAEQAmAEAcAXQAbAXAMAkQALAkgJAjQgKAigcAZQgXAUgaAIQAJAOAGASQALAkgJAjQgKAhgcAZQgdAagjAFIgCAAQAHAegIAeQgKAigcAZQgdAagjAFQgTADgTgEQABASgFASQgKAigcAZQgdAagjAFIgSABQgaAAgagMg");
	var mask_6_graphics_97 = new cjs.Graphics().p("Ak5F/QgjgQgTgeQgNgUgEgWQgCgLAAgNIACgXQAFggAVgZQAQgUAYgNQAggQAmAEQAlAFAcAWIAEADIAAgDQAFggAVgZQAQgUAYgNQAggQAmAEIAHABIAAgBIACgXQAFggAVgYQAPgUAYgNQATgJAVgDIgBgBQgCgLAAgNIACgXQAFggAVgZQAQgUAYgNQALgFAMgEIgCgCQgNgUgEgWQgCgLAAgNIACgXQAFggAVgZQAQgUAYgNQAggQAmAEQAlAFAcAWQAcAXALAkQAMAkgKAjQgKAjgcAZQgWAUgbAHQAKAPAFARQAMAkgKAjQgKAjgcAYQgcAZgkAFIgCAAQAHAfgIAdQgKAjgcAZQgcAZgkAFQgTADgTgDQAAASgFARQgKAjgcAZQgbAZgkAFQgjAGgigQQgRgIgOgLIgDAOQgKAjgcAZQgcAZgkAFIgSACQgaAAgZgMg");
	var mask_6_graphics_98 = new cjs.Graphics().p("AjaF/QgjgQgTgeQgNgUgEgWIAAgGQgXAPgbAEQgjAGgigQQgjgQgTgeQgNgUgEgWQgCgLAAgNIACgXQAFggAVgZQAQgUAYgNQAggQAmAEQAlAFAcAWQAcAXALAkIAFASIALgHQAggQAmAEQAlAFAcAWIAEADIAAgDQAFggAVgZQAQgUAYgNQAfgQAmAEIAHABIAAgBIACgXQAFggAVgYQAQgUAYgNQATgJAVgDIgBgBQgCgLAAgNIACgXQAFggAVgZQAQgUAYgNQALgFAMgEIgCgCQgNgUgEgWQgCgLAAgNIACgXQAFggAVgZQAQgUAYgNQAggQAmAEQAlAFAcAWQAcAXALAkQAMAkgKAjQgKAjgcAZQgWAUgbAHQAKAPAFARQAMAkgKAjQgKAjgcAYQgcAZgkAFIgCAAQAHAfgIAdQgKAjgcAZQgcAZgkAFQgTADgTgDQAAASgFARQgKAjgcAZQgcAZgkAFQgjAGghgQQgRgIgOgLIgDAOQgKAjgcAZQgcAZgkAFIgSACQgaAAgZgMg");
	var mask_6_graphics_99 = new cjs.Graphics().p("AiEF/QgjgQgTgeQgNgUgEgWIAAgGQgXAPgbAEQgjAGgigQQgjgQgTgeQgNgUgEgWIAAgGQgKAEgKADQggAIghgKQghgKgWgYQgVgXgIgfQgJgfAIgeQAIggAYgYQAXgYAggJQAggJAhAJQAiAJAXAWQAXAXAJAiIADALQAcgMAiADQAlAFAcAWQAcAXALAkIAFASIALgHQAggQAmAEQAlAFAcAWIADADIAAgDQAFggAVgZQAQgUAYgNQAggQAmAEIAHABIAAgBIACgXQAFggAVgYQAQgUAYgNQATgJAVgDIgBgBQgCgLAAgNIACgXQAFggAVgZQAQgUAYgNQALgFAMgEIgCgCQgNgUgEgWQgCgLAAgNIACgXQAFggAVgZQAQgUAYgNQAggQAmAEQAlAFAcAWQAcAXALAkQAMAkgKAjQgKAjgcAZQgWAUgbAHQAKAPAFARQAMAkgKAjQgKAjgcAYQgcAZgkAFIgCAAQAHAfgIAdQgKAjgcAZQgcAZgkAFQgTADgTgDQAAASgFARQgKAjgcAZQgcAZgkAFQgjAGgigQQgRgIgOgLIgDAOQgKAjgcAZQgbAZgkAFIgSACQgaAAgZgMg");
	var mask_6_graphics_100 = new cjs.Graphics().p("Ag5F/QgjgQgTgeQgNgUgEgWIAAgGQgXAPgbAEQgjAGgigQQgjgQgTgeQgNgUgEgWIAAgGQgKAEgKADQggAIghgKQghgKgWgYQgVgXgIgfQgJgfAIgeIAFgQIgFACQggAIghgKQghgKgWgYQgVgWgIgfQgJgfAIgeQAIggAYgYQAXgZAggJQAggJAhAJQAiAJAXAXQAXAXAJAiQAJAhgJAgIgEALIAAAAQAggJAhAJQAiAJAXAWQAXAXAJAiIADALQAcgMAiADQAlAFAcAWQAcAXALAkIAFASIALgHQAggQAlAEQAlAFAcAWIAEADIAAgDQAFggAVgZQAQgUAYgNQAggQAmAEIAHABIAAgBIACgXQAFggAVgYQAQgUAYgNQATgJAVgDIgBgBQgCgLAAgNIACgXQAFggAVgZQAQgUAYgNQALgFAMgEIgCgCQgNgUgEgWQgCgLAAgNIACgXQAFggAVgZQAQgUAYgNQAggQAmAEQAlAFAcAWQAcAXALAkQAMAkgKAjQgKAjgcAZQgWAUgbAHQAKAPAFARQAMAkgKAjQgKAjgcAYQgcAZgkAFIgCAAQAHAfgIAdQgKAjgcAZQgcAZgkAFQgTADgTgDQAAASgFARQgKAjgcAZQgcAZgkAFQgjAGgigQQgRgIgOgLIgDAOQgKAjgcAZQgcAZgkAFIgRACQgaAAgZgMg");
	var mask_6_graphics_101 = new cjs.Graphics().p("AgWGLQgjgPgTgfQgNgUgEgWIAAgFQgXAPgbAEQgjAFgigQQgjgPgTgfQgNgUgEgWIAAgFQgKAEgKACQggAIghgKQghgJgWgYQgVgXgIgfQgJgfAIgeIAFgQIgFABQggAIghgKQghgJgWgYQgVgXgIgeQgJgfAIgeQAIggAYgZIAKgKQgNgBgOgEQghgJgWgYQgVgXgIgfQgJgfAIgeQAIggAYgZQAXgZAggJQAggIAhAIQAiAJAXAXQAXAYAJAhQAJAhgJAgQgJAggZAYIgHAGQALABALADQAiAJAXAXQAXAYAJAhQAJAhgJAgIgEALIAAAAQAggIAhAIQAiAJAXAWQAXAYAJAhIADALQAcgMAiAEQAlAEAcAXQAcAXALAkIAFARIALgGQAfgQAmAEQAlAEAcAXIAEACIAAgCQAFghAVgZQAQgTAYgNQAggQAmAEIAHABIAAgCIACgWQAFghAVgZQAQgSAYgNQATgKAVgCIgBgCQgCgKAAgOIACgWQAFghAVgZQAQgTAYgNQALgGAMgDIgCgDQgNgUgEgWQgCgKAAgOIACgWQAFghAVgZQAQgTAYgNQAggQAmAEQAlAEAcAXQAcAXALAkQAMAkgKAjQgKAigcAZQgWAUgbAIQAKAOAFASQAMAkgKAjQgKAhgcAZQgcAagkAFIgCAAQAHAegIAeQgKAigcAZQgcAagkAFQgTADgTgEQAAASgFASQgKAigcAZQgcAagkAFQgjAFgigQQgRgHgOgMIgDAPQgKAigcAZQgcAagkAFIgSABQgaAAgYgMg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(93).to({graphics:mask_6_graphics_93,x:293.1649,y:258.0803}).wait(1).to({graphics:mask_6_graphics_94,x:289.6649,y:267.5803}).wait(1).to({graphics:mask_6_graphics_95,x:284.4149,y:275.0803}).wait(1).to({graphics:mask_6_graphics_96,x:277.1649,y:281.3303}).wait(1).to({graphics:mask_6_graphics_97,x:266.9149,y:285.0803}).wait(1).to({graphics:mask_6_graphics_98,x:257.4149,y:285.0803}).wait(1).to({graphics:mask_6_graphics_99,x:248.8141,y:285.0803}).wait(1).to({graphics:mask_6_graphics_100,x:241.3141,y:285.0803}).wait(1).to({graphics:mask_6_graphics_101,x:237.8141,y:283.8328}).wait(39));

	// lady06
	this.instance_11 = new lib.CachedBmp_4();
	this.instance_11.setTransform(179.55,246.75,0.5,0.5);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(93).to({_off:false},0).wait(47));

	// 筆５
	this.instance_12 = new lib.筆();
	this.instance_12.setTransform(159.65,450.55,1,1,0,0,0,74.9,182.5);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(82).to({_off:false},0).wait(1).to({y:466.55},0).wait(1).to({x:162.05,y:484.55},0).wait(1).to({x:163.25,y:504.55},0).wait(1).to({x:164.45,y:524.95},0).wait(1).to({x:163.25,y:545.35},0).wait(1).to({x:153.65,y:560.55},0).wait(1).to({x:136.05,y:570.55},0).wait(1).to({x:116.85,y:577.35},0).wait(1).to({x:95.65,y:586.95},0).wait(1).to({x:78.85,y:602.95},0).to({_off:true},1).wait(47));

	// 遮色片５ (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_82 = new cjs.Graphics().p("Ag6BtQgggRgSgfQgRgeACgkQABglAUgdQATgbAggOQAfgPAgAEQAhADAcAUQAcAUANAfQAKAWAAAaQABAYgKAXQgMAggeAWQgeAWgjACIgIABQgeAAgcgQg");
	var mask_7_graphics_83 = new cjs.Graphics().p("AgdDSQgggLgWgcQgWgcgFghQgEgiAOggQAIgTAMgOQgagPgOgaQgRgfABglQACgkAUgdQATgbAfgPQAfgOAhADQAgAEAcAUQAcAUANAeQAKAXABAZQAAAagJAWQgIAUgOAQQAWAOAPAYQATAeAAAiQAAAYgHATQgJAYgPAQQgYAdgnAKQgQAEgQAAQgUAAgUgIg");
	var mask_7_graphics_84 = new cjs.Graphics().p("AgME9QgbgGgVgQQgVgPgNgYQgNgXgDgaQgCgcAKgaQAJgbAUgUIAQgNQgOgKgMgOQgWgcgFghQgEghAOggQAIgTAMgOQgagQgOgaQgRgfABglQACgkAUgdQATgbAfgPQAfgOAhADQAgAEAcAUQAcAUANAeQAKAXABAZQAAAagJAWQgIAUgOAQQAWAPAPAYQATAeAAAiQAAAXgHATQgJAYgPAQQgKAMgMAIQAVAPAOAVQARAdABAjQABAkgRAdQgNAWgWAQQgWAQgZAFQgNADgMAAQgOAAgMgDg");
	var mask_7_graphics_85 = new cjs.Graphics().p("AgVGZQgbgNgSgXQgRgYgGgeQgFgeAJgcQAJgfAXgWQgOgGgNgJQgVgQgNgXQgOgXgCgbQgDgbAKgbQAKgbAUgTIAPgMQgOgKgLgOQgXgcgEgiQgFghAOghQAJgSAMgOQgagRgPgaQgRgeACglQABglAUgdQATgbAggOQAfgPAhAEQAgADAcAUQAcAUANAfQAKAWAAAaQABAZgKAXQgHATgOAQQAWAPAPAYQASAeABAiQAAAYgHAUQgJAXgPARQgKALgMAJQAVANANAWQASAcABAkQAAAjgRAdQgIAPgNAMIAQAJQAgASAQAeQAQAegCAkQgCAkgUAcQgRAYgbAPQgbAOgdAAIgCAAQgcAAgagNg");
	var mask_7_graphics_86 = new cjs.Graphics().p("AgUIFQgagGgVgPQgVgQgOgXQgNgYgCgaQgDgbAKgbQAKgbAUgUQAMgLANgHIgLgNQgRgYgGgeQgFgeAJgcQAJgfAXgWQgOgGgNgJQgVgQgNgXQgOgXgCgbQgDgaAKgbQAKgbAUgTIAPgNQgOgKgLgOQgXgcgEgiQgFghAOghQAJgSAMgOQgagRgPgaQgRgeACglQABglAUgdQATgbAggOQAfgPAhAEQAgADAcAUQAcAUANAfQAKAWAAAaQABAZgKAXQgHAUgOAQQAWAOAPAYQASAeABAiQAAAYgHAUQgJAXgPARQgKALgMAJQAVAOANAWQASAcABAkQAAAigRAdQgIAPgNANIAQAIQAgASAQAeQAQAegCAkQgCAkgUAcQgQAXgZAOQAKAKAHAMQASAcAAAjQABAkgRAdQgNAWgWAQQgWAQgZAFQgMADgNAAQgMAAgOgDg");
	var mask_7_graphics_87 = new cjs.Graphics().p("AhBJZQgcgJgVgXQgWgWgIgcQgKgiAKgkQAKglAbgXIAMgJIgHgLQgNgYgCgZQgDgcAKgbQAKgbAUgUQAMgLANgHIgLgNQgRgYgGgeQgFgdAJgcQAJgfAXgXQgOgGgNgJQgVgPgNgXQgOgXgCgbQgDgbAKgbQAKgbAUgTIAPgNQgOgKgLgOQgXgcgEgiQgFghAOggQAJgTAMgOQgagQgPgbQgRgeACglQABgkAUgdQATgbAggPQAfgPAhAEQAgADAcAUQAcAUANAfQAKAWAAAaQABAZgKAXQgHAUgOAQQAWAOAPAYQASAeABAiQAAAZgHATQgJAYgPAQQgKAMgMAIQAVAPANAVQASAcABAkQAAAkgRAcQgIAQgNAMIAQAHQAgASAQAeQAQAegCAkQgCAkgUAdQgQAWgZAOQAKAKAHAMQASAdAAAiQABAkgRAdQgNAWgWARIgDABIAEAGQAVAhgBAjQAAAegOAaQgOAbgYASQgYARgeAFIgRABQgVAAgUgHg");
	var mask_7_graphics_88 = new cjs.Graphics().p("AiNKyQgbgMgTgXQgQgUgHgZQgHgaADgZQAGgkAZgdQAagcAjgKQAYgGAZAEQgIgNgEgPQgKgjAKgkQAKgkAbgYIAMgJIgHgLQgNgXgCgaQgDgcAKgbQAKgbAUgTQALgLANgIIgKgNQgRgXgGgeQgFgeAJgbQAJgfAWgWQgOgGgMgKQgVgPgNgYQgOgXgCgaQgDgcAKgaQAKgbAUgUIAPgMQgOgKgLgPQgXgcgEghQgFgiAOggQAIgTANgOQgagQgPgaQgRgfACglQABgkAUgdQATgbAggPQAegOAhADQAhAEAcAUQAcAUANAeQAKAXAAAZQABAagKAWQgHAUgPAQQAXAPAPAYQASAeABAiQAAAYgHATQgJAYgPAQQgKAMgMAIQAVAPANAVQASAdABAjQAAAkgRAdQgJAPgMAMIAQAIQAgASAQAfQAQAegCAjQgCAkgUAcQgQAWgZAPQAJAJAIAMQASAdAAAjQABAjgRAdQgNAXgWAQIgDACIAEAGQAVAggBAjQAAAegOAbQgOAbgYARQgYARgfAFQgSACgRgCQAQAbABAgQACAngWAjQgPAYgbAPQgaAPgdABIgGAAQgaAAgZgLg");
	var mask_7_graphics_89 = new cjs.Graphics().p("AjCLlQgigCgcgRQgegTgQgiQgJgWgCgWQAAgPACgPQAFgfAUgZQATgZAcgMQAdgMAfACQAgADAaARIAGADQAGghAYgbQAZgcAjgKQAZgHAYAFQgIgOgFgOQgKgjAKgkQALgkAbgYIAMgJIgHgLQgNgXgDgaQgCgcAKgbQAJgbAUgTQAMgMAOgHIgLgNQgSgXgFgeQgFgdAIgcQAKgfAXgXQgPgGgNgJQgVgPgNgYQgNgXgDgaQgCgcAKgaQAJgbAUgUIAQgNQgOgKgMgOQgWgcgFghQgEgiAOggQAIgTAMgOQgZgQgPgaQgQgfABglQABgkAUgdQATgbAfgPQAfgOAhADQAhAEAcAUQAcAUANAeQAKAXABAZQAAAagJAWQgIAUgOAQQAXAPAOAYQATAeAAAiQAAAYgHATQgJAYgPAQQgJAMgNAIQAVAPAOAVQARAdABAjQABAkgRAdQgJAPgNAMIARAIQAfASAQAfQAQAegCAkQgCAjgUAcQgQAWgZAOQAKAKAHAMQASAdABAjQABAjgRAdQgNAXgWAQIgDACIAEAGQAUAgAAAjQAAAegOAbQgPAbgYARQgYARgeAFQgSACgSgCQARAaABAhQABAngWAjQgQAYgaAPQgbAPgdABQgcACgbgNQgMgFgLgIQgEAYgOAVQgSAdgdAPQgaAOgfAAIgGAAg");
	var mask_7_graphics_90 = new cjs.Graphics().p("AksMEQgigCgcgRQgegTgQgiQgJgWgCgWQAAgPACgPQAFgfAUgZQATgZAcgMQAdgMAfACQAgADAaARQAMAIAKALQAGgeATgYQAUgZAcgNQAcgMAgADQAgACAZARIAGAEQAGghAXgbQAagdAjgJQAYgHAZAEQgIgNgEgPQgKgiAKgkQAKglAbgXIAMgJIgHgLQgNgYgCgaQgDgbAKgbQAKgbAUgUQALgLAOgHIgLgNQgRgXgGgeQgFgeAJgcQAJgfAXgWQgPgGgMgJQgVgQgNgXQgOgXgCgbQgDgbAKgbQAKgbAUgTIAPgNQgOgKgLgOQgXgcgEgiQgFghAOghQAIgSANgOQgagRgPgaQgRgeACglQABglAUgdQATgbAggOQAfgPAhAEQAhADAcAUQAcAUANAfQAKAWAAAaQABAZgKAXQgHAUgPAQQAXAOAPAYQASAeABAiQAAAYgHAUQgJAXgPARQgKALgMAJQAVAOANAWQASAcABAkQAAAjgRAdQgJAPgMANIAQAIQAgASAQAeQAQAegCAkQgCAkgUAbQgQAXgZAOQAJAKAIAMQASAcAAAjQABAkgRAdQgNAWgWAQIgDACIAEAGQAVAggBAkQAAAdgOAbQgOAbgYASQgYARgfAEQgSADgRgDQAQAbABAgQACAogWAiQgQAYgbAPQgaAPgdACQgdABgcgMQgMgGgLgHQgEAXgOAWQgSAcgcAPQgcAQgjgCQghgBgcgSQgNgIgLgKQgEAWgNAUQgSAdgdAPQgaAOgfAAIgGAAg");
	var mask_7_graphics_91 = new cjs.Graphics().p("AmmM/QgcgIgWgTQgUgSgLgbQgLgaABgcQABgbAOgYQANgZAWgRQAVgQAcgGQAbgGAbAGQAUAFARALIgCgPQAAgPACgPQAFgeAUgZQATgZAcgNQAdgMAfADQAgACAaARQAMAJAKAKQAGgdATgZQAUgZAcgMQAcgMAfACQAgADAZARIAGAEQAGgiAYgbQAagcAjgKQAYgGAZAEQgIgNgEgPQgKgjAKgkQAKgkAbgYIAMgJIgHgLQgNgXgCgaQgDgcAKgbQAKgbAUgSQALgLAOgIIgLgNQgRgXgGgeQgFgeAJgcQAJgfAXgWQgPgGgMgKQgVgPgNgYQgOgXgCgaQgDgcAKgaQAKgbAUgUIAPgMQgOgKgLgPQgXgcgEghQgFgiAOggQAIgSANgPQgagQgPgaQgRgfACglQABgkAUgdQATgbAggPQAfgOAhADQAhAEAcAUQAcAUANAeQAKAXAAAZQABAagKAWQgHAUgPAQQAXAPAPAYQASAeABAiQAAAYgHATQgJAYgPAQQgKAMgMAIQAVAPANAVQASAdABAjQAAAkgRAdQgJAPgMAMIAQAIQAgASAQAfQAQAegCAkQgCAkgUAcQgQAXgZAOQAJAJAIALQASAdAAAjQABAjgRAdQgNAXgWAQIgDACIAEAGQAVAggBAjQAAAegOAbQgOAbgYARQgYARgfAFQgSACgRgCQAQAbABAgQACAngWAjQgQAYgbAPQgaAPgdABQgdACgcgNQgMgFgLgIQgEAYgOAVQgSAdgdAPQgcAPgjgBQgggCgcgRQgNgIgLgLQgEAXgNAUQgSAcgdAPQgdAQgigCQghgBgbgRQACALAAALQAAAegNAZQgNAagXASQgYATgcAFQgLACgMAAQgRAAgRgFg");
	var mask_7_graphics_92 = new cjs.Graphics().p("An3N6QgcgNgRgXQgSgXgFgfQgGgeAJgcQALgmAggZQAhgYAogBIgBgQQABgbAOgYQANgZAWgRQAVgQAcgGQAbgGAbAGQAUAFARALIgCgPQAAgPACgPQAFgeAUgZQATgZAcgNQAdgMAfADQAgACAaARQANAIAKALQAFgdATgZQAUgZAbgMQAcgMAgACQAgADAZARIAGAEQAGgiAYgbQAagcAjgKQAZgGAZAEQgJgNgEgPQgKgjAKgkQAKgkAbgYIAMgJIgHgLQgNgXgCgaQgDgbAKgbQAKgbAUgTQAMgLANgIIgLgNQgRgXgGgeQgFgeAJgcQAJgfAXgWQgOgGgNgKQgVgPgNgYQgOgXgCgaQgDgcAKgaQAKgbAUgUIAPgMQgOgKgLgPQgXgcgEghQgFgiAOggQAJgSAMgPQgagQgPgaQgRgfACglQABgkAUgdQATgbAggPQAfgOAhADQAhAEAcAUQAcAUANAeQAKAXAAAZQABAagKAWQgHAUgOAQQAWAPAPAYQASAeABAiQAAAYgHATQgJAYgPAQQgKAMgMAIQAVAPANAVQASAdABAjQAAAkgRAdQgIAPgNAMIAQAIQAgASAQAfQAQAegCAkQgCAkgUAcQgQAWgZAPQAKAJAHAMQASAdAAAiQABAjgRAdQgNAXgWAQIgDACIAEAGQAVAggBAjQAAAegOAbQgOAbgYARQgYARgfAFQgSACgRgCQAQAbABAgQACAngWAjQgQAYgbAPQgaAPgdABQgdACgcgNQgMgFgKgIQgFAYgOAVQgSAdgdAPQgcAPgjgBQghgCgcgRQgMgIgKgLQgFAWgNAVQgSAcgdAPQgdAQgigCQghgBgbgRQACALAAALQAAAegNAZQgNAagXASQgYATgcAFQgKACgKAAIAAARQgCAkgUAcQgRAYgaAOQgbAPgdAAIgCAAQgdAAgagNg");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(82).to({graphics:mask_7_graphics_82,x:183.4202,y:271.8066}).wait(1).to({graphics:mask_7_graphics_83,x:184.6939,y:281.0915}).wait(1).to({graphics:mask_7_graphics_84,x:184.6946,y:291.2975}).wait(1).to({graphics:mask_7_graphics_85,x:186.705,y:301.5419}).wait(1).to({graphics:mask_7_graphics_86,x:186.705,y:311.3225}).wait(1).to({graphics:mask_7_graphics_87,x:186.705,y:320.1002}).wait(1).to({graphics:mask_7_graphics_88,x:180.8278,y:329.474}).wait(1).to({graphics:mask_7_graphics_89,x:171.0561,y:333.3976}).wait(1).to({graphics:mask_7_graphics_90,x:160.4311,y:336.5226}).wait(1).to({graphics:mask_7_graphics_91,x:151.0271,y:342.953}).wait(1).to({graphics:mask_7_graphics_92,x:145.0031,y:349.6669}).wait(48));

	// lady05
	this.instance_13 = new lib.CachedBmp_5();
	this.instance_13.setTransform(96.75,268.65,0.5,0.5);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(82).to({_off:false},0).wait(58));

	// 筆４
	this.instance_14 = new lib.筆();
	this.instance_14.setTransform(166.35,339.45,1,1,0,0,0,74.9,182.5);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(65).to({_off:false},0).wait(1).to({x:152.75,y:345.45},0).wait(1).to({x:134.35,y:346.25},0).wait(1).to({x:112.35,y:350.65},0).wait(1).to({x:96.35,y:361.45},0).wait(1).to({x:85.55,y:379.05},0).wait(1).to({x:80.75,y:396.25},0).wait(1).to({x:85.95,y:417.05},0).wait(1).to({x:96.75,y:431.45},0).wait(1).to({x:110.35,y:449.45},0).wait(1).to({x:105.15,y:458.25},0).wait(1).to({x:95.55,y:470.65},0).wait(1).to({x:99.55,y:489.85},0).wait(1).to({x:116.75,y:503.45},0).wait(1).to({y:520.25},0).wait(1).to({x:113.55,y:541.45},0).wait(1).to({x:128.75,y:555.85},0).to({_off:true},1).wait(58));

	// 遮色片４ (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_65 = new cjs.Graphics().p("Ag+BrQglgVgQgsQgPgrAOgoQAPgpAogXQAogXAqAHQAqAHAeAjQAeAkABArQABAugfAjQgcAhguAIQgLACgLAAQggAAgcgRg");
	var mask_8_graphics_66 = new cjs.Graphics().p("AhwCNQgngGgbgZQgVgVgKgcQgHgTgBgUQAAgQADgPQAIggAWgYQAZgbAmgJQAmgJAiANQATAHAQANQAPgdAfgSQAogXArAHQAqAHAeAjQAeAkABArQABAugfAjQgcAhguAIQguAHglgWIgPgKIgEAGQgTAhgiAPQgYALgaAAQgKAAgLgCg");
	var mask_8_graphics_67 = new cjs.Graphics().p("AjMCRQgigCgcgRQgegTgQghQgJgXgCgWQAAgPACgOQAFgeAUgaQATgZAcgMQAdgMAfADQAgACAaARQAWAOAPAXQAHgLAJgKQAZgcAmgIQAlgKAiANQATAIAQAMQAQgcAfgTQAogWArAGQAqAIAeAjQAeAjABAsQABAtgfAkQgcAgguAJQguAHglgWIgPgKIgEAFQgUAigiAPQghAPglgGQgngGgbgaQgLgLgIgNIgDAEQgSAdgdAPQgaAOgfAAIgGAAg");
	var mask_8_graphics_68 = new cjs.Graphics().p("Ak3CwQgigGgagXQgbgYgKghQgJggAIgjQAJgiAZgXQAYgYAjgIQAjgIAgALQAMAEALAGQAHgTAMgRQAUgZAcgMQAcgMAgACQAgADAZARQAXAOAOAXQAGgMAKgKQAZgbAmgJQAlgJAjANQATAHAPANQAQgcAggTQAogXAqAHQArAIAeAjQAeAjAAArQABAvgfAjQgcAggtAIQguAIglgWIgQgLIgDAGQgVAhghAQQgiAPgmgGQgmgHgbgZQgMgLgHgNIgDAEQgSAdgdAPQgcAPgjgBQgegCgagOQgGATgNAPQgVAbghANQgWAIgXAAQgLAAgLgCg");
	var mask_8_graphics_69 = new cjs.Graphics().p("AlvD1QghgCgcgRQgfgTgPghQgKgXgBgWQgBgPACgPQAGgeATgaQAUgZAcgMQAcgLAgACIAMACQgCgUAFgVQAJgkAZgXQAYgYAjgIQAjgIAgALQAMAEALAGQAGgTANgRQAUgZAcgMQAcgMAgADQAfACAZARQAXAOAOAXQAHgLAKgKQAZgcAmgIQAlgKAjANQATAIAPAMQAQgcAggTQAogWAqAGQArAIAeAjQAeAjAAAsQABAugfAkQgcAggtAIQguAHglgVIgQgKIgDAFQgVAhghAPQgiAPgmgGQgmgGgbgaQgMgKgIgNIgDAEQgSAcgdAPQgbAQgjgCQgegBgagPQgHATgMAQQgVAbghAMQghANghgGIAAARQgBAggTAcQgSAdgdAPQgaAOgfAAIgGAAg");
	var mask_8_graphics_70 = new cjs.Graphics().p("AmmE/QghgEgagTQgZgTgOgeQgOgeADgfQADgjAVgdQAVgdAggNIASgGQgCgKgBgKQgBgPACgPQAGgdATgZQAUgZAcgNQAcgMAgADIAMABQgCgUAFgVQAJgjAZgYQAYgYAjgIQAjgIAgALQAMAEALAGQAGgTANgQQAUgZAcgNQAcgMAfADQAgACAZARQAXAOAOAYQAHgMAKgKQAZgbAmgJQAlgJAjANQATAHAPANQAQgdAggSQAogXAqAHQArAHAeAjQAeAkAAArQABAvgfAjQgcAhgtAIQguAHglgWIgQgKIgDAGQgVAhghAPQgiAPgmgGQgmgGgbgZQgMgMgIgNIgDAFQgSAcgdAPQgcAQgjgCQgdgBgagPQgGATgNAQQgVAaghAMQghANghgGIAAARQgBAggTAdQgSAcgdAPQgNAHgPAEQAGAZgEAZQgFAfgVAaQgVAZgdAMQgWAJgYAAIgQgBg");
	var mask_8_graphics_71 = new cjs.Graphics().p("AnBGqQgfgGgZgXQgZgWgKgfQgKgeAGghQAHghAVgYQAQgTAWgLIANgGIgBgBQgZgTgOgeQgOgeADgfQADgjAVgdQAVgcAggNIASgGQgDgKAAgKQgBgPACgPQAGgeATgZQAUgZAcgNQAcgMAgADIALABQgBgUAFgVQAJgjAZgYQAYgYAjgIQAjgIAgALQAMAEAKAGQAHgTANgQQAUgZAcgNQAbgMAgADQAgACAZARQAXAOAOAYQAHgMAKgKQAZgbAmgJQAlgJAjANQATAHAPANQAQgdAggSQAogXAqAHQArAHAeAjQAeAkAAArQABAvgfAjQgcAhgtAIQguAHglgWIgQgKIgDAGQgVAhghAPQgiAPgmgGQgmgGgbgZQgMgMgIgNIgDAFQgSAcgdAPQgcAQgjgCQgdgBgagPQgHATgMAQQgVAbghAMQghANghgGIAAARQgBAggTAcQgSAcgdAPQgNAHgPAEQAGAZgEAZQgFAfgVAaQgVAZgdAMIgEACIAHAFQAeAYALAnQAIAfgIAgQgIAhgWAXQgWAXggAKQgTAFgSAAQgOAAgNgDg");
	var mask_8_graphics_72 = new cjs.Graphics().p("AllIBQghgEgagTQgZgTgOgeQgOgeADggQABgVAJgSQgbgIgWgUQgZgWgKgfQgKgeAGghQAHghAVgYQAQgTAWgLIANgGIgBgBQgZgTgOgeQgOgeADgeQADgjAVgdQAVgdAggNIASgFQgDgLAAgKQgBgPACgPQAGgeATgZQAUgZAcgNQAcgMAgADIALABQgBgUAFgVQAJgjAZgYQAYgYAjgIQAjgIAgALQAMAEAKAGQAHgTANgQQAUgZAcgNQAbgMAgADQAgACAZARQAXAPAOAXQAHgMAKgKQAZgbAmgJQAlgJAjANQATAHAPANQAQgdAggSQAogXAqAHQArAHAeAjQAeAkAAArQABAvgfAjQgcAhgtAIQguAHglgWIgQgKIgDAGQgVAhghAPQgiAPgmgGQgmgGgbgZQgMgLgIgOIgDAFQgSAcgdAPQgcAQgjgCQgdgBgagPQgHATgMAQQgVAbghAMQghANghgGIAAARQgBAggTAdQgSAcgdAPQgNAIgPADQAGAZgEAYQgFAfgVAaQgVAZgdAMIgEACIAHAFQAeAYALAnQAIAfgIAgQgDALgEAJQAbAHAVATQAYAUALAgQALAfgFAfQgFAfgVAaQgVAagdAMQgWAJgYAAIgQgBg");
	var mask_8_graphics_73 = new cjs.Graphics().p("AjqJQQghgMgXgdQgWgdgEgjQgEghAPgfQgZAIgbgEQghgEgagTQgZgTgOgeQgOgeADgfQABgVAJgTQgbgHgWgUQgZgXgKgeQgKgfAGggQAHghAVgZQAQgSAWgLIANgGIgBgBQgZgSgOgeQgOgeADggQADgiAVgdQAVgeAggMIASgGQgDgKAAgKQgBgPACgPQAGgfATgZQAUgZAcgMQAcgMAgACIALACQgBgUAFgWQAJgjAZgXQAYgYAjgIQAjgIAgALQAMAEAKAGQAHgTANgRQAUgZAcgMQAbgMAgACQAgADAZARQAXAOAOAXQAHgLAKgLQAZgbAmgJQAlgJAjANQATAIAPAMQAQgcAggTQAogXAqAHQArAIAeAjQAeAjAAArQABAvgfAkQgcAggtAIQguAIglgWIgQgLIgDAGQgVAhghAQQgiAPgmgGQgmgHgbgZQgMgLgIgNIgDAEQgSAdgdAPQgcAPgjgBQgdgBgagPQgHATgMAPQgVAbghANQghANghgGIAAAQQgBAhgTAcQgSAdgdAPQgNAHgPAEQAGAZgEAYQgFAfgVAaQgVAZgdAMIgEABIAHAGQAeAYALAnQAIAfgIAgQgDAKgEAJQAbAIAVASQAYAVALAfQALAfgFAgQgDAQgHAPQATgGAVABQAlAAAdAUQAjAYAOAmQALAhgIAkQgIAlgZAYQgZAZgkAIQgPADgOAAQgVAAgTgHg");
	var mask_8_graphics_74 = new cjs.Graphics().p("AhNKiQgigGgagXQgbgYgKghQgJggAIgjIAAgBQgfAFgcgKQghgMgXgdQgWgdgEgjQgEghAPgfQgZAIgbgEQghgEgagTQgZgTgOgeQgOgeADgfQABgVAJgTQgbgHgWgUQgZgXgKgeQgKgfAGggQAHghAVgYQAQgSAWgLIANgHIgBAAQgZgTgOgeQgOgeADggQADgiAVgdQAVgeAggMIASgGQgDgKAAgKQgBgPACgPQAGgfATgZQAUgZAcgMQAcgMAgACIALACQgBgVAFgVQAJgjAZgXQAYgYAjgIQAjgIAgALQAMAEAKAGQAHgTANgRQAUgZAcgMQAbgMAgACQAgADAZARQAXAOAOAXQAHgMAKgKQAZgbAmgJQAlgJAjANQATAHAPANQAQgcAggTQAogXAqAHQArAIAeAjQAeAjAAArQABAvgfAkQgcAggtAIQguAIglgWIgQgLIgDAGQgVAhghAQQgiAPgmgGQgmgHgbgZQgMgLgIgNIgDAEQgSAdgdAPQgcAPgjgBQgdgCgagOQgHATgMAPQgVAbghANQghANghgHIAAARQgBAhgTAcQgSAdgdAPQgNAHgPAEQAGAYgEAZQgFAfgVAaQgVAagdAMIgEABIAHAGQAeAYALAmQAIAfgIAgQgDAKgEAJQAbAIAVASQAYAVALAfQALAfgFAgQgDAQgHAPQATgGAVABQAlAAAdAUQAjAYAOAmQALAhgIAkIgBAEQAegFAbAKQAgALAXAbQAXAbAFAiQAEAZgHAZQgGAZgQAUQgVAbggANQgXAIgWAAQgLAAgLgCg");
	var mask_8_graphics_75 = new cjs.Graphics().p("AjcK+QgngHgbgZQgVgVgKgcQgHgSgBgUQAAgRADgQQAIggAWgYQAMgNAQgJQgOgKgMgPQgWgdgEgjQgEghAPgfQgZAIgbgEQghgEgagTQgZgTgOgeQgOgeADgfQABgVAJgTQgbgHgWgUQgZgXgKgeQgKgfAGggQAHggAVgZQAQgSAWgLIANgHIgBAAQgZgTgOgeQgOgeADggQADgiAVgdQAVgeAggMIASgGQgDgKAAgKQgBgPACgPQAGgfATgZQAUgZAcgMQAcgMAgACIALACQgBgVAFgVQAJgjAZgXQAYgYAjgIQAjgIAgALQAMAEAKAGQAHgTANgRQAUgZAcgMQAbgMAgACQAgADAZARQAXAOAOAXQAHgMAKgKQAZgbAmgJQAlgJAjANQATAHAPANQAQgcAggTQAogXAqAHQArAIAeAjQAeAjAAArQABAvgfAkQgcAggtAIQguAIglgWIgQgLIgDAGQgVAhghAQQgiAPgmgGQgmgHgbgZQgMgLgIgNIgDAEQgSAdgdAPQgcAPgjgBQgdgCgagOQgHATgMAPQgVAbghANQghAMghgGIAAARQgBAhgTAcQgSAdgdAPQgNAHgPAEQAGAYgEAZQgFAfgVAaQgVAagdAMIgEABIAHAGQAeAYALAnQAIAegIAgQgDAKgEAJQAbAIAVASQAYAVALAfQALAfgFAgQgDAQgHAPQATgGAVABQAlAAAdAUQAjAYAOAmQALAhgIAkIgBAEQAegFAbAKQAgALAXAbQAXAbAFAiQAEAZgHAZQgGAZgQAUQgVAbggANQgiANghgHIgRgEIgBABQgUAhgiAQQgYAKgaAAQgLAAgKgBg");
	var mask_8_graphics_76 = new cjs.Graphics().p("AkZMZQghgCgcgRQgfgTgPghQgKgXgBgWQgBgPACgPQAGgeATgaQAUgZAcgMIAPgGIgHgRQgHgSgBgUQAAgRADgPQAIghAWgYQAMgNAQgJQgOgKgMgPQgWgdgEgjQgEghAPgfQgZAIgbgEQghgEgagSQgZgTgOgfQgOgeADgfQABgVAJgTQgbgHgWgUQgZgWgKgeQgKgfAGggQAHghAVgYQAQgTAWgLIANgGIgBgBQgZgTgOgeQgOgeADggQADgiAVgdQAVgdAggNIASgGQgDgKAAgKQgBgPACgPQAGgeATgaQAUgZAcgMQAcgMAgACIALACQgBgUAFgVQAJgkAZgXQAYgYAjgIQAjgIAgALQAMAEAKAGQAHgTANgRQAUgZAcgMQAbgMAgADQAgACAZARQAXAOAOAXQAHgLAKgKQAZgcAmgIQAlgKAjANQATAIAPAMQAQgcAggTQAogWAqAGQArAIAeAjQAeAjAAAsQABAugfAkQgcAggtAJQguAHglgWIgQgKIgDAFQgVAighAPQgiAPgmgGQgmgGgbgaQgMgLgIgNIgDAEQgSAdgdAPQgcAQgjgCQgdgBgagPQgHATgMAQQgVAbghAMQghANghgGIAAARQgBAggTAcQgSAdgdAPQgNAHgPAEQAGAZgEAZQgFAegVAaQgVAagdAMIgEACIAHAFQAeAYALAnQAIAfgIAgQgDAKgEAJQAbAIAVARQAYAVALAgQALAegFAgQgDAQgHAPQATgGAVABQAlAAAdAUQAjAYAOAnQALAggIAlIgBADQAegEAbAJQAgALAXAbQAXAcAFAhQAEAZgHAZQgGAagQATQgVAbggANQgiANghgHIgRgEIgBACQgUAggiAQIgRAGIABADQAQAegCAgQgBAhgTAcQgSAdgdAPQgaAOgfAAIgGAAg");
	var mask_8_graphics_77 = new cjs.Graphics().p("AioN3QgigCgcgRQgegTgQgiQgJgWgCgWQAAgPACgPQAEgWALgUIgLAAQghgBgcgSQgfgTgPghQgKgXgBgWQgBgPACgPQAGgeATgZQAUgZAcgNIAPgFIgHgRQgHgTgBgUQAAgQADgQQAIggAWgYQAMgOAQgJQgOgKgMgPQgWgdgEgjQgEghAPgfQgZAIgbgDQghgEgagTQgZgTgOgeQgOgeADggQABgUAJgTQgbgHgWgUQgZgWgKgfQgKgeAGghQAHghAVgYQAQgTAWgLIANgGIgBgBQgZgTgOgeQgOgeADgfQADgjAVgdQAVgdAggNIASgGQgDgKAAgKQgBgPACgPQAGgeATgZQAUgZAcgNQAcgMAgADIALABQgBgUAFgVQAJgjAZgYQAYgYAjgIQAjgIAgALQAMAEAKAGQAHgTANgQQAUgZAcgNQAbgMAgADQAgACAZARQAXAPAOAXQAHgMAKgKQAZgbAmgJQAlgJAjANQATAHAPANQAQgdAggSQAogXAqAHQArAHAeAjQAeAkAAArQABAvgfAjQgcAhgtAIQguAHglgWIgQgKIgDAGQgVAhghAPQgiAPgmgGQgmgGgbgZQgMgLgIgOIgDAFQgSAcgdAPQgcAQgjgCQgdgBgagPQgHATgMAQQgVAbghAMQghANghgGIAAARQgBAggTAdQgSAcgdAPQgNAIgPADQAGAZgEAZQgFAfgVAaQgVAZgdAMIgEACIAHAFQAeAYALAnQAIAfgIAgQgDAKgEAKQAbAHAVATQAYAUALAgQALAegFAfQgDAQgHAPQATgFAVAAQAlABAdATQAjAYAOAnQALAhgIAkIgBADQAegEAbAJQAgALAXAbQAXAcAFAhQAEAZgHAaQgGAZgQAUQgVAbggAMQgiANghgGIgRgFIgBACQgUAhgiAPIgRAGIABADQAQAegCAhQgBAegQAbIAPAAQAgADAaARQAbARAQAfQAPAegBAgQgCAhgSAcQgSAdgdAPQgaAOgfAAIgGAAg");
	var mask_8_graphics_78 = new cjs.Graphics().p("AgiOvQgigLgXgaQgSgVgHgbQgGgUABgUQgWAIgZgBQgigCgcgRQgegTgQgiQgJgWgCgWQAAgPACgPQAEgWALgUIgLAAQghgBgcgSQgfgTgPghQgKgXgBgWQgBgPACgPQAGgeATgZQAUgZAcgNIAPgFIgHgRQgHgTgBgUQAAgQADgQQAIggAWgYQAMgNAQgJQgOgLgMgPQgWgdgEgjQgEggAPggQgZAIgbgDQghgEgagTQgZgTgOgeQgOgdADggQABgUAJgTQgbgIgWgUQgZgWgKgfQgKgeAGghQAHghAVgYQAQgTAWgLIANgGIgBgBQgZgTgOgeQgOgeADgfQADgjAVgdQAVgdAggNIASgFQgDgKAAgLQgBgPACgPQAGgeATgZQAUgZAcgNQAcgMAgADIALABQgBgUAFgVQAJgjAZgYQAYgYAjgIQAjgIAgALQAMAEAKAGQAHgTANgQQAUgZAcgNQAbgMAgADQAgACAZARQAXAPAOAXQAHgMAKgKQAZgbAmgJQAlgJAjANQATAHAPANQAQgdAggSQAogXAqAHQArAHAeAjQAeAkAAArQABAvgfAjQgcAhgtAIQguAHglgWIgQgKIgDAGQgVAhghAPQgiAPgmgGQgmgGgbgZQgMgLgIgOIgDAFQgSAcgdAPQgcAQgjgCQgdgBgagPQgHATgMAQQgVAbghAMQghANghgGIAAARQgBAggTAdQgSAcgdAPQgNAIgPADQAGAZgEAZQgFAfgVAaQgVAZgdAMIgEACIAHAFQAeAYALAnQAIAfgIAgQgDALgEAJQAbAHAVATQAYAUALAgQALAfgFAfQgDARgHANQATgFAVAAQAlABAdATQAjAYAOAnQALAhgIAkIgBADQAegEAbAJQAgALAXAbQAXAcAFAhQAEAZgHAaQgGAZgQAUQgVAbggAMQgiANghgGIgRgEIgBABQgUAhgiAPIgRAHIABACQAQAegCAhQgBAegQAbIAPAAQAgADAaARQAbARAQAfQAPAegBAgIAAABQAKgDAMgCQAagEAYAGQAZAHATAPQAcAWAMAiQANAigHAiQgHAigZAaQgZAagiAJQgPAEgPAAQgSAAgTgGg");
	var mask_8_graphics_79 = new cjs.Graphics().p("AhvQTQgfgHgZgWQgZgXgKgeQgKgeAGghQAHghAUgYQAQgTAWgLQAUgLAVgCQgLgRgFgTQgGgVABgUQgWAIgZgBQgigBgcgSQgegTgQghQgJgXgCgWQAAgPACgPQAEgWALgTIgLAAQghgCgcgRQgfgTgPgiQgKgWgBgWQgBgPACgPQAGgfATgZQAUgZAcgMIAPgGIgHgRQgHgSgBgUQAAgRADgQQAIggAWgYQAMgNAQgJQgOgLgMgOQgWgdgEgjQgEghAPgeQgZAHgbgDQghgEgagTQgZgTgOgeQgOgeADgfQABgVAJgTQgbgHgWgUQgZgXgKgeQgKgfAGggQAHghAVgZQAQgSAWgLIANgHIgBAAQgZgTgOgeQgOgeADggQADgiAVgdQAVgeAggMIASgGQgDgKAAgKQgBgPACgPQAGgfATgZQAUgZAcgMQAcgMAgACIALACQgBgVAFgVQAJgjAZgXQAYgYAjgIQAjgIAgALQAMAEAKAGQAHgTANgRQAUgZAcgMQAbgMAgACQAgADAZARQAXAOAOAXQAHgMAKgKQAZgbAmgJQAlgJAjANQATAHAPANQAQgdAggSQAogXAqAHQArAIAeAjQAeAjAAArQABAvgfAkQgcAggtAIQguAIglgWIgQgLIgDAGQgVAhghAQQgiAPgmgGQgmgHgbgZQgMgLgIgNIgDAEQgSAdgdAPQgcAPgjgBQgdgCgagOQgHASgMAQQgVAbghANQghAMghgGIAAARQgBAhgTAcQgSAdgdAPQgNAHgPAEQAGAYgEAZQgFAfgVAaQgVAagdAMIgEABIAHAGQAeAYALAnQAIAfgIAgQgDAKgEAJQAbAIAVASQAYAVALAfQALAfgFAgQgDAQgHAPQATgGAVABQAlAAAdAUQAjAYAOAmQALAggIAkIgBAEQAegFAbAKQAgALAXAbQAXAbAFAiQAEAZgHAZQgGAZgQAUQgVAbggANQgiANghgHIgRgEIgBABQgUAhgiAQIgRAGIABADQAQAegCAgQgBAegQAbIAPABQAgACAaARQAbASAQAeQAPAegBAhIAAABQAKgEAMgCQAagEAYAHQAZAHATAPQAcAVAMAiQANAigHAiQgHAigZAaQgZAbgiAIIgPADQAMARAFAUQAJAfgIAhQgJAggWAXQgVAXggAKQgSAGgSAAQgOAAgNgDg");
	var mask_8_graphics_80 = new cjs.Graphics().p("AhlR3QgbgNgSgYQgRgXgGgeQgFgeAJgcQAMgnAggYIADgCQgbgHgWgUQgZgXgKgeQgKgeAGghQAHghAUgYQAQgTAWgLQAUgKAVgDQgLgRgFgTQgGgUABgUQgWAHgZgBQgigBgcgSQgegTgQghQgJgXgCgWQAAgPACgPQAEgWALgTIgLAAQghgCgcgRQgfgTgPgiQgKgWgBgWQgBgPACgPQAGgfATgZQAUgZAcgMIAPgGIgHgRQgHgSgBgUQAAgRADgQQAIggAWgYQAMgNAQgJQgOgKgMgOQgWgdgEgjQgEghAPgfQgZAIgbgEQghgEgagTQgZgTgOgeQgOgeADgfQABgVAJgTQgbgHgWgUQgZgXgKgeQgKgfAGggQAHghAVgZQAQgSAWgLIANgGIgBgBQgZgTgOgeQgOgeADggQADgiAVgdQAVgeAggMIASgGQgDgKAAgKQgBgPACgPQAGgfATgZQAUgZAcgMQAcgMAgACIALACQgBgVAFgVQAJgjAZgXQAYgYAjgIQAjgIAgALQAMAEAKAGQAHgTANgRQAUgZAcgMQAbgMAgACQAgADAZARQAXAOAOAXQAHgLAKgLQAZgbAmgJQAlgJAjANQATAIAPAMQAQgcAggTQAogXAqAHQArAIAeAjQAeAjAAArQABAvgfAkQgcAggtAIQguAIglgWIgQgLIgDAGQgVAhghAQQgiAPgmgGQgmgHgbgZQgMgLgIgNIgDAEQgSAdgdAPQgcAPgjgBQgdgCgagOQgHATgMAPQgVAbghANQghANghgGIAAAQQgBAhgTAcQgSAdgdAPQgNAHgPAEQAGAYgEAZQgFAfgVAaQgVAagdAMIgEABIAHAGQAeAYALAnQAIAfgIAgQgDAKgEAJQAbAIAVASQAYAVALAfQALAfgFAgQgDAQgHAPQATgGAVABQAlAAAdAUQAjAYAOAmQALAhgIAkIgBAEQAegFAbAKQAgALAXAbQAXAaAFAiQAEAZgHAZQgGAZgQAUQgVAbggANQgiANghgHIgRgEIgBABQgUAhgiAQIgRAGIABADQAQAegCAgQgBAfgQAbIAPAAQAgACAaARQAbASAQAeQAPAegBAhIAAABQAKgEAMgCQAagEAYAHQAZAHATAPQAcAVAMAiQANAigHAiQgHAigZAaQgZAbgiAIIgPADQAMARAFAUQAJAfgIAhQgJAggWAXQgHAJgKAHQAOAEAOAIQAfASAQAfQAQAegCAkQgCAkgUAcQgRAYgbAOQgaAPgdAAIgCAAQgdAAgagNg");
	var mask_8_graphics_81 = new cjs.Graphics().p("AA9TDQgbgOgSgXQgRgXgFgeQgFgdAHgaQgTAHgVABQgeAAgbgNQgbgOgSgXQgRgXgGgeQgFgeAJgcQAMgnAggYIADgDQgbgHgWgUQgZgWgKgfQgKgeAGghQAHggAUgZQAQgSAWgMQAUgKAVgDQgLgQgFgUQgGgUABgUQgWAIgZgBQgigCgcgRQgegTgQgiQgJgWgCgWQAAgPACgPQAEgXALgTIgLAAQghgBgcgSQgfgTgPghQgKgXgBgWQgBgPACgPQAGgeATgZQAUgZAcgNIAPgFIgHgRQgHgTgBgUQAAgQADgQQAIgfAWgYQAMgOAQgJQgOgKgMgPQgWgdgEgjQgEghAPgfQgZAIgbgDQghgEgagTQgZgTgOgeQgOgeADggQABgVAJgTQgbgHgWgUQgZgWgKgfQgKgeAGghQAHghAVgYQAQgTAWgLIANgGIgBgBQgZgTgOgeQgOgeADgfQADgjAVgdQAVgdAggNIASgGQgDgKAAgKQgBgPACgPQAGgeATgZQAUgZAcgNQAcgMAgADIALABQgBgUAFgVQAJgjAZgYQAYgYAjgIQAjgIAgALQAMAEAKAGQAHgTANgQQAUgZAcgNQAbgMAgADQAgACAZARQAXAOAOAYQAHgMAKgKQAZgbAmgJQAlgJAjANQATAHAPANQAQgdAggSQAogXAqAHQArAHAeAjQAeAkAAArQABAvgfAjQgcAhgtAIQguAHglgWIgQgKIgDAGQgVAhghAPQgiAPgmgGQgmgGgbgZQgMgMgIgNIgDAFQgSAcgdAPQgcAQgjgCQgdgBgagPQgHATgMAQQgVAbghAMQghANghgGIAAARQgBAggTAdQgSAcgdAPQgNAHgPAEQAGAZgEAZQgFAfgVAaQgVAZgdAMIgEACIAHAFQAeAYALAnQAIAfgIAgQgDAKgEAKQAbAHAVATQAYAUALAgQALAfgFAfQgDAQgHAPQATgGAVABQAlABAdATQAjAYAOAnQALAhgIAkIgBADQAegEAbAJQAgALAXAbQAXAcAFAhQAEAYgHAaQgGAZgQAUQgVAbggAMQgiANghgGIgRgFIgBACQgUAhgiAPIgRAGIABADQAQAegCAhQgBAegQAbIAPAAQAgADAaARQAbARAQAfQAPAegBAgIAAABQAKgEAMgBQAagEAYAGQAZAHATAPQAcAWAMAiQANAigHAiQgHAigZAaQgZAagiAJIgPACQAMARAFAVQAJAegIAhQgJAggWAYQgHAIgKAHQAOAEAOAJQAfASAQAeQAQAfgCAkQgBAMgDAMQASgGAVgBQAjAAAfARQAfASAQAfQAQAegCAkQgCAkgUAcQgQAYgbAPQgbAOgdAAIgEAAQgbAAgagMg");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(65).to({graphics:mask_8_graphics_65,x:188.3261,y:162.4637}).wait(1).to({graphics:mask_8_graphics_66,x:178.9234,y:164.379}).wait(1).to({graphics:mask_8_graphics_67,x:168.3216,y:164.6}).wait(1).to({graphics:mask_8_graphics_68,x:159.3509,y:167.9267}).wait(1).to({graphics:mask_8_graphics_69,x:152.0716,y:174.6}).wait(1).to({graphics:mask_8_graphics_70,x:147.457,y:182.0933}).wait(1).to({graphics:mask_8_graphics_71,x:145.9891,y:192.9918}).wait(1).to({graphics:mask_8_graphics_72,x:145.9891,y:201.4683}).wait(1).to({graphics:mask_8_graphics_73,x:145.9891,y:210.0033}).wait(1).to({graphics:mask_8_graphics_74,x:145.9891,y:217.7267}).wait(1).to({graphics:mask_8_graphics_75,x:145.9891,y:220.429}).wait(1).to({graphics:mask_8_graphics_76,x:145.9891,y:229.4}).wait(1).to({graphics:mask_8_graphics_77,x:145.9891,y:238.775}).wait(1).to({graphics:mask_8_graphics_78,x:145.9891,y:244.9585}).wait(1).to({graphics:mask_8_graphics_79,x:145.9891,y:254.6418}).wait(1).to({graphics:mask_8_graphics_80,x:145.9891,y:265.7192}).wait(1).to({graphics:mask_8_graphics_81,x:145.9891,y:273.1968}).wait(59));

	// lady04
	this.instance_15 = new lib.CachedBmp_6();
	this.instance_15.setTransform(99.25,158.25,0.5,0.5);
	this.instance_15._off = true;

	var maskedShapeInstanceList = [this.instance_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(65).to({_off:false},0).wait(75));

	// 筆３
	this.instance_16 = new lib.筆();
	this.instance_16.setTransform(179.55,329.15,1,1,0,0,0,74.9,182.5);
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(52).to({_off:false},0).wait(1).to({x:177.15,y:343.95},0).wait(1).to({x:173.15,y:367.15},0).wait(1).to({x:160.75,y:384.75},0).wait(1).to({x:141.95,y:393.55},0).wait(1).to({x:120.75,y:399.95},0).wait(1).to({x:109.15,y:415.55},0).wait(1).to({x:114.75,y:432.75},0).wait(1).to({x:130.35,y:445.95},0).wait(1).to({x:143.15,y:459.95},0).wait(1).to({x:137.15,y:481.15},0).wait(1).to({x:138.75,y:503.55},0).wait(1).to({x:138.35,y:523.55},0).to({_off:true},1).wait(75));

	// 遮色片３ (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_52 = new cjs.Graphics().p("AgwByQgXgJgSgTQgbgcgGgmQgCgMABgKQABgcANgaQANgaAXgRQAWgRAcgFQAcgGAbAHQAbAHAWATQAXATALAaQAOAigHAmQgHAngaAaQgbAagmAIQgNACgMAAQgZAAgWgKg");
	var mask_9_graphics_53 = new cjs.Graphics().p("AhBDlQgigQgUghQgUghABglQABgkAXggQAXgfAjgMIAMgDQgRgJgOgPQgagcgGgmQgCgMAAgLQABgcANgaQAOgaAWgRQAWgRAdgFQAbgGAcAHQAbAHAWATQAWATALAaQAPAigHAnQgIAngaAaQgYAYgiAIQAoAVARAsQANAigIAmQgJAmgbAZQgbAZgmAHQgKACgLAAQgaAAgYgLg");
	var mask_9_graphics_54 = new cjs.Graphics().p("AhpFKQgagLgTgVQgTgWgIgaQgIgdAGgfQAGgeASgYQASgVAZgMQAVgKAWgDIgGgJQgVghABglQACgkAXgfQAXggAigMIANgEQgRgJgOgPQgbgcgGglQgCgMABgMQABgcANgaQANgZAXgRQAVgRAcgGQAdgFAbAHQAbAHAWATQAXATALAaQAOAigHAmQgHAngaAaQgYAZgjAIQApAWAQArQAOAhgJAmQgJAmgbAZQgaAagnAGIgIABQAOATAHAYQAHAbgFAbQgFAbgQAYQgRAXgYANQgYAOgcACIgHAAQgZAAgXgJg");
	var mask_9_graphics_55 = new cjs.Graphics().p("AigGdQgggJgXgWQgWgXgJggQgJggAIgeQAGgaARgWQARgWAYgMQAYgNAcgBQAMAAALACIAAgBQgIgdAGgeQAGgfASgXQASgWAZgMQAVgKAWgCIgGgKQgVggABglQACgkAXggQAWgfAigNIANgDQgRgJgOgPQgbgcgGgmQgCgMABgLQABgcANgaQANgaAXgRQAWgRAcgFQAdgGAbAHQAbAHAWATQAXATALAaQAOAigHAnQgHAngaAaQgYAYgjAJQApAVAQAsQAOAigJAmQgJAlgbAZQgaAZgnAHIgIABQAOATAHAXQAHAbgFAbQgFAcgQAXQgRAYgYANQgZANgcACQgNABgMgCQALAkgMAnQgKAegYAXQgZAWgfAHQgNADgOAAQgRAAgSgFg");
	var mask_9_graphics_56 = new cjs.Graphics().p("Aj/G5QgigGgagXQgbgYgKghQgJggAIgjQAJgjAZgXQAYgYAjgIQAjgIAgALQAfAKAWAYQAHgXAPgUQARgVAYgNQAYgMAcgBQAMgBALACIAAAAQgIgdAGgfQAFgeASgYQASgVAZgLQAVgLAWgCIgGgJQgVghABglQACglAXgfQAXggAigMIANgEQgRgJgOgPQgbgcgGglQgCgMABgMQABgcANgaQANgZAXgRQAWgRAcgGQAdgFAbAHQAbAHAWATQAXATALAaQAOAigHAmQgHAngaAaQgYAYgjAJQApAVAQAsQAOAigJAmQgJAmgbAYQgaAagnAGIgIABQAOATAHAYQAHAbgFAbQgFAbgQAYQgRAXgYANQgZAOgcACQgNAAgNgBQAMAjgNAoQgKAegYAWQgZAWgfAIQgeAHgfgJQgggJgXgXIgDgEQgHAXgPATQgVAbghANQgWAIgXAAQgLAAgLgCg");
	var mask_9_graphics_57 = new cjs.Graphics().p("AlZHpQgigKgXgZQgSgTgJgZQgJgZACgbQADghAVgdQAVgdAfgNQAggNAjAFIARAEIADgMQAJgjAYgXQAZgYAigIQAjgIAhALQAeAKAXAYQAGgXAQgUQARgVAXgNQAYgMAbgBQAMgBAMACIAAAAQgJgdAGgfQAGgeATgXQARgVAZgMQAVgLAXgCIgHgJQgUghABglQABglAXgfQAXggAjgMIAMgEQgRgJgOgPQgagcgGglQgCgMAAgMQABgcANgaQAOgZAWgRQAWgRAdgGQAcgFAcAHQAbAHAWATQAWATALAaQAPAigHAmQgIAngaAaQgYAYgiAJQAoAVARAsQANAigIAmQgJAmgbAZQgbAagmAGIgIABQAOASAGAYQAIAbgFAbQgFAbgRAYQgQAXgZANQgYAOgdACQgNAAgMgBQALAjgMAoQgKAegZAWQgYAWgfAIQgfAHgggJQgfgJgWgXIgEgEQgHAXgOATQgVAbgiANQghANgigHIgMgDIgBAHQgHAhgZAaQgYAaghAJQgQAEgRAAQgQAAgSgEg");
	var mask_9_graphics_58 = new cjs.Graphics().p("Al0I9QgagEgXgPQgXgPgOgWQgOgXgEgbQgEgbAHgaQAOgrAmgaQAQgKASgFIAAgBQgJgZACgbQADghAVgdQAVgdAfgNQAfgNAjAFIASAEIACgMQAJgjAZgXQAYgYAjgIQAjgIAgALQAfAKAWAYQAHgXAOgUQARgVAYgNQAYgMAcgBQAMgBALACIAAAAQgIgcAGgfQAGgeASgYQASgVAZgMQAVgLAWgCIgGgJQgVghABglQACglAXgfQAXggAigMIANgEQgRgJgOgPQgbgcgGglQgCgMABgMQABgcANgaQANgZAXgRQAWgRAcgGQAdgFAbAHQAbAHAWATQAXATALAaQAOAigHAmQgHAngaAaQgZAYgiAJQApAVAQAsQAOAigJAmQgJAmgbAZQgaAagnAGIgIABQAOATAHAYQAHAbgFAaQgFAbgQAYQgRAXgYANQgZAOgcACQgNAAgNgBQAMAjgNAoQgKAegYAWQgZAWgfAIQgfAHgfgJQgggJgXgXIgDgEQgHAXgOATQgVAbghANQgiANghgHIgMgDIgCAHQgHAhgYAaQgZAaggAJIAAAAQALAdgFAeQgGAwglAeQgUASgaAHQgRAEgSAAIgSgBg");
	var mask_9_graphics_59 = new cjs.Graphics().p("AkKKLQgigJgXgZQgSgTgJgaQgJgZACgaQACgPAEgNQgLAAgKgBQgagEgXgPQgXgPgOgXQgOgWgEgbQgEgcAHgZQAOgsAmgZQAQgLASgEIAAgCQgJgZACgaQADgiAVgdQAVgcAfgNQAfgNAjAFIASADIACgLQAJgjAZgYQAYgXAjgIQAjgIAgALQAfAKAWAYQAHgXAOgTQARgWAYgMQAYgNAcgBQAMAAALABIAAAAQgIgdAGgeQAGgfASgXQASgWAZgMQAVgKAWgCIgGgKQgVghABglQACgkAXggQAXgfAigNIANgEQgRgJgOgOQgbgcgGgmQgCgMABgLQABgcANgaQANgaAXgRQAWgRAcgFQAdgGAbAHQAbAHAWATQAXATALAaQAOAigHAnQgHAngaAaQgZAYgiAIQApAWAQAsQAOAigJAmQgJAmgbAZQgaAZgnAHIgIABQAOASAHAYQAHAbgFAbQgFAcgQAXQgRAYgYAMQgZANgcACQgNABgNgCQAMAkgNAnQgKAegYAXQgZAWgfAHQgfAHgfgJQgggJgXgWIgDgEQgHAXgOATQgVAbghAMQgiANghgGIgMgDIgCAGQgHAigYAZQgZAaggAJIAAAAQALAdgFAeQgBAMgDAKIAUACQAjAFAaAVQAaAWAMAiQAMAhgHAhQgHAigZAZQgYAaghAJQgQAFgRAAQgQAAgSgFg");
	var mask_9_graphics_60 = new cjs.Graphics().p("AiALVQgigKgYgZQgSgTgIgZQgJgZACgbIACgNQgYADgZgGQgigKgXgZQgSgTgJgZQgJgZACgbQACgOAEgOQgLABgKgCQgagEgXgPQgXgPgOgWQgOgXgEgbQgEgbAHgaQAOgrAmgaQAQgKASgFIAAgBQgJgZACgbQADghAVgdQAVgdAfgNQAfgNAjAFIASAEIACgMQAJgiAZgXQAYgYAjgIQAjgIAgALQAfAKAWAYQAHgXAOgUQARgVAYgNQAYgMAcgBQAMgBALACIAAAAQgIgdAGgfQAGgeASgYQASgVAZgMQAVgLAWgCIgGgJQgVghABglQACglAXgfQAXggAigMIANgEQgRgJgOgPQgbgcgGglQgCgMABgMQABgcANgaQANgZAXgRQAWgRAcgGQAdgFAbAHQAbAHAWATQAXATALAaQAOAigHAmQgHAngaAaQgZAYgiAJQApAVAQAsQAOAigJAmQgJAmgbAZQgaAagnAGIgIABQAOATAHAYQAHAbgFAbQgFAbgQAYQgRAXgYANQgZAOgcACQgNAAgNgBQAMAjgNAnQgKAegYAWQgZAWgfAIQgfAHgfgJQgggJgXgXIgDgEQgHAXgOATQgVAbghANQgiANghgHIgMgDIgCAHQgHAhgYAaQgZAaggAJIAAAAQALAdgFAeQgBALgDALIAUABQAjAFAaAWQAaAVAMAiQALAhgGAgQAQgCARACQAjAFAbAWQAZAVALAiQAMAigHAhQgHAhgXAaQgZAaggAJQgQAEgRAAQgRAAgRgEg");
	var mask_9_graphics_61 = new cjs.Graphics().p("AgJM2QgbgEgXgPQgWgPgPgXQgOgWgEgbQgEgbAIgaQAEgPAIgMQgPgBgPgEQgigJgYgZQgSgTgIgaQgJgZACgaIACgNQgYADgZgHQgigJgXgZQgSgTgJgaQgJgZACgaQACgPAEgNQgLAAgKgBQgagEgXgPQgXgPgOgXQgOgWgEgbQgEgcAHgZQAOgsAmgZQAQgLASgEIAAgCQgJgZACgaQADghAVgdQAVgcAfgNQAfgNAjAFIASADIACgLQAJgjAZgYQAYgYAjgIQAjgIAgALQAfAKAWAZQAHgXAOgUQARgWAYgMQAYgNAcgBQAMAAALABIAAAAQgIgdAGgeQAGgfASgXQASgWAZgMQAVgKAWgCIgGgKQgVghABglQACgkAXggQAXgfAigNIANgEQgRgJgOgOQgbgcgGgmQgCgMABgLQABgcANgaQANgaAXgRQAWgRAcgFQAdgGAbAHQAbAHAWATQAXATALAaQAOAigHAnQgHAngaAaQgZAYgiAIQApAWAQAsQAOAigJAmQgJAmgbAZQgaAZgnAHIgIABQAOASAHAYQAHAbgFAbQgFAcgQAXQgRAYgYANQgZANgcACQgNABgNgCQAMAkgNAnQgKAegYAXQgZAVgfAHQgfAHgfgJQgggJgXgVIgDgEQgHAXgOASQgVAbghAMQgiANghgGIgMgDIgCAGQgHAigYAZQgZAaggAJIAAAAQALAdgFAeQgBAMgDAKIAUACQAjAFAaAVQAaAWAMAiQALAggGAgQAQgCARADQAjAFAbAVQAZAWALAiQAMAhgHAhQgEAUgKASQAjAAAcATQAeATAQAiQAQAigFAjQgHAvgkAfQgUARgbAHQgRAFgRAAIgRgBg");
	var mask_9_graphics_62 = new cjs.Graphics().p("AhhOaQgagEgXgPQgXgPgOgXQgPgWgDgbQgEgbAHgaQANgsAngZQAagRAfgCIgHgKQgOgWgEgbQgEgbAIgaQAEgPAIgMQgPgBgPgEQgigJgYgZQgSgTgIgaQgJgZACgaIACgNQgYADgZgHQgigJgXgZQgSgTgJgaQgJgZACgaQACgPAEgNQgLAAgKgBQgagEgXgPQgXgPgOgXQgOgWgEgbQgEgcAHgZQAOgsAmgYQAQgLASgEIAAgCQgJgZACgaQADgiAVgdQAVgcAfgNQAfgNAjAFIASADIACgLQAJgjAZgYQAYgYAjgIQAjgIAgALQAfAKAWAZQAHgXAOgUQARgWAYgMQAYgNAcgBQAMAAALABIAAAAQgIgdAGgeQAGgfASgXQASgWAZgMQAVgKAWgCIgGgKQgVghABglQACgkAXggQAXgfAigNIANgEQgRgJgOgOQgbgcgGgmQgCgMABgLQABgcANgaQANgaAXgRQAWgRAcgFQAdgGAbAHQAbAHAWATQAXATALAaQAOAigHAnQgHAngaAaQgZAYgiAIQApAWAQAsQAOAigJAmQgJAmgbAZQgaAZgnAHIgIABQAOASAHAYQAHAbgFAbQgFAcgQAXQgRAYgYANQgZANgcACQgNABgNgCQAMAkgNAnQgKAegYAXQgZAWgfAHQgfAHgfgJQgggJgXgWIgDgEQgHAXgOATQgVAbghAMQgiANghgGIgMgDIgCAGQgHAigYAYQgZAaggAJIAAAAQALAdgFAeQgBAMgDAKIAUACQAjAFAaAVQAaAWAMAiQALAggGAgQAQgCARADQAjAFAbAVQAZAWALAiQAMAhgHAhQgEAUgKASQAjAAAcATQAeATAQAiQAQAigFAjQgHAvgkAfQgUARgbAHQgLADgLABQAHALAGANQAQAigFAjQgGAwglAfQgTARgaAHQgRAFgSAAIgSgBg");
	var mask_9_graphics_63 = new cjs.Graphics().p("AgqP6QgcgNgSgYQgRgXgGgeQgFgeAIgcQAJggAYgXQgLABgLgCQgagEgXgPQgXgPgOgXQgPgWgDgbQgEgbAHgaQANgsAngZQAagQAfgDIgHgKQgOgWgEgbQgEgbAIgaQAEgOAIgNQgPAAgPgFQgigJgYgZQgSgTgIgaQgJgZACgaIACgNQgYADgZgHQgigJgXgZQgSgTgJgaQgJgZACgaQACgOAEgOQgLABgKgCQgagEgXgPQgXgPgOgXQgOgWgEgbQgEgbAHgZQAOgsAmgZQAQgKASgFIAAgCQgJgZACgaQADgiAVgdQAVgcAfgNQAfgNAjAFIASAEIACgMQAJgjAZgYQAYgYAjgIQAjgIAgALQAfALAWAYQAHgXAOgUQARgWAYgMQAYgNAcgBQAMAAALACIAAgBQgIgdAGgeQAGgfASgXQASgWAZgMQAVgKAWgCIgGgKQgVghABglQACgkAXggQAXgfAigNIANgDQgRgJgOgPQgbgcgGgmQgCgMABgLQABgcANgaQANgaAXgRQAWgRAcgFQAdgGAbAHQAbAHAWATQAXATALAaQAOAigHAnQgHAngaAaQgZAYgiAJQApAVAQAsQAOAigJAmQgJAmgbAZQgaAZgnAHIgIABQAOATAHAXQAHAbgFAbQgFAcgQAXQgRAYgYANQgZANgcACQgNABgNgCQAMAkgNAnQgKAegYAXQgZAWgfAHQgfAHgfgJQgggJgXgWIgDgEQgHAXgOATQgVAbghAMQgiANghgGIgMgDIgCAGQgHAigYAZQgZAaggAJIAAAAQALAegFAcQgBAMgDAKIAUACQAjAFAaAVQAaAWAMAiQALAggGAgQAQgBARACQAjAFAbAVQAZAWALAiQAMAhgHAhQgEAVgKARQAjABAcASQAeATAQAiQAQAigFAjQgHAvgkAfQgUARgbAHQgLAEgLABQAHALAGAMQAQAigFAjQgGAsgeAdQAiAAAfASQAfASARAeQAQAfgCAkQgCAkgUAcQgRAYgbAOQgaAPgeAAIgEAAQgaAAgZgMg");
	var mask_9_graphics_64 = new cjs.Graphics().p("AhNRgQghgEgZgTQgagTgOgeQgNgeACggQADgiAWgdQAVgeAggMIALgEQgKgSgEgWQgFgeAIgcQAJggAYgWQgLAAgLgCQgagDgXgQQgXgPgOgWQgPgXgDgbQgEgbAHgZQANgsAngaQAagQAfgCIgHgKQgOgXgEgbQgEgbAIgZQAEgPAIgMQgPgBgPgEQgigKgYgZQgSgTgIgZQgJgZACgbIACgMQgYADgZgHQgigKgXgZQgSgTgJgZQgJgZACgbQACgOAEgNQgLAAgKgCQgagEgXgPQgXgOgOgWQgOgXgEgbQgEgbAHgaQAOgrAmgaQAQgKASgFIAAgBQgJgZACgbQADghAVgdQAVgdAfgNQAfgNAjAFIASAEIACgMQAJgjAZgXQAYgYAjgIQAjgIAgALQAfAKAWAZQAHgYAOgUQARgVAYgNQAYgMAcgBQAMAAALABIAAAAQgIgdAGgfQAGgeASgYQASgVAZgMQAVgKAWgDIgGgJQgVghABglQACglAXgfQAXggAigMIANgEQgRgJgOgPQgbgcgGglQgCgMABgMQABgcANgaQANgZAXgRQAWgRAcgGQAdgFAbAHQAbAHAWATQAXATALAaQAOAigHAmQgHAngaAaQgZAZgiAIQApAWAQArQAOAigJAmQgJAmgbAZQgaAagnAGIgIABQAOATAHAYQAHAbgFAbQgFAbgQAYQgRAXgYANQgZAOgcACQgNABgNgCQAMAkgNAnQgKAegYAWQgZAWgfAIQgfAHgfgJQgggJgXgXIgDgEQgHAYgOASQgVAbghANQgiANghgHIgMgCIgCAGQgHAhgYAaQgZAaggAJIAAAAQALAdgFAeQgBAMgDAKIAUABQAjAFAaAWQAaAVAMAhQALAhgGAgQAQgCARACQAjAFAbAWQAZAVALAiQAMAigHAhQgEAUgKARQAjABAcASQAeATAQAiQAQAigFAjQgHAwgkAeQgUASgbAHQgLADgLABQAHALAGANQAQAigFAjQgGAsgeAdQAiAAAfARQAfASARAfQAQAegCAkQgCAkgUAcQgRAYgbAPQgLAGgMAEQAFAJADALQAMAfgGAfQgFAfgVAaQgUAagdAMQgVAJgYAAIgRgBg");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(52).to({graphics:mask_9_graphics_52,x:202.884,y:149.854}).wait(1).to({graphics:mask_9_graphics_53,x:201.4116,y:161.3647}).wait(1).to({graphics:mask_9_graphics_54,x:197.0648,y:171.3134}).wait(1).to({graphics:mask_9_graphics_55,x:190.1685,y:179.2571}).wait(1).to({graphics:mask_9_graphics_56,x:179.5633,y:181.7373}).wait(1).to({graphics:mask_9_graphics_57,x:171.6208,y:186.7415}).wait(1).to({graphics:mask_9_graphics_58,x:167.4694,y:194.8486}).wait(1).to({graphics:mask_9_graphics_59,x:167.4694,y:202.9915}).wait(1).to({graphics:mask_9_graphics_60,x:167.4694,y:210.3415}).wait(1).to({graphics:mask_9_graphics_61,x:167.4694,y:219.6986}).wait(1).to({graphics:mask_9_graphics_62,x:167.4694,y:229.6986}).wait(1).to({graphics:mask_9_graphics_63,x:167.4694,y:240.4574}).wait(1).to({graphics:mask_9_graphics_64,x:167.4694,y:249.504}).wait(76));

	// lady03
	this.instance_17 = new lib.CachedBmp_7();
	this.instance_17.setTransform(128,146.85,0.5,0.5);
	this.instance_17._off = true;

	var maskedShapeInstanceList = [this.instance_17];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(52).to({_off:false},0).wait(88));

	// 筆２
	this.instance_18 = new lib.筆();
	this.instance_18.setTransform(172.05,298.55,1,1,0,0,0,74.9,182.5);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(34).to({_off:false},0).wait(1).to({x:181.15,y:287.35},0).wait(1).to({x:196.2,y:276.5},0).wait(1).to({x:214.4,y:268.45},0).wait(1).to({x:236.1,y:264.95},0).wait(1).to({x:257.1,y:268.8},0).wait(1).to({x:271.8,y:278.95},0).wait(1).to({x:290.35,y:288.4},0).wait(1).to({x:302.95,y:304.85},0).wait(1).to({x:306.1,y:323.05},0).wait(1).to({y:343.35},0).wait(1).to({x:304,y:364},0).wait(1).to({x:298.4,y:385.7},0).wait(1).to({x:285.45,y:392},0).wait(1).to({x:269.35,y:380.8},0).wait(1).to({x:252.2,y:371},0).wait(1).to({x:234.7,y:358.05},0).wait(1).to({x:226.7,y:352.45},0).to({_off:true},1).wait(88));

	// 遮色片２ (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_34 = new cjs.Graphics().p("AgwByQghgOgUgcQgUgbgCgkQgDgjAQgeQAMgWATgRQAUgQAXgHQAhgKAiAJQAjAJAXAYQAYAZAIAjQAIAigLAgQgLAhgbAWQgcAXgiAFQgJACgJAAQgYAAgYgLg");
	var mask_10_graphics_35 = new cjs.Graphics().p("AgwByQghgOgUgcQgUgbgCgkQgDgjAQgeQAMgWATgRQAUgQAXgHQAhgKAiAJQAjAJAXAYQAYAZAIAjQAIAigLAgQgLAhgbAWQgcAXgiAFQgJACgJAAQgYAAgYgLg");
	var mask_10_graphics_36 = new cjs.Graphics().p("AhuC1QghgOgUgcQgUgbgCgkQgDgkAQgeQAMgVATgRQAUgQAXgHQASgGATABQgCgZAIgZQAIgZASgTQARgTAYgLQAYgLAaAAQAaAAAYAKQAYALASATQAUAWAIAeQAIAdgGAdQgHAdgTAXQgUAYgbALQgXALgaAAQADAagJAYQgLAhgbAWQgbAXgiAFQgJACgJAAQgZAAgYgLg");
	var mask_10_graphics_37 = new cjs.Graphics().p("AjBDwQghgOgUgcQgUgbgCgkQgDgkAQgeQAMgWATgRQAUgQAXgHQASgGATABQgCgYAIgZQAIgZASgTQARgTAZgLQAYgLAaAAQAUAAAUAHQAAgfAOgbQAMgWATgQQAUgRAXgHQAhgKAjAJQAjAJAXAZQAYAYAIAjQAIAjgLAhQgLAggbAXQgcAXgiAFQgeAEgegKQAAAMgCANQgHAdgTAYQgUAYgbALQgXALgZAAQADAagJAYQgLAhgbAWQgcAXgiAFQgJACgJAAQgZAAgYgLg");
	var mask_10_graphics_38 = new cjs.Graphics().p("AkqEOQghgOgUgcQgUgcgCgkQgDgjAQgfQAMgWATgQQAUgRAXgHQASgFATAAQgCgZAIgYQAIgYASgUQARgTAZgLQAYgLAaAAQAVAAAVAIQgBgfAOgbQAMgWATgRQAUgQAWgHQAhgKAjAJQAjAJAXAYQADgNAGgOQAOgcAagSQAagTAfgEQAfgDAeALQAeAMAUAYQASAXAHAdQAHAegHAcQgHAcgUAXQgUAXgaALQgbALgegCQgegDgZgPQgNgIgLgLIgEAMQgLAhgbAWQgcAWgiAFQgeAFgdgLQABAOgDANQgHAdgTAXQgUAYgbAMQgXAKgaAAQADAagJAZQgLAggbAXQgcAXgiAFQgJABgJAAQgZAAgYgKg");
	var mask_10_graphics_39 = new cjs.Graphics().p("AmXEYQghgOgUgcQgUgbgDgkQgCgkAQgeQALgWAUgRQATgQAYgHQASgGATABQgCgZAIgYQAIgZARgTQASgTAYgLQAZgLAZAAQAWAAAUAHQAAgfAOgbQALgWAUgQQATgRAYgHQAggKAjAJQAjAJAWAYQAEgNAGgNQANgcAagTQAbgSAfgEQAfgEAdAMQAeAMAUAYIAIALIADgHQAOgcAagTQAbgSAegEQAfgEAeAMQAeAMAUAYQASAWAHAeQAHAdgHAcQgHAdgTAXQgUAWgbAMQgbALgegCQgegCgZgPQgYgOgQgYQgHARgNAPQgUAXgbALQgbALgegCQgegCgZgPQgNgIgLgLIgDAMQgMAggbAWQgbAXghAFQgeAFgegLQAAANgDANQgGAdgTAYQgUAYgbALQgXALgaAAQACAagIAYQgMAhgbAWQgcAXghAFQgJACgKAAQgYAAgYgLg");
	var mask_10_graphics_40 = new cjs.Graphics().p("AnwEYQghgOgUgcQgUgbgDgkQgCgkAQgeQALgWAUgRQATgQAYgHQASgGATABQgDgZAJgYQAIgZARgTQASgTAYgLQAZgLAZAAQAWAAAUAHQgBgfAPgbQALgWAUgQQATgRAYgHQAggKAjAJQAjAJAXAYQADgNAHgNQANgcAagTQAagSAfgEQAfgEAdAMQAeAMAUAYIAIALIADgHQAOgcAagTQAbgSAegEQAfgEAeAMQAeAMAUAYQAMAPAHASQAXgOAagDQAfgEAeAMQAeAMAUAYQASAXAHAdQAHAegHAcQgHAcgUAXQgUAXgaAKQgbALgegDQgfgCgYgPQgZgOgQgZQgGgJgEgKIgQAIQgbALgegCQgegCgZgPQgYgOgQgYQgHARgNAPQgUAXgbALQgbALgegCQgegCgYgPQgNgIgLgLIgDAMQgMAggbAWQgcAXghAFQgfAFgdgLQAAANgDANQgGAdgTAYQgUAYgbALQgYALgaAAQADAagIAYQgMAhgbAWQgcAXghAFQgKACgJAAQgYAAgYgLg");
	var mask_10_graphics_41 = new cjs.Graphics().p("ApDEYQghgOgUgcQgUgbgDgkQgCgkAQgeQALgWAUgRQATgQAYgHQASgGATABQgDgZAJgYQAIgZARgTQASgTAYgLQAZgLAZAAQAWAAAUAHQAAgfAOgbQALgWAUgQQATgRAYgHQAggKAjAJQAjAJAXAYQADgNAHgNQANgcAagTQAbgSAfgEQAfgEAcAMQAeAMAUAYIAIALIADgHQAOgcAagTQAbgSAegEQAfgEAeAMQAeAMAUAYQAMAPAHASQAXgOAagDQAfgEAeAMQAeAMAUAYQASAXAHAdQADAPAAAPQANgEAPgCQAagDAZAIQAZAIAUARQAUASALAXQAMAbgBAcQgBAegNAZQgOAagaASQgZASgeADQgdAEgdgLQgdgKgUgWQgUgWgIgeQgFgRAAgSQgYAJgagDQgfgCgYgPQgZgOgQgZQgGgJgEgKIgQAIQgbALgegCQgegCgZgPQgYgOgQgYQgHARgNAPQgUAXgbALQgaALgegCQgegCgZgPQgNgIgLgLIgDAMQgMAggbAWQgcAXghAFQgfAFgdgLQAAANgDANQgGAdgTAYQgUAYgbALQgYALgaAAQADAagIAYQgMAhgbAWQgcAXghAFQgKACgJAAQgYAAgYgLg");
	var mask_10_graphics_42 = new cjs.Graphics().p("AqSEYQghgOgUgcQgUgbgCgkQgDgkAQgeQAMgWATgRQAUgQAXgHQASgGATABQgCgZAIgYQAIgZASgTQARgTAZgLQAYgLAaAAQAVAAAUAHQAAgfAOgbQAMgWATgQQAUgRAXgHQAhgKAjAJQAiAJAYAYQADgNAGgNQAOgcAagTQAagSAfgEQAfgEAeAMQAeAMAUAYIAIALIADgHQAMgcAbgTQAagSAfgEQAegEAfAMQAeAMATAYQANAPAHASQAWgOAbgDQAfgEAeAMQAeAMATAYQATAXAHAdQADAPAAAPQANgEAOgCQAbgDAZAIQAZAIATARQAUASALAXQAMAbAAAcIgBAGQAfgIAhAIQAjAJAXAZQAYAYAIAjQAIAjgLAhQgLAggbAXQgcAXgiAFQgiAFghgOQghgOgUgcQgUgcgCgkIAAgSIgRADQgeAEgcgLQgegKgUgWQgUgWgIgeQgFgRAAgSQgYAJgagDQgegCgZgPQgZgOgQgZQgGgJgEgKIgPAIQgbALgegCQgegCgZgPQgYgOgQgYQgHARgNAPQgUAXgaALQgbALgegCQgegCgZgPQgOgIgKgLIgEAMQgLAggbAWQgcAXgiAFQgeAFgegLQAAANgCANQgHAdgTAYQgUAYgbALQgXALgaAAQADAagJAYQgLAhgbAWQgcAXgiAFQgJACgJAAQgZAAgYgLg");
	var mask_10_graphics_43 = new cjs.Graphics().p("AKNFmQgfgCgZgQQgZgPgQgZQgQgZgDgdQgBgXAGgXQgQgCgRgHQghgOgUgcQgUgcgCgkIAAgSIgRADQgeAEgcgLQgegKgUgWQgUgWgIgdQgFgRABgSQgYAIgbgCQgegCgZgPQgZgPgQgZQgFgJgFgKIgPAIQgbALgegCQgegCgYgPQgYgPgQgYQgIASgNAPQgUAXgaALQgbALgegCQgegCgZgPQgNgIgLgLIgEAMQgLAggbAXQgcAXgiAFQgeAFgegMQABAOgDANQgHAcgTAYQgUAYgbALQgXALgagBQADAbgJAYQgLAhgbAWQgcAXgiAFQgiAGghgPQghgOgUgcQgUgbgCgkQgDgkAQgeQAMgWATgRQAUgPAXgHQATgGASABQgCgZAIgZQAIgZASgTQARgTAZgLQAYgLAaAAQAVAAAVAHQgBgfAOgbQAMgWATgQQAUgRAXgHQAhgKAjAJQAjAJAXAYQADgNAGgNQAOgcAagTQAagSAfgEQAfgEAeAMQAeAMAUAYIAIAKIADgGQANgcAbgTQAZgSAfgEQAegEAfAMQAeAMATAYQANAPAHASQAXgOAagDQAfgEAeAMQAeAMATAYQATAXAHAdQADAPAAAPQANgFAOgBQAbgDAZAIQAZAIATARQAUASALAXQAMAbAAAdIAAAGQAegIAhAIQAjAJAXAZQAYAXAIAjQAIAggJAeQASACAQAHQAYALARATQAUAVAJAeQAIAegHAdQgGAdgTAYQgUAXgbAMQgXAKgaAAIgJAAg");
	var mask_10_graphics_44 = new cjs.Graphics().p("AJwHEQgdgLgUgWQgUgVgJgeQgIgeAHgdQAFgaAQgVQAKgPAOgKQgXgPgPgYQgQgZgDgdQgCgXAGgWQgQgDgQgHQghgOgUgcQgUgbgDgjIAAgTIgRAEQgdAEgdgLQgdgLgUgWQgUgWgIgdQgFgSAAgRQgYAIgagCQgfgCgYgPQgZgPgQgaQgGgJgEgKIgQAIQgbAMgegDQgegCgYgPQgYgOgQgYQgHARgNAQQgUAXgbALQgbALgegCQgegDgZgPQgNgIgLgLIgDAMQgMAhgbAWQgcAXghAFQgfAFgdgLQAAANgDAOQgGAdgTAXQgUAYgbAMQgYAKgaAAQADAZgIAZQgMAggbAXQgcAXghAFQgiAFghgOQghgOgUgcQgUgcgDgkQgCgiAQgfQALgWAUgQQATgRAYgHQASgFATAAQgDgZAJgZQAIgYARgUQASgTAYgLQAZgLAZAAQAWAAAUAHQAAgeAOgbQALgWAUgRQATgQAYgHQAggKAjAJQAjAJAXAYQADgOAHgNQANgcAagSQAbgTAfgEQAfgDAdALQAeAMAUAYIAIALIADgHQAOgbAagTQAagTAegEQAfgDAeAMQAeAMAUAXQAMAPAHASQAXgOAagDQAfgDAeAMQAeAMAUAYQASAWAHAeQADAPAAAOQANgEAPgCQAagDAZAIQAZAIAUASQAUARALAYQAMAagBAeIAAAFQAegIAhAJQAjAJAYAYQAYAZAIAjQAHAfgIAdQARACAQAHQAZALARATQAUAWAIAeQAIAdgGAdQgHAdgTAYQgJALgKAIIAPAMQAUARALAYQAMAagBAeQgBAdgNAaQgOAagaASQgZARgeAEIgQABQgVAAgVgIg");
	var mask_10_graphics_45 = new cjs.Graphics().p("AJxItQgdgLgVgVQgUgWgIgeQgIgdAGgeQAFgZAQgWQAOgUAUgMQgOgJgLgMQgUgVgJgeQgIgeAHgdQAFgaAQgVQAKgPAOgKQgXgPgPgYQgQgZgDgdQgCgXAGgVQgQgDgQgHQghgOgUgcQgUgbgDgkIAAgTIgRAEQgdAEgdgLQgdgLgUgWQgUgWgIgdQgFgSAAgRQgYAIgagCQgfgCgYgPQgZgPgQgaQgGgJgEgKIgQAIQgbAMgegDQgegCgYgPQgYgOgQgYQgHARgNAQQgUAXgbALQgbALgegCQgegDgZgPQgNgIgLgLIgDAMQgMAhgbAWQgcAXghAFQgfAFgdgLQAAANgDAOQgGAdgTAXQgUAYgbAMQgYAKgaAAQADAagIAZQgMAggbAXQgcAWghAFQgiAFghgOQghgNgUgcQgUgcgDgkQgCgjAQgfQALgWAUgQQATgRAYgHQASgFATAAQgDgZAJgZQAIgYARgUQASgTAYgLQAZgLAZAAQAWAAAUAHQAAgfAOgaQALgWAUgRQATgQAYgHQAggKAjAJQAjAJAXAYQADgOAHgNQANgcAagSQAbgTAfgEQAfgDAdALQAeAMAUAYIAIALIADgHQAOgbAagTQAagTAegEQAfgDAeAMQAeAMAUAXQAMAPAHASQAXgOAagDQAfgDAeAMQAeAMAUAYQASAWAHAeQADAPAAAOQANgEAPgCQAagDAZAIQAZAIAUASQAUARALAYQAMAagBAeIAAAFQAegIAhAJQAjAJAYAYQAYAZAIAjQAHAfgIAeQARACAQAHQAZALARATQAUAWAIAeQAIAcgGAdQgHAdgTAYQgJALgKAIIAPAMQAUARALAYQAMAagBAeQgBAdgNAaQgOAagaASIgDACIAPALQAUASALAXQAMAbgBAdQgBAegNAZQgOAbgZARQgaASgdAEIgRABQgVAAgUgIg");
	var mask_10_graphics_46 = new cjs.Graphics().p("AJ5KkQgjAAgcgRQgdgRgRgeQgQgeABghQABghASgeQASgdAegQQAKgGAMgDQgNgIgKgLQgUgVgIgeQgIgeAGgdQAFgaAQgVQAOgUAUgNQgOgIgLgMQgUgWgJgeQgIgdAHgeQAFgZAQgWQAKgOAOgKQgXgPgPgXQgQgZgDgdQgCgYAGgWQgQgCgQgHQghgOgUgcQgUgcgDgkIAAgSIgRADQgdAEgdgLQgdgKgUgWQgUgWgIgeQgFgSAAgRQgYAIgagCQgfgCgYgPQgZgPgQgZQgGgKgEgJIgQAIQgbALgegCQgegCgYgPQgYgPgQgYQgHASgNAPQgUAXgbALQgbALgegCQgegCgZgPQgNgIgLgLIgDAMQgMAggbAXQgcAXghAFQgfAFgdgMQAAAOgDANQgGAdgTAYQgUAYgbALQgYALgagBQADAagIAZQgMAhgbAWQgcAXghAFQgiAGghgPQghgOgUgcQgUgbgDgkQgCgkAQgeQALgWAUgRQATgQAYgHQASgGATAAQgDgYAJgZQAIgZARgTQASgTAYgLQAZgLAZAAQAWAAAUAHQAAgfAOgbQALgWAUgQQATgRAYgHQAggKAjAJQAjAJAXAYQADgNAHgNQANgcAagTQAbgSAfgEQAfgEAdAMQAeAMAUAYIAIAKIADgGQAOgcAagTQAagSAegEQAfgEAeAMQAeAMAUAYQAMAPAHASQAXgOAagDQAfgEAeAMQAeAMAUAYQASAXAHAdQADAPAAAPQANgFAPgBQAagDAZAIQAZAIAUARQAUASALAXQAMAbgBAdIAAAGQAegIAhAIQAjAJAYAZQAYAYAIAjQAHAggIAdQARADAQAHQAZALARATQAUAVAIAeQAIAegGAdQgHAdgTAYQgJAJgKAJIAPALQAUASALAXQAMAbgBAdQgBAegNAZQgOAagaASIgDACIAPAMQAUARALAYQAMAagBAeQgBAdgNAaQgOAagZASQgRALgSAGQAYARAPAbQAQAbAAAeQABAhgRAfQgRAegdARQgcAQghAAIgCAAg");
	var mask_10_graphics_47 = new cjs.Graphics().p("AI1MGQgegCgZgPQgZgPgQgaQgQgZgDgdQgDgkAPgfQAOgcAagSQAQgMASgFQgHgJgFgJQgQgeABghQABghASgeQASgdAegQQAKgGAMgDQgNgIgKgLQgUgVgIgeQgIgeAGgdQAFgaAQgVQAOgUAUgNQgOgIgLgMQgUgWgJgeQgIgdAHgdQAFgZAQgWQAKgOAOgKQgXgPgPgYQgQgZgDgdQgCgYAGgWQgQgCgQgHQghgOgUgcQgUgcgDgkIAAgSIgRADQgdAEgdgLQgdgKgUgWQgUgWgIgeQgFgRAAgSQgYAIgagCQgfgCgYgPQgZgPgQgZQgGgKgEgJIgQAIQgbALgegCQgegCgYgPQgYgPgQgYQgHASgNAPQgUAXgbALQgbALgegCQgegCgZgPQgNgIgLgLIgDAMQgMAggbAXQgcAXghAFQgfAFgdgMQAAAOgDANQgGAdgTAYQgUAYgbALQgYALgagBQADAbgIAYQgMAhgbAWQgcAXghAFQgiAGghgPQghgOgUgcQgUgbgDgkQgCgkAQgeQALgWAUgRQATgQAYgHQASgGATAAQgDgYAJgZQAIgZARgTQASgTAYgLQAZgLAZAAQAWAAAUAHQAAgfAOgbQALgWAUgQQATgRAYgHQAggKAjAJQAjAJAXAYQADgNAHgNQANgcAagTQAbgSAfgEQAfgEAdAMQAeAMAUAYIAIAKIADgGQAOgcAagTQAagSAegEQAfgEAeAMQAeAMAUAYQAMAPAHASQAXgOAagDQAfgEAeAMQAeAMAUAYQASAXAHAdQADAPAAAPQANgFAPgBQAagDAZAIQAZAIAUARQAUASALAXQAMAbgBAdIAAAGQAegIAhAIQAjAJAYAZQAYAYAIAjQAHAggIAdQARADAQAHQAZALARATQAUAVAIAeQAIAegGAdQgHAdgTAYQgJAKgKAJIAPALQAUASALAXQAMAbgBAcQgBAegNAZQgOAagaASIgDACIAPAMQAUARALAYQAMAagBAeQgBAdgNAaQgOAagZASQgRALgSAGQAYARAPAbQAQAbAAAeQABAhgRAfQgRAegdARQgMAHgMAEQARAVAGAcQAHAegHAcQgHAcgUAXQgTAXgbALQgWAJgYAAIgLAAg");
	var mask_10_graphics_48 = new cjs.Graphics().p("AI1MGQgegCgZgPQgZgPgQgaQgIgLgEgMQgOAMgRAHQgbAMgegCQgfgCgZgQQgZgPgQgZQgQgZgDgeQgCgZAIgaQAJgZARgTQARgTAZgLQAYgLAaAAQAaAAAZALQAYALARATQARASAIAXIAIgGQAQgMASgFQgHgJgFgJQgQgeABghQABghASgeQASgdAegQQAKgGAMgDQgNgIgKgLQgUgVgIgeQgIgeAGgdQAFgaAQgVQAOgUAUgNQgOgIgLgMQgUgWgJgeQgIgdAHgdQAFgZAQgWQAKgOAOgKQgXgPgPgYQgQgZgDgdQgCgYAGgWQgQgCgQgHQghgOgUgcQgUgcgDgkIAAgSIgRADQgdAEgdgLQgdgKgUgWQgUgWgIgeQgFgRAAgSQgYAIgagCQgfgCgYgPQgZgPgQgZQgGgKgEgJIgQAIQgbALgegCQgegCgYgPQgYgPgQgYQgHASgNAPQgUAXgbALQgbALgegCQgegCgZgPQgNgIgLgLIgDAMQgMAggbAXQgcAXghAFQgfAFgdgMQAAAOgDANQgGAdgTAYQgUAYgbALQgYALgagBQADAbgIAYQgMAhgbAWQgcAXghAFQgiAGghgPQghgOgUgcQgUgbgDgkQgCgkAQgeQALgWAUgRQATgQAYgHQASgGATAAQgDgYAJgZQAIgZARgTQASgTAYgLQAZgLAZAAQAWAAAUAHQAAgfAOgbQALgWAUgQQATgRAYgHQAggKAjAJQAjAJAXAYQADgNAHgNQANgcAagTQAbgSAfgEQAfgEAdAMQAeAMAUAYIAIAKIADgGQAOgcAagTQAagSAegEQAfgEAeAMQAeAMAUAYQAMAPAHASQAXgOAagDQAfgEAeAMQAeAMAUAYQASAXAHAdQADAPAAAPQANgFAPgBQAagDAZAIQAZAIAUARQAUASALAXQAMAbgBAdIAAAGQAegIAhAIQAjAJAYAZQAYAYAIAjQAHAggIAdQARADAQAHQAZALARATQAUAVAIAeQAIAegGAdQgHAdgTAYQgJAKgKAJIAPALQAUASALAXQAMAbgBAcQgBAegNAZQgOAagaASIgDACIAPAMQAUARALAYQAMAagBAeQgBAdgNAaQgOAagZASQgRALgSAGQAYARAPAbQAQAbAAAeQABAhgRAfQgRAegdARQgMAHgMAEQARAVAGAcQAHAegHAcQgHAcgUAXQgTAXgbALQgWAJgYAAIgLAAg");
	var mask_10_graphics_49 = new cjs.Graphics().p("AI1MGQgegCgZgPQgZgPgQgaQgIgLgEgMQgOAMgRAHQgbAMgegCQgfgCgZgQQgZgPgQgZQgQgZgDgeQgKADgLACQgdAEgdgLQgdgLgUgVQgUgWgIgeQgIgeAGgdQAFgZAQgWQAQgWAWgNQAXgNAagDQAagDAZAIQAZAIAUASQAUASALAXQAJATACAVQASgFASAAQAaAAAZALQAYALARATQARASAIAXIAIgGQAQgMASgFQgHgJgFgJQgQgeABghQABghASgeQASgdAegQQAKgGAMgDQgNgIgKgLQgUgVgIgeQgIgeAGgdQAFgaAQgVQAOgUAUgNQgOgIgLgMQgUgWgJgeQgIgdAHgdQAFgZAQgWQAKgOAOgKQgXgPgPgYQgQgZgDgdQgCgYAGgWQgQgCgQgHQghgOgUgcQgUgcgDgkIAAgSIgRADQgdAEgdgLQgdgKgUgWQgUgWgIgeQgFgRAAgSQgYAIgagCQgfgCgYgPQgZgPgQgZQgGgKgEgJIgQAIQgbALgegCQgegCgYgPQgYgPgQgYQgHASgNAPQgUAXgbALQgbALgegCQgegCgZgPQgNgIgLgLIgDAMQgMAggbAXQgcAXghAFQgfAFgdgMQAAAOgDANQgGAdgTAYQgUAYgbALQgYALgagBQADAbgIAYQgMAhgbAWQgcAXghAFQgiAGghgPQghgOgUgcQgUgbgDgkQgCgkAQgeQALgWAUgRQATgQAYgHQASgGATAAQgDgYAJgZQAIgZARgTQASgTAYgLQAZgLAZAAQAWAAAUAHQAAgfAOgbQALgWAUgQQATgRAYgHQAggKAjAJQAjAJAXAYQADgNAHgNQANgcAagTQAbgSAfgEQAfgEAdAMQAeAMAUAYIAIAKIADgGQAOgcAagTQAagSAegEQAfgEAeAMQAeAMAUAYQAMAPAHASQAXgOAagDQAfgEAeAMQAeAMAUAYQASAXAHAdQADAPAAAPQANgFAPgBQAagDAZAIQAZAIAUARQAUASALAXQAMAbgBAdIAAAGQAegIAhAIQAjAJAYAZQAYAYAIAjQAHAggIAdQARADAQAHQAZALARATQAUAVAIAeQAIAegGAdQgHAdgTAYQgJAKgKAJIAPALQAUASALAXQAMAbgBAcQgBAegNAZQgOAagaASIgDACIAPAMQAUARALAYQAMAagBAeQgBAdgNAaQgOAagZASQgRALgSAGQAYARAPAbQAQAbAAAeQABAhgRAfQgRAegdARQgMAHgMAEQARAVAGAcQAHAegHAcQgHAcgUAXQgTAXgbALQgWAJgYAAIgLAAg");
	var mask_10_graphics_50 = new cjs.Graphics().p("AI1MGQgegCgZgPQgZgPgQgaQgIgLgEgMQgOAMgRAHQgbAMgegCQgfgCgZgQQgZgPgQgZQgQgZgDgeQgKADgLACQgdAEgdgLQgdgLgUgVQgUgWgIgeQgGgWABgWIgFADQgcALgegBQgegCgZgQQgZgPgQgZQgQgZgDgdQgCgaAIgZQAIgaARgTQASgTAYgLQAYgLAZAAQAaAAAYALQAZAKARATQAUAWAJAeQAGAVgCAXQAUgKAWgDQAagDAZAIQAZAIAUASQAUASALAXQAJATACAVQASgFASAAQAaAAAZALQAYALARATQARASAIAXIAIgGQAQgMASgFQgHgJgFgJQgQgeABghQABghASgeQASgdAegQQAKgGAMgDQgNgIgKgLQgUgVgIgeQgIgeAGgdQAFgaAQgVQAOgUAUgNQgOgIgLgMQgUgWgJgeQgIgdAHgdQAFgZAQgWQAKgOAOgKQgXgPgPgYQgQgZgDgdQgCgYAGgWQgQgCgQgHQghgOgUgcQgUgcgDgkIAAgSIgRADQgdAEgdgLQgdgKgUgWQgUgWgIgeQgFgRAAgSQgYAIgagCQgfgCgYgPQgZgPgQgZQgGgKgEgJIgQAIQgbALgegCQgegCgYgPQgYgPgQgYQgHASgNAPQgUAXgbALQgbALgegCQgegCgZgPQgNgIgLgLIgDAMQgMAggbAXQgcAXghAFQgfAFgdgMQAAAOgDANQgGAdgTAYQgUAYgbALQgYALgagBQADAbgIAYQgMAhgbAWQgcAXghAFQgiAGghgPQghgOgUgcQgUgbgDgkQgCgkAQgeQALgWAUgRQATgQAYgHQASgGATAAQgDgYAJgZQAIgZARgTQASgTAYgLQAZgLAZAAQAWAAAUAHQAAgfAOgbQALgWAUgQQATgRAYgHQAggKAjAJQAjAJAXAYQADgNAHgNQANgcAagTQAbgSAfgEQAfgEAdAMQAeAMAUAYIAIAKIADgGQAOgcAagTQAagSAegEQAfgEAeAMQAeAMAUAYQAMAPAHASQAXgOAagDQAfgEAeAMQAeAMAUAYQASAXAHAdQADAPAAAPQANgFAPgBQAagDAZAIQAZAIAUARQAUASALAXQAMAbgBAdIAAAGQAegIAhAIQAjAJAYAZQAYAYAIAjQAHAggIAdQARADAQAHQAZALARATQAUAVAIAeQAIAegGAdQgHAdgTAYQgJAKgKAJIAPALQAUASALAXQAMAbgBAcQgBAegNAZQgOAagaASIgDACIAPAMQAUARALAYQAMAagBAeQgBAdgNAaQgOAagZASQgRALgSAGQAYARAPAbQAQAbAAAeQABAhgRAfQgRAegdARQgMAHgMAEQARAVAGAcQAHAegHAcQgHAcgUAXQgTAXgbALQgWAJgYAAIgLAAg");
	var mask_10_graphics_51 = new cjs.Graphics().p("AI1MGQgegCgZgPQgZgPgQgaQgIgLgEgMQgOAMgRAHQgbAMgegCQgfgCgZgQQgZgPgQgZQgQgZgDgeQgKADgLACQgdAEgdgLQgdgLgUgVQgUgWgIgeQgGgWABgWIgFADQgcALgegBQgegCgZgQQgZgPgQgZQgPgYgEgbQgOACgOgBQgegCgZgPQgZgQgQgZQgQgagDgdQgDgjAPgfQAOgcAagSQAbgTAfgEQAegDAeAMQAeAMAUAYQASAWAHAeIACAMQAJgCAJAAQAaAAAYALQAZAKARATQAUAWAJAeQAGAVgCAXQAUgKAWgDQAagDAZAIQAZAIAUASQAUASALAXQAJATACAVQASgFASAAQAaAAAZALQAYALARATQARASAIAXIAIgGQAQgMASgFQgHgJgFgJQgQgeABghQABghASgeQASgdAegQQAKgGAMgDQgNgIgKgLQgUgVgIgeQgIgeAGgdQAFgaAQgVQAOgUAUgNQgOgIgLgMQgUgWgJgeQgIgdAHgdQAFgZAQgWQAKgOAOgKQgXgPgPgYQgQgZgDgdQgCgYAGgWQgQgCgQgHQghgOgUgcQgUgcgDgkIAAgSIgRADQgdAEgdgLQgdgKgUgWQgUgWgIgeQgFgRAAgSQgYAIgagCQgfgCgYgPQgZgPgQgZQgGgKgEgJIgQAIQgbALgegCQgegCgYgPQgYgPgQgYQgHASgNAPQgUAXgbALQgbALgegCQgegCgZgPQgNgIgLgLIgDAMQgMAggbAXQgcAXghAFQgfAFgdgMQAAAOgDANQgGAdgTAYQgUAYgbALQgYALgagBQADAbgIAYQgMAhgbAWQgcAXghAFQgiAGghgPQghgOgUgcQgUgbgDgkQgCgkAQgeQALgWAUgRQATgQAYgHQASgGATAAQgDgYAJgZQAIgZARgTQASgTAYgLQAZgLAZAAQAWAAAUAHQAAgfAOgbQALgWAUgQQATgRAYgHQAggKAjAJQAjAJAXAYQADgNAHgNQANgcAagTQAbgSAfgEQAfgEAdAMQAeAMAUAYIAIAKIADgGQAOgcAagTQAagSAegEQAfgEAeAMQAeAMAUAYQAMAPAHASQAXgOAagDQAfgEAeAMQAeAMAUAYQASAXAHAdQADAPAAAPQANgFAPgBQAagDAZAIQAZAIAUARQAUASALAXQAMAbgBAdIAAAGQAegIAhAIQAjAJAYAZQAYAYAIAjQAHAggIAdQARADAQAHQAZALARATQAUAVAIAeQAIAegGAdQgHAdgTAYQgJAKgKAJIAPALQAUASALAXQAMAbgBAcQgBAegNAZQgOAagaASIgDACIAPAMQAUARALAYQAMAagBAeQgBAdgNAaQgOAagZASQgRALgSAGQAYARAPAbQAQAbAAAeQABAhgRAfQgRAegdARQgMAHgMAEQARAVAGAcQAHAegHAcQgHAcgUAXQgTAXgbALQgWAJgYAAIgLAAg");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:null,x:0,y:0}).wait(34).to({graphics:mask_10_graphics_34,x:197.1765,y:114.8875}).wait(1).to({graphics:mask_10_graphics_35,x:197.1765,y:114.8875}).wait(1).to({graphics:mask_10_graphics_36,x:203.3617,y:108.1506}).wait(1).to({graphics:mask_10_graphics_37,x:211.6765,y:102.2625}).wait(1).to({graphics:mask_10_graphics_38,x:222.1646,y:99.3098}).wait(1).to({graphics:mask_10_graphics_39,x:233.1081,y:98.2611}).wait(1).to({graphics:mask_10_graphics_40,x:242.0396,y:98.2611}).wait(1).to({graphics:mask_10_graphics_41,x:250.3341,y:98.2611}).wait(1).to({graphics:mask_10_graphics_42,x:258.1765,y:98.2611}).wait(1).to({graphics:mask_10_graphics_43,x:263.3538,y:104.9753}).wait(1).to({graphics:mask_10_graphics_44,x:263.8341,y:115.1388}).wait(1).to({graphics:mask_10_graphics_45,x:263.8341,y:125.6407}).wait(1).to({graphics:mask_10_graphics_46,x:263.8341,y:136.7862}).wait(1).to({graphics:mask_10_graphics_47,x:263.8341,y:146.5836}).wait(1).to({graphics:mask_10_graphics_48,x:263.8341,y:146.5836}).wait(1).to({graphics:mask_10_graphics_49,x:263.8341,y:146.5836}).wait(1).to({graphics:mask_10_graphics_50,x:263.8341,y:146.5836}).wait(1).to({graphics:mask_10_graphics_51,x:263.8341,y:146.5836}).wait(89));

	// lady02
	this.instance_19 = new lib.CachedBmp_10();
	this.instance_19.setTransform(195.3,77.3,0.5,0.5);
	this.instance_19._off = true;

	var maskedShapeInstanceList = [this.instance_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(34).to({_off:false},0).wait(106));

	// 筆１
	this.instance_20 = new lib.筆();
	this.instance_20.setTransform(75.05,396.45,1,1,0,0,0,74.9,182.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(1).to({x:67.05,y:384.95},0).wait(1).to({x:59.55,y:372.4},0).wait(1).to({x:54.6,y:358},0).wait(1).to({x:51,y:343.15},0).wait(1).to({y:326.5},0).wait(1).to({x:53.7,y:308.95},0).wait(1).to({x:62.7,y:294.55},0).wait(1).to({x:76.2,y:284.65},0).wait(1).to({x:91.5,y:277},0).wait(1).to({x:109.05,y:276.1},0).wait(1).to({x:123.9,y:277.45},0).wait(1).to({x:141,y:284.2},0).wait(1).to({x:156.3,y:295},0).wait(1).to({x:168.45,y:308.5},0).wait(1).to({x:178.8,y:321.1},0).wait(1).to({x:188.7,y:334.15},0).wait(1).to({x:201.3,y:350.8},0).wait(1).to({x:210.75,y:365.65},0).wait(1).to({x:221.55,y:381.4},0).wait(1).to({x:233.7,y:396.7},0).wait(1).to({x:246.3,y:412.45},0).wait(1).to({x:256.2,y:425.95},0).wait(1).to({x:270.15,y:440.8},0).wait(1).to({x:284.55,y:453.85},0).wait(1).to({x:301.2,y:468.25},0).wait(1).to({x:320.55,y:479.95},0).wait(1).to({x:341.7,y:486.25},0).wait(1).to({x:356.1,y:475},0).wait(1).to({x:352.95,y:455.2},0).wait(1).to({x:344.4,y:441.25},0).wait(1).to({x:333.6,y:426.85},0).wait(1).to({x:321,y:411.1},0).wait(1).to({x:310.65,y:397.6},0).to({_off:true},1).wait(106));

	// 遮色片１ (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	var mask_11_graphics_0 = new cjs.Graphics().p("Ag1BwQgegPgTgbQgTgbgCgiQgCghAOgdQAPggAfgTQAfgUAjAAQAZABAYAKQAZALAQATQASASAIAZQAJAZgCAYQgCAYgKAVQgOAdgcATQgcAUghACIgJABQgaAAgbgNg");
	var mask_11_graphics_1 = new cjs.Graphics().p("AgLCsQgegOgTgbQgSgbgDgiIAAgMIgOgGQgfgPgTgbQgSgagDgiQgCghAOgeQAPggAggTQAfgUAjAAQAaABAXAKQAYALARATQARATAJAYQAIAVgBAWIALAFQAYALARASQARATAJAXQAIAZgCAaQgBAXgLAVQgOAdgcAUQgcATggADIgJAAQgcAAgagNg");
	var mask_11_graphics_2 = new cjs.Graphics().p("AgLCsQgegOgTgbQgSgbgDgiIAAgMIgOgGQgfgPgTgbQgSgagDgiQgCghAOgeQAPggAggTQAfgUAjAAQAaABAXAKQAYALARATQARATAJAYQAIAVgBAWIALAFQAYALARASQARATAJAXQAIAZgCAaQgBAXgLAVQgOAdgcAUQgcATggADIgJAAQgcAAgagNg");
	var mask_11_graphics_3 = new cjs.Graphics().p("AAdDuQgdgOgTgbQgSgbgDgiIAAgMIgOgGQgfgPgTgbQgSgbgDgiQgBgNACgLIgMgFQgigRgSgeQgRgcgBghQgBgkAUggQAUghAggPQAhgQAmAGQAlAFAbAYQAbAXAKAlQAHAZgDAYIAIADQAYALARATQARATAJAYQAHAVAAAVIALAFQAYALARASQARATAJAYQAIAZgCAaQgBAXgLAVQgOAdgcAUQgcATggADIgKAAQgbAAgbgNg");
	var mask_11_graphics_4 = new cjs.Graphics().p("AAzE4QgfgPgSgbQgSgbgCgiIgBgLIgOgGQgegPgTgbQgTgbgCgiQgBgNABgMIgLgFQgigRgTgfQgRgbgBggQAAgaAKgYQgOgJgKgMQgSgWgHgeQgHgdAGgcQAHgaARgWQARgWAYgMQAXgNAcgBQAcgBAZAKQAYAKATAVQASAUAJAZQAIAbgDAcQgCAQgGAPIAKAHQAbAYAKAkQAHAagCAYIAHADQAYALARASQASASAIAZQAIAVgBAWIALAEQAYALARATQARASAJAZQAJAZgCAZQgCAYgKAVQgOAdgcATQgcAUghACIgJABQgcAAgagNg");
	var mask_11_graphics_5 = new cjs.Graphics().p("AA9GNQgegPgTgbQgRgbgDgiIAAgLIgOgGQgfgPgTgbQgSgbgDgiQgBgNACgMIgMgFQgigRgSgfQgRgcgBggQgBgaAKgXQgNgJgKgMQgTgWgHgeQgHgdAHgcQAGgYAPgVQgMgKgKgOQgZgjACgqQABgqAcghQAUgYAggMQAfgMAgAFQAgAFAaAVQAbAVAKAfQAOAjgJAnQgGAagOATIAMALQASAUAIAZQAJAbgEAcQgCAQgFAPIAJAHQAcAYAKAkQAHAZgDAYIAIADQAYALARASQARATAJAZQAHAVAAAWIALAEQAYALARATQARASAJAZQAIAZgCAZQgBAYgLAVQgOAdgcATQgcAUggACIgKABQgbAAgbgNg");
	var mask_11_graphics_6 = new cjs.Graphics().p("AA9HkQgegPgTgbQgRgbgDgiIAAgMIgOgFQgfgPgTgbQgSgbgDgiQgBgNACgMIgMgFQgigRgSgfQgRgcgBggQgBgaAKgYQgNgJgKgMQgTgWgHgeQgHgcAHgcQAGgYAPgVQgMgKgKgOQgZgjACgqQABgqAcghIAGgHQgOgOgJgTQgPggAEglQAFglAXgcQAWgbAkgLQAkgMAiAKQAjAJAZAcQAYAcAFAjQAGAkgOAiQgKAVgPAQQASASAIAYQAOAjgJAnQgGAagOATIAMALQASAUAIAZQAJAbgEAcQgCAPgFAPIAJAHQAcAYAKAkQAHAagDAYIAIADQAYALARASQARATAJAZQAHAVAAAWIALAEQAYALARATQARASAJAZQAIAZgCAZQgBAYgLAVQgOAdgcATQgcAUggACIgKABQgbAAgbgNg");
	var mask_11_graphics_7 = new cjs.Graphics().p("AA9I2QgegOgTgbQgRgbgDgiIAAgMIgOgGQgfgPgTgbQgSgbgDgiQgBgNACgMIgMgFQgigRgSgeQgRgcgBghQgBgZAKgYQgNgJgKgNQgTgWgHgdQgHgeAHgcQAGgYAPgUQgMgKgKgNQgZgjACgqQABgqAcghIAGgHQgOgOgJgTQgPggAEglQAFgmAXgbQANgRATgLIgEgIQgOghAFgiQAFgiAXgbQAXgcAggLQAggLAjAHQAjAHAYAXQAZAYAKAiQAJAjgJAhQgGATgLAQQgPAZgZAOQAIARADAUQAGAjgOAiQgKAWgPAPQASASAIAYQAOAjgJAoQgGAZgOATIAMALQASAUAIAZQAJAagEAdQgCAQgFAOIAJAIQAcAXAKAlQAHAZgDAYIAIADQAYALARATQARATAJAYQAHAVAAAWIALAFQAYALARASQARATAJAYQAIAZgCAaQgBAXgLAVQgOAdgcAUQgcATggADIgKAAQgbAAgbgNg");
	var mask_11_graphics_8 = new cjs.Graphics().p("AA9J1QgegOgTgbQgRgbgDgiIAAgMIgOgGQgfgPgTgbQgSgbgDgiQgBgNACgMIgMgFQgigRgSgeQgRgcgBghQgBgZAKgYQgNgJgKgNQgTgWgHgdQgHgeAHgcQAGgYAPgVQgMgKgKgNQgZgiACgqQABgqAcghIAGgHQgOgOgJgTQgPggAEglQAFgmAXgbQANgRATgLIgEgIQgOghAFgiQAFgiAXgbQAXgcAggLIAPgFQgBgUAHgVQAKghAYgWQAYgWAggHQAigHAeAJQAgAKAXAZQAXAZAHAfQALAxgaAsQgXAlgpAPIgQAFQABAUgFATQgGATgLAQQgPAZgZAOQAIARADAUQAGAjgOAiQgKAWgPAPQASATAIAXQAOAjgJAoQgGAYgOATIAMALQASAUAIAaQAJAagEAdQgCAQgFAOIAJAIQAcAXAKAlQAHAZgDAYIAIADQAYALARATQARATAJAYQAHAWAAAVIALAFQAYALARASQARATAJAYQAIAZgCAaQgBAXgLAVQgOAdgcAUQgcATggADIgKAAQgbAAgbgNg");
	var mask_11_graphics_9 = new cjs.Graphics().p("AAfKnQgfgOgRgbQgTgbgCgiIAAgMIgPgGQgegPgTgbQgTgbgCgiQgBgNACgMIgMgFQgigRgTgeQgRgcgBghQAAgaAKgXQgNgJgLgNQgSgWgHgdQgHgeAGgcQAGgYAQgVQgNgKgKgNQgYgjABgpQACgqAbghIAHgHQgOgPgJgSQgQggAFglQAEgmAXgbQAOgRATgLIgEgIQgOghAFgiQAFgiAWgbQAXgcAggLIAQgFQgBgUAGgVQALghAYgWQAYgWAhgHQAZgGAXAEQAEgXAOgWQARgaAcgPQAdgPAfAAQAfAAAcAQQAcAPARAbQARAaACAgQACAggNAdQgNAcgZATQgaAUgfAEQgTADgUgEQgEAWgNAUQgWAlgpAPIgQAFQABATgGAUQgFATgLAQQgPAYgZAPQAJARADAUQAFAjgPAiQgJAWgPAPQASASAJAYQAOAjgKAnQgGAZgOATIALALQATAUAJAaQAHAagCAdQgCAQgGAOIAJAIQAbAXAKAlQAIAZgDAYIAHADQAYALARATQASATAIAYQAIAVAAAWIAKAFQAYALARASQARATAJAYQAJAZgCAaQgCAXgKAVQgOAdgcAUQgcATghADIgJAAQgcAAgagNg");
	var mask_11_graphics_10 = new cjs.Graphics().p("AgzLDQgfgOgSgbQgTgbgCgiIAAgMIgPgGQgegPgTgbQgTgbgCgiQgBgMACgNIgMgFQgigRgTgeQgRgcgBghQAAgZAKgYQgNgJgLgNQgSgWgHgdQgHgeAGgcQAGgYAQgUQgNgLgKgNQgYgjABgqQACgpAbghIAHgHQgOgOgJgTQgQggAFglQAEgmAXgbQAOgRATgLIgEgIQgOghAFgiQAFgiAWgbQAXgcAggLIAQgEQgBgVAGgVQALghAYgWQAYgWAhgHQAZgFAYAEQAEgYAOgWQARgaAbgPQAdgPAfAAQAcAAAaANQAJgSAQgQQAagaAjgHQAigHAjANQAiANAWAcQAVAcADAlQADAlgQAfQgTAkgmATQgfAPglgEQgWgDgSgJQgNAagYASQgaAUgfAEQgUADgTgDQgFAVgMAUQgWAlgoAPIgQAFQABAUgGATQgFATgLAQQgQAZgZAOQAJARADAUQAFAjgPAiQgJAWgPAQQASASAJAXQAOAigKAoQgGAZgOAUIALAKQATAUAJAaQAIAagDAdQgCAQgGAOIAKAIQAbAXAKAlQAIAZgDAYIAHADQAYALAQATQASATAIAYQAIAWAAAWIAKAEQAYALARASQARATAJAYQAJAZgCAaQgCAXgKAVQgOAdgcAUQgcATghADIgJAAQgbAAgagNg");
	var mask_11_graphics_11 = new cjs.Graphics().p("AiALJQgfgPgSgbQgTgbgCgiIAAgLIgPgGQgegPgTgbQgTgbgCgiQgBgNACgMIgMgFQgigRgTgfQgRgcgBggQAAgaAKgYQgNgJgLgMQgSgWgHgeQgHgdAGgcQAGgYAQgVQgNgKgKgOQgYgjABgqQACgpAbghIAHgHQgOgOgJgTQgQggAFglQAEglAXgcQAOgQATgLIgEgJQgOggAFgiQAFgiAWgcQAXgcAggLIAQgEQgBgVAGgVQALggAYgWQAYgWAhgHQAZgGAYAEQAEgYAOgVQARgaAcgPQAdgQAfABQAbAAAaANQAJgTAQgPQAagaAjgHQAigHAjANQAOAFAMAIQAKgKAMgHQAbgPAggBQAggBAbAOQAcAOASAaQASAaAEAfQADAagJAbQgIAagSAUQgSATgaALQgZALgbgBQgbgBgZgNIgNgHQgNAMgSAIQgfAPglgEQgWgCgSgJQgNAagYASQgaATgfAFQgTADgTgEQgFAVgMAVQgWAkgpAQIgQAEQABAUgGATQgFATgLARQgQAYgZAPQAJARADATQAFAkgPAiQgJAVgPAQQASASAJAYQAOAigKAnQgGAagOATIALALQATAUAJAZQAIAbgDAcQgCAQgGAPIAKAHQAbAYAKAkQAIAagDAYIAHADQAYALARASQASATAIAZQAIAVAAAWIAKAEQAYALAQATQARASAJAZQAJAZgCAZQgCAYgKAVQgOAdgbATQgcAUghACIgJABQgcAAgagNg");
	var mask_11_graphics_12 = new cjs.Graphics().p("AjYLJQgfgPgSgbQgTgbgCgiIgBgLIgOgGQgegPgTgbQgTgbgCgiQgBgNABgMIgLgFQgigRgTgfQgRgcgBggQAAgaAKgYQgOgJgKgMQgSgWgHgeQgHgdAGgcQAGgYAPgVQgMgKgKgOQgYgjABgqQACgpAbghIAGgHQgNgOgJgTQgQggAFglQAEglAXgcQAOgQATgLIgEgJQgOggAFgiQAFgiAWgcQAXgcAggLIAPgEQAAgVAGgVQALggAYgWQAYgWAhgHQAZgGAXAEQAFgYAOgVQARgaAcgPQAdgQAfABQAcAAAaANQAJgTAQgPQAZgaAjgHQAigHAjANQAOAFAMAIQAKgKAMgHQAbgPAggBQAggBAbAOQAcAOASAaIAHAMQAngZAtAGQAtAGAfAiQAVAXAIAgQAHAggJAeQgIAegXAYQgXAXgeAJQgfAJgggHQgggHgXgVQgRgPgKgTQgJAGgKAEQgZALgbgBQgbgBgZgNIgNgHQgNAMgSAIQgfAPglgEQgWgCgSgJQgMAagYASQgaATgfAFQgUADgUgEQgEAVgMAVQgWAkgpAQIgQAEQABAUgGATQgFATgLARQgQAYgZAPQAJARADATQAFAkgPAiQgJAVgPAQQASASAJAYQAOAigKAnQgGAagOATIALALQATAUAJAZQAIAbgDAcQgCAQgGAPIAKAHQAbAYAKAkQAIAagDAYIAHADQAYALARASQASATAIAZQAIAVgBAWIALAEQAYALARATQARASAJAZQAJAZgCAZQgCAYgKAVQgOAdgcATQgcAUghACIgJABQgcAAgagNg");
	var mask_11_graphics_13 = new cjs.Graphics().p("AkqLJQgfgPgSgbQgTgbgCgiIgBgLIgOgGQgegPgTgbQgTgbgCgiQgBgNABgMIgLgFQgigRgTgfQgRgcgBggQAAgaAKgYQgOgJgKgMQgSgWgHgeQgHgdAGgcQAGgYAPgVQgMgKgKgOQgYgjABgqQACgpAbghIAGgHQgNgOgJgTQgQggAFglQAEglAXgcQAOgQATgLIgEgJQgOggAFgiQAFgiAWgcQAXgcAggLIAPgEQAAgVAGgVQALggAYgWQAYgWAhgHQAZgGAXAEQAFgYAOgVQARgaAcgPQAdgQAfABQAcAAAaANQAJgTAQgPQAagaAjgHQAigHAiANQAOAFAMAIQAKgKAMgHQAbgPAggBQAggBAbAOQAcAOASAaIAHAMQAmgZAuAGQAtAGAfAiQASAUAIAbQAegLAeADQAiAEAcAWQAcAWAMAgQAMAfgGAjQgGAjgXAaQgXAZgiALQgiAKghgIQghgIgZgaQgVgWgJgcIgKADQgfAJgggHQgggHgXgVQgRgPgKgTQgJAGgKAEQgZALgbgBQgbgBgZgNIgNgHQgNAMgSAIQgfAPgkgEQgWgCgSgJQgNAagYASQgaATgfAFQgUADgUgEQgEAVgMAVQgWAkgpAQIgQAEQABAUgGATQgFATgLARQgQAYgZAPQAJARADATQAFAkgPAiQgJAVgPAQQASASAJAYQAOAigKAnQgGAagOATIALALQATAUAJAZQAIAbgDAcQgCAQgGAPIAKAHQAbAYAKAkQAHAagCAYIAHADQAYALARASQASATAIAZQAIAVgBAWIALAEQAYALARATQARASAJAZQAJAZgCAZQgCAYgKAVQgOAdgcATQgcAUghACIgJABQgcAAgagNg");
	var mask_11_graphics_14 = new cjs.Graphics().p("AlwLJQgegPgTgbQgSgbgDgiIAAgLIgOgGQgfgPgTgbQgSgbgDgiQgBgNACgMIgMgFQgigRgSgfQgRgcgBggQgBgaAKgYQgNgJgLgMQgSgWgHgeQgHgdAHgcQAGgYAPgVQgNgKgKgOQgYgjACgqQABgpAcghIAGgHQgOgOgJgTQgPggAEglQAFglAXgcQANgQATgLIgEgJQgOggAFgiQAFgiAWgcQAYgcAfgLIAQgEQgBgVAHgVQAKggAYgWQAYgWAhgHQAZgGAYAEQAEgYAOgVQARgaAcgPQAdgQAfABQAcAAAaANQAKgTAPgPQAbgaAigHQAjgHAiANQAOAFAMAIQAKgKAMgHQAagPAggBQAggBAcAOQAbAOATAaIAHAMQAmgZAtAGQAuAGAeAiQATAUAIAbQAdgLAfADQAiAEAcAWQAcAWALAgQAHASABATQAXgDAXAGQAZAHAVAQQAUAQANAXQAMAXACAZQADAfgMAdQgNAdgYAUQgYATggAGQgeAGgegJQgegJgXgXQgYgXgJgeQgEgNgBgPQgUACgUgFQghgIgZgaQgWgWgJgcIgKADQgfAJgfgHQgggHgYgVQgQgPgKgTQgKAGgKAEQgZALgbgBQgbgBgZgNIgMgHQgNAMgSAIQgfAPgkgEQgWgCgTgJQgNAagYASQgaATgeAFQgUADgUgEQgEAVgMAVQgXAkgpAQIgQAEQABAUgGATQgFATgLARQgQAYgZAPQAJARADATQAFAkgPAiQgJAVgPAQQASASAJAYQAOAigJAnQgHAagOATIAMALQATAUAIAZQAIAbgDAcQgCAQgFAPIAJAHQAbAYALAkQAHAagDAYIAHADQAZALARASQARATAJAZQAHAVAAAWIALAEQAYALAQATQASASAIAZQAJAZgCAZQgCAYgKAVQgOAdgcATQgcAUghACIgJABQgbAAgbgNg");
	var mask_11_graphics_15 = new cjs.Graphics().p("AmpLJQgegPgTgbQgSgbgDgiIAAgLIgOgGQgfgPgTgbQgSgbgDgiQAAgNABgMIgMgFQgigRgSgfQgRgcgBggQAAgaAJgYQgNgJgKgMQgTgWgHgeQgHgdAHgcQAGgYAPgVQgMgKgKgOQgZgjACgqQABgpAcghIAGgHQgOgOgJgTQgPggAEglQAFglAXgcQAOgQASgLIgEgJQgOggAFgiQAFgiAXgcQAXgcAggLIAPgEQgBgVAHgVQAKggAYgWQAYgWAhgHQAagGAXAEQAFgYANgVQASgaAcgPQAcgQAfABQAdAAAaANQAJgTAPgPQAbgaAigHQAjgHAiANQAPAFAMAIQAKgKAMgHQAagPAfgBQAggBAcAOQAbAOATAaIAHAMQAmgZAtAGQAuAGAeAiQATAUAIAbQAegLAeADQAiAEAcAWQAcAWAMAgQAHASABATQAXgDAXAGQAZAHAUAQQAUAQANAXQAMAXACAZIABAJIANACQAgAHAZAUQAZAWALAiQALAhgHAhQgHAggXAZQgXAZgfAKQgfAKghgIQghgHgYgWQgZgWgKggQgFgSAAgRQgOgBgOgEQgegJgXgXQgYgXgJgeQgDgNgBgPQgVACgUgFQghgIgZgaQgWgWgIgcIgLADQgeAJgggHQgggHgYgVQgQgPgKgTQgJAGgLAEQgZALgbgBQgagBgYgNIgNgHQgOAMgRAIQggAPgkgEQgWgCgTgJQgNAagYASQgaATgeAFQgUADgUgEQgEAVgMAVQgXAkgpAQIgPAEQAAAUgFATQgGATgLARQgPAYgaAPQAJARADATQAGAkgPAiQgJAVgQAQQASASAJAYQAOAigJAnQgGAagOATIALALQATAUAIAZQAJAbgEAcQgCAQgFAPIAJAHQAcAYAKAkQAHAagDAYIAIADQAYALARASQARATAJAZQAIAVgBAWIALAEQAYALARATQARASAJAZQAIAZgCAZQgBAYgLAVQgOAdgcATQgcAUggACIgJABQgcAAgbgNg");
	var mask_11_graphics_16 = new cjs.Graphics().p("AndLJQgegPgTgbQgSgbgDgiIAAgLIgOgGQgfgPgTgbQgSgbgDgiQgBgNACgMIgMgFQgigRgSgfQgRgcgBggQgBgaAKgYQgNgJgKgMQgTgWgHgeQgHgdAHgcQAGgYAPgVQgMgKgKgOQgZgjACgqQABgpAcghIAGgHQgOgOgJgTQgPggAEglQAFglAXgcQANgQATgLIgEgJQgOggAFgiQAFgiAXgcQAXgcAggLIAPgEQgBgVAHgVQAKggAYgWQAYgWAhgHQAZgGAYAEQAEgYAOgVQASgaAcgPQAcgQAfABQAcAAAaANQAKgTAPgPQAbgaAigHQAjgHAiANQAOAFAMAIQAKgKANgHQAagPAggBQAggBAbAOQAbAOATAaIAHAMQAmgZAtAGQAuAGAeAiQATAUAIAbQAdgLAfADQAiAEAcAWQAcAWAMAgQAHASAAATQAYgDAXAGQAZAHAUAQQAUAQANAXQAMAXACAZIABAJIANACQAgAHAZAUQAZAWALAiQAIAXgBAXQAiAGAZAUQAZAVAMAgQAMAggFAhQgGAggWAaQgWAbgeAKQgfALgigGQgigGgZgUQgYgUgMggQgJgZABgZIgGgCQghgHgYgWQgZgWgKggQgFgSgBgRQgNgBgOgEQgegJgXgXQgYgXgJgeQgDgNgCgPQgUACgUgFQghgIgZgaQgWgWgJgcIgKADQgeAJgggHQgggHgYgVQgQgPgKgTQgJAGgLAEQgYALgbgBQgbgBgYgNIgOgHQgNAMgRAIQggAPgkgEQgWgCgTgJQgNAagYASQgaATgeAFQgUADgUgEQgEAVgMAVQgXAkgpAQIgQAEQABAUgFATQgGATgLARQgPAYgaAPQAJARADATQAGAkgPAiQgKAVgPAQQASASAJAYQAOAigJAnQgGAagPATIAMALQATAUAIAZQAJAbgEAcQgCAQgFAPIAJAHQAcAYAKAkQAHAagDAYIAIADQAYALARASQARATAJAZQAIAVgBAWIALAEQAYALARATQARASAJAZQAIAZgCAZQgBAYgLAVQgOAdgcATQgcAUggACIgKABQgbAAgbgNg");
	var mask_11_graphics_17 = new cjs.Graphics().p("AoXLJQgfgPgSgbQgTgbgCgiIAAgLIgPgGQgegPgTgbQgTgbgCgiQgBgNACgMIgMgFQgigRgTgfQgRgcgBggQAAgaAKgYQgNgJgLgMQgSgWgHgeQgHgdAGgcQAGgYAQgVQgNgKgKgOQgYgjABgqQACgpAbghIAHgHQgOgOgJgTQgQggAFglQAEglAXgcQAOgQATgLIgEgJQgOggAFgiQAFgiAWgcQAXgcAggLIAQgEQgBgVAGgVQALggAYgWQAYgWAhgHQAZgGAYAEQAEgYAOgVQARgaAcgPQAdgQAfABQAcAAAaANQAJgTAQgPQAagaAjgHQAigHAjANQAOAFAMAIQAKgKAMgHQAbgPAggBQAggBAbAOQAcAOARAaIAIAMQAmgZAtAGQAtAGAfAiQATAUAIAbQAdgLAeADQAiAEAcAWQAcAWAMAgQAHASABATQAXgDAXAGQAZAHAVAQQAUAQAMAXQANAXACAZIAAAJIANACQAhAHAYAUQAaAWALAiQAIAXgCAXQAiAGAZAUQAaAVAMAgQAMAggGAhQgCAMgEALIACAAQAfABAdAQQAcAQAQAaQATAdAAAkQAAAkgTAeQgSAdgfAQQggAQgigDQgigCgdgVQgdgVgNgfQgNgdADggQACgRAGgQQgLAAgLgCQgigGgZgUQgZgUgLggQgKgZACgZIgHgCQghgHgYgWQgYgWgKggQgGgSAAgRQgOgBgNgEQgfgJgXgXQgXgXgJgeQgEgNgBgPQgVACgUgFQghgIgZgaQgVgWgJgcIgKADQgfAJgggHQgggHgWgVQgRgPgJgTQgKAGgKAEQgZALgbgBQgbgBgZgNIgNgHQgNAMgSAIQgfAPglgEQgWgCgSgJQgNAagYASQgaATgfAFQgUADgTgEQgFAVgMAVQgWAkgpAQIgQAEQABAUgGATQgFATgLARQgQAYgZAPQAJARADATQAFAkgPAiQgJAVgPAQQASASAJAYQAOAigKAnQgGAagOATIALALQATAUAJAZQAIAbgDAcQgCAQgGAPIAKAHQAbAYAKAkQAIAagDAYIAHADQAYALARASQASATAIAZQAIAVAAAWIAKAEQAYALARATQARASAJAZQAJAZgCAZQgCAYgKAVQgOAdgcATQgcAUghACIgJABQgcAAgagNg");
	var mask_11_graphics_18 = new cjs.Graphics().p("ApOLJQgegPgTgbQgSgbgDgiIAAgLIgOgGQgfgPgTgbQgSgbgDgiQgBgNACgMIgMgFQgigRgSgfQgRgcgBggQgBgaAKgYQgNgJgKgMQgTgWgHgeQgHgdAHgcQAGgYAPgVQgMgKgKgOQgZgjACgqQABgpAcghIAGgHQgOgOgJgTQgPggAEglQAFglAXgcQANgQATgLIgEgJQgOggAFgiQAFgiAXgcQAXgcAggLIAPgEQgBgVAHgVQAKggAYgWQAYgWAhgHQAZgGAYAEQAEgYAOgVQASgaAcgPQAcgQAfABQAcAAAaANQAKgTAPgPQAbgaAigHQAjgHAiANQAOAFAMAIQALgKAMgHQAagPAggBQAggBAcAOQAbAOATAaIAHAMQAmgZAsAGQAuAGAeAiQATAUAIAbQAdgLAfADQAiAEAcAWQAcAWAMAgQAHASAAATQAYgDAXAGQAZAHAUAQQAUAQANAXQAMAXACAZIABAJIANACQAgAHAZAUQAZAWALAiQAIAXgBAXQAiAGAZAUQAZAVAMAgQAMAggFAhQgCAMgFALIADAAQAfABAcAQQAcAQARAaQASAdAAAkQAAANgCAMQAMABALADQAaAIAWATQAVAUAKAZQAMAcgDAfQgDAfgQAZQgQAZgbAPQgbAQgeABQgeABgcgNQgcgNgSgYQgdglAEgxIACgOQgggDgbgUQgdgVgOgfQgMgdADggQABgRAGgQQgLAAgLgCQgigGgZgUQgYgUgMggQgJgZABgZIgGgCQghgHgYgWQgZgWgKggQgFgSgBgRQgNgBgOgEQgegJgXgXQgYgXgJgeQgDgNgCgPQgUACgUgFQghgIgZgaQgWgWgJgcIgKADQgeAJgfgHQgggHgYgVQgQgPgKgTQgJAGgLAEQgZALgbgBQgbgBgYgNIgOgHQgNAMgRAIQggAPgkgEQgWgCgTgJQgNAagYASQgaATgeAFQgUADgUgEQgEAVgMAVQgXAkgpAQIgQAEQABAUgFATQgGATgLARQgPAYgaAPQAJARADATQAGAkgPAiQgKAVgPAQQASASAJAYQAOAigJAnQgGAagPATIAMALQATAUAIAZQAJAbgEAcQgCAQgFAPIAJAHQAcAYAKAkQAHAagDAYIAIADQAYALARASQARATAJAZQAIAVgBAWIALAEQAYALARATQARASAJAZQAIAZgCAZQgBAYgLAVQgOAdgcATQgcAUggACIgKABQgbAAgbgNg");
	var mask_11_graphics_19 = new cjs.Graphics().p("AqELJQgfgPgSgbQgTgbgCgiIAAgLIgPgGQgegPgTgbQgTgbgCgiQgBgNACgMIgMgFQgigRgTgfQgRgcgBggQAAgaAKgYQgNgJgLgMQgSgWgHgeQgHgdAGgcQAHgYAPgVQgNgKgKgOQgYgjABgqQACgpAbghIAHgHQgOgOgJgTQgQggAFglQAEglAXgcQAOgQATgLIgEgJQgOggAFgiQAFgiAWgcQAXgcAggLIAQgEQgBgVAGgVQALggAYgWQAYgWAhgHQAZgGAYAEQAEgYAOgVQARgaAcgPQAdgQAfABQAcAAAaANQAJgTAQgPQAagaAjgHQAigHAjANQAOAFAMAIQAKgKAMgHQAbgPAggBQAggBAbAOQAcAOASAaIAIAMQAmgZAtAGQAsAGAfAiQATAUAIAbQAdgLAeADQAiAEAcAWQAcAWAMAgQAHASABATQAXgDAXAGQAZAHAVAQQAUAQAMAXQANAXACAZIAAAJIANACQAhAHAYAUQAaAWALAiQAIAXgCAXQAiAGAZAUQAaAVAMAgQAMAggGAhQgCAMgEALIACAAQAfABAdAQQAcAQAQAaQATAdAAAkQAAANgCAMQALABALADQAbAIAVATQAVAUALAZQALAcgDAfIgBAIQAhAEAcAUQAbAVANAeQANAfgFAiQgEAigVAaQgTAZgfANQgfANgfgEQgggDgbgUQgbgUgNgdQgOgeADgiIABgGQgTgDgTgJQgcgNgSgYQgeglAEgxIACgOQgfgDgcgUQgdgVgNgfQgNgdADggQACgRAGgQQgLAAgLgCQgigGgZgUQgZgUgLggQgJgZABgZIgHgCQghgHgYgWQgYgWgKggQgFgSgBgRQgOgBgNgEQgfgJgXgXQgXgXgJgeQgEgNgBgPQgUACgVgFQghgIgZgaQgVgWgJgcIgKADQgeAJgggHQgggHgXgVQgQgPgKgTQgKAGgKAEQgZALgbgBQgbgBgZgNIgNgHQgNAMgSAIQgfAPglgEQgVgCgTgJQgNAagYASQgaATgfAFQgTADgUgEQgEAVgNAVQgWAkgpAQIgQAEQABAUgGATQgFATgLARQgQAYgZAPQAJARADATQAFAkgPAiQgJAVgPAQQASASAJAYQAOAigKAnQgGAagOATIALALQATAUAJAZQAIAbgDAcQgCAQgGAPIAKAHQAbAYAKAkQAIAagDAYIAHADQAYALARASQASATAIAZQAIAVAAAWIAKAEQAYALARATQARASAJAZQAJAZgCAZQgCAYgKAVQgOAdgcATQgcAUghACIgJABQgbAAgbgNg");
	var mask_11_graphics_20 = new cjs.Graphics().p("Aq7LJQgegPgTgbQgSgbgDgiIAAgLIgOgGQgfgPgTgbQgSgbgDgiQAAgNABgMIgMgFQgigRgSgfQgRgcgBggQAAgaAJgYQgNgJgKgMQgTgWgHgeQgHgdAHgcQAGgYAPgVQgMgKgKgOQgZgjACgqQABgpAcghIAGgHQgOgOgJgTQgPggAEglQAFglAXgcQAOgQASgLIgEgJQgOggAFgiQAFgiAXgcQAXgcAggLIAPgEQgBgVAHgVQAKggAYgWQAYgWAhgHQAagGAXAEQAFgYANgVQASgaAcgPQAcgQAfABQAdAAAaANQAJgTAPgPQAbgaAigHQAjgHAiANQAPAFAMAIQAKgKAMgHQAagPAggBQAggBAcAOQAbAOATAaIAHAMQAmgZAtAGQAuAGAdAiQATAUAIAbQAegLAeADQAiAEAcAWQAcAWAMAgQAHASABATQAXgDAXAGQAZAHAUAQQAUAQANAXQAMAXACAZIABAJIANACQAgAHAZAUQAZAWALAiQAIAXgBAXQAiAGAZAUQAZAVAMAgQAMAggFAhQgCAMgFALIADAAQAfABAcAQQAcAQARAaQASAdAAAkQAAANgCAMQAMABALADQAaAIAWATQAVAUAKAZQAMAcgDAfIgBAIQAhAEAbAUQAbAVANAeQANAfgEAiQgCANgEAMQAfACAZAPQAaAQAQAcQAQAbACAeQABAigRAfQgQAfgdARQgdARgjAAQgkAAgdgSQgcgRgRgfQgQggACghQABgSAGgQIgGgBQgggDgbgUQgbgUgNgdQgOgeAEgiIABgGQgUgDgTgJQgcgNgSgYQgdglAEgxIACgOQgfgDgcgUQgdgVgOgfQgMgdADggQACgRAFgQQgKAAgMgCQgigGgZgUQgYgUgMggQgJgZACgZIgHgCQghgHgYgWQgZgWgKggQgFgSAAgRQgOgBgOgEQgegJgXgXQgYgXgJgeQgDgNgBgPQgVACgUgFQghgIgYgaQgWgWgIgcIgLADQgeAJgggHQgggHgYgVQgQgPgKgTQgJAGgLAEQgZALgbgBQgbgBgYgNIgNgHQgOAMgRAIQggAPgkgEQgWgCgTgJQgNAagYASQgaATgeAFQgUADgUgEQgEAVgMAVQgXAkgpAQIgPAEQABAUgGATQgGATgLARQgPAYgaAPQAJARADATQAGAkgPAiQgJAVgQAQQATASAIAYQAOAigJAnQgGAagOATIALALQATAUAIAZQAJAbgEAcQgBAQgGAPIAJAHQAcAYAKAkQAHAagDAYIAIADQAYALARASQARATAJAZQAIAVgBAWIALAEQAYALARATQARASAJAZQAIAZgCAZQgBAYgLAVQgOAdgcATQgcAUggACIgJABQgcAAgbgNg");
	var mask_11_graphics_21 = new cjs.Graphics().p("AOJL2QgjgKgXgaQgUgWgIgeQgIgeAHgcIACgHIgJAAQgkAAgdgSQgcgRgRgfQgQggACghQABgSAGgQIgGgBQgggDgbgUQgbgUgNgdQgOgeAEgiIABgHQgUgCgTgJQgcgNgSgYQgdglAEgxIACgOQgfgDgcgUQgdgVgOgfQgMgdADggQACgQAFgQQgKAAgMgCQgigGgZgVQgYgUgMggQgJgZACgaIgHgBQghgHgYgWQgZgWgKggQgFgSAAgRQgOgBgOgEQgegJgXgXQgYgXgJgeQgDgNgBgPQgVACgTgFQghgIgZgaQgWgWgIgcIgLADQgeAJgggHQgggHgYgVQgQgPgKgTQgJAGgLAEQgZALgbgBQgbgBgYgNIgNgIQgOANgRAIQggAPgkgEQgWgCgTgKQgNAagYATQgaATgeAFQgUADgUgEQgEAVgMAVQgXAkgpAQIgPAEQABAUgGATQgGATgLARQgPAYgaAPQAJARADATQAGAkgPAiQgJAVgQAQQATASAIAYQAOAjgJAmQgGAagOATIALALQATAUAIAZQAJAbgEAcQgBAQgGAPIAJAHQAcAYAKAkQAHAagDAYIAIADQAYALARASQARATAJAZQAIAVgBAWIALAEQAYALARATQARASAJAZQAIAZgCAZQgBAYgLAVQgOAdgcATQgcAUggACQghADgfgPQgegPgTgbQgSgbgDgiIAAgMIgOgFQgfgPgTgbQgSgbgDgiQAAgNABgMIgMgFQgigRgSgfQgRgcgBggQAAgaAJgYQgNgJgKgMQgTgWgHgeQgHgdAHgcQAGgYAPgVQgMgKgKgOQgZgjACgpQABgqAcghIAGgHQgOgOgJgTQgPggAEglQAFglAXgcQAOgRASgKIgEgJQgOggAFgiQAFgiAXgcQAXgcAggLIAPgEQgBgVAHgVQAKggAYgWQAYgWAhgHQAagGAXAEQAFgYANgVQASgaAcgPQAcgQAfABQAdAAAaAMQAJgSAPgPQAbgaAigHQAjgHAiANQAPAFAMAIQAKgKAMgHQAagPAggBQAggBAcAOQAbAOATAaIAHAMQAmgZAtAGQAuAGAeAiQATAUAIAbQAegLAdADQAiAEAcAWQAcAWAMAgQAHASABATQAXgDAXAGQAZAHAUAQQAUAQANAXQAMAXACAZIABAJIANACQAgAHAZAUQAZAWALAiQAIAXgBAXQAiAGAZAUQAZAVAMAgQAMAggFAhQgCAMgFALIADAAQAfABAcAQQAcAQARAaQASAeAAAjQAAANgCAMQAMABALADQAaAIAWATQAVAUAKAZQAMAcgDAfIgBAIQAhAEAbAUQAbAVANAeQANAfgEAiQgCANgEAMQAfACAZAPQAaAQAQAcQAQAbACAeQABAUgGAUIASAAQAkADAcAUQAcAVAOAhQANAigGAiQgGAigZAbQgYAcghAJQgQAFgRAAQgSAAgSgFg");
	var mask_11_graphics_22 = new cjs.Graphics().p("APNNJQgagCgYgNQgXgMgQgUQgQgVgHgZQgGgZADgZIAFgTQgkgKgWgZQgUgWgIgeQgIgeAHgcIABgHIgIAAQgkAAgdgSQgcgRgRgfQgQggACghQABgSAGgQIgGgBQgggDgbgUQgbgUgNgdQgOgeAEgiIAAgHQgTgCgTgJQgcgNgSgYQgdglAEgxIACgOQgggDgbgUQgdgVgOgeQgMgdADggQABgRAGgQQgLAAgLgCQgigGgZgVQgYgUgMggQgJgZABgaIgGgBQghgHgYgWQgZgWgKggQgFgSgBgRQgOgBgNgEQgegJgXgXQgXgXgJgeQgEgNgBgPQgUACgUgFQghgIgZgaQgWgWgJgcIgKADQgeAJgggHQgggHgYgVQgQgPgKgTQgJAGgLAEQgZALgbgBQgbgBgYgNIgOgIQgNANgRAIQggAPgkgEQgWgDgTgJQgNAagYATQgaATgeAFQgUADgUgEQgEAVgMAVQgXAkgpAQIgQAEQABAUgFATQgGATgLARQgPAYgaAPQAJARADATQAGAkgPAiQgKAVgPAQQASASAJAYQAOAjgJAnQgHAZgOAUIAMAKQATAUAIAZQAJAbgEAcQgCAQgFAPIAJAHQAcAYAKAkQAHAZgDAZIAIADQAYALARASQARATAJAZQAHAVAAAWIALAEQAYALARATQARASAJAZQAIAZgCAZQgBAYgLAVQgOAdgcATQgcAUggACQghADgfgPQgegPgTgbQgSgbgDgiIAAgMIgOgFQgfgPgTgbQgSgbgDgiQgBgNACgMIgMgFQgigRgSgfQgRgcgBggQgBgaAKgYQgNgJgKgMQgTgWgHgeQgHgdAHgcQAGgZAPgUQgMgKgKgNQgZgjACgqQABgqAcghIAGgHQgOgOgJgTQgPggAEglQAFglAXgcQANgRATgKIgEgJQgOggAFgiQAFgiAXgcQAXgcAggLIAPgEQgBgVAHgVQAKggAYgWQAYgWAhgHQAZgGAYAEQAEgYAOgVQASgaAcgPQAcgQAfABQAcAAAaAMQAKgSAPgPQAbgaAigHQAjgHAiANQAOAFAMAIQAKgKANgHQAagPAggBQAggBAcAOQAbAOATAaIAHAMQAmgZAtAGQAuAGAeAiQATAUAIAbQAdgMAfAEQAhAEAcAWQAcAWAMAgQAGASABATQAXgDAYAGQAZAHAUAQQAUAQANAXQAMAXACAZIABAJIANACQAgAHAZAUQAZAWALAiQAIAXgBAXQAiAGAZAUQAZAVAMAgQAMAggFAhQgDAMgEALIADAAQAfABAcAQQAcAQARAaQASAeAAAkQAAANgCAMQALABAMADQAaAIAWASQAVAUAKAZQAMAcgDAfIgBAIQAhAEAbAUQAbAVANAeQANAfgEAiQgCANgEAMQAeACAaAPQAaAQAQAcQAQAbACAeQAAAUgFAUIASAAQAkADAcAUQAcAVAOAhQANAigGAiIgEAOQAYAHAUAQQAVASANAYQAMAZABAbQAAAagKAZQgLAZgSASQgTASgZAJQgVAHgVAAIgJAAg");
	var mask_11_graphics_23 = new cjs.Graphics().p("APuOCQgogSgUgmQgSgiAEgkQgRADgQgBQgagCgYgNQgXgMgQgUQgQgVgHgZQgGgZADgZIAFgTQgkgJgWgaQgUgWgIgeQgIgeAHgcIABgHIgIAAQgkAAgdgSQgcgRgRgfQgQggACghQABgSAGgQIgGgBQgggDgbgUQgbgUgNgdQgOgeAEgiIAAgHQgTgCgTgJQgcgNgSgYQgdglAEgxIACgOQgggDgbgTQgdgVgOgfQgMgdADggQABgRAGgQQgLAAgLgCQgigGgZgVQgYgUgMggQgJgZABgaIgGgBQghgHgYgWQgZgWgKggQgFgSgBgRQgOgBgMgEQgegJgXgXQgYgXgJgeQgEgNgBgPQgUACgUgFQghgIgZgaQgWgWgJgcIgKADQgeAJgggHQgggHgYgVQgQgPgKgTQgJAGgLAEQgZALgbgBQgbgBgYgNIgOgIQgNANgRAIQggAPgkgEQgWgCgTgKQgNAagYATQgaATgeAFQgUADgUgEQgEAVgMAVQgXAkgpAQIgQAEQABAUgFATQgGATgLARQgPAYgaAPQAJARADATQAGAkgPAiQgKAVgPAQQASASAJAYQAOAjgJAnQgHAagOATIAMALQATAUAIAZQAJAagEAcQgCAQgFAPIAJAHQAcAYAKAkQAHAagDAYIAIADQAYALARASQARATAJAZQAHAVAAAWIALAEQAYALARATQARASAJAZQAIAZgCAZQgBAYgLAVQgOAdgcATQgcAUggACQghADgfgPQgegPgTgbQgSgbgDgiIAAgMIgOgFQgfgPgTgbQgSgbgDgiQgBgNACgMIgMgFQgigRgSgfQgRgcgBggQgBgaAKgYQgNgJgKgMQgTgWgHgeQgHgdAHgbQAGgYAPgVQgMgKgKgOQgZgjACgqQABgqAcghIAGgHQgOgOgJgTQgPggAEglQAFglAXgcQANgRATgKIgEgJQgOggAFgiQAFgiAXgcQAXgcAggLIAPgEQgBgVAHgVQAKggAYgWQAYgWAhgHQAZgGAYAEQAEgYAOgVQASgaAcgPQAcgQAfABQAcAAAaAMQAKgSAPgPQAbgaAigHQAjgHAiANQAOAFAMAIQAKgKANgHQAagPAggBQAggBAcAOQAbAOATAaIAHAMQAmgZAtAGQAuAGAeAiQATAUAIAbQAdgLAfADQAiAEAcAWQAbAWAMAgQAGASABATQAXgDAYAGQAZAHAUAQQAUAQANAXQAMAXACAZIABAJIANACQAgAHAZAUQAZAWALAiQAIAXgBAXQAiAGAZAUQAZAVAMAgQAMAggFAhQgDAMgEALIADAAQAfABAcAQQAcAQARAaQASAeAAAkQAAANgCAMQALABAMADQAaAIAWATQAVAUAKAZQAMAbgDAfIgBAIQAhAEAbAUQAbAVANAeQANAfgEAiQgCANgEAMQAeACAaAPQAaAQAQAcQAQAbACAeQAAAUgFAUIASAAQAkADAcAUQAcAVAOAhQANAigGAiIgEAOQAYAHAUAQQAVASANAYQAMAZABAbIgBAPQARgDATACQAgADAaARQAZARAPAcQAPAcAAAfQgBAfgPAcQgPAcgaARQgaARggACIgMABQgZAAgXgKg");
	var mask_11_graphics_24 = new cjs.Graphics().p("AQcPIQgcgPgRgcQgRgcgBggQgBgRAEgRQgZAAgWgKQgogSgUgmQgSgiAEgkQgQAEgQgCQgagCgYgMQgYgMgQgVQgQgUgGgZQgHgaAEgZIAEgSQgjgKgXgaQgTgWgIgdQgIgeAGgdIACgGIgJAAQgjgBgdgRQgdgSgQgfQgRgfACgiQABgRAGgRIgFAAQgggEgbgTQgbgUgNgdQgOgeADgiIABgHQgUgDgSgIQgcgOgSgXQgegkAEgxIACgOQgfgEgcgTQgdgVgNgfQgNgdADggQACgSAGgPQgLAAgLgCQgigGgZgWQgZgUgLgfQgKgZACgaIgHgBQghgIgYgWQgXgVgKghQgGgRAAgRQgOgBgNgEQgfgJgXgXQgXgXgJgfQgEgNgBgOQgVABgUgFQghgIgZgZQgVgXgJgcIgKAEQgfAIgggHQgggHgXgVQgRgOgKgTQgJAFgKAFQgZAKgbgBQgbgBgZgMIgNgIQgNAMgSAJQgfAPglgEQgWgDgSgJQgNAagYASQgaAUgfAEQgUADgUgDQgEAVgMAUQgWAlgpAPIgQAFQABAUgGATQgFATgLAQQgQAZgZAOQAJARADAUQAFAjgPAiQgJAWgPAQQASASAJAXQAOAjgKAoQgGAZgOAUIALAKQATAUAJAaQAIAagDAdQgCAQgGAOIAKAIQAbAWAKAlQAHAZgCAYIAHADQAYALARATQASATAIAYQAIAWgBAWIALAEQAYALARASQARATAJAYQAJAZgCAaQgCAXgKAVQgOAdgcAUQgcATghADQggACgfgPQgfgOgSgbQgTgbgCgiIgBgMIgOgGQgegPgTgbQgTgbgCgiQgBgMABgNIgLgFQgigRgTgeQgRgcgBghQAAgZAKgYQgOgJgKgNQgSgWgHgcQgHgeAGgcQAGgYAPgUQgMgLgKgNQgYgjABgqQACgqAbghIAGgHQgNgOgJgTQgQggAFglQAEgmAXgbQAOgRATgLIgEgIQgOghAFgiQAFgiAWgbQAXgcAggLIAPgEQAAgVAGgVQALghAYgWQAYgWAhgHQAZgFAXAEQAFgYAOgWQARgaAcgPQAdgPAfAAQAcAAAaANQAJgSAQgQQAagaAjgHQAigHAjANQAOAGAMAIQAKgKAMgHQAbgQAgAAQAggBAbAOQAcAOASAaIAHALQAmgYAuAGQAtAFAfAjQASAUAIAbQAegMAeAEQAiAEAcAVQAcAWAMAgQAHASABATQAXgCAWAGQAZAGAVAQQAUARAMAWQANAYACAZIAAAJIANACQAhAGAYAVQAaAWALAhQAHAYgBAXQAiAFAZAVQAaAVAMAgQAMAggGAgQgCAMgEAMIACAAQAfAAAdAQQAcAQAQAbQATAdAAAkQAAANgDAMQAMABALAEQAbAIAVATQAVATALAaQALAcgDAeIgBAIQAhAEAcAVQAbATANAfQANAegFAiQgCANgEAMQAfADAZAPQAaAQARAbQAQAbABAfQABAUgGATIASAAQAlADAcAVQAcAUANAiQAOAigHAiIgDAOQAYAHAUAQQAVARAMAZQANAZAAAbIgBAPQASgDATABQAfADAaARQAaARAPAdQAOAcAAAfQAAANgDANQAYAAAXAKQAuATAUAsQAQAigHAnQgGAngaAbQgRARgYAKQgXALgZAAIgEAAQghAAgdgQg");
	var mask_11_graphics_25 = new cjs.Graphics().p("ASUQXQgcgHgVgSQgVgSgMgaQgMgZABgcQAAgKACgJIgCAAQgYALgZAAQgjABgegRQgcgPgRgcQgSgcgBggQAAgRADgRQgYAAgWgKQgogSgUgmQgSgiAEgkQgQAEgRgCQgagCgYgMQgXgMgQgVQgQgUgHgZQgGgaADgZIAFgSQgjgKgXgaQgUgWgIgdQgIgeAHgdIACgGIgJAAQgkgBgdgRQgcgSgRgfQgQgfACgiQABgRAGgRIgGAAQgggEgbgTQgbgUgNgdQgOgeAEgiIABgHQgUgDgTgHQgcgOgSgXQgdglAEgxIACgOQgggEgbgTQgdgVgOgfQgMgdADggQACgSAFgPQgKAAgMgCQgigGgZgWQgXgUgMgfQgJgZACgaIgHgBQghgIgYgWQgZgVgKghQgFgRAAgRQgOgBgOgEQgegJgXgXQgYgXgJgfQgDgNgBgOQgVABgUgFQghgIgZgZQgWgXgIgcIgLAEQgeAIgggHQgggHgYgVQgQgOgKgTQgJAFgLAFQgZAKgbgBQgbgBgYgMIgNgIQgOAMgRAJQggAPgkgEQgWgDgTgJQgNAagYASQgaAUgeAEQgUADgUgDQgEAVgMAUQgXAlgpAPIgPAFQAAAUgFATQgGATgLAQQgPAZgaAOQAJARADAUQAGAjgPAiQgJAWgQAQQASASAJAXQAOAjgJAoQgGAZgOAUIALAKQATAUAIAaQAJAagEAdQgCAQgFAOIAJAIQAcAXAKAlQAHAYgDAYIAIADQAYALARATQARATAJAYQAIAWgBAWIALAEQAYALARASQARATAJAYQAIAZgCAaQgBAXgLAVQgOAdgcAUQgcATggADQghACgfgPQgegOgTgbQgSgbgDgiIAAgMIgOgGQgfgPgTgbQgSgbgDgiQAAgMABgNIgMgFQgigRgSgeQgRgcgBghQAAgZAJgXQgNgJgKgNQgTgWgHgdQgHgeAHgcQAGgYAPgUQgMgLgKgNQgZgjACgqQABgqAcghIAGgHQgOgOgJgTQgPggAEglQAFgmAXgbQAOgRASgLIgEgIQgOghAFgiQAFgiAXgbQAXgcAggLIAPgEQgBgVAHgVQAKghAYgWQAYgWAhgHQAagFAXAEQAEgYAOgWQASgaAcgPQAcgPAfAAQAdAAAaANQAJgSAPgQQAbgaAigHQAjgHAiANQAPAGAMAIQAKgKAMgHQAagQAgAAQAggBAcAOQAbAOATAaIAHALQAmgYAtAGQAuAFAeAjQATAUAIAbQAegMAeAEQAiAEAcAVQAcAWAMAgQAHASABATQAXgCAXAGQAZAGAUAQQAUARANAWQALAYACAZIABAJIANACQAgAGAZAVQAZAWALAhQAIAYgBAXQAiAFAZAVQAZAVAMAgQAMAggFAgQgCAMgFAMIADAAQAfAAAcAQQAcAQARAbQASAdAAAkQAAANgCAMQAMABALAEQAaAIAWATQAVATAKAaQAMAcgDAeIgBAIQAhAEAbAVQAbAUANAfQANAdgEAiQgCANgEAMQAfADAZAPQAaAQAQAbQAQAbACAfQABAUgGATIASAAQAkADAcAVQAcAUAOAiQANAigGAiIgEAOQAZAHATAQQAVARANAZQAMAZABAbIgBAPQASgDASABQAgADAaARQAZARAPAdQAPAcAAAfQAAANgDANQAYAAAXAKQAtATAVAsQAPAigGAnQAPgGAQgDQAhgGAdALQAeALAWAZQAWAZAGAfQAGAbgHAcQgIAjgbAaQgbAZgkAHQgKACgLAAQgRAAgQgEg");
	var mask_11_graphics_26 = new cjs.Graphics().p("AUCRlQghgDgdgUQgcgVgOgfQgNgeAEgjQACgMADgLQgRAKgTAEQgbAFgcgIQgbgHgVgSQgWgRgLgaQgMgaAAgcQAAgKACgJIgCABQgXAKgZABQgjABgfgRQgcgQgRgcQgRgcgBggQgBgRAEgQQgYgBgXgJQgogSgUgmQgRgiAEgkQgRADgQgBQgagCgYgNQgYgMgQgUQgQgVgGgZQgHgZAEgZIAEgTQgjgKgXgZQgTgWgIgeQgIgeAGgcIACgHIgJAAQgjAAgdgSQgdgRgQgfQgRggACghQABgSAGgQIgFgBQgggDgbgUQgbgUgNgdQgOgdADgiIABgHQgUgCgSgJQgcgNgSgYQgeglAEgxIACgOQgfgDgcgUQgdgVgNgfQgNgdADggQACgRAGgQQgLAAgKgCQgigGgZgVQgZgUgLggQgKgZACgaIgHgBQghgHgYgWQgYgWgKggQgGgSAAgRQgOgBgNgEQgfgJgXgXQgXgXgJgeQgEgNgBgPQgVACgUgFQghgIgZgaQgVgWgJgcIgKADQgfAJgggHQgggHgXgVQgRgPgJgTQgKAGgKAEQgZALgbgBQgbgBgZgNIgNgIQgNANgSAIQgfAPglgEQgWgDgSgJQgNAagYATQgaATgfAFQgUADgTgEQgFAVgMAVQgWAkgpAQIgQAEQABAUgGATQgFATgLARQgQAYgZAPQAJARADATQAFAkgPAiQgJAVgPAQQASASAJAYQAOAjgKAnQgGAZgOAUIALALQATAUAJAZQAIAbgDAcQgCAQgGAPIAKAHQAbAYAKAkQAIAZgDAZIAHADQAYALARASQASASAIAZQAIAVAAAWIAKAEQAYALARATQARASAJAZQAJAZgCAZQgCAYgKAVQgOAdgcATQgcAUghACQggADgfgPQgfgPgSgbQgTgbgCgiIAAgMIgPgFQgegPgTgbQgTgbgCgiQgBgNACgMIgMgFQgigRgTgfQgRgbgBggQAAgaAKgYQgNgJgLgMQgSgWgHgeQgHgdAGgcQAGgZAQgUQgNgKgKgOQgYgjABgqQACgqAbghIAHgHQgOgOgJgTQgQggAFglQAEglAXgcQAOgRATgKIgEgJQgOggAFgiQAFgiAWgcQAXgcAggLIAQgEQgBgVAGgVQALggAYgWQAYgWAhgHQAZgGAYAEQAEgYAOgVQARgaAcgPQAdgQAfABQAcAAAaAMQAJgSAQgPQAagaAjgHQAigHAjANQAOAFAMAIQAKgKAMgHQAbgPAggBQAggBAbAOQAcAOASAaIAIAMQAmgZAtAGQAtAGAfAiQASAUAJAbQAdgMAeAEQAiAEAcAWQAcAWAMAgQAHASABATQAXgDAXAGQAZAHAVAQQAUAQAMAXQANAXACAZIAAAJIANACQAhAHAYAUQAZAWALAiQAHAXgBAXQAiAGAZAUQAaAVAMAgQAMAggGAhQgCAMgEALIACAAQAfABAdAQQAcAQAQAaQATAeAAAkQAAANgCAMQALABALADQAbAIAVATQAVAUALAZQALAcgDAfIgBAIQAhAEAcAUQAbAVANAeQANAfgFAiQgBANgFAMQAfACAZAOQAaAQARAcQAQAbABAeQABAUgFAUIARAAQAlADAcAUQAcAVANAhQAOAigHAiIgDAOQAYAHAUAQQAVASAMAYQANAZAAAbIAAAPQARgDATACQAfADAaARQAaARAPAcQAOAcAAAfQAAAOgDAMQAZAAAWAKQAuATAUAtQAQAigHAmQAPgGARgDQAggFAeALQAeAKAWAZQAVAZAHAfQAGAcgHAcIgCAIQAVgMAXgCQAZgDAYAHQAYAHATAPQAVARALAVQAQAdgBAkQgCAjgSAcQgSAcggAPQgbANgcAAIgKAAg");
	var mask_11_graphics_27 = new cjs.Graphics().p("AU4SUQgagNgRgWQgdglACguIABgMQgIAGgKAFQggAPghgDQgigCgcgVQgdgUgNgfQgNgfAEgiQABgMAEgLQgRAJgUAEQgbAFgbgHQgcgHgVgSQgVgSgMgaQgMgZABgcQAAgKACgJIgCAAQgYALgZAAQgjABgegRQgcgPgRgcQgSgcgBggQAAgRADgRQgYAAgWgKQgogSgUgmQgSgiAEgkQgQAEgRgCQgagCgYgMQgXgMgQgVQgQgUgHgZQgGgaADgZIAFgSQgjgKgXgaQgUgWgIgdQgIgeAHgdIACgGIgJAAQgkgBgdgRQgcgSgRgfQgQgfACgiQABgRAGgRIgGAAQgggEgbgSQgbgUgNgdQgOgeAEgiIABgHQgUgDgTgIQgcgOgSgXQgdglAEgxIACgOQgfgEgbgTQgdgVgOgfQgMgdADggQABgSAGgPQgKAAgMgCQgigGgZgWQgYgUgMgfQgJgZACgaIgHgBQghgIgYgWQgZgVgKghQgFgRAAgRQgOgBgOgEQgegJgXgXQgYgXgJgfQgDgNgBgOQgVABgUgFQghgIgZgZQgWgXgIgcIgLAEQgeAIgggHQgggHgYgVQgQgOgKgTQgJAFgLAFQgZAKgbgBQgbgBgYgMIgNgIQgOAMgRAJQggAPgkgEQgWgDgTgJQgNAagYASQgaAUgeAEQgUADgUgDQgEAVgMAUQgXAlgpAPIgPAFQAAAUgFATQgGATgLAQQgPAZgaAOQAJARADAUQAGAjgPAiQgKAWgPAQQASASAJAXQAOAjgJAoQgGAZgOAUIALAKQATAUAIAaQAJAagEAdQgCAQgFAOIAJAIQAcAXAKAlQAHAZgDAYIAIADQAYALARATQARATAJAYQAIAVgBAWIALAEQAYALARASQARATAJAYQAIAZgCAaQgBAXgLAVQgOAdgcAUQgcATggADQghACgfgPQgegOgTgbQgSgbgDgiIAAgMIgOgGQgfgPgTgbQgSgbgDgiQAAgMABgNIgMgFQgigQgSgeQgRgcgBghQAAgZAJgYQgNgJgKgNQgTgWgHgdQgHgeAHgcQAGgYAPgUQgMgLgKgNQgZgjACgqQABgqAcghIAGgHQgOgOgJgTQgPggAEglQAFgmAXgbQAOgRASgLIgEgIQgOghAFgiQAFgiAXgbQAXgcAggLIAPgEQgBgVAHgVQAKghAYgWQAYgWAhgHQAagFAXAEQAEgYAOgWQASgaAcgPQAcgPAfAAQAdAAAaANQAJgSAPgQQAbgaAigHQAjgHAiANQAPAGAMAIQAKgKAMgHQAagQAgAAQAggBAcAOQAbAOATAaIAHALQAmgYAtAGQAuAFAeAjQATAUAIAbQAegMAeAEQAiAEAcAVQAcAWAMAgQAHASABATQAXgCAXAGQAZAGAUAQQAUARANAWQAMAYACAZIABAJIANACQAgAGAZAVQAZAWALAhQAIAYgBAXQAiAFAZAVQAYAVAMAgQAMAggFAgQgCAMgFAMIADAAQAfAAAcAQQAcAQARAbQASAdAAAkQAAANgCAMQAMABALAEQAaAIAWATQAVATAKAaQAMAcgDAeIgBAIQAhAEAbAVQAbAUANAfQANAegEAiQgCANgEAMQAfADAZAPQAaAQAQAbQAQAaACAfQABAUgGATIASAAQAkADAcAVQAcAUAOAiQANAigGAiIgEAOQAZAHATAQQAVARANAZQAMAZABAbIgBAPQASgDASABQAgADAaARQAZARAPAdQAPAcAAAfQAAANgDANQAYAAAXAKQAtATAVAsQAPAigGAnQAPgGAQgDQAhgGAdALQAeALAWAZQAWAZAGAfQAGAbgHAcIgCAJQAVgMAYgDQAYgCAYAHQAZAGATAQQAVARAKAUQAQAegBAjIgBAOIAGgFQAZgQAfgDQAegDAcALQAbAMAVAXQAUAXAHAdQAGAbgGAcQgGAdgSAWQgRAWgaANQgbAMgcAAQgcAAgagMg");
	var mask_11_graphics_28 = new cjs.Graphics().p("ATQSUQgagNgSgWQgdglADguIABgMQgJAGgKAFQgfAPgigDQghgCgdgVQgcgUgOgfQgNgfAEgiQACgMADgLQgRAJgTAEQgbAFgcgHQgbgHgVgSQgWgSgLgaQgMgZAAgcQAAgKACgJIgCAAQgXALgZAAQgjABgfgRQgcgPgRgcQgRgcgBggQgBgRAEgRQgZAAgWgKQgogSgUgmQgRgiAEgkQgRAEgQgCQgagCgYgMQgYgMgQgVQgQgUgGgZQgHgaAEgZIAEgSQgjgKgXgaQgTgWgIgdQgIgeAGgdIACgGIgJAAQgjgBgdgRQgdgSgQgfQgRgfACgiQABgRAGgRIgFAAQgggEgbgSQgbgUgNgdQgOgeADgiIABgHQgUgDgRgIQgcgOgSgXQgeglAEgxIACgOQgfgEgcgTQgdgVgNgfQgNgdADggQACgSAGgPQgLAAgLgCQgigGgZgWQgZgUgLgfQgKgZACgaIgHgBQghgIgYgWQgYgVgKghQgGgRAAgRQgOgBgNgEQgfgJgXgXQgXgXgJgfQgEgNgBgOQgVABgUgFQghgIgZgZQgVgXgJgcIgKAEQgfAIgggHQgggHgXgVQgRgOgJgTQgKAFgKAFQgZAKgbgBQgbgBgZgMIgNgIQgNAMgSAJQgfAPglgEQgWgDgSgJQgNAagYASQgaAUgfAEQgUADgTgDQgFAVgMAUQgWAlgpAPIgQAFQABAUgGATQgFATgLAQQgQAZgZAOQAJARADAUQAFAjgPAiQgJAWgPAQQASASAJAXQAOAjgKAoQgGAZgOAUIALAKQATAUAJAaQAIAagDAdQgCAQgGAOIAKAIQAbAXAKAlQAIAZgDAYIAHADQAYALARATQASATAIAYQAIAVAAAWIAKAEQAYALARASQARATAJAYQAJAZgCAaQgCAXgKAVQgOAdgcAUQgcATghADQggACgfgPQgfgOgSgbQgTgbgCgiIAAgMIgPgGQgegPgTgbQgTgbgCgiQgBgMACgNIgMgFQgigQgTgeQgRgcgBghQAAgZAKgYQgNgJgLgNQgSgWgHgdQgHgeAGgcQAGgYAQgUQgNgLgKgNQgYgjABgqQACgqAbghIAHgHQgOgOgJgTQgQggAFglQAEgmAXgbQAOgRATgLIgEgIQgOghAFgiQAFgiAWgbQAXgcAggLIAQgEQgBgVAGgVQALghAYgWQAYgWAhgHQAZgFAYAEQAEgYAOgWQARgaAcgPQAdgPAfAAQAcAAAaANQAJgSAQgQQAagaAjgHQAigHAjANQAOAGAMAIQAKgKAMgHQAbgQAgAAQAggBAbAOQAcAOASAaIAIALQAmgYAtAGQAtAFAfAjQASAUAJAbQAdgMAeAEQAiAEAcAVQAcAWAMAgQAHASABATQAXgCAXAGQAZAGAVAQQAUARAMAWQANAYACAZIAAAJIANACQAhAGAYAVQAaAWALAhQAHAYgBAXQAiAFAZAVQAaAVAMAgQAMAggGAgQgCAMgEAMIACAAQAfAAAdAQQAbAQAQAbQATAdAAAkQAAANgCAMQALABALAEQAbAIAVATQAVATALAaQALAcgDAeIgBAIQAhAEAcAVQAbAUANAfQANAegFAiQgBANgFAMQAfADAZAPQAaAQARAbQAQAaABAfQABAUgFATIARAAQAlADAcAVQAcAUANAiQAOAigHAiIgDAOQAYAHAUAQQAVARAMAZQANAZAAAbIAAAPQARgDATABQAfADAaARQAaARAPAdQAOAcAAAfQAAANgDANQAZAAAWAKQAuATAUAsQAQAigHAnQAPgGARgDQAggGAeALQAeALAWAZQAVAZAHAfQAGAbgHAcIgCAJQAVgMAXgDQAZgCAYAHQAYAGATAQQAVARALAUQAQAegBAjIgBAOIAGgFQAZgQAegDQAfgDAbALQAcAMAUAXIAHAIQAMgVASgPQAUgQAZgHQAZgHAYAEQAfAEAbATQAaATANAdQANAagBAfQgCAegOAaQgOAagaARQgZAQgeAEQgdADgcgLQgdgKgUgWIgIgLIgLAQQgRAWgbANQgaAMgcAAQgcAAgagMg");
	var mask_11_graphics_29 = new cjs.Graphics().p("ASlSUQgagNgSgWQgdglADguIABgMQgJAGgKAFQgfAPgigDQghgCgdgVQgcgUgOgfQgNgfAEgiQACgMADgLQgRAJgTAEQgbAFgcgHQgbgHgVgSQgWgSgLgaQgMgZAAgcQAAgKACgJIgCAAQgXALgZAAQgjABgfgRQgcgPgRgcQgRgcgBggQgBgRAEgRQgZAAgWgKQgogSgUgmQgSgiAEgkQgQAEgQgCQgagCgYgMQgYgMgQgVQgQgUgGgZQgHgaAEgZIAEgSQgjgKgXgaQgTgWgIgdQgIgeAGgdIACgGIgJAAQgjgBgdgRQgdgSgQgfQgRgfACgiQABgRAGgRIgFAAQgggEgbgSQgbgUgMgdQgOgeADgiIABgHQgUgDgSgIQgcgOgSgXQgeglAEgxIACgOQgfgEgcgTQgdgVgNgfQgNgdADggQACgSAGgPQgLAAgLgCQgigGgZgWQgZgUgLgfQgKgZACgaIgHgBQghgIgYgWQgYgVgKghQgGgRAAgRQgOgBgNgEQgfgJgXgXQgXgXgJgfQgEgNgBgOQgVABgUgFQghgIgZgZQgVgXgJgcIgKAEQgfAIgggHQgggHgXgVQgRgOgKgTQgJAFgKAFQgZAKgbgBQgbgBgZgMIgNgIQgOAMgRAJQgfAPglgEQgWgDgSgJQgNAagYASQgaAUgfAEQgUADgUgDQgEAVgMAUQgWAlgpAPIgQAFQABAUgGATQgFATgLAQQgQAZgZAOQAIARAEAUQAFAjgPAiQgJAWgPAQQASASAJAXQAOAjgKAoQgGAZgOAUIALAKQATAUAJAaQAIAagDAdQgCAQgGAOIAKAIQAbAXAKAlQAHAZgCAYIAHADQAYALARATQASATAIAYQAIAVgBAWIALAEQAYALARASQARATAJAYQAJAZgCAaQgCAXgKAVQgOAdgcAUQgcATghADQggACgfgPQgfgOgSgbQgTgbgCgiIgBgMIgOgGQgegPgTgbQgTgbgCgiQgBgMABgNIgLgFQgigQgTgeQgRgcgBghQAAgZAKgYQgOgJgKgNQgSgWgHgdQgHgeAGgcQAGgYAPgUQgMgLgKgNQgYgjABgqQACgqAbghIAGgHQgOgOgIgTQgQggAFglQAEgmAXgbQAOgRATgLIgEgIQgOghAFgiQAFgiAWgbQAXgcAggLIAPgEQgBgVAHgVQALghAYgWQAYgWAhgHQAZgFAXAEQAFgYAOgWQARgaAcgPQAdgPAfAAQAcAAAaANQAJgSAQgQQAagaAjgHQAigHAjANQAOAGAMAIQAKgKAMgHQAbgQAgAAQAggBAbAOQAcAOASAaIAHALQAmgYAuAGQAtAFAfAjQASAUAIAbQAegMAeAEQAiAEAcAVQAcAWAMAgQAHASABATQAXgCAXAGQAZAGAVAQQAUARAMAWQANAYACAZIAAAJIANACQAhAGAYAVQAaAWALAhQAHAYgBAXQAiAFAZAVQAaAVAMAgQAMAggGAgQgCAMgEAMIACAAQAfAAAdAQQAcAQAQAbQASAdAAAkQAAANgDAMQAMABALAEQAbAIAVATQAVATALAaQALAcgDAeIgBAIQAhAEAcAVQAbAUANAfQANAegFAiQgCANgEAMQAfADAZAPQAaAQARAbQAQAaABAfQABAUgGATIASAAQAlADAcAVQAcAUANAiQAOAigHAiIgDAOQAYAHAUAQQAVARAMAZQANAZAAAbIgBAPQASgDATABQAfADAaARQAaARAPAdQAOAcAAAfQAAANgDANQAYAAAXAKQAuATAUAsQAPAigGAnQAPgGARgDQAggGAeALQAeALAWAZQAVAZAHAfQAGAbgHAcIgDAJQAVgMAYgDQAZgCAYAHQAYAGATAQQAVARALAUQAQAegBAjIgCAOIAHgFQAZgQAegDQAfgDAbALQAcAMAUAXIAHAIQALgVATgPQAUgQAZgHQAKgDAKgBQgKgNgGgQQgOgkAIgkQAHgeAVgYQAUgXAdgMQAcgLAgAEQAfAEAZASQAZARAPAcQAOAdgBAeQAAAfgQAcQgPAbgaARQgZAPgdADQAIAKAFAMQANAagBAfQgCAegOAaQgOAagaARQgZAQgeAEQgdADgcgLQgdgKgUgWIgJgLIgKAQQgRAWgbANQgaAMgcAAQgcAAgagMg");
	var mask_11_graphics_30 = new cjs.Graphics().p("ASlSUQgagNgSgWQgdglADguIABgMQgJAGgKAFQgfAPgigDQghgCgdgVQgcgUgOgfQgNgfAEgiQACgMADgLQgRAJgTAEQgbAFgcgHQgbgHgVgSQgWgSgLgaQgMgZAAgcQAAgKACgJIgCAAQgXALgZAAQgjABgfgRQgcgPgRgcQgRgcgBggQgBgRAEgRQgZAAgWgKQgogSgUgmQgSgiAEgkQgQAEgQgCQgagCgYgMQgYgMgQgVQgQgUgGgZQgHgaAEgZIAEgSQgjgKgXgaQgTgWgIgdQgIgeAGgdIACgGIgJAAQgjgBgdgRQgdgSgQgfQgRgfACgiQABgRAGgRIgFAAQgggEgbgSQgbgUgMgdQgOgeADgiIABgHQgUgDgSgIQgcgOgSgXQgeglAEgxIACgOQgfgEgcgTQgdgVgNgfQgNgdADggQACgSAGgPQgLAAgLgCQgigGgZgWQgZgUgLgfQgKgZACgaIgHgBQghgIgYgWQgYgVgKghQgGgRAAgRQgOgBgNgEQgfgJgXgXQgXgXgJgfQgEgNgBgOQgVABgUgFQghgIgZgZQgVgXgJgcIgKAEQgfAIgggHQgggHgXgVQgRgOgKgTQgJAFgKAFQgZAKgbgBQgbgBgZgMIgNgIQgOAMgRAJQgfAPglgEQgWgDgSgJQgNAagYASQgaAUgfAEQgUADgUgDQgEAVgMAUQgWAlgpAPIgQAFQABAUgGATQgFATgLAQQgQAZgZAOQAIARAEAUQAFAjgPAiQgJAWgPAQQASASAJAXQAOAjgKAoQgGAZgOAUIALAKQATAUAJAaQAIAagDAdQgCAQgGAOIAKAIQAbAXAKAlQAHAZgCAYIAHADQAYALARATQASATAIAYQAIAVgBAWIALAEQAYALARASQARATAJAYQAJAZgCAaQgCAXgKAVQgOAdgcAUQgcATghADQggACgfgPQgfgOgSgbQgTgbgCgiIgBgMIgOgGQgegPgTgbQgTgbgCgiQgBgMABgNIgLgFQgigQgTgeQgRgcgBghQAAgZAKgYQgOgJgKgNQgSgWgHgdQgHgeAGgcQAGgYAPgUQgMgLgKgNQgYgjABgqQACgqAbghIAGgHQgOgOgIgTQgQggAFglQAEgmAXgbQAOgRATgLIgEgIQgOghAFgiQAFgiAWgbQAXgcAggLIAPgEQgBgVAHgVQALghAYgWQAYgWAhgHQAZgFAXAEQAFgYAOgWQARgaAcgPQAdgPAfAAQAcAAAaANQAJgSAQgQQAagaAjgHQAigHAjANQAOAGAMAIQAKgKAMgHQAbgQAgAAQAggBAbAOQAcAOASAaIAHALQAmgYAuAGQAtAFAfAjQASAUAIAbQAegMAeAEQAiAEAcAVQAcAWAMAgQAHASABATQAXgCAXAGQAZAGAVAQQAUARAMAWQANAYACAZIAAAJIANACQAhAGAYAVQAaAWALAhQAHAYgBAXQAiAFAZAVQAaAVAMAgQAMAggGAgQgCAMgEAMIACAAQAfAAAdAQQAcAQAQAbQASAdAAAkQAAANgDAMQAMABALAEQAbAIAVATQAVATALAaQALAcgDAeIgBAIQAhAEAcAVQAbAUANAfQANAegFAiQgCANgEAMQAfADAZAPQAaAQARAbQAQAaABAfQABAUgGATIASAAQAlADAcAVQAcAUANAiQAOAigHAiIgDAOQAYAHAUAQQAVARAMAZQANAZAAAbIgBAPQASgDATABQAfADAaARQAaARAPAdQAOAcAAAfQAAANgDANQAYAAAXAKQAuATAUAsQAPAigGAnQAPgGARgDQAggGAeALQAeALAWAZQAVAZAHAfQAGAbgHAcIgDAJQAVgMAYgDQAZgCAYAHQAYAGATAQQAVARALAUQAQAegBAjIgCAOIAHgFQAZgQAegDQAfgDAbALQAcAMAUAXIAHAIQALgVATgPQAUgQAZgHQAKgDAKgBQgKgNgGgQQgOgkAIgkQACgJAEgJQgWgJgSgSQgdgcgHglQgHglAQgkQAQglAggUQAggTAoACQAoACAeAXQAlAdAIAuQAIAkgOAhQANAGAMAIQAZARAPAcQAOAdgBAeQAAAfgQAcQgPAbgaARQgZAPgdADQAIAKAFAMQANAagBAfQgCAegOAaQgOAagaARQgZAQgeAEQgdADgcgLQgdgKgUgWIgJgLIgKAQQgRAWgbANQgaAMgcAAQgcAAgagMg");
	var mask_11_graphics_31 = new cjs.Graphics().p("ASlSUQgagNgSgWQgdglADguIABgMQgJAGgKAFQgfAPgigDQghgCgdgVQgcgUgOgfQgNgfAEgiQACgMADgLQgRAJgTAEQgbAFgcgHQgbgHgVgSQgWgSgLgaQgMgZAAgcQAAgKACgJIgCAAQgXALgZAAQgjABgfgRQgcgPgRgcQgRgcgBggQgBgRAEgRQgZAAgWgKQgogSgUgmQgSgiAEgkQgQAEgQgCQgagCgYgMQgYgMgQgVQgQgUgGgZQgHgaAEgZIAEgSQgjgKgXgaQgTgWgIgdQgIgeAGgdIACgGIgJAAQgjgBgdgRQgdgSgQgfQgRgfACgiQABgRAGgRIgFAAQgggEgbgSQgbgUgMgdQgOgeADgiIABgHQgUgDgSgIQgcgOgSgXQgeglAEgxIACgOQgfgEgcgTQgdgVgNgfQgNgdADggQACgSAGgPQgLAAgLgCQgigGgZgWQgZgUgLgfQgKgZACgaIgHgBQghgIgYgWQgYgVgKghQgGgRAAgRQgOgBgNgEQgfgJgXgXQgXgXgJgfQgEgNgBgOQgVABgUgFQghgIgZgZQgVgXgJgcIgKAEQgfAIgggHQgggHgXgVQgRgOgKgTQgJAFgKAFQgZAKgbgBQgbgBgZgMIgNgIQgOAMgRAJQgfAPglgEQgWgDgSgJQgNAagYASQgaAUgfAEQgUADgUgDQgEAVgMAUQgWAlgpAPIgQAFQABAUgGATQgFATgLAQQgQAZgZAOQAIARAEAUQAFAjgPAiQgJAWgPAQQASASAJAXQAOAjgKAoQgGAZgOAUIALAKQATAUAJAaQAIAagDAdQgCAQgGAOIAKAIQAbAXAKAlQAHAZgCAYIAHADQAYALARATQASATAIAYQAIAVgBAWIALAEQAYALARASQARATAJAYQAJAZgCAaQgCAXgKAVQgOAdgcAUQgcATghADQggACgfgPQgfgOgSgbQgTgbgCgiIgBgMIgOgGQgegPgTgbQgTgbgCgiQgBgMABgNIgLgFQgigQgTgeQgRgcgBghQAAgZAKgYQgOgJgKgNQgSgWgHgdQgHgeAGgcQAGgYAPgUQgMgLgKgNQgYgjABgqQACgqAbghIAGgHQgOgOgIgTQgQggAFglQAEgmAXgbQAOgRATgLIgEgIQgOghAFgiQAFgiAWgbQAXgcAggLIAPgEQgBgVAHgVQALghAYgWQAYgWAhgHQAZgFAXAEQAFgYAOgWQARgaAcgPQAdgPAfAAQAcAAAaANQAJgSAQgQQAagaAjgHQAigHAjANQAOAGAMAIQAKgKAMgHQAbgQAgAAQAggBAbAOQAcAOASAaIAHALQAmgYAuAGQAtAFAfAjQASAUAIAbQAegMAeAEQAiAEAcAVQAcAWAMAgQAHASABATQAXgCAXAGQAZAGAVAQQAUARAMAWQANAYACAZIAAAJIANACQAhAGAYAVQAaAWALAhQAHAYgBAXQAiAFAZAVQAaAVAMAgQAMAggGAgQgCAMgEAMIACAAQAfAAAdAQQAcAQAQAbQASAdAAAkQAAANgDAMQAMABALAEQAbAIAVATQAVATALAaQALAcgDAeIgBAIQAhAEAcAVQAbAUANAfQANAegFAiQgCANgEAMQAfADAZAPQAaAQARAbQAQAaABAfQABAUgGATIASAAQAlADAcAVQAcAUANAiQAOAigHAiIgDAOQAYAHAUAQQAVARAMAZQANAZAAAbIgBAPQASgDATABQAfADAaARQAaARAPAdQAOAcAAAfQAAANgDANQAYAAAXAKQAuATAUAsQAPAigGAnQAPgGARgDQAggGAeALQAeALAWAZQAVAZAHAfQAGAbgHAcIgDAJQAVgMAYgDQAZgCAYAHQAYAGATAQQAVARALAUQAQAegBAjIgCAOIAHgFQAZgQAegDQAfgDAbALQAcAMAUAXIAHAIQALgVATgPQAUgQAZgHQAKgDAKgBQgKgNgGgQQgOgkAIgkQACgJAEgJQgWgJgSgSQgdgcgHglQgFgYAFgYQgQgCgPgHQgZgKgSgUQgSgUgJgZQgKghAIgiQAIgiAXgZQAYgYAigJQAigJAhAJQAgAKAYAaQAYAaAHAhQAFAZgFAZQAhAEAaAUQAlAdAIAuQAIAkgOAhQANAGAMAIQAZARAPAcQAOAdgBAeQAAAfgQAcQgPAbgaARQgZAPgdADQAIAKAFAMQANAagBAfQgCAegOAaQgOAagaARQgZAQgeAEQgdADgcgLQgdgKgUgWIgJgLIgKAQQgRAWgbANQgaAMgcAAQgcAAgagMg");
	var mask_11_graphics_32 = new cjs.Graphics().p("ASlSUQgagNgSgWQgdglADguIABgMQgJAGgKAFQgfAPgigDQghgCgdgVQgcgUgOgfQgNgfAEgiQACgMADgLQgRAJgTAEQgbAFgcgHQgbgHgVgSQgWgSgLgaQgMgZAAgcQAAgKACgJIgCAAQgXALgZAAQgjABgfgRQgcgPgRgcQgRgcgBggQgBgRAEgRQgZAAgWgKQgogSgUgmQgSgiAEgkQgQAEgQgCQgagCgYgMQgYgMgQgVQgQgUgGgZQgHgaAEgZIAEgSQgjgKgXgaQgTgWgIgdQgIgeAGgdIACgGIgJAAQgjgBgdgRQgdgSgQgfQgRgfACgiQABgRAGgRIgFAAQgggEgbgSQgbgUgMgdQgOgeADgiIABgHQgUgDgSgIQgcgOgSgXQgeglAEgxIACgOQgfgEgcgTQgdgVgNgfQgNgdADggQACgSAGgPQgLAAgLgCQgigGgZgWQgZgUgLgfQgKgZACgaIgHgBQghgIgYgWQgYgVgKghQgGgRAAgRQgOgBgNgEQgfgJgXgXQgXgXgJgfQgEgNgBgOQgVABgUgFQghgIgZgZQgVgXgJgcIgKAEQgfAIgggHQgggHgXgVQgRgOgKgTQgJAFgKAFQgZAKgbgBQgbgBgZgMIgNgIQgOAMgRAJQgfAPglgEQgWgDgSgJQgNAagYASQgaAUgfAEQgUADgUgDQgEAVgMAUQgWAlgpAPIgQAFQABAUgGATQgFATgLAQQgQAZgZAOQAIARAEAUQAFAjgPAiQgJAWgPAQQASASAJAXQAOAjgKAoQgGAZgOAUIALAKQATAUAJAaQAIAagDAdQgCAQgGAOIAKAIQAbAXAKAlQAHAZgCAYIAHADQAYALARATQASATAIAYQAIAVgBAWIALAEQAYALARASQARATAJAYQAJAZgCAaQgCAXgKAVQgOAdgcAUQgcATghADQggACgfgPQgfgOgSgbQgTgbgCgiIgBgMIgOgGQgegPgTgbQgTgbgCgiQgBgMABgNIgLgFQgigQgTgeQgRgcgBghQAAgZAKgYQgOgJgKgNQgSgWgHgdQgHgeAGgcQAGgYAPgUQgMgLgKgNQgYgjABgqQACgqAbghIAGgHQgOgOgIgTQgQggAFglQAEgmAXgbQAOgRATgLIgEgIQgOghAFgiQAFgiAWgbQAXgcAggLIAPgEQgBgVAHgVQALghAYgWQAYgWAhgHQAZgFAXAEQAFgYAOgWQARgaAcgPQAdgPAfAAQAcAAAaANQAJgSAQgQQAagaAjgHQAigHAjANQAOAGAMAIQAKgKAMgHQAbgQAgAAQAggBAbAOQAcAOASAaIAHALQAmgYAuAGQAtAFAfAjQASAUAIAbQAegMAeAEQAiAEAcAVQAcAWAMAgQAHASABATQAXgCAXAGQAZAGAVAQQAUARAMAWQANAYACAZIAAAJIANACQAhAGAYAVQAaAWALAhQAHAYgBAXQAiAFAZAVQAaAVAMAgQAMAggGAgQgCAMgEAMIACAAQAfAAAdAQQAcAQAQAbQASAdAAAkQAAANgDAMQAMABALAEQAbAIAVATQAVATALAaQALAcgDAeIgBAIQAhAEAcAVQAbAUANAfQANAegFAiQgCANgEAMQAfADAZAPQAaAQARAbQAQAaABAfQABAUgGATIASAAQAlADAcAVQAcAUANAiQAOAigHAiIgDAOQAYAHAUAQQAVARAMAZQANAZAAAbIgBAPQASgDATABQAfADAaARQAaARAPAdQAOAcAAAfQAAANgDANQAYAAAXAKQAuATAUAsQAPAigGAnQAPgGARgDQAggGAeALQAeALAWAZQAVAZAHAfQAGAbgHAcIgDAJQAVgMAYgDQAZgCAYAHQAYAGATAQQAVARALAUQAQAegBAjIgCAOIAHgFQAZgQAegDQAfgDAbALQAcAMAUAXIAHAIQALgVATgPQAUgQAZgHQAKgDAKgBQgKgNgGgQQgOgkAIgkQACgJAEgJQgWgJgSgSQgdgcgHglQgFgYAFgYQgQgCgPgHQgZgKgSgUQgSgUgJgZQgJgdAFgdQgVAAgVgHQgvgPgYgtQgYgtAOgwQAHgZARgUQARgUAXgMQAXgLAagCQAbgBAYAJQAYAJATATQATASAJAYQALAagCAcIgBANQATgBATAFQAgAKAYAaQAYAaAHAhQAFAZgFAZQAhAEAaAUQAlAdAIAuQAIAkgOAhQANAGAMAIQAZARAPAcQAOAdgBAeQAAAfgQAcQgPAbgaARQgZAPgdADQAIAKAFAMQANAagBAfQgCAegOAaQgOAagaARQgZAQgeAEQgdADgcgLQgdgKgUgWIgJgLIgKAQQgRAWgbANQgaAMgcAAQgcAAgagMg");
	var mask_11_graphics_33 = new cjs.Graphics().p("ASlSUQgagNgSgWQgdglADguIABgMQgJAGgKAFQgfAPgigDQghgCgdgVQgcgUgOgfQgNgfAEgiQACgMADgLQgRAJgTAEQgbAFgcgHQgbgHgVgSQgWgSgLgaQgMgZAAgcQAAgKACgJIgCAAQgXALgZAAQgjABgfgRQgcgPgRgcQgRgcgBggQgBgRAEgRQgZAAgWgKQgogSgUgmQgSgiAEgkQgQAEgQgCQgagCgYgMQgYgMgQgVQgQgUgGgZQgHgaAEgZIAEgSQgjgKgXgaQgTgWgIgdQgIgeAGgdIACgGIgJAAQgjgBgdgRQgdgSgQgfQgRgfACgiQABgRAGgRIgFAAQgggEgbgSQgbgUgMgdQgOgeADgiIABgHQgUgDgSgIQgcgOgSgXQgeglAEgxIACgOQgfgEgcgTQgdgVgNgfQgNgdADggQACgSAGgPQgLAAgLgCQgigGgZgWQgZgUgLgfQgKgZACgaIgHgBQghgIgYgWQgYgVgKghQgGgRAAgRQgOgBgNgEQgfgJgXgXQgXgXgJgfQgEgNgBgOQgVABgUgFQghgIgZgZQgVgXgJgcIgKAEQgfAIgggHQgggHgXgVQgRgOgKgTQgJAFgKAFQgZAKgbgBQgbgBgZgMIgNgIQgOAMgRAJQgfAPglgEQgWgDgSgJQgNAagYASQgaAUgfAEQgUADgUgDQgEAVgMAUQgWAlgpAPIgQAFQABAUgGATQgFATgLAQQgQAZgZAOQAIARAEAUQAFAjgPAiQgJAWgPAQQASASAJAXQAOAjgKAoQgGAZgOAUIALAKQATAUAJAaQAIAagDAdQgCAQgGAOIAKAIQAbAXAKAlQAHAZgCAYIAHADQAYALARATQASATAIAYQAIAVgBAWIALAEQAYALARASQARATAJAYQAJAZgCAaQgCAXgKAVQgOAdgcAUQgcATghADQggACgfgPQgfgOgSgbQgTgbgCgiIgBgMIgOgGQgegPgTgbQgTgbgCgiQgBgMABgNIgLgFQgigQgTgeQgRgcgBghQAAgZAKgYQgOgJgKgNQgSgWgHgdQgHgeAGgcQAGgYAPgUQgMgLgKgNQgYgjABgqQACgqAbghIAGgHQgOgOgIgTQgQggAFglQAEgmAXgbQAOgRATgLIgEgIQgOghAFgiQAFgiAWgbQAXgcAggLIAPgEQgBgVAHgVQALghAYgWQAYgWAhgHQAZgFAXAEQAFgYAOgWQARgaAcgPQAdgPAfAAQAcAAAaANQAJgSAQgQQAagaAjgHQAigHAjANQAOAGAMAIQAKgKAMgHQAbgQAgAAQAggBAbAOQAcAOASAaIAHALQAmgYAuAGQAtAFAfAjQASAUAIAbQAegMAeAEQAiAEAcAVQAcAWAMAgQAHASABATQAXgCAXAGQAZAGAVAQQAUARAMAWQANAYACAZIAAAJIANACQAhAGAYAVQAaAWALAhQAHAYgBAXQAiAFAZAVQAaAVAMAgQAMAggGAgQgCAMgEAMIACAAQAfAAAdAQQAcAQAQAbQASAdAAAkQAAANgDAMQAMABALAEQAbAIAVATQAVATALAaQALAcgDAeIgBAIQAhAEAcAVQAbAUANAfQANAegFAiQgCANgEAMQAfADAZAPQAaAQARAbQAQAaABAfQABAUgGATIASAAQAlADAcAVQAcAUANAiQAOAigHAiIgDAOQAYAHAUAQQAVARAMAZQANAZAAAbIgBAPQASgDATABQAfADAaARQAaARAPAdQAOAcAAAfQAAANgDANQAYAAAXAKQAuATAUAsQAPAigGAnQAPgGARgDQAggGAeALQAeALAWAZQAVAZAHAfQAGAbgHAcIgDAJQAVgMAYgDQAZgCAYAHQAYAGATAQQAVARALAUQAQAegBAjIgCAOIAHgFQAZgQAegDQAfgDAbALQAcAMAUAXIAHAIQALgVATgPQAUgQAZgHQAKgDAKgBQgKgNgGgQQgOgkAIgkQACgJAEgJQgWgJgSgSQgdgcgHglQgFgYAFgYQgQgCgPgHQgZgKgSgUQgSgUgJgZQgJgdAFgdQgVAAgVgHQgvgPgYgtQgQgeABgfQgVgDgSgKQgZgOgQgWQgegpAHgxQAEgdASgZQARgaAbgOQAagOAfAAQAfAAAbAOQAaANASAaQASAZAEAdQABAKAAAKQAMACAMAEQAYAJATATQATASAJAYQALAagCAcIgBANQATgBATAFQAgAKAYAaQAYAaAHAhQAFAZgFAZQAhAEAaAUQAlAdAIAuQAIAkgOAhQANAGAMAIQAZARAPAcQAOAdgBAeQAAAfgQAcQgPAbgaARQgZAPgdADQAIAKAFAMQANAagBAfQgCAegOAaQgOAagaARQgZAQgeAEQgdADgcgLQgdgKgUgWIgJgLIgKAQQgRAWgbANQgaAMgcAAQgcAAgagMg");

	this.timeline.addTween(cjs.Tween.get(mask_11).to({graphics:mask_11_graphics_0,x:97.4501,y:213.0679}).wait(1).to({graphics:mask_11_graphics_1,x:93.2065,y:207.0429}).wait(1).to({graphics:mask_11_graphics_2,x:93.2065,y:207.0429}).wait(1).to({graphics:mask_11_graphics_3,x:89.1434,y:200.4458}).wait(1).to({graphics:mask_11_graphics_4,x:86.9876,y:193.0633}).wait(1).to({graphics:mask_11_graphics_5,x:85.9397,y:184.5693}).wait(1).to({graphics:mask_11_graphics_6,x:85.9397,y:175.878}).wait(1).to({graphics:mask_11_graphics_7,x:85.9397,y:167.6317}).wait(1).to({graphics:mask_11_graphics_8,x:85.9397,y:161.3274}).wait(1).to({graphics:mask_11_graphics_9,x:88.959,y:156.3421}).wait(1).to({graphics:mask_11_graphics_10,x:97.2688,y:153.5204}).wait(1).to({graphics:mask_11_graphics_11,x:104.9697,y:152.9645}).wait(1).to({graphics:mask_11_graphics_12,x:113.7787,y:152.9645}).wait(1).to({graphics:mask_11_graphics_13,x:121.9849,y:152.9645}).wait(1).to({graphics:mask_11_graphics_14,x:128.9497,y:152.9645}).wait(1).to({graphics:mask_11_graphics_15,x:134.6068,y:152.9645}).wait(1).to({graphics:mask_11_graphics_16,x:139.8321,y:152.9645}).wait(1).to({graphics:mask_11_graphics_17,x:145.6707,y:152.9645}).wait(1).to({graphics:mask_11_graphics_18,x:151.1267,y:152.9645}).wait(1).to({graphics:mask_11_graphics_19,x:156.5535,y:152.9645}).wait(1).to({graphics:mask_11_graphics_20,x:162.0018,y:152.9645}).wait(1).to({graphics:mask_11_graphics_21,x:168.4013,y:156.6781}).wait(1).to({graphics:mask_11_graphics_22,x:172.6468,y:164.4898}).wait(1).to({graphics:mask_11_graphics_23,x:180.0457,y:171.1757}).wait(1).to({graphics:mask_11_graphics_24,x:186.0917,y:178.8244}).wait(1).to({graphics:mask_11_graphics_25,x:194.8091,y:185.5217}).wait(1).to({graphics:mask_11_graphics_26,x:203.6736,y:192.8895}).wait(1).to({graphics:mask_11_graphics_27,x:213.5147,y:198.8217}).wait(1).to({graphics:mask_11_graphics_28,x:223.9744,y:198.8217}).wait(1).to({graphics:mask_11_graphics_29,x:228.2989,y:198.8217}).wait(1).to({graphics:mask_11_graphics_30,x:228.2989,y:198.8217}).wait(1).to({graphics:mask_11_graphics_31,x:228.2989,y:198.8217}).wait(1).to({graphics:mask_11_graphics_32,x:228.2989,y:198.8217}).wait(1).to({graphics:mask_11_graphics_33,x:228.2989,y:198.8217}).wait(107));

	// lady01
	this.instance_21 = new lib.CachedBmp_9();
	this.instance_21.setTransform(69.35,88.6,0.5,0.5);

	var maskedShapeInstanceList = [this.instance_21];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_11;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(140));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(204.7,330.3,261.2,455.2);
// library properties:
lib.properties = {
	id: '9F31DE76339F4FAF984B534B2FCF9509',
	width: 474,
	height: 506,
	fps: 20,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/圖層1影像.png", id:"圖層1影像"},
		{src:"images/圖層1影像_1.png", id:"圖層1影像_1"},
		{src:"images/手繪lady_atlas_1.png", id:"手繪lady_atlas_1"}
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
an.compositions['9F31DE76339F4FAF984B534B2FCF9509'] = {
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