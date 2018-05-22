var gameOverState = {

  create: function () {

    // Display of start
    var nameLabel = game.add.image(80, 80, 'gameOver');

    var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

    enterKey.onDown.addOnce(this.restart, this);

  },

  restart: function () {

    game.state.start('menu');

  },

}
