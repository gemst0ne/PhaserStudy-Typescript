export class StatusText extends Phaser.GameObjects.Text {
    constructor(args) {
        super(args.scene, args.x, args.y, args.content, args.style);
        this.scene.add.existing(this);

    }

    static create(args) {
        return new StatusText(args);
    }
}