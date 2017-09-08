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
        var Scene = /** @class */ (function (_super) {
            __extends(Scene, _super);
            function Scene(app) {
                var _this = _super.call(this) || this;
                _this.paused = false;
                _this.updateCallback = function () { };
                _this._app = app;
                return _this;
            }
            Scene.prototype.onUpdate = function (updateCallback) {
                this.updateCallback = updateCallback;
            };
            Scene.prototype.update = function () {
                this.updateCallback();
            };
            Scene.prototype.pause = function () {
                this.paused = true;
            };
            Scene.prototype.resume = function () {
                this.paused = false;
            };
            Scene.prototype.isPaused = function () {
                return this.paused;
            };
            return Scene;
        }(PIXI.Container));
        RoyalFlush.Scene = Scene;
    })(RoyalFlush = dynomike.RoyalFlush || (dynomike.RoyalFlush = {}));
})(dynomike || (dynomike = {}));
//# sourceMappingURL=Scene.js.map