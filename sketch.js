
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Sling(390,150,360,40)

	bobObject1 = new bob(250,500,35);
	bobObject2 = new bob(320,500,35);
	bobObject3 = new bob(390,500,35);
	bobObject4 = new bob(460,500,35);
	bobObject5 = new bob(530,500,35);

	rope1 = new pendulum(bobObject1.body, roof.body, -35*4,0);
	rope2 = new pendulum(bobObject2.body, roof.body, -35*2,0);
	rope3 = new pendulum(bobObject3.body, roof.body, -35*0,0);
	rope4 = new pendulum(bobObject4.body, roof.body, -35*-2,0);
	rope5 = new pendulum(bobObject5.body, roof.body, -35*-4,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
Engine.update(engine);

  drawSprites();
 roof.display();
 bobObject1.display();
 bobObject2.display();
 bobObject3.display();
 bobObject4.display();
 bobObject5.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-1000,y:1000})
	}
}


