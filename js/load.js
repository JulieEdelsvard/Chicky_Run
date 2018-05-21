var loadState = {

  preload: function () {

      game.load.image('background', 'assets/Full-Background.png');
  		game.load.image('sky', 'assets/sky.png');
  		game.load.image('mountain', 'assets/mountain.png');
      game.load.image('ground', 'assets/platform2.png');
      game.load.image('platform1', 'assets/platform1.png');
      game.load.image('platform2', 'assets/platform2.png');
  		game.load.image('platform3', 'assets/platform3.png');
  		game.load.image('platform4', 'assets/platform4.png');
  		game.load.image('platform5', 'assets/platform5.png');
      game.load.image('star', 'assets/star.png');
      game.load.image('lock', 'assets/lockYellow.png');
      game.load.image('key', 'assets/keyYellow.png');
      game.load.image('spiky', 'assets/spiky-monster.png', 35, 40);
      game.load.spritesheet('chicken', 'assets/chicken.png', 108, 115);

      game.load.audio('level1', 'assets/level1.mp3');
      game.load.audio('jump', 'assets/jump.mp3');

  },

  create: function () {

    game.state.start('menu');
  }
};
