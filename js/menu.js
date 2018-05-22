var menuState = {

  create: function () {

    // Display of start
    var nameLabel = game.add.image(80, 80, 'startGame');

    // Definition of key function
    var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

    // When player press enter, the play function gets called
    enterKey.onDown.addOnce(this.start, this);


  },

  // The start function calls the play state
  start: function () {

    game.state.start('level1');

  }
};
