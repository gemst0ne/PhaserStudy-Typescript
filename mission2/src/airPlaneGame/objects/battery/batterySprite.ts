export class BatterySprite extends Phaser.GameObjects.Sprite {
    constructor(args: any) {
        super(args.scene, args.x, args.y, args.texture);
        this.scene.add.existing(this);
        this.setAngle(90);
    }

    static create(args: any) {
        return new BatterySprite(args)
    }
}