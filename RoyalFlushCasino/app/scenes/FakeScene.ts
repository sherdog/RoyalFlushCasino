///<reference path="../Scene.class.ts" />
///<reference path="../../lib/pixi.d.ts" />

module dynomike.RoyalFlush {
    export class FakeScene extends Scene {

        public symbol_1: PIXI.Sprite;
        public btnStart: PIXI.Sprite;

        private BUTTON_SCALE: number = 0.3;

        constructor(app: PIXI.Application) {
            super(app);
            console.log("FakeScene constructor called");

            this.symbol_1 = PIXI.Sprite.fromImage("assets/img/symbol_2.png");
            this.symbol_1.position.x = 100;
            this.symbol_1.position.y = 100;
            this.addChild(this.symbol_1);

            this.btnStart = PIXI.Sprite.fromImage("assets/img/btnBlue.png");
            this.addChild(this.btnStart);
            this.btnStart.pivot.x = this.btnStart.width / 2;
            this.btnStart.pivot.y = this.btnStart.width / 2;
            this.btnStart.scale.x = this.BUTTON_SCALE;
            this.btnStart.scale.y = this.BUTTON_SCALE;

            this.btnStart.interactive = true;
            this.btnStart.buttonMode = true;
            this.btnStart.on('pointerdown', this.onStartTapHandler);

            this.btnStart.position.x = (this._app.renderer.width / 2);
            this.btnStart.position.y = 500;

            console.log('Button width: ' + this.btnStart.width + ' with scale: ' + (this.btnStart.width * this.BUTTON_SCALE))
        }

        private onStartTapHandler(event) {
            dispatchEvent(new Event("onStartClicked"));
        }

        public update() {
            super.update();
        }
    }
}