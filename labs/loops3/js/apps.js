
let colors = ["#2e2e2e", "#b24cb5", "#4fc95d", "#567bdb"]

function setup() {
    createCanvas(1200, 300);

    for( var i = 0; i < 25; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            fill( colors[3] );
            square(10+40 * i, 130, 39);
    }
    else if(i % 3 == 0) {
        fill( colors[1] );
        circle( 30 + 40 * i, 150, 20);

    } 
    else if(i % 5 == 0) {
        fill( colors[2] );
        square(10+40 * i, 130, 39);
    }   
    else {
        fill( colors[0] );
        circle( 30 + 40 * i, 150, 20);
 }
}
}
