const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var stone,plane;
var marbles1,marbles2,marbles3,marbles4,marbles5,marbles6;
var iron;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    
    stone = new Stone(700,320,100,100);
    iron = new Iron(300,350);
    rubber=new Rubber(900,450,70);
    hammer = new Hammer(10,100);

    marbles1 = new Marbles(505,450,10);
    marbles2 = new Marbles(510,450,10);
    marbles3 = new Marbles(515,450,10);
    marbles4 = new Marbles(520,450,10);
    marbles5 = new Marbles(525,450,10);
    marbles6 = new Marbles(515,445,10);
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    stone.display();
    plane.display();
    iron.display();
    rubber.display();

    hammer.display();

    marbles1.display();   
    marbles2.display();   
    marbles3.display();   
    marbles4.display();   
    marbles5.display();   
    marbles6.display();   
 
}