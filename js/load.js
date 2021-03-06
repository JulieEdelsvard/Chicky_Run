var loadState = {

  preload: function () {

      game.load.image('startGame', 'assets/startGame.png');
      game.load.image('winGame', 'assets/gameWinner.png');
      game.load.image('gameOver', 'assets/gameOver.png');
  		game.load.image('sky', 'assets/sky.png');
  		game.load.image('mountain', 'assets/mountain.png');
      game.load.image('desert', 'assets/desert.png');
      game.load.image('ground', 'assets/ground.png');
      game.load.image('platform1', 'assets/platform1.png');
      game.load.image('platform2', 'assets/platform2.png');
  		game.load.image('platform3', 'assets/platform3.png');
  		game.load.image('platform4', 'assets/platform4.png');
  		game.load.image('platform5', 'assets/platform5.png');
  		game.load.image('desertPlatform1', 'assets/desertPlatform1.png');
  		game.load.image('desertPlatform2', 'assets/desertPlatform2.png');
  		game.load.image('desertPlatform3', 'assets/desertPlatform3.png');
      game.load.image('star', 'assets/star.png');
      game.load.image('spiky', 'assets/spiky-monster.png', 35, 40);
      game.load.image('cactus1', 'assets/cactus1.png');
      game.load.image('cactus2', 'assets/cactus2.png');
      game.load.image('crate', 'assets/crate.png');
      game.load.spritesheet('chicken', 'assets/chicken.png', 108, 115);
      game.load.spritesheet('blueChicken', 'assets/bluechicken.png', 108, 115);
      game.load.image('lock1', 'assets/lockYellow.png');
      game.load.image('lock2', 'assets/lockRed.png');
      game.load.image('key1', 'assets/keyYellow.png');
      game.load.image('key2', 'assets/keyRed.png');

      game.load.audio('level1', 'assets/level1.mp3');
      game.load.audio('level2', 'assets/level2.mp3');
      game.load.audio('jump', 'assets/jump.mp3');

  },

  create: function () {

    game.state.start('menu');
  }
};
