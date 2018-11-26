let size = 50;


function setup() {
  createCanvas(500, 500);

}

function draw() {
  for (let x = 0; x < 10; x++) {
    for(let y = 0; y <10; y++){
      rect(size*x, size*y, size, size);

    randomColor = color(random(255),random(255),random(255));

    fill(randomColor);}

  }
}
