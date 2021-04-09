
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5, Aasaman, rope1, rope2, rope3, rope4, rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world; 

bobObject1 = new Bob(250, 150, 35);
bobObject2 = new Bob(320,150,35);
bobObject3 = new Bob(390,150,35);
bobObject4 = new Bob(460,150,35);
bobObject5 = new Bob(530,150,35);
Aasaman = new Roof (380,150,500,100)
rope1 = new Rope(bobObject1.body, Aasaman.body, -140,0 )
rope2 = new Rope (bobObject2.body, Aasaman.body, -105, 0)
rope3 = new Rope (bobObject3.body, Aasaman.body,0, 0)
rope4 = new Rope (bobObject4.body, Aasaman.body,105,0)
rope5 = new Rope (bobObject5.body, Aasaman.body, 140,0)
	
//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  Aasaman.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}



