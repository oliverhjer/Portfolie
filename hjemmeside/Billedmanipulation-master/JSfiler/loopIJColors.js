function setup(){
createCanvas(400,400);
}

function draw(){
  for (let i=0;i<4;i+=1){
    for (let j=0;j<4;j+=1){
      fill(50*i,50*j,0);
      rect(i*100,j*100,100,100);
      if (i==3 && j==2) {
        fill(0,0,255);
        rect(i*100,j*100,100,100);
        
      }
      
    }
  }

  noLoop();
}
