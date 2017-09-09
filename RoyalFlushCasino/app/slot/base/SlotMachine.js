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
                _this._state = "StateIdle";
                _this.TILE_WIDTH = 100;
                _this.TILE_HEIGHT = _this.TILE_WIDTH;
                _this.STATE_SPINNING = "SlotSpinning";
                _this.STATE_IDLE = "SlotIdle";
                _this.STATE_VALIDATING_SPIN = "SlotValidatingSpin";
                _this.reelArray = [];
                _this.initialize();
                return _this;
            }
            SlotMachine.prototype.initialize = function () {
                //override in concretes
                this.onSlotReady();
            };
            SlotMachine.prototype.onSlotReady = function () {
                var preChoosedPosition = this.getRandomPositions();
                for (var i = 0; i < this.reelArray.length; i++) {
                    var finishPos = (-preChoosedPosition[i] * this.TILE_HEIGHT);
                    console.log('setting reel to position y: ' + finishPos);
                }
                this.draw();
            };
            SlotMachine.prototype.spin = function (finishPosition) {
                this.startReelAnimation();
            };
            SlotMachine.prototype.startReelAnimation = function () {
                var preChoosedPosition = this.getRandomPositions();
                for (var i = 0; i < this.reelArray.length; i++) {
                    var finishPos = (-preChoosedPosition[i] * this.TILE_HEIGHT);
                    this.reelArray[i].updatePosition(finishPos);
                    this.reelArray[i];
                }
            };
            SlotMachine.prototype.draw = function () {
                var rotations = 5; //rotates the reel 5 times before stopping
                var speed = 32;
                requestAnimationFrame(this.draw.bind(this));
                if (this._state === this.STATE_SPINNING) {
                    for (var i = 0; i < this.reelArray.length; i++) {
                        this.reelArray[i].update(10);
                    }
                }
                else if (this._state === this.STATE_IDLE) {
                }
                else if (this._state === this.STATE_VALIDATING_SPIN) {
                }
            };
            SlotMachine.prototype.getRandomPositions = function () {
                var x = this.getRandomInt(0, 100);
                if (x > 50) {
                    x = this.getRandomInt(0, 6);
                    return [x, x, x];
                }
                return [this.getRandomInt(0, 6), this.getRandomInt(0, 6), this.getRandomInt(0, 6)];
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