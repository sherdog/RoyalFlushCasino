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
        var SlotSymbol = /** @class */ (function (_super) {
            __extends(SlotSymbol, _super);
            function SlotSymbol(symbolImage, symbolID) {
                var _this = _super.call(this) || this;
                _this._symbolID = -1;
                _this._active = false;
                _this._symbolID = symbolID;
                _this._symbol = symbolImage;
                _this.addChild(_this._symbol);
                return _this;
            }
            SlotSymbol.prototype.setActive = function (active) {
                //play symbol. This will eventully be a spritesheet ani/multiframe
            };
            Object.defineProperty(SlotSymbol.prototype, "symbolID", {
                get: function () { return this._symbolID; },
                set: function (symbolID) { this._symbolID = symbolID; },
                enumerable: true,
                configurable: true
            });
            return SlotSymbol;
        }(PIXI.Container));
        RoyalFlush.SlotSymbol = SlotSymbol;
    })(RoyalFlush = dynomike.RoyalFlush || (dynomike.RoyalFlush = {}));
})(dynomike || (dynomike = {}));
//# sourceMappingURL=SlotSymbol.js.map