export class Bigbrick extends Phaser.GameObjects.Sprite {
    constructor(args: any) {
        super(args.scene, args.x, args.y, args.texture);
        this.scene.add.existing(this);
    }
}