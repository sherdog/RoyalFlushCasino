window.onload = function () {
    var sceneManager = dynomike.RoyalFlush.SceneManager;
    var loader = PIXI.loader;
    var resources = PIXI.loader.resources;
    //Create Application
    var app = new PIXI.Application(1170, 768, { backgroundColor: 0x000000 });
    document.body.appendChild(app.view);
    //pass the app to the scenemanager.
    sceneManager.init(app);
    //preload assets
    initializeAssets();
    addEventListener("onStartClicked", function () {
        sceneManager.gotoScene('game');
    });
    function initializeAssets() {
        loader.add('sym1', 'assets/img/symbol_1.png')
            .add('sym2', 'assets/img/symbol_2.png')
            .add('sym3', 'assets/img/symbol_3.png')
            .add('sym4', 'assets/img/symbol_4.png')
            .add('sym5', 'assets/img/symbol_5.png')
            .add('sym6', 'assets/img/symbol_6.png')
            .add('td_singleBar', 'assets/img/tripleDiamonSlot_SingleBar.png')
            .add('td_dblBar', 'assets/img/tripleDiamonSlot_DoubleBar.png')
            .add('td_tplBar', 'assets/img/tripleDiamonSlot_TripleBar.png')
            .add('td_seven', 'assets/img/tripleDiamonSlot_RedSeven.png')
            .add('td_tplDiamond', 'assets/img/tripleDiamonSlot_TripleDiamond.png')
            .add('blueButton', 'assets/img/btnBlue.png')
            .load(onAssetsLoaded);
    }
    function onAssetsLoaded(loader, resources) {
        var game = sceneManager.createScene('game', dynomike.RoyalFlush.GameScene);
        var blank = sceneManager.createScene('fake', dynomike.RoyalFlush.FakeScene);
        var intro = sceneManager.createScene('intro'); //update this to show the intro scene
        sceneManager.gotoScene('game');
    }
};
//# sourceMappingURL=app.js.map