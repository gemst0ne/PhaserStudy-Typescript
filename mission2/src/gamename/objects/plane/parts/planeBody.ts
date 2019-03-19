export class PlaneBody extends Phaser.GameObjects.Image {
    constructor(args: any) {
        super(args.scene, args.x, args.y, args.texture);
        this.scene.add.existing(this);
    }
}