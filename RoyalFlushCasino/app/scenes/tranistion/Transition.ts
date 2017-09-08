module dynomike.RoyalFlush {
    export class Transition extends PIXI.Container {

        private _app: PIXI.Application;
        private _rect: PIXI.Graphics;
        private _progressText: PIXI.Text;

        constructor(app: PIXI.Application) {
            super();
            this._app = app;
        }

        public startTranition() {
            //of course we'll need to base it make it so these can be customized.

            var screenWidth: number;
            var screenHeight: number;

            screenWidth = this._app.renderer.width;
            screenHeight = this._app.renderer.height;

            this._rect = new PIXI.Graphics();
            this._rect.beginFill(0x000000);
            this._rect.drawRect(0, 0, screenWidth, screenHeight);

            this.addChild(this._rect);
        }

        public updateProgress(totalLoaded: number, totalBytes: number) {

        }

        public onLoadComplete() {
            //remove everything thats not needed.
            this.removeChild(this._rect);
        }
    }
}