// forked from _moritam's "freenotes ver 0.8" http://jsdo.it/_moritam/wpOo
/*
 * freenote.js
 *
 * This program is licensed under the MIT License.
 * Copyright 2012, _moritam (@moritaniam)
 *
 */
var freenote = function () {
    
    var FRAME_RATE = 60;
    var INTERVAL_TIME = 1000 / FRAME_RATE;
    var DRAW_RATE = 8;				 // 描画のフレームレート（大きいほど描画回数減） 
    var PARTICLE_MAX = 50;			// パーティクルの最大数
    var rippleStep;				// 波紋のステップ幅
    var rippleMaxSize;	// 波紋の最大サイズ
    var waveRange; 		// 波の揺れ幅
    
    var canvas;
    var ctx;
    var r, g, b, c;
    var position;
    var scaleRange;
    var start = false;
    var noteOn = false;
    var playOn = false;
    var holdOn = false;
    var frameCnt = 0;
    
    var p = new WebSynth();		// WebSynthモジュール (by @aike)
    var pitch = 50;
    var wave = 50;
    var delay = 50;
    var fine = 50;
    var enhance = 50;
    var attack = 50;
    var decay = 50;
    var sustain = 50;
    var volume = 50;
    var switchs = {
        btnUp1:false, 
        btnDown1:false, 
        btnUp2:false, 
        btnDown2:false, 
        btnUp3:false, 
        btnDown3:false, 
        btnUp4:false, 
        btnDown4:false, 
        btnUp5:false, 
        btnDown5:false, 
        btnUp6:false, 
        btnDown6:false
    };
    
    var particles = new Array();
    var gradations = new Array();

    /**
	 * 起動
	 */
	init();
    setInterval(update, INTERVAL_TIME);
    
    /**
	 * 初期処理
	 */
    function init(){
        
    	canvas = document.getElementById("c");
        r = 255;
        g = 0;
        b = 0;
        c = 0;
        ctx = canvas.getContext('2d');
        position = {x: 0, y: 0};
        scaleRange = canvas.height / 43;	// 1スケールの幅
        
        document.getElementById("loading").style.display="none";
        ctx.fillStyle = "#00FF00";
        ctx.font = "18px mplus-1p-regular";
		ctx.fillText("Click and stroke me!", 50, 60);
        
        /* WebSynthの初期設定値（基本音）*/
        // OSCILLATOR1OSCILATOR1（ON）  
        p.vco1.set_pitch(pitch);		// Frequency
        p.vco1.set_fine(0);			   		// Fine 
        p.vco1.set_wave(0);				// Wave
        p.vco1.set_gain(50);		 	// Gain
        p.vco1.set_on(1);					// Mixer On
        
        // OSCILLATOR2（OFF）
        p.vco2.set_pitch(50);		// Frequency
        p.vco2.set_fine(0);			   // Fine 
        p.vco2.set_wave(0);			// Wave 
        p.vco2.set_gain(0);			  // Gain
        p.vco2.set_on(0);				// Mixer Off
        
    }
    
    /**
	 * 描画と再生（繰り返し）．
	 */
    function update() {

    	// エフェクト設定値の更新
        if (switchs.btnUp1) pitchUp(); 
        if (switchs.btnDown1) pitchDown();
        if (switchs.btnUp2) waveUp();
        if (switchs.btnDown2) waveDown();
        if (switchs.btnUp3) delayUp();
        if (switchs.btnDown3) delayDown();
        if (switchs.btnUp4) enhanceUp();
        if (switchs.btnDown4) enhanceDown();
        if (switchs.btnUp5) sustainUp();
        if (switchs.btnDown5) sustainDown();
        if (switchs.btnUp6) volumeUp();
        if (switchs.btnDown6) volumeDown();
		
        // クリックされている状態か、HoldがOnの場合再生
        if(noteOn) {
            
            if (!start) {
                // キャンバスをクリア
                ctx.beginPath();
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                start = true;
        	}
        	
            // 円の描画
			if (frameCnt % DRAW_RATE === 0) draw();
            
            // エフェクト値の適用
			effect();
            
            // 再生
            p.play(getScale(position.y));
            frameCnt ++;
            
        } else if(start) {
            
            // 停止
            p.stop();
            // 画面をクリア
            clear();
            frameCnt = 0;
        }
    }
    
    /**
	 * 各パラメータのモニター表示
	 */
    function updateMonitor(func, param) {
    	document.getElementById("function").innerText = func;
        document.getElementById("parameter").innerText = param;
    }
	
    /**
	 * エフェクト値のSysnhesizerへ適用
     */
    function effect() {
		
        // Decay Time -> マウス位置(x)により1〜100まで変化
        p.eg.set_d(position.x / canvas.width * 100); 
        // Filter（Cutoff Frequency） -> マウス位置(x)により1〜100まで変化
        p.filter.set_freq(position.x / canvas.width * 100);
        // エフェクト適用（下部コントローラ）
        p.vco1.set_pitch(pitch);	  // Frequency
        p.vco1.set_wave(wave);	  	// Wave
        p.delay.set(delay);					// Delay
        p.filter.set_q(enhance);	   // Enhance
        p.eg.set_s(sustain);			// Sustain Time
        //p.eg.set_a(attack);				  // Attack Time
        p.volume.set(volume);		  // Master Volume
    }
    
    /** 
      * エフェクト値の変更メソッド
      */
    function pitchUp(){ if (pitch < 100) pitch = pitch + 50; updateMonitor("pitch", pitch); }
    function pitchDown(){ if (pitch > 0) pitch = pitch - 50;  updateMonitor("pitch", pitch); }
    
    function waveUp(){ if (wave < 100) wave = wave + 50; updateMonitor("wave", wave); }
    function waveDown(){ if (wave > 0) wave = wave - 50; updateMonitor("wave", wave); }
    
    function delayUp(){ if (delay < 100) delay = delay+5;  updateMonitor("delay", delay); }
    function delayDown(){ if (delay > 0) delay = delay-5; updateMonitor("delay", delay); }
    
    function fineUp(){ if (fine < 100) fine = fine+5; updateMonitor("fine", fine); }
    function fineDown(){ if (fine > 0) fine = fine-5; updateMonitor("fine", fine); }
    
    function enhanceUp(){ if (enhance < 100) enhance = enhance+5; updateMonitor("enh", enhance); }
    function enhanceDown(){ if (enhance > 0) enhance = enhance-5; updateMonitor("enh", enhance); }
    
    function attackUp(){ if (attack < 100) attack = attack+5; updateMonitor("attack", attack); }
    function attackDown(){ if (attack > 0) attack = attack-5; updateMonitor("attack", attack); }
    
    function decayUp(){ if (decay < 100) decay = decay+5; updateMonitor("decay", decay); }
    function decayDown(){ if (decay > 0) decay = decay-5; updateMonitor("decay", decay); }

    function sustainUp(){ if (sustain < 100) sustain = sustain+5; updateMonitor("sus", sustain); }
    function sustainDown(){ if (sustain > 0) sustain = sustain-5; updateMonitor("sus", sustain); }

    function volumeUp(){ if (volume < 100) volume++; updateMonitor("vol", volume); }
    function volumeDown(){ if (volume > 0) volume--; updateMonitor("vol", volume); }
    
    /**
  	  * マウス位置の更新
      */
    function updateMousePos(e) {
        var rect = e.target.getBoundingClientRect();
        position.x = e.clientX - rect.left;
        position.y = e.clientY - rect.top;
    }
    
    /** 
	  * 画面の描画
	  * @refer http://jsdo.it/matsu4512/mfpp
	  */
    function draw() {
		
        // 最大数を超える場合は古いものを消去
        if (particles.length > PARTICLE_MAX) particles.shift();
        
        // wave値を波の揺れ幅に適用
        waveRange = wave / 5;
        
        // Particleオブジェクトの生成
        var p = new Particle(position.x, position.y, 
		                            Math.random()*waveRange - waveRange/2, Math.random()*waveRange - waveRange/2,
            						position.x / canvas.width * 50,		// 右に行く程半径大
            						Math.random()*255>>0,Math.random()*255>>0,Math.random()*255>>0
                               );
        
        // グラデーションの設定
        gradations[0] = "rgba(" + 255 + "," + 255 + "," + 255 + ",";
        gradations[1] = "rgba(" + 0 + "," + 0 + "," + 0 + ",";
        gradations[2] = "rgba(" + p.r + "," + p.g + "," + p.b + ",";
        ctx.globalCompositeOperation = "lighter";
        
        // 円(Particle)の描画
        ctx.beginPath();
        var gradblur = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
        p.alpha += (p.toAlpha-p.alpha)/4.0;
        if(p.alpha > 1) p.alpha = 1;
        
        gradblur.addColorStop(0,gradations[1]+(p.alpha)+")");
        gradblur.addColorStop(0.4,gradations[1]+(p.alpha)+")");
        gradblur.addColorStop(0.65,gradations[2]+(p.alpha*0.9)+")");
        gradblur.addColorStop(0.65,gradations[0]+(p.alpha)+")");
        gradblur.addColorStop(0.75,gradations[0]+(p.alpha)+")");
        gradblur.addColorStop(0.75,gradations[2]+(p.alpha*0.9)+")");
        gradblur.addColorStop(1,gradations[1]+(p.alpha)+")");
        p.toAlpha = 0;
        ctx.fillStyle = gradblur;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI*2, false);
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        
        if(p.x < -20) p.x = canvas.width+20;
        if(p.y < -20) p.y = canvas.height+20;
        if(p.x > canvas.width+20) p.x = -20;
        if(p.y > canvas.height+20) p.y = -20;

        // Particleの配列に追加
        particles.push(p);
        
        // Ripple (波紋) の描画
        rippleStep = ((canvas.height - position.y)  / canvas.height) * 10 + pitch / 10;	// 波調の長さにY座標とPITCHの値を適用
        rippleMaxSize = 100 + delay;	// 波の大きさにDelay値を適用
        
        for (var i=0; i<particles.length; i++) {
            var obj = particles[i];
            ctx.beginPath();
            ctx.strokeStyle  = "rgba(" + obj.r + "," + obj.g + "," + obj.b + "," + (0.8-obj.size/rippleMaxSize) + ")";
            ctx.arc(obj.x, obj.y, obj.size, 0, Math.PI*2, false);
            ctx.stroke();
            
            obj.size+=rippleStep;
            if (obj.size > rippleMaxSize) {
                particles.splice(i, 1);
                continue;
            }
            // Spring の描画
            spring(p, particles[i]);
        }
        // フェードアウト
        fadeOut(0.12 - delay*0.001);
    }
    
    /**
	 * 画面のクリア
	 */
    function clear() {
    	// Particleを消去（古いものから）
        particles.shift();
        // フェードアウト
		fadeOut(0.12 - delay*0.001);
    }
    
    /**
	  * フェードアウト
	  */
    function fadeOut(alpha) {
        ctx.globalCompositeOperation = "source-over";
		ctx.fillStyle = "rgba(0, 0, 0, " + alpha + ")";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    
    /**
	 * マウス位置(Y)よりスケール(音階)を決定
	 */
    function getScale(positionY) {
        
        var posH = canvas.height - positionY;

        if (0 < posH && posH <= scaleRange * 1) {
            return 0;
        } else if (scaleRange * 1 < posH && posH <= scaleRange * 2) {
            return 1;
        } else if (scaleRange * 2 < posH && posH <= scaleRange * 3) {
            return 2;
        } else if (scaleRange * 3 < posH && posH <= scaleRange * 4) {
            return 3;
        } else if (scaleRange * 4 < posH && posH <= scaleRange * 5) {
            return 4;
        } else if (scaleRange * 5 < posH && posH <= scaleRange * 6) {
            return 5;
        } else if (scaleRange * 6 < posH && posH <= scaleRange * 7) {
            return 6;
        } else if (scaleRange * 7 < posH && posH <= scaleRange * 8) {
            return 7;
        } else if (scaleRange * 8 < posH && posH <= scaleRange * 9) {
            return 8;
        } else if (scaleRange * 9 < posH && posH <= scaleRange * 10) {
            return 9;
        } else if (scaleRange * 10 < posH && posH <= scaleRange * 11) {
            return 10;
        } else if (scaleRange * 11 < posH && posH <= scaleRange * 12) {
            return 11;
        } else if (scaleRange * 12 < posH && posH <= scaleRange * 13) {
            return 12;
        } else if (scaleRange * 13 < posH && posH <= scaleRange * 14) {
            return 13;
        } else if (scaleRange * 14 < posH && posH <= scaleRange * 15) {
            return 14;
        } else if (scaleRange * 15 < posH && posH <= scaleRange * 16) {
            return 15;
        } else if (scaleRange * 16 < posH && posH <= scaleRange * 17) {
            return 16;
        } else if (scaleRange * 17 < posH && posH <= scaleRange * 18) {
            return 17;
        } else if (scaleRange * 18 < posH && posH <= scaleRange * 19) {
            return 18;
        } else if (scaleRange * 19 < posH && posH <= scaleRange * 20) {
            return 19;
        } else if (scaleRange * 20 < posH && posH <= scaleRange * 21) {
            return 20;
        } else if (scaleRange * 21 < posH && posH <= scaleRange * 22) {
            return 21;
        } else if (scaleRange * 22 < posH && posH <= scaleRange * 23) {
            return 22;
        } else if (scaleRange * 23 < posH && posH <= scaleRange * 24) {
            return 23;
        } else if (scaleRange * 24 < posH && posH <= scaleRange * 25) {
            return 24;
        } else if (scaleRange * 25 < posH && posH <= scaleRange * 26) {
            return 25;
        } else if (scaleRange * 26 < posH && posH <= scaleRange * 27) {
            return 26;
        } else if (scaleRange * 27 < posH && posH <= scaleRange * 28) {
            return 27;
        } else if (scaleRange * 28 < posH && posH <= scaleRange * 29) {
            return 28;
        } else if (scaleRange * 29 < posH && posH <= scaleRange * 30) {
            return 29;
        } else if (scaleRange * 30 < posH && posH <= scaleRange * 31) {
            return 30;
        } else if (scaleRange * 31 < posH && posH <= scaleRange * 32) {
            return 31;
        } else if (scaleRange * 32 < posH && posH <= scaleRange * 33) {
            return 32;
        } else if (scaleRange * 33 < posH && posH <= scaleRange * 34) {
            return 33;
        } else if (scaleRange * 34 < posH && posH <= scaleRange * 35) {
            return 34;
        } else if (scaleRange * 35 < posH && posH <= scaleRange * 36) {
            return 35;
        } else if (scaleRange * 36 < posH && posH <= scaleRange * 37) {
            return 36;
        } else if (scaleRange * 37 < posH && posH <= scaleRange * 38) {
            return 37;
        } else if (scaleRange * 38 < posH && posH <= scaleRange * 39) {
            return 38;
        } else if (scaleRange * 39 < posH && posH <= scaleRange * 40) {
            return 39;
        } else if (scaleRange * 40 < posH && posH <= scaleRange * 41) {
            return 40;
        } else if (scaleRange * 41 < posH && posH <= scaleRange * 42) {
            return 41;
        } else if (scaleRange * 42 < posH && posH <= scaleRange * 43) {
            return 42;
        } else if (scaleRange * 43 < posH && posH <= scaleRange * 44) {
            return 43;
        }
    }
    
    /**
	 * Spring の描画
	 * @refer http://jsdo.it/matsu4512/mfpp
	 */
    function spring(b1, b2){
          var dx = b2.x - b1.x;
          var dy = b2.y - b1.y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if(dist < 100){        
            //グラデーションの生成
            var grad = ctx.createLinearGradient(b1.x, b1.y, b2.x, b2.y);
            grad.addColorStop(0,'rgba('+b1.r+','+b1.g+','+b1.b+','+(1-dist/100)+')');
            grad.addColorStop(1,'rgba('+b2.r+','+b2.g+','+b2.b+','+(1-dist/100)+')');
            ctx.strokeStyle = grad;
            //線の描画
            ctx.beginPath();
            ctx.moveTo(b1.x,b1.y);
            ctx.lineTo(b2.x,b2.y);
            ctx.closePath();
            ctx.stroke();
            b1.toAlpha += 0.1;
            b2.toAlpha += 0.1;
            var ax = dx * 0.0075;
            var ay = dy * 0.0075;
            b1.vx += ax / b1.size;
            b1.vy += ay / b1.size;
            b2.vx -= ax / b2.size;
            b2.vy -= ay / b2.size;
      	}
    }

    /*  イベントリスナの登録 
	----------------------------------------*/
    // Canvas
    canvas.addEventListener("mousedown", function(e){
        // 再生
        if (!noteOn) noteOn = true;
        updateMousePos(e);
    }, false); 
    canvas.addEventListener("mouseup", function(e){
        // 停止
        if (!holdOn && noteOn) noteOn = false;
        // hold の場合解除
        if (holdOn) {
            holdOn = false;
            document.getElementById("lbl_hold").innerText = "OFF"; 
            document.getElementById("button_hold").style.backgroundColor = "gray";
        }
        updateMousePos(e);
    }, false);
    canvas.addEventListener("mousemove", function(e){
        updateMousePos(e);
    }, false);
    
    // Canvasのタッチイベント(※スマホ対応したいけどWeb Audio API自体が今無理？)
    canvas.addEventListener("touchstart", function (event) {
        // 再生
        if (!noteOn) noteOn = true;
        updateMousePos(e);
    }, false);
    canvas.addEventListener("touchend", function () {
        // 停止
        if (noteOn) noteOn = false;
        updateMousePos(e);
    }, false);
    canvas.addEventListener("touchmove", function (event) {
        updateMousePos(e);
    }, false);
    
    /** 
* 再生ボタン（サンプル曲の再生）
*/
    document.getElementById("button_play").addEventListener('click', function (e) {
        if (!playOn) {
            document.getElementById("play_stop").innerHTML = "■";
            document.getElementById("button_play").style.backgroundColor = "cyan";
            sample.play();		// 再生
            playOn = true;
            
        } else {
            document.getElementById("play_stop").innerHTML = "▶";
            document.getElementById("button_play").style.backgroundColor = "#00FF00";
            sample.pause();		// 停止
            playOn = false;
        }
    }, false);
    
    /*  エフェクトコントローラ 
	----------------------------------------*/
    
    /** 
    * PITCH
    */
    var buttonUp1 = document.getElementById("button_up_1");
    var buttonDown1 = document.getElementById("button_down_1");
    buttonUp1.addEventListener('mousedown', function(e){ switchs.btnUp1 = true; }, false); 
    buttonUp1.addEventListener('mouseup', function(e){ switchs.btnUp1 = false; }, false); 
    buttonUp1.addEventListener('mouseout', function(e){ switchs.btnUp1 = false; }, false); 
    buttonDown1.addEventListener('mousedown', function(e){ switchs.btnDown1 = true; }, false); 
    buttonDown1.addEventListener('mouseup', function(e){ switchs.btnDown1 = false; }, false); 
    buttonDown1.addEventListener('mouseout', function(e){ switchs.btnDown1 = false; }, false); 
    
    /** 
    * WAVE
    */
    var buttonUp2 = document.getElementById("button_up_2");
    var buttonDown2 = document.getElementById("button_down_2");
    buttonUp2.addEventListener('mousedown', function(e){ switchs.btnUp2 = true; }, false); 
    buttonUp2.addEventListener('mouseup', function(e){ switchs.btnUp2 = false; }, false); 
    buttonUp2.addEventListener('mouseout', function(e){ switchs.btnUp2 = false; }, false); 
    buttonDown2.addEventListener('mousedown', function(e){ switchs.btnDown2 = true; }, false); 
    buttonDown2.addEventListener('mouseup', function(e){ switchs.btnDown2 = false; }, false); 
    buttonDown2.addEventListener('mouseout', function(e){ switchs.btnDown2 = false; }, false); 
    
    /** 
* DELAY
*/
    var buttonUp3 = document.getElementById("button_up_3");
    var buttonDown3 = document.getElementById("button_down_3");
    buttonUp3.addEventListener('mousedown', function(e){ switchs.btnUp3 = true; }, false); 
    buttonUp3.addEventListener('mouseup', function(e){ switchs.btnUp3 = false; }, false); 
    buttonUp3.addEventListener('mouseout', function(e){ switchs.btnUp3 = false; }, false); 
    buttonDown3.addEventListener('mousedown', function(e){ switchs.btnDown3 = true; }, false); 
    buttonDown3.addEventListener('mouseup', function(e){ switchs.btnDown3 = false; }, false); 
    buttonDown3.addEventListener('mouseout', function(e){ switchs.btnDown3 = false; }, false); 
    
    /** 
    * ENHANCE
	*/
    var buttonUp4 = document.getElementById("button_up_4");
    var buttonDown4 = document.getElementById("button_down_4");
    buttonUp4.addEventListener('mousedown', function(e){ switchs.btnUp4 = true; }, false); 
    buttonUp4.addEventListener('mouseup', function(e){ switchs.btnUp4 = false; }, false); 
    buttonUp4.addEventListener('mouseout', function(e){ switchs.btnUp4 = false; }, false); 
    buttonDown4.addEventListener('mousedown', function(e){ switchs.btnDown4 = true; }, false); 
    buttonDown4.addEventListener('mouseup', function(e){ switchs.btnDown4 = false; }, false); 
    buttonDown4.addEventListener('mouseout', function(e){ switchs.btnDown4 = false; }, false); 
    
    /** 
    * SUSTAIN TIME
    */
    var buttonUp5 = document.getElementById("button_up_5");
    var buttonDown5 = document.getElementById("button_down_5");
    buttonUp5.addEventListener('mousedown', function(e){ switchs.btnUp5 = true; }, false); 
    buttonUp5.addEventListener('mouseup', function(e){ switchs.btnUp5 = false; }, false); 
    buttonUp5.addEventListener('mouseout', function(e){ switchs.btnUp5 = false; }, false); 
    buttonDown5.addEventListener('mousedown', function(e){ switchs.btnDown5 = true; }, false); 
    buttonDown5.addEventListener('mouseup', function(e){ switchs.btnDown5 = false; }, false); 
    buttonDown5.addEventListener('mouseout', function(e){ switchs.btnDown5 = false; }, false); 
    
    /** 
    * VOLUME
    */
    var buttonUp6 = document.getElementById("button_up_6");
    var buttonDown6 = document.getElementById("button_down_6");
    buttonUp6.addEventListener('mousedown', function(e){ switchs.btnUp6 = true; }, false); 
    buttonUp6.addEventListener('mouseup', function(e){ switchs.btnUp6 = false; }, false); 
    buttonUp6.addEventListener('mouseout', function(e){ switchs.btnUp6 = false; }, false); 
    buttonDown6.addEventListener('mousedown', function(e){ switchs.btnDown6 = true; }, false); 
    buttonDown6.addEventListener('mouseup', function(e){ switchs.btnDown6 = false; }, false); 
    buttonDown6.addEventListener('mouseout', function(e){ switchs.btnDown6 = false; }, false);     
    
    /** 
    * Hold
    */
    document.getElementById("button_hold").addEventListener('click', function(e){ 
        if (!holdOn) {
            document.getElementById("lbl_hold").innerText = "ON";
            document.getElementById("button_hold").style.backgroundColor = "cyan";
            holdOn = true;
        } else {
            document.getElementById("lbl_hold").innerText = "OFF"; 
            document.getElementById("button_hold").style.backgroundColor = "gray";
            holdOn = false;
            noteOn = false;
        }
    }, false); 
};

/**
  * Particle オブジェクト
  * @refer http://jsdo.it/matsu4512/mfpp
  */
var Particle = function(x,y,vx,vy,size,r,g,b){
    this.r = r;
    this.g = g;
    this.b = b;
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.size = size;
    this.toAlpha=0.0;
    this.alpha = 1.0;
};

/**
  * HTML5 Canvas のサポートチェック
  */
var supportsCanvas = function() {
	return !!document.createElement('canvas').getContext;
};

window.onload = function(){
     if (supportsCanvas()) {
         freenote();
     }
};