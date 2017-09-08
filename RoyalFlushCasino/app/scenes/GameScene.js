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
        var GameScene = (function (_super) {
            __extends(GameScene, _super);
            function GameScene(app) {
                var _this = _super.call(this, app) || this;
                _this.reelContainer = new PIXI.Container();
                _this.slotMachineBackground = PIXI.Sprite.fromImage("assets/img/tripleDiamonSlotMachine.png");
                console.log('machine width: ' + _this.slotMachineBackground.width);
                _this.slotMachineBackground.pivot.x = _this.slotMachineBackground.width / 2;
                _this.slotMachineBackground.pivot.y = _this.slotMachineBackground.height / 2;
                _this.slotMachineBackground.position.x = 100;
                _this.slotMachineBackground.position.y = 100;
                _this.addChild(_this.slotMachineBackground);
                _this.reel1 = new RoyalFlush.SlotReel();
                _this.reel2 = new RoyalFlush.SlotReel();
                _this.reel3 = new RoyalFlush.SlotReel();
                _this.reelContainer.addChild(_this.reel1);
                _this.reelContainer.addChild(_this.reel2);
                _this.reelContainer.addChild(_this.reel3);
                _this.addChild(_this.reelContainer);
                _this.reelContainer.position.x = 165;
                _this.reelContainer.position.y = 138;
                _this.reel2.position.x = 220;
                _this.reel3.position.x = 440;
                console.log("GameScene constructor called");
                return _this;
            }
            GameScene.prototype.onLoadComplete = function (loader, resources) {
                console.log('onLoadComplete called');
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