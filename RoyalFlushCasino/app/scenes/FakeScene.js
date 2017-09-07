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
            function FakeScene() {
                var _this = _super.call(this) || this;
                console.log("FakeScene constructor called");
                _this.symbol_1 = PIXI.Sprite.fromImage("assets/img/symbol_2.png");
                _this.symbol_1.position.x = 100;
                _this.symbol_1.position.y = 100;
                _this.addChild(_this.symbol_1);
                return _this;
            }
            FakeScene.prototype.update = function () {
                _super.prototype.update.call(this);
                this.symbol_1.rotation += 0.1;
            };
            return FakeScene;
        }(RoyalFlush.Scene));
        RoyalFlush.FakeScene = FakeScene;
    })(RoyalFlush = dynomike.RoyalFlush || (dynomike.RoyalFlush = {}));
})(dynomike || (dynomike = {}));
//# sourceMappingURL=FakeScene.js.map