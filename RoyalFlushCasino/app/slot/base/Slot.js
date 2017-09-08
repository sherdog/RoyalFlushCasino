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
        var Slot = (function (_super) {
            __extends(Slot, _super);
            function Slot() {
                var _this = _super.call(this) || this;
                _this._assetsToLoad = [];
                return _this;
            }
            Slot.prototype.addAsset = function (name, path) {
                if (name === void 0) { name = ""; }
                this._assetsToLoad.push([name, path]);
            };
            return Slot;
        }(PIXI.Container));
        RoyalFlush.Slot = Slot;
    })(RoyalFlush = dynomike.RoyalFlush || (dynomike.RoyalFlush = {}));
})(dynomike || (dynomike = {}));
//# sourceMappingURL=Slot.js.map