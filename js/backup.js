// <!doctype html>
// <html lang="en">
// <head>
// 	<meta charset="UTF-8" />
//     <title>Phaser - Making your first game, part 9</title>
//     <script src="//cdn.jsdelivr.net/phaser/2.2.2/phaser.min.js"></script>
// 		<script type="text/javascript" src="js/boot.js"></script>
// 		<script type="text/javascript" src="js/load.js"></script>
// 		<script type="text/javascript" src="js/menu.js"></script>
// 		<script type="text/javascript" src="js/play.js"></script>
// 		<script type="text/javascript" src="js/win.js"></script>
// 		<script type="text/javascript" src="js/gameOver.js"></script>
// 		<script type="text/javascript" src="js/game.js"></script>
//     <style type="text/css">
//         body {
//             margin: 0;
//         }
//     </style>
// </head>
// <body>
//
// <script type="text/javascript">
//
// var game = new Phaser.Game(2000, 800, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });
//
// game.state.add('/oot, bootState');
// game.state.add('load, loadState');
// game.state.add('meny, menuState');
// game.state.add('play, playState');
// game.state.add('win, winState');
// game.state.add('gameOver, gameOverState');
//
// game.state.start('boot');
//
// var bootState = {
//
// 	function
// }
//
// function preload() {
//
//     game.load.image('background', 'assets/Full-Background.png');
// 		game.load.image('sky', 'assets/sky.png');
// 		game.load.image('mountain', 'assets/mountain.png');
//     game.load.image('ground', 'assets/platform2.png');
//     game.load.image('platform1', 'assets/platform1.png');
//     game.load.image('platform2', 'assets/platform2.png');
// 		game.load.image('platform3', 'assets/platform3.png');
// 		game.load.image('platform4', 'assets/platform4.png');
// 		game.load.image('platform5', 'assets/platform5.png');
//     game.load.image('star', 'assets/star.png');
//     game.load.image('spiky', 'assets/spiky-monster.png', 35, 40);
//     game.load.spritesheet('chicken', 'assets/chicken.png', 108, 115);
//
// }
//
// var player;
// var chicken;
// var platforms;
// var ground;
// var sky, mountain;
// var stars;
// var spiky;
// var cursors;
// var scale;
// var speed = 4;
// var style = 'default';
// var score = 0;
// var scoreText;
//
// function create() {
//
//     //  Arcade Physics system
//     game.physics.startSystem(Phaser.Physics.ARCADE);
//
// 		game.scale.scaleMode = Phaser.ScaleManager.RESIZE;
//
// 		game.world.setBounds(0, 0, 2000, 800);
//
//     //  Parallax background, sky fixed to camera
// 		var sky = game.add.image(0, 0, 'sky');
// 		sky.fixedToCamera = true;
//
// 		game.add.image(0, 0, 'mountain');
//
//     //  The platforms group contains the ground and the 2 ledges
//     platforms = game.add.group();
//
//     //  Enable physics for any object that is created in the group
//     platforms.enableBody = true;
//
//     // Create the ground.
//     var ground = platforms.create(0, game.world.height - 70, 'ground');
//
//     //  Scale it to fit the width of the game
//     ground.scale.setTo(1, 1);
//
//     //  This stops it from falling away when jumping on it
//     ground.body.immovable = true;
//
//     //  Create the two ledges
//     var ledge = platforms.create(400, 550, 'platform1');
//     ledge.body.immovable = true;
//
//     ledge = platforms.create(-150, 350, 'platform2');
//     ledge.body.immovable = true;
//
// 		ledge = platforms.create(500, 200, 'platform2');
//     ledge.body.immovable = true;
//
// 		ledge = platforms.create(1200, 550, 'platform4');
//     ledge.body.immovable = true;
//
// 		ledge = platforms.create(1400, 400, 'platform3');
//     ledge.body.immovable = true;
//
// 		ledge = platforms.create(1500, 200, 'platform2');
//     ledge.body.immovable = true;
//
//     // Player settings
//     player = game.add.sprite(32, game.world.height - 300, 'chicken');
//
//     //  Player physics
//     game.physics.arcade.enable(player);
//
//     //  Player physics properties, bounce.
//     player.body.bounce.y = 0.2;
//     player.body.gravity.y = 300;
//     player.body.collideWorldBounds = true;
// 		player.body.outOfBoundsKill = true;
//
// 		// turn off the player collision with the bottom of the world
//     game.physics.arcade.checkCollision.down = false;
//
//     //  Walking left and right.
//     player.animations.add('left', [0, 9, 10], 10, true);
//     player.animations.add('right', [0, 4, 5], 10, true);
//
//     //  Create stars
//     stars = game.add.group();
//
//     // Enable physics for stars
//     stars.enableBody = true;
//
//     //  Create 12 of them evenly spaced apart
//     for (var i = 0; i < 15; i++)
//     {
//         //  Create a star inside of the 'stars' group
//         var star = stars.create(i * 150, 0, 'star');
//
//         //  Star gravity
//         star.body.gravity.y = 300;
//
//         //  Star bounce
//         star.body.bounce.y = 0.7 + Math.random() * 0.2;
//     }
//
// 		// Make the world bigger (maybe tweak this when your level grows)
// 		game.world.resize(6000, 600)
//
//     //  The score
//     scoreText = game.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: 'white' });
//
// 		// Score text fixed to camera
// 		scoreText.fixedToCamera = true;
//     scoreText.cameraOffset.setTo(10, 20);
//
// 			//registration point for camera
// 		 player.anchor.setTo(5, 1);
//
// 		 game.camera.follow(player, 200, 1, 1);
//
//
// 		 //  Our controls.
//      cursors = game.input.keyboard.createCursorKeys();
//
// 			// Camera follow player functions
// 		 function lockonFollow() {
// 		    game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON);
// 		    style = 'STYLE_LOCKON';
// 			}
//
// 			function platformerFollow() {
// 			    game.camera.follow(player, Phaser.Camera.FOLLOW_PLATFORMER);
// 			    style = 'STYLE_PLATFORMER';
// 			}
//
// 			function topdownFollow() {
// 			    game.camera.follow(player, Phaser.Camera.FOLLOW_TOPDOWN);
// 			    style = 'STYLE_TOPDOWN';
// 			}
//
// 			function topdownTightFollow() {
// 			    game.camera.follow(player, Phaser.Camera.FOLLOW_TOPDOWN_TIGHT);
// 			    style = 'STYLE_TOPDOWN_TIGHT';
// 			}
//
// 			// create spiky monsters
// 			spikys = game.add.group();
//
// 			//  Enable physics for spiky monster
// 			spikys.enableBody = true;
//
// 			//  create 4 evenly spaced apart
// 			for (var i = 0; i < 5; i++)
// 			{
// 					//  Create a spiky monster inside of the 'spiky' group
// 					var spiky = spikys.create(i * 600, 0, 'spiky');
//
// 					// //  Spiky gravity
// 	        spiky.body.gravity.y = 300;
//
//
// 			}
//
// }
//
// function update() {
//
//     //  Collide the player and the stars with the platforms
//     var hitPlatform = game.physics.arcade.collide(player, platforms);
//     game.physics.arcade.collide(stars, platforms);
//
//     //  Checks to see if the player overlaps with any of the stars, if he does call the collectStar function
//     game.physics.arcade.overlap(player, stars, collectStar, null, this);
//
// 		//  Collide the player and the spiky monster
// 		game.physics.arcade.collide(player, ground);
//     game.physics.arcade.collide(player, platforms);
// 		game.physics.arcade.collide(spikys, ground);
//     game.physics.arcade.collide(spikys, platforms);
//
// 		//  Checks to see if the player collide with any of the spiky monsters, if he does call the gameOver function
// 		game.physics.arcade.collide(player, spikys, gameOver, null, this);
//
//     //  Reset the players velocity (movement)
//     player.body.velocity.x = 0;
//
//     if (cursors.left.isDown)
//     {
//         //  Move to the left
//         player.body.velocity.x = -150;
//         player.animations.play('left');
//
// 				// Camera left move
// 				game.camera.x -= 4;
// 				player.angle = -15;
// 				player.x -= speed;
//
//
//     }
//     else if (cursors.right.isDown)
//     {
//         //  Move to the right
//         player.body.velocity.x = 150;
//         player.animations.play('right');
//
// 				// Camera right move
// 				game.camera.x += 4;
// 				player.angle = 15;
// 				player.x += speed;
//
//     }
//     else
//     {
//         //  Stand still
//         player.animations.stop();
//         player.frame = 4;
//
// 				// camera stops if standing still
//         player.angle = 0;
//
//     }
//
//     //  Allow the player to jump if they are touching the ground.
// 		if (cursors.up.isDown && player.body.touching.down && hitPlatform)
//     {
// 				// Jump
//         player.body.velocity.y = -350;
//
// 				// Camera jump move
// 				game.camera.y -= 4;
// 				player.y -= speed;
//
//     }
// 		else
//     {
// 				// camera stops if standing still
//         player.angle = 0;
//     }
//
// }
//
// function collectStar (player, star) {
//
//     // Removes the star from the screen
//     star.kill();
//
//     //  Update the score
//     score += 10;
//     scoreText.text = 'Score: ' + score;
//
// }
//
// function gameOver (player, spiky) {
//
// 		// Removes the player from the screen
// 		console.log('ouch');
// 		player.kill()
//
// 		// game.state.start('Game');
// }
//
// function render() {
//
// 		// game.debug.spriteCoords(player, 32, 800)
//
// }
//
// </script>
//
// </body>
// </html>
