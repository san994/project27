
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1;
function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

  roof = new Roof(400,100,300,20);
	//Create the Bodies Here.
  bob1 = new Bob(50,500);
  bob2 = new Bob(100,500);
  bob3 = new Bob(150,500);
  bob4 = new Bob(0,500);
  bob5 = new Bob(-50,500);

  rope1 = new Rope(roof.body,bob1.body,0);
  rope2 = new Rope(roof.body,bob2.body,50);
  rope3 = new Rope(roof.body,bob3.body,100);
  rope4 = new Rope(roof.body,bob4.body,-50);
  rope5 = new Rope(roof.body,bob5.body,-100);

  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  
  
  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}

function keyPressed(){

if(keyCode === UP_ARROW){

Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-10,y:20})
  
}


}

