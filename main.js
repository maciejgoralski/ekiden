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
          {"number": "1", "name": "Alicja", "laptime" : 3, "lap" : 1},
          {"number": "1", "name": "Alicja", "laptime" : 3, "lap" : 2},
          {"number": "1", "name": "Alicja", "laptime" : 3, "lap" : 3},
          
          {"number": "2", "name": "Agnieszka", "laptime" : 1, "lap" : 1},
          {"number": "2", "name": "Agnieszka", "laptime" : 1, "lap" : 2},
          {"number": "2", "name": "Agnieszka", "laptime" : 1, "lap" : 3},
          {"number": "2", "name": "Agnieszka", "laptime" : 1, "lap" : 4},

          {"number": "3", "name": "Anna", "laptime" : 6, "lap" : 1},
          {"number": "3", "name": "Anna", "laptime" : 6, "lap" : 2},
          {"number": "3", "name": "Anna", "laptime" : 6, "lap" : 3},
          {"number": "3", "name": "Anna", "laptime" : 6, "lap" : 4},

          {"number": "4", "name": "Arek", "laptime" : 5, "lap" : 1},
          {"number": "4", "name": "Arek", "laptime" : 5, "lap" : 2},

          {"number": "5", "name": "Antoni", "laptime" : 1, "lap" : 1},
          {"number": "5", "name": "Antoni", "laptime" : 1, "lap" : 2},

          {"number": "6", "name": "Agata", "laptime" : 2, "lap" : 1},
          {"number": "6", "name": "Agata", "laptime" : 2, "lap" : 2}
        ]
      },
      {
        "title": "Drużyna B", 
        "crew": [
          {"number": "1", "name": "Bartosz", "laptime" : 1, "lap" : 1},
          {"number": "1", "name": "Bartosz", "laptime" : 1, "lap" : 2},
          {"number": "1", "name": "Bartosz", "laptime" : 1, "lap" : 3},
          
          {"number": "2", "name": "Basia", "laptime" : 2, "lap" : 1},
          {"number": "2", "name": "Basia", "laptime" : 3, "lap" : 2},
          {"number": "2", "name": "Basia", "laptime" : 2, "lap" : 3},
          {"number": "2", "name": "Basia", "laptime" : 2, "lap" : 4},

          {"number": "3", "name": "Beata", "laptime" : 5, "lap" : 1},
          {"number": "3", "name": "Beata", "laptime" : 5, "lap" : 2},
          {"number": "3", "name": "Beata", "laptime" : 5, "lap" : 3},
          {"number": "3", "name": "Beata", "laptime" : 5, "lap" : 4},

          {"number": "4", "name": "Baca", "laptime" : 4, "lap" : 1},
          {"number": "4", "name": "Baca", "laptime" : 4, "lap" : 2},

          {"number": "5", "name": "Barbara", "laptime" : 2, "lap" : 1},
          {"number": "5", "name": "Barbara", "laptime" : 2, "lap" : 2},

          {"number": "6", "name": "Bolek", "laptime" : 3, "lap" : 1},
          {"number": "6", "name": "Bolek", "laptime" : 3, "lap" : 2}
        ]
      },
      {
        "title": "Drużyna C", 
        "crew": [
          {"number": "1", "name": "Cecylia", "laptime" : 3, "lap" : 1},
          {"number": "1", "name": "Cecylia", "laptime" : 3, "lap" : 2},
          {"number": "1", "name": "Cecylia", "laptime" : 3, "lap" : 3},
          
          {"number": "2", "name": "Czarek", "laptime" : 2, "lap" : 1},
          {"number": "2", "name": "Czarek", "laptime" : 3, "lap" : 2},
          {"number": "2", "name": "Czarek", "laptime" : 2, "lap" : 3},
          {"number": "2", "name": "Czarek", "laptime" : 2, "lap" : 4},

          {"number": "3", "name": "Cezary", "laptime" : 5, "lap" : 1},
          {"number": "3", "name": "Cezary", "laptime" : 5, "lap" : 2},
          {"number": "3", "name": "Cezary", "laptime" : 5, "lap" : 3},
          {"number": "3", "name": "Cezary", "laptime" : 5, "lap" : 4},

          {"number": "4", "name": "Cylina", "laptime" : 4, "lap" : 1},
          {"number": "4", "name": "Cylina", "laptime" : 4, "lap" : 2},

          {"number": "5", "name": "Clara", "laptime" : 2, "lap" : 1},
          {"number": "5", "name": "Clara", "laptime" : 2, "lap" : 2},

          {"number": "6", "name": "Cedmin", "laptime" : 3, "lap" : 1},
          {"number": "6", "name": "Cedmin", "laptime" : 3, "lap" : 2}
        ]
      },
      {
        "title": "Drużyna D", 
        "crew": [
          {"number": "1", "name": "Darek", "laptime" : 1, "lap" : 1},
          {"number": "1", "name": "Darek", "laptime" : 1, "lap" : 2},
          {"number": "1", "name": "Darek", "laptime" : 1, "lap" : 3},
          
          {"number": "2", "name": "Damian", "laptime" : 2, "lap" : 1},
          {"number": "2", "name": "Damian", "laptime" : 2, "lap" : 2},
          {"number": "2", "name": "Damian", "laptime" : 2, "lap" : 3},
          {"number": "2", "name": "Damian", "laptime" : 2, "lap" : 4},

          {"number": "3", "name": "Dorota", "laptime" : 5, "lap" : 1},
          {"number": "3", "name": "Dorota", "laptime" : 5, "lap" : 2},
          {"number": "3", "name": "Dorota", "laptime" : 5, "lap" : 3},
          {"number": "3", "name": "Dorota", "laptime" : 5, "lap" : 4},

          {"number": "4", "name": "Dagmara", "laptime" : 4, "lap" : 1},
          {"number": "4", "name": "Dagmara", "laptime" : 4, "lap" : 2},

          {"number": "5", "name": "Doris", "laptime" : 2, "lap" : 1},
          {"number": "5", "name": "Doris", "laptime" : 2, "lap" : 2},

          {"number": "6", "name": "Daniel", "laptime" : 3, "lap" : 1},
          {"number": "6", "name": "Daniel", "laptime" : 3, "lap" : 2}
        ]
      },
      {
        "title": "Drużyna E", 
        "crew": [
          {"number": "1", "name": "Edward", "laptime" : 2, "lap" : 1},
          {"number": "1", "name": "Edward", "laptime" : 2, "lap" : 2},
          {"number": "1", "name": "Edward", "laptime" : 2, "lap" : 3},
          
          {"number": "2", "name": "Ewa", "laptime" : 3, "lap" : 1},
          {"number": "2", "name": "Ewa", "laptime" : 3, "lap" : 2},
          {"number": "2", "name": "Ewa", "laptime" : 3, "lap" : 3},
          {"number": "2", "name": "Ewa", "laptime" : 3, "lap" : 4},

          {"number": "3", "name": "Ewelina", "laptime" : 6, "lap" : 1},
          {"number": "3", "name": "Ewelina", "laptime" : 6, "lap" : 2},
          {"number": "3", "name": "Ewelina", "laptime" : 6, "lap" : 3},
          {"number": "3", "name": "Ewelina", "laptime" : 6, "lap" : 4},

          {"number": "4", "name": "Eugeniusz", "laptime" : 1, "lap" : 1},
          {"number": "4", "name": "Eugeniusz", "laptime" : 1, "lap" : 2},

          {"number": "5", "name": "Eloizy", "laptime" : 2, "lap" : 1},
          {"number": "5", "name": "Eloizy", "laptime" : 2, "lap" : 2},

          {"number": "6", "name": "Ela", "laptime" : 1, "lap" : 1},
          {"number": "6", "name": "Ela", "laptime" : 1, "lap" : 2}
        ]
      }
  ]
};


