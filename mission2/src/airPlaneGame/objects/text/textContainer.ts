import {StatusText} from "./statusText";

interface ItextArray extends Array<StatusText> {}

export class TextContainer extends Phaser.GameObjects.Container {
    private dynamicText: StatusText;
    private staticText: StatusText;
    private childrenArray: ItextArray;

    constructor(scene: Phaser.Scene, x: number = 0, y: number = 0) {
        super(scene,x,y);
        this.scene.add.existing(this);
        this.createChildren();
        this.addChildren();
    }

    createChildren(){
        this.staticText = StatusText.create({scene: this.scene, x: 10, y: 10, content: "Max : 11, Min : 1", style: {}});
        this.dynamicText = StatusText.create({scene: this.scene, x: 10, y: 30, content: "speed : 1", style: {}});
        this.childrenArray = [this.dynamicText, this.staticText];
    }

    addChildren(){
        this.add(this.childrenArray);
    }

    getDynamicText(): StatusText {
        return this.dynamicText;
    }

    static create(scene: Phaser.Scene) {
        return new TextContainer(scene)
    }
}