import {Level} from "../objects/level";
import {Background} from "../objects/background/background";
import {Plane} from "../objects/plane/plane";


export class MainScene extends Phaser.Scene {
  private levelObject:Phaser.GameObjects.Sprite;
  private backGround:Phaser.GameObjects.Group;
  constructor() {
    super({
      key: "MainScene"
    });
  }

  init(): void {
  // this.backGround
  }

  preload(): void {
    this.load.spritesheet('level','assets/level.png', {frameWidth: 86, frameHeight:44})
    this.load.image('bottomBrick', 'assets/bg02_bottom_brick.png');
    this.load.image('bigBrick', 'assets/bg02_big_brick.png');
    this.load.image('smallBrick', 'assets/bg02_small_brick.png');
    this.load.image('planeBody', 'assets/bg02_plane.png');
    this.load.image('planeLight', 'assets/bg02_plane_light.png');
  }

  create(): void {
      this.levelObject = new Level({scene: this, x: 750, y:100, texture: "level"});
      new Background({scene: this, x: 0, y:0, children: []});
      new Plane({scene: this, x: 0, y:0, children: []})
      this.attachEvent();
  }


  private attachEvent():void {
    this.input.on('pointerdown', this.onPointerDown,this)
  }

  public onPointerDown():void {
  }
}
