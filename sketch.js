
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball , groundObj, leftSide , rightSide;
var world,engine;
var radius=50;

///function preload()
//{
	
//}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic: false ,
		restitution:0.3 ,
		friction:0,
		density:1.2
	}

	groundObj =new Ground(400,800,800,50);
	leftSide =new Ground(775,720,20,110);
	rightSide =new Ground(650,720,20,110);

	ball=Bodies.circle(150,400,radius/2,ball_options);
    World.add(world,ball);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background(0);
  ellipse(ball.position.x,ball.position.y,radius,radius);

  groundObj.show();
  leftSide.show();
  rightSide.show();
  drawSprites();


  
 
}
function keyPressed(){
	if(keyCode === UP_ARROW) {
	  Matter.Body.applyForce(ball, ball.position, {x:100, y: -100})
	}
  }

