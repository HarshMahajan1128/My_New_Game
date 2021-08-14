class Weapon {
    constructor(x,y){
        var options = {
            'isStatic' : false
        }

    this.body = Matter.Bodies.circle(x, y, 10, options);
    // this.image = loadImage(type);
    World.add(world, this.body);

    }

    display(){

        var pos = this.body.position;
        fill('black');
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, 10, 10);
        // this.body.speed += 0.5;

    }

}