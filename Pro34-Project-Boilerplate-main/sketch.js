
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint,
Render = Matter.Render,
Runner = Matter.Runner,
Events = Matter.Events,
Constraint = Matter.Constraint,
Composite = Matter.Composite;



var ground, box;
var bird;
var mConstraint;



function setup() {
  var canvas = createCanvas(600,400);

  engine = Engine.create();

  world = engine.world;

  ground = new Ground(width/2, height-10, width, 20);
  box = new Box(450,300,50,75);

  bird = new Bird (50,300,25)
  
  /*const mouse = Mouse.create(canvas.elt);
  var options = {
    mouse: mouse
  }
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world,mConstraint);*/

  
  // var elastic = Matter.Constraint.create({
  //   pointA:{x:10,y:310},
  //   bodyB: bird,
  //   stiffness: 0.05,
  //   length: 0.5
  // });

  var elastic = Matter.Constraint.create({
   pointA:{x:10,y:310},
   bodyB: bird,
   stiffness: 0.05,
    length: 0.5
  });

  
  World.add(world,elastic);

  rectMode(CENTER);
  ellipseMode(CENTER);
  
}


function draw() 
{
  background(51);
  Engine.update(engine);

  ground.show();
  box.show();
  bird.show();
}

