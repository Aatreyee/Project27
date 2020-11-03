class Chain{
    constructor(bodyA,bodyB,offsetX,offsetY){
        var options={
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:offsetX,y:offsetY},
            
        }
            this.chain=Constraint.create(options);
            World.add(world,this.chain);
            this.offsetX=offsetX;
            this.offsetY=offsetY;

    }

        display(){
            if(this.chain.bodyA){
                var posA=this.chain.bodyA.position;
                var posB=this.chain.bodyB.position;

                strokeWeight(2);
                 line(posA.x,posA.y,posB.x+this.offsetX,posB.y);
            }
        }

   // fly(){
        //this.sling.bodyA=null;
   // }
}