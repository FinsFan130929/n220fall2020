var ball = {
    x: 100, y: 100,
    velocityX: 2, velocityY: 2,
    update: function() {
    noFill();
    stroke(255, 238, 130);
    circle(this.x, this.y, 10);
    this.x += this.velocityX;
    this.y += this.velocityY;
    } //sets intial ball position and speed as an object
};
var paddle = {
    x: 100, y: 350, w: 150, h: 20,
    update: function() {
    noFill();
    stroke(143, 251, 255);
    rect(this.x, this.y, this.w, this.h);
        if(keyIsDown(LEFT_ARROW)) {
        this.x -= 2;
        }
        
            if(keyIsDown(RIGHT_ARROW)) {
            this.x += 2;
            }
    }
}; //sets intial paddle position and gives control left and right via arrow keys as an object
    
    
var blocks = [];
    
    for(var i = 0; i < 6; i++) {
    blocks[i] = { x: i * 60, y: 10 };
    } //blocks for the ball to destroy as an object
    
function setup() {
    createCanvas(400, 400);
    } //creates canvas for play area
function draw() {
    background(70);
    
    ball.update(); //draws the ball
    paddle.update(); //draws the paddle
    
    if(ball.x > 400) {
    ball.x = 400;
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
        
        for(var i = 0; i < blocks.length; i++) {
        var b = blocks[i];
        rect(b.x, b.y, 60, 20); //draws blocks using the block object variable
        
            if(hitTestPoint(ball.x, ball.y, b.x, b.y, 60, 20)) {
            ball.velocityY *= -1; //reverses speed to make the ball bounce off of the blocks in the opposite y direction 
            
            //remove block from array
            blocks.splice(i, 1);
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