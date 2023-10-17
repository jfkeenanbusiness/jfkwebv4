let player;
let clouds;
let score;
let mode = 1;
let high = 0;
// let anim;





function preload() {
  myFont = loadFont("PressStart2P-Regular.ttf");
  // anim = loadAnimation("/images/brick.png", "/images/brick2.png", "/images/brick3.png", "/images/brick4.png",);
}

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  clouds = new Group();

  player = createSprite(10, 10, 10, 10);

  // clouds.addAnimation("default", anim);

  
}







function draw() { 
background(0,0,0);





 if (mode == 2){
  player.shapeColor = color(255-(frameCount));

  // score = Math.round(frameCount/60)-3;
    score = Math.round(frameCount)-180;
  player.position.x = mouseX+5;
  player.position.y = mouseY+10;

  if (frameCount < 180) {
    background(255-(frameCount))


    clouds.collide(player);
  }

  if (frameCount > 180) {
  for (let i = 0; i < clouds.length; i++) {
    clouds[i].position.x += clouds[i].width * (frameCount*0.00005);
    if (clouds[i].position.x > width) {
      clouds[i].position.x = 0;}
    }  
    
  clouds.collide(player, changeMode);
  fill(200,200,200);
  // noStroke();
  textSize(100);
  textAlign(CENTER, CENTER);
  text(score, width/2, height/2)
  } 

  drawSprites();
 }
  

  

  if (mode == 3){
    background(20);
    gameover();

    if (score > high){
      high = score;
      fill(0,255,0)
    }


if (score < high) {
  fill(255,0, 0)
  
};
  }
  
  if (mode == 1){
    background(255,255,255)
    player.shapeColor = color(255, 255, 255);

    fill(0);
    noStroke();
    textSize(80);
    textAlign(CENTER, CENTER);
    text("Click to Start", width/2, height/2);
    textFont("PressStart2P-Regular")

  }




}












// add hyperlink to retry as the same index as itself
// add a "hit" counter that will have a If-else statement in DRAW || ie move the "gameover" function elements to the else statement
// every 10 seconds (copy and paste clouds's code as clouds 2 to add difficulty? ) but make them start at x=0 not random
// maybe for landing page make if else || like have start button as if [in the draw function] and the rest of the game as else????
// ask about multiple scenes and transitions? ie multiple JS files? 3 files for landing, game, and gameover page??? 
// have a wave of clouds that move vertically (replace x with y)
// remove random cloud size to facilitate easier grafting of custom sprites
// maybe add a 1 sec delay with death animation frame change for mouse 

// how do i make the frameCount a stoppable value in a function, and how do i add that to text
    // print(data)?   frameRate()?   storeItem()?    
// hyperlinks to switch javascript files?
  

function changeMode() {
  mode = 3;
  for (let i = 0; i < 100; i++) {
    clouds.remove(); 
  }
}

function gameover() {
// for (let i=0; i < 0; i++);
background (20);
// fill(255,0,0);
noStroke();
textSize(80);
textAlign(CENTER, CENTER);

// text (highscore, width, height)
text("GAME OVER", width/2, height/4);
text(score, width/2, height/2);
text( "HIGH-SCORE:" + high, width/2, height/1.33);

}

function mouseClicked(){
  if (mode == 1){
    mode=2;
    frameCount = 0;

    for (let i = 0; i < 33; i++) {
      let c = createSprite(
        random(width), random(height), 
        random(25, 100), random(25, 100), 
      );
      // c.shapeColor = color(random(200, 255));
     
  
        c.shapeColor = color(255);
        c.strokeColor =color(255,255,255);
      clouds.add(c); 
    }
  }
  if(mode== 3){
    mode = 1;
  }

}







