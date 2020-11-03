
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	 dustbin1=new Dustbin(880,250,20,200);
	 dustbin2=new Dustbin(680,250,20,200);
	 dustbin3=new Dustbin(780,350,200,20);
     dustbinImg= new Dustbin1(780,250,200,200);
	 ground=new Ground(width/2,height/2,1200,20);
	 crumpled=new Ball(100,100);
	Engine.run(engine);
	keyPressed();
}


function draw() {
  background(255);
  
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();
 dustbinImg.display();

 ground.display();

 crumpled.display();
  drawSprites();
  Engine.update(engine); 
}



function keyPressed() {
	if (keyCode === UP_ARROW){
	   Matter.Body.applyForce(crumpled.body,crumpled.body.position,{x:1005,y:-650});
	 }
   
   if (keyCode === DOWN_ARROW){
	  Matter.Body.applyForce(crumpled.body,crumpled.body.position,{x:-1005,y:-650});
  }
}