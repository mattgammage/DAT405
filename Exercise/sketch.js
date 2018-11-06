let sizeRandom = 100;
let xRandom;
let yRandom;


function setup() {
  createCanvas(720, 400);
  frameRate(30);
  noStroke();

}

function draw() {

  sizeRandom = random(100, 300);
  xRandom = random (width);
  yRandom = random (height);
  customShape(xRandom, yRandom, sizeRandom)

}
function customShape(x, y, size){
  stroke(0);
  strokeWeight(1);
  fill(255)
  ellipse(x, y, size, size);

  strokeWeight(5);
  stroke(255, 207, 200);
  ellipse(x, y, size/1.2, size/1.2);

  strokeWeight(1);
  stroke(177, 178, 174);
  ellipse(x, y, size/1.4, size/1.4);

  stroke(101, 141, 166);
  strokeWeight(5);
  ellipse(x, y, size/1.4, size/1.4);

  noStroke();
  fill(196, 204, 171 )
  ellipse(x, y, size/4, size/4);
}
