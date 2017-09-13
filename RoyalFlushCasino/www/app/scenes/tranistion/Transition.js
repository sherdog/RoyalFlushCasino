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
        var Transition = /** @class */ (function (_super) {
            __extends(Transition, _super);
            function Transition(app) {
                var _this = _super.call(this) || this;
                _this._app = app;
                return _this;
            }
            Transition.prototype.startTranition = function () {
                //of course we'll need to base it make it so these can be customized.
                var screenWidth;
                var screenHeight;
                screenWidth = this._app.renderer.width;
                screenHeight = this._app.renderer.height;
                this._rect = new PIXI.Graphics();
                this._rect.beginFill(0x000000);
                this._rect.drawRect(0, 0, screenWidth, screenHeight);
                this.addChild(this._rect);
            };
            Transition.prototype.updateProgress = function (totalLoaded, totalBytes) {
            };
            Transition.prototype.onLoadComplete = function () {
                //remove everything thats not needed.
                this.removeChild(this._rect);
            };
            return Transition;
        }(PIXI.Container));
        RoyalFlush.Transition = Transition;
    })(RoyalFlush = dynomike.RoyalFlush || (dynomike.RoyalFlush = {}));
})(dynomike || (dynomike = {}));
//# sourceMappingURL=Transition.js.map