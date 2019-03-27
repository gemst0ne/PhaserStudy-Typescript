import "phaser";
import { MainScene } from "./scenes/mainScene";

// main game configuration
const config: GameConfig = {
  width: 800,
  height: 600,
  type: Phaser.AUTO,
  parent: "game",
  scene: MainScene,
  backgroundColor: 0x664DE4,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 }
    }
  },
  input: {
  mouse: true
  }

};

// game class
export class AirPlaneGame extends Phaser.Game {
  constructor(config: GameConfig) {
    super(config);
  }

  static create(args:any){
    return new AirPlaneGame(args);
  }
}

// when the page is loaded, create our game instance
window.addEventListener("load", () => {
    AirPlaneGame.create(config);
});
