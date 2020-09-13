var thickness,wall;
var bullet,speed, weight;

function setup() {
  createCanvas(1600,400);
  
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50,200,20,20);
  bullet.velocityX=speed;
}

function draw() {
  background(255,255,255);  

  wall=createSprite(1200,200,60,height/2);
  wall.shapeColor=(80,80,80);

  bullet.depth=wall.depth;
  bullet.depth=bullet.depth+1;

 if(hasCollided(bullet,wall))
 {
   bullet.velocityX=0;
   var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
   if(damage>10)
    {
      wall.shapecolour=colour("green");
    }
    if(damage<10)
    {
      wall.shapeColor=color("red");
    }
 }
  drawSprites();
}
function hasCollided(bullet,wall)
{
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;
}