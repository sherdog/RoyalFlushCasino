module dynomike.RoyalFlush {

    export class SceneManager {

        private static scenes: any = {};
        public static currentScene: Scene;
        public static renderer: PIXI.IRenderer;

        public static create(width: number, height: number) {
            if (SceneManager.renderer) return this;

            SceneManager.renderer = PIXI.autoDetectRenderer(width, height);
            document.body.appendChild(SceneManager.renderer.view);
            requestAnimationFrame(SceneManager.loop);
            return this;
        }

        public static createScene(id: string, NewScene: new () => Scene = Scene): Scene {
            if (SceneManager.scenes[id]) return undefined;

            var scene = new NewScene();
            SceneManager.scenes[id] = scene;
            return scene;
        }

        private static loop() {
            requestAnimationFrame(function () { SceneManager.loop() });

            if (!this.currentScene || this.currentScene.isPaused()) return;
            this.currentScene.update();
            SceneManager.renderer.render(this.currentScene);
        }

        public static gotoScene(id: string): boolean {
            console.log('gotoScene called for id: ' + id)
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