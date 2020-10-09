var circles = [
    {x: 50, y: 200, r: 10},
    {x: 250, y: 250, r: 20},
    {x: 100, y: 150, r: 30},
    {x: 200, y: 30, r: 25},
    {x: 10, y: 80, r: 15},
    {x: 250, y: 350, r: 25},
    {x: 100, y: 60, r: 15},
    {x: 280, y: 300, r: 25},
]


function setup() {
    createCanvas(200, 400);
    noStroke();
    fill(Math.random() * 255,Math.random() * 255,Math.random() * 255);
}

function draw() {
    clear()
    for(var i = 0; i < circles.length; i++) {
        let currentCircle = circles[i];
        circle(currentCircle.x, currentCircle.y, currentCircle.r)
        currentCircle.x +=1;
        if(currentCircle.x > 200) {
            currentCircle.x = 0;
            currentCircle.x = Math.random() * 300;
            fill(Math.random() * 255,Math.random() * 255,Math.random() * 255);
        }
    }
}
