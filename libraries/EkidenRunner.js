class EkidenRunner {

    constructor(number, name, speed) {
      // invokes the setter
      this.number = number;
      this.color = color;
      this.team = team;
      this.name = name;
      this.speed = speed;
      this.lapleft = speed;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      if (value.length < 4) {
        alert("Name is too short.");
        return;
      }
      this._name = value;
    }
  
  }