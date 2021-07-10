class Cannon{
  constructor(x,y,width,height,angle){
     this.x = x 
     this.y = y 
     this.width = width 
     this.height = height 
     this.angle = angle 

  }
  show() {
    if (keyIsDown(RIGHT_ARROW) && this.angle< 0.40) {
      this.angle = this.angle+  0.02
      //this.angle += 0.02
    }
    if(keyIsDown(LEFT_ARROW) && this.angle > -0.4){
      this.angle -= 0.02
    }

  fill("grey")
  push()
  translate(this.x,this.y)
  rotate(this.angle);
  rect(-20,-90,this.width,this.height)
  pop()
  arc(this.x,this.y,140,200,PI, TWO_PI)
  }
}