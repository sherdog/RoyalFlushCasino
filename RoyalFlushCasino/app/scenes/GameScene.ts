///<reference path="base/Scene.class.ts" />
///<reference path="../../lib/pixi.d.ts" />
///<reference path="../SlotReel.class.ts" />

module dynomike.RoyalFlush {
    export class GameScene extends Scene {

        public slotMachineBackground: PIXI.Sprite;
        private reel1: dynomike.RoyalFlush.SlotReel;
        private reel2: dynomike.RoyalFlush.SlotReel;
        private reel3: dynomike.RoyalFlush.SlotReel;

        private reelContainer: PIXI.Container;

        constructor(app: PIXI.Application) {
            super(app);
            this.reelContainer = new PIXI.Container();

            this.slotMachineBackground = PIXI.Sprite.fromImage("assets/img/tripleDiamonSlotMachine.png");

            console.log('machine width: ' + this.slotMachineBackground.width);

            this.slotMachineBackground.pivot.x = this.slotMachineBackground.width / 2;
            this.slotMachineBackground.pivot.y = this.slotMachineBackground.height / 2;

            this.slotMachineBackground.position.x = 100;
            this.slotMachineBackground.position.y = 100;
            this.addChild(this.slotMachineBackground);

            this.reel1 = new SlotReel();
            this.reel2 = new SlotReel();
            this.reel3 = new SlotReel();

            this.reelContainer.addChild(this.reel1);
            this.reelContainer.addChild(this.reel2);
            this.reelContainer.addChild(this.reel3);

            this.addChild(this.reelContainer);
            this.reelContainer.position.x = 165;
            this.reelContainer.position.y = 138;

            this.reel2.position.x = 220;
            this.reel3.position.x = 440;

            console.log("GameScene constructor called");
        }

        private onLoadComplete(loader, resources) {
            console.log('onLoadComplete called');

            
        }

        public update() {
            super.update();
        }

    }
}