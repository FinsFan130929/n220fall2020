let colors = ["#f02424", "#ede742", "#41bf76"]

let rectColor = "#d9c752";

function setup() {
    createCanvas(900,600);
    fill(rectColor);
    rect(100, 0, 200, 350);
    for ( var i = 0; i < colors.length; i ++) {
        strokeWeight(.5);
        fill( colors[i]);
        circle(200, 70 + 100* i, 40)
    }
}
