const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var mango1, mango2, mango3, mango4, tree, ground, stone;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	mango1 = new Mango(20,20,20);
	mango2 = new Mango(20,20,20);
	mango3 = new Mango(20,20,20);
	mango4 = new Mango(20,20,20);

	stone = new Stone(20,20,20);
	tree = new Tree(700,650);
	ground = new Ground(100,680,1000,30);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();

  stone.display();
  tree.display();  
  ground.display();
}



