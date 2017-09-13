module dynomike.RoyalFlush {

    export class SceneManager {

        private static scenes: any = {};
        public static currentScene: Scene;
        private static _app: PIXI.Application;

        public static init(app: PIXI.Application) {
            this._app = app;
            this.update();
        }

        public static createScene(id: string, NewScene: new (app: PIXI.Application) => Scene = Scene): Scene {
            if (SceneManager.scenes[id]) return undefined;

            var scene = new NewScene(this._app);
            SceneManager.scenes[id] = scene;
            this._app.stage.addChild(scene);
            return scene;
        }

        private static update() {
            requestAnimationFrame(function () { SceneManager.update() });
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