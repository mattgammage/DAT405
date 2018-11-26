let size = 50;


function setup() {
   createCanvas(500, 500);
   noLoop();
}


function draw() {
  fill(215,200,170);
  for (let x = 0; x < 10; x++) {
    rect(size*x, height/2, size, size);
  }
}
