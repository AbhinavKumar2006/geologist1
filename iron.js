class Iron{
    constructor(){
        var opt={
            restitution:0.8,
            friction:3,
            density:30,
        }
        this.body = bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    
    }

    display(){
        var pos = this.body.position;
        push()
        translate(pos.x,pos.y)
        stroke
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
    }



}