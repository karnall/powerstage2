class Box{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.1,
            'friction':1.0,
            'density':0.04,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visiblity=255;
        
        World.add(world, this.body);
      }
      display(){

        if(this.body.speed<3){          
            var angle = this.body.angle;
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            rectMode(CENTER);
            strokeWeight(4);
            stroke("blue");
            rect(0,0,this.width,this.height);
            pop();
        }

        else{
          World.remove(world,this.body);
          push();
          this.visiblity-=5;
          pop();
        }
      }

}
