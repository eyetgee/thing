function setup() {
  createCanvas( windowWidth , windowHeight )
  background( 255 , 167 , 79 )
}

function draw() {
  triangle( mouseX+40 , mouseY+30 , mouseX-40 , mouseY+30, mouseX , mouseY-40);
  
}
