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
                _this.initialize();
                return _this;
            }
            SlotMachine.prototype.initialize = function () {
                //override in concretes
            };
            return SlotMachine;
        }(PIXI.Container));
        RoyalFlush.SlotMachine = SlotMachine;
    })(RoyalFlush = dynomike.RoyalFlush || (dynomike.RoyalFlush = {}));
})(dynomike || (dynomike = {}));
//# sourceMappingURL=SlotMachine.js.map