var spaceImg, space;
var planetImg, planet, planetGroup;
var rocket, rocketImg;

var gameState = "play";
var boundary1, boundary2;



function preload(){
  rocketImg = loadImage("Rocket.png")
  spaceImg = loadImage("BackG.jpg");
  planetImg = loadImage("Planet.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  space = createSprite(width/2,height/2);
  space.addImage(spaceImg);
  space.velocityY = 1;
  space.scale = 0.6;
  
  planetGroup = new Group();
  
  
  
  rocket = createSprite(width/2,height/2,50,50);
  rocket.scale = 0.3;
  rocket.addImage(rocketImg);
  rocket.setCollider("rectangle",0,50,200,210)

  
  
}


function draw() {
  background(255);  
  
  //rocket.debug = true;

  if (gameState === "play") {
    
    rocket.x = World.mouseX;

    if(keyDown("space")){
  
      // write a code to move up when space is pressed
      rocket.velocityY = -5;

    }
  
  rocket.velocityY = rocket.velocityY + 0.8;
  
   
      //write a condition for infinte scrolling tower
      if (space.y > 600) {
          space.y = height/2;
      }

      spawnPlanets();

  
      
      
      

      if (planetGroup.isTouching(rocket) || rocket.y > 600) {
        rocket.destroy();
        gameState = "end";
      }
      
      
      
      drawSprites();

  
}

    
    
    if (gameState === "end"){
    background = "black";
    stroke("darkblue");
    fill("darkblue");
    textSize(60);
    text("Game Over", width/2-150,height/2)
    
    

  }
    
   
}

function spawnPlanets()
 {
  
  if (frameCount % 240 === 0) {
    var planet = createSprite(width/2, height-1000);
    planet.scale = 0.3;
    
    planet.x=Math.round(random(20,width-50))
    
    
    
    //

    planet.addImage(planetImg);
    
    
    planet.velocityY = 1;


    
    rocket.depth = planet.depth+1;
     

    
    
    planetGroup.lifetime = 300;
    

    
    planetGroup.add(planet);
    
  }
}
