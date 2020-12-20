class bob {
  constructor(x, y,radius) {
    var options = {
        
        restitution:1,
        friction:2,
        frictionAir:0.001,
        density:4,
        slop:1,
        isStatic:false,
        inertia:Infinity
    }
    this.body = Bodies.circle(x,y,radius, options);
    this.radius = radius;
    this.color=color;
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(RADIUS);  
    noStroke();
    fill("this.color");
    ellipse(0,0, this.radius,35);
    pop();
  }
}