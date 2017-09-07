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
///<reference path="../lib/pixi.d.ts" />
var dynomike;
(function (dynomike) {
    var RoyalFlush;
    (function (RoyalFlush) {
        var SlotReel = /** @class */ (function (_super) {
            __extends(SlotReel, _super);
            function SlotReel() {
                var _this = _super.call(this) || this;
                _this.symbolArray = [];
                _this.populateReel();
                return _this;
            }
            SlotReel.prototype.populateReel = function () {
                this.symbol_1 = PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_DoubleBar.png');
                this.symbol_2 = PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_RedSeven.png');
                this.symbol_3 = PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_SingleBar.png');
                this.symbol_4 = PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_TripleBar.png');
                this.symbol_5 = PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_TripleDiamond.png');
                this.symbolArray = [this.symbol_1, this.symbol_2, this.symbol_3, this.symbol_4, this.symbol_5];
                var nextY = 0;
                var padding = 25;
                for (var i = 0; i < this.symbolArray.length; i++) {
                    this.symbolArray[i].position.y = nextY;
                    this.addChild(this.symbolArray[i]);
                    nextY += (this.symbolArray[i].height + padding);
                }
            };
            return SlotReel;
        }(PIXI.Container));
        RoyalFlush.SlotReel = SlotReel;
    })(RoyalFlush = dynomike.RoyalFlush || (dynomike.RoyalFlush = {}));
})(dynomike || (dynomike = {}));
//# sourceMappingURL=SlotReel.class.js.map