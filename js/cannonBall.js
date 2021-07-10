class Ball {
    constructor(x, y) {
        var options = {
            restitution: 0.8,
            friction: 1,
            density: 1,
            isStatic: true
        }
        this.image = loadImage("assets/cannonball.png")
        this.r = 40
        this.ball = Bodies.circle(x, y, 40, options)
        this.trajectory = []
        World.add(world, this.ball);
    }
    shoot() {
        var velocity = p5.Vector.fromAngle(cannon.angle);
        velocity.mult(20);
        Matter.Body.setStatic(this.ball, false);
        Matter.Body.setVelocity(this.ball, { x: velocity.x, y: velocity.y })
    }
    show() {
        var pos = this.ball.position;
        var angle = this.ball.angle;




        push();
        imageMode(CENTER)
        translate(pos.x, pos.y)
        rotate(angle)
        image(this.image, 0, 0, this.r, this.r)

        pop();

        if (this.ball.position.x > 300 && this.ball.velocity.x > 0) {
            var position = [this.ball.position.x, this.ball.position.y]
            this.trajectory.push(position);
        }

        for (var i = 0; i < this.trajectory.length; i++) {
            image(this.image, this.trajectory[i][0], this.trajectory[i][1],5,5)
        }


    }

}