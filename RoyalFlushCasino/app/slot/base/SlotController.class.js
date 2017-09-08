var dynomike;
(function (dynomike) {
    var RoyalFlush;
    (function (RoyalFlush) {
        var SlotController = (function () {
            function SlotController(screen) {
                this.STATE_LOADING = "GameStateLoading";
                this.STATE_SPINNING = "GameStateSpinning";
                this.STATE_READY = "GameStateReady";
                this.STAET_PENDING = "GameStatePending";
                this.STATE_IDLE = "GameStateIdle";
                this._screen = screen;
            }
            SlotController.prototype.loadSlot = function (slot) {
                this._state = this.STATE_LOADING;
            };
            SlotController.prototype.onSlotLoaded = function () {
                this._state = this.STATE_READY;
            };
            SlotController.prototype.onSlotLoadError = function () {
            };
            return SlotController;
        }());
        RoyalFlush.SlotController = SlotController;
    })(RoyalFlush = dynomike.RoyalFlush || (dynomike.RoyalFlush = {}));
})(dynomike || (dynomike = {}));
//# sourceMappingURL=SlotController.class.js.map