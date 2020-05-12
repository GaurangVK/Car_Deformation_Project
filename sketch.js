var car,wall;
var speed,weight;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  speed=random(50,90);
  weight=random(300,1800);
}

function draw() {
  background(0,0,0);  

  car=createSprite(40,200,60,60);
  wall=createSprite(1600,200,80,height/2);
  car.velocityX=speed;

if(wall.x-car.x <(car.width+wall.width)/2)
{
car.velocityX=0;
var deformation=0.5 *weight* speed* speed/22500;

if(deformation>180)
{
car.shapeColor="green";

}
if(deformation<180 && deformation>100)
{
car.shapeColor="red";

}
if(deformation<100)
{
car.shapeColor="green";

}

}

  drawSprites();
}