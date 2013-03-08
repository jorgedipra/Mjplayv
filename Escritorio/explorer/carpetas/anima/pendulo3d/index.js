var g = 12;//重力
var t = 0;//time
var dt = 0.001;//時間刻み
var skip = 500;//計算回数
var L = 200;//紐の長さ
var Poll = function(x,y,z){
	this.x = x; this.y = y; this.z = z;//支柱の構造体　Pollを定義
};
var poll = new Poll(0,0,300);//pollオブジェクトの宣言
var Ball = function(x,y,z,vx,vy,vz){ //球の構造体　Ballを定義
	this.x = x; this.y = y; this.z = z;
	this.vx = vx; this.vy = vy; this.vz = vz;
};
var ball = new Ball(0,L,300,0,0,0);


var width, height;
var renderer;
	function initThree() {
		width = document.getElementById('foo').clientWidth;
		height = document.getElementById('foo').clientHeight;
		try {renderer = new THREE.WebGLRenderer({antialias: true});} catch (e) {}
		if(!renderer) document.getElementById("errer").innerHTML = '<p style="text-align:center;font-size:small; color:red">お使いの環境ではWebGLはご利用いただけません。</p>';
		renderer.setSize(width, height);
		document.getElementById('foo').appendChild(renderer.domElement);
		//renderer.setClearColorHex(0xFFFFFF, 1.0);
		renderer.shadowMapEnabled = true;//影をつける（１）
	}
	
	var camera;
	function initCamera() {  
		camera = new THREE.PerspectiveCamera( 50 , width / height , 1 , 10000 );
		camera.up.x = 0;
		camera.up.y = 0;
		camera.up.z = 1;
		camera.position.set(300,700,240);//x,y,z
	}
	var scene;
	function initScene() {
		scene = new THREE.Scene();
	}
	var light, light2;
	function initLight() {
		light = new THREE.DirectionalLight(0xFFFFFF, 1.0, 0);
		light.position.set( 20, 20, 1000 );
		light.castShadow = true;
		scene.add(light);
		
		light2 = new THREE.AmbientLight(0x777777);
		scene.add(light2);
	}
	
	var plane, plane2;
	function initObject(){
		poll.object = new THREE.Mesh(
			new THREE.CubeGeometry(30,30,30),
			new THREE.MeshLambertMaterial({color: 0x03456c, ambient:0x03456c}));
		scene.add(poll.object);
		poll.object.castShadow = true;
		poll.object.position.set(poll.x,poll.y,poll.z);
		
		ball.object = new THREE.Mesh(
			new THREE.SphereGeometry(50,50,50),
			new THREE.MeshLambertMaterial({color: 0x03456c, ambient:0x03456c}));
			scene.add(ball.object);
			ball.object.castShadow = true;


			
		//床の描画
		var yuka_n = 12, yuka_w = 80;//床の個数とサイズ
		for(var i=-yuka_n; i<=yuka_n ; i++){
			for(var j=-yuka_n; j<=yuka_n ; j++){
				if((i+j)%2==0) var plane = new THREE.Mesh(
					new THREE.PlaneGeometry(yuka_w, yuka_w, 1, 1), 
					new THREE.MeshLambertMaterial({color: 0x999999, ambient:0xFF0000}));
					else var plane = new THREE.Mesh(
						new THREE.PlaneGeometry(yuka_w, yuka_w, 1, 1), 
						new THREE.MeshLambertMaterial({color: 0xffffff, ambient:0xFFFFFF}));//ambient パネルカラー
						plane.position.x = j*yuka_w;
						plane.position.y = i*yuka_w;
						plane.receiveShadow = true;
						scene.add(plane);
				}
			}
	}
	
	function loop() {
		for(var i=1; i<=skip; i++ ) ball.RunbleBall();
		t += dt * skip;
		ball.object.position.set(ball.x, ball.y, ball.z);
		//2点間の線を引く
		var geometry = new THREE.Geometry();
		geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( poll.x, poll.y, poll.z) ) );
		geometry.vertices.push( new THREE.Vertex( new THREE.Vector3( ball.x, ball.y, ball.z) ) );
		var line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: "0x03456c", linewidth: 2} ) );
		scene.add( line );//シーンに追加
		camera.lookAt( {x:0, y:0, z:100 } );
		renderer.clear();
		renderer.render(scene, camera);
		scene.remove( line );//シーンから削除
		window.requestAnimationFrame(loop);
	}
	
	var down = false;
	var sy = 0, sz = 0;
	window.onmousedown = function (ev){  //マウスダウン
		if (ev.target == renderer.domElement) {
			down = true;
			sy = ev.clientX; sz = ev.clientY;
		}
	};
	window.onmouseup = function(){       //マウスアップ
		down = false;
	};
	window.onmousemove = function(ev) {  //マウスムーブ
		var speed = 2;
		if (down) {
			if (ev.target == renderer.domElement) {
				var dy = -(ev.clientX - sy);
				var dz = -(ev.clientY - sz);
				camera.position.y += dy*speed;
				camera.position.z -= dz*speed;
				sy -= dy;
				sz -= dz;
			}
		}
	}
	window.onmousewheel = function(ev){//マウスホイール
		var speed = 0.2;
		camera.position.x += ev.wheelDelta * speed ; 
	}
	function threeStart() {
		initThree();
		initCamera();
		initScene();
		initLight();
		initObject();
		loop();
	}

