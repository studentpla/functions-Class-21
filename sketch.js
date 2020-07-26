var fixedRect, movingRect;
var g1,g2,g3;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  g1 = createSprite(500,100,50,50);
  g2 = createSprite(350,480,30,80);
  g3 = createSprite(240,450,70,30);
g1.shapeColor = "pink";
g2.shapeColor = "red";
g3.shapeColor = "blue";
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
g1.x =World.mouseX;
  g1.y = World.mouseY;
  if (isTouching(g1,g2)){
    g1.shapeColor = "green";
    g2.shapeColor = "green";
  }else{
    g1.shapeColor = "pink";
    g2.shapeColor = "red";
  }
  bounceOff(movingRect,fixedRect);
  drawSprites();
}


