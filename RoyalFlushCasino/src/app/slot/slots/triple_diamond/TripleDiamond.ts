///<reference path="../../../../lib/pixi.d.ts" />
///<reference path="TripleDiamondReelStrip.ts" />

module dynomike.RoyalFlush {
    export class TripleDiamond extends dynomike.RoyalFlush.SlotMachine {

        protected TILE_WIDTH = 165
        protected TILE_HEIGHT = 165

        protected _reelStrip: dynomike.RoyalFlush.TripleDiamondReelStrip;

        protected _reel1Symbols = [];
        protected _reel2Symbols = [];
        protected _reel3Symbols = [];

        private _prngMinRange: number = 1;
        private _prngMaxRange: number = 1000000000;

        protected _reelPositions: Array<number> = [0, 220, 440];

        constructor() {
            super();
        }

        protected initialize() {

            this._reel1Symbols = [1, 2, 1, 4, 2, 3, 5, 1, 2, 3, 2, 3, 4, 5, 4, 3, 2, 3, 4, 5];
            this._reel2Symbols = [2, 1, 2, 2, 3, 2, 1, 4, 2, 1, 3, 5, 1, 2, 3, 4, 3, 4, 3, 2];
            this._reel3Symbols = [1, 3, 2, 1, 2, 1, 3, 1, 2, 4, 1, 5, 2, 5, 1, 2, 2, 4, 2, 1];

            this._reelStrip = new dynomike.RoyalFlush.TripleDiamondReelStrip();

            this.slotMachineBackground = PIXI.Sprite.fromImage("assets/img/tripleDiamonSlotMachine.png");

            this.slotMachineBackground.pivot.x = this.slotMachineBackground.width / 2;
            this.slotMachineBackground.pivot.y = this.slotMachineBackground.height / 2;

            this.slotMachineBackground.position.x = 100;
            this.slotMachineBackground.position.y = 100;
            this.addChild(this.slotMachineBackground);

            this.reel1SymbolArray = this._reelStrip.createStrip(this._reel1Symbols);
            this.reel2SymbolArray = this._reelStrip.createStrip(this._reel2Symbols);
            this.reel3SymbolArray = this._reelStrip.createStrip(this._reel3Symbols);

            this.reel1 = new dynomike.RoyalFlush.SlotReel(this.reel1SymbolArray);
            this.reel2 = new dynomike.RoyalFlush.SlotReel(this.reel2SymbolArray);
            this.reel3 = new dynomike.RoyalFlush.SlotReel(this.reel3SymbolArray);

            this.reelArray = [this.reel1, this.reel2, this.reel3];

            this.addChild(this.reel1);
            this.addChild(this.reel2);
            this.addChild(this.reel3);

            this.reel1.position.set(165, 175);
            this.reel2.position.set(385, 175);
            this.reel3.position.set(605, 175);

           // this.reelContainer.position.x = 165;
           // this.reelContainer.position.y = 175;

            var buttonOutTexture = PIXI.Texture.fromImage("assets/img/btnSpin_out.png");
            var buttonOverTexture = PIXI.Texture.fromImage("assets/img/btnSpin_over.png");

            this._spinButton = new dynomike.RoyalFlush.Button(buttonOutTexture, buttonOverTexture, this.onSpinClickHandler);
            this.addChild(this._spinButton);
            this._spinButton.position.x = 430;
            this._spinButton.position.y = 600;
            this._spinButton.on("pointerdown", this.onSpinClickHandler.bind(this));

            super.initialize();
        }

        protected onSpinClickHandler(event) {

            if (this._state === this.STATE_IDLE)
            {
                this._state = this.STATE_SPINNING;

                for (var i = 0; i < this.reelArray.length; i++) {
                    (this.reelArray[i] as dynomike.RoyalFlush.SlotReel).spin();
                }

                TweenMax.delayedCall(1.0, this.onTimerEnd.bind(this));

            } else {
                TweenMax.killDelayedCallsTo(this.onTimerEnd.bind(this));
                this._state = this.STATE_IDLE;

                for (var i = 0; i < this.reelArray.length; i++) {
                    var reelLen: number = (this.reelArray[i] as dynomike.RoyalFlush.SlotReel).stopCount;
                    var randomValue = this.rand(this._prngMinRange, this._prngMaxRange);
                    var winningIndex = randomValue % reelLen;
                    TweenMax.delayedCall((0.5 * i), this.stopReel.bind(this), [i, winningIndex]);
                }
            }
        }

        private onTimerEnd(): void {
            for (var i = 0; i < this.reelArray.length; i++) {
                var reelLen: number = (this.reelArray[i] as dynomike.RoyalFlush.SlotReel).stopCount;
                var randomValue = this.rand(this._prngMinRange, this._prngMaxRange);
                var winningIndex = randomValue % reelLen;
                TweenMax.delayedCall((0.5 * i), this.stopReel.bind(this), [i, winningIndex]);
            }
        }

        protected stopReel(reelIndex, winningIndex) {
            (this.reelArray[reelIndex] as dynomike.RoyalFlush.SlotReel).stop(winningIndex);
        }

        private rand(min: number, max: number) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
}