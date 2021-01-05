
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var bottomRect, leftRect, rightRect;


function preload()
{
	dust = loadImage("dustbingreen.png")
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//function for static
	var static ={
		isStatic: true
	}

	//Create the Bodies Here.
	//create ball
	ball = new paper(50,600,25);
	
	//create dustbin
	bottomRect = new dustbin(550,650,100,5);

	leftRect = new dustbin(500,610,20,100);

	rightRect = new dustbin(600,610,20,100);

	//create ground
	ground1 = new ground(400,665,800,10);
	
	
	Engine.run(engine);
  
}


function draw() {
	background("grey");

	//render ground
	ground1.display();
	
	//to render rectangles
	fill("#ffffff");
	bottomRect.display();
	leftRect.display();
	rightRect.display();

	

	imageMode(CENTER);
	image(dust,550,600,120,120);

	//to render the circle
	fill("#FF1493");

	ball.display();
  
  drawSprites();
  
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.x,ball.x.position,{x:95,y:-95});
	}
}


