// Random Sébastien Truchet’s  tiling

let size = 20;
let lwidth, lheight;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(51);
  stroke(255);
  strokeWeight(6);
  lwidth = width / size;
  lheight = height / size;
  frameRate(1);  // frameRate(1);
}

function draw() {
  background(51);
  for(let j=0; j<lheight; j++){
    for(let i=0; i<lwidth; i++){
      let x = i*size + (size/2);
      let y = j*size + (size/2);
      drawline(x,y);
    }
  }
}

function drawline(x, y){
  push();
  translate(x, y);
  // rotate(PI / 4);
  if(random(1) < 0.5){
    line( - (size/2),  - (size/2),  + (size/2),  + (size/2));
  } else {
    line( + (size/2),  - (size/2),  - (size/2),  + (size/2));
  }
  pop();
}