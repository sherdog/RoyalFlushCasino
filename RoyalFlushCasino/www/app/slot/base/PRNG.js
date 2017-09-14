var dynomike;
(function (dynomike) {
    var RoyalFlush;
    (function (RoyalFlush) {
        var PRNG = /** @class */ (function () {
            function PRNG() {
            }
            PRNG.getRandom = function (min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            };
            return PRNG;
        }());
        RoyalFlush.PRNG = PRNG;
    })(RoyalFlush = dynomike.RoyalFlush || (dynomike.RoyalFlush = {}));
})(dynomike || (dynomike = {}));
//# sourceMappingURL=PRNG.js.map