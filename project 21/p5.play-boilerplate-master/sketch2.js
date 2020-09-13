const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ball;
var ground;

function setup(){
    createCanvas(400,400);

    engine = Engine.create();
    world = engine.world;
    var Options1 = {
    restitution:3
    }
    ball = Bodies.circle(200,100,20,Options1);
    var Options={
    isStatic:true
    }
    ground = Bodies.rectangle(200,390,200,20,Options);
    World.add(world,ball);
    World.add(world,ground);
}
function draw(){
    background(0);
    Engine.update(engine);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
}
