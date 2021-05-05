class Square {
    constructor(x, y) {
      var options = {
        'density':4,
        'friction': 0.9,
        'restitution':0.5
        }
      this.body = Bodies.rectangle(x, y,100,100, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     var angle=this.body.angle;
     push()
     translate(pos.x,pos.y);
     rotate(angle);
      rectMode(CENTER);
      fill("red");
      rect(0,0, this.width, this.height);
      pop();
    }
  };
    