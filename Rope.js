class Rope{

 constructor(body1,body2,xoffset){

  //this.offsetX = offsetX;
   //this.offsetY = offsetY;

    var options = {

        bodyA : body1,
        bodyB : body2,
        pointA :{x:xoffset,y:0},
        stiffness : 0.5,
        length : 300
    }

  this.xoffset = xoffset;
  this.rope = Constraint.create(options);
    World.add(world, this.rope);

 }

display(){

    var rpos = this.rope.bodyA.position ;
    var bpos = this.rope.bodyB.position;
 
    stroke("white")
    strokeWeight(4)
    line(rpos.x+this.xoffset, rpos.y,bpos.x,bpos.y);

} 

  
}
