var paper;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper= new Paper(200,450,70);
    ground= new Ground(width/2,670,width,20);
    dustbin= new Dustbin(1200,650);
    

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  paper.display();
  ground.display();
  dustbin.display();
  
 
}

function keyPressed() {
 if(keyCode === UP_ARROW){
   Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-145})
 }
}



