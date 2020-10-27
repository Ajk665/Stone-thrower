
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	boy = loadImage("Images/Plucking mangoes/boy.png");
	tree = loadImage("Images/Plucking mangoes/tree.png");
}
var ground;
var mango1,mango2,mango3,mango4,mango5;
var stone;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(400,675,800,50);
stone = new Stone(200,500);

mango1 = new Mango(650,375,20,20);
mango2 = new Mango(675,500,20,20);
mango3 = new Mango(750,450,20,20);
mango4 = new Mango(775,500,20,20);
mango5 = new Mango(675,450,20,20);

sling = new Slingshot(stone.body,{x:170, y:525});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  image(boy,150,450,100,300);
  image(tree,600,300,200,500);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  ground.display();
  sling.display();
  stone.display();
 
}

function mouseDragged(){


    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){

    sling.fly();
}

