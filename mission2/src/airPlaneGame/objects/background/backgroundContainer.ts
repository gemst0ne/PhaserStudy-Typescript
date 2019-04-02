import {BrickSprite} from "./parts/brickSprite";

interface IbrickSpriteConfigArray extends Array<BrickSprite> {}

export class BackgroundContainer extends Phaser.GameObjects.Container {
    private config: any;
    private childrenArray: IbrickSpriteConfigArray;

    constructor(scene: Phaser.Scene, x: number = 0, y: number = 0) {
        super(scene, x, y);
        this.scene.add.existing(this);
        this.createChildren();
        this.addChildren();
        this.setTweens();
    }

    public setConfig(velocity: string) {
        this.config.duration = (5000) / Number.parseFloat(velocity);
    }

    private createChildren() {
        this.childrenArray = [
            BrickSprite.create({scene: this.scene, x: 800, y: 250, texture: "smallBrick"}),
            BrickSprite.create({scene: this.scene, x: 1000 + 800, y: 250, texture: "smallBrick"}),
            BrickSprite.create({scene: this.scene, x: 90, y: 400, texture: "bigBrick"}),
            BrickSprite.create({scene: this.scene, x: 1000 + 90, y: 400, texture: "bigBrick"}),
            BrickSprite.create({scene: this.scene, x: 600, y: 583, texture: "bottomBrick"}),
            BrickSprite.create({scene: this.scene, x: 1000 + 600, y: 583, texture: "bottomBrick"})
        ];
    }

    private addChildren() {
        this.add(this.childrenArray);
    }

    private setTweens(){
        this.config = {target: this, ease: 'Linear', duration: 3000, loop: -1, tweens: [{targets: this, x: -1000}]};
        this.scene.tweens.timeline(this.config);
    }


    static create(scene:Phaser.Scene) {
        return new BackgroundContainer(scene)
    }
}