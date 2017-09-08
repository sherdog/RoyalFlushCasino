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
        var PlayerInfoRequest = (function (_super) {
            __extends(PlayerInfoRequest, _super);
            function PlayerInfoRequest(player) {
                var _this = _super.call(this) || this;
                _this._player = player;
                return _this;
            }
            PlayerInfoRequest.prototype.getUrl = function () {
                return "player/info/" + this._player.playerID;
            };
            return PlayerInfoRequest;
        }(RoyalFlush.AppRequest));
        RoyalFlush.PlayerInfoRequest = PlayerInfoRequest;
    })(RoyalFlush = dynomike.RoyalFlush || (dynomike.RoyalFlush = {}));
})(dynomike || (dynomike = {}));
//# sourceMappingURL=PlayerInfoRequest.class.js.map