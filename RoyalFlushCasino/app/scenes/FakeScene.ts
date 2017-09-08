///<reference path="base/Scene.class.ts" />
///<reference path="../../lib/pixi.d.ts" />

module dynomike.RoyalFlush {
    export class FakeScene extends Scene {

        public symbol_1: PIXI.Sprite;
        public btnStart: PIXI.Sprite;

        constructor(app: PIXI.Application) {
            super(app);

            this.symbol_1 = PIXI.Sprite.fromImage("assets/img/tripleDiamonSlot_TripleDiamond.png");
            this.symbol_1.position.x = 100;
            this.symbol_1.position.y = 100;
            this.symbol_1.pivot.x = this.symbol_1.width / 2;
            this.symbol_1.pivot.y = this.symbol_1.height / 2;
            this.addChild(this.symbol_1);

            this.btnStart = PIXI.Sprite.fromImage("assets/img/btnBlue.png");
            this.addChild(this.btnStart);
            this.btnStart.pivot.x = this.btnStart.width / 2;
            this.btnStart.pivot.y = this.btnStart.width / 2;

            this.btnStart.interactive = true;
            this.btnStart.buttonMode = true;
            this.btnStart.pivot.set(this.btnStart.width / 2, this.btnStart.height / 2);

            this.btnStart
                        .on('pointerdown', this.onStartTapHandler)
                        .on('pointerover', this.onStartOverHandler)
                        .on('pointerout', this.onStartOutHandler);

            this.btnStart.position.x = (this._app.renderer.width / 2);
            this.btnStart.position.y = 500;
        }

        private onStartOutHandler(event) {
            console.log('Out handler called');
            (event.currentTarget as PIXI.Sprite).scale.y = 1;
            (event.currentTarget as PIXI.Sprite).scale.x = 1;
        }

        private onStartOverHandler(event) {
            (event.currentTarget as PIXI.Sprite).scale.x = 1.1;
            (event.currentTarget as PIXI.Sprite).scale.y = 1.1;
        }

        private onStartTapHandler(event) {
            dispatchEvent(new Event("onStartClicked"));
        }

        public update() {
            super.update();
            //this.symbol_1.rotation += 0.1;
        }
    }
}