var squareX, squareY;
var squareSize = 50;
var foundTheSquare = false;

let mode = 1;
let highScore = 1;
let score = 0;
let real = highScore;

let hole;
let holeImg;
let staticImg;
let nub;
let GO;
let flip;

                                              // var clouds;



function preload() {
  holeImg = loadImage('img/hole.png');
  nub = loadImage('img/switch.png');
  flip = loadImage('img/flip.png');
  GO = loadImage('img/GAMEOVER.png')
  myFont = loadFont("PressStart2P-Regular.ttf");

}




function setup() {

  createCanvas(600, 600);
  squareX = random(width - squareSize/2);
  squareY = random(height - squareSize/2);  
 
  rectMode(CENTER);

                                            //  clouds = new Group();

                                            // for(var i = 0; i<6; i++) {
                                            //   var Newclouds = createSprite(random(0,width), random(0,height));
                                            //   Newclouds.addAnimation("floating", "/img/guy1.png", "/img/guy2.png");}
}








function draw() {
                                          //  drawSprites(clouds);
  if (mode == 1){
    background(255,255,255)

    fill(0);
    noStroke();
    textSize(30);
    textAlign(CENTER, CENTER);
    text("Click to Start", width/2, height/2);
    textFont("PressStart2P-Regular")

    text("Night "+(highScore),width/1.5, height/1.5)
   foundTheSquare = false;

   squareX = random(width - squareSize/2);
  squareY = random(height - squareSize/2);  

  }




  if (mode == 2){
    
  if (!foundTheSquare) {
    background(255,201,14);
    fill(0,0,0,0);
    
    // fill (255); 
    // switch to locate the switch's hit-box // square(squareX, squareY, squareSize);  
    image(nub, (squareX-25), (squareY-25),squareSize);
    fill(0, 0,0);
    stroke(255);
    image(holeImg,(mouseX-1000), (mouseY-1000), 2000, 2000 );
    text
    if (frameCount == 600) {
      mode = 4}

  } else { mode = 3;}

   noStroke();
    fill(0,(frameCount)*0.5); 
    // make 0.5 a variable that can be changed by a mode switch 
   staticImg = square(mouseX,mouseY,1000,1000);
  }




if (mode == 3) {
  fill(255);
  noStroke();
  background(255,201,14);
  image(flip, (squareX-25), (squareY-5),squareSize);
  textSize(32);
  textAlign(CENTER);
  textSize(40);
  text("SURVIVED", width/2,height/2);

  
}




if (mode == 4) {
  noStroke();
  background(0);
  image(GO,0,12.5,600,600)
  textSize(32);
  textAlign(CENTER);
  textSize(40);
  if (frameCount <880){fill(255);
  text("GAME OVER", width/2,height/2);}
  textSize(20);
 if (score<highScore){score=highScore;  fill(0,255,0)}
  
  
// fill(0,255,0)
 if (frameCount > 660){
  
  text("Died Night "+(highScore),width-200, height-500)



}
if (frameCount > 720){
  text("High Score: "+(score),(width-210), height-425)
  // width not budging??? -------------------------------------- BUG
  }

  if (frameCount > 880){
    textSize(30);
    text("Click to Continue",width/2, height/2);
    }

}
}
































function mouseClicked() {

  if (mode == 1){
    mode=2;
    frameCount = 0;
  }


  if (mode == 2){
    
  if (dist(mouseX, mouseY, squareX, squareY) < 25) {
    foundTheSquare = true;
  }

  if (dist(mouseX, mouseY, nubX, nubY) < 25){
    foundTheSquare = true;
  }

  }

  if (mode == 3){
    mode=1;
    highScore += 1;
    // high = ++  ?????
    
    // frameCount = 0;
  }

  if ((mode == 4)&&(frameCount >720)) { 
    mode=1;
    highScore = 1;
  }

}

