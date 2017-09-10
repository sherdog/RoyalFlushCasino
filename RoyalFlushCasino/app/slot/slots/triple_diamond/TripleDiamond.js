///<reference path="../../../../lib/pixi.d.ts" />
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
        var TripleDiamond = /** @class */ (function (_super) {
            __extends(TripleDiamond, _super);
            function TripleDiamond() {
                var _this = _super.call(this) || this;
                _this.TILE_WIDTH = 165;
                _this.TILE_HEIGHT = 165;
                return _this;
            }
            TripleDiamond.prototype.initialize = function () {
                this.reelContainer = new PIXI.Container();
                this.slotMachineBackground = PIXI.Sprite.fromImage("assets/img/tripleDiamonSlotMachine.png");
                this.slotMachineBackground.pivot.x = this.slotMachineBackground.width / 2;
                this.slotMachineBackground.pivot.y = this.slotMachineBackground.height / 2;
                this.slotMachineBackground.position.x = 100;
                this.slotMachineBackground.position.y = 100;
                this.addChild(this.slotMachineBackground);
                this.reel1 = new RoyalFlush.SlotReel(1);
                this.reel2 = new RoyalFlush.SlotReel(2);
                this.reel3 = new RoyalFlush.SlotReel(3);
                this.reelContainer.addChild(this.reel1);
                this.reelContainer.addChild(this.reel2);
                this.reelContainer.addChild(this.reel3);
                this.reelArray = [this.reel1, this.reel2, this.reel3];
                this.addChild(this.reelContainer);
                this.reelContainer.position.x = 165;
                this.reelContainer.position.y = 175;
                this.reel1.position.x = 0;
                this.reel2.position.x = 220;
                this.reel3.position.x = 440;
                var buttonOutTexture = PIXI.Texture.fromImage("assets/img/btnSpin_out.png");
                var buttonOverTexture = PIXI.Texture.fromImage("assets/img/btnSpin_over.png");
                this._spinButton = new dynomike.RoyalFlush.Button(buttonOutTexture, buttonOverTexture, this.onSpinClickHandler);
                this.addChild(this._spinButton);
                this._spinButton.on("pointerdown", this.onSpinClickHandler.bind(this));
                this._spinButton.position.x = 430;
                this._spinButton.position.y = 600;
                _super.prototype.initialize.call(this);
            };
            TripleDiamond.prototype.onSpinClickHandler = function (event) {
                console.log('state: ' + this._state);
                if (this._state === this.STATE_SPINNING) {
                    this._state = this.STATE_IDLE;
                    for (var i = 0; i < this.reelArray.length; i++) {
                        this.reelArray[i].stop();
                    }
                }
                else {
                    for (var i = 0; i < this.reelArray.length; i++) {
                        console.log('calling spin');
                        this.reelArray[i].spin(4);
                    }
                    this._state = this.STATE_SPINNING;
                }
            };
            return TripleDiamond;
        }(dynomike.RoyalFlush.SlotMachine));
        RoyalFlush.TripleDiamond = TripleDiamond;
    })(RoyalFlush = dynomike.RoyalFlush || (dynomike.RoyalFlush = {}));
})(dynomike || (dynomike = {}));
//# sourceMappingURL=TripleDiamond.js.map