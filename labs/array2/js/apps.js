let colors = ["#fefff2", "#754b23", "#ffa1a2"]

function setup() {
    createCanvas(900,600);
    for ( var i = 0; i < colors.length; i ++) {
        strokeWeight(0);
        fill( colors[i]);
        rect(300 * i, 0, 300, 600)
    }
}
