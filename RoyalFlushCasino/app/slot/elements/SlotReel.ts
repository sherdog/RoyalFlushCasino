module dynomike.RoyalFlush {
    export class SlotReel extends PIXI.Container {

        private SYMBOL_HEIGHT = 165;
        private SYMBOL_WIDTH = 165;

        private symbol_1: dynomike.RoyalFlush.SlotSymbol;
        private symbol_2: dynomike.RoyalFlush.SlotSymbol;
        private symbol_3: dynomike.RoyalFlush.SlotSymbol;
        private symbol_4: dynomike.RoyalFlush.SlotSymbol;
        private symbol_5: dynomike.RoyalFlush.SlotSymbol;

        private _symbolContainer: PIXI.Container;
        private _symbolContainer2: PIXI.Container;

        private _symbolArray = [];

        constructor() {
            super();
            this.populateReel();
        } 

        private populateReel() {

            this._symbolContainer = new PIXI.Container();
            this._symbolContainer2 = new PIXI.Container();

            this.addChild(this._symbolContainer);
            this.addChild(this._symbolContainer2);

            this.symbol_1 = new dynomike.RoyalFlush.SlotSymbol(PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_DoubleBar.png'));
            this.symbol_2 = new dynomike.RoyalFlush.SlotSymbol(PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_RedSeven.png'));
            this.symbol_3 = new dynomike.RoyalFlush.SlotSymbol(PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_SingleBar.png'));
            this.symbol_4 = new dynomike.RoyalFlush.SlotSymbol(PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_TripleBar.png'));
            this.symbol_5 = new dynomike.RoyalFlush.SlotSymbol(PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_TripleDiamond.png'));

            this._symbolArray = this.shuffle([this.symbol_1, this.symbol_2, this.symbol_3, this.symbol_4, this.symbol_5]);

            var nextY: number = 0;
            var padding: number = 25;

            for (var i = 0; i < this._symbolArray.length; i++) {

                (this._symbolArray[i] as PIXI.Sprite).position.y = nextY;

                this._symbolContainer.addChild(this._symbolArray[i]);
                this._symbolContainer2.addChild(this._symbolArray[i]);

                nextY += this.SYMBOL_HEIGHT + padding;
            }
            console.log('height of symbol container ' + this._symbolContainer.height);
            this._symbolContainer.y = (-this._symbolContainer.height);
            this._symbolContainer2.position.y = this._symbolContainer.y + this._symbolContainer.height;

            var rect = new PIXI.Graphics();
            rect.beginFill(0xFF00);
            rect.lineStyle(0, 0xFF0000);
            rect.drawRect(4, 4, 165, 215);

            //this.mask = rect;
            this.addChild(rect);
            rect.y = 175;
        }


        public spin(rotations: number)
        {
            //this._symbolContainer.position.y = positionY;
            //TweenMax.to(this._symbolContainer, 0.5, { "y": positionY, easing: "easeIn" });

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

        private rand(min: number, max: number) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    }
}