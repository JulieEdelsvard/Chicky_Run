var winState = {

  create: function () {

    var winLabel = game.add.text(80, 80, "Yeey, you won!", {font: "50px Arial", fill: "white"});

    var startLabel = game.add.text(80, game.world.height -80, {font: '25px Arial', fill: "white"});

    var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);

    wkey.onDown.addOnce(this.restart, this);

  },

  restart: function () {

    game.state.start('menu');

  },
}
