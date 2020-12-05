const World = Matter.World 
const Engine = Matter.Engine
const Bodies = Matter.Bodies




var engine,world,object,ground
var box1,box2,ground,supporter1
function setup() {
 createCanvas(800,700);
engine =Engine.create();
world = engine.world;

//object = Bodies.rectangle(100,100,500,50);
//World.add(world,object);
box1 = new box(200,200,50,50)
box2 = new box(100,120,20,20)
ground = new Ground(100,500,1450,10) 
supporter1 = new supporter(50,400,20,150)
supporter2 = new supporter(150,490,190,20)
supporter3 = new supporter(250,400,20,150)
//var options={
//isStatic : true
//}

//ground = Bodies.rectangle(200,400,10000,50,options)
//World.add(world,ground);

}




function draw() {
  background("lightblue");  
 Engine.update(engine);
 console.log(box2.body.position.x);
 console.log(box2.body.position.y);
 console.log(box2.body.angle);
 box1.display();
 box2.display();
 ground.display();
 supporter1.display();
 supporter2.display();
 supporter3.display();
 //rectMode(CENTER)
  //rect(object.position.x,object.position.y,50,50);
  //rect(ground.position.x,ground.position.y,500,50)
}
