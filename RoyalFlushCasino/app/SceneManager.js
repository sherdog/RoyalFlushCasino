var dynomike;
(function (dynomike) {
    var RoyalFlush;
    (function (RoyalFlush) {
        var SceneManager = /** @class */ (function () {
            function SceneManager() {
            }
            SceneManager.create = function (width, height) {
                if (SceneManager._renderer)
                    return this;
                this._app = new PIXI.Application(width, height, { backgroundColor: 0x1099bb });
                this._renderer = this._app.renderer;
                this._stage = this._app.stage;
                console.log("renderer: " + this._renderer);
                document.body.appendChild(this._app.view);
                requestAnimationFrame(SceneManager.loop);
                return this;
            };
            SceneManager.createScene = function (id, NewScene) {
                if (NewScene === void 0) { NewScene = RoyalFlush.Scene; }
                if (SceneManager.scenes[id])
                    return undefined;
                var scene = new NewScene();
                SceneManager.scenes[id] = scene;
                this._stage.addChild(scene);
                return scene;
            };
            SceneManager.loop = function () {
                requestAnimationFrame(function () { SceneManager.loop(); });
                if (!this.currentScene || this.currentScene.isPaused())
                    return;
                this.currentScene.update();
                this._app.renderer.render(this.currentScene);
            };
            SceneManager.gotoScene = function (id) {
                if (SceneManager.scenes[id]) {
                    if (SceneManager.currentScene)
                        SceneManager.currentScene.pause();
                    SceneManager.currentScene = SceneManager.scenes[id];
                    SceneManager.currentScene.resume();
                    return true;
                }
                return false;
            };
            SceneManager.scenes = {};
            return SceneManager;
        }());
        RoyalFlush.SceneManager = SceneManager;
    })(RoyalFlush = dynomike.RoyalFlush || (dynomike.RoyalFlush = {}));
})(dynomike || (dynomike = {}));
//# sourceMappingURL=SceneManager.js.map