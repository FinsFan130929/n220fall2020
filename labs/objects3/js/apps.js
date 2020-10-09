var myRect = {
    x: 100,
    y: 5,
    h: 100,
    w: 200,
    color: "#008E98"
}

function setup() {
    createCanvas (400,400);
}

function draw() {
    fill(myRect.color);
    rect(myRect.x,myRect.y,myRect.h,myRect.w);
}