
let TentColor = ["#ba3de3", "#dbdb35","#ba3de3", "#dbdb35", "#ba3de3",
 "#dbdb35","#ba3de3", "#dbdb35"]; //tentacle color
let eyeColor = "#ffffff";
let pupilColor = "#000000"

function setup() {
    createCanvas(400,500);
}


function draw() {
    clear();
    drawHead("#23cc5e", 8, mouseY, mouseX, mouseX-20, mouseY+40, mouseX+20, mouseY+40,
    mouseX-30, mouseY+40, mouseX+30, mouseY+40); //draws the octopus
    circle();
}

function drawHead(HeadColor, numTents, yHeight, xPosition, eye1X, eye1Y, eye2X, eye2Y, pupil1X,
    pupil1Y, pupil2X, pupil2Y) {
    
    for(var i = 0; i < numTents; i++) {
        strokeWeight(5);
        stroke(TentColor [i]); //changes color for each tentacle
        line(xPosition, yHeight, i* 55, 250); //draws tentalces
    }

    fill(HeadColor);
    strokeWeight(0);
    circle(xPosition, yHeight, 50); //draws head
    fill(eyeColor);
    stroke(pupilColor);
    strokeWeight(0.5);
    circle(eye1X, eye1Y, 20) //draws left eye
    circle(eye2X, eye2Y, 20) //draws right eye
    fill(pupilColor);
    circle(pupil1X, pupil1Y, 10) //draws left pupil
    circle(pupil2X, pupil2Y, 10) //draws right pupil

}
