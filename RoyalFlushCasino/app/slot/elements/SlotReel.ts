module dynomike.RoyalFlush {
    export class SlotReel extends PIXI.Container {

        private SYMBOL_HEIGHT = 165;
        private SYMBOL_WIDTH = 165;
        private SYMBOL_SPACING = 25;

        private symbol_1: dynomike.RoyalFlush.SlotSymbol;
        private symbol_2: dynomike.RoyalFlush.SlotSymbol;
        private symbol_3: dynomike.RoyalFlush.SlotSymbol;
        private symbol_4: dynomike.RoyalFlush.SlotSymbol;
        private symbol_5: dynomike.RoyalFlush.SlotSymbol;

        private maskWindow: PIXI.Graphics;

        private _symbolContainer: PIXI.Container = new PIXI.Container;
        private _symbolContainer2: PIXI.Container = new PIXI.Container;

        private _reelStopPositions = [];

        private _symbolArray = [];

        constructor(reelNumber: number) {
            super();
            this.populateReel();
        } 

        private populateReel() {

            this.addChild(this._symbolContainer);
            this.addChild(this._symbolContainer2);

            // this.symbol_3, this.symbol_4, this.symbol_5]
            this._symbolArray = this.shuffle([this.symbol_5, this.symbol_2, this.symbol_3]);

            var nextY: number = 0;
            var padding: number = 25;

            this._symbolContainer = this.createReel(this._symbolContainer);
            this._symbolContainer.position.y = -100;
            this._symbolContainer2 = this.createReel(this._symbolContainer2);
            this._symbolContainer2.position.y = (this._symbolContainer.y + this._symbolContainer.height) + padding

            console.log('height of symbol container ' + this._symbolContainer.height);
            console.log('width: ' + this._symbolContainer.width);

            var outline: PIXI.Graphics = new PIXI.Graphics();
            outline.beginFill(0x000000, 0);
            outline.lineStyle(3, 0xFF00);
            outline.endFill();
            this.addChild(outline);

            /*
            var outline2: PIXI.Graphics = new PIXI.Graphics();
            outline2.beginFill(0x000000, 0);
            outline2.lineStyle(3, 0xFF0000);
            outline2.drawRect(this._symbolContainer2.x, this._symbolContainer2.y, this._symbolContainer2.width, this._symbolContainer2.height);
            outline2.endFill();
            this.addChild(outline2);
            */

            console.log('reel cont y: ' + this._symbolContainer.y);
            console.log('reel cont2 y: ' + this._symbolContainer2.y);

            
            var reelWindowMask = new PIXI.Graphics();
            reelWindowMask.beginFill(0xFF00);
            reelWindowMask.lineStyle(0, 0xFF0000);
            reelWindowMask.drawRect(4, 4, 165, 215);
           
            //this.mask = reelWindowMask;
            this.addChild(reelWindowMask);
            reelWindowMask.visible = false;
            reelWindowMask.y = 175;
        }

        private createReel(container: PIXI.Container): PIXI.Container {
            var array = [];
            array.push(new dynomike.RoyalFlush.SlotSymbol(PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_SingleBar.png'), 1));
            array.push(new dynomike.RoyalFlush.SlotSymbol(PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_DoubleBar.png'), 2));
            array.push(new dynomike.RoyalFlush.SlotSymbol(PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_TripleBar.png'), 3));
            array.push(new dynomike.RoyalFlush.SlotSymbol(PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_RedSeven.png'), 4));
            array.push(new dynomike.RoyalFlush.SlotSymbol(PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_TripleDiamond.png'), 5));

           // array = this.shuffle(array);

            var positionY: number = 0;

            for (var i = 0; i < array.length; i++)
            {
                container.addChild(array[i]);
                (array[i] as dynomike.RoyalFlush.SlotSymbol).position.y = positionY;
                positionY += (array[i] as dynomike.RoyalFlush.SlotSymbol).height + this.SYMBOL_SPACING;

                if (!this._reelStopPositions.length) {
                    var destY = 

                    this._reelStopPositions.push(destY);
                }
            }

            return container;
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