export class MainScene extends Phaser.Scene {
  private phaserSprite: Phaser.GameObjects.Sprite;

  constructor() {
    super({
      key: "MainScene"
    });
  }

  preload(): void {
    this.load.image("logo", "assets/phaser.png");
  }

  create(): void {
    this.phaserSprite = this.add.sprite(400, 150, "logo");
    this.tweens.add({
        targets: this.phaserSprite,
        y: 450,
        duration: 2000,
        ease: 'Power2',
        yoyo: true,
        loop: -1
    })
  }
}
