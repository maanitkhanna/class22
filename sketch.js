const Engine= Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myengine,myworld;

function setup() {
  createCanvas(400,400);

  myengine=Engine.create();
  myworld=myengine.world;

  var options= {
    isStatic: true
  }
  ground=Bodies.rectangle(200,390,400,10,options);
  World.add(myworld,ground);
  
  var ball_options= {
    restitution: 0.4
  }
  ball=Bodies.circle(200,200,20,ball_options)
  World.add(myworld,ball);
  
 console.log(ball);
  //console.log(obj.position);
  //console.log(obj.position.x);
}

function draw() {
  Engine.update(myengine);
  background(0);  
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 10);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  drawSprites();
}