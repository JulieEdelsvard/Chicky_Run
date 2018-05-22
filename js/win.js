var winState = {

  create: function () {

    var winLabel = game.add.text(80, 80, "Yeey, you won!", {font: "50px Arial", fill: "white"});

    var startLabel = game.add.text(80, game.world.height -80, 'press the "ENTER" key to go back to menu', {font: '25px Arial', fill: "white"});

    var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);

    enterKey.onDown.addOnce(this.restart, this);

  },

  restart: function () {

    game.state.start('menu');

  },
}
