var myCircle = {
    x: 100,
    y: 5,
    r: 10,
    color: "#008E98"
}

function setup() {
    createCanvas(500,500);
}

function draw() {
    clear()
    fill(myCircle.color)
    myCircle.x += 1;
    myCircle.y += 4;
    myCircle.r +=1.2;
    if (myCircle.x > 200){
        myCircle.r -= 1.8;
        myCircle.y -= 6;
    }
    circle(myCircle.x, myCircle.y, myCircle.r);
}