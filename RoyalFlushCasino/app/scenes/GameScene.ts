///<reference path="../Scene.class.ts" />
///<reference path="../../lib/pixi.d.ts" />
///<reference path="../SlotReel.class.ts" />

module dynomike.RoyalFlush {
    export class GameScene extends Scene {

        public symbol_1: PIXI.Sprite;
        private reel1: dynomike.RoyalFlush.SlotReel;

        constructor(app: PIXI.Application) {
            super(app);

            var loader = PIXI.loader;
            loader
                .add('slotBackground', 'assets/img/tripleDiamonSlotMachine.png')
                .load(this.onLoadComplete);

            console.log("GameScene constructor called");
        }

        private onLoadComplete(loader, resources) {
            console.log('onLoadComplete called');

            this.symbol_1 = PIXI.Sprite.fromImage("assets/img/tripleDiamonSlotMachine.png");

            console.log('machine width: ' + this.symbol_1.width);
            this.symbol_1.pivot.x = this.symbol_1.width / 2;
            this.symbol_1.pivot.y = this.symbol_1.height / 2;

            this.symbol_1.position.x = 100;
            this.symbol_1.position.y = 100;
            this.addChild(this.symbol_1);

            this.reel1 = new SlotReel();
            this.addChild(this.reel1);
        }

        public update() {
            super.update();
        }

    }
}