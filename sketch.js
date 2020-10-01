// Name Spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, box1;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(400,300,100,100);

  console.log(box1);
}


function draw() {
  background(0);  
  Engine.update(engine);

  box1.display();

  drawSprites();
}