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
        var SlotReel = (function (_super) {
            __extends(SlotReel, _super);
            function SlotReel(reelNumber) {
                var _this = _super.call(this) || this;
                _this.SYMBOL_HEIGHT = 165;
                _this.SYMBOL_WIDTH = 165;
                _this.SYMBOL_SPACING = 25;
                _this.REEL_SPIN_SPEED = 55;
                _this.STATE_SPINNING = 1;
                _this.STATE_IDLE = 0;
                _this._state = _this.STATE_IDLE;
                _this._symbolContainer = new PIXI.Container;
                _this._symbolContainer2 = new PIXI.Container;
                _this._reelStopPositions = [];
                _this._symbolArray = [];
                _this.populateReel();
                return _this;
            }
            SlotReel.prototype.populateReel = function () {
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
                var nextY = 0;
                this.addChild(this._symbolContainer);
                this.addChild(this._symbolContainer2);
                this._symbolContainer = this.createReel(this._symbolContainer);
                this._symbolContainer.position.y = 0;
                this._symbolContainer2 = this.createReel(this._symbolContainer2);
                this._symbolContainer2.position.y = this._symbolContainer.y - this._symbolContainer2.height - this.SYMBOL_SPACING;
                this._reelStartY = (this._minY + -(this._symbolContainer.height));
                this.draw();
            };
            SlotReel.prototype.createReel = function (container) {
                var array = [];
                array.push(new dynomike.RoyalFlush.SlotSymbol(PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_SingleBar.png'), 1));
                array.push(new dynomike.RoyalFlush.SlotSymbol(PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_DoubleBar.png'), 2));
                array.push(new dynomike.RoyalFlush.SlotSymbol(PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_TripleBar.png'), 3));
                array.push(new dynomike.RoyalFlush.SlotSymbol(PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_RedSeven.png'), 4));
                array.push(new dynomike.RoyalFlush.SlotSymbol(PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_TripleDiamond.png'), 5));
                array = this.shuffle(array);
                var positionY = 0;
                for (var i = 0; i < array.length; i++) {
                    container.addChild(array[i]);
                    array[i].position.y = positionY;
                    positionY += array[i].height + this.SYMBOL_SPACING;
                }
                return container;
            };
            SlotReel.prototype.draw = function () {
                requestAnimationFrame(this.draw.bind(this));
                if (this._state === this.STATE_SPINNING) {
                    this._symbolContainer.position.y += this.REEL_SPIN_SPEED;
                    this._symbolContainer2.position.y += this.REEL_SPIN_SPEED;
                    if (this._symbolContainer.y > this._maxY) {
                        this._symbolContainer.position.y = this._symbolContainer2.y - this._symbolContainer.height - this.SYMBOL_SPACING;
                    }
                    if (this._symbolContainer2.y > this._maxY) {
                        this._symbolContainer2.position.y = this._symbolContainer.y - this._symbolContainer2.height - this.SYMBOL_SPACING;
                    }
                }
            };
            SlotReel.prototype.stop = function () {
                console.log('stop called on reel');
                this._symbolContainer.filters = null;
                this._symbolContainer2.filters = null;
                this._state = this.STATE_IDLE;
            };
            SlotReel.prototype.spin = function (rotations) {
                console.log('spin called on reel');
                var blurFilter = new PIXI.filters.BlurFilter(5);
                this._symbolContainer.filters = [blurFilter];
                this._symbolContainer2.filters = [blurFilter];
                this._state = this.STATE_SPINNING;
            };
            SlotReel.prototype.shuffle = function (array) {
                var currentIndex = array.length, temporaryValue, randomIndex;
                while (0 !== currentIndex) {
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;
                    temporaryValue = array[currentIndex];
                    array[currentIndex] = array[randomIndex];
                    array[randomIndex] = temporaryValue;
                }
                return array;
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