//クラス名.prototype.メソッド名
Ball.prototype.fx = function(t, x, y, z, vx, vy, vz){return vx;}
Ball.prototype.fvx = function(t, x, y, z, vx, vy, vz){
	var l2 = Math.pow(x,2)  + Math.pow(y,2)  + Math.pow(z,2);
	var v2 = Math.pow(vx,2) + Math.pow(vy,2) + Math.pow(vz,2);
	return (g*z-v2) * x / l2 ;
}


Ball.prototype.fy = function(t, x, y, z, vx, vy, vz){return vy;}
Ball.prototype.fvy = function(t, x, y, z, vx, vy, vz){
	var l2 = Math.pow(x,2)  + Math.pow(y,2)  + Math.pow(z,2);
	var v2 = Math.pow(vx,2) + Math.pow(vy,2) + Math.pow(vz,2);
	return (g*z-v2) * y / l2 ;
}


Ball.prototype.fz = function(t, x, y, z, vx, vy, vz){return vz;}
Ball.prototype.fvz = function(t, x, y, z, vx, vy, vz){
	var l2 = Math.pow(x,2)  + Math.pow(y,2)  + Math.pow(z,2);
	var v2 = Math.pow(vx,2) + Math.pow(vy,2) + Math.pow(vz,2);
	return -g + (g*z-v2) * z / l2 ;
}

