import Phaser from "phaser";

class GameScene extends Phaser.Scene {
  /**
   * Load any assets you might need here!
   */
  preload() {
    this.load.image("player", "assets/player.png");

    this.load.image("wallHorizontal", "assets/wallHorizontal.png");
    this.load.image("wallVertical", "assets/wallVertical.png");

    this.load.image("coin", "assets/coin.png");
  }

  /**
   * Called once. Create any objects you need here!
   */
  create() {
    // TODO 1.1: create the player

    // TODO 1.2: add gravity to make the player fall

    // TODO 1.3: add arrow keys

    // TODO 4.1: create the walls

    // TODO 4.2: make the player collide with walls

    // TODO 6.1: create the coin

    // TODO 6.2: initialize a score counter
  }

  /**
   * Creates the walls of the game
   */
  createWalls() {
    // TODO 5: add walls
  }

  /**
   * Phaser calls this function once a frame (60 times a second).
   *
   * Use this function to move the player in response to actions,
   * check for win conditions, etc.
   */
  update() {
    // TODO 2: implement update game state 
  }

  /**
   * Handles moving the player with the arrow keys
   */
  movePlayer() {
    // TODO 3.1: move the player left or right
    // TODO 3.2: jump the player
  }

  /**
   * Check to see whether the player has collided with any coins
   */
  checkCoinCollisions() {
    // TODO 7: check for coin collision and update state accordingly
  }

  /**
   * Move the coin to a different random location
   */
  moveCoin() {
    // TODO 8: move coin when picked up
  }
}

const config = {
  type: Phaser.AUTO,
  width: 500,
  height: 340,
  scene: GameScene,
  physics: {
    default: "arcade",
  },
  backgroundColor: '#3498db',
};

const game = new Phaser.Game(config);

// Ignore this for now!! You'll use this for the createWalls() function.

/*
this.walls.create(10, 170, "wallVertical"); // Left
this.walls.create(490, 170, "wallVertical"); // Right

this.walls.create(50, 10, "wallHorizontal"); // Top left
this.walls.create(450, 10, "wallHorizontal"); // Top right
this.walls.create(50, 330, "wallHorizontal"); // Bottom left
this.walls.create(450, 330, "wallHorizontal"); // Bottom right

this.walls.create(0, 170, "wallHorizontal"); // Middle left
this.walls.create(500, 170, "wallHorizontal"); // Middle right
this.walls.create(250, 90, "wallHorizontal"); // Middle top
this.walls.create(250, 250, "wallHorizontal"); // Middle bottom
*/
