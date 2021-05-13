class Particle {
    constructor(x,y,radius) {
      var options = {
         
          'friction':0.0001,
          'restitution':1
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      
      this.color=rgb(random(0,225),random(0,255),random(0,255));
    
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     ellipseMode(RADIUS);
    fill(this.color);
      ellipse(pos.x, pos.y, this.radius, this.radius);
    }
  };