var car,wall;
var speed,weight;

function setup() {
  createCanvas(800,400);

var wall_options={
  isStatic:true
}


  car=createSprite(40,200,60,60);
  wall=createSprite(700,200,30,height/2,wall_options);
rectMode(CENTER);

  speed=random(50,90);
  weight=random(300,1800);
}

function draw() {
  background(0,0,0);  

 
  car.velocityX=speed;

if(wall.x-car.x <(car.width+wall.width)/2)
{
car.velocityX=0;
var deformation=0.5 *weight* speed* speed/22500;

if(deformation>180)
{
car.shapeColor="blue";

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