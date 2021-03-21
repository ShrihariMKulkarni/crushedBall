var ball;
var wall1 , wall2 , wall3;
var ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var flag;
function preload(){
	
}

function setup() {
	createCanvas(windowWidth,windowHeight);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(windowWidth/2,windowHeight-35,windowWidth,20)
    World.add(world,ground);
	
	wall1 = new Bin(windowWidth/1.1,windowHeight-145,20,200)
	wall2 = new Bin(windowWidth/1.3,windowHeight-145,20,200)
	wall3 = new Bin(windowWidth/1.192,windowHeight-55,200,20)
 
	ball = new Paper(windowWidth/3,windowHeight-37,30);
    


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
ground.display();
wall1.display();
wall2.display();
wall3.display();
ball.display();
 
}
function keyPressed(){

	if(keyCode === UP_ARROW){
  
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:90,y:-185});
	}
}


