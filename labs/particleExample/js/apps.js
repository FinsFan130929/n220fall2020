class Particle {

    x = Math.random() * 700;
    y = Math.random() * 500;
    velocity = { x: 1 - Math.random() * 1.5, y: -2};
    gravity = .03;
    color = [ Math.random() * 255, Math.random() * 255, Math.random() * 255];
  
    update() {
      noStroke();
      fill( this.color );
      circle(this.x, this.y, 8);
  
      this.x += this.velocity.x
      this.y += this.velocity.y

      this.velocity.y += this.gravity
  
      if( this.y >= 400) {
         this.velocity.y *= -.6
      }
      
    }
  }
  
  let particles = [];
  
  function setup() {
    createCanvas(600,400);
    for(var i = 0; i < 100; i++) {
        particles[i] = new Particle();
    }
    
  
  }
  
  function draw() {
    clear()
    for(var i = 0; i < particles.length; i++) {
        particles[i].update();
    }
  }
  
  