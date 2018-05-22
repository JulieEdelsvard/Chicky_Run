var win;
var player;
var chicken;
var platforms;
var ground;
var sky, mountain;
var stars;
var spiky;
var locks;
var keys;
var cursors;
var scale;
var speed = 4;
var style = 'default';
var score = 0;
var scoreText;
var lives = 3;
var livesText;
var lifeLostText;
var keyIcon;


var level2state = {

create: function () {

		game.scale.scaleMode = Phaser.ScaleManager.RESIZE;

		game.world.setBounds(0, 0, 2000, 800);

    // Add background music
    music = game.add.audio('level2', 1, true);
    music.loop = true;
    music.play();

//     levelMusic: function() {
//     this.music.play('', 0, 1, true);
// }

    var background = game.add.image(0, 0, 'desert');

    //  The platforms group contains the ground and the 2 ledges
    platforms = game.add.group();

    //  Enable physics for any object that is created in the group
    platforms.enableBody = true;

    // Create the ground.
    var ground = platforms.create(0, game.world.height - 70, 'desertPlatform2');

    //  Scale it to fit the width of the game
    ground.scale.setTo(1, 1);

    //  This stops it from falling away when jumping on it
    ground.body.immovable = true;

    //  Create the ledges
    var ledge = platforms.create(400, 550, 'desertPlatform2');
    ledge.body.immovable = true;

    ledge = platforms.create(-150, 250, 'desertPlatform1');
    ledge.body.immovable = true;

		ledge = platforms.create(500, 200, 'desertPlatform2');
    ledge.body.immovable = true;

		ledge = platforms.create(1200, 550, 'desertPlatform3');
    ledge.body.immovable = true;

		ledge = platforms.create(1400, 400, 'desertPlatform3');
    ledge.body.immovable = true;

		ledge = platforms.create(1500, 200, 'desertPlatform2');
    ledge.body.immovable = true;

    // Player settings
    player = game.add.sprite(0, 0, 'blueChicken');

    //  Player physics
    game.physics.arcade.enable(player);

    // turn off the player collision with the bottom of the world
    game.physics.arcade.checkCollision.down = false;

    //  Player physics properties, bounce
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;
		player.body.outOfBoundsKill = true;

    //  Walking left and right.
    player.animations.add('left', [11, 6, 7], 10, true);
    player.animations.add('right', [0, 4, 5], 10, true);

    //  Create stars
    stars = game.add.group();

    // Enable physics for stars
    stars.enableBody = true;

    //  Create 12 of them evenly spaced apart
    for (var i = 0; i < 15; i++)
    {
        //  Create a star inside of the 'stars' group
        var star = stars.create(i * 150, 0, 'star');

        //  Star gravity
        star.body.gravity.y = 300;

        //  Star bounce
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
    }

		// Make the world bigger (maybe tweak this when your level grows)
		game.world.resize(6000, 600)

    // Text style variable for multiple use
    textStyle = { font: '32px Arial', fill: 'white' };

    //  The score
    scoreText = game.add.text(16, 16, 'Score: 0', textStyle);

		// Score text fixed to camera
		scoreText.fixedToCamera = true;
    scoreText.cameraOffset.setTo(10, 20);

    livesText = game.add.text(game.world.width-5, 5, 'Lives: '+lives, textStyle);
    livesText.anchor.set(1,0);

    // Lives text fixed to camera
		livesText.fixedToCamera = true;
    livesText.cameraOffset.setTo(285, 20);

			//registration point for camera ??
		 player.anchor.setTo(4.5, 2);
		 game.camera.follow(player, 200, 1, 1);


		 //  Our controls.
     cursors = game.input.keyboard.createCursorKeys();

			// Camera follow player functions
		 function lockonFollow() {
		    game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON);
		    style = 'STYLE_LOCKON';
			}

			function platformerFollow() {
			    game.camera.follow(player, Phaser.Camera.FOLLOW_PLATFORMER);
			    style = 'STYLE_PLATFORMER';
			}

			function topdownFollow() {
			    game.camera.follow(player, Phaser.Camera.FOLLOW_TOPDOWN);
			    style = 'STYLE_TOPDOWN';
			}

			function topdownTightFollow() {
			    game.camera.follow(player, Phaser.Camera.FOLLOW_TOPDOWN_TIGHT);
			    style = 'STYLE_TOPDOWN_TIGHT';
			}

			// // create spiky monsters
			// spikys = game.add.group();
      //
			// //  Enable physics for spiky monster
			// spikys.enableBody = true;
      //
			// //  create 4 evenly spaced apart
			// for (var i = 0; i < 5; i++)
			// {
			// 		//  Create a spiky monster inside of the 'spiky' group
			// 		var spiky = spikys.create(i * 600, 0, 'spiky');
      //
			// 		// //  Spiky gravity
	    //     spiky.body.gravity.y = 300;
			// }

      // Create the locker
      locks = game.add.group();
      locks.enableBody = true;
      var lock = locks.create(1920, 130, 'lock2')
      lock.anchor.set(0, 0.3);
      this.game.physics.enable(locks);
      lock.body.allowGravity = false;

      // Create the key
      keys = game.add.group();
      keys.enableBody = true;
      var key = keys.create(800, 50, 'key2')
      key.anchor.set(0.5, 0.5);
      this.game.physics.enable(key);
      key.body.allowGravity = false;

      // Check if player has key
      this.hasKey = false;


},


