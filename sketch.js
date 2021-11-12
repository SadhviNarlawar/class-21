var fixedRect, movingRect;
var GO1, GO2, GO3, GO4

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  GO1 = createSprite(100,100,50,50);
  GO1.shapeColor = "green";
  GO2 = createSprite(200,100,50,50);
  GO2.shapeColor = "green";
  GO3 = createSprite(300,100,50,50);
  GO3.shapeColor = "green";
  GO4 = createSprite(400,100,50,50);
  GO4.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, GO3)){
    movingRect.shapeColor="red";
    GO3.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    GO3.shapeColor="green";
  }

  drawSprites();
}
  function isTouching(object1, object2){
    if (object1.x -object2 .x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y <object2.height/2 +object1.height/2
      && object2.y -object1.y < object2.height/2 + object1.height/2) {
    return true;
  }
  else {
    return false
  }
}
var fixedRect, movingRect;
var GO1, GO2, GO3, GO4

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  GO1 = createSprite(400,100,50,50);
  GO1.shapeColor = "green";
  GO1.velocityY = 5;
  GO2 = createSprite(400,800,50,50);
  GO2.shapeColor = "green";
  GO2.velocityY = -5;
  GO3 = createSprite(300,100,50,50);
  GO3.shapeColor = "green";
  GO4 = createSprite(400,100,50,50);
  GO4.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  /*if(isTouching(movingRect, GO3)){
    movingRect.shapeColor="red";
    GO3.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    GO3.shapeColor="green";
  }*/

  bounceOff(GO1,GO2)

  drawSprites();
}
  /*function isTouching(object1, object2){
    if (object1.x -object2 .x < object2.width/2 + object1.width/2
      && object2.x - object1.x < object2.width/2 + object1.width/2
      && object1.y - object2.y <object2.height/2 +object1.height/2
      && object2.y -object1.y < object2.height/2 + object1.height/2) {
    return true;
  }
  else {
    return false
  }
}*/
   
function bounceOff(object1, object2){
  if (object1.x -object2 .x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
   object1.velocityX = object1.velocityX*(-1);
   object2.velocityX = object2.velocityX*(-1);
}
if(object1.y - object2.y <object2.height/2 +object1.height/2
  && object2.y -object1.y < object2.height/2 + object1.height/2){
    object1.velocityY = object1.velocityY*(-1);
    object2.velocityY = object2.velocityY*(-1);
  }

}