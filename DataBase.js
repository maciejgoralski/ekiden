let jsonEkiden = {
  "teams": [
      {
        "index": 0,
        "color": "#00DC00", 
        "running": 0,
        "runners": [
          {"number": "1", "name": "Karol", "laps": [{"speed" : 600, "completed": 0},{"speed" : 600, "completed": 0},{"speed" : 600, "completed": 0}]},
          {"number": "2", "name": "Piotr", "laps": [{"speed" : 645, "completed": 0},{"speed" : 645, "completed": 0},{"speed" : 645, "completed": 0},{"speed" : 645, "completed": 0}]},
          {"number": "3", "name": "Szymon", "laps": [{"speed" : 675, "completed": 0},{"speed" : 675, "completed": 0},{"speed" : 675, "completed": 0},{"speed" : 675, "completed": 0}]},
          {"number": "4", "name": "Basia", "laps": [{"speed" : 960, "completed": 0},{"speed" : 960, "completed": 0}]},
          {"number": "5", "name": "Alicja", "laps": [{"speed" : 750, "completed": 0},{"speed" : 750, "completed": 0}]},
          {"number": "6", "name": "Łukasz", "laps": [{"speed" : 750, "completed": 0},{"speed" : 750, "completed": 0}]}
        ]
      },
      {
        "index": 1,
        "color": "#FF9900", 
        "running": 0,
        "runners": [
          {"number": "1", "name": "Maciek", "laps": [{"speed" : 700, "completed": 0},{"speed" : 700, "completed": 0},{"speed" : 700, "completed": 0}]},
          {"number": "2", "name": "Radek", "laps": [{"speed" : 675, "completed": 0},{"speed" : 675, "completed": 0},{"speed" : 675, "completed": 0},{"speed" : 675, "completed": 0}]},
          {"number": "3", "name": "Oleksii", "laps": [{"speed" : 750, "completed": 0},{"speed" : 750, "completed": 0},{"speed" : 750, "completed": 0},{"speed" : 750, "completed": 0}]},
          {"number": "4", "name": "Ela", "laps": [{"speed" : 930, "completed": 0},{"speed" : 930, "completed": 0}]},
          {"number": "5", "name": "Marcin", "laps": [{"speed" : 750, "completed": 0},{"speed" : 750, "completed": 0}]},
          {"number": "6", "name": "Justyna", "laps": [{"speed" : 900, "completed": 0},{"speed" : 900, "completed": 0}]}
        ]
      },
      {
        "index": 2,
        "color": "#ED1C5F", 
        "running": 0,
        "runners": [
          {"number": "1", "name": "Mariusz", "laps": [{"speed" : 740, "completed": 0},{"speed" : 740, "completed": 0},{"speed" : 740, "completed": 0}]},
          {"number": "2", "name": "Mateusz", "laps": [{"speed" : 750, "completed": 0},{"speed" : 750, "completed": 0},{"speed" : 750, "completed": 0},{"speed" : 750, "completed": 0}]},
          {"number": "3", "name": "Łukasz", "laps": [{"speed" : 810, "completed": 0},{"speed" : 810, "completed": 0},{"speed" : 810, "completed": 0},{"speed" : 810, "completed": 0}]},
          {"number": "4", "name": "Krzysiek", "laps": [{"speed" : 840, "completed": 0},{"speed" : 840, "completed": 0}]},
          {"number": "5", "name": "Agnieszka", "laps": [{"speed" : 960, "completed": 0},{"speed" : 960, "completed": 0}]},
          {"number": "6", "name": "Monika", "laps": [{"speed" : 1200, "completed": 0},{"speed" : 1200, "completed": 0}]}
        ]
      },
      {
        "index": 3,
        "color": "#64006E", 
        "running": 0,
        "runners": [
          {"number": "1", "name": "Sylwia", "laps": [{"speed" : 860, "completed": 0},{"speed" : 860, "completed": 0},{"speed" : 860, "completed": 0}]},
          {"number": "2", "name": "Piotr", "laps": [{"speed" : 870, "completed": 0},{"speed" : 870, "completed": 0},{"speed" : 870, "completed": 0},{"speed" : 870, "completed": 0}]},
          {"number": "3", "name": "Sławek", "laps": [{"speed" : 855, "completed": 0},{"speed" : 855, "completed": 0},{"speed" : 855, "completed": 0},{"speed" : 855, "completed": 0}]},
          {"number": "4", "name": "Asia", "laps": [{"speed" : 1200, "completed": 0},{"speed" : 1200, "completed": 0}]},
          {"number": "5", "name": "Tomek", "laps": [{"speed" : 750, "completed": 0},{"speed" : 750, "completed": 0}]},
          {"number": "6", "name": "Daniel", "laps": [{"speed" : 750, "completed": 0},{"speed" : 750, "completed": 0}]}
        ]
      },
      {
        "index": 4,
        "color": "#00A2CD", 
        "running": 0,
        "runners": [
          {"number": "1", "name": "Irek", "laps": [{"speed" : 740, "completed": 0},{"speed" : 740, "completed": 0},{"speed" : 740, "completed": 0}]},
          {"number": "2", "name": "Adam", "laps": [{"speed" : 900, "completed": 0},{"speed" : 900, "completed": 0},{"speed" : 900, "completed": 0},{"speed" : 900, "completed": 0}]},
          {"number": "3", "name": "Jarek", "laps": [{"speed" : 630, "completed": 0},{"speed" : 630, "completed": 0},{"speed" : 630, "completed": 0},{"speed" : 630, "completed": 0}]},
          {"number": "4", "name": "Marek", "laps": [{"speed" : 750, "completed": 0},{"speed" : 750, "completed": 0}]},
          {"number": "5", "name": "Sebastian", "laps": [{"speed" : 750, "completed": 0},{"speed" : 750, "completed": 0}]},
          {"number": "6", "name": "Cristina", "laps": [{"speed" : 750, "completed": 0},{"speed" : 750, "completed": 0}]}
        ]
      }
  ]
};

class EkidenDataBase {
    constructor() {
        this.json = jsonEkiden;
        
        let config = {
          apiKey: "AIzaSyB9FgBj3eH-HZw8cWrbtx3r_Z5_S6RKpmI",
          authDomain: "test-e5d7a.firebaseapp.com",
          databaseURL: "https://test-e5d7a.firebaseio.com",
          projectId: "test-e5d7a",
          storageBucket: "test-e5d7a.appspot.com",
          messagingSenderId: "716942600364"
        };
        firebase.initializeApp(config);
        
        this.database = firebase.database();

        let ref = this.database.ref('ekiden');
        ref.on('value', this.select, this.error);
        
    }

    defoult(){
      console.log("Domyślny");
      return this.json;
    }
    
    update(jsonUpdate){
      console.log("Aktualizacja");
      let ref = this.database.ref('ekiden');
      ref.push(jsonUpdate);
    }

    select(data) {
      console.log("Odczyt");
      let dEkiden = data.val();
      let kEkiden = Object.keys(dEkiden);
      let sLast = dEkiden[kEkiden[kEkiden.length-1]];
      let jsonEkiden = sLast; 
      refreshTeams(jsonEkiden.teams);
    }
    
    error(err) {
      console.log("Error: " + err);
    }
}

