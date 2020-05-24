var speed,weight,deformation
function setup() {
    createCanvas(1600,800);
     car= createSprite(20, 400, 50, 50);
     wall =createSprite(1570,400,50,300);
car.shapeColor="blue"
     speed=random(40,70);
     weight=random(100,300);
  car.velocityX=speed;
}
  function draw() {
    background(255,255,255); 
  
    wall.velocityX=0;
     
    if(car.isTouching(wall)){
      wall.velocityX=0;
      car.velocityX=0;
     deformation=(0.5*weight*speed*speed)/2500;}
     console.log(deformation);
    if (deformation>130) {     
      car.shapeColor=("pink");
    }
    if (deformation<130 && deformation>90) {
      car.shapeColor=("green")
      car.velocityX=0
      wall.velocityX=0;
      
    }
    if (deformation<90) {
      car.shapeColor=("yellow")
      car.velocityX=0
      wall.velocityX=0;
    }
    
    
    drawSprites();}
 
 