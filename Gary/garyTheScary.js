let gary;
function preload(){
	gary = loadImage('./garyTheScary.png');
}

function setup(){
	let gx = 0;
	let gy = 0;
	let gmovex = 0;
	let gmovey = 0;
	let level = 0;
	imageMode(CORNER);
	image(gary, 0, 0, 50, 50);
}

function draw(){
	image(img, 0, 0, 50, 50);
}

function garyMove(){
	
}