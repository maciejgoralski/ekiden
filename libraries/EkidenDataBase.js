let jsonEkiden = {
  "ekiden": [
      {
        "title": "Drużyna A", 
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
    }
}