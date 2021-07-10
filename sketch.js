const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;


//example of array
var num = 3
var arr = [1, 2, 3, 4, 5, 'Syon', true, num];
console.log(arr.length);

arr.pop();
console.log(arr);

//create multiple balls

var balls = [];


function preload() {
  backgroundImg = loadImage("assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1100, 600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;
  tower = new Tower(150, 350, 160, 310);
  ground = new Ground(600, 530, 1100, 20)
  cannon = new Cannon(150, 200, 120, 30, angle)
  //we are creating object called cannonBall from Ball class


}

function draw() {
  background(189);

  imageMode(CENTER)
  image(backgroundImg, 600, 300, width, height)




  Engine.update(engine);
  ground.show();


  tower.show();
  cannon.show()

  for (var i = 0; i < balls.length; i++) {
    showCannonBall(balls[i], i)
  }




}


function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    var cannonBall = new Ball(cannon.x, cannon.y)
    balls.push(cannonBall)
  }
}


function showCannonBall(ball, index) {
  ball.show();
  if (ball.body.position.x >= width || ball.body.position.y >= height - 50) {
    Matter.World.remove(world, ball.body);
    balls.splice(index, 1);
  }
}


function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    balls[balls.length - 1].shoot();
  }
}

