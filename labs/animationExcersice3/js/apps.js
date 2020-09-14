let xPos = 0;

function setup() {
    createCanvas(800,600);
}

function draw() {
    if (xPos < 800) {
    background(0);
    xPos = xPos + 5;
    circle(xPos, 200, 30)  
    } else {
    xPos = 0
    }
}
        
  