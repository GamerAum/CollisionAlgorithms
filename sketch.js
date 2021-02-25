var rect58,rect59

function setup() {
  createCanvas(1200,800);
  rect58=createSprite(600, 400, 50, 80);
  rect58.shapeColor='Orange';
  rect58.debug=true;
  rect59=createSprite(400,200,80,30);
  rect59.shapeColor='Green';
  rect59.debug=true
}

function draw() {
  background('black');
  rect59.x=World.mouseX;
  rect59.y=World.mouseY;
  if(isTouching(rect59,rect58)){
    rect58.shapeColor="Pink";
    rect59.shapeColor='Pink';
  }
else{
  rect58.shapeColor="Yellow";
  rect59.shapeColor='Yellow'; 
}
  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x-object2.x<(object1.width+object2.width)/2
  && object2.x-object1.x<(object1.width+object2.width)/2
  && object2.y-object1.y<(object1.height+object2.height)/2
  && object1.y-object2.y<(object1.height+object2.height)/2){
    return true;
  }
  else{
    return false;
  }
    
}