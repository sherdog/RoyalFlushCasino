var dynomike;
(function (dynomike) {
    var RoyalFlush;
    (function (RoyalFlush) {
        var SlotFactory = /** @class */ (function () {
            function SlotFactory() {
                this.slotDict = {};
                this.initialize();
            }
            SlotFactory.prototype.initialize = function () {
                console.log('SLotFactory Initialize');
                this.slotDict["tripleDiamond"] = new dynomike.RoyalFlush.TripleDiamond();
            };
            SlotFactory.prototype.getSlot = function (slotName) {
                if (this.slotDict[slotName]) {
                    return this.slotDict[slotName];
                }
                else {
                    return null;
                }
            };
            return SlotFactory;
        }());
        RoyalFlush.SlotFactory = SlotFactory;
    })(RoyalFlush = dynomike.RoyalFlush || (dynomike.RoyalFlush = {}));
})(dynomike || (dynomike = {}));
//# sourceMappingURL=SlotFactory.js.map