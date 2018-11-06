let size


function setup() {
  createCanvas(720, 400);
  frameRate(30);
  noStroke();

}

function draw() {

  size = random(200)

  fill(random(255), random(0), random(255), random(255));
  ellipse(random(720), random(400), size, size);
}
