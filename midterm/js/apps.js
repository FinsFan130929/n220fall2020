circleX = 100;
circleY = 100;
xSpeed = -3;
ySpeed = 3;
rectX = 530;
rectY = 50;
rectW = 49;
rectH = 200;
colliding = false;
backgroundColor = "#29cfc1";
var score = 0;

function setup() {
    createCanvas(600,600);
}


function draw() {
    background(backgroundColor);
    circle(circleX, circleY, 30, 30)
    circleX += xSpeed;
    circleY += ySpeed;
    rect(rectX, rectY, rectW, rectH);
      
      if(circleX < 0) {
          circleX = 0;
          xSpeed *= -1;
      }
  
      if (circleY < 0 ) {
          circleY = 0;
          ySpeed *= -1;
      }
  
      if (circleY > 600) {
          circleY = 600;
          ySpeed *= -1;
      }

      if(circleX > 600) {
          circleX = 300;
          circleY = 150 + Math.random() * 300;
          xSpeed = -3;
          ySpeed = 3;
          rectH = 200;
          score = 0;
          rectY = 150 + Math.random() * 300;
      }

    colliding = hitTestPoint(circleX, circleY, rectX, rectY, rectW, rectH);

    if(colliding == true) {
        xSpeed *= -1.08;
        ySpeed *= 1.08;
        rectH -= 5;
        colliding = false;
        score++;
        console.log("Score: "+ score);
       }

    if (keyIsDown(UP_ARROW)) {
        rectY -= 10;
    }

    if (keyIsDown(DOWN_ARROW)) {
        rectY += 10;
    }

    if (rectH <= 125) {
        rectH = 125
    }

    if (xSpeed >= 9) {
        xSpeed = 9;
    }

    if (ySpeed >= 9) {
        ySpeed = 9;
    }
    
}


function hitTestPoint(circleX, circleY, rectX, rectY, rectW, rectH) {


    if(circleX > rectX && circleX < rectX + rectW) {

        if(circleY > rectY && circleY < rectY + rectH) {

              return true;

        }

   } 
    return false;

}




