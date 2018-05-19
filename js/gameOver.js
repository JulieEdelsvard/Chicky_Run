var gameOverState = {

  create: function () {

    var gameOverLabel = game.add.text(80, 80, "Sorry, you lost!", {font: "50px Arial", fill: "white"});

    var startLabel = game.add.text(80, game.world.height -80, {font: '25px Arial', fill: "white"});

    var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);

    wkey.onDown.addOnce(this.restart, this);

  },

  restart: function () {

    game.state.start('menu');

  },

}
