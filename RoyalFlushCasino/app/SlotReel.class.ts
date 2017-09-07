///<reference path="../lib/pixi.d.ts" />
module dynomike.RoyalFlush {
    export class SlotReel extends PIXI.Container {
        private symbol_1: PIXI.Sprite;
        private symbol_2: PIXI.Sprite;
        private symbol_3: PIXI.Sprite;
        private symbol_4: PIXI.Sprite;
        private symbol_5: PIXI.Sprite;

        private symbolArray = [];

        constructor() {
            super();
            this.populateReel();
        }

        private populateReel() {
            this.symbol_1 = PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_DoubleBar.png');
            this.symbol_2 = PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_RedSeven.png');
            this.symbol_3 = PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_SingleBar.png');
            this.symbol_4 = PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_TripleBar.png');
            this.symbol_5 = PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_TripleDiamond.png');

            this.symbolArray = [this.symbol_1, this.symbol_2, this.symbol_3, this.symbol_4, this.symbol_5];
            var nextY: number = 0;
            var padding: number = 25;
            for (var i = 0; i < this.symbolArray.length; i++) {
                (this.symbolArray[i] as PIXI.Sprite).position.y = nextY;
                this.addChild(this.symbolArray[i]);

                nextY += ((this.symbolArray[i] as PIXI.Sprite).height + padding);

            }
        }
    }
}