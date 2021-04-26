const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber1;
var rubber2;
var rubber3;
var rubber4;
var rubber5;
var rubber6;
var stone;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber1 = new Rubber(400,400,20/2);
    rubber2 = new Rubber(420,400,20/2);
    rubber3 = new Rubber(430,400,20/2);
    rubber4 = new Rubber(440,400,20/2);
    rubber5 = new Rubber(450,400,20/2);
    rubber6 = new Rubber(460,400,20/2);
    stone = new Stone(300,300);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    rubber5.display();
    rubber6.display();
    stone.display();
}