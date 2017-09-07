window.onload = function () {
    console.log('window onload called');

    var sceneManager = dynomike.RoyalFlush.SceneManager;
    sceneManager.create(1170, 768);

    var game = sceneManager.createScene('game', dynomike.RoyalFlush.GameScene);
    var blank = sceneManager.createScene('fake', dynomike.RoyalFlush.FakeScene);
    var intro = sceneManager.createScene('intro'); //update this to show the intro scene

    sceneManager.gotoScene('fake');

    addEventListener("onStartClicked", function () {
        console.log('ON SHIT');
        sceneManager.gotoScene('game');
    });
    
}