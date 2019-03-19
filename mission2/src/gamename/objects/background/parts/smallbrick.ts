export class Smallbrick extends Phaser.GameObjects.Sprite {
    constructor(args: any) {
        console.log(args.scene)
        super(args.scene, args.x, args.y, args.texture);
        this.scene.add.existing(this);

    }
}