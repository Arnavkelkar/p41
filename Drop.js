class Drop{
    constructor(x,y){
     var options={
         isStatic=false,
         friction=0.1
     }
     this.body=Bodies.circle(x,y,5);
    }
  display(){
    ellipseMode(RADIUS);
    fill(blue);
    ellipse(x,y,5,5);
  }
  update(){
    if(this.body.position.y>600){
        matter.body.setPosition(this.body, {x: random(0,1000) , y: random(0,600)});
    }
  }
}