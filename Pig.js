class Pig extends BaseClass
 {
  constructor(x, y)
  {
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    //give visibility
    this.Visibility=255;
  }
  display()
  {
    //create if and else for making the pig vanish
   console.log(this.body.speed);
   if(this.body.speed<3)
   {
    super.display();
  }
  else {
    //give push and pop for making only the pigs vanish
    push();
World.remove(world,this.body);
this.Visibility=this.Visibility-5;
tint(255,this.Visibility);
image(this.image,this.body.position.x,this.body.position.y,50,50);
pop();
  }
  }
}