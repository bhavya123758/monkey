var monkey, monkey_running, ground, invisibleGround;
var banana, bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score = 0;

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  foodGroup = createGroup();
  obstacleGroup = createGroup();
}



function setup() {
  monkey = createSprite(100, 300, 20, 20);
  monkey.addAnimation("moving", monkey_running)
  monkey.scale = 0.1;
  ground = createSprite(200, 330, 800, 5)
  ground.velocityX = -5;
  invisibleGround = createSprite(200, 340, 800, 5);
  invisibleGround.velocityX = -5;
  invisibleGround.visible = false;
}


function draw() {
  background("white");
  textSize(20);
 fill("red");
  stroke("yellow");
  text("Survival Time:" + score, 180, 30);
  score = Math.round(frameCount / 80);
  if (keyDown("space") && monkey.y > 250) {
    monkey.velocityY = -22;
  }
  monkey.velocityY = monkey.velocityY + 1.5;
  if (ground.x === 0) {
    ground.x = ground.width / 2;
  }
  if (invisibleGround.x === 0) {
    invisibleGround.x = invisibleGround.width / 2;
  }

  monkey.collide(invisibleGround);
  spawnObstacles();
  spawnBananas();
  drawSprites();
}


function spawnBananas() {
  if (frameCount % 80 === 0) {
    banana = createSprite(420, 200, 20, 20);
    banana.addImage(bananaImage);
    banana.scale = 0.09;
    banana.velocityX = -3;
    banana.y = Math.round(random(120, 200));
    foodGroup.add(banana);
    banana.lifetime = 200;
  }
}

function spawnObstacles() {
  if (frameCount % 300 === 0) {
    obstacle = createSprite(420, 300, 400, 400);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.17;
    obstacle.velocityX = -5;
    obstacle.lifetime = 200;
    obstacleGroup.add(obstacle);
  }
}