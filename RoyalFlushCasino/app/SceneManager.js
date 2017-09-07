var dynomike;
(function (dynomike) {
    var RoyalFlush;
    (function (RoyalFlush) {
        var SceneManager = /** @class */ (function () {
            function SceneManager() {
            }
            SceneManager.create = function (width, height) {
                if (SceneManager.renderer)
                    return this;
                SceneManager.renderer = PIXI.autoDetectRenderer(width, height);
                document.body.appendChild(SceneManager.renderer.view);
                requestAnimationFrame(SceneManager.loop);
                return this;
            };
            SceneManager.createScene = function (id, NewScene) {
                if (NewScene === void 0) { NewScene = RoyalFlush.Scene; }
                if (SceneManager.scenes[id])
                    return undefined;
                var scene = new NewScene();
                SceneManager.scenes[id] = scene;
                return scene;
            };
            SceneManager.loop = function () {
                requestAnimationFrame(function () { SceneManager.loop(); });
                if (!this.currentScene || this.currentScene.isPaused())
                    return;
                this.currentScene.update();
                SceneManager.renderer.render(this.currentScene);
            };
            SceneManager.gotoScene = function (id) {
                console.log('gotoScene called for id: ' + id);
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