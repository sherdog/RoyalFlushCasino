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
        var SlotMachine = /** @class */ (function (_super) {
            __extends(SlotMachine, _super);
            function SlotMachine() {
                var _this = _super.call(this) || this;
                _this._prngMinRange = 1;
                _this._prngMaxRange = 1000000000;
                _this.TILE_WIDTH = 100;
                _this.TILE_HEIGHT = _this.TILE_WIDTH;
                _this.STATE_SPINNING = 1;
                _this.STATE_IDLE = 0;
                _this._state = _this.STATE_IDLE;
                _this.reelArray = [];
                _this.initialize();
                return _this;
            }
            SlotMachine.prototype.initialize = function () {
                //override in concretes
                this.generateWin();
            };
            SlotMachine.prototype.generateWin = function () {
                this._winningIndices = [];
                for (var i = 0; i < this.reelArray.length; i++) {
                    var reelLen = this.reelArray[i].stopCount;
                    var randomValue = this.getRandomInt(this._prngMinRange, this._prngMaxRange);
                    this._winningIndices.push(randomValue % reelLen);
                }
            };
            SlotMachine.prototype.onSlotReady = function () {
            };
            SlotMachine.prototype.draw = function () {
            };
            SlotMachine.prototype.getRandomInt = function (min, max) {
                var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
                return randomNumber;
            };
            return SlotMachine;
        }(PIXI.Container));
        RoyalFlush.SlotMachine = SlotMachine;
    })(RoyalFlush = dynomike.RoyalFlush || (dynomike.RoyalFlush = {}));
})(dynomike || (dynomike = {}));
//# sourceMappingURL=SlotMachine.js.map