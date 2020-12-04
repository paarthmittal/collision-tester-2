var car1,car2,car3 ,wall1,wall2,wall3;
line1,line2,line3;
var deform,deform2,deform3,weight,speed,weight2,speed2,weight3,speed3;

function preload(){

}

function setup() {
  createCanvas(800,400);
  car1 =createSprite(60,50,50,15)
car2=createSprite(60,150,50,15)
car3=createSprite(60,250,50,15)
car1.width=random(20,83)
car2.width=random(20,83)
car3.width=random(20,83)
  line1=createSprite(400,100,900,10)
  line2=createSprite(400,200,900,10)
  line3=createSprite(400,300,900,10)
  wall1=createSprite(760,50,15,70)
  wall2=createSprite(760,150,15,70)
  wall3=createSprite(760,250,15,70)
  wall1.width=random(22,83)
  wall2.width=(random(22,83))
  wall3.width=random(22,83);
 //weight and speed for first car
  weight=random(30,52)
  speed=random(223,321)

//weight and speed for 2nd car
weight2=random(30,52)
speed2=random(223,321)

//weight and speed for 3rd car
weight3=random(30,52)
speed3=random(223,321)

}


function draw() {
  background(221,221,221);  
  console.log(deform)
 



   car1.velocityX = 8;
   car2.velocityX=8;
   car3.velocityX=8
   if((wall1.x-car1.x<car1.width/2+wall1.width/2)){
     deform=0.5*weight*speed*speed/(wall1.width*wall1.width*wall1.width)
    car1.velocityX=0


    if((deform<20)){
      car1.shapeColor='green'
    }
    if(deform>20) {
      car1.shapeColor='red'
    }
 
  }
  
if(wall2.x-car2.x<car2.width/2+wall2.width/2){
  deform2=0.5*weight2*speed2*speed2/(wall2.width*wall2.width*wall2.width)
  car2.velocityX=0
  if(deform2<20){
    car2.shapeColor='green'
  }
  if(deform>20){
    car2.shapeColor='red'
  }
  
}
 if((wall3.x-car3.x<car3.width/2+wall3.width/2)){
  deform3=0.5*weight3*speed3*speed3/(wall3.width*wall3.width*wall3.width)
 car3.velocityX=0


 if((deform3>20)){
   car3.shapeColor='red'
 }
 if((deform3<20)){
   car3.shapeColor='green'
 }

}
 

  drawSprites();
}