let oEkiden;
let dbEkiden;
let setAdmin = 0;

function refreshTeams(arEkiden) {
  oEkiden.load(arEkiden["2019"].teams);

  for (let t of oEkiden.teams) {
    try {
      document.getElementById(`divActions${t.index}`).style.backgroundColor = t.color;
      document.getElementById(`divActions${t.index}`).innerHTML = t.current() + "/" + t.lap();
    } catch(err) {}
    document.getElementById("tbodyTeam" + t.index).innerHTML = "";
     for (let r of t.runners) {
       addMember(t.index, r.number, r.name, r.laps.length, r.progress(), r.start(), t.current(), t.color);
     }
  }
}

function setup() {
  let sParams = new URLSearchParams(document.location.search.substring(1));
  let sAdminPass = sParams.get("admin");  
  

  var myCanvas = createCanvas(290, 290);
  myCanvas.parent("divCanvas");

  angleMode(DEGREES);

  dbEkiden = new EkidenDataBase();    
  oEkiden = new Ekiden();

  if(sAdminPass) {
    console.log(sAdminPass);
    dbEkiden.loginAsAdmin(sAdminPass);  
    addActionPanel(3);
  }

  addTeamsPanel(3);
}

function setDefoult() {
  let sParams = new URLSearchParams(document.location.search.substring(1));
  let sDefoult = sParams.get("defoult");
  if (sDefoult == 1) {
    let arEkiden = dbEkiden.defoult();
    dbEkiden.update(arEkiden, "2019");
  }
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

function run(teem) {
  try {
    document.getElementById(`divActions${teem}`).style.backgroundColor = "#999999";
    //document.getElementById(`divActions${teem}`).innerHTML = `1<img src="images/flag.svg">3`
    
  } catch(err) {}

  let oTeam = oEkiden.teams[teem];
  oTeam.run();
  dbEkiden.update(oEkiden, "2019");
}

function addActionPanel(how_many) {
  document.getElementById("divActions").innerHTML = `<div id="divButtons" class="divPanel"></div>`;
  for (let i = 0; i < how_many; i++) {
    //document.getElementById("divButtons").innerHTML += `<div id="divActions${i}" class="divActions" onclick="run(${i})" onTouchStart="run(${i})" style="background-color: #999999;"><img src="images/flag.svg"></div>`;
    document.getElementById("divButtons").innerHTML += `<div id="divActions${i}" class="divActions" onclick="run(${i})" onTouchStart="run(${i})" style="background-color: #999999;">1/0</div>`;
  }  
  document.getElementById("divButtons").innerHTML += `<div id="divDefoult" class="divActions" onclick="setDefoult()" onTouchStart="setDefoult()" style="background-color: #999999;">def</div>`;
}

function addTeamsPanel(how_many) {
  for (let i = 0; i < how_many; i++) {
    document.getElementById("divTeams").innerHTML += `
      <div class="divPanel">
      <table class="table table-sm table-striped table-bordered-column">
      <colgroup><col width="40px"><col><col width="100px"><col></colgroup><thead class="thead-inverse"><tr><th>#</th><th>Biegacz</th><th>Postęp</th><th>Start</th></tr></thead><tbody id="tbodyTeam${i}"></tbody>
      </table>
      </div>
    `;
  }  
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
