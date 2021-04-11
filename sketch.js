//Create variables here
var dog , happyDog , database , foodS , foodStock ;


function preload()
{
  //load images here
  dogImg =  loadImage("dogImg.png");
  happyDogImg = loadImage("dogImg1.png");
  //eatingDog = loadImage("eating shadow.jpg");
  //eatingDog.scale = 0.5 ;
}

function setup() {
  database = firebase.database();

 
  createCanvas(800,600);
  dog =  createSprite(150,400);
  dog.addImage(dogImg);
  dog.scale = 0.3
  
  foodStock = database.ref("food");
  foodStock.on("value",readstock);
}


function draw() {  
background(46,139,87);

textSize(20);
fill("black");
text("Hey Hi Everyone I am Shadow !! ",350,50);

textSize(20);
fill("black");
text("Press the UP_ARROW to feed  shadow ",350,390);

text("Food remaining : "+foodS,170,200);

//fill("black");
//text("Press the DOWN_ARROW to feed shadow ",300,350);

drawSprites();  
 /* //add styles here
  if (keyWentDown(UP_ARROW)){
    writestock(foodS);
    dog.addImage(happyDogImg);
  // fill("black");
    //text("It is playing time !!",350,50);
   // dog.scale = 0.2 ;
  }*/

  if (keyWentDown(DOWN_ARROW)){
    writestock(foodS);
    dog.addImage(eatingDog);
  }

}

function readstock(data){
  foodS = data.val();
}

function writestock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref("/").update({
    food:x 
  })
}


