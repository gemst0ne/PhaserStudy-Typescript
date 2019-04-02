import {PlaneBodyImage} from "./parts/planeBodyImage";
import {PlaneLightImage} from "./parts/planeLightImage";

interface IplanePartsArray extends Array<PlaneLightImage | PlaneBodyImage> {}

export class PlaneContainer extends Phaser.GameObjects.Container {
    private childrenArray : IplanePartsArray;

    constructor(scene: Phaser.Scene, x: number = 0, y: number = 0) {
        super(scene, x, y);
        this.scene.add.existing(this);
        this.createChildren();
        this.addChildren();
    }

    private createChildren() {
        this.childrenArray = [
            PlaneLightImage.create({scene: this.scene, x: 450, y: 300, texture: "planeLight"}),
            PlaneBodyImage.create({scene: this.scene, x: 400, y: 300, texture: "planeBody"})
        ]
    }

    private addChildren() {
        this.add(this.childrenArray);
    }

    static create(scene: Phaser.Scene) {
        return new PlaneContainer(scene)
    }
}