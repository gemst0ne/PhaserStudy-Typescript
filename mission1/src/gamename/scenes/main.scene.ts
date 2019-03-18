import {ClonedComponent} from "../components/cloned.component";
import {OriginalComponent} from "../components/orginal.component";
import {ButtonComponent} from "../components/button.component";

export class MainScene extends Phaser.Scene {
    private targetTexture: string = "";
    private deleteButton: Phaser.GameObjects.Image;

    constructor() {
        super({
            key: "MainScene"
        });
    }

    init(): void {
        // constructor -> init -> preload -> create : cycle 순서
    }

    preload(): void {
        this.load.image("ball", "assets/ball.png");
        this.load.image("car", "assets/car.png");
        this.load.image("duck", "assets/duck.png");
        this.load.image("plane2", "assets/plane2.png");
        this.load.image("robot1", "assets/robot1.png");
        this.load.image("button", "assets/button.png");
    }

    create(): void {
        new OriginalComponent({scene: this, x: 150, y: 100, texture: "robot1"});
        new OriginalComponent({scene: this, x: 250, y: 100, texture: "duck"});
        new OriginalComponent({scene: this, x: 350, y: 100, texture: "car"});
        new OriginalComponent({scene: this, x: 450, y: 100, texture: "plane2"});
        new OriginalComponent({scene: this, x: 550, y: 100, texture: "ball"});
        this.deleteButton = new ButtonComponent({scene: this, x: 700, y: 500, texture: "button"});
        this.attachEvents();
    }

    attachEvents(): void {
        this.input.on("pointerdown", this.onClickMouse, this);
        this.deleteButton.on("pointerdown", () => {
            this.scene.restart()
        });

    }

    onClickMouse(event, object): void {
        if (object.length === 0 && !!this.targetTexture) {
            new ClonedComponent({scene: this, x: event.downX, y: event.downY, texture: this.targetTexture})
        } else if (object.length > 0) {
            if (object[0] instanceof ButtonComponent) return;
            this.targetTexture = object[0].texture.key
        }
    }
}


