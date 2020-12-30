var mRect,fRect;

function setup() {
  createCanvas(1200,800);

 mRect= createSprite(400, 100, 50, 50);
 mRect.shapeColor="green";
 mRect.debug = true;

 fRect = createSprite(400,800,80,30)
 fRect.shapeColor = "green";
fRect.debug=true;

mRect.velocityY=5;
fRect.velocityY = -5;

}



function draw() {
  background(0,0,0);  

//mRect.x=World.mouseX;
//mRect.y = World.mouseY;

  console.log(mRect.x-fRect.x);

  if ( mRect.x-fRect.x < mRect.width/2 + fRect.width/2 &&
    fRect.x - mRect.x < mRect.width/2 + fRect.width/2 )  {

    mRect.velocityX = mRect.velocityX * (-1);
    fRect.velocityX = fRect.velocityX * (-1);

}

if (mRect.y-fRect.y < mRect.height/2 + fRect.height/2 &&
  fRect.y - mRect.y < mRect.height/2 + fRect.height/2) {

    mRect.velocityY = mRect.velocityY * (-1);
    fRect.velocityY = fRect.velocityY * (-1);
  }
  drawSprites();
}