module dynomike.RoyalFlush {

    export class SceneManager {

        private static scenes: any = {};
        public static currentScene: Scene;
        private static _renderer;
        private static _app;
        private static _stage;

        public static create(width: number, height: number) {
            if (SceneManager._renderer) return this;

            this._app = new PIXI.Application(width, height, { backgroundColor: 0x1099bb });
            this._renderer = this._app.renderer;
            this._stage = this._app.stage;
            console.log("renderer: " + this._renderer);
            document.body.appendChild(this._app.view);

            requestAnimationFrame(SceneManager.loop);
            return this;
        }

        public static createScene(id: string, NewScene: new () => Scene = Scene): Scene {
            if (SceneManager.scenes[id]) return undefined;

            var scene = new NewScene();
            SceneManager.scenes[id] = scene;
            this._stage.addChild(scene);
            return scene;
        }

        private static loop() {
            requestAnimationFrame(function () { SceneManager.loop() });
            if (!this.currentScene || this.currentScene.isPaused()) return;
            this.currentScene.update();
            this._app.renderer.render(this.currentScene);
        }

        public static gotoScene(id: string): boolean {
            if (SceneManager.scenes[id]) {
                if (SceneManager.currentScene)
                    SceneManager.currentScene.pause();

                SceneManager.currentScene = SceneManager.scenes[id];
                SceneManager.currentScene.resume();

                return true;
            }

            return false;
        }

    }
}