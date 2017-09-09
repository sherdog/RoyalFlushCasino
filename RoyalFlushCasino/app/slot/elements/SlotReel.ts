module dynomike.RoyalFlush {
    export class SlotReel extends PIXI.Container {

        private SYMBOL_HEIGHT = 165;
        private SYMBOL_WIDTH = 165;

        private symbol_1: dynomike.RoyalFlush.SlotSymbol;
        private symbol_2: dynomike.RoyalFlush.SlotSymbol;
        private symbol_3: dynomike.RoyalFlush.SlotSymbol;
        private symbol_4: dynomike.RoyalFlush.SlotSymbol;
        private symbol_5: dynomike.RoyalFlush.SlotSymbol;

        private symbolContainer: PIXI.Container;
        private symbolArray = [];

        constructor() {
            super();
            this.populateReel();
        } 

        private populateReel() {

            this.symbolContainer = new PIXI.Container();
            this.addChild(this.symbolContainer);

            this.symbol_1 = new dynomike.RoyalFlush.SlotSymbol(PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_DoubleBar.png'));
            this.symbol_2 = new dynomike.RoyalFlush.SlotSymbol(PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_RedSeven.png'));
            this.symbol_3 = new dynomike.RoyalFlush.SlotSymbol(PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_SingleBar.png'));
            this.symbol_4 = new dynomike.RoyalFlush.SlotSymbol(PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_TripleBar.png'));
            this.symbol_5 = new dynomike.RoyalFlush.SlotSymbol(PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_TripleDiamond.png'));

            this.symbolArray = this.shuffle([this.symbol_1, this.symbol_2, this.symbol_3, this.symbol_4, this.symbol_5]);

            var nextY: number = 0;
            var padding: number = 25;

            for (var i = 0; i < this.symbolArray.length; i++) {
                (this.symbolArray[i] as PIXI.Sprite).position.y = nextY;
                this.symbolContainer.addChild(this.symbolArray[i]);
                nextY += this.SYMBOL_HEIGHT + padding;
            }
            
            var rect = new PIXI.Graphics();
            rect.beginFill(0xFF00);
            rect.lineStyle(0, 0xFF0000);
            rect.drawRect(4, 4, 165, 215);

            this.mask = rect;
            this.addChild(rect);
            rect.y = 175;
        }

        public spin() {
            this.symbolContainer.position.y = this.y + this.rand(-100, 100);
        }

        public updatePosition(positionY: number)
        {
            //this.symbolContainer.position.y = positionY;
            TweenMax.to(this.symbolContainer, 0.5, { "y": positionY, easing: "easeIn" })
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