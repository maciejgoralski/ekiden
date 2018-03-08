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


let arCurrentRunners = [0,0,0,0,0];
let arEkiden;
let jsonEkiden = {
  "ekiden": [
      {
        "title": "Drużyna A", 
        "crew": [
          {"number": "1", "name": "Alicja", "laptime" : 3, "lap" : 1, "lapicon" : "0z3.png"},
          {"number": "1", "name": "Alicja", "laptime" : 3, "lap" : 2, "lapicon" : "1z3.png"},
          {"number": "1", "name": "Alicja", "laptime" : 3, "lap" : 3, "lapicon" : "2z3.png"},
          
          {"number": "2", "name": "Agnieszka", "laptime" : 1, "lap" : 1, "lapicon" : "0z4.png"},
          {"number": "2", "name": "Agnieszka", "laptime" : 1, "lap" : 2, "lapicon" : "1z4.png"},
          {"number": "2", "name": "Agnieszka", "laptime" : 1, "lap" : 3, "lapicon" : "2z4.png"},
          {"number": "2", "name": "Agnieszka", "laptime" : 1, "lap" : 4, "lapicon" : "3z4.png"},

          {"number": "3", "name": "Anna", "laptime" : 6, "lap" : 1, "lapicon" : "0z4.png"},
          {"number": "3", "name": "Anna", "laptime" : 6, "lap" : 2, "lapicon" : "1z4.png"},
          {"number": "3", "name": "Anna", "laptime" : 6, "lap" : 3, "lapicon" : "2z4.png"},
          {"number": "3", "name": "Anna", "laptime" : 6, "lap" : 4, "lapicon" : "3z4.png"},

          {"number": "4", "name": "Arek", "laptime" : 5, "lap" : 1, "lapicon" : "0z2.png"},
          {"number": "4", "name": "Arek", "laptime" : 5, "lap" : 2, "lapicon" : "1z2.png"},

          {"number": "5", "name": "Antoni", "laptime" : 1, "lap" : 1, "lapicon" : "0z2.png"},
          {"number": "5", "name": "Antoni", "laptime" : 1, "lap" : 2, "lapicon" : "1z2.png"},

          {"number": "6", "name": "Agata", "laptime" : 2, "lap" : 1, "lapicon" : "0z2.png"},
          {"number": "6", "name": "Agata", "laptime" : 2, "lap" : 2, "lapicon" : "1z2.png"}
        ]
      },
      {
        "title": "Drużyna B", 
        "crew": [
          {"number": "1", "name": "Bartosz", "laptime" : 1, "lap" : 1, "lapicon" : "0z3.png"},
          {"number": "1", "name": "Bartosz", "laptime" : 1, "lap" : 2, "lapicon" : "1z3.png"},
          {"number": "1", "name": "Bartosz", "laptime" : 1, "lap" : 3, "lapicon" : "2z3.png"},
          
          {"number": "2", "name": "Basia", "laptime" : 2, "lap" : 1, "lapicon" : "0z4.png"},
          {"number": "2", "name": "Basia", "laptime" : 3, "lap" : 2, "lapicon" : "1z4.png"},
          {"number": "2", "name": "Basia", "laptime" : 2, "lap" : 3, "lapicon" : "2z4.png"},
          {"number": "2", "name": "Basia", "laptime" : 2, "lap" : 4, "lapicon" : "3z4.png"},

          {"number": "3", "name": "Beata", "laptime" : 5, "lap" : 1, "lapicon" : "0z4.png"},
          {"number": "3", "name": "Beata", "laptime" : 5, "lap" : 2, "lapicon" : "1z4.png"},
          {"number": "3", "name": "Beata", "laptime" : 5, "lap" : 3, "lapicon" : "2z4.png"},
          {"number": "3", "name": "Beata", "laptime" : 5, "lap" : 4, "lapicon" : "3z4.png"},

          {"number": "4", "name": "Baca", "laptime" : 4, "lap" : 1, "lapicon" : "0z2.png"},
          {"number": "4", "name": "Baca", "laptime" : 4, "lap" : 2, "lapicon" : "1z2.png"},

          {"number": "5", "name": "Barbara", "laptime" : 2, "lap" : 1, "lapicon" : "0z2.png"},
          {"number": "5", "name": "Barbara", "laptime" : 2, "lap" : 2, "lapicon" : "1z2.png"},

          {"number": "6", "name": "Bolek", "laptime" : 3, "lap" : 1, "lapicon" : "0z2.png"},
          {"number": "6", "name": "Bolek", "laptime" : 3, "lap" : 2, "lapicon" : "1z2.png"}
        ]
      },
      {
        "title": "Drużyna C", 
        "crew": [
          {"number": "1", "name": "Cecylia", "laptime" : 3, "lap" : 1, "lapicon" : "0z3.png"},
          {"number": "1", "name": "Cecylia", "laptime" : 3, "lap" : 2, "lapicon" : "1z3.png"},
          {"number": "1", "name": "Cecylia", "laptime" : 3, "lap" : 3, "lapicon" : "2z3.png"},
          
          {"number": "2", "name": "Czarek", "laptime" : 2, "lap" : 1, "lapicon" : "0z4.png"},
          {"number": "2", "name": "Czarek", "laptime" : 3, "lap" : 2, "lapicon" : "1z4.png"},
          {"number": "2", "name": "Czarek", "laptime" : 2, "lap" : 3, "lapicon" : "2z4.png"},
          {"number": "2", "name": "Czarek", "laptime" : 2, "lap" : 4, "lapicon" : "3z4.png"},

          {"number": "3", "name": "Cezary", "laptime" : 5, "lap" : 1, "lapicon" : "0z4.png"},
          {"number": "3", "name": "Cezary", "laptime" : 5, "lap" : 2, "lapicon" : "1z4.png"},
          {"number": "3", "name": "Cezary", "laptime" : 5, "lap" : 3, "lapicon" : "2z4.png"},
          {"number": "3", "name": "Cezary", "laptime" : 5, "lap" : 4, "lapicon" : "3z4.png"},

          {"number": "4", "name": "Cylina", "laptime" : 4, "lap" : 1, "lapicon" : "0z2.png"},
          {"number": "4", "name": "Cylina", "laptime" : 4, "lap" : 2, "lapicon" : "1z2.png"},

          {"number": "5", "name": "Clara", "laptime" : 2, "lap" : 1, "lapicon" : "0z2.png"},
          {"number": "5", "name": "Clara", "laptime" : 2, "lap" : 2, "lapicon" : "1z2.png"},

          {"number": "6", "name": "Cedmin", "laptime" : 3, "lap" : 1, "lapicon" : "0z2.png"},
          {"number": "6", "name": "Cedmin", "laptime" : 3, "lap" : 2, "lapicon" : "1z2.png"}
        ]
      },
      {
        "title": "Drużyna D", 
        "crew": [
          {"number": "1", "name": "Darek", "laptime" : 1, "lap" : 1, "lapicon" : "0z3.png"},
          {"number": "1", "name": "Darek", "laptime" : 1, "lap" : 2, "lapicon" : "1z3.png"},
          {"number": "1", "name": "Darek", "laptime" : 1, "lap" : 3, "lapicon" : "2z3.png"},
          
          {"number": "2", "name": "Damian", "laptime" : 2, "lap" : 1, "lapicon" : "0z4.png"},
          {"number": "2", "name": "Damian", "laptime" : 2, "lap" : 2, "lapicon" : "1z4.png"},
          {"number": "2", "name": "Damian", "laptime" : 2, "lap" : 3, "lapicon" : "2z4.png"},
          {"number": "2", "name": "Damian", "laptime" : 2, "lap" : 4, "lapicon" : "3z4.png"},

          {"number": "3", "name": "Dorota", "laptime" : 5, "lap" : 1, "lapicon" : "0z4.png"},
          {"number": "3", "name": "Dorota", "laptime" : 5, "lap" : 2, "lapicon" : "1z4.png"},
          {"number": "3", "name": "Dorota", "laptime" : 5, "lap" : 3, "lapicon" : "2z4.png"},
          {"number": "3", "name": "Dorota", "laptime" : 5, "lap" : 4, "lapicon" : "3z4.png"},

          {"number": "4", "name": "Dagmara", "laptime" : 4, "lap" : 1, "lapicon" : "0z2.png"},
          {"number": "4", "name": "Dagmara", "laptime" : 4, "lap" : 2, "lapicon" : "1z2.png"},

          {"number": "5", "name": "Doris", "laptime" : 2, "lap" : 1, "lapicon" : "0z2.png"},
          {"number": "5", "name": "Doris", "laptime" : 2, "lap" : 2, "lapicon" : "1z2.png"},

          {"number": "6", "name": "Daniel", "laptime" : 3, "lap" : 1, "lapicon" : "0z2.png"},
          {"number": "6", "name": "Daniel", "laptime" : 3, "lap" : 2, "lapicon" : "1z2.png"}
        ]
      },
      {
        "title": "Drużyna E", 
        "crew": [
          {"number": "1", "name": "Edward", "laptime" : 2, "lap" : 1, "lapicon" : "0z3.png"},
          {"number": "1", "name": "Edward", "laptime" : 2, "lap" : 2, "lapicon" : "1z3.png"},
          {"number": "1", "name": "Edward", "laptime" : 2, "lap" : 3, "lapicon" : "2z3.png"},
          
          {"number": "2", "name": "Ewa", "laptime" : 3, "lap" : 1, "lapicon" : "0z4.png"},
          {"number": "2", "name": "Ewa", "laptime" : 3, "lap" : 2, "lapicon" : "1z4.png"},
          {"number": "2", "name": "Ewa", "laptime" : 3, "lap" : 3, "lapicon" : "2z4.png"},
          {"number": "2", "name": "Ewa", "laptime" : 3, "lap" : 4, "lapicon" : "3z4.png"},

          {"number": "3", "name": "Ewelina", "laptime" : 6, "lap" : 1, "lapicon" : "0z4.png"},
          {"number": "3", "name": "Ewelina", "laptime" : 6, "lap" : 2, "lapicon" : "1z4.png"},
          {"number": "3", "name": "Ewelina", "laptime" : 6, "lap" : 3, "lapicon" : "2z4.png"},
          {"number": "3", "name": "Ewelina", "laptime" : 6, "lap" : 4, "lapicon" : "3z4.png"},

          {"number": "4", "name": "Eugeniusz", "laptime" : 1, "lap" : 1, "lapicon" : "0z2.png"},
          {"number": "4", "name": "Eugeniusz", "laptime" : 1, "lap" : 2, "lapicon" : "1z2.png"},

          {"number": "5", "name": "Eloizy", "laptime" : 2, "lap" : 1, "lapicon" : "0z2.png"},
          {"number": "5", "name": "Eloizy", "laptime" : 2, "lap" : 2, "lapicon" : "1z2.png"},

          {"number": "6", "name": "Ela", "laptime" : 1, "lap" : 1, "lapicon" : "0z2.png"},
          {"number": "6", "name": "Ela", "laptime" : 1, "lap" : 2, "lapicon" : "1z2.png"}
        ]
      }
  ]
};


