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
                _this._stopRolling = false;
                _this._paylineRowY = 0;
                _this._winningIndex = 0;
                _this._isRollingComplete = false;
                _this._stepSpeed = 5;
                _this._stopHeight = 0;
                _this._padding = 15;
                _this.SYMBOL_HEIGHT = 165;
                _this.SYMBOL_WIDTH = 165;
                _this.SYMBOL_SPACING = 25;
                _this.REEL_SPIN_SPEED = 2;
                _this.STATE_IDLE = 0;
                _this.STATE_SPINNING = 1;
                _this.STATE_STOPPING = 2;
                _this._state = _this.STATE_IDLE;
                _this._stops = reelArray;
                _this.initialize();
                return _this;
            }
            SlotReel.prototype.setReels = function () {
            };
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
                var firstStop = this._stops[0];
                this._minY = this._maskWindow.y;
                this._maxY = this._maskWindow.y + this._maskWindow.height;
                var startX = 83;
                var startY = this._minY;
                this._paylineRowY = (this._maskWindow.y + (this._maskWindow.height / 2)); //Based on 1 payline
                this._stopHeight = firstStop.height;
                this._stepSpeed = 18.6;
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
                /*
                var paylineLine = new PIXI.Graphics();
                paylineLine.beginFill(0xFF0000, 1);
                paylineLine.lineStyle(1, 0xFF0000);
                paylineLine.drawRect(0, this._paylineRowY, 300, 5);
                this.addChild(paylineLine);
                */
                this.update();
            };
            SlotReel.prototype.update = function () {
                requestAnimationFrame(this.update.bind(this));
                if (this._isRollingComplete)
                    return;
                for (var i = 0; i < this._stopSprites.length; i++) {
                    var stop = this._stopSprites[i];
                    stop.position.y = stop.y + this._stepSpeed;
                    if (stop.y > this._maxY + this._padding + 20) {
                        stop.position.y = this._tailSymbol.y - this._tailSymbol.height - (stop.height / 2) - this._padding;
                        this._tailSymbol = stop;
                    }
                    //if (this._stopAfterRollingCount === this._rollingCount && i === this._winningIndex) {
                    if (this._stopRolling && i === this._winningIndex) {
                        if (stop.y >= this._paylineRowY) {
                            if (this._winningIndex === 0) {
                                this._tailSymbol.position.y = stop.y + stop.height;
                                this._tailSymbol = this._stopSprites[this._stopSprites.length - 2];
                            }
                            this.resetYPosition(stop);
                            this._isRollingComplete = true;
                        }
                    }
                }
            };
            SlotReel.prototype.stop = function (winningIndex) {
                this._winningIndex = winningIndex;
                this._stopRolling = true;
            };
            SlotReel.prototype.resetYPosition = function (currentStop) {
                var deltaY = currentStop.y - this._paylineRowY;
                for (var i = 0; i < this._stopSprites.length; i++) {
                    var newStop = this._stopSprites[i];
                    newStop.position.y = newStop.y - deltaY;
                }
            };
            SlotReel.prototype.spin = function () {
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
            };
            Object.defineProperty(SlotReel.prototype, "stopCount", {
                get: function () {
                    return this._stops.length;
                },
                enumerable: true,
                configurable: true
            });
            return SlotReel;
        }(PIXI.Container));
        RoyalFlush.SlotReel = SlotReel;
    })(RoyalFlush = dynomike.RoyalFlush || (dynomike.RoyalFlush = {}));
})(dynomike || (dynomike = {}));
//# sourceMappingURL=SlotReel.js.map