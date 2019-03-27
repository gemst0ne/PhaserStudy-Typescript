import {parts} from "./parts/brickSprite";
import BrickSprite = parts.BrickSprite;

interface IContainerArgType {
    scene: Phaser.Scene,
    x: number,
    y: number,
    children?: Phaser.GameObjects.Sprite [] // union type array 수정필요
}


export class BackgroundContainer extends Phaser.GameObjects.Container {
    constructor(args: IContainerArgType) {
        super(args.scene, args.x, args.y, args.children);
        let childrenSprite =[
            BrickSprite.create({scene: this.scene, x: 800, y:250, texture: "smallBrick"}),
            BrickSprite.create({scene: this.scene, x: 1000+800, y:250, texture: "smallBrick"}),
            BrickSprite.create({scene: this.scene, x: 90, y:400, texture: "bigBrick"}),
            BrickSprite.create({scene: this.scene, x: 1000+90, y:400, texture: "bigBrick"}),
            BrickSprite.create({scene: this.scene, x: 600, y:583, texture: "bottomBrick"}),
            BrickSprite.create({scene: this.scene, x: 1000+600, y:583, texture: "bottomBrick"})
        ];
        this.add(childrenSprite);
        this.scene.add.existing(this);
        let config = {target:this, ease:'Linear', duration: 3000, loop: -1, tweens: [{targets: this, x: -1000}] };
        this.scene.tweens.timeline(config);
    }



    static create(args: IContainerArgType) {
        return new BackgroundContainer(args)
    }
}