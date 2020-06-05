var movingRect;
var fixedRect;
function setup() {
  createCanvas(800,600);
 fixedRect = createSprite(400, 240, 50, 50);
 movingRect = createSprite(400,350,50,50);
 fixedRect.velocityY=3
 movingRect.velocityY=-3
}

function draw() {
  background("black");  
  //movingRect.x=mouseX;
  //movingRect.y=mouseY;
  
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 &&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 &&
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
  fixedRect.shapeColor="red";
  movingRect.shapeColor="yellow"
 }
  else{
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
  }
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2){
      movingRect.velocityX=movingRect.velocityX*-1;
      fixedRect.velocityX=fixedRect.velocityX*-1;
    }
  if(movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 &&
    fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2){
      fixedRect.velocityY=fixedRect.velocityY*-1;
      movingRect.velocityY=movingRect.velocityY*-1;
    }
  
  
  drawSprites();
}