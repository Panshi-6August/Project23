class Ball{
    constructor(x,y,width,height){
        var ball_options ={
            restitution: 1.0
        }
        this.body=Bodies.rectangle(x,y,width,height, ball_options);
       
        World.add(world,this.body);}
     display(){
        rect(this.body.position.x, this.body.position.y, this.width,
            this.height);
    }
     
}