import {BrickSprite} from "./parts/brickSprite";

export class BackgroundContainer extends Phaser.GameObjects.Container {
    constructor(args: any) {
        let childrenSprite =[
            BrickSprite.create({scene: args.scene, x: 800, y:250, texture: "smallBrick"}),
            BrickSprite.create({scene: args.scene, x: 1000+800, y:250, texture: "smallBrick"}),
            BrickSprite.create({scene: args.scene, x: 90, y:400, texture: "bigBrick"}),
            BrickSprite.create({scene: args.scene, x: 1000+90, y:400, texture: "bigBrick"}),
            BrickSprite.create({scene: args.scene, x: 600, y:583, texture: "bottomBrick"}),
            BrickSprite.create({scene: args.scene, x: 1000+600, y:583, texture: "bottomBrick"})
        ];
        super(args.scene, args.x, args.y, args.children.concat(childrenSprite));
        this.scene.add.existing(this);
        let config = {target:this, ease:'Linear', duration: 3000, loop: -1, tweens: [{targets: this, x: -1000}] };
        this.scene.tweens.timeline(config);
    }

    static create(args: any) {
        return new BackgroundContainer(args)
    }
}