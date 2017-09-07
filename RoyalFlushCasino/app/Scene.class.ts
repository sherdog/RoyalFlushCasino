module dynomike.RoyalFlush {
    export class Scene extends PIXI.Container{
        private paused: boolean = false;
        private updateCallback = function () { };
        protected _app: PIXI.Application;

        constructor(app: PIXI.Application) {
            super();
            this._app = app;
        }

        public onUpdate(updateCallback: () => void) {
            this.updateCallback = updateCallback;
        }

        public update() {
            this.updateCallback();
        }

        public pause() {
            this.paused = true;
        }

        public resume() {
            this.paused = false;
        }

        public isPaused() {
            return this.paused;
        }
    }
}