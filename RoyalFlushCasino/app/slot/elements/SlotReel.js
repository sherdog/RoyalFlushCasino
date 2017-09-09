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
        var SlotReel = (function (_super) {
            __extends(SlotReel, _super);
            function SlotReel(reelNumber) {
                var _this = _super.call(this) || this;
                _this.SYMBOL_HEIGHT = 165;
                _this.SYMBOL_WIDTH = 165;
                _this.SYMBOL_SPACING = 25;
                _this._symbolContainer = new PIXI.Container;
                _this._symbolContainer2 = new PIXI.Container;
                _this._reelStopPositions = [];
                _this._symbolArray = [];
                _this.populateReel();
                return _this;
            }
            SlotReel.prototype.populateReel = function () {
                this.addChild(this._symbolContainer);
                this.addChild(this._symbolContainer2);
                // this.symbol_3, this.symbol_4, this.symbol_5]
                this._symbolArray = this.shuffle([this.symbol_5, this.symbol_2, this.symbol_3]);
                var nextY = 0;
                var padding = 25;
                this._symbolContainer = this.createReel(this._symbolContainer);
                this._symbolContainer.position.y = -100;
                this._symbolContainer2 = this.createReel(this._symbolContainer2);
                this._symbolContainer2.position.y = (this._symbolContainer.y + this._symbolContainer.height) + padding;
                console.log('height of symbol container ' + this._symbolContainer.height);
                console.log('width: ' + this._symbolContainer.width);
                var outline = new PIXI.Graphics();
                outline.beginFill(0x000000, 0);
                outline.lineStyle(3, 0xFF00);
                outline.endFill();
                this.addChild(outline);
                /*
                var outline2: PIXI.Graphics = new PIXI.Graphics();
                outline2.beginFill(0x000000, 0);
                outline2.lineStyle(3, 0xFF0000);
                outline2.drawRect(this._symbolContainer2.x, this._symbolContainer2.y, this._symbolContainer2.width, this._symbolContainer2.height);
                outline2.endFill();
                this.addChild(outline2);
                */
                console.log('reel cont y: ' + this._symbolContainer.y);
                console.log('reel cont2 y: ' + this._symbolContainer2.y);
                var reelWindowMask = new PIXI.Graphics();
                reelWindowMask.beginFill(0xFF00);
                reelWindowMask.lineStyle(0, 0xFF0000);
                reelWindowMask.drawRect(4, 4, 165, 215);
                //this.mask = reelWindowMask;
                this.addChild(reelWindowMask);
                reelWindowMask.visible = false;
                reelWindowMask.y = 175;
            };
            SlotReel.prototype.createReel = function (container) {
                var array = [];
                array.push(new dynomike.RoyalFlush.SlotSymbol(PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_SingleBar.png'), 1));
                array.push(new dynomike.RoyalFlush.SlotSymbol(PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_DoubleBar.png'), 2));
                array.push(new dynomike.RoyalFlush.SlotSymbol(PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_TripleBar.png'), 3));
                array.push(new dynomike.RoyalFlush.SlotSymbol(PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_RedSeven.png'), 4));
                array.push(new dynomike.RoyalFlush.SlotSymbol(PIXI.Sprite.fromImage('assets/img/tripleDiamonSlot_TripleDiamond.png'), 5));
                // array = this.shuffle(array);
                var positionY = 0;
                for (var i = 0; i < array.length; i++) {
                    container.addChild(array[i]);
                    array[i].position.y = positionY;
                    positionY += array[i].height + this.SYMBOL_SPACING;
                    if (!this._reelStopPositions.length) {
                        var destY = this._reelStopPositions.push(destY);
                    }
                }
                return container;
            };
            SlotReel.prototype.spin = function (rotations) {
                //this._symbolContainer.position.y = positionY;
                //TweenMax.to(this._symbolContainer, 0.5, { "y": positionY, easing: "easeIn" });
            };
            SlotReel.prototype.shuffle = function (array) {
                var currentIndex = array.length, temporaryValue, randomIndex;
                while (0 !== currentIndex) {
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1;
                    temporaryValue = array[currentIndex];
                    array[currentIndex] = array[randomIndex];
                    array[randomIndex] = temporaryValue;
                }
                return array;
            };
            SlotReel.prototype.rand = function (min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            };
            return SlotReel;
        }(PIXI.Container));
        RoyalFlush.SlotReel = SlotReel;
    })(RoyalFlush = dynomike.RoyalFlush || (dynomike.RoyalFlush = {}));
})(dynomike || (dynomike = {}));
//# sourceMappingURL=SlotReel.js.map