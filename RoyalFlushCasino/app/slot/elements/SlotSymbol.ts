module dynomike.RoyalFlush {
    export class SlotSymbol extends PIXI.Container {

        private _symbol: PIXI.Sprite;

        //Lit version of the symbol when it's on the payline
        private _symbolActivated: PIXI.Sprite; 

        constructor(symbolImage: PIXI.Sprite) {
            super();

            this._symbol = symbolImage;
            this.addChild(this._symbol);
        }
    }
}