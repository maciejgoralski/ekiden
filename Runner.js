class Runner {
  constructor(number, name, start) {
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
      if (l.end <= new Date()) {
        iProgress++
      }
    }
    return iProgress;
  }
}