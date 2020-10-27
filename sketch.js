var fixedRect,movingRect;
var rect1,rect2;

function setup() {
  createCanvas(1200,800);

  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green";

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";

  rect1 = createSprite(400,100,50,50);
  rect1.shapeColor = "blue";
  rect1.velocityY = 3;

  rect2 = createSprite(400,300,50,50);
  rect2.shapeColor = "blue";
  rect2.velocityY = -3;
}


function draw() {
  background(0); 
  
  movingRect.x = mouseX;
  movingRect.y  = mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
     fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
     movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 && 
     fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2)
  {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else
  {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  
  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2)
  {
    movingRect.velocityX *= (-1);
    fixedRect.velocityX *= (-1);
  }

  if(movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 && 
    fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2)
  {
    movingRect.velocityY *= (-1);
    fixedRect.velocityY *= (-1);
  }
  drawSprites();
}