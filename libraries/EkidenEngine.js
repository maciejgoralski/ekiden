
let colorTeam = ["#00DC00", "#FF9900", '#ED1C5F', '#64006E', '#00A2CD'];

let position = [0,0,0,0,0];
let speed = [0,0,0,0,0];
let positionStart = [0,0,0,0,0];
let arCurrentRunners = [0,0,0,0,0];
let arEkiden;

function setup() {

  var myCanvas = createCanvas(290, 290);
  myCanvas.parent("divCanvas");

  angleMode(DEGREES);

  let e = new EkidenDataBase();

  arEkiden = e.json.ekiden;

  for (let i = 0; i < arEkiden.length; i++) {
    run(i);
    for (let j = 0; j < arEkiden[i].crew.length; j++) {
        addMember(i, arEkiden[i].crew[j].number, arEkiden[i].crew[j].name, arEkiden[i].crew[j].laps, arEkiden[i].crew[j].progress, "09:36", arEkiden[i].crew[j].speed);
    }
  }
}

  
function draw() {

  background(255);
  translate(145, 145); //środek
  rotate(-90);
  strokeWeight(8);
  noFill();

  let positionNow = new Date();

  for (let i = 0; i < arEkiden.length; i++) {
    position[i] = (positionNow - positionStart[i]) / 1000;
    speed[i] = 60 * arEkiden[i].crew[arCurrentRunners[i]].speed;
    if (position[i] <= speed[i]) {
      drawRunner(position[i], speed[i], 250 - i*20, colorTeam[i]);
    };
  }

}

function drawRunner(position, speed, radius, color) {
  stroke(color);
  let positionAngle = map(position, 0, speed, 0, 360);
  arc(0, 0, radius, radius, 0, positionAngle);
}

function run(teem) {
  arCurrentRunners[teem] = arCurrentRunners[teem] + 1;
  positionStart[teem] = new Date();
}

function addMember(teem, number, name, laps, progress, start, speed) {
  let member = "";

  member += "<tr id=\"trTeam" + teem + "Member" + number + "\"";
  if (number == arCurrentRunners[teem]) {
    member += " style=\"color: #ffffff; background-color: " + colorTeam[teem] + "\"";
  }

  member += "><th scope=\"row\">" + number + "</th>";
  member += "<td>" + name + "</td>";
  member += "<td>";
  if (number == arCurrentRunners[teem]) {
    for (let i = 0; i < progress; i++) {
      member += " <img src=\"images/doneW.svg\">";
    };
    for (let i = 0; i < laps - progress; i++) {
      member += " <img src=\"images/todoW.svg\">";
    };
  } else {
    for (let i = 0; i < progress; i++) {
      member += " <img src=\"images/doneB.svg\">";
    };
    for (let i = 0; i < laps - progress; i++) {
      member += " <img src=\"images/todoB.svg\">";
    };
  }
  member += "</td><td>" + start + "</td>";
 // member += "<td>" + speed + "</td></tr>";

  document.getElementById("tbodyTeam" + teem).innerHTML += member;

}