function setup() {
  var myCanvas = createCanvas(400, 400);
  myCanvas.parent("divCanvas");

  angleMode(DEGREES);

  arEkiden = jsonEkiden.ekiden;
  console.log(arEkiden);

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
  let stoper = new Date();
  let divTxt = "<table><tr><td><img src=\"images/run.png\"></td><td>" 
  + arEkiden[teem].crew[arCurrentRunners[teem]].number
  + ". "
  + arEkiden[teem].crew[arCurrentRunners[teem]].name 
  + " " 
  + "<img src=\"images/" 
  + arEkiden[teem].crew[arCurrentRunners[teem]].lap 
  + ".png\">"
  + "</td></tr>"

  arCurrentRunners[teem] = arCurrentRunners[teem] + 1;
  
  divTxt = divTxt 
  + "<tr><td><img src=\"images/wait.png\"></td><td>" 
  + arEkiden[teem].crew[arCurrentRunners[teem]].number
  + ". "
  + arEkiden[teem].crew[arCurrentRunners[teem]].name 
  + " "+ stoper.getMinutes() + ":" + stoper.getSeconds() 
  + "</td></tr></table>";

  if (teem == 0) {
    positionStartA = new Date();
    document.getElementById("divTeem0").innerHTML = divTxt;
  }
  if (teem == 1) {
    positionStartB = new Date();
    document.getElementById("divTeem1").innerHTML = divTxt;
  }
  if (teem == 2) {
    positionStartC = new Date();
    document.getElementById("divTeem2").innerHTML = divTxt;
  }
  if (teem == 3) {
    positionStartD = new Date();
    document.getElementById("divTeem3").innerHTML = divTxt;
  }
  if (teem == 4) {
    positionStartE = new Date();
    document.getElementById("divTeem4").innerHTML = divTxt;
  }
}
