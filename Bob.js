class Bob {
    constructor(x,y) {

      var options = {

          isStatic: false,
          density: 0.1,
          friction: 0.1

      }

      this.body = Bodies.circle(x,y,25,options);
      //this.radius = 25;
      
      World.add(world, this.body);

    }
    display(){

      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("pink");
      ellipse(pos.x, pos.y,25,25);

    }

  };