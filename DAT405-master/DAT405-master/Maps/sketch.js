//var x = map(mouseX, 0, width, 0, 255);
//var y = map(mouseY, 0, width, 255, 0);
function setup() {
  createCanvas(400, 400);
  noStroke();
  //background(33,33,33);
  /*fill(0,255,0,255);
  var rect2= rect (160,10,150,150);
  fill(255,235,59,255);
  var rect3= rect(10,160,150,150);
  fill(0,0,255,255);
  var rect4= rect(160,160,150,150); */
  //var x = map(mouseX, 0, width, 0, 255);
  //var y = map(mouseY, 0, width, 255, 0);

}
function draw() {
  background(33,33,33);
  var x = map(mouseX, 0, width, 0, 255);
  var y = map(mouseY, 0, height, 255, 0);
  var z = color(255, 0, 0,y);
  fill(z);
  rect (10,10,150,150);
  fill(0,255,0, x);
  rect (160,10,150,150);
  fill (255,235,59, x);
  rect (10,160,150,150);
  fill(0,0,255,y);
  rect (160,160,150,150);
  console.log(x);
  /*fill()
  rect1
  fill()
  rect2
  fill()
  rect3
  fill()
  rect4 */
}
