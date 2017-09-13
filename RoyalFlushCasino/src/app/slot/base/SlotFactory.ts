module dynomike.RoyalFlush {
    export class SlotFactory {
        private slotDict = {};

        constructor() {
            this.initialize();
        }

        private initialize() {
            console.log('SLotFactory Initialize');
            this.slotDict["tripleDiamond"] = new dynomike.RoyalFlush.TripleDiamond();
        }

        public getSlot(slotName: string) {
            if (this.slotDict[slotName]) {
                return this.slotDict[slotName];
            } else { 
                return null;
            }
        }

    }
}