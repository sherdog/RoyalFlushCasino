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

        protected _reelIndex = 0;

        protected _reelPositions: Array<number> = [0, 220, 440];

        constructor() {
            super();
        }

        protected initialize() {

            this._reel1Symbols = [1, 2, 1, 4, 2, 3, 5, 1, 2, 3, 2, 3, 4, 1, 4, 3, 2, 3, 4, 1];
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

            var positionArray = [[165, 175], [385, 175], [605, 175]];

            this.reelArray = [
                new dynomike.RoyalFlush.SlotReel(this.reel1SymbolArray),
                new dynomike.RoyalFlush.SlotReel(this.reel2SymbolArray),
                new dynomike.RoyalFlush.SlotReel(this.reel3SymbolArray)
            ];

            for (var i = 0; i < this.reelArray.length; i++) {
                console.log('Adding reels ' + this.reelArray[i]);
                this.addChild(this.reelArray[i]);
                (this.reelArray[i] as dynomike.RoyalFlush.SlotReel).on(dynomike.RoyalFlush.SlotReel.EVENT_ON_REEL_STOP, this.onReelStop.bind(this));
                (this.reelArray[i] as dynomike.RoyalFlush.SlotReel).position.set(positionArray[i][0], positionArray[i][1]);
            }

           // this.reelContainer.position.x = 165;
           // this.reelContainer.position.y = 175;

            var buttonOutTeexture = PIXI.Texture.fromImage("assets/img/btnSpin_out.png");
            var buttonOverTexture = PIXI.Texture.fromImage("assets/img/btnSpin_over.png");

            this._spinButton = new dynomike.RoyalFlush.Button(buttonOutTeexture, buttonOverTexture, this.onSpinClickHandler);
            this.addChild(this._spinButton);
            this._spinButton.position.x = 430;
            this._spinButton.position.y = 600;
            this._spinButton.on("pointerdown", this.onSpinClickHandler.bind(this));

           

            super.initialize();
        }

        protected onReelStop(): void {
            if (this._reelIndex === (this.reelArray.length - 1))
            {
                this._state = this.STATE_IDLE;
                this._reelIndex = 0;
                super.generateWin();
                return;
            }

            //start the next one.
            (this.reelArray[this._reelIndex + 1] as dynomike.RoyalFlush.SlotReel).stop(this._winningIndices[this._reelIndex]);
            this._reelIndex++;
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
                //Skill Stop This Shit.
                
                /*
                TweenMax.killDelayedCallsTo(this.onTimerEnd.bind(this));
                this._state = this.STATE_IDLE;

                for (var i = 0; i < this.reelArray.length; i++) {
                    var reelLen: number = (this.reelArray[i] as dynomike.RoyalFlush.SlotReel).stopCount;
                    var randomValue = this.rand(this._prngMinRange, this._prngMaxRange);
                    var winningIndex = randomValue % reelLen;
                    TweenMax.delayedCall((0.5 * i), this.stopReel.bind(this), [i, winningIndex]);
                }
                */
            }
        }

        private onTimerEnd(): void {
            this._state = this.STATE_IDLE;
            this.stopReel(0);
            /*
            for (var i = 0; i < this.reelArray.length; i++) {
                console.log('on timer end stopping on index: ' + this._winningIndices[i]);
                TweenMax.delayedCall((0.5 * i), this.stopReel.bind(this), [i, this._winningIndices[i]]);
            }
            */
        }

        protected stopReel(reelIndex) {
            (this.reelArray[reelIndex] as dynomike.RoyalFlush.SlotReel).stop(this._winningIndices[reelIndex]);
        }

        private rand(min: number, max: number) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
}