Ball.prototype.RunbleBall = function(){
	var k1 = new Array(6);
	var k2 = new Array(6);
	var k3 = new Array(6);
	var k4 = new Array(6);
	var x = this.x - poll.x;
	var y = this.y - poll.y;  
	var z = this.z - poll.z;
	var vx = this.vx;
	var vy = this.vy;
	var vz = this.vz;
	
	k1[0]=dt*this.fx(t,x,y,z,vx,vy,vz);
	k1[1]=dt*this.fvx(t,x,y,z,vx,vy,vz);
	k1[2]=dt*this.fy(t,x,y,z,vx,vy,vz);
	k1[3]=dt*this.fvy(t,x,y,z,vx,vy,vz);
	k1[4]=dt*this.fz(t,x,y,z,vx,vy,vz);
	k1[5]=dt*this.fvz(t,x,y,z,vx,vy,vz);

	k2[0]=dt*this.fx(t+dt/2.0, x+k1[0]/2.0,y+k1[2]/2.0,z+k1[4]/2.0,vx+k1[1]/2.0,vy+k1[3]/2.0,vz+k1[5]/2.0);
	k2[1]=dt*this.fvx(t+dt/2.0,x+k1[0]/2.0,y+k1[2]/2.0,z+k1[4]/2.0,vx+k1[1]/2.0,vy+k1[3]/2.0,vz+k1[5]/2.0);
	k2[2]=dt*this.fy(t+dt/2.0, x+k1[0]/2.0,y+k1[2]/2.0,z+k1[4]/2.0,vx+k1[1]/2.0,vy+k1[3]/2.0,vz+k1[5]/2.0);
	k2[3]=dt*this.fvy(t+dt/2.0,x+k1[0]/2.0,y+k1[2]/2.0,z+k1[4]/2.0,vx+k1[1]/2.0,vy+k1[3]/2.0,vz+k1[5]/2.0);
	k2[4]=dt*this.fz(t+dt/2.0, x+k1[0]/2.0,y+k1[2]/2.0,z+k1[4]/2.0,vx+k1[1]/2.0,vy+k1[3]/2.0,vz+k1[5]/2.0);
	k2[5]=dt*this.fvz(t+dt/2.0,x+k1[0]/2.0,y+k1[2]/2.0,z+k1[4]/2.0,vx+k1[1]/2.0,vy+k1[3]/2.0,vz+k1[5]/2.0);

	k3[0]=dt*this.fx(t+dt/2.0, x+k2[0]/2.0,y+k2[2]/2.0,z+k2[4]/2.0,vx+k2[1]/2.0,vy+k2[3]/2.0,vz+k2[5]/2.0);
	k3[1]=dt*this.fvx(t+dt/2.0,x+k2[0]/2.0,y+k2[2]/2.0,z+k2[4]/2.0,vx+k2[1]/2.0,vy+k2[3]/2.0,vz+k2[5]/2.0);
	k3[2]=dt*this.fy(t+dt/2.0, x+k2[0]/2.0,y+k2[2]/2.0,z+k2[4]/2.0,vx+k2[1]/2.0,vy+k2[3]/2.0,vz+k2[5]/2.0);
	k3[3]=dt*this.fvy(t+dt/2.0,x+k2[0]/2.0,y+k2[2]/2.0,z+k2[4]/2.0,vx+k2[1]/2.0,vy+k2[3]/2.0,vz+k2[5]/2.0);
	k3[4]=dt*this.fz(t+dt/2.0, x+k2[0]/2.0,y+k2[2]/2.0,z+k2[4]/2.0,vx+k2[1]/2.0,vy+k2[3]/2.0,vz+k2[5]/2.0);
	k3[5]=dt*this.fvz(t+dt/2.0,x+k2[0]/2.0,y+k2[2]/2.0,z+k2[4]/2.0,vx+k2[1]/2.0,vy+k2[3]/2.0,vz+k2[5]/2.0);

	k4[0]=dt*this.fx(t+dt/2.0, x+k3[0],y+k3[2],z+k3[4],vx+k3[1],vy+k3[3],vz+k3[5]);
	k4[1]=dt*this.fvx(t+dt/2.0,x+k3[0],y+k3[2],z+k3[4],vx+k3[1],vy+k3[3],vz+k3[5]);
	k4[2]=dt*this.fy(t+dt/2.0, x+k3[0],y+k3[2],z+k3[4],vx+k3[1],vy+k3[3],vz+k3[5]);
	k4[3]=dt*this.fvy(t+dt/2.0,x+k3[0],y+k3[2],z+k3[4],vx+k3[1],vy+k3[3],vz+k3[5]);
	k4[4]=dt*this.fz(t+dt/2.0, x+k3[0],y+k3[2],z+k3[4],vx+k3[1],vy+k3[3],vz+k3[5]);
	k4[5]=dt*this.fvz(t+dt/2.0,x+k3[0],y+k3[2],z+k3[4],vx+k3[1],vy+k3[3],vz+k3[5]);

	this.x  +=  (k1[0]+2.0*k2[0]+2.0*k3[0]+k4[0])/6.0;
	this.vx +=  (k1[1]+2.0*k2[1]+2.0*k3[1]+k4[1])/6.0;
	this.y  +=  (k1[2]+2.0*k2[2]+2.0*k3[2]+k4[2])/6.0;
	this.vy +=  (k1[3]+2.0*k2[3]+2.0*k3[3]+k4[3])/6.0;
	this.z  +=  (k1[4]+2.0*k2[4]+2.0*k3[4]+k4[4])/6.0;
	this.vz +=  (k1[5]+2.0*k2[5]+2.0*k3[5]+k4[5])/6.0;
}





/*		2012/06/24
 *		iPhone only touchevent
 * */

function init(){
	//タッチイベント初期化
	document.addEventListener("touchstart", multiTouchHandler, false);
	document.addEventListener("touchmove", multiTouchHandler, false);
	document.addEventListener("touchend", multiTouchHandler, false);
	//ジェスチャーイベント初期化
	document.addEventListener("gesturestart", multiTouchHandler, false);
	document.addEventListener("gesturechange", multiTouchHandler, false);
	document.addEventListener("gestureend", multiTouchHandler, false);
	document.body.style.color = "#03456c";
	
	//	iPhone 横向き
	window.addEventListener("orientationchange",function(){
		alert("this orientation");
	},false);

};
