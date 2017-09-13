module dynomike.RoyalFlush {
    export class SlotSymbol extends PIXI.Container {

        private _symbol: PIXI.Sprite;
        private _symbolID: number = -1;
        private _active: boolean = false;

        //Lit version of the symbol when it's on the payline
        private _symbolActivated: PIXI.Sprite; 

        constructor(symbolImage: PIXI.Sprite, symbolID: number) {
            super();

            this._symbolID = symbolID;
            this._symbol = symbolImage;

            this.addChild(this._symbol);
            
        }

        protected setActive(active: boolean) {
            //play symbol. This will eventully be a spritesheet ani/multiframe
        }

        public playAnimation(): void {
            //this gets called if it's a special symbol.

        }

        set symbolID(symbolID: number) { this._symbolID = symbolID; }
        get symbolID() {  return this._symbolID; }
    }
}