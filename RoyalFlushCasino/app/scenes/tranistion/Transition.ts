module dynomike.RoyalFlush {
    export class Transition extends PIXI.Container {

        private _prevScene: dynomike.RoyalFlush.Scene;
        private _currentScene: dynomike.RoyalFlush.Scene;
        private _newScene: dynomike.RoyalFlush.Scene;

        constructor() {
            super();
        }

        public loadScene(newScene: dynomike.RoyalFlush.Scene) {
            this._prevScene = this._currentScene;

            this._prevScene.pause();

        }

    }
}