class Team {
  constructor(index, color) {
    this.index = index;
    this.color = color;
    this.runners = [];

    this.m_speed = 0;
    this.m_start = 0;
    this.m_current = 0;
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

  current() {
    return this.m_current;
  }

  setStartAndSpeed() {
    let bFind = 0;

    for (let r of this.runners) {
      for (let l of r.laps) {
        if (l.start >= new Date()) {
          console.log(r);
          this.m_speed = (l.end - l.start) / 1000;
          this.m_start = new Date(l.start);
          this.m_current = r.number;
          bFind = 1;
          break;
        }
      }
      if (bFind == 1) {
        break;
      }
    }

    if (bFind == 0) {
      console.log("Team: not current runner found");
      this.m_current = 1;
      this.m_speed = 0;
      this.m_start = 0;
    }
  }
  
}
