// forked from mafy55's "sample2-3-A avatar.enchant.js" http://jsdo.it/mafy55/rBSb
enchant();
window.onload = function(){
    var game = new Game(320, 320);
    //ゲームのフレームレートを設定
    game.fps=16;
    game.preload('http://jsrun.it/assets/q/p/I/f/qpIfe.png',  //背景1
		 'http://jsrun.it/assets/f/c/9/O/fc9Oj.png',  //背景2
		 'http://jsrun.it/assets/h/Q/J/b/hQJbj.png',  //背景3
		 'http://jsrun.it/assets/4/r/h/S/4rhSy.png'); //モンスター
    
    //画像読込み完了時に実行する処理
    game.onload = function(){
	//背景を黒に
	game.rootScene.backgroundColor = '#000000';
	
	//avatar.enchant.jsの背景を描画するクラス AvatarBGを使う
	//avatar.ehchant.jsはjsdoit用に一部カスタマイズしてあるので注意
	var bg = new AvatarBG(1);
	bg.y = 32;
	game.rootScene.addChild(bg);
	
	//キャラを表示
	//Avatar内のコードを変えれば色々なキャラ画像を作る事が可能
	//アバターのカスタマイズは→ http://9leap.net/games/1383/
	chara = new Avatar("2:1:2:2019:21554:2203");
	game.rootScene.addChild(chara);
	chara.scaleX=-1;
	chara.scaleY=1;
	chara.x=80;
	chara.y=120;
	chara.action="stop";
	//キャラのアニメーションは attack, special,damage, dead, run, stop が用意されている
	
	//モンスターの表示
	monster = new AvatarMonster(game.assets['http://jsrun.it/assets/4/r/h/S/4rhSy.png']);
	monster.x=200;
	monster.y=100; 
	game.rootScene.addChild(monster);
	
	//ラベルを生成
	var selectFight = makeSelect("たたかう",320-100);
	
	//たたかうをタッチしたときのイベントを設定
	selectFight.addEventListener(Event.TOUCH_START, function(){
	    chara.action="attack";
	});
	
	var selectDamage = makeSelect2("ダメージ",320-100);
	
	//たたかうをタッチしたときのイベントを設定
	selectDamage.addEventListener(Event.TOUCH_START, function(){
	    chara.action="damage";
	});
	
	var selectDead = makeSelect2("死ぬ",320-80);
	
	//たたかうをタッチしたときのイベントを設定
	selectDead.addEventListener(Event.TOUCH_START, function(){
	    chara.action="dead";
	});
	var selectStop = makeSelect("とまる",320-40);
	
	//とまるをタッチしたときのイベントを設定
	selectStop.addEventListener(Event.TOUCH_START, function(){
	    chara.action="stop";
	});
	
	var selectRun = makeSelect("はしる",320-60);
	
	//走るをタッチしたときのイベントを設定
	selectRun.addEventListener(Event.TOUCH_START, function(){
	    chara.action="run";
	});
	
	var selectSpecial = makeSelect("必殺技",320-80);
	
	//必殺技をタッチしたときのイベントを設定
	selectSpecial.addEventListener(Event.TOUCH_START, function(){
	    chara.action="special";
	});
	
	game.rootScene.addChild(selectFight);
	game.rootScene.addChild(selectRun);
	game.rootScene.addChild(selectStop);
	game.rootScene.addChild(selectSpecial);
	game.rootScene.addChild(selectDamage);
	game.rootScene.addChild(selectDead);
    };
    game.start();
};

//ラベル生成のための関数
function makeSelect(text, y){
    var label = new Label(text);
    label.font = "16px monospace";
    label.y = y;
    label.x = 20;
    label.width = 320;
    label.color="rgb(255,255,255)";
    return label;
}

function makeSelect2(text, y){
    var label = new Label(text);
    label.font = "16px monospace";
    label.y = y;
    label.x = 100;
    label.width = 320;
    label.color="rgb(255,255,255)";
    return label;
}


    
    
    
    