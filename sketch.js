var hr,min,sc;
var scAngle;

function setup() {
  createCanvas(400,400);
  createSprite(400, 200, 50, 50);

  angleMode(DEGREES);
}

function draw() {
  background(0,0,0);  
  translate(200,200);
  rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr,0,12,0,360);
  push();
  rotate(scAngle);

  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle);

  stroke(160,243,45);
  strokeWeight(6);
  line(0,0,75,0);
  pop(0);

  push();
  rotate(hrAngle);

  stroke(242,225,45);
  strokeWeight(6);
  line(0,0,50,0);
  pop();


  stroke(255,0,255);
  strokeWeight(11);
  noFill();
  stroke(255,0,0);
  arc(0,0,360,360,scAngle);

  stroke(160,243,45);
  arc(0,0,360,360,mnAngle);

  stroke(242,225,45);
  arc(0,0,360,360,hrAngle);

  
  drawSprites();


}