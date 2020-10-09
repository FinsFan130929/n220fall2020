/*
let myController = {
    type: "Gamecube",
    color: "#1d66c4",
    wired: true,
    custom: true
};
*/

var myCircle = {
    x: 20,
    y: 30,
    r: 25,
    color: "#1d66c4",
    update: function () {
        clear();
        fill(this.color);
        this.x += 2;
        circle(this.x, this.y, this.r);
    
    }
};


var circles = [
    {x: 50, y: 20, r: 10},
    {x: 250, y: 50, r: 20},
    {x: 100, y: 60, r: 30},
    {x: 200, y: 20, r: 25},
]


function setup() {
    createCanvas(400,300);
    noStroke();
    fill(Math.random() * 255,Math.random() * 255,Math.random() * 255);
}

function draw() {
    for(var i = 0; i < circles.length; i++) {
        let currentCircle = circles[i];
        circle(currentCircle.x, currentCircle.y, currentCircle.r)
        currentCircle.y += 5

        if(currentCircle.y > 300) {
            currentCircle.y = 0;
            currentCircle.x = Math.random() * 300;
            fill(Math.random() * 255,Math.random() * 255,Math.random() * 255);
        }
    }
    //myCircle.update();
}
