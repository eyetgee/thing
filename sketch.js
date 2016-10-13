function setup() {
  createCanvas( windowWidth , windowHeight );
  
}

function draw() {
  background( 255 , 167 , 79 , 10 );
  triangle( mouseX+40 , mouseY+30 , mouseX-40 , mouseY+30, mouseX , mouseY-40);
  
}
