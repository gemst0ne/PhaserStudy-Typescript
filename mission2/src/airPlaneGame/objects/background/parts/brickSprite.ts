type ISpriteArgType = {
    scene: Phaser.Scene;
    x: number;
    y: number;
    texture: string
}

export namespace parts {
    export class BrickSprite extends Phaser.GameObjects.Sprite {
        constructor(args: ISpriteArgType) {
            super(args.scene, args.x, args.y, args.texture);
            this.scene.add.existing(this);
        }

        static create(args: ISpriteArgType) {
            return new BrickSprite(args)
        }
    }
}