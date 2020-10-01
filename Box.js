// Name Spacing
// const Engine = Matter.Engine;
// const World = Matter.World;
// const Bodies = Matter.Bodies;
var object_options;
class Box{

    // Properties
    constructor(xPosition, yPosition, width, height) {

        object_options = {
            isStatic : true
        }

        this.body = Bodies.rectangle(xPosition, yPosition, width, height,object_options);
        World.add(world,this.body);
        this.width = width;
        this.height = height;
    }

    // Function
    display() {
        const pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}