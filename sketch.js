
function preload(){
cena = loadImage("cenario.jpg")
tankImg = loadImage("Tank-PNG.png")
Zombie = loadImage("zombie.png")
Zombie2 = loadImage("zombie2.png")
TankExplosion = loadImage("tankExplosion.png")
Explosion = loadImage("explosion.png")
}

function setup() {
 createCanvas(1500,650)
 tank = createSprite(500,400)
 tank.scale = 0.5
 tank.addImage(tankImg)
 horda = new Group()
 horda2 = new Group()
 horda3 = new Group()
 horda4 = new Group()
}

function draw() {
    image(cena,0,0,1500,650)
    drawSprites()  
 if(keyIsDown(RIGHT_ARROW)){
  tank.x = tank.x +2.9 
  tank.mirrorX(1) 
   if(mousePressedOver(tank)){
  tankExplosion = createSprite(500,400)
  tankExplosion.addImage(TankExplosion)
  tankExplosion.scale = 0.15
  tankExplosion.x = tank.x+185
  tankExplosion.y = tank.y-80
 tankExplosion.lifetime = 5
}
  }   

 if(keyIsDown(LEFT_ARROW)){
    tank.x = tank.x -2.9
    tank.mirrorX(-1)  
    if(mousePressedOver(tank)){
   
    tankExplosion2 = createSprite(500,400)
    tankExplosion2.addImage(TankExplosion)
    tankExplosion2.scale = 0.15
    tankExplosion2.x = tank.x-185
    tankExplosion2.y = tank.y-80
   tankExplosion2.lifetime = 5 
  }
   }  
   if(keyIsDown(UP_ARROW)&&tank.y > 400){
    tank.y = tank.y -2.9  
   }  
   if(keyIsDown(DOWN_ARROW)&&tank.y < 480){
    tank.y = tank.y +2.9  
   }  
 
 SpawnZombies()
 if(mousePressedOver(Zombie)){
  Zombie.destroyEach()
  ExplosioN = createSprite(200,200)
  ExplosioN.addImage(Explosion)
 }
}
function SpawnZombies(){
 if(frameCount%160===0){
  zombie = createSprite(-20,450) 
  zombie.addImage(Zombie)
  zombie.velocityX = 1
  zombie.scale = 0.20
  zombie.mirrorX(-1)
  zombie.y = Math.round(random(390,490))
  zombie.lifetime = 1500
  horda.add(zombie)
 } 
 if(frameCount%180===0){
   zombie2 = createSprite(1520,450) 
   zombie2.addImage(Zombie2)
   zombie2.velocityX = -1
   zombie2.scale = 0.50
   zombie2.mirrorX(1)
   zombie2.y = Math.round(random(390,490))
   zombie2.lifetime = 1500
   horda2.add(zombie2)
  }  
  if(frameCount%120===0){
   zombie3 = createSprite(1520,450) 
   zombie3.addImage(Zombie)
   zombie3.velocityX = -1
   zombie3.scale = 0.20
   zombie3.mirrorX(1)
   zombie3.y = Math.round(random(390,490))
   zombie3.lifetime = 1500
   horda3.add(zombie3)
  }
  if(frameCount%170===0){
   zombie4 = createSprite(-20,450) 
   zombie4.addImage(Zombie2)
   zombie4.velocityX = 1
   zombie4.scale = 0.50
   zombie4.mirrorX(-1)
   zombie4.y = Math.round(random(390,490))
   zombie4.lifetime = 1500
   horda4.add(zombie5)
  }
}
function mousePressed(){
teste = createSprite(500,500)
console.log("teste")






































}