function setup() {
  var myCanvas = createCanvas(400, 400);
  myCanvas.parent("divCanvas");

  angleMode(DEGREES);

  arEkiden = jsonEkiden.ekiden;

  for (let i = 0; i < arEkiden.length; i++) {
    run(i);
  }
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

  if (positionA <= speedA) {drawRunner(positionA, speedA, 300, 0, 220, 0);};
  if (positionB <= speedB) {drawRunner(positionB, speedB, 280, 255, 93, 0);};
  if (positionC <= speedC) {drawRunner(positionC, speedC, 260, 237, 28, 95);};
  if (positionD <= speedD) {drawRunner(positionD, speedD, 240, 100, 0, 110);};
  if (positionE <= speedE) {drawRunner(positionE, speedE, 220, 0, 162, 205);};



  
}

function drawRunner(position, speed, radius, red, green, blue) {
  stroke( red, green, blue);
  let positionAngle = map(position, 0, speed, 0, 360);
  arc(0, 0, radius, radius, 0, positionAngle);
}

function run(teem) {
  arCurrentRunners[teem] = arCurrentRunners[teem] + 1;

  if (teem == 0) {
    positionStartA = new Date();
  }
  if (teem == 1) {
    positionStartB = new Date();
  }
  if (teem == 2) {
    positionStartC = new Date();
  }
  if (teem == 3) {
    positionStartD = new Date();
  }
  if (teem == 4) {
    positionStartE = new Date();
  }

  for (let i = 0; i < arEkiden.length; i++) {
    document.getElementById("divTeem" + i).innerHTML = status(i);
  }
}

function status(teem) {

  let iCurrentRunner = arCurrentRunners[teem];
  let iNextRunner = arCurrentRunners[teem] + 1;

  let stoper = new Date();
  let divTxt = "Finisz!!!";
  
  if (arCurrentRunners[teem] < 15) {

  divTxt = "<table><tr><td><img src=\"images/run.png\"></td><td>" 
  + arEkiden[teem].crew[iCurrentRunner].number
  + ". "
  + arEkiden[teem].crew[iCurrentRunner].name 
  + " " 
  + "<img src=\"images/" 
  + arEkiden[teem].crew[iCurrentRunner].lapicon 
  + "\">"
  + "</td></tr>"
  + "<tr><td><img src=\"images/wait.png\"></td><td>" 
  + arEkiden[teem].crew[iNextRunner].number
  + ". "
  + arEkiden[teem].crew[iNextRunner].name 
  //+ " "+ stoper.getMinutes() + ":" + stoper.getSeconds() 
  + "</td></tr></table>";

  
  }
  return divTxt;
}
