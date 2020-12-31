
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var object1,object2,object3,object4,object5;
var ground1;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(400,180,300,20);

	bobDiameter=50;
	//Create the Bodies Here.
object1 = new Bob(300,500,50);
object2 = new Bob(350,500,50);
object3 = new Bob(400,500,50);
object4 = new Bob(450,500,50);
object5 = new Bob(500,500,50);



rope1=new Rope(object1.body,ground1.body,-100,0);
rope3=new Rope(object2.body,ground1.body,-50,0);
rope2=new Rope(object3.body,ground1.body,0,0);
rope4=new Rope(object4.body,ground1.body,50,0);
rope5=new Rope(object5.body,ground1.body,100,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lime");
  
  drawSprites();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
 object1.display();
 object2.display();
 object3.display();
 object4.display();
 object5.display();
 ground1.display();

}



function keypressed(){
	if(keyCode === LEFT_ARROW)
	{ 	
		Matter.Body.applyForce(object1.body,object1.body.position,{x:-100,y:100});

	}
}