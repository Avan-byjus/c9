var box
function setup() {
  createCanvas(400,400);
  box=createSprite(width/2, height/2)
}

function draw() 
{
  //background(30);
if(keyIsDown(LEFT_ARROW)){
  box.shapeColor="green"
  background("white")
  box.x-=10
}
if(keyIsDown(RIGHT_ARROW)){
  box.shapeColor="red"
  background("blue")
  box.x+=10
}
if(keyIsDown(UP_ARROW)){
  box.shapeColor="yellow"
  background("brown")
  box.y-=10
}
if(keyIsDown(DOWN_ARROW)){
  box.shapeColor="teal"
  background("purple")
  box.y+=10
}
  drawSprites()
}




