///<reference path="base/Scene.class.ts" />
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
        var FakeScene = (function (_super) {
            __extends(FakeScene, _super);
            function FakeScene(app) {
                var _this = _super.call(this, app) || this;
                _this.symbol_1 = PIXI.Sprite.fromImage("assets/img/tripleDiamonSlot_TripleDiamond.png");
                _this.symbol_1.position.x = 100;
                _this.symbol_1.position.y = 100;
                _this.symbol_1.pivot.x = _this.symbol_1.width / 2;
                _this.symbol_1.pivot.y = _this.symbol_1.height / 2;
                _this.addChild(_this.symbol_1);
                _this.btnStart = PIXI.Sprite.fromImage("assets/img/btnBlue.png");
                _this.addChild(_this.btnStart);
                _this.btnStart.pivot.x = _this.btnStart.width / 2;
                _this.btnStart.pivot.y = _this.btnStart.width / 2;
                _this.btnStart.interactive = true;
                _this.btnStart.buttonMode = true;
                _this.btnStart.pivot.set(_this.btnStart.width / 2, _this.btnStart.height / 2);
                _this.btnStart
                    .on('pointerdown', _this.onStartTapHandler)
                    .on('pointerover', _this.onStartOverHandler)
                    .on('pointerout', _this.onStartOutHandler);
                _this.btnStart.position.x = (_this._app.renderer.width / 2);
                _this.btnStart.position.y = 500;
                return _this;
            }
            FakeScene.prototype.onStartOutHandler = function (event) {
                console.log('Out handler called');
                event.currentTarget.scale.y = 1;
                event.currentTarget.scale.x = 1;
            };
            FakeScene.prototype.onStartOverHandler = function (event) {
                event.currentTarget.scale.x = 1.1;
                event.currentTarget.scale.y = 1.1;
            };
            FakeScene.prototype.onStartTapHandler = function (event) {
                dispatchEvent(new Event("onStartClicked"));
            };
            FakeScene.prototype.update = function () {
                _super.prototype.update.call(this);
                //this.symbol_1.rotation += 0.1;
            };
            return FakeScene;
        }(RoyalFlush.Scene));
        RoyalFlush.FakeScene = FakeScene;
    })(RoyalFlush = dynomike.RoyalFlush || (dynomike.RoyalFlush = {}));
})(dynomike || (dynomike = {}));
//# sourceMappingURL=FakeScene.js.map