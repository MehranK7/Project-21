class Ground 
{
  constructor(x, y, w, h) 
  {
    var options = {
      isStatic:true
    }
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.x= x;
    this.y= y;
    this.w = w;
    this.h = h;


    World.add(world, this.body);
  }
    
  show() {
    var GroundPos = this.body.position;
    push();
    translate(GroundPos.x,GroundPos.y)
    rectMode(CENTER);
    stroke(4);
    fill(127);
    rect(0,0, this.w, this.h);
    pop();
  }
  
}