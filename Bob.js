class Bob
{
    constructor(x,y,r){

        var options={
           
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
            
            this.body = Bodies.circle(x,y,r,options);  
            this.r = r;
            World.add(world,this.body);   
    }
        display() 
        {    

    var paperpos=this.body.position;
    var angle = this.body.angle;
    push();
    translate(paperpos.x,paperpos.y);
    rotate(angle);
    ellipseMode(RADIUS);
    strokeWeight(3);
    fill(255,0,255);
    ellipse(0,0,this.r,this.r);
    pop();
        }
    }