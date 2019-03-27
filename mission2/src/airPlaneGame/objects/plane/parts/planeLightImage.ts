export class PlaneLightImage extends Phaser.GameObjects.Image {
    constructor(args: any) {
        super(args.scene, args.x, args.y, args.texture);
        this.scene.add.existing(this);
    }

    static create(args: any) {
        return new PlaneLightImage(args)
    }
}