// forked from ymasuda's "ファミ◯ンコントローラー的なもの" http://jsdo.it/ymasuda/eElb




// --------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------

// 座標と行列を掛け合わせてアファイン変換を行う
function transCoord(pos, mat, x0, y0, z0){
	pos.w = x0 * mat._14 + y0 * mat._24 + z0 * mat._34 + mat._44;
	pos.x = (x0 * mat._11 + y0 * mat._21 + z0 * mat._31 + mat._41) / pos.w;
	pos.y = (x0 * mat._12 + y0 * mat._22 + z0 * mat._32 + mat._42) / pos.w;
}

// 平行移動行列の掛け合わせ
function mulTranslate(mat, x, y, z){
	mat._41 += mat._11 * x + mat._21 * y + mat._31 * z;
	mat._42 += mat._12 * x + mat._22 * y + mat._32 * z;
	mat._43 += mat._13 * x + mat._23 * y + mat._33 * z;
	mat._44 += mat._14 * x + mat._24 * y + mat._34 * z;
}

// y軸中心回転行列の掛け合わせ
function mulMat44RotY(mat, r){
	var c = Math.cos(r);
	var s = Math.sin(r);
	var temp11 = c * mat._11 - s * mat._31;
	var temp12 = c * mat._12 - s * mat._32;
	var temp13 = c * mat._13 - s * mat._33;
	var temp14 = c * mat._14 - s * mat._34;
	var temp31 = s * mat._11 + c * mat._31;
	var temp32 = s * mat._12 + c * mat._32;
	var temp33 = s * mat._13 + c * mat._33;
	var temp34 = s * mat._14 + c * mat._34;
	mat._11 = temp11;
	mat._12 = temp12;
	mat._13 = temp13;
	mat._14 = temp14;
	mat._31 = temp31;
	mat._32 = temp32;
	mat._33 = temp33;
	mat._34 = temp34;
}

// 射影行列作成
function createFrustum(mat, width, height){
	var w = width / height;
	var h = 1;
	var z_near = 1;
	var z_far = 100;
	
	mat._11 = 2 * z_near / w;
	mat._12 = 0;
	mat._13 = 0;
	mat._14 = 0;
	
	mat._21 = 0;
	mat._22 = 2 * z_near / h;
	mat._23 = 0;
	mat._24 = 0;
	
	mat._31 = 0;
	mat._32 = 0;
	mat._33 = (z_far + z_near) / (z_far - z_near);
	mat._34 = 1;
	
	mat._41 = 0;
	mat._42 = 0;
	mat._43 = -2 * z_near * z_far / (z_near - z_far);
	mat._44 = 0;
	
	// 領域変換 [-1 ～ 1, -1 ～ 1] -> [0 ～ w, 0 ～ h]
	mat._11 *= width / 2;
	mat._22 *= height / 2;
	mat._31 += width / 2;
	mat._32 += height / 2;
}

// --------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------

// 線描画
function draw3dLine(context, mat, x0, y0, z0, x1, y1, z1){
	var p1 = new Object();
	var p2 = new Object();
	// 変換行列を用いて 3D -> 2D 変換
	transCoord(p1, mat, x0, z0, y0);
	transCoord(p2, mat, x1, z1, y1);
	// 描画
	context.beginPath();
	context.moveTo(p1.x, p1.y);
	context.lineTo(p2.x, p2.y);
	context.closePath();
	context.stroke();
}

// 色付き床描画
function draw3dPlate(context, mat, x, y, z){
	var p1 = new Object();
	var p2 = new Object();
	var p3 = new Object();
	var p4 = new Object();
	// 変換行列を用いて 3D -> 2D 変換
	transCoord(p1, mat, x + 0, z, y + 0);
	transCoord(p2, mat, x + 0, z, y + 1);
	transCoord(p3, mat, x + 1, z, y + 1);
	transCoord(p4, mat, x + 1, z, y + 0);
	// 描画
	context.beginPath();
	context.moveTo(p1.x, p1.y);
	context.lineTo(p2.x, p2.y);
	context.lineTo(p3.x, p3.y);
	context.lineTo(p4.x, p4.y);
	context.closePath();
}

// ----------------------------------------------------------------

