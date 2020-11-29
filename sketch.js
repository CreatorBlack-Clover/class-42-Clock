var hr, mn, sc;
var scAngle;

function setup() {
  createCanvas(800,600);


}

function draw() 
{
  background(0); 
  // changing the angle mode
  angleMode(DEGREES);

  // calculating the time using ps.js functions
  hr = hour();
  mn = minute();
  sc = second();

  // map
  scAngle = map(sc, 0, 60, 0, 360);
  // drawing the "second" lines
  push();
  translate(width/2,height/2);
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0, 0, -140);
  pop();

  // second arc
  push();
  translate(width/2,height/2);
  stroke(255,0,0);
  strokeWeight(7)
  noFill();
  arc(0,0,400,400,270,scAngle -90);
  pop();

  // map
  mnAngle = map(mn, 0, 60, 0, 360);
  // drawing the "minute" lines
  push();
  translate(width/2,height/2);
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0, 0, -110);
  pop();

  // minute arc
  push();
  translate(width/2,height/2);
  stroke(0,255,0);
  strokeWeight(7)
  noFill();
  arc(0,0,385,385,270,mnAngle-90);
  pop();

  // map
  hrAngle = map(hr, 0, 60, 0, 360);
  // drawing the "hour" lines
  push();
  translate(width/2,height/2);
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0, 0, -80);
  pop();

  // hour arc
  push();
  translate(width/2,height/2);
  stroke(0,0,255);
  strokeWeight(7)
  noFill();
  arc(0,0,370,370,270,hrAngle-90);
  pop();

  drawSprites();
}


  