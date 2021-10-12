// Create a reference for the canvas

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); var new_image;
	img_imgTag.onload = uploadimg; var onload;
	img_imgTag.src = img_image; var load;
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if ((keyPressed >= 97 && keyPressed <= 122) || (keyPressed >= 65 && keyPressed <= 90))
		//write a code to check the type of key pressed
	else {
		otherkey();
		document.getElementById("d1").innerHTML = "You pressed symbol or other key";
	}
}

function aplhabetkey() {
	keyPressed = "65"
	img_image = "Alpkey.png";
	add(my_Canvas);
}
function numberkey() {
	keyPressed = "48"
	img_image = "numkey.png";
	add(my_Canvas);
}
function arrowkey() {
	keyPressed = "37"
	img_image = "Arrkey.png";
	add(my_Canvas);
}
function specialkey() {
	keyPressed = "17"
	img_image = "spkey.png";
	add(my_Canvas);
}
function otherkey() {
	keyPressed = "="
	img_image = "otherkey.png";
	add(my_Canvas);
}

