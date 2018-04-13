class Ekiden {
  constructor() {
    this.teams = [];
    this.database = new EkidenDataBase();
  }

  load(){
    let arEkiden;
  
    arEkiden = this.database.json.ekiden;
    
    let t;
    let r;
  
//JSON.parse()

    for (let i = 0; i < arEkiden.length; i++) {
      t = new Team(parseInt(i), arEkiden[i].color);
      this.teams.push(t);
      for (let j = 0; j < arEkiden[i].crew.length; j++) {
        r = new Runner(parseInt(arEkiden[i].crew[j].number), arEkiden[i].crew[j].name, parseInt(arEkiden[i].crew[j].speed), parseInt(arEkiden[i].crew[j].laps), parseInt(arEkiden[i].crew[j].progress));
        t.runners.push(r);
      }
    }
    //TODO: Kalkulacja czasów startów
  }

  save(){
    this.database.update(JSON.stringify(this));
  }

  toJSON() {
    return {
      teams: this.teams
    };
  }
}

class Team {
  constructor(index, color) {
    this.index = index;
    this.color = color;
    this.runners = [];
    this.current = 0;
    this.lapstart = 0;
  }

  getCurrentSpeed() {
    let speed = 60 * this.runners[this.current].speed;
    return speed;
  }

  getCurrentPosition() {
    let positionNow = new Date();
    let position = 0;
    position = (positionNow - this.lapstart) / 1000;
    return position;
  }

  run() {
    let oRuner = this.runners[this.current];
  
    if (this.lapstart != 0) {
      if (oRuner.number < 7) {
        if (oRuner.laps - oRuner.progress > 0) {
          oRuner.progress++
        } else {
          if (this.current < 5) {
            this.current++
          }
        }
      }
    }
  
    this.lapstart = new Date();

    //TODO: Kalkulacja czasów startów
  }
}

class Runner {
  constructor(number, name, speed, laps, progress) {
    this.number = number;
    this.name = name;
    this.speed = speed;
    this.laps = laps;
    this.progress = progress;
    this.start = "09:00";
  }
}
