let positionY = [0,5,10,15,20,25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100,
105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160, 165, 170, 175, 180, 185, 190, 195, 200]

let fr = 10

var circleColor = "#8ebeed";

function setup() {
    createCanvas(200,200);
    frameRate(fr);
}

function draw() {
    
    positionY.push();
    positionY.shift();

for(var i = 0; i < .001; i ++ ) {

    fill(circleColor);
    circle(100, positionY[i], 10)
}


}
