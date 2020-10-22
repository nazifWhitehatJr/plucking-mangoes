class Tree{
    constructor(x,y){
        var options = {
           isStatic : true,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = 100;
        this.height = 700;
        this.image = loadImage("tree.png");
        World.add(world, this.body);
    }
    display(){
    translate(this.body.position.x, this.body.position.y)
    imageMode(CENTER)
    image(this.image,0,0,800,100);
    }
}
