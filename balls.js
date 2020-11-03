class Ball{
    constructor(x,y){
 var options={
'restitution':0.3,
'friction': 0.5,
'density':1.2
 }
 this.body=Matter.Bodies.circle(x,y,70,options);
 this.radius=70;
 this.image=loadImage("paper.png");
 World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push ();
        imageMode(RADIUS);
       // fill ("green");
        //stroke ("green");
        image(this.image,pos.x,pos.y,this.radius,this.radius);
        pop ();
        
    }
}
