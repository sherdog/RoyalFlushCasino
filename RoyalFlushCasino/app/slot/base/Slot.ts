module dynomike.RoyalFlush {
    export class Slot extends PIXI.Container {

        private _assetsToLoad = [];
        private _loader: PIXI.loaders.Loader;

        constructor() {
            super();
        }

        public addAsset(name: string = "", path: string) {
            this._assetsToLoad.push([name, path]);
        }

    }
}