var box1,box2,box3,box4,paper
var ground,engine,world,slingShot
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint





function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;



	
	
   
	
	



	//Create a Ground
	ground =new Ground(650,height,1300,30);
    

	 

	 
	 box1=new Dustbin(800,670,180,20)
	 box2=new Dustbin(720,590,20,180)
	 box3=new Dustbin(920,590,20,140)

	
	 paper=new Paper(150,450,50)
	 slingShot=new Slingshot(paper.body,{x:200,y:100})

}



function draw() {
	background(173,234,250);
	Engine.update(engine);
	

	
	box1.display();
	box2.display();
	box3.display();

	paper.display()
	slingShot.display()

	textSize(30)
	text("let's keep are city clean",475,75)
 

  
}




function mouseDragged(){

	Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY})
	
	}
	
	function mouseReleased(){
	
	slingShot.fly()
	
	}

