var menuState = {

  create: function () {

    // Display of game name
    var nameLabel = game.add.text(80, 80, 'Chicky Run', { font: '50px Arial', fill: 'white'});

    // player instructions
    var startLabel = game.add.text(80, game.world.height -80, 'press the "ENTER" key to start', {font: '25px Arial', fill: 'white'});

    // Definition of key function
    var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

    // When player press W, the play function gets called
    enterKey.onDown.addOnce(this.start, this);


  },

  // The start function calls the play state
  start: function () {

    game.state.start('level1');

  }
};
