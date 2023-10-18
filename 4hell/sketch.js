var squareX, squareY;
var squareSize = 50;
var foundTheSquare = false;

let mode = 1;
let highScore = 1;
let score = 0;
let mons = 0;
let real = highScore;
let cut = 0;

let hole;
let holeImg;
let staticImg;
let nub;
let GO;
let flip;

let lain;
let click;
let end;
let home;
let col = 255;

function redirect(){
  window.location.href = "https://jfkeenanbusiness.github.io/jfkwebv4/index.html";
}

function gohome() { home = createButton ("GO HOME");
home.mousePressed(redirect); }

                                                                      // let anim;

                                                                      var clouds; 



function preload() {
  holeImg = loadImage('img/hole.png');
  nub = loadImage('img/flip.png');
  flip = loadImage('img/switch.png');
  GO = loadImage('img/GAMEOVER.png')
  myFont = loadFont("PressStart2P-Regular.ttf");

  // anim = loadAnimation('img/guy1.png', 'img/guy2.png');
  soundFormats('mp3', 'ogg');
                                              lain = loadSound('sfx/lain.mp3');
                                              click = loadSound('sfx/click.mp3');end = loadSound('sfx/end.mp3');
                                              
                                              

}




function setup() {
  
  createCanvas(600, 600);
  squareX = random(width - squareSize/2);
  squareY = random(height - squareSize/2);  
 
  rectMode(CENTER);


                                            
                                           
                                           
clouds = new Group(); 


                                            for(var i = 0; i<(mons); i++) {
                                              var NewCloud = createSprite(random(0,width), random(0,height));
                                              NewCloud.addAnimation("floating", "img/guy1.png", "img/guy1.png", "img/guy1.png","img/guy1.png","img/guy1.png","img/guy1.png", "img/guy2.png", "img/guy2.png", "img/guy2.png", "img/guy2.png", "img/guy2.png", "img/guy2.png");
                                              NewCloud.addToGroup(clouds); };

                                              
                                              
                 
}










function draw() {
                                   
  if (mode == 1){
    background(255,255,255);
     
    fill(0);
    noStroke();
    textSize(30);
    textAlign(CENTER, CENTER);
    textFont("PressStart2P-Regular")
    text("Click to Start", width/2, height/2);
    

    text("Night "+(highScore),width/1.5, height/1.5)
   foundTheSquare = false;

   squareX = random(width - squareSize/2);
  squareY = random(height - squareSize/2); 
   

  }



  if (mode == 2){
  if (!foundTheSquare) {
    background(255,255,255);
    fill(0,0,0,0);
    textFont("PressStart2P-Regular");
                                          //  WHAT IF AN image(jerma, 0,0, 600,600) goes here and new icons?
      drawSprites(clouds);
      
     
    image(nub, (squareX-25), (squareY-25),squareSize);
    fill(0, 0,0);
    stroke(255);
    image(holeImg,(mouseX-1000), (mouseY-1000), 2000, 2000,);  
    image(holeImg,(mouseX-500), (mouseY-500), 1000, 1000 );
    text
    if (frameCount == (600)) {
      mode = 4; end.loop();}

  } else { mode = 3;  }

   noStroke();
    fill(0,((frameCount)*0.5+cut)); 
    // make 0.5 a variable that can be changed by a mode switch 
    
   staticImg = square(mouseX,mouseY,1000,1000);
   
 
  

   

  

  }




if (mode == 3) {
  
  textFont("PressStart2P-Regular")
  fill(255);
  noStroke();
  background(255,255,255);
  image(flip, (squareX-25), (squareY-40),squareSize);
  textSize(32);
  textAlign(CENTER);
  textSize(40);
  text("SURVIVED", width/2,height/2);
     
  
}




if (mode == 4) {
  textFont("PressStart2P-Regular")
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
  
  
 if (frameCount > 660){
  
  text("Died Night "+(highScore),width-200, height-500)



}
if (frameCount > 720){
  text("High Score: "+(score),(width-210), height-425)
  }

  if (frameCount > 880){
    textSize(30);
    text("Click to Continue",width/2, height/2);
    }



}

  



}























function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    gohome();
  }}






function mouseClicked() {

  if (mode == 1){
    mode=2;
    frameCount = 0;
    setup();
    lain.loop()
       
    
  }


  if (mode == 2){
    
  if (dist(mouseX, mouseY, squareX, squareY) < 25) {
    foundTheSquare = true; click.play(); lain.pause();
  }

  if (dist(mouseX, mouseY, nubX, nubY) < 25){
    foundTheSquare = true; click.play();lain.pause(); }
    
  }

  if (mode == 3){
    mode=1;
    highScore += 1;
    mons += 2;
    cut += 20;

    if (mons > 99){
      gohome();
     }
    
    // clouds.mouseOver(end.play()); 
    
    // ------------------------------------------------- lower time with flash light
  }

  if ((mode == 4)&&(frameCount >720)) { 
    mode=1;
    highScore = 1;
    mons = 0;
    cut = 0;
    lain.pause();
    end.pause(); 
  }

}





