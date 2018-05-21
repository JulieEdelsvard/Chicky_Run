var game = new Phaser.Game(2000, 800, Phaser.AUTO, 'gameDiv');

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('level1', level1state);
game.state.add('level2', level2state);
game.state.add('win', winState);
game.state.add('gameOver', gameOverState);

// Calling the boot state
game.state.start('boot');
