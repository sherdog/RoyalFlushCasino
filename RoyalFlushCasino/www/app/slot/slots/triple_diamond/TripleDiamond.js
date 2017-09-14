///<reference path="../../../../lib/pixi.d.ts" />
///<reference path="TripleDiamondReelStrip.ts" />
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
                _this._reel1Symbols = [];
                _this._reel2Symbols = [];
                _this._reel3Symbols = [];
                _this._reelPositions = [0, 220, 440];
                return _this;
            }
            TripleDiamond.prototype.initialize = function () {
                this._reel1Symbols = [1, 2, 1, 4, 2, 3, 5, 1, 2, 3, 2, 3, 4, 5, 4, 3, 2, 3, 4, 5];
                this._reel2Symbols = [2, 1, 2, 2, 3, 2, 1, 4, 2, 1, 3, 5, 1, 2, 3, 4, 3, 4, 3, 2];
                this._reel3Symbols = [1, 3, 2, 1, 2, 1, 3, 1, 2, 4, 1, 5, 2, 5, 1, 2, 2, 4, 2, 1];
                this._reelStrip = new dynomike.RoyalFlush.TripleDiamondReelStrip();
                this.slotMachineBackground = PIXI.Sprite.fromImage("assets/img/tripleDiamonSlotMachine.png");
                this.slotMachineBackground.pivot.x = this.slotMachineBackground.width / 2;
                this.slotMachineBackground.pivot.y = this.slotMachineBackground.height / 2;
                this.slotMachineBackground.position.x = 100;
                this.slotMachineBackground.position.y = 100;
                this.addChild(this.slotMachineBackground);
                this.reel1SymbolArray = this._reelStrip.createStrip(this._reel1Symbols);
                this.reel2SymbolArray = this._reelStrip.createStrip(this._reel2Symbols);
                this.reel3SymbolArray = this._reelStrip.createStrip(this._reel3Symbols);
                this.reel1 = new dynomike.RoyalFlush.SlotReel(this.reel1SymbolArray);
                this.reel2 = new dynomike.RoyalFlush.SlotReel(this.reel2SymbolArray);
                this.reel3 = new dynomike.RoyalFlush.SlotReel(this.reel3SymbolArray);
                this.reelArray = [this.reel1, this.reel2, this.reel3];
                this.addChild(this.reel1);
                this.addChild(this.reel2);
                this.addChild(this.reel3);
                this.reel1.position.set(165, 175);
                this.reel2.position.set(385, 175);
                this.reel3.position.set(605, 175);
                // this.reelContainer.position.x = 165;
                // this.reelContainer.position.y = 175;
                var buttonOutTexture = PIXI.Texture.fromImage("assets/img/btnSpin_out.png");
                var buttonOverTexture = PIXI.Texture.fromImage("assets/img/btnSpin_over.png");
                this._spinButton = new dynomike.RoyalFlush.Button(buttonOutTexture, buttonOverTexture, this.onSpinClickHandler);
                this.addChild(this._spinButton);
                this._spinButton.position.x = 430;
                this._spinButton.position.y = 600;
                this._spinButton.on("pointerdown", this.onSpinClickHandler.bind(this));
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