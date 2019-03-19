import {PlaneBody} from "./parts/planeBody";
import {PlaneLight} from "./parts/planeLight";

export class Plane extends Phaser.GameObjects.Container {
    constructor(args: any) {
        let childrenSprite =[
           new PlaneLight({scene:args.scene,x:500,y:300,texture:"planeLight"}),
           new PlaneBody({scene:args.scene,x:400,y:300,texture:"planeBody"})
        ];
        super(args.scene, args.x, args.y, args.children.concat(childrenSprite));
        this.scene.add.existing(this);
    }
}