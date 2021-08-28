class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 1
        }
        this.sling = Constraint.create(options);
        this.pointB=pointB;
        this.bodyA=bodyA;
        World.add(world, this.sling);

    }
    //write code for attach( ) here
    fly(){
        this.sling.bodyA =null;
        
    }
    attach(bodyA){
        this.sling.bodyA=bodyA
    }

    display(){
        if(this.sling.bodyA){
        var pointA =this.sling.bodyA.position;
        var pointB = this.pointB;
        
        strokeWeight(4);
        stroke("turquoise");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        }
    
}