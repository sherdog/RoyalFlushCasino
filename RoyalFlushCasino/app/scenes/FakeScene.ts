///<reference path="../Scene.class.ts" />
///<reference path="../../lib/pixi.d.ts" />

module dynomike.RoyalFlush {
    export class FakeScene extends Scene {

        public symbol_1: PIXI.Sprite;

        constructor() {
            super();
            console.log("FakeScene constructor called");

            this.symbol_1 = PIXI.Sprite.fromImage("assets/img/symbol_2.png");
            this.symbol_1.position.x = 100;
            this.symbol_1.position.y = 100;
            this.addChild(this.symbol_1);

        }

        public update() {
            super.update();
            this.symbol_1.rotation += 0.1;
        }
    }
}