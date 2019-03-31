import {BatterySprite} from "../objects/battery/batterySprite";
import {BackgroundContainer} from "../objects/background/backgroundContainer";
import {PlaneContainer} from "../objects/plane/planeContainer";
import {StatusText} from "../objects/text/statusText";
import {TextContainer} from "../objects/text/textContainer";
import {VelocityModel} from "../model/velocityModel";

export class MainScene extends Phaser.Scene {
    private backGround: BackgroundContainer;
    private battery: BatterySprite;
    private text: StatusText;
    private container: TextContainer;
    private model;

    constructor() {
        super({
            key: "MainScene"
        });
    }

    init(): void {
        this.setBackGroundColor();
    }

    preload(): void {
        this.loadSpriteSheet();
        this.loadImage();
    }

    create(): void {
        this.createBackGroundContainer();
        this.createBatterySprite();
        this.createPlaneContainer();
        this.createTextContainer();
        this.createVelocityModel();
        this.attachEvent();
    }

    private setBackGroundColor(): void {
        this.cameras.main.setBackgroundColor(0x664DE4);
    }

    private loadSpriteSheet(): void {
        this.load.spritesheet('level', 'assets/level.png', {frameWidth: 86, frameHeight: 44});
    }

    private loadImage(): void {
        this.load.image('bottomBrick', 'assets/bg02_bottom_brick.png');
        this.load.image('bigBrick', 'assets/bg02_big_brick.png');
        this.load.image('smallBrick', 'assets/bg02_small_brick.png');
        this.load.image('planeBody', 'assets/bg02_plane.png');
        this.load.image('planeLight', 'assets/bg02_plane_light.png');
    }

    private createTextContainer(): void {
        this.container = TextContainer.create({scene: this, x: 0, y: 0, children: []});
        this.text = this.container.getDynamicText();
    }

    private createVelocityModel(): void {
        this.model = new VelocityModel();
    }

    private createBatterySprite(): void {
        this.battery = BatterySprite.create({scene: this, x: 750, y: 100, texture: "level"});
    }

    private createPlaneContainer(): void {
        PlaneContainer.create({scene: this, x: 0, y: 0, children: []});
    }

    private createBackGroundContainer(): void {
        this.backGround = BackgroundContainer.create({scene: this, x: 0, y: 0, children: []});
    }

    private attachEvent(): void {
        this.input.on('pointerdown', this.onPointerDown, this);
        this.model.on("velocityChange", (speed) => {
            this.text.setText(`speed : ${speed}`);
            this.backGround.setConfig(speed);
            this.battery.setFrame((Math.floor(Number.parseFloat(speed) / 1.57) - 1) > 0 ? Math.floor(Number.parseFloat(speed) / 1.57) - 1 : 0);
        })
    }

    public onPointerDown(): void {
        this.model.increaseVelocity();
    }
}
