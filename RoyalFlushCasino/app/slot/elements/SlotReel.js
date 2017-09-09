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
            function SlotReel() {
                var _this = _super.call(this) || this;
                _this.SYMBOL_HEIGHT = 165;
                _this.SYMBOL_WIDTH = 165;
                _this.symbolArray = [];
                _this.populateReel();
                return _this;
            }
            SlotReel.prototype.populateReel = function () {
                this.symbolContainer = new PIXI.Container();
                this.addChild(this.symbolContainer);
                this.symbol_1 = new dynomike.RoyalFlush.SlotSymbol(PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_DoubleBar.png'));
                this.symbol_2 = new dynomike.RoyalFlush.SlotSymbol(PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_RedSeven.png'));
                this.symbol_3 = new dynomike.RoyalFlush.SlotSymbol(PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_SingleBar.png'));
                this.symbol_4 = new dynomike.RoyalFlush.SlotSymbol(PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_TripleBar.png'));
                this.symbol_5 = new dynomike.RoyalFlush.SlotSymbol(PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_TripleDiamond.png'));
                this.symbolArray = this.shuffle([this.symbol_1, this.symbol_2, this.symbol_3, this.symbol_4, this.symbol_5]);
                var nextY = 0;
                var padding = 25;
                for (var i = 0; i < this.symbolArray.length; i++) {
                    this.symbolArray[i].position.y = nextY;
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
            };
            SlotReel.prototype.spin = function () {
                this.symbolContainer.position.y = this.y + this.rand(-100, 100);
            };
            SlotReel.prototype.updatePosition = function (positionY) {
                //this.symbolContainer.position.y = positionY;
                TweenMax.to(this.symbolContainer, 0.5, { "y": positionY, easing: "easeIn" });
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