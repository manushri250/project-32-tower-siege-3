class Violetground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          friction: 1,
          density: 1
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.visiblity = 50;
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<3){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("violet");
        rect(0,0,this.width,this.height);
        pop();
       }
       else{
        World.remove(world, this.body);
        push();
        this.visiblity = this.visiblity-5;
        pop();

       }

       if(this.visiblity<0 && this.visiblity>-20){
        score = score+1
      }
      
    }
   
  };