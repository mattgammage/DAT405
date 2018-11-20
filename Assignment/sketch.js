
var beginX = 0.0; //coordinate for the beginning of the shape on the x axis
var beginY = 0.0; //coordinate for the beginning of the shape on the y axis
var endX = 700.0; //coordinate for the end of the shape on the x axis
var endY = 730.0; //coordinate for the end of the shape on the y axis
var exponent = 2; //determines when the shape makes its way downwards
var step = 0.01; //speed of decent at the beginning
var pct = 0.0; //determines where the shaoe decends from

function setup() {
  createCanvas(720, 720); //size of canvas
  distX = endX - beginX;
  distY = endY - beginY;
}

function draw() {
  fill(1,1); // colour of canvas
  rect(0, 0, width, height);
  pct += step;
  if (pct < 1.0) {
    x = beginX + pct * distX;
    y = beginY + pow(pct, exponent) * distY;
  }
  fill(random(255), random(255), random(255)); //randomises colour of shape
  ellipse(x, y, 90, 10); //name of shape and its size
}

function mouseMoved() { //describes what to do in order to see effect/function
  pct = 0.5; //
  beginX = x;
  beginY = y;
  endX = mouseX;
  endY = mouseY;
  distX = endX - beginX;
  distY = endY - beginY;
}
