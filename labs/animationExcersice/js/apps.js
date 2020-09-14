let size = 1;

function setup() {
    createCanvas(400,300);
}

function draw() {
        console.log(size)
        size = size + 1; 
        var circleColor = "#3cbdac";
        fill(circleColor);
        circle(200, 150, size);
        if(size > 200) {
            size = 1
        } else {
            clear()
            var circleColor = "#3cbdac";
            fill(circleColor);
            circle(200, 150, size);
        }
    }

