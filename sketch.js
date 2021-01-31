const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

function setup() {
    var canvas = createCanvas(1500, 800);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(750, 790, 1500, 20)
    ground2 = new Ground(750, 600, 500, 20)
    ground3 = new Ground(1250, 300, 400, 20)
    //level 1
    box1 = new Box(550, 565, 50, 60)
    box2 = new Box(605, 565, 50, 60)
    box3 = new Box(660, 565, 50, 60)
    box4 = new Box(715, 565, 50, 60)
    box5 = new Box(770, 565, 50, 60)
    box6 = new Box(825, 565, 50, 60)
    box7 = new Box(880, 565, 50, 60)
    box8 = new Box(935, 565, 50, 60)
    //level 2
    box9 = new Box(605,500, 50, 60)
    box10 = new Box(660,500, 50, 60)
    box11 = new Box(715,500, 50, 60)
    box12 = new Box(770,500, 50, 60)
    box13 = new Box(825,500, 50, 60)
    box14 = new Box(880,500, 50, 60)
    //level 3
    box15 = new Box(660,435, 50, 60)
    box16 = new Box(715,435, 50, 60)
    box17 = new Box(770,435, 50, 60)
    box18 = new Box(825,435, 50, 60)
    //level 4
    box19 = new Box(715,370, 50, 60)
    box20 = new Box(770,370, 50, 60)
    //level 5
    box21 = new Box(740, 305, 50, 60)

    //level 1
    box22 = new Box(1110, 260, 50, 60)
    box23 = new Box(1165, 260, 50, 60)
    box24 = new Box(1220, 260, 50, 60)
    box25 = new Box(1275, 260, 50, 60)
    box26 = new Box(1330, 260, 50, 60)
    box27 = new Box(1385, 260, 50, 60)
    //level 2
    box28 = new Box(1165, 200, 50, 60)
    box29 = new Box(1220, 200, 50, 60)
    box30 = new Box(1275, 200, 50, 60)
    box31 = new Box(1330, 200, 50, 60);
    //level 3
    box32 = new Box(1220, 135, 50, 60)
    box33 = new Box(1275, 135, 50, 60)
    //level 4
    box34 = new Box(1250, 70, 50, 60)

    polygon = new Polygon(300, 400, 100, 100)
    slingShot = new SlingShot(polygon.body, {x:300, y:400})

 
}

function draw() {
    background(117, 203, 229);
    textSize(50)
    fill("yellow")
    text("Drag hexagon and release it, to launch towards the blocks", 150, 700)
    Engine.update(engine);
    ground1.display();
    ground2.display();
    ground3.display();
    //level 1
    fill(124, 0, 0)
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    //level 2
    fill(168, 43, 56)
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    //level 3
    fill(191, 49, 54)
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    //level 4
    fill(214, 55, 55)
    box19.display();
    box20.display();
    //level 6
    fill(247, 64, 70)
    box21.display();

    //level 1
    fill(124, 0, 0)
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    //level 2
    fill(168, 43, 56)
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    //level 3
    fill(191, 49, 54)
    box32.display();
    box33.display();
    //level 4
    fill(191, 49, 54)
    box34.display();

    polygon.display();
    slingShot.display();

 

}


function mouseDragged() {
    Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY})
}
 
 function mouseReleased() {
    slingShot.fly();
 }
  