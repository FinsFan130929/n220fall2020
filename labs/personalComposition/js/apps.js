function setup() {
    var turtleColor = "#4BBD88";
    var shellColor = "#825016";
    var eyeColor = "#000000";
    createCanvas(800,600);
    strokeWeight(0)
    fill(turtleColor);
    circle (305, 170, 30);
    rect (150, 200, 25, 30);
    rect (230, 200, 25, 30);
    beginShape();
    vertex(300, 160);
    vertex(250, 190);
    vertex(260, 205);
    vertex(300, 185);
    endShape(CLOSE);
    fill(shellColor);
    arc(205, 205, 120, 145, PI, TWO_PI);
    fill(eyeColor);
    circle (315, 160, 8);
    strokeWeight(2);
    line(190, 137, 205, 155);
    line(220, 137, 205, 155);
}