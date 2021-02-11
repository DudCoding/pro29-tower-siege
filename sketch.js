const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1;
var block1,block2,block3,block4,block5;
var block6, block7, block8, block9;
var block10, block11, block12;
var block13, block14;
var block15
var polygon; 
var slingshot;
var stand1;
function setup(){
    
    createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(600,590,1200,20);

    stand1 = new Ground(600, 500, 200, 20);

    // level 1
    block1 = new Block(520,460,40,40);
    block2 = new Block(560,460,40,40);
    block3 = new Block(600,460,40,40);
    block4 = new Block(640,460,40,40);
    block5 = new Block(680,460,40,40);

    // level 2
    block6 = new Block(540,420,40,40);
    block7 = new Block(580,420,40,40);
    block8 = new Block(620,420,40,40);
    block9 = new Block(660,420,40,40);

    //level 3
    block10 = new Block(560,380,40,40);
    block11 = new Block(600,380,40,40);
    block12 = new Block(640,380,40,40);

    // level 4
    block13 = new Block(580,340,40,40);
    block14 = new Block(620,340,40,40);

    // level 5
    block15 = new Block(600, 300, 40, 40);

    polygon = new Polygon(70,200,40,40);

   // slingshot = new Slingshot(polygon.body, {x:200,y:200});


    

}

function draw(){
    background(60, 38, 22);
    Engine.update(engine);
    

    ground1.display();

    stand1.display();

    // level 1
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();

    // level 2
    block6.display();
    block7.display();
    block8.display();
    block9.display();

    // level 3
    block10.display();
    block11.display();
    block12.display();
    
    // level 4
    block13.display();
    block14.display();

    // level 5
    block15.display();

    polygon.display();

  //  slingshot.display();


    textSize(20);
    fill("cyan");
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks", 200, 150);




}