const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,blue1,blue2,blue3,blue4,blue5,blue6,blue7;
var pink1,pink2,pink3,pink4,pink5;
var yellow1,yellow2,yellow3;
var violet1;

var ground2;
var blue11,blue22,blue33,blue44,blue55,blue66,blue77;
var pink11,pink22,pink33,pink44,pink55;
var yellow11,yellow22,yellow33,violet2;

var score = 0;

var ball,slingShot,finalground;
var backgroundImg;
var bg = "daybg.png";
//var bg1 = "nightbg.png";

function preload() {
  
  //backgroundImg1 = loadImage(bg1);
    getBackgroundImg();
}

function setup() {
  createCanvas(1000,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(492,500,245,20);


//level 1 
  blue1 = new Blueground(587,465,30,50);
  blue2 = new Blueground(555,465,30,50);
  blue3 = new Blueground(523,465,30,50);
  blue4 = new Blueground(491,465,30,50);
  blue5 = new Blueground(459,465,30,50);
  blue6 = new Blueground(427,465,30,50);
  blue7 = new Blueground(395,465,30,50);

  pink1 = new Pinkground(555,415,30,50);
  pink2 = new Pinkground(523,415,30,50);
  pink3 = new Pinkground(491,415,30,50);
  pink4 = new Pinkground(459,415,30,50);
  pink5 = new Pinkground(427,415,30,50);

  yellow1 = new Yellowground(523,365,30,50);
  yellow2 = new Yellowground(491,365,30,50);
  yellow3 = new Yellowground(459,365,30,50);

  violet1 = new Violetground(491,317,30,50);

//level 2
  ground2 = new Ground(700,300,245,20);

  blue11 = new Blueground(795,265,30,50);
  blue22 = new Blueground(763,265,30,50);
  blue33 = new Blueground(731,265,30,50);
  blue44 = new Blueground(699,265,30,50);
  blue55 = new Blueground(667,265,30,50);
  blue66 = new Blueground(635,265,30,50);
  blue77 = new Blueground(603,265,30,50);

  pink11 = new Pinkground(763,215,30,50);
  pink22 = new Pinkground(731,215,30,50);
  pink33 = new Pinkground(699,215,30,50);
  pink44 = new Pinkground(667,215,30,50);
  pink55 = new Pinkground(635,215,30,50);

  yellow11 = new Yellowground(731,165,30,50);
  yellow22 = new Yellowground(699,165,30,50);
  yellow33 = new Yellowground(667,165,30,50);

  violet2 = new Violetground(699,115,30,50);
  
  ball = new Ball(150,320,50);
  slingShot = new SlingShot(ball.body , {x:150,y:320});
  finalground = new Ground(500,595,1000,20);
}

function draw() {
  if(backgroundImg)

  background(backgroundImg);  
  Engine.update(engine);
  strokeWeight(4);
  textSize(30);
    text("Score: " + score, width-300, 50)
    


  ground.display();

  blue1.display();
  blue2.display();
  blue3.display();
  blue4.display();
  blue5.display();
  blue6.display();
  blue7.display();

  pink1.display();
  pink2.display();
  pink3.display();
  pink4.display();
  pink5.display();

  yellow1.display();
  yellow2.display();
  yellow3.display();

  violet1.display();

// level 2
  ground2.display();

  blue11.display();
  blue22.display();
  blue33.display();
  blue44.display();
  blue55.display();
  blue66.display();
  blue77.display();

  pink11.display();
  pink22.display();
  pink33.display();
  pink44.display();
  pink55.display();

  yellow11.display();
  yellow22.display();
  yellow33.display();

  violet2.display();

  
  ball.display();
  finalground.display();

  drawSprites();
}

function mouseDragged (){

  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased (){
  slingShot.fly();
}

function keyPressed (){
	if(keyCode===32){
		Matter.Body.setPosition(ball.body,{x:150,y:320})
		slingShot = new SlingShot(ball.body , {x:150,y:320});
		
	}
}

async function getBackgroundImg(){

  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJson = await response.json();
  var datetime = responseJson.datetime;
  var hour = datetime.slice(11,13);
  console.log(datetime);
  
  if(hour>=06 && hour<=18){
     bg = "daybg.png"
  }
  else{
     bg = "nightbg.png"
     
  }
  backgroundImg = loadImage(bg);
  
  }