update: function () {

    //  Collide the player and the stars with the platforms
    var hitPlatform = game.physics.arcade.collide(player, platforms);
    game.physics.arcade.collide(stars, platforms);

    //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
    game.physics.arcade.overlap(player, stars, this.collectStar, null, this);

    //  Collide the player and the key with the platforms
    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.collide(keys, platforms);

    //  Checks to see if the player overlaps with the key, if he does call the collectKey function
    game.physics.arcade.collide(player, keys, this.collectKey, null, this);

		// //  Collide the player and the spiky monster
		// game.physics.arcade.collide(player, ground);
    // game.physics.arcade.collide(player, platforms);
		// game.physics.arcade.collide(spikys, ground);
    // game.physics.arcade.collide(spikys, platforms);
    //
		// //  Checks to see if the player collide with any of the spiky monsters, if he does call the gameOver function
		// game.physics.arcade.collide(player, spikys, this.gameOver, null, this);

    if (player.body.position.y > game.world.height) {
        this.gameOver(player, null);
    }

     // Collide the player and the lock
    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.collide(locks, platforms);


    // Checks to see if the player collide with the lock, has the key and if he does call the win function
    if (this.hasKey && player.body.touching.down && hitPlatform) {
      game.physics.arcade.overlap(player, locks, this.win, null, this);
    } else {

    }


    //  Reset the players velocity (movement)
    player.body.velocity.x = 0;

    if (cursors.left.isDown)
    {
        //  Move to the left
        player.body.velocity.x = -150;
        player.animations.play('left');

				// Camera left move
				game.camera.x -= 4;
				player.angle = -15;
				player.x -= speed;


    }
    else if (cursors.right.isDown)
    {
        //  Move to the right
        player.body.velocity.x = 150;
        player.animations.play('right');

				// Camera right move
				game.camera.x += 4;
				player.angle = 15;
				player.x += speed;

    }
    else
    {
        //  Stand still
        player.animations.stop();
        player.frame = 4;

				// camera stops if standing still
        player.angle = 0;

    }

    //  Allow the player to jump if they are touching the ground.
		if (cursors.up.isDown && player.body.touching.down && hitPlatform)
    {
        // var jump = game.add.audio('jump');
        // jump.play();

				// Jump
        player.body.velocity.y = -350;

				// Camera jump move
				game.camera.y -= 4;
				player.y -= speed;


    }
		else
    {
				// camera stops if standing still
        player.angle = 0;
    }

},

collectStar: function (player, star) {

    // Removes the star from the screen
    star.kill();

    //  Update the score
    score += 10;
    scoreText.text = 'Score: ' + score;

},

collectKey: function (player, key) {

    // Remove the key
    key.kill();

    // The player now has the key
    this.hasKey = true;

    // Create key icon when player has collected key
    if (this.hasKey = true) {

      keyIcons = game.add.group();
      var keyIcon = keyIcons.create(330, 40, 'key2');
      keyIcon.anchor.set(0, 0.5);

      keyIcon.fixedToCamera = true;
      keyIcon.cameraOffset.setTo(300, 40);
    } else {

    }
},

win: function (player, lock) {

  // Mute sound
  game.sound.mute = true;

  // Run the win state
  game.state.start('win');
},

gameOver: function (player, spiky) {

    // Removes the player from the screen
    player.kill()

    // Deducting lives
    lives--;

    if (lives) {
        livesText.setText('Lives: '+lives);
        player.reset(32, game.world.height - 300);

      }  else {

        // Reset the score and lives
        lives = 3;
        score = 0;

        // Mute sound
        game.sound.mute = true;

        // Run the game over state
        game.state.start('gameOver');
      }
}


};
