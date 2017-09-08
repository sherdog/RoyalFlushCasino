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
                this.slotDict["tripleDiamond"] = new dynomike.RoyalFlush.TripleDiamond();
                console.log('Initialized slot factory. we have 1 slot ' + this.slotDict["tripleDiamond"]);
            };
            SlotFactory.prototype.getSlot = function (slotName) {
                console.log("slot factory get slot called for slot " + slotName);
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