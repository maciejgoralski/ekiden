let oEkiden;

function setup() {

  var myCanvas = createCanvas(290, 290);
  myCanvas.parent("divCanvas");

  angleMode(DEGREES);
  
  oEkiden = new Ekiden();
  oEkiden.load();

  addActionPanel();

  for (let t of oEkiden.teams) {
    addButton(t.index, t.color);
    for (let r of t.runners) {
      addMember(t.index, r.number, r.name, r.laps, r.progress, r.start, 0, t.color);
    }
  }
}

function draw() {

  background(255);
  translate(145, 145);
  rotate(-90);
  strokeWeight(8);
  noFill();

  let radius = 251;

  for (let t of oEkiden.teams) {
    if (t.getCurrentPosition() <= t.getCurrentSpeed()) {
      drawRunner(t.getCurrentPosition(), t.getCurrentSpeed(), radius, t.color);
    }
    radius = radius - 20;
  }

}

function drawRunner(position, speed, radius, color) {
  stroke(color);
  let positionAngle = map(position, 0, speed, 0, 360);
  arc(0, 0, radius, radius, 0, positionAngle);
}

function run(teem) {
  let oTeam = oEkiden.teams[teem];
  oTeam.run();
  let oRuner = oTeam.runners[oTeam.current];
  document.getElementById("tbodyTeam" + oTeam.index).innerHTML = "";

  for (let r of oTeam.runners) {
    addMember(oTeam.index, r.number, r.name, r.laps, r.progress, r.start, oRuner.number, oTeam.color);
  }

  oEkiden.save();
  
  //use strict 
}

function addActionPanel() {
  document.getElementById("divActions").innerHTML = `<div id="divButtons" class="divPanel"></div>`;
}

function addButton(index, color) {
  document.getElementById("divButtons").innerHTML += `<div class="divActions" onclick="run(${index})" onTouchStart="run(${index})" style="background-color: ${color};"><img src="images/flag.svg"></div>`;
}

function addMember(teem, number, name, laps, progress, start, current, color) {

  let memberstyle = "";
  let memberprogress = "";

  if (number == current) {
    memberstyle = ` style="color: #ffffff; background-color: ${color}"`;
    for (let i = 0; i < laps; i++) {
      if (i < progress) {
        memberprogress += " <img src=\"images/doneW.svg\">";
      } else {
        memberprogress += " <img src=\"images/todoW.svg\">";
      }
    };
  } else {
    for (let i = 0; i < laps; i++) {
      if (i < progress) {
        memberprogress += " <img src=\"images/doneB.svg\">";
      } else {
        memberprogress += " <img src=\"images/todoB.svg\">";
      }
    };
  }

  document.getElementById("tbodyTeam" + teem).innerHTML += `<tr id="trTeam${teem}Member${number}"${memberstyle}><th scope="row">${number}</th><td>${name}</td><td>${memberprogress}</td><td>${start}</td>`;

}
