class Box{

constructor(x,y,width,height){
    //properties of body
var options = {
    restitution : 0.8,
    friction : 0.3,
    density : 1.0
}

this.box = Bodies.rectangle(x,y,width,height,options);
this.w = width;
this.h = height;
World.add(world,this.box);


}

//function of body
display(){
    var pos = this.box.position;
    var angle = this.box.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    fill("lime");
    rectMode(CENTER);
    rect(0,0,this.widht,this.height);
    pop();

}

}