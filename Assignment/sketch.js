
var beginX = 0.0;
var beginY = 0.0;
var endX = 700.0;
var endY = 420.0;
var exponent = 2;
var step = 0.01;
var pct = 0.0; // 

function setup() {
  createCanvas(720, 400);
  noStroke();
  distX = endX - beginX;
  distY = endY - beginY;
}

function draw() {
  fill(1,1);
  rect(0, 0, width, height);
  pct += step;
  if (pct < 1.0) {
    x = beginX + pct * distX;
    y = beginY + pow(pct, exponent) * distY;
  }
  fill(random(255), random(255), random(255));
  ellipse(x, y, 90, 10);
}

function mouseMoved() {
  pct = 0.0;
  beginX = x;
  beginY = y;
  endX = mouseX;
  endY = mouseY;
  distX = endX - beginX;
  distY = endY - beginY;
}
