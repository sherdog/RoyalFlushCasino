var dynomike;
(function (dynomike) {
    var RoyalFlush;
    (function (RoyalFlush) {
        var SceneManager = (function () {
            function SceneManager() {
            }
            SceneManager.init = function (app) {
                this._app = app;
                this.update();
            };
            SceneManager.createScene = function (id, NewScene) {
                if (NewScene === void 0) { NewScene = RoyalFlush.Scene; }
                if (SceneManager.scenes[id])
                    return undefined;
                var scene = new NewScene(this._app);
                SceneManager.scenes[id] = scene;
                this._app.stage.addChild(scene);
                return scene;
            };
            SceneManager.update = function () {
                requestAnimationFrame(function () { SceneManager.update(); });
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
            return SceneManager;
        }());
        SceneManager.scenes = {};
        RoyalFlush.SceneManager = SceneManager;
    })(RoyalFlush = dynomike.RoyalFlush || (dynomike.RoyalFlush = {}));
})(dynomike || (dynomike = {}));
//# sourceMappingURL=SceneManager.js.map