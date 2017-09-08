module dynomike.RoyalFlush {
    export class SlotReel extends PIXI.Container {

        private symbol_1: PIXI.Sprite;
        private symbol_2: PIXI.Sprite;
        private symbol_3: PIXI.Sprite;
        private symbol_4: PIXI.Sprite;
        private symbol_5: PIXI.Sprite;

        private symbolContainer: PIXI.Container;
        private symbolArray = [];

        constructor() {
            super();
            this.populateReel();
        } 

        private populateReel() {

            this.symbolContainer = new PIXI.Container();
            this.addChild(this.symbolContainer);

            this.symbol_1 = PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_DoubleBar.png');
            this.symbol_2 = PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_RedSeven.png');
            this.symbol_3 = PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_SingleBar.png');
            this.symbol_4 = PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_TripleBar.png');
            this.symbol_5 = PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_TripleDiamond.png');

            this.symbolArray = [this.symbol_1, this.symbol_2, this.symbol_3, this.symbol_4, this.symbol_5];

            this.symbolArray = this.shuffle(this.symbolArray);

            var nextY: number = this.rand(-100, 100);
            var padding: number = 25;

            for (var i = 0; i < this.symbolArray.length; i++) {
                (this.symbolArray[i] as PIXI.Sprite).position.y = nextY;
                this.symbolContainer.addChild(this.symbolArray[i]);
                nextY += ((this.symbolArray[i] as PIXI.Sprite).height + padding);
            }
            
            var rect = new PIXI.Graphics();
            rect.beginFill(0xFF00);
            rect.lineStyle(0, 0xFF0000);
            rect.drawRect(4, 4, 165, 225);

            this.mask = rect;
            this.addChild(rect);
            this.symbolContainer.y = -(this.symbolContainer.height / 2);
            rect.y = 175;
            console.log('symbol container height: ' + (this.symbolContainer.height));
           // rect.y = (this.symbolContainer.y + (this.symbolContainer.height / 2)) - rect.height / 2;
        }

        public spin() {
            this.symbolContainer.position.y = this.y + this.rand(-100, 100);
        }

        public update(positionY: number)
        {
            this.symbolContainer.position.y += positionY;
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