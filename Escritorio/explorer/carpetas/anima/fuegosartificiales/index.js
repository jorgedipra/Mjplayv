// forked from yoppa's "Fireworks" http://jsdo.it/yoppa/1kgU
//花火パラメーター
var NUM = 800; //パーティクルの数
var speed = 3.0; //花火の開くスピード
var size = 3.0; //火花の大きさ
var fade = 0.99; //フェードアウトする割合
var gravity = 0.007; //重力の強さ
var length = 6.0; //表示時間(秒)
var color = '#0033ff'; //花火の色

//画面設定
var canvas = document.getElementById('world'); //キャンバス
var ctx = canvas.getContext('2d'); //コンテキスト
var b = document.body;
var d = document.documentElement;
canvas.width = Math.max(b.clientWidth , b.scrollWidth, d.scrollWidth, d.clientWidth);
canvas.height = Math.max(b.clientHeight , b.scrollHeight, d.scrollHeight, d.clientHeight);
	
//パーティクルのパラメータの配列
var speedX = new Array(NUM);
var speedY = new Array(NUM);
var locX = new Array(NUM);
var locY = new Array(NUM);
var radius = new Array(NUM);
var alpha = 1.0;
var frame = 0;

onload = function(){
    setup();
}

//初期設定
function setup(){
    //パーティクルの初期設定
    for(var i = 0; i < NUM; i++){
        //初期値をランダムに設定
        var length = Math.random() * speed;
        var angle = Math.random() * Math.PI * 2.0;
        speedX[i] = Math.cos(angle) * length;
        speedY[i] = Math.sin(angle) * length;
        locX[i] = canvas.width / 2;
        locY[i] = canvas.height / 3;
        radius[i] = Math.random() * size;
    }
    
    //インターバル設定
    setInterval(draw, 1000 / 60);
}

//値の更新と描画
function draw(){
    //くりかえし回数に逹っしていたら終了
    if (frame > length*60) {
	return;
    }
    frame++;
    
    //画面をクリア
    ctx.globalAlpha = 1.0;
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = "rgba(0,0,0,.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    //花火の描画
    ctx.globalCompositeOperation = "lighter";
    alpha *= fade;
    ctx.globalAlpha = alpha;

    //パーティクルの数だけくりかえし
    for(var i = 0; i < NUM; i++){
        //位置を更新
        locX[i] += speedX[i];
        locY[i] += speedY[i];
        speedY[i] += gravity;
        
        //更新した座標で円を描く
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(locX[i], locY[i], radius[i], 0, Math.PI*2.0, true);
        ctx.fill();
    }
}