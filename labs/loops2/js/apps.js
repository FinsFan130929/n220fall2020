var squareColor = "#ff3b3b";
let pyramidRows = 3;

function setup() {
    createCanvas(300,300)
    var squareColor = "#ff3b3b";

}

function draw(){

    for (var i = 0; i <= pyramidRows; i++) {
        for ( var y = 0; y <= i; y++){
            strokeWeight(0);
            fill(squareColor); 
            rect(y * 31, i * 31 , 30, 30) 
        }
    }
}