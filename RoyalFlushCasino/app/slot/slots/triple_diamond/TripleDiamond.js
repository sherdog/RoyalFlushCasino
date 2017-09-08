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
                _this.initialize();
                return _this;
            }
            TripleDiamond.prototype.initialize = function () {
                console.log('Loading tripe dialog slot :: initialize called');
                this.reelContainer = new PIXI.Container();
                this.slotMachineBackground = PIXI.Sprite.fromImage("assets/img/tripleDiamonSlotMachine.png");
                console.log('machine width: ' + this.slotMachineBackground.width);
                this.slotMachineBackground.pivot.x = this.slotMachineBackground.width / 2;
                this.slotMachineBackground.pivot.y = this.slotMachineBackground.height / 2;
                this.slotMachineBackground.position.x = 100;
                this.slotMachineBackground.position.y = 100;
                this.addChild(this.slotMachineBackground);
                this.reel1 = new RoyalFlush.SlotReel();
                this.reel2 = new RoyalFlush.SlotReel();
                this.reel3 = new RoyalFlush.SlotReel();
                this.reelContainer.addChild(this.reel1);
                this.reelContainer.addChild(this.reel2);
                this.reelContainer.addChild(this.reel3);
                this.addChild(this.reelContainer);
                this.reelContainer.position.x = 165;
                this.reelContainer.position.y = 138;
                this.reel2.position.x = 220;
                this.reel3.position.x = 440;
            };
            return TripleDiamond;
        }(PIXI.Container));
        RoyalFlush.TripleDiamond = TripleDiamond;
    })(RoyalFlush = dynomike.RoyalFlush || (dynomike.RoyalFlush = {}));
})(dynomike || (dynomike = {}));
//# sourceMappingURL=TripleDiamond.js.map