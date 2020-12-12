collidiing = false //sets the collision var to false


var ball = {
    x: 150 + Math.random() * 300, y: 300,
    velocityX: 2, velocityY: 2,
    update: function() {
    clear();
    circle(this.x, this.y, 13);
    this.x += this.velocityX;
    this.y += this.velocityY;
    } //sets intial ball position and speed as an object
};
var paddle = {
    x: 100, y: 450, w: 100, h: 20,
    update: function() {
    rect(this.x, this.y, this.w, this.h);
    this.x = mouseX - 50
    }
}; //sets intial paddle position and gives control via mouse
    
    
var blocks = [];
var blocks2 = [];
var blocks3 = [];
var blocks4 = [];
var blocks5 = [];
    
    for(var i = 0; i < 8; i++) {
    blocks[i] = { x: i * 60, y: 10 };
    } //blocks for the ball to destroy as an object

    for(var i = 0; i < 8; i++) {
        blocks2[i] = { x: i * 60, y: 70 };
    } //blocks for the ball to destroy as an object

    for(var i = 0; i < 8; i++) {
        blocks3[i] = { x: i * 60, y: 130 };
    } //blocks for the ball to destroy as an object

    for(var i = 0; i < 8; i++) {
        blocks4[i] = { x: i * 60, y: 190 };
    } //blocks for the ball to destroy as an object

    for(var i = 0; i < 8; i++) {
        blocks5[i] = { x: i * 60, y: 250 };
    } //blocks for the ball to destroy as an object
    
function setup() {
    createCanvas(481, 481);
    } //creates canvas for play area
function draw() {
    
    ball.update(); //draws the ball
    paddle.update(); //draws the paddle
    
    if(ball.x > 481) {
    ball.x = 481;
    ball.velocityX *= -1;
    }
    
    if(ball.x < 0) {
    ball.x = 0;
    ball.velocityX *= -1;
    }
    
    if(ball.y < 0) {
    ball.y = 0;
    ball.velocityY *= -1;
    } //allows ball to bounce off of walls and ceiling when its x and y match the canvas area positions
    
        if(hitTestPoint(ball.x, ball.y, paddle.x, paddle.y, paddle.w, paddle.h) ) {
        ball.velocityY *= -1;
        } //reverses speed to make the ball bounce off of the paddle in the opposite y direction

        colliding = hitTestPoint(ball.x, ball.y, paddle.x, paddle.y, paddle.w, paddle.h);

        if(colliding == true) {
            ball.velocityX *= 1.07;
            ball.velocityY *= 1.07;
            colliding = false;
           } //increases the ball's speed every time the paddle collides into it

           if (ball.velocityX >= 7) {
            ball.velocityX = 7;
        }
    
        if (ball.velocityY >= 7) {
            ball.velocityY = 7;
        } //limits the speed to 7
        
        for(var i = 0; i < blocks.length; i++) {
        var b = blocks[i];
        rect(b.x, b.y, 60, 20); //draws blocks using the block object variable
        
            if(hitTestPoint(ball.x, ball.y, b.x, b.y, 60, 20)) {
            ball.velocityY *= -1; //reverses speed to make the ball bounce off of the blocks in the opposite y direction 
            
            //remove block from array
            blocks.splice(i, 1);
            }
        }   for(var i = 0; i < blocks2.length; i++) {
            var b = blocks2[i];
            rect(b.x, b.y, 60, 20); //draws blocks using the block object variable
            
                if(hitTestPoint(ball.x, ball.y, b.x, b.y, 60, 20)) {
                ball.velocityY *= -1; //reverses speed to make the ball bounce off of the blocks in the opposite y direction 
                
                //remove block from array
                blocks2.splice(i, 1);
                }
            } for(var i = 0; i < blocks3.length; i++) {
                var b = blocks3[i];
                rect(b.x, b.y, 60, 20); //draws blocks using the block object variable
                
                    if(hitTestPoint(ball.x, ball.y, b.x, b.y, 60, 20)) {
                    ball.velocityY *= -1; //reverses speed to make the ball bounce off of the blocks in the opposite y direction 
                    
                    //remove block from array
                    blocks3.splice(i, 1);
                    }
                }   for(var i = 0; i < blocks4.length; i++) {
                    var b = blocks4[i];
                    rect(b.x, b.y, 60, 20); //draws blocks using the block object variable
                    
                        if(hitTestPoint(ball.x, ball.y, b.x, b.y, 60, 20)) {
                        ball.velocityY *= -1; //reverses speed to make the ball bounce off of the blocks in the opposite y direction 
                        
                        //remove block from array
                        blocks4.splice(i, 1);
                        }
                    } for(var i = 0; i < blocks5.length; i++) {
                        var b = blocks5[i];
                        rect(b.x, b.y, 60, 20); //draws blocks using the block object variable
                        
                            if(hitTestPoint(ball.x, ball.y, b.x, b.y, 60, 20)) {
                            ball.velocityY *= -1; //reverses speed to make the ball bounce off of the blocks in the opposite y direction 
                            
                            //remove block from array
                            blocks5.splice(i, 1);
                            }
                        }   

    
    }
    
function hitTestPoint(px, py, bx, by, bw, bh) {
    
    if(px > bx && px < bx + bw) {
        if(py > by && py < by + bh) {
            return true;
        }
    }
    
    return false; //return the function as true if the ball collides with the paddle to allow the earlier if statement to reverse the velocity
} //checks if ball is colliding with the given rectangle