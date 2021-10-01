canvas = document.getElementById("mycanvas");
ctx = canvas.getContext("2d");

cw = 75;
ch = 100;
cx = 5;
cy = 225;
ci = "car2.png";
bi = "parkingLot.jpg";


//Set initial position for a car image.

function add() {
	background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = bi;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadgreencar;
    rover_imgTag.src = ci;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width,canvas.height)

}

function uploadgreencar() {
	ctx.drawImage(rover_imgTag, cx, cy, cw,ch);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(cy >=0)
    {
        cy= cy-10;
        console.log("when up arrow is pressed =" + cx + " - "+ cy);
        uploadBackground();
        uploadgreencar();
    }
}

function down()
{
	if(cy <=500)
    {
        cy= cy+10;
        console.log("when down arrow is pressed =" + cx + " - "+ cy);
        uploadBackground();
        uploadgreencar();
    }
}

function left()
{
	if(cx >=0)
    {
        cx= cx-10;
        console.log("when left arrow is pressed =" + cx + " - "+ cy);
        uploadBackground();
        uploadgreencar();
    }
}

function right()
{
	if(cx <=723)
    {
        cx= cx+10;
        console.log("when rigth arrow is pressed =" + cx + " - "+ cy);
        uploadBackground();
        uploadgreencar();
    }
}
