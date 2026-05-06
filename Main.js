let oEkiden;
let oDataBase;
let bTeamsPanelsCreated = false;

async function setup() {

   let sParams = new URLSearchParams(document.location.search.substring(1));
   let sSpreadsheetId = sParams.get("id");

   var myCanvas = createCanvas(290, 290);
   myCanvas.parent("divCanvas");
   angleMode(DEGREES);

    oEkiden = new Ekiden();
    oDataBase = new DataBase(sSpreadsheetId);

    oDataBase.startPolling((data) => {
        oEkiden.load(data.teams || []);
        console.log("Dane odswiezone:", new Date().toLocaleTimeString());
        console.log(oEkiden);
        console.log("Teams:", oEkiden.teams[0].runners[0].laps[0].start);
        addTeamsPanel();


        for (let t of oEkiden.teams) {
            document.getElementById("tbodyTeam" + t.index).innerHTML = "";
            for (let r of t.runners) {
            addMember(t.index, r.number, r.name, r.laps.length, r.progress(), r.start(), t.current(), t.color);
            }
        }


    });

}

function draw() {

  background(255);
  translate(145, 145);
  rotate(-90);
  strokeWeight(8);
  noFill();

  let radius = 251;
  let position = 0;
  let speed = 0;

  for (let t of oEkiden.teams) {
    try {
      position = t.position();
      speed = t.speed();
    } catch(err) {
      position = 0;
      speed = 0;
    }

    if (position <= speed) {
      drawRunner(position, speed, radius, t.color);
    }
    radius = radius - 20;
  }
}

function drawRunner(position, speed, radius, color) {
  stroke(color);
  let positionAngle = map(position, 0, speed, 0, 360);
  arc(0, 0, radius, radius, 0, positionAngle);
}

function addTeamsPanel() {

    if (bTeamsPanelsCreated) return;
 
    for (let i = 0; i < oEkiden.teams.length; i++) {
        document.getElementById("divTeams").innerHTML += `
        <div class="divPanel">
        <table class="table table-sm table-striped table-bordered-column">
        <colgroup><col width="40px"><col><col width="100px"><col></colgroup><thead class="thead-inverse"><tr><th>#</th><th>Biegacz</th><th>Postęp</th><th>Start</th></tr></thead><tbody id="tbodyTeam${i}"></tbody>
        </table>
        </div>
        `;
    }  

    bTeamsPanelsCreated = true;
}


function addMember(teem, number, name, laps, progress, start, current, color) {

  let memberstyle = "";
  let memberprogress = "";
  let h = "--", m = "--", s = "--";

  try {
    h = start.getHours();     if (h<10) { h = "0" + h };
    m = start.getMinutes();   if (m<10) { m = "0" + m };
    s = start.getSeconds();   if (s<10) { s = "0" + s };
  }
  catch(err) {
  }

  let memberstart = h + ":" + m + ":" + s;

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

  document.getElementById("tbodyTeam" + teem).innerHTML += `<tr id="trTeam${teem}Member${number}"${memberstyle}><th scope="row">${number}</th><td>${name}</td><td>${memberprogress}</td><td>${memberstart}</td>`;

}