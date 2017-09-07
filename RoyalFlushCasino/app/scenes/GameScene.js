///<reference path="../Scene.class.ts" />
///<reference path="../../lib/pixi.d.ts" />
///<reference path="../SlotReel.class.ts" />
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
        var GameScene = /** @class */ (function (_super) {
            __extends(GameScene, _super);
            function GameScene(app) {
                var _this = _super.call(this, app) || this;
                var loader = PIXI.loader;
                loader
                    .add('slotBackground', 'assets/img/tripleDiamonSlotMachine.png')
                    .load(_this.onLoadComplete);
                console.log("GameScene constructor called");
                return _this;
            }
            GameScene.prototype.onLoadComplete = function (loader, resources) {
                console.log('onLoadComplete called');
                this.symbol_1 = PIXI.Sprite.fromImage("assets/img/tripleDiamonSlotMachine.png");
                console.log('machine width: ' + this.symbol_1.width);
                this.symbol_1.pivot.x = this.symbol_1.width / 2;
                this.symbol_1.pivot.y = this.symbol_1.height / 2;
                this.symbol_1.position.x = 100;
                this.symbol_1.position.y = 100;
                this.addChild(this.symbol_1);
                this.reel1 = new RoyalFlush.SlotReel();
                this.addChild(this.reel1);
            };
            GameScene.prototype.update = function () {
                _super.prototype.update.call(this);
            };
            return GameScene;
        }(RoyalFlush.Scene));
        RoyalFlush.GameScene = GameScene;
    })(RoyalFlush = dynomike.RoyalFlush || (dynomike.RoyalFlush = {}));
})(dynomike || (dynomike = {}));
//# sourceMappingURL=GameScene.js.map