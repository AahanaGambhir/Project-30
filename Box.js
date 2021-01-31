class Box{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
          //isStatic:true
         
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visibility = 255;
      World.add(world, this.body);
    }
    display(){
      console.log(this.body.speed);
      if(this.body.speed > 3) {
        push()
        World.remove(world, this.body)
        tint(255, this.visibility);
        pop()
      }
      var angle = this.body.angle;
      var pos= this.body.position;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(5)
      stroke("black")
      rect(0,0,this.width, this.height);
      pop();
    }
}