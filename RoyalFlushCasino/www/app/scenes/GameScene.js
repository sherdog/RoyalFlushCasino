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
        var GameScene = /** @class */ (function (_super) {
            __extends(GameScene, _super);
            function GameScene(app) {
                var _this = _super.call(this, app) || this;
                _this.onSceneLoaded();
                return _this;
            }
            GameScene.prototype.onLoadComplete = function (loader, resources) {
                //Move this to the base scene class, on sceneLoade would be called after all assets were loaded.
            };
            GameScene.prototype.onSceneLoaded = function () {
                this._slotController = new dynomike.RoyalFlush.SlotController();
                this.addChild(this._slotController);
                this._slotController.load(dynomike.RoyalFlush.SlotTypes.SLOT_TRIPLE_DIAMOND);
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