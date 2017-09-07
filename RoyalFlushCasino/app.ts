window.onload = function () {
    console.log('window onload called');

    var sceneManager = dynomike.RoyalFlush.SceneManager;
    sceneManager.create(1170, 768);

    var game = sceneManager.createScene('game', dynomike.RoyalFlush.GameScene);
    var blank = sceneManager.createScene('blank');

    sceneManager.gotoScene('game');

    var app = new PIXI.Application()
}