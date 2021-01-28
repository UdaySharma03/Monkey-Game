var PLAY = 1;
var END = 0;
var gameState = PLAY;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, stoneImage;
var FoodGroup, obstacleGroup;
var ground;
var score=0;
var life=3;
function preload(){
  monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
 bananaImage = loadImage("banana.png");
 stoneImage = loadImage("obstacle.png");
 }
function setup() {
  createCanvas(600, 250);
  monkey = createSprite(50,160,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  ground=createSprite(300,240,600,10);
  obstacleGroup = new Group();
  FoodGroup = new Group();
}
function draw() {
  background("blue");
  textSize(20);
  fill(255);
  
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+ survivalTime,430,30);
  text("life: "+ life , 435,50);
  monkey.collide(ground);
  banana();
  stone();
  drawSprites();
  if(gameState===1){
  if(keyDown("space") && monkey.y >= 200) {
  monkey.velocityY = -14;
}              
  monkey.velocityY = monkey.velocityY + 0.8
}
  if(obstacleGroup.isTouching(monkey)){
  life=life-1;
  obstacleGroup[0].destroy();
}
  if(FoodGroup.isTouching(monkey)){
  score=score+1;
  FoodGroup[0].destroy();
}
}
function banana (){
  if (frameCount % 60 === 0) {
  var banana = createSprite(600,120,40,10);
  banana.addImage(bananaImage);
  banana.y = Math.round(random(90,150));
  banana.velocityX=-4;
  banana.scale=0.1;
  FoodGroup.add(banana);
}
}
function stone (){
  if (frameCount % 80 === 0) {
  var obstacle = createSprite(600,220,40,10);
  obstacle.addImage(stoneImage);
  obstacle.velocityX=-4;
  obstacle.scale=0.1;
  obstacleGroup.add(obstacle);
}
}