export class BrickSprite extends Phaser.GameObjects.Sprite {
    constructor(args: any) {
        super(args.scene, args.x, args.y, args.texture);
        this.scene.add.existing(this);
    }

    static create(args: any) {
        return new BrickSprite(args)
    }
}