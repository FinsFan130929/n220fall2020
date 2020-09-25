let positionX = [0,0,0,0,0,0,0,0,0,0]
let positionY = [0,0,0,0,0,0,0,0,0,0]

function setup() {
    createCanvas(800,600);
}

function draw() {

    background(50);

    positionX.push( mouseX );
    positionX.shift();

    positionY.push( mouseY );
    positionY.shift();
    

    for(var i = 0; i < positionX.length; i++) {
        var circleColorGreen = "#10a33f";
        fill(circleColorGreen);
        circle( positionX[i], positionY[i], 30)
    }
    
}

