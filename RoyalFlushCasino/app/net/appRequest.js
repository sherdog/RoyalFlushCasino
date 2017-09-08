var dynomike;
(function (dynomike) {
    var RoyalFlush;
    (function (RoyalFlush) {
        var AppRequest = /** @class */ (function () {
            function AppRequest() {
            }
            AppRequest.prototype.retry = function () {
                //retry and after a few times I guess?
            };
            AppRequest.prototype.getResponse = function () {
                return this._response;
            };
            //use this to generate a hash code which is a the secrety key for server requests.
            AppRequest.prototype.generateRequestHash = function () {
                return "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            };
            return AppRequest;
        }());
        RoyalFlush.AppRequest = AppRequest;
    })(RoyalFlush = dynomike.RoyalFlush || (dynomike.RoyalFlush = {}));
})(dynomike || (dynomike = {}));
//# sourceMappingURL=appRequest.js.map