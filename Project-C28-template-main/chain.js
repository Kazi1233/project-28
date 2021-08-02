 class Launcher{

constructor(bodyA,pointB){
var a = {
 bodyA: bodyA,
 pointB: pointB,
   stiffness:0.002,
   length:10

} 
this.launcher= Constraint.create(a)
this.pointB= pointB;

World.add(world,this.launcher)


}  attach(body){
    this.launcher.bodyA = body;
}

fly(){
    this.launcher.bodyA = null;
}

 Display (){
 push ()
 if (this.launcher.bodyA){

    line (this.launcher.bodyA.position.x,this.launcher.bodyA.position.y,this.pointB.x,this.pointB.y)
 

 }

pop ()



 }
 


 }