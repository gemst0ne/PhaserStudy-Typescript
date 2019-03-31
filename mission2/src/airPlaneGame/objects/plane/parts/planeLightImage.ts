export class PlaneLightImage extends Phaser.GameObjects.Image {
    constructor(args: any) {
        super(args.scene, args.x, args.y, args.texture);
        this.scene.add.existing(this);
        this.setOrigin(0, 0.5);
        this.scene.tweens.add({
            targets: this,
            duration: 2000,
            angle: 10,
            repeat: -1,
            yoyo: true,
        });

    }

    static create(args: any) {
        return new PlaneLightImage(args)
    }

}