// プレイヤクラス
var Player = function(){
	this.rot = Math.PI * 0.5;
	this.x = 1.5;
	this.y = 1.5;
	this.z = 0;
	this.vz = 0;
	this.size = 32;
	this.action = 0;
	this.point = 0;
	this.score = 0;
	this.flash = 0;
	
	// ---------------- 計算 ----------------
	this.calc = function(ctrl, wrot, lift){
		// キャラクタの方向
		this.action++;
		if     (ctrl.krt && ctrl.kup){this.rot = Math.PI * 1.26 + wrot;}
		else if(ctrl.klt && ctrl.kup){this.rot = Math.PI * 1.74 + wrot;}
		else if(ctrl.klt && ctrl.kdn){this.rot = Math.PI * 0.26 + wrot;}
		else if(ctrl.krt && ctrl.kdn){this.rot = Math.PI * 0.74 + wrot;}
		else if(ctrl.krt){this.rot = Math.PI * 1.00 + wrot;}
		else if(ctrl.kup){this.rot = Math.PI * 1.50 + wrot;}
		else if(ctrl.klt){this.rot = Math.PI * 0.00 + wrot;}
		else if(ctrl.kdn){this.rot = Math.PI * 0.50 + wrot;}
		else{this.action = 0;}
		// キャラクタの移動
		if(this.action > 0){
			this.x += 0.1 * Math.cos(this.rot);
			this.y += 0.1 * Math.sin(this.rot);
			if(this.x > 3.99){this.x = 3.99;}else if(this.x < 0){this.x = 0;}
			if(this.y > 3.99){this.y = 3.99;}else if(this.y < 0){this.y = 0;}
		}
		// ジャンプ
		this.vz -= 0.02;
		var xx = Math.floor(this.x);
		var yy = Math.floor(this.y);
		// 浮遊床に着地確認
		for(var i = 0; i < lift.length; i++){
			if(lift[i].flag && lift[i].z <= this.z && lift[i].z >= this.z + this.vz){
				this.vz = 0.2;
				this.point++;
				if(this.point > this.score){this.score = this.point;}
			}
		}
		// 地面に着地確認
		if(0 <= this.z && 0 >= this.z + this.vz){
			this.vz = 0.2;
			if(this.point > 0){this.flash = 2;}
			this.point = 0;
		}
		// 垂直軸方向の移動
		this.z += this.vz;
	}
	
	// ---------------- 描画 ----------------
	this.draw = function(context, img, mat, wrot){
		// 画像テクスチャ選択 足踏み
		var u = this.action == 0 ? 0 : 1 + Math.floor(this.action / 4) % 4;
		if(u == 4){u = 2;}
		// 画像テクスチャ選択 向き
		var v = Math.floor((wrot - this.rot) / (Math.PI * 0.5) + 1.5);
		while(v < 0){v += 4;}
		v %= 4;
		
		var p1 = new Object();
		// 変換行列を用いて 3D -> 2D 変換
		transCoord(p1, mat, this.x, this.z, this.y);
		var s = -8 / p1.w * this.size;
		// 描画
		context.drawImage(img, u * 32, v * 32, 32, 32, p1.x - s / 2, p1.y - s, s, s);
	}
}

// ----------------------------------------------------------------

// 浮遊床クラス
var Lift = function(){
	this.x = Math.floor(Math.random() * 4);
	this.y = Math.floor(Math.random() * 4);
	this.z = Math.random() * 4;
	this.vz = Math.random() * 0.01 + 0.01;
	this.flag = false;
	
	// ---------------- 計算 ----------------
	this.calc = function(x, y){
		this.z += this.vz;
		if(this.z >= 4){
			this.x = Math.floor(Math.random() * 4);
			this.y = Math.floor(Math.random() * 4);
			this.vz = Math.random() * 0.01 + 0.01;
			this.z = 0;
		}
		this.flag = (this.x == x && this.y == y);
	}
	
	// ---------------- 描画 ----------------
	this.draw = function(context, mat){
		// 描画
		if(this.flag){
			context.strokeStyle = "rgb(255,0,0)";
		}else{
			context.strokeStyle = "rgb(128,0,0)";
		}
		draw3dPlate(context, mat, this.x, this.y, this.z); context.stroke();
	}
}

