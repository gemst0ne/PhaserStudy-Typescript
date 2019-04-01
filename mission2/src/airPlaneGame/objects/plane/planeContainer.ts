import {PlaneBodyImage} from "./parts/planeBodyImage";
import {PlaneLightImage} from "./parts/planeLightImage";

export class PlaneContainer extends Phaser.GameObjects.Container {
    constructor(args: any) {
        super(args.scene, args.x, args.y);
        this.scene.add.existing(this);
        this.addChildren();
    }


    addChildren(){
        this.add([
            PlaneLightImage.create({scene: this.scene, x: 450, y: 300, texture: "planeLight"}),
            PlaneBodyImage.create({scene: this.scene, x: 400, y: 300, texture: "planeBody"})
        ]);
    }

    static create(args: any) {
        return new PlaneContainer(args)
    }
}