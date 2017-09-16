
module dynomike.RoyalFlush {
    export class SlotReel extends PIXI.Container {

        public static EVENT_ON_REEL_STOP: string = "OnReelStop";

        private symbols = [];
        private _stops: Array<dynomike.RoyalFlush.SlotSymbol>;
        private _stopSprites = [];

        private _tailSymbol: dynomike.RoyalFlush.SlotSymbol;
        private _rollingCount: number = 0;
        private _stopAfterRollingCount: number = 0;
        private _stopRolling: boolean = false;
        private _paylineRowY: number = 0;
        private _winningIndex: number = 0;
        private _isRollingComplete: boolean = false;
        private _stepSpeed: number = 5;
        private _stopHeight: number = 0;
        private _padding: number = 10;

        public static ON_REEL_STOP: string = "OnReelStop";
        public static ON_REEL_START: string = "OnReelStart";

        private SYMBOL_HEIGHT = 165;
        private SYMBOL_WIDTH = 165;
        private SYMBOL_SPACING = 10;
        private REEL_SPIN_SPEED: number = 2;

        private STATE_IDLE: number = 0;
        private STATE_SPINNING: number = 1;
        private STATE_STOPPING: number = 2;

        private _state = this.STATE_IDLE;

        private _maskWindow: PIXI.Graphics;

        private _minY: number;
        private _maxY: number;

        constructor(reelArray: Array<dynomike.RoyalFlush.SlotSymbol>) {
            super();
            this._stops = reelArray;
            this.initialize();
        } 

        private setReels(): void {

        }

        private initialize() {

            this._state = this.STATE_IDLE;
            this._maskWindow = new PIXI.Graphics();
            this._maskWindow.beginFill(0xFF00);
            this._maskWindow.lineStyle(0, 0xFF0000);
            this._maskWindow.drawRect(4, 4, 165, 215);

            this.mask = this._maskWindow;
            this.addChild(this._maskWindow);

            this._maskWindow.visible = true;
            this._maskWindow.y = 140;

            var firstStop: dynomike.RoyalFlush.SlotSymbol = this._stops[0];

            this._minY = this._maskWindow.y;
            this._maxY = this._maskWindow.y + this._maskWindow.height;

            var startX = 83;
            var startY = this._minY; 

            this._paylineRowY = (this._maskWindow.y + (this._maskWindow.height / 2)); //Based on 1 payline
            
            this._stopHeight = firstStop.height;
            this._stepSpeed = 38.6;

            for (var i = 0; i < this._stops.length; i++) {

                var stop: dynomike.RoyalFlush.SlotSymbol = this._stops[i];
                this.addChild(stop);
                stop.position.y = startY;
                stop.position.x = startX;

                var nextStopHeight: number;
                var nextIndex;

                if (i + 1 === this._stops.length)
                    nextIndex = 0;
                else
                    nextIndex = i + 1;

                startY = (startY - this._padding - this._stops[nextIndex].height - (stop.height / 2));

                this._stopSprites.push(stop);
            }

            this._tailSymbol = this._stopSprites[this._stopSprites.length - 1];
            this._isRollingComplete = true;

            /*
            var paylineLine = new PIXI.Graphics();
            paylineLine.beginFill(0xFF0000, 1);
            paylineLine.lineStyle(1, 0xFF0000);
            paylineLine.drawRect(0, this._paylineRowY, 300, 5);
            this.addChild(paylineLine);
            */

            this.update();
        }

        private update() {
            requestAnimationFrame(this.update.bind(this));

            if (this._isRollingComplete)
                return;

            for (var i = 0; i < this._stopSprites.length; i++) {

                var stop: dynomike.RoyalFlush.SlotSymbol = this._stopSprites[i];
                stop.position.y = stop.y + this._stepSpeed;

                if (stop.y > this._maxY + this._padding + 80) {
                    stop.position.y = this._tailSymbol.y - this._tailSymbol.height - (stop.height / 2) - this._padding;
                    this._tailSymbol = stop;
                }
                //if (this._stopAfterRollingCount === this._rollingCount && i === this._winningIndex) {
                if (this._stopRolling && i === this._winningIndex) {
                    var overrun = this.randomInt(60, 120);
                    if (stop.y >= this._paylineRowY + overrun) {

                        console.log('overrun is ' + overrun);
                        if (this._winningIndex === 0) {
                            this._tailSymbol.position.y = stop.y + stop.height;
                            this._tailSymbol = this._stopSprites[this._stopSprites.length - 2];
                        }

                        this.resetYPosition(stop);

                        this._isRollingComplete = true;
                        this.emit(dynomike.RoyalFlush.SlotReel.EVENT_ON_REEL_STOP);
                    }
                }
            }
        }

        private randomInt(min: number, max: number) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        public stop(winningIndex: number) {
            this._winningIndex = winningIndex;
            this._stopRolling = true;
        }

        private resetYPosition(currentStop: dynomike.RoyalFlush.SlotSymbol): void {
            var deltaY = currentStop.y - this._paylineRowY;
            for (var i = 0; i < this._stopSprites.length; i++) {
                var newStop: dynomike.RoyalFlush.SlotSymbol = this._stopSprites[i];
                newStop.position.y = newStop.y - deltaY;
                dispatchEvent(new Event(SlotReel.ON_REEL_STOP));
            }
            
        }

        public spin()
        {
            
            this._state = this.STATE_SPINNING;
            this._isRollingComplete = false;
            this._stopRolling = false;
            
           /*
            this._rollingCount = 0;
            this._stopAfterRollingCount = this.rand(1, 3);

            var randomValue = this.rand(-1, this._prngMaxRange);
            this._winningIndex = randomValue % this._stops.length;
            this._isRollingComplete = false;
            */
        }

        public get stopCount(): number {
            return this._stops.length;
        }
    }
}