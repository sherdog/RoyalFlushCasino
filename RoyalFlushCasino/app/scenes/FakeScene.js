///<reference path="../Scene.class.ts" />
///<reference path="../../lib/pixi.d.ts" />
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
        var FakeScene = /** @class */ (function (_super) {
            __extends(FakeScene, _super);
            function FakeScene(app) {
                var _this = _super.call(this, app) || this;
                _this.BUTTON_SCALE = 0.3;
                console.log("FakeScene constructor called");
                _this.symbol_1 = PIXI.Sprite.fromImage("assets/img/symbol_2.png");
                _this.symbol_1.position.x = 100;
                _this.symbol_1.position.y = 100;
                _this.addChild(_this.symbol_1);
                _this.btnStart = PIXI.Sprite.fromImage("assets/img/btnBlue.png");
                _this.addChild(_this.btnStart);
                _this.btnStart.pivot.x = _this.btnStart.width / 2;
                _this.btnStart.pivot.y = _this.btnStart.width / 2;
                _this.btnStart.scale.x = _this.BUTTON_SCALE;
                _this.btnStart.scale.y = _this.BUTTON_SCALE;
                _this.btnStart.interactive = true;
                _this.btnStart.buttonMode = true;
                _this.btnStart.on('pointerdown', _this.onStartTapHandler);
                _this.btnStart.position.x = (_this._app.renderer.width / 2);
                _this.btnStart.position.y = 500;
                console.log('Button width: ' + _this.btnStart.width + ' with scale: ' + (_this.btnStart.width * _this.BUTTON_SCALE));
                return _this;
            }
            FakeScene.prototype.onStartTapHandler = function (event) {
                dispatchEvent(new Event("onStartClicked"));
            };
            FakeScene.prototype.update = function () {
                _super.prototype.update.call(this);
            };
            return FakeScene;
        }(RoyalFlush.Scene));
        RoyalFlush.FakeScene = FakeScene;
    })(RoyalFlush = dynomike.RoyalFlush || (dynomike.RoyalFlush = {}));
})(dynomike || (dynomike = {}));
//# sourceMappingURL=FakeScene.js.map