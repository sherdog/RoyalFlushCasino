module dynomike.RoyalFlush {
    export class SlotController extends PIXI.Container {

        private _slotfactory: dynomike.RoyalFlush.SlotFactory;

        public STATE_LOADING: string = "GameStateLoading";
        public STATE_SPINNING: string = "GameStateSpinning";
        public STATE_READY: string = "GameStateReady";
        public STAET_PENDING: string = "GameStatePending";
        public STATE_IDLE: string = "GameStateIdle";

        private _isSpinning: boolean;
        private _state: string;

        //
        private _screen: PIXI.DisplayObject;

        constructor() {
            super();

            this._slotfactory = new dynomike.RoyalFlush.SlotFactory();
        }

        public load() {
            console.log("SlotController load called");

            this._slotfactory = new dynomike.RoyalFlush.SlotFactory();
            var slot = this._slotfactory.getSlot(dynomike.RoyalFlush.SlotTypes.SLOT_TRIPLE_DIAMOND);
            this.addChild(slot);
        }

        public loadSlot(slot: string) {
            this._state = this.STATE_LOADING;
            console.log('SlotController is laoding ' + slot);

           
        }

        private onSlotLoaded() {
            this._state = this.STATE_READY;

        }

        private onSlotLoadError() {

        }
    }
}