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
        var Reel = /** @class */ (function (_super) {
            __extends(Reel, _super);
            function Reel() {
                var _this = _super.call(this) || this;
                _this.symbolArray = [];
                return _this;
            }
            Reel.prototype.populateReel = function () {
            };
            return Reel;
        }(PIXI.Container));
        RoyalFlush.Reel = Reel;
    })(RoyalFlush = dynomike.RoyalFlush || (dynomike.RoyalFlush = {}));
})(dynomike || (dynomike = {}));
//# sourceMappingURL=Reel.class.js.map