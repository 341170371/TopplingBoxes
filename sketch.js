const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1500,800);
    engine = Engine.create();
    world = engine.world;
    moon = new Moon(1400, 100, 200, 200)
    squarepants = new Spongebob(750,400, 100, 150)
    ground = new Ground(200,height,400,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    text(mouseX+"   "+mouseY,50,50)
        ground.display();
        moon.display()
        squarepants.display()
    }