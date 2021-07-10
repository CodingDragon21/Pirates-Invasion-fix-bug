class Tower{
  constructor(x,y,width,height) {
      var options = {
          isStatic : true
      }
      this.image = loadImage("assets/tower.png");
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.w = width;
      this.h = height;
      World.add(world, this.body);

  }
  show() {

      var pos = this.body.position;
      var angle = this.body.angle;
      push()
      imageMode(CENTER);
      translate(pos.x, pos.y);
      rotate(angle)
      fill("brown");
      image(this.image, 0, 0, this.w, this.h);
      
      pop();
      
  }
}