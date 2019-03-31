import {StatusText} from "./statusText";

export class TextContainer extends Phaser.GameObjects.Container {
    private dynamicText: StatusText;
    private staticText: StatusText;

    constructor(args: any) {
        super(args.scene, args.x, args.y, args.children);
        this.staticText = StatusText.create({scene: args.scene, x: 10, y: 10, content: "Max : 11, Min : 1", style: {}});
        this.dynamicText = StatusText.create({scene: args.scene, x: 10, y: 30, content: "speed : 1", style: {}});
        this.add([this.dynamicText, this.staticText]);
        this.scene.add.existing(this);

    }

    getDynamicText(): StatusText {
        return this.dynamicText;
    }

    static create(args: any) {
        return new TextContainer(args)
    }
}