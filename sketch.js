const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var weapon1;
var weapon11;
var tank, enemy;
var ground;
var score = 0;
var score1 = 0;
var bg1, bg2;
var weaponimg

function setup() {
  createCanvas(1280,615);

  engine = Engine.create();
  world = engine.world;
  bg1 = loadImage('images/bg1.jpg')
  bg2 = loadImage('images/bg2.jpg')
  weaponimg = loadImage('images/weapon1.png')

  tank = new Tank(200, 580, 150, 75, 'images/tank.png');
  enemy = new Tank(1080, 580, 150, 75, 'images/enemy.png');
  ground = new Ground(700, 610, 1400, 10)
}

function draw() {
  background(bg1);  

  Engine.update(engine);

  push()
  fill('white')
  textFont('Times New Roman')
  textSize(20)
  text('Press "h" to launch ', 120, 100);
  text('Press "s" to launch ', 120, 125);
  text('Press "k" to launch ', 120, 150);
  text('Press "v" to launch ', 120, 175);
  text('Press "r" to launch ', 120, 200);
  text('Press "d" to launch ', 120, 225);
  text('Press "b" to launch ', 120, 250);
  text('Score : ' + score, 150,50);
  pop()

  // enemy
  push()
  fill('white')
  textFont('Times New Roman')
  textSize(20)
  text('Press "a" to launch ', 1000, 100);
  text('Press "m" to launch ', 1000, 125);
  text('Press "n" to launch ', 1000, 150);
  text('Press "i" to launch ', 1000, 175);
  text('Press "u" to launch ', 1000, 200);
  text('Press "y" to launch ', 1000, 225);
  text('Press "t" to launch ', 1000, 250);
  text('Score : ' + score1, 1030,50);
  pop()

  tank.display();
  enemy.display();
  ground.display();
  

  if(weapon1){
  weapon1.display()
  var collision = Matter.SAT.collides(enemy.body, weapon1.body)
  if(collision.collided)  {
    score =+ 5;
  }
}

// enemy
if(weapon11){
  weapon11.display()
  var collision = Matter.SAT.collides(tank.body, weapon11.body)
  if(collision.collided)  {
    score1 =+ 5;
  }
}

  drawSprites();
}

function keyPressed() {
  console.log('keyPressed')
   if(keyCode === 72) /* h */ {
    
    weapon1 = new Weapon(tank.body.position.x, tank.body.position.y)
    console.log(weapon1)
    Body.applyForce( weapon1.body, {x: weapon1.body.position.x, y: weapon1.body.position.y}, {x: 0.024, y: - 0.004});

  } else if (keyCode === 83) /* s */ {

  } else if (keyCode === 75) /* k */ {

  } else if (keyCode === 86) /* v */ {

  } else if (keyCode === 82) /* r */ {

  } else if (keyCode === 68) /* d */ {
    
  }  else if (keyCode === 66) /* b */ {

  }

  //enemy
  if(keyCode === 65) /* a */ {
    
    weapon11 = new Weapon(enemy.body.position.x, enemy.body.position.y)
    console.log(weapon11)
    Body.applyForce( weapon11.body, {x: weapon11.body.position.x, y: weapon11.body.position.y}, {x: - 0.024, y: - 0.004});

  } else if (keyCode === 77) /* m */ {

  } else if (keyCode === 78) /* n */ {

  } else if (keyCode === 73) /* i */ {

  } else if (keyCode === 85) /* u */ {

  } else if (keyCode === 89) /* y */ {
    
  }  else if (keyCode === 84) /* t */ {

  }
}