let positionA;
let positionB;
let positionC;
let positionD;
let positionE;
let speedA;
let speedB;
let speedC;
let speedD;
let speedE;
let positionStartA;
let positionStartB;
let positionStartC;
let positionStartD;
let positionStartE;
var h1;

function setup() {
  
  var myCanvas = createCanvas(400, 400);
  myCanvas.parent("divCanvas");

  angleMode(DEGREES);
  //frameRate(1);

  positionStartA = new Date();
  positionStartB = new Date();
  positionStartC = new Date();
  positionStartD = new Date();
  positionStartE = new Date();

}

function draw() {

  background(255);
  translate(200, 200);
  rotate(-90);
  strokeWeight(8);
  noFill();

  let positionNow = new Date();

  positionA = (positionNow - positionStartA) / 1000;
  speedA = 6*60;
  positionB = (positionNow - positionStartB) / 1000;
  speedB = 1*60;
  positionC = (positionNow - positionStartC) / 1000;
  speedC = 4*60;
  positionD = (positionNow - positionStartD) / 1000;
  speedD = 3*60;
  positionE = (positionNow - positionStartE) / 1000;
  speedE = 2*60;

  if (positionA <= speedA) {drawRunner(positionA, speedA, 300, 206, 0, 88);};
  if (positionB <= speedB) {drawRunner(positionB, speedB, 280, 0, 51, 73);};
  if (positionC <= speedC) {drawRunner(positionC, speedC, 260, 0, 220, 0);};
  if (positionD <= speedD) {drawRunner(positionD, speedD, 240, 255, 128, 0);};
  if (positionE <= speedE) {drawRunner(positionE, speedE, 220, 128, 128, 128);};
  
}

function drawRunner(position, speed, radius, red, green, blue) {
  stroke(red, green, blue);
  let positionAngle = map(position, 0, speed, 0, 360);
  arc(0, 0, radius, radius, 0, positionAngle);
}

function runA() {
  positionStartA = new Date();
}

function runB() {
  positionStartB = new Date();
}

function runC() {
  positionStartC = new Date();
}

function runD() {
  positionStartD = new Date();
}

function runE() {
  positionStartE = new Date();
}