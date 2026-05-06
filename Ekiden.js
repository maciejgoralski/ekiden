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
      t = new Team(parseInt(json[i].index), json[i].color);
      this.teams.push(t);
      for (let j = 0; j < json[i].runners.length; j++) {
        r = new Runner(parseInt(json[i].runners[j].number), json[i].runners[j].name);
        for (let k = 0; k < json[i].runners[j].laps.length; k++) {
          l = new Lap(json[i].runners[j].laps[k].start, json[i].runners[j].laps[k].end);
          r.laps.push(l);
        }
        t.runners.push(r);
      }
      t.setStartAndSpeed();
    }

  }
}