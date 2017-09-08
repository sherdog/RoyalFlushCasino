module dynomike.RoyalFlush {
    export class SlotController {

        public STATE_LOADING: string = "GameStateLoading";
        public STATE_SPINNING: string = "GameStateSpinning";
        public STATE_READY: string = "GameStateReady";
        public STAET_PENDING: string = "GameStatePending";
        public STATE_IDLE: string = "GameStateIdle";

        private _isSpinning: boolean;
        private _state: string;

        //
        private _screen: PIXI.DisplayObject;

        constructor(screen: PIXI.DisplayObject) {
            this._screen = screen;
        }

        public loadSlot(slot: string) {
            this._state = this.STATE_LOADING;

        }

        private onSlotLoaded() {
            this._state = this.STATE_READY;

        }

        private onSlotLoadError() {

        }
    }
}