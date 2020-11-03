
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof;
var chain,chain2,chain3,chain4,chain5;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	

	bobObject1 = new Bob(400,600,30,30);
	bobObject2 = new Bob(460,600,30,30);
	bobObject3 = new Bob(340,600,30,30);
	bobObject4 = new Bob(520,600,30,30);
	bobObject5 = new Bob(280,600,30,30);

	roof = new Roof(400,200,350,30);
	chain = new Chain(bobObject1.body,roof.body,0,0);
	chain2 = new Chain(bobObject2.body,roof.body,60,0);
	chain3 = new Chain(bobObject3.body,roof.body,-60,0);
	chain4 = new Chain(bobObject4.body,roof.body,120,0);
	chain5 = new Chain(bobObject5.body,roof.body,-120,0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  chain.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){ 
		Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:145,y:-145});
		
	}
	
}



