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
        var Button = /** @class */ (function (_super) {
            __extends(Button, _super);
            function Button(outTexture, overTexture, onClickCallback) {
                var _this = _super.call(this) || this;
                _this._cb = onClickCallback;
                _this.buttonMode = true;
                _this.interactive = true;
                _this.interactiveChildren = false;
                _this._outTexture = outTexture;
                _this._overTexture = overTexture;
                _this.texture = _this._outTexture;
                _this
                    .on('pointerover', _this.overHandler)
                    .on('pointerout', _this.outHandler);
                return _this;
            }
            Button.prototype.overHandler = function (event) {
                this.texture = this._overTexture;
            };
            Button.prototype.outHandler = function (event) {
                this.texture = this._outTexture;
            };
            return Button;
        }(PIXI.Sprite));
        RoyalFlush.Button = Button;
    })(RoyalFlush = dynomike.RoyalFlush || (dynomike.RoyalFlush = {}));
})(dynomike || (dynomike = {}));
//# sourceMappingURL=Button.js.map