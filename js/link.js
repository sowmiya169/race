class Link{
    constructor(bodyA,bodyB){
        var lastLink=bodyA.body.bodies.length-2;
        this.link=Constraint.create({
            bodyA:bodyA.body.bodies[lastLink],
            pointA:{x:0,y:0},
            bodyB:bodyB.body,
            pointB:{x:0,y:0},
            lenght:10,
            stifness:0.8
        });
        World.add(world,this.link);
    }
}