export class BatterySprite extends Phaser.GameObjects.Sprite {
    constructor(args: any) {
        super(args.scene, args.x, args.y, args.texture);
        this.scene.add.existing(this);
        this.setAngle(90);
        this.scene.anims.create({key: 'move', frames: this.anims.animationManager.generateFrameNames('level') ,frameRate: 7, repeat:-1});
        this.anims.load('move');
        this.anims.play('move');
    }

    static create(args: any) {
        return new BatterySprite(args)
    }
}