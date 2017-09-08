///<reference path="../../../../lib/pixi.d.ts" />

module dynomike.RoyalFlush {
    export class TripleDiamond extends PIXI.Container {

        protected slotMachineBackground: PIXI.Sprite;
        protected _spinButton: dynomike.RoyalFlush.Button;
        protected reelContainer: PIXI.Container;
        protected reel1: dynomike.RoyalFlush.SlotReel;
        protected reel2: dynomike.RoyalFlush.SlotReel;
        protected reel3: dynomike.RoyalFlush.SlotReel;

        constructor() {
            super();
            this.initialize();
        }

        protected initialize() {

            console.log('Loading tripe dialog slot :: initialize called');

            this.reelContainer = new PIXI.Container();

            this.slotMachineBackground = PIXI.Sprite.fromImage("assets/img/tripleDiamonSlotMachine.png");

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

            var buttonOutTexture = PIXI.Texture.fromImage("assets/img/btnSpin_out.png");
            var buttonOverTexture = PIXI.Texture.fromImage("assets/img/btnSpin_over.png");

            this._spinButton = new dynomike.RoyalFlush.Button(buttonOutTexture, buttonOverTexture, this.onSpinClickHandler);
            this.addChild(this._spinButton);
            this._spinButton.on("pointerdown", this.onSpinClickHandler.bind(this));

            this._spinButton.position.x = 430;
            this._spinButton.position.y = 600;
           
        }

        protected onSpinClickHandler(event) {
            this.reel1.spin();
            this.reel2.spin();
            this.reel3.spin();
        }
    }
}