let size


function setup() {
  createCanvas(720, 400);
  frameRate(30);
  noStroke();

}

function draw() {

  size = random(200)
  customShape();

}
function customShape(){
  fill(random(255), random(0), random(255), random(255));
  ellipse(random(720), random(400), size, size);
  rect(random(360), random(200), size, size);
  ellipse(random(180), random(100), size, size);
  rect(random(90), random(50), size, size);
  ellipse(random(45), random(25), size, size);

}
