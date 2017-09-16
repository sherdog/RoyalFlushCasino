module dynomike.RoyalFlush {
    export class SlotMachine extends PIXI.Container {

        protected slotMachineBackground: PIXI.Sprite;
        protected _spinButton: dynomike.RoyalFlush.Button;
        protected reelContainer: PIXI.Container;

        protected reel1SymbolArray: Array<dynomike.RoyalFlush.SlotSymbol>;
        protected reel2SymbolArray: Array<dynomike.RoyalFlush.SlotSymbol>;
        protected reel3SymbolArray: Array<dynomike.RoyalFlush.SlotSymbol>;

        protected reel1: dynomike.RoyalFlush.SlotReel;
        protected reel2: dynomike.RoyalFlush.SlotReel;
        protected reel3: dynomike.RoyalFlush.SlotReel;

        protected _prngMinRange: number = 1;
        protected _prngMaxRange: number = 1000000000;
        protected _winningIndices: Array<number>;

        protected TILE_WIDTH = 100
        protected TILE_HEIGHT = this.TILE_WIDTH;

        protected STATE_SPINNING = 1;
        protected STATE_IDLE = 0;

        protected _state: number = this.STATE_IDLE;

        protected reelArray = [];

        constructor() {
            super();
            this.initialize();
        }

        protected initialize() {
            //override in concretes
            this.generateWin();
        }

        protected generateWin(): void {
            this._winningIndices = [];

            for (var i = 0; i < this.reelArray.length; i++) {
                var reelLen: number = (this.reelArray[i] as dynomike.RoyalFlush.SlotReel).stopCount;
                var randomValue = this.getRandomInt(this._prngMinRange, this._prngMaxRange);
                this._winningIndices.push(randomValue % reelLen);
            }
        }

        protected onSlotReady() {

            
        }

        protected draw() {

        }

        private getRandomInt(min: number, max: number) {
            var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            return randomNumber;
        }
    }
}