let sunX = 40;

function setup() {
    createCanvas(400,300);
    background(120);
    drawSun("#faee6e", 20, 150, 200);
}


function draw() {
    clear();
    background(120);
    sunX++;
    drawSun("#faee6e", 20, 150, sunX);
}

function drawSun(sunColor, numRays, yHeight, xPosition) {
    
    fill(sunColor);
    stroke(sunColor);
    for(var i = 0; i < numRays; i++) {
        line(xPosition, yHeight, i* 20, 300);
    }

    circle(xPosition, yHeight, 50);

}
function isEven(amount) {
    let result = amount % 2 == 0;
    return result;
}

