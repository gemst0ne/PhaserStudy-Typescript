export class ClonedComponent extends Phaser.GameObjects.Image {
    public degree:number;
    public scale:number;

    constructor(args: any) {
        super(args.scene, args.x, args.y, args.texture);
        this.degree = Phaser.Math.Between(0, 360);
        this.scale = Phaser.Math.FloatBetween(0.5, 1);
        this.scene.add.existing(this);
        this.setScale(this.scale);
        this.setAngle(this.degree);
    }
}