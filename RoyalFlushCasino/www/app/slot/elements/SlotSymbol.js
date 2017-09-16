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
        var SlotSymbol = (function (_super) {
            __extends(SlotSymbol, _super);
            function SlotSymbol(symbolImage, symbolID, index) {
                var _this = _super.call(this) || this;
                _this._symbolID = -1;
                _this._active = false;
                _this._index = 0;
                _this._index = index;
                _this._symbolID = symbolID;
                _this._symbol = symbolImage;
                _this.addChild(_this._symbol);
                return _this;
                /*
                let text = new PIXI.Text("Index " + this._index, { fill: "#FFFFFF" });
                text.x = 0;
                text.y = 0;
                this.addChild(text);
                */
            }
            SlotSymbol.prototype.setActive = function (active) {
                //play symbol. This will eventully be a spritesheet ani/multiframe
            };
            SlotSymbol.prototype.playAnimation = function () {
                //this gets called if it's a special symbol.
            };
            Object.defineProperty(SlotSymbol.prototype, "symbolID", {
                get: function () { return this._symbolID; },
                set: function (symbolID) { this._symbolID = symbolID; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(SlotSymbol.prototype, "index", {
                get: function () { return this._index; },
                enumerable: true,
                configurable: true
            });
            return SlotSymbol;
        }(PIXI.Container));
        RoyalFlush.SlotSymbol = SlotSymbol;
    })(RoyalFlush = dynomike.RoyalFlush || (dynomike.RoyalFlush = {}));
})(dynomike || (dynomike = {}));
//# sourceMappingURL=SlotSymbol.js.map