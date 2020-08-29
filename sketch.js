const Engine = Matter.Engine; 
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine , world, ground,ball;






function setup() {
  createCanvas(400,400);
 engine = Engine.create()
  world = engine.world;

var   obOptions = {
  isStatic: true 
}
 ground = Bodies.rectangle(200,359,400,20,obOptions);
 
  World.add(world,ground);
  
  console.log(ground);
var ballOp =  {
restitution: 1 

}
ball = Bodies.circle(100,200, 20,ballOp);
World.add(world,ball);





}

function draw() {
  background("black"); 
  Engine.update(engine); 
  rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);
ellipseMode(RADIANS); 
ellipse(ball.position.x,ball.position.y,20,20);

}