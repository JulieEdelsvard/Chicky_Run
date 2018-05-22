var winState = {

  create: function () {

    // Display of win
    var nameLabel = game.add.image(80, 80, 'winGame');

    var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

    enterKey.onDown.addOnce(this.restart, this);

  },

  restart: function () {

    game.state.start('menu');

  },
}
