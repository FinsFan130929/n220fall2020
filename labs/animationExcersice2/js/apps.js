let move = 0;

function setup() {
    createCanvas(400,300);
}

function draw() {
    if (mouseX >= 200) {
    var circleColorRed = "#f53636";
    fill(circleColorRed);
    circle(mouseX, mouseY, 20)
    } else {
    var circleColorBlue = "#245eff";
    fill(circleColorBlue);
    circle(mouseX, mouseY, 20)
    }
}

function mouseMoved() {
   move = move + 1;
   if (move >= 1) {
       clear()
   }
}
