// Skeleton Skills
// By Léon Lenclos 2017
// leon.lenclos@gmail.com

var skulls = [];
var sounds = [];
var images = [[]];

function preload() {
	for (var i = 0; i < 4; i++) {
		sounds[i]=loadSound("how-loop.wav");
		images[i]=[];
		for (var j = 0; j < 5; j++) {
			images[i][j] = loadImage("imgs/" + i + "-" + j + ".png");
		}
	}
}

function setup() {
	var w = images[0][0].width;
	createCanvas(w * 4, w);
	for (var i = 0; i < 4; i++) {
		skulls[i] = new Skull(i * w, 0, images[i], sounds[i], i);
	}
	
}

function draw() {
	for (var i = 0; i < skulls.length; i++) {
		if(frameCount%4 === 0) {
			skulls[i].update();
		}
		skulls[i].show();
	}
}

function mousePressed () {
	for (var i = 0; i < skulls.length; i++) {
		if(skulls[i].isOver(mouseX, mouseY)) {
			skulls[i].changeState();
		}
	}
}

function keyPressed () {
	if(key >= 1 && key <= 4) {
		skulls[key-1].changeState(true);
	}
}
function keyReleased () {
	if(key >= 1 && key <= 4) {
		skulls[key-1].changeState(false);
	}
}