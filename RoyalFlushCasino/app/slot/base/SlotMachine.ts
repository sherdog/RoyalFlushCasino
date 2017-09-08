module dynomike.RoyalFlush {
    export class SlotMachine extends PIXI.Container {

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
            //override in concretes
            console.log('SlotMachine initialize called');
        }
    }
}