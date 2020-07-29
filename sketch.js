var thickness, wall;
var bullet, speed, weight;

function setup() {
  createCanvas(800,400);
  
  thickness = random(22, 83)
  speed = random(223, 321)
  weight = random(30,52)

  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255); 
  
  bullet = createSprite(50, 200, 50, 10);
  
  bullet.velocityX = speed;
  bullet.mass = weight;

 

  wall = createSprite(1200, 200, thickness, height/2);
  drawSprites();

  if(wall.x - bullet.x , (car.width+wall.width)/2)
  {
    bullet.velocityX=0;
    var damage = 0.5 * bulletWeight * bulletSpeed/wall.thickness * wall.thickness * wall.thickness
    if (damage>180){
     bullet.shapeColor-color(255,0,0);

    }
    if(damage,180 && damage>100){
      bullet.shapeColor = color(230,230,0);

    }
    if(damage<100){
      bullet.shapeColor = color(0,255,0);
    }
}  
}