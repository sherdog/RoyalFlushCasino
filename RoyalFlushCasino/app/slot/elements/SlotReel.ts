module dynomike.RoyalFlush {
    export class SlotReel extends PIXI.Container {

        private SYMBOL_HEIGHT = 165;
        private SYMBOL_WIDTH = 165;
        private SYMBOL_SPACING = 25;
        private REEL_SPIN_SPEED: number = 35;

        private STATE_SPINNING: number = 1;
        private STATE_IDLE: number = 0;
        private STATE_STOPPING: number = 2;

        private _state = this.STATE_IDLE;

        private _maskWindow: PIXI.Graphics;
        private _symbolContainer: PIXI.Container = new PIXI.Container;
        private _symbolContainer2: PIXI.Container = new PIXI.Container;
        private _outline: PIXI.Graphics;
        private _outline2: PIXI.Graphics;
        
        private _minY: number;
        private _maxY: number;
        private _reelStartY: number;
        private _reelSymbolStopPositions;

        private _reelStopY: number;
        private _finalPosY: number;

        private _reelStopPositions = [];
        private _symbolArray = [];

        constructor(reelNumber: number) {
            super();
            this.populateReel();
        } 

        private populateReel() {

            this._maskWindow = new PIXI.Graphics();
            this._maskWindow.beginFill(0xFF00);
            this._maskWindow.lineStyle(0, 0xFF0000);
            this._maskWindow.drawRect(4, 4, 165, 215);

            this.mask = this._maskWindow;
            this.addChild(this._maskWindow);
            this._maskWindow.visible = true;
            this._maskWindow.y = 140;

            this._reelStopY = (this._maskWindow.y + (this._maskWindow.height / 2));

            this._minY = this._maskWindow.y;
            this._maxY = this._maskWindow.y + this._maskWindow.height;
            var nextY: number = 0;

            this.addChild(this._symbolContainer);
            this.addChild(this._symbolContainer2);

            this._symbolContainer = this.createReel(this._symbolContainer);
            this._symbolContainer.position.y = 0;

            this._symbolContainer2 = this.createReel(this._symbolContainer2);
            this._symbolContainer2.position.y = this._symbolContainer.y - this._symbolContainer2.height - this.SYMBOL_SPACING;

            this._reelStartY = (this._minY + -(this._symbolContainer.height));

            this.draw();
        }

        private createReel(container: PIXI.Container): PIXI.Container {
            var array = [];

            array.push(new dynomike.RoyalFlush.SlotSymbol(PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_SingleBar.png'), 1));
            array.push(new dynomike.RoyalFlush.SlotSymbol(PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_DoubleBar.png'), 2));
            array.push(new dynomike.RoyalFlush.SlotSymbol(PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_TripleBar.png'), 3));
            array.push(new dynomike.RoyalFlush.SlotSymbol(PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_RedSeven.png'), 4));
            array.push(new dynomike.RoyalFlush.SlotSymbol(PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_TripleDiamond.png'), 5));

            
           //array = this.shuffle(array);

            var positionY: number = 0;
            this._reelSymbolStopPositions = [];

            for (var i = 0; i < array.length; i++)
            {
                container.addChild(array[i]);
                (array[i] as dynomike.RoyalFlush.SlotSymbol).position.y = positionY;
                positionY += (array[i] as dynomike.RoyalFlush.SlotSymbol).height + this.SYMBOL_SPACING;
                var symbolPosY = positionY - ((array[i] as dynomike.RoyalFlush.SlotSymbol).height / 2);
                this._reelSymbolStopPositions.push({ "id": (array[i] as dynomike.RoyalFlush.SlotSymbol).symbolID, "position": symbolPosY })
            }


            return container;
        }

        private draw() {

            requestAnimationFrame(this.draw.bind(this));

            if (this._state === this.STATE_SPINNING || this._state === this.STATE_STOPPING)
            {
                if (this._state === this.STATE_SPINNING) {

                    this._symbolContainer.position.y += this.REEL_SPIN_SPEED;
                    this._symbolContainer2.position.y += this.REEL_SPIN_SPEED;

                    if (this._symbolContainer.y > this._maxY) {
                        this._symbolContainer.position.y = this._symbolContainer2.y - this._symbolContainer.height - this.SYMBOL_SPACING;
                    }

                    if (this._symbolContainer2.y > this._maxY) {
                        this._symbolContainer2.position.y = this._symbolContainer.y - this._symbolContainer2.height - this.SYMBOL_SPACING;
                    }
                } else if (this._state === this.STATE_STOPPING) {

                    this._symbolContainer.position.y += this.REEL_SPIN_SPEED;
                    this._symbolContainer2.position.y += this.REEL_SPIN_SPEED;

                    console.log('this._symbolContainer2.y ' + this._symbolContainer2.y);
                    if (this._symbolContainer2.y > this._finalPosY) {
                        this._symbolContainer2.position.y = this._finalPosY;
                        this._symbolContainer.position.y = (this._symbolContainer2.y - this._symbolContainer.height);
                        this._state = this.STATE_IDLE;
                    }
                }
                
            }
        }

        public stop(symbolID: number = 1) {

            symbolID = this.getRandomInt(1, 5);

            this._symbolContainer.filters = null;
            this._symbolContainer2.filters = null;
            console.log('Stopping on symbol: ' + symbolID);
            this._finalPosY = this.getFinalPosition(symbolID);

            this._state = this.STATE_STOPPING;
        }

        private getFinalPosition(symbolID: number): number {
            var returnVal = 0;

            for (var i = 0; i < this._reelSymbolStopPositions.length; i++)
            {
                if (this._reelSymbolStopPositions[i]["id"] === symbolID) {
                    console.log('FOUND SYM ' + this._reelSymbolStopPositions[i]["position"]);
                    returnVal = this._reelSymbolStopPositions[i]["position"];
                }
            }
            return -returnVal;
        }

        private getRandomInt(min: number, max: number) {
            var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            return randomNumber;
        }

        public spin(rotations: number)
        {
            /*
            var blurFilter = new PIXI.filters.BlurFilter(5);
            this._symbolContainer.filters = [blurFilter];
            this._symbolContainer2.filters = [blurFilter];
            */
            
            this._state = this.STATE_SPINNING;
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