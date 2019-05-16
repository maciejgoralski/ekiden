let jsonDefoult = {
  "teams": [
      {
        "index": 0,
        "color": "#00A2CD", 
        "running": 0,
        "runners": [
          {"number": "1", "name": "Karol", "laps": [{"speed" : 520, "completed": 0},{"speed" : 520, "completed": 0},{"speed" : 520, "completed": 0}]},
          {"number": "2", "name": "Radek", "laps": [{"speed" : 735, "completed": 0},{"speed" : 735, "completed": 0},{"speed" : 735, "completed": 0},{"speed" : 735, "completed": 0}]},
          {"number": "3", "name": "Piotr C", "laps": [{"speed" : 645, "completed": 0},{"speed" : 645, "completed": 0},{"speed" : 645, "completed": 0},{"speed" : 645, "completed": 0}]},
          {"number": "4", "name": "Joanna", "laps": [{"speed" : 900, "completed": 0},{"speed" : 900, "completed": 0}]},
          {"number": "5", "name": "Szymon", "laps": [{"speed" : 600, "completed": 0},{"speed" : 600, "completed": 0}]},
          {"number": "6", "name": "Ania", "laps": [{"speed" : 750, "completed": 0},{"speed" : 750, "completed": 0}]}
        ]
      },
      {
        "index": 1,
        "color": "#FF9900", 
        "running": 0,
        "runners": [
          {"number": "1", "name": "Maciek", "laps": [{"speed" : 720, "completed": 0},{"speed" : 720, "completed": 0},{"speed" : 720, "completed": 0}]},
          {"number": "2", "name": "Marcin", "laps": [{"speed" : 810, "completed": 0},{"speed" : 810, "completed": 0},{"speed" : 810, "completed": 0},{"speed" : 810, "completed": 0}]},
          {"number": "3", "name": "Michał", "laps": [{"speed" : 825, "completed": 0},{"speed" : 825, "completed": 0},{"speed" : 825, "completed": 0},{"speed" : 825, "completed": 0}]},
          {"number": "4", "name": "Ela", "laps": [{"speed" : 960, "completed": 0},{"speed" : 960, "completed": 0}]},
          {"number": "5", "name": "Zuzanna", "laps": [{"speed" : 900, "completed": 0},{"speed" : 900, "completed": 0}]},
          {"number": "6", "name": "Jacek", "laps": [{"speed" : 840, "completed": 0},{"speed" : 840, "completed": 0}]}
        ]
      },
      {
        "index": 2,
        "color": "#ED1C5F", 
        "running": 0,
        "runners": [
          {"number": "1", "name": "Alicja", "laps": [{"speed" : 800, "completed": 0},{"speed" : 800, "completed": 0},{"speed" : 800, "completed": 0}]},
          {"number": "2", "name": "Sławek", "laps": [{"speed" : 780, "completed": 0},{"speed" : 780, "completed": 0},{"speed" : 780, "completed": 0},{"speed" : 780, "completed": 0}]},
          {"number": "3", "name": "Piotr K", "laps": [{"speed" : 780, "completed": 0},{"speed" : 780, "completed": 0},{"speed" : 780, "completed": 0},{"speed" : 780, "completed": 0}]},
          {"number": "4", "name": "Krzysiek", "laps": [{"speed" : 780, "completed": 0},{"speed" : 780, "completed": 0}]},
          {"number": "5", "name": "Adam", "laps": [{"speed" : 900, "completed": 0},{"speed" : 900, "completed": 0}]},
          {"number": "6", "name": "Sylwia", "laps": [{"speed" : 860, "completed": 0},{"speed" : 860, "completed": 0}]}
        ]
      }
  ]
};

class EkidenDataBase {
    constructor() {
        let config = {
          apiKey: "AIzaSyAQEhwRc3S_sAP-PXJB9KMLHi9_Uku8ldE",
          authDomain: "ekidensagepl.firebaseapp.com",
          databaseURL: "https://ekidensagepl.firebaseio.com",
          projectId: "ekidensagepl",
          storageBucket: "ekidensagepl.appspot.com",
          messagingSenderId: "623069321192",
          appId: "1:623069321192:web:63ccb7dfd19dea93"
        };
        firebase.initializeApp(config);
        this.database = firebase.database();
        let ref = this.database.ref('ekiden');
        ref.on('value', this.select, this.error);
    }

    loginAsAdmin(pass){
      firebase.auth().signOut().then(function() {console.log("signOut")}, this.error);
      firebase.auth().signInWithEmailAndPassword("admin@ekiden.sage.pl", pass).catch(this.error);
    }

    defoult(){
      console.log("Domyślny");
      return jsonDefoult;
    }

    update(jsonUpdate, key){
      console.log("Aktualizacja");
      let updates = {};
      updates['/ekiden/' + key] = jsonUpdate;
      this.database.ref().update(updates);
    }

    select(data) {
      console.log("Worker");
      refreshTeams(data.val());
    }

    error(err) {
      console.log("Error[" + err.code + "]:" + err.message);
    }
}

