export class VelocityModel extends Phaser.Events.EventEmitter {
    private _velocity: number = 1;
    private timer = null;
    private timer2 = null;

    constructor() {
        super();
    }

    onChange() {
        this.emit("velocityChange", this._velocity.toFixed(1))
    }

    increaseVelocity() {
        if (this._velocity >= 11) return;
        if (!this.timer2) {
            this.increase();
        }
        if (!this.timer) {
            this.decreaseVelocity();
        }
    }

    increase() {
        let time = 0;
        setInterval(() => {
            this.onChange();
            if (time === 2) {
                clearInterval(this.timer2);
                this.timer2 = null;
                return
            }
            if (this._velocity + 0.1 > 11) {
                clearInterval(this.timer2);
                this.timer2 = null;
                return
            }
            this._velocity += 0.1;
            time++;
        }, 150)
    }

    decreaseVelocity() {
        this.timer = setInterval(() => {
            this.onChange();
            if (this._velocity === 1) {
                clearInterval(this.timer);
                this.timer = null;
                return
            }
            this._velocity = Number.parseFloat((this._velocity - 0.1).toFixed(1));
            console.log(this._velocity)
        }, 250)
    }

}