//Create variables here
var dog,happyDog;
var database;
var foodS,foodStock;

function preload()
{
  //load images here
 this.image=loadImage("doglmg.png")
 this.image=loadImage("doglmg1.png")
}

function setup() {
	createCanvas(500, 500);
  createSprite=dog(doglmg.png);
  foodStock=database.ref('food;')
  foodStock.on("value",readStock);
}


function draw() {  
  backGround(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog)
  }
  drawSprites();
  //add styles here
  textSize(20);
  fill("blue");
  stroke();
}
//pressUP_ARROWKEY to feed dragoMilk
//fuction to read values from database.
function readStock(){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1
  }
  database.ref('/').update({
  food:x
})
}