// -------------------------------- いつもここから --------------------------------
window.onload = function(){
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var ctrl = new controller(canvas);
	var img1 = new Image();
	var img2 = new Image();
	img1.src = "http://jsrun.it/assets/8/q/3/B/8q3B2.png";
	img2.src = "http://jsrun.it/assets/g/e/R/i/geRiG.png";
	img1.loadflag = false;
	img2.loadflag = false;
	img1.onload = function(){img1.loadflag = true;}
	img2.onload = function(){img2.loadflag = true;}
	
	// プレイヤ初期化
	var player = new Player();
	// 浮遊床初期化
	var lift = new Array();
	for(var i = 0; i < 16; i++){lift[i] = new Lift();}
	
	// メインループ
	var wrot = 0;
	var renderScene = function(){
		// ---------------- 計算 ----------------
		if(!ctrl.pause){
			// ワールドの回転
			wrot += Math.PI * 0.01;
			// 浮遊床移動
			var xx = Math.floor(player.x);
			var yy = Math.floor(player.y);
			for(var i = 0; i < lift.length; i++){lift[i].calc(xx, yy);}
			// プレイヤ移動
			player.calc(ctrl, wrot, lift);
		}
		
		// ---------------- 描画 ----------------
		if(player.flash > 0){
			// ミス時のフラッシュ
			context.fillStyle = "rgb(128, 0, 0)";
			context.fillRect(0, 0, canvas.width, canvas.height);
			player.flash--;
		}else{
			// 画面クリア
			context.fillStyle = "rgb(0, 0, 0)";
			context.fillRect(0, 0, canvas.width, canvas.height);
		
			// 変換行列
			var mat = new Object();
			createFrustum(mat, canvas.width, canvas.height);
			mulTranslate(mat, 0, 0, -8);
			mulMat44RotY(mat, wrot);
			mulTranslate(mat, -2, -2, -2);
		
			// 上面描画
			context.strokeStyle = "rgb(255,0,0)";
			draw3dLine(context, mat, 0, 0, 4, 4, 0, 4);
			draw3dLine(context, mat, 0, 1, 4, 4, 1, 4);
			draw3dLine(context, mat, 0, 2, 4, 4, 2, 4);
			draw3dLine(context, mat, 0, 3, 4, 4, 3, 4);
			draw3dLine(context, mat, 0, 4, 4, 4, 4, 4);
			draw3dLine(context, mat, 0, 0, 4, 0, 4, 4);
			draw3dLine(context, mat, 1, 0, 4, 1, 4, 4);
			draw3dLine(context, mat, 2, 0, 4, 2, 4, 4);
			draw3dLine(context, mat, 3, 0, 4, 3, 4, 4);
			draw3dLine(context, mat, 4, 0, 4, 4, 4, 4);
			// 下面描画
			draw3dLine(context, mat, 0, 0, 0, 4, 0, 0);
			draw3dLine(context, mat, 0, 1, 0, 4, 1, 0);
			draw3dLine(context, mat, 0, 2, 0, 4, 2, 0);
			draw3dLine(context, mat, 0, 3, 0, 4, 3, 0);
			draw3dLine(context, mat, 0, 4, 0, 4, 4, 0);
			draw3dLine(context, mat, 0, 0, 0, 0, 4, 0);
			draw3dLine(context, mat, 1, 0, 0, 1, 4, 0);
			draw3dLine(context, mat, 2, 0, 0, 2, 4, 0);
			draw3dLine(context, mat, 3, 0, 0, 3, 4, 0);
			draw3dLine(context, mat, 4, 0, 0, 4, 4, 0);
			// 浮遊床描画
			for(var i = 0; i < lift.length; i++){lift[i].draw(context, mat);}
			// プレイヤがいる地面の塗りつぶし
			context.fillStyle = "rgb(128,0,0)";
			draw3dPlate(context, mat, xx, yy, 0); context.fill();
			draw3dPlate(context, mat, xx, yy, 4); context.fill();
			// プレイヤ描画
			if(img1.loadflag){player.draw(context, img1, mat, wrot);}
		}
		
		// 文字列描画
		context.fillStyle = "rgb(255,0,0)";
		context.font = "12pt Arial";
		context.fillText("point " + player.point, 10, 20);
		context.fillText("score " + player.score, 10, 40);
		
		// キー描画
		if(img2.loadflag){
	//		context.drawImage(img2,   0,  0, 40, 48, 46, canvas.height - 122, 40, 48);
	//		context.drawImage(img2,  48, 40, 40, 48, 46, canvas.height -  58, 40, 48);
	//		context.drawImage(img2,  40,  0, 48, 40, 74, canvas.height -  86, 48, 40);
	//		context.drawImage(img2,   0, 48, 48, 40, 10, canvas.height -  86, 48, 40);
	//		if(ctrl.kup){context.drawImage(img2,  88,  0, 40, 48, 46, canvas.height - 122, 40, 48);}
	//		if(ctrl.kdn){context.drawImage(img2, 136, 40, 40, 48, 46, canvas.height -  58, 40, 48);}
	//		if(ctrl.krt){context.drawImage(img2, 128,  0, 48, 40, 74, canvas.height -  86, 48, 40);}
	//		if(ctrl.klt){context.drawImage(img2,  88, 48, 48, 40, 10, canvas.height -  86, 48, 40);}
		}
		
		setTimeout(renderScene, 40);
	}
	
	// 処理開始
	renderScene();
	
	// ----------------------------------------------------------------
}

