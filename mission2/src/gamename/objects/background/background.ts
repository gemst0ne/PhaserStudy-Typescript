import {Smallbrick} from "./parts/smallbrick";
import {Bigbrick} from "./parts/bigbrick";
import {BottomBrick} from "./parts/bottomBrick";
export class Background extends Phaser.GameObjects.Container {
    constructor(args: any) {
        let childrenSprite =[
            new Smallbrick({scene: args.scene, x: 800, y:250, texture: "smallBrick"}),
            new Smallbrick({scene: args.scene, x: 1000+800, y:250, texture: "smallBrick"}),
            new Bigbrick({scene: args.scene, x: 90, y:400, texture: "bigBrick"}),
            new Bigbrick({scene: args.scene, x: 1000+90, y:400, texture: "bigBrick"}),
            new BottomBrick({scene: args.scene, x: 600, y:583, texture: "bottomBrick"}),
            new BottomBrick({scene: args.scene, x: 1000+600, y:583, texture: "bottomBrick"})
        ];
        super(args.scene, args.x, args.y, args.children.concat(childrenSprite));
        this.scene.add.existing(this);
        let config = {target:this, ease:'Linear', duration: 3000, loop: -1, tweens: [{targets: this, x: -1000}] };
        this.scene.tweens.timeline(config);
        // setInterval(()=>{
        //     config.duration+=100
        // },3000)
    }
}