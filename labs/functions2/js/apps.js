circleX = 0;
circleY = 0;
xSpeed = 2;
ySpeed = 3;
rectX = 0;
rectY = 249;
rectW = 399;
rectH = 50;
colliding = false;

function setup() {
    createCanvas(400,300);
}

function draw() {
    clear()
    circle(circleX, circleY, 30, 30)
    circleX += xSpeed;
    circleY += ySpeed;
    rect(rectX, rectY, rectW, rectH);

    colliding = collideRect(circleX, circleY, rectX, rectY, rectW, rectH);

    if(colliding == true) {
      ySpeed *= -1;
      colliding = false;
     }
     
}


function collideRect(circleX, circleY, rectX, rectY, rectW, rectH) {


    if(circleX > rectX && circleX < rectX + rectW) {

        if(circleY > rectY && circleY < rectY + rectH) {

              return true;

        }

   } 
    return false;

}



