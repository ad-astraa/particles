var particles = [];

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(38);

  for (var i = 0; i < 50; i++) {
    let p = new Particle();
    particles.push(p);
  }

  for (var i = particles.length - 1; i >= 0; i--) {
    if (particles[i].alpha > 0) {
      particles[i].update();
      particles[i].show();
    } else {
      particles.splice(i, 1);
    }
  }
}
