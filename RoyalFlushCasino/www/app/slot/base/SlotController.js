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
        var SlotController = (function (_super) {
            __extends(SlotController, _super);
            function SlotController() {
                var _this = _super.call(this) || this;
                _this.STATE_LOADING = "GameStateLoading";
                _this.STATE_SPINNING = "GameStateSpinning";
                _this.STATE_READY = "GameStateReady";
                _this.STAET_PENDING = "GameStatePending";
                _this.STATE_IDLE = "GameStateIdle";
                _this._slotfactory = new dynomike.RoyalFlush.SlotFactory();
                return _this;
            }
            SlotController.prototype.load = function (slotName) {
                var slot = this._slotfactory.getSlot(slotName);
                this.addChild(slot);
            };
            SlotController.prototype.loadSlot = function (slot) {
                this._state = this.STATE_LOADING;
            };
            SlotController.prototype.onSlotLoaded = function () {
                this._state = this.STATE_READY;
            };
            SlotController.prototype.onSlotLoadError = function () {
                console.log('Error loading slot');
            };
            return SlotController;
        }(PIXI.Container));
        RoyalFlush.SlotController = SlotController;
    })(RoyalFlush = dynomike.RoyalFlush || (dynomike.RoyalFlush = {}));
})(dynomike || (dynomike = {}));
//# sourceMappingURL=SlotController.js.map