var gameState1=0;
var score=0;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine= Engine.create();
  world= engine.world;
  ground = new Ground(width/2,height,width,20);

  for(var k = 0; k<=width;k = k + 80){
    divisions.push(new Devision(k,height-divisionHeight/2));
  }
  for(var j = 75; j<=width; j=j+50){
    plinko.push(new Plinko(j,75));
  }
  for(var j = 50; j <=width-10; j=j+50){
    plinko.push(new Plinko(j,175));
  }
  for(var j = 50; j <=width-10; j=j+50){
    plinko.push(new Plinko(j,275));
  }
  for(var j = 50; j <=width-10; j=j+50){
    plinko.push(new Plinko(j,375));
  }
}
var particles = [];
var plinlos =[];
var divisions = [];

var divisionHeight = 300;

function draw() {
  background(255,255,255);  
  drawSprites();
}
function mousePressed() 
{
    if(gameState1=="end"){
        count++;
        particle=new Particle(mouseX,10,10,10);
    }

}
