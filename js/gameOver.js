var gameOverState = {

  create: function () {

    var gameOverLabel = game.add.text(80, 80, "Sorry, you lost!", {font: "50px Arial", fill: "white"});

    var startLabel = game.add.text(80, game.world.height -80, 'press the "ENTER" key to start again', {font: '25px Arial', fill: "white"});

    var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

    enterKey.onDown.addOnce(this.restart, this);

  },

  restart: function () {

    game.state.start('menu');

  },

}
