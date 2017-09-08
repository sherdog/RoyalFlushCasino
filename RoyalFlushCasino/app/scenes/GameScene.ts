///<reference path="base/Scene.class.ts" />
///<reference path="../slot/base/SlotController.class.ts" />
///<reference path="../../lib/pixi.d.ts" />

module dynomike.RoyalFlush {
    export class GameScene extends Scene {

        private _slotController: dynomike.RoyalFlush.SlotController;

        constructor(app: PIXI.Application) {
            super(app);
            this.onSceneLoaded();
        }

        private onLoadComplete(loader, resources) {
            //Move this to the base scene class, on sceneLoade would be called after all assets were loaded.
        }

        private onSceneLoaded() {

            this._slotController = new dynomike.RoyalFlush.SlotController();
            this.addChild(this._slotController);
            this._slotController.load();

        }

        public update() {
            super.update();
        }

    }
}