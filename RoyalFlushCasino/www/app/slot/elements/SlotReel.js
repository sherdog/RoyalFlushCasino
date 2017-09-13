var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var dynomike;
(function (dynomike) {
    var RoyalFlush;
    (function (RoyalFlush) {
        var SlotReel = /** @class */ (function (_super) {
            __extends(SlotReel, _super);
            function SlotReel(reelArray) {
                var _this = _super.call(this) || this;
                _this.symbols = [];
                _this._stopSprites = [];
                _this._rollingCount = 0;
                _this._stopAfterRollingCount = 0;
                _this._paylineRowY = 0;
                _this._winningIndex = 0;
                _this._isRollingComplete = false;
                _this._stepSpeed = 5;
                _this._stopHeight = 0;
                _this._padding = 25;
                _this.SYMBOL_HEIGHT = 165;
                _this.SYMBOL_WIDTH = 165;
                _this.SYMBOL_SPACING = 25;
                _this.REEL_SPIN_SPEED = 2;
                _this.STATE_SPINNING = 1;
                _this.STATE_IDLE = 0;
                _this.STATE_STOPPING = 2;
                _this._state = _this.STATE_IDLE;
                _this._stops = reelArray;
                _this.initialize();
                return _this;
            }
            SlotReel.prototype.initialize = function () {
                this._state = this.STATE_IDLE;
                this._maskWindow = new PIXI.Graphics();
                this._maskWindow.beginFill(0xFF00);
                this._maskWindow.lineStyle(0, 0xFF0000);
                this._maskWindow.drawRect(4, 4, 165, 215);
                this.mask = this._maskWindow;
                this.addChild(this._maskWindow);
                this._maskWindow.visible = true;
                this._maskWindow.y = 140;
                this._minY = this._maskWindow.y;
                this._maxY = this._maskWindow.y + this._maskWindow.height;
                var startX = 83;
                var startY = this._minY;
                this._paylineRowY = (this._maskWindow.y + (this._maskWindow.height / 2)); //Based on 1 payline
                var firstStop = this._stops[0];
                this._stopHeight = firstStop.height;
                this._stepSpeed = 20 / 5;
                for (var i = 0; i < this._stops.length; i++) {
                    var stop = this._stops[i];
                    this.addChild(stop);
                    stop.position.y = startY;
                    stop.position.x = startX;
                    var nextStopHeight;
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
                this.update();
            };
            SlotReel.prototype.update = function () {
                requestAnimationFrame(this.update.bind(this));
                if (this._isRollingComplete)
                    return;
                for (var i = 0; i < this._stopSprites.length; i++) {
                    var stop = this._stopSprites[i];
                    stop.position.y = stop.y + this._stepSpeed;
                    if (stop.y - this._padding > this._maxY) {
                        if (i + 1 == this._stopSprites.length) {
                            this._rollingCount++;
                        }
                        stop.position.y = this._tailSymbol.y - this._tailSymbol.height - this._padding;
                        this._tailSymbol = stop;
                    }
                    if (this._stopAfterRollingCount === this._rollingCount && i === this._winningIndex) {
                        if (stop.y >= this._paylineRowY) {
                            if (this._winningIndex === 0) {
                                this._tailSymbol.position.y = stop.y + stop.height - this._padding;
                                this._tailSymbol = this._stopSprites[this._stopSprites.length - 2];
                            }
                            this.resetYPosition(stop);
                            this._isRollingComplete = true;
                        }
                    }
                }
            };
            SlotReel.prototype.stop = function (symbolID) {
                if (symbolID === void 0) { symbolID = 1; }
                symbolID = this.getRandomInt(1, 5);
                this._state = this.STATE_STOPPING;
            };
            SlotReel.prototype.resetYPosition = function (currentStop) {
                //adjusts the Y position on all y's after stop
                var deltaY = currentStop.y - this._paylineRowY + (currentStop.height / 2);
                for (var i = 0; i < this._stopSprites.length; i++) {
                    var newStop = this._stopSprites[i];
                    console.log('setting ' + newStop.symbolID + ' to ' + (newStop.y - deltaY));
                    newStop.position.y = newStop.y - deltaY;
                }
            };
            SlotReel.prototype.getRandomInt = function (min, max) {
                var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
                return randomNumber;
            };
            SlotReel.prototype.spin = function (rotations) {
                this._state = this.STATE_SPINNING;
                this._rollingCount = 0;
                this._stopAfterRollingCount = this.rand(1, 3);
                var randomValue = 1; //gets PRNG number value
                this._winningIndex = 2;
                //randomValue % this._stops.length;
                this._isRollingComplete = false;
            };
            SlotReel.prototype.rand = function (min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            };
            return SlotReel;
        }(PIXI.Container));
        RoyalFlush.SlotReel = SlotReel;
    })(RoyalFlush = dynomike.RoyalFlush || (dynomike.RoyalFlush = {}));
})(dynomike || (dynomike = {}));
//# sourceMappingURL=SlotReel.js.map