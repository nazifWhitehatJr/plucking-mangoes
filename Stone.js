class Stone{
    constructor(x, y, radius, angle) {
        var options = {
            isStatic : false,
            'restitution':0,
            'friction':1,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, radius, angle, options);
        this.radius = radius 
        this.image = loadImage("stone.png");
        World.add(world, this.body);S
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, this.body.position.x,this.body.position.y, 0, 0 );
        pop();
      }
}