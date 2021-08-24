


// creating the variables green box and red box
var greenBox;
var redBox;

// All the basic things we need for the code
function setup() {
  createCanvas(400,400);
  greenBox = createSprite (200,200,50,50);
  redBox = createSprite (100,100,50,50)
  background("black");
}


function draw() 
{
  
  // Giving the color to the 2 boxes
  greenBox.shapeColor = "green";
  redBox.shapeColor = "red";
  
 // Changing the color when a certain key is pressed
  if (keyIsDown (DOWN_ARROW)) {

    background("green")
  }
  if (keyIsDown (UP_ARROW)) {

    background("red")
  }
  if (keyIsDown (LEFT_ARROW)) {

    background("blue")
  }
  if (keyIsDown (RIGHT_ARROW)) {

    background("yellow")
  }
 
 // Drawing the sprites
  drawSprites();


}





