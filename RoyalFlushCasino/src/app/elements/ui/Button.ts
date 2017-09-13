module dynomike.RoyalFlush {
    export class Button extends PIXI.Sprite {

        private _outTexture: PIXI.Texture;
        private _overTexture: PIXI.Texture;
        private _cb: Function;

        constructor(outTexture: PIXI.Texture, overTexture: PIXI.Texture, onClickCallback: Function) {
            super();

            this._cb = onClickCallback;

            this.buttonMode = true;
            this.interactive = true;
            this.interactiveChildren = false;

            this._outTexture = outTexture;
            this._overTexture = overTexture;

            this.texture = this._outTexture;

            this
                .on('pointerover', this.overHandler)
                .on('pointerout', this.outHandler);
        }

        private overHandler(event) {
            this.texture = this._overTexture;
        }

        private outHandler(event) {
            this.texture = this._outTexture;
        }
    }
}