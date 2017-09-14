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
           //update the input controller. and set disabled i think
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