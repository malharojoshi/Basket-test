class Player {
  constructor() {
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.score = 0;
  }

  getCount() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", (data) => {
      playerCount = data.val();
    });
  }

  updateCount(count) {
    database.ref("/").update({
      playerCount: count,
    });
  }

  update() {
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name: this.name,
      distance: this.distance,
      score: this.score,
    });
  }

  static getPlayerInfo() {
    var playerInfoRef = database.ref("players");
    playerInfoRef.on("value", (data) => {
      allPlayers = data.val();
    });
  }
  getPlayerScore(playerName) {
    if (playerName === 1) {
      var gameScore1Ref = database.ref("/players/player1/score");
      gameScore1Ref.on("value", function (data) {
        player1Score = data.val();
      });
    }
    if (playerName === 2) {
      var gameScore2Ref = database.ref("/players/player2/score");
      gameScore2Ref.on("value", function (data) {
        player1Score = data.val();
      });
    }
  }

  static updateScore(e) {
    if (e === 1) {
      database.ref("/players/player1").update({
        score: player1Score + 1,
      });
    }
    if (e === 2) {
      database.ref("/players/player2").update({
        score: (player1Score += 1),
      });
    }
  }
}
