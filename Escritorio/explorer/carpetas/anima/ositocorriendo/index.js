// forked from npaka's "HelloEnchant" http://jsdo.it/npaka/HelloEnchant
//enchantの初期化
enchant();

//HTML読み込み完了時に行う処理
window.onload = function() {
    //ゲームオブジェクトの生成
    var game = new Game(320, 320);
    
    //画像の読み込み
    game.preload('http://enchantjs.com/assets/images/chara1.gif');
    
    //画像読み込み完了時に行う処理
    game.onload = function() {
        //スプライトの生成
        var bear = new Sprite(32, 32);
        bear.image = game.assets['http://enchantjs.com/assets/images/chara1.gif'];
        
        //フレーム毎の定期処理
	bear.tick = 0;
	bear.anim = [5,6,7,6];
//        bear.frame=5;
        //表示オブジェクトツリーに追加
        game.rootScene.addChild(bear); 
        bear.addEventListener(Event.ENTER_FRAME, function() {
	    bear.tick ++;
	    bear.frame = bear.anim[bear.tick % 4];
	    //右向き
	    if (bear.scaleX == 1){
            this.x += 3; //3ピクセル移動
	    this.y += 3; //3ピクセル移動
		if(bear.x > 320 -32) bear.scaleX = -1;
	    }
	    //左向き
	    else{
            this.x -= 3; //3ピクセル移動
	    this.y -= 3; //3ピクセル移動
		if (bear.x < 0) bear.scaleX = 1;
	    }
        });
        
    };
    game.start();
};
