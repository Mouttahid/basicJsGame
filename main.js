var jeu = document.getElementById('j');
var c = jeu.getContext('2d');

jeu.width = 500;
jeu.height = 500;

var hero = {
	x:100,
	y:jeu.height - 40,
	w:40,
	h:40,
	color:"red"
}

function draw(){
	rectn(0,0,jeu.width,jeu.height,"lightblue");
	rectn(hero.x,hero.y,hero.w,hero.h,hero.color);
}

setInterval(draw,1000/60);

function rectn(x,y,w,h,color)
{
	c.fillStyle=color;
	c.fillRect(x,y,w,h);

}
