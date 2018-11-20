let sizeRandom = 100;
let xRandom;
let yRandom;


function setup() {
  createCanvas(2000, 900); //canvas size
  frameRate(50); // speed of shape appearance
  noStroke();

}

function draw() {

  sizeRandom = random(100, 300);
  xRandom = random (width);
  yRandom = random (height);

}
function customShape(x, y, size){
  stroke(0);
  strokeWeight(1);
  fill(12, 200, 222) //colour
  ellipse(x, y, size, size); //shape and its size

  strokeWeight(5);
  stroke(99, 333, 12);
  ellipse(x, y, size/1.2, size/1.2); //shape and its size

  strokeWeight(1);
  stroke(177, 178, 174);
  ellipse(x, y, size/1.4, size/1.4); //shape and its size

  stroke(101, 141, 166);
  strokeWeight(5);
  ellipse(x, y, size/1.4, size/1.4); //shape and its size

  noStroke();//test
  fill(111, 204, 171 ) //colour
  ellipse(x, y, size/4, size/4); //shape and its size
}
function keyPressed () {
  if (key=="a" ||key=="A")customShape(xRandom, yRandom, sizeRandom)
  if (key=="b" ||key=="B")customShape1(xRandom, yRandom, sizeRandom)
  if (key=="c" ||key=="C")customShape2(xRandom, yRandom, sizeRandom)
}
function customShape1(x, y, size){
  stroke(0);
  strokeWeight(3);
  fill(60, 190, 20) //colour
  rect(x, y, size, size); //shape and its size

  strokeWeight(5);
  stroke(300, 170, 100);
  rect(x, y, size/1.2, size/1.2); //shape and its size

  strokeWeight(1);
  stroke(289, 134, 421);
  rect(x, y, size/1.4, size/1.4); //shape and its size

  stroke(180, 45, 90);
  strokeWeight(5);
  rect(x, y, size/1.4, size/1.4); //shape and its size

  noStroke();//test
  fill(78, 68, 234 ) //colour
  rect(x, y, size/4, size/4); //shape and its size
}
function customShape2(x, y, size){
  stroke(0);
  strokeWeight(4);
  fill(90, 245, 180) //colour
  triangle(x, y, size, size); //shape and its size

  strokeWeight(4);
  stroke(180, 180, 180);
  triangle(x, y, size/4.4, size/4.4); //shape and its size

  strokeWeight(4);
  stroke(300, 200, 100);
  triangle(x, y, size/1.8, size/1.8); //shape and its size

  stroke(233, 56, 12);
  strokeWeight(4);
  triangle(x, y, size/2.4, size/2.4); //shape and its size

  noStroke();//test
  fill(196, 204, 171 ) //colour
  triangle(x, y, size/4, size/4); //shape and its size
}
