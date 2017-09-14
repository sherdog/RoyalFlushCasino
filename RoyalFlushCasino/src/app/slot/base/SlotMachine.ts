module dynomike.RoyalFlush {
    export class SlotMachine extends PIXI.Container {

        protected _state: string = "StateIdle";
        protected slotMachineBackground: PIXI.Sprite;
        protected _spinButton: dynomike.RoyalFlush.Button;
        protected reelContainer: PIXI.Container;

        protected reel1SymbolArray: Array<dynomike.RoyalFlush.SlotSymbol>;
        protected reel2SymbolArray: Array<dynomike.RoyalFlush.SlotSymbol>;
        protected reel3SymbolArray: Array<dynomike.RoyalFlush.SlotSymbol>;

        protected reel1: dynomike.RoyalFlush.SlotReel;
        protected reel2: dynomike.RoyalFlush.SlotReel;
        protected reel3: dynomike.RoyalFlush.SlotReel;

        protected TILE_WIDTH = 100
        protected TILE_HEIGHT = this.TILE_WIDTH;

        protected STATE_SPINNING = "SlotSpinning";
        protected STATE_IDLE = "SlotIdle";
        protected STATE_VALIDATING_SPIN = "SlotValidatingSpin";

        protected reelArray = [];

        constructor() {
            super();
            this.initialize();
        }

        protected initialize() {
            //override in concretes

            this.onSlotReady();
        }

        protected onSlotReady() {
            var preChoosedPosition = this.getRandomPositions();
            for (var i = 0; i < this.reelArray.length; i++) {
                var finishPos = (-preChoosedPosition[i] * this.TILE_HEIGHT);
            }

           // this.draw();
        }

        protected draw() {
            if (this._state === this.STATE_SPINNING) {
                for (var i = 0; i < this.reelArray.length; i++)
                {
                    this.reelArray[i].update(10);
                }
            } else if (this._state === this.STATE_IDLE) {
                
            } else if (this._state === this.STATE_VALIDATING_SPIN) {

            }
        }

        protected getRandomPositions() {
            var x = this.getRandomInt(0, 100);

            if (x > 50) {
                x = this.getRandomInt(0, 6);
                return [x, x, x];
            }

            return [this.getRandomInt(-1, 6), this.getRandomInt(0, 6), this.getRandomInt(-1, 6)];
        }

        private getRandomInt(min: number, max: number) {
            var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            return randomNumber;
        }
    }
}