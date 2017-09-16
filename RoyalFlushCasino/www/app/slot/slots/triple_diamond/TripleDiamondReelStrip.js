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
        var TripleDiamondReelStrip = (function (_super) {
            __extends(TripleDiamondReelStrip, _super);
            function TripleDiamondReelStrip() {
                var _this = _super.call(this) || this;
                _this.SYMBOL_SPACING = 25;
                _this._symbols = []; //Array passed in of all symbols
                _this._reelSymbolStopPositions = []; //Array of stop positions id => position
                return _this;
            }
            TripleDiamondReelStrip.prototype.createStrip = function (symbols) {
                if (symbols === void 0) { symbols = []; }
                var spriteArray = [];
                spriteArray[1] = 'assets/img/tripleDiamonSlot_SingleBar.png';
                spriteArray[2] = 'assets/img/tripleDiamonSlot_DoubleBar.png';
                spriteArray[3] = 'assets/img/tripleDiamonSlot_TripleBar.png';
                spriteArray[4] = 'assets/img/tripleDiamonSlot_RedSeven.png';
                spriteArray[5] = 'assets/img/tripleDiamonSlot_TripleDiamond.png';
                var returnArray = [];
                symbols = this.shuffle(symbols);
                for (var i = 0; i < symbols.length; i++) {
                    var img = spriteArray[symbols[i]];
                    var spr = PIXI.Sprite.fromImage(img);
                    var tmpSym = new dynomike.RoyalFlush.SlotSymbol(spr, symbols[i], i);
                    tmpSym.pivot.set(tmpSym.width / 2, tmpSym.height / 2);
                    returnArray.push(tmpSym);
                }
                return returnArray;
            };
            //Returns object with id =>, position;
            TripleDiamondReelStrip.prototype.getStripStopPoints = function () {
                return [];
            };
            //tihis 
            TripleDiamondReelStrip.prototype.getSymbolAt = function (positionNumber) {
            };
            TripleDiamondReelStrip.prototype.animateSymbol = function (id) {
                for (var i = 0; i < this._symbols.length; i++) {
                    if (this._symbols[i].symbolID === id) {
                        this._symbols[i].playAnimation();
                    }
                }
            };
            TripleDiamondReelStrip.prototype.shuffle = function (array) {
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
            return TripleDiamondReelStrip;
        }(PIXI.Container));
        RoyalFlush.TripleDiamondReelStrip = TripleDiamondReelStrip;
    })(RoyalFlush = dynomike.RoyalFlush || (dynomike.RoyalFlush = {}));
})(dynomike || (dynomike = {}));
//# sourceMappingURL=TripleDiamondReelStrip.js.map