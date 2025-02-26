let img;

function preload(){
  img = loadImage('billeder/mps.jpg');

}

function setup(){
  w = img.width;
  h = img.height;
  createCanvas(2*w,h);
  noStroke();
  pixelDensity(10);
  img.loadPixels();

}

function draw(){
  ownFilter();
  image(img,w,0);
  noLoop();
}

function ownFilter(){ 
  for (let i=0;i<w; i += 1){
    for (let j=0;j<h; j += 1){
      fill(255-getPixelValue(-10,i,j)-getPixelValue(10,i,j),255-getPixelValue(-8,i,j),getPixelValue(-27,i,j));
      rect(i,j,1,1);
    }
  }
}


function getPixelValue(n,i,j){
  p = img.pixels[(i+w*j)*4+n];
  return p;
}
