var bootState = {

  create: function() {

    //  Arcade Physics system
    game.physics.startSystem(Phaser.Physics.ARCADE);

    // Calling the load state
    game.state.start('load');
  }
};
