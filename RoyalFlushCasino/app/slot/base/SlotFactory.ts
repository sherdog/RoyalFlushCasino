module dynomike.RoyalFlush {
    export class SlotFactory {
        private slotDict = {};

        constructor() {
            this.initialize();
        }

        private initialize() {
            this.slotDict["tripleDiamond"] = new dynomike.RoyalFlush.TripleDiamond();
            console.log('Initialized slot factory. we have 1 slot ' + this.slotDict["tripleDiamond"]);
        }

        public getSlot(slotName: string) {
            console.log("slot factory get slot called for slot " + slotName);
            if (this.slotDict[slotName]) {
                return this.slotDict[slotName];
            } else { 
                return null;
            }
        }

    }
}