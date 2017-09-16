window.onload = function () {

    var sceneManager = dynomike.RoyalFlush.SceneManager;
    var loader = PIXI.loader;
    var resources = PIXI.loader.resources;

    //Create Application
    var app = new PIXI.Application(1170, 768, { backgroundColor: 0x000000 });
    document.body.appendChild(app.view);

    var meter = new FPSMeter();
    var tick: PIXI.ticker.Ticker = new PIXI.ticker.Ticker();
    tick.add(onTick);
    tick.start();
    //pass the app to the scenemanager.
    sceneManager.init(app);

    //preload assets
    initializeAssets();

    addEventListener("onStartClicked", function () {
        sceneManager.gotoScene('game');
    });

    function onTick() {
        meter.tickStart();
        meter.tick();
    }

    function initializeAssets() {

        loader.add('td_singleBar', 'assets/img/tripleDiamonSlot_SingleBar.png')
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

   

}