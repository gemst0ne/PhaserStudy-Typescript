import {PlaneBodyImage} from "./parts/planeBodyImage";
import {PlaneLightImage} from "./parts/planeLightImage";

export class PlaneContainer extends Phaser.GameObjects.Container {
    constructor(args: any) {
        let childrenSprite = [
            PlaneLightImage.create({scene: args.scene, x: 450, y: 300, texture: "planeLight"}),
            PlaneBodyImage.create({scene: args.scene, x: 400, y: 300, texture: "planeBody"})
        ];
        super(args.scene, args.x, args.y, args.children.concat(childrenSprite));
        this.scene.add.existing(this);
    }

    static create(args: any) {
        return new PlaneContainer(args)
    }
}