// --------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------

// 入力管理クラス
var controller = function(canvas){
	this.kup = false;
	this.kdn = false;
	this.krt = false;
	this.klt = false;
	this.mousex = 0;
	this.mousey = 0;
	
	var touchFlag = false;
	var that = this;
	
	// ----------------------------------------------------------------
	
	this.pause = false;
	document.getElementById('crossKeyUp').onmousedown = function(){that.kup = true;}
	document.getElementById('crossKeyUp').onmouseout = function(){that.kup = false;}
	document.getElementById('crossKeyUp').onmouseup = function(){that.kup = false;}
	document.getElementById('crossKeyRight').onmousedown = function(){that.krt = true;}
	document.getElementById('crossKeyRight').onmouseout = function(){that.krt = false;}
	document.getElementById('crossKeyRight').onmouseup = function(){that.krt = false;}
	document.getElementById('crossKeyDown').onmousedown = function(){that.kdn = true;}
	document.getElementById('crossKeyDown').onmouseout = function(){that.kdn = false;}
	document.getElementById('crossKeyDown').onmouseup = function(){that.kdn = false;}
	document.getElementById('crossKeyLeft').onmousedown = function(){that.klt = true;}
	document.getElementById('crossKeyLeft').onmouseout = function(){that.klt = false;}
	document.getElementById('crossKeyLeft').onmouseup = function(){that.klt = false;}
	document.getElementById('startKey').onmouseup = function(){
		that.pause = ~that.pause;
		console.log(that.pause);
	}
	
	// ----------------------------------------------------------------
	
	// キー押し
	document.onkeydown = function(e){
		var getkey = true;
		switch (e.keyCode){
			case 37: that.klt = true; break;
			case 38: that.kup = true; break;
			case 39: that.krt = true; break;
			case 40: that.kdn = true; break;
			default: getkey = false;
		}
		// キーイベント終了
		if(getkey){
			e.preventDefault();
		}
	};

	// キー離し
	document.onkeyup = function(e){
		var getkey = true;
		switch (e.keyCode){
			case 37: that.klt = false; break;
			case 38: that.kup = false; break;
			case 39: that.krt = false; break;
			case 40: that.kdn = false; break;
			default: getkey = false;
		}
		// キーイベント終了
		if(getkey){
			e.preventDefault();
		}
	};
	
	// ----------------------------------------------------------------
	
	// マウス関数 押下時と移動時の共通処理
	var touchFunc = function(e){
		that.klt = that.kup = that.krt = that.kdn = false;
		var x = that.mousex - 66;
		var y = that.mousey - (canvas.height - 66);
		if(x * x + y * y < 56 * 56){
			if (y < 0 && x < y * y * 0.1 && x > y * y * -0.1){that.kup = true;}
			if (y > 0 && x < y * y * 0.1 && x > y * y * -0.1){that.kdn = true;}
			if (x > 0 && y < x * x * 0.1 && y > x * x * -0.1){that.krt = true;}
			if (x < 0 && y < x * x * 0.1 && y > x * x * -0.1){that.klt = true;}
		}
		
	}
	
	// マウス押下
	canvas.ontouchstart = canvas.onmousedown = function(e){
		touchFlag = true;
		touchFunc(e);
	};
	
	// マウス移動
	canvas.ontouchmove = canvas.onmousemove = function(e){
		var rect = e.target.getBoundingClientRect();
		that.mousex = e.clientX - rect.left;
		that.mousey = e.clientY - rect.top;
		if(touchFlag){touchFunc(e);}
	};
	
	// マウス解放
	canvas.ontouchend = canvas.onmouseup = function(e){
		touchFlag = that.klt = that.kup = that.krt = that.kdn = false;
	};
	
	// ----------------------------------------------------------------
}

// --------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------