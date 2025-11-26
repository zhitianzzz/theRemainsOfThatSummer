function setup() {
  createCanvas(windowWidth, windowHeight); // Fullscreen canvas
  noLoop(); // Stops draw() from looping if the background is static
}

function draw() {
  background(20, 9, 87); // Midnight blue background
  for (let i = 0; i < 100; i++) {
    fill(255, random(100, 200)); // Random star brightness
    noStroke();
    ellipse(random(width), random(height), random(2, 5)); // Stars
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Adjust canvas on window resize
}