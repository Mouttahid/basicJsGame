var canvas = document.querySelector("canvas");
var c = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 500;

var x = 0;

function draw()
{	
	x += 5;

	c.fillStyle= "lightblue";
	c.fillRect(0,0,canvas.width,canvas.height);

	c.fillStyle = "green";
	c.fillRect(x,canvas.height-50,50,50);
}

setInterval(draw,1000/60);