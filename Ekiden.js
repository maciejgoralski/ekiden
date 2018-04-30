class Ekiden {
  constructor() {
    this.teams = [];
  }

  load(json){
    let t;
    let r;
    let l;
    this.teams = [];

    for (let i = 0; i < json.length; i++) {
      t = new Team(parseInt(i), json[i].color, parseInt(json[i].running));
      this.teams.push(t);
      for (let j = 0; j < json[i].runners.length; j++) {
        r = new Runner(parseInt(json[i].runners[j].number), json[i].runners[j].name);
        for (let k = 0; k < json[i].runners[j].laps.length; k++) {
          l = new Lap(parseInt(json[i].runners[j].laps[k].speed), parseInt(json[i].runners[j].laps[k].completed), json[i].runners[j].laps[k].start);
          r.laps.push(l);
        }
        t.runners.push(r);
      }
      t.calculateTime();
      t.setStartAndSpeed();
    }
  }

  toJSON() {
    return {
      teams: this.teams
    };
  }
}

class Team {
  constructor(index, color, running) {
    this.index = index;
    this.color = color;
    this.running = running;
    this.runners = [];
    this.m_speed = 0;
    this.m_start = 0;
  }

  current() {
    let iCurrent = 1;
    let iCompleted = 0;
    for (let r of this.runners) {
      iCompleted = 0;

      for (let l of r.laps) {
        if (l.completed == 1) {
          iCompleted++
        }
      }
      
      if (iCompleted < r.laps.length) {
        iCurrent = r.number;
        break;
      }
    }
    return iCurrent;
  }

  speed() {
    return this.m_speed;
  }

  position() {
    let iPosition = 0;
    if (this.m_start != 0) {
      let dNow = new Date();
      iPosition = (dNow - this.m_start) / 1000;
    }
    return iPosition;
  }

  setStartAndSpeed() {
    let bFind = 0;

    for (let r of this.runners) {
      for (let l of r.laps) {
        if (l.completed == 0) {
          this.m_speed = l.speed;
          this.m_start = new Date(l.start);
          bFind = 1;
          break;
        }
      }
      if (bFind == 1) {
        break;
      }
    }

    if (bFind == 0) {
      this.speed = 0;
      this.start = 0;
    }
  }

  calculateTime() {
    let iPreviusRunner = 0;
    let iPreviusLap = 0;
    let dStart;
    let dPreviusStart;

    if (this.running == 0) { 
      let dNow = new Date();
      let dPlaningStart = new Date(dNow.getFullYear(), dNow.getMonth(), dNow.getDay(), 9, 0, 0);
      this.runners[iPreviusRunner].laps[iPreviusLap].start = dPlaningStart.toISOString(); 
    }
    
    for (let i = 0; i < this.runners.length; i++) {
      for (let j = 0; j < this.runners[i].laps.length; j++) {
        if (j == 0 && i == 0) {continue;}
        dPreviusStart = new Date(this.runners[iPreviusRunner].laps[iPreviusLap].start); 
        dStart = new Date(dPreviusStart.getTime() + (this.runners[iPreviusRunner].laps[iPreviusLap].speed * 1000));
        this.runners[i].laps[j].start = dStart.toISOString();
        iPreviusLap = j;
        if (j==0) {
          iPreviusRunner++;
        }
      }
    }
  }

  run() {
    let dNow = new Date();
    let dStart;
    let iSpeed = Math.floor(((dNow - this.lapstart)/1000)); 

    if (this.running == 0) {
      this.running = 1;
      this.runners[0].laps[0].start = dNow.toISOString();
    } else {

      let bFind = 0;

      for (let r of this.runners) {
        for (let l of r.laps) {
          if (l.completed == 0 && bFind == 0) {
            l.completed = 1;          
            dStart = new Date(l.start); 
            iSpeed = Math.floor(((dNow - dStart)/1000)); 
            bFind = 1;
          }
          
          if (bFind == 1) {
            l.speed = iSpeed;
          }
        }
        
        if (bFind == 1) {
          break;
        }
      }
    }  

    this.calculateTime();
    this.setStartAndSpeed();
  }
}

class Runner {
  constructor(number, name) {
    this.number = number;
    this.name = name;
    this.laps = [];
  }

  start() {
    return new Date(this.laps[0].start);
  }

  progress() {
    let iProgress = 0;
    for (let l of this.laps) {
      if (l.completed == 1) {
        iProgress++
      }
    }
    return iProgress;
  }
}

class Lap {
  constructor(speed, completed, start) {
    this.speed = speed;
    this.completed = completed;
    this.start = start;
  }
}