module dynomike.RoyalFlush {
    export class TripleDiamondReelStrip extends PIXI.Container {

        private SYMBOL_SPACING: number = 25;
        private _symbols = []; //Array passed in of all symbols
        private _reelSymbolStopPositions = []; //Array of stop positions id => position

        constructor() {
            super();
        }

        public createStrip(symbols: Array<number> = []): Array<dynomike.RoyalFlush.SlotSymbol> {

            var spriteArray = [];
            spriteArray[1] = 'assets/img/tripleDiamonSlot_SingleBar.png';
            spriteArray[2] = 'assets/img/tripleDiamonSlot_DoubleBar.png';
            spriteArray[3] = 'assets/img/tripleDiamonSlot_TripleBar.png';
            spriteArray[4] = 'assets/img/tripleDiamonSlot_RedSeven.png';
            spriteArray[5] = 'assets/img/tripleDiamonSlot_TripleDiamond.png';

            var returnArray: Array<dynomike.RoyalFlush.SlotSymbol> = [];

            symbols = this.shuffle(symbols);

            for (var i = 0; i < symbols.length; i++) {
                var img = spriteArray[symbols[i]];
                let spr = PIXI.Sprite.fromImage(img);
                var tmpSym: dynomike.RoyalFlush.SlotSymbol = new dynomike.RoyalFlush.SlotSymbol(spr, symbols[i], i);
                tmpSym.pivot.set(tmpSym.width / 2, tmpSym.height / 2);
                returnArray.push(tmpSym);
            }

            return returnArray;
        }


        //Returns object with id =>, position;
        public getStripStopPoints(): Array<object> {
            return [];
        }


        //tihis 
        public getSymbolAt(positionNumber: number) {

        }

        public animateSymbol(id: number): void {

            for (var i = 0; i < this._symbols.length; i++) {
                if ((this._symbols[i] as dynomike.RoyalFlush.SlotSymbol).symbolID === id) {
                    (this._symbols[i] as dynomike.RoyalFlush.SlotSymbol).playAnimation();
                }
            }
        }

        private shuffle(array) {
            var currentIndex = array.length, temporaryValue, randomIndex;

            while (0 !== currentIndex) {

                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }

            return array;
        }

    }
}