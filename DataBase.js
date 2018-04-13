let jsonEkiden = {
  "ekiden": [
      {
        "title": "Drużyna A", 
        "current": "0",
        "lapstart": "0",
        "color": "#00DC00", 
        "crew": [
          {"number": "1", "speed" : 3, "laps" : 3, "progress" : 0, "name": "Alicja"},
          {"number": "2", "speed" : 1, "laps" : 4, "progress" : 0, "name": "Agnieszka"},
          {"number": "3", "speed" : 6, "laps" : 4, "progress" : 0, "name": "Ania"},
          {"number": "4", "speed" : 5, "laps" : 2, "progress" : 0, "name": "Arek"},
          {"number": "5", "speed" : 1, "laps" : 2, "progress" : 0, "name": "Antoni"},
          {"number": "6", "speed" : 2, "laps" : 2, "progress" : 0, "name": "Agata"}
        ]
      },
      {
        "title": "Drużyna B", 
        "current": "0",
        "lapstart": "0",
        "color": "#FF9900",
        "crew": [
          {"number": "1", "speed" : 1, "laps" : 3, "progress" : 0, "name": "Bartosz"},
          {"number": "2", "speed" : 2, "laps" : 4, "progress" : 0, "name": "Basia"},
          {"number": "3", "speed" : 2, "laps" : 4, "progress" : 0, "name": "Beata"},
          {"number": "4", "speed" : 3, "laps" : 2, "progress" : 0, "name": "Baca"},
          {"number": "5", "speed" : 3, "laps" : 2, "progress" : 0, "name": "Barbara"},
          {"number": "6", "speed" : 4, "laps" : 2, "progress" : 0, "name": "Bolek"}
        ]
      },
      {
        "title": "Drużyna C",
        "current": "0",
        "lapstart": "0",
        "color": "#ED1C5F",
        "crew": [
          {"number": "1", "speed" : 4, "laps" : 3, "progress" : 0, "name": "Cecylia"},
          {"number": "2", "speed" : 4, "laps" : 4, "progress" : 0, "name": "Czarek"},
          {"number": "3", "speed" : 4, "laps" : 4, "progress" : 0, "name": "Cezary"},
          {"number": "4", "speed" : 3, "laps" : 2, "progress" : 0, "name": "Cylina"},
          {"number": "5", "speed" : 1, "laps" : 2, "progress" : 0, "name": "Clara"},
          {"number": "6", "speed" : 3, "laps" : 2, "progress" : 0, "name": "Cedmin"}
        ]
      },
      {
        "title": "Drużyna D", 
        "current": "0",
        "lapstart": "0",
        "color": "#64006E",
        "crew": [
          {"number": "1", "speed" : 1, "laps" : 3, "progress" : 0, "name": "Darek"},
          {"number": "2", "speed" : 2, "laps" : 4, "progress" : 0, "name": "Damian"},
          {"number": "3", "speed" : 4, "laps" : 4, "progress" : 0, "name": "Dorota"},
          {"number": "4", "speed" : 2, "laps" : 2, "progress" : 0, "name": "Dagmara"},
          {"number": "5", "speed" : 5, "laps" : 2, "progress" : 0, "name": "Doris"},
          {"number": "6", "speed" : 5, "laps" : 2, "progress" : 0, "name": "Daniel"}
        ]
      },
      {
        "title": "Drużyna E", 
        "current": "0",
        "lapstart": "0",
        "color": "#00A2CD",
        "crew": [
          {"number": "1", "speed" : 2, "laps" : 3, "progress" : 0, "name": "Edward"},
          {"number": "2", "speed" : 3, "laps" : 4, "progress" : 0, "name": "Ewa"},
          {"number": "3", "speed" : 3, "laps" : 4, "progress" : 0, "name": "Ewelina"},
          {"number": "4", "speed" : 3, "laps" : 2, "progress" : 0, "name": "Eugeniusz"},
          {"number": "5", "speed" : 3, "laps" : 2, "progress" : 0, "name": "Eloizy"},
          {"number": "6", "speed" : 1, "laps" : 2, "progress" : 0, "name": "Ela"}
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

    }

    select(){
      let jsonSelect = "";
      return jsonSelect;
    }

    update(jsonUpdate){
      console.log("update");
      //let ref = this.database.ref('ekiden');
      //ref.push(jsonUpdate);
    }
}