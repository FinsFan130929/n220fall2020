function setup() {
    createCanvas(300,300);
}

function draw() {
    background(150);
    noFill();

    for( var i = 0; i < 50; i++){
        circle(150, 150, i * 3);
    }

}