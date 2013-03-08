// forked from Hidetaro7's "ParticleGirl!? for Canvas" http://jsdo.it/Hidetaro7/particlegirl

// 擬似lock/unlockで軽量化

// Wonderflで投稿した「ParticleGirl!?」をcanvas+JavaScriptに移植・・・
// と、思いきや、PV3Dを使っていたので3D→2Dに変換、う〜んこりゃ厳しい・・・

var total;
var ctx, container;
var idata, data;
var bodyList = [];
var stageWidth, stageHeight;
var defaultScale = 1200;
var dotSize = 2;
var degree=0;

window.onload = init;

function init() {
  total = particlegirl.length;
  var cvs = document.getElementById("canvas");
  ctx = cvs.getContext("2d");
  stageWidth = cvs.width;
  stageHeight = cvs.height;
  ctx.fillRect(0,0,cvs.width,cvs.height);
  idata = ctx.getImageData(0,0,cvs.width,cvs.height);
  data = idata.data;
  scale = ((stageWidth > stageHeight) ? stageWidth : stageHeight) * 0.5;  
  container = new MyViewport3D();
  parseXML ();
}

function setPixel(x, y){
  if (x >= 0 && x < stageWidth  && y >= 0 && y < stageHeight) {
    var idx = ((x|0) + (y|0) * stageWidth )*4;
    data[idx+0] = 0xff;
    data[idx+1] = 0xad;
    data[idx+2] = 0xf1;
    data[idx+3] = 252;
  }
}
function faidout(){
  for (var i = 3, l = data.length;i < l;i+=4){
    var a = data[i];
    if(a < 253) {
      if (a < 36) {
        data[i] = 0;
      } else if (a < 66) {
        data[i] *= 0.986;
      } else {
        data[i-2] *= 0.8;
        data[i-1] *= 0.8;
        data[i] *= 0.86;
        //data[i] *= 0.98;
      }
    }
  }
}

function parseXML () {
  var p_data = [];//代入用
  var p_body = particlegirl;

  //ボディ部分を3次元座標に分割
  for (var ib = 0 ; ib<total; ib++) {
    p_data = p_body[ib];
    var pb = new Particle();
    pb.x = p_data[0]*defaultScale;
    pb.y = stageHeight-p_data[1]*defaultScale;
    pb.z = p_data[2]*defaultScale;
    container.addChild(pb);
  }
  setInterval(enterframe, 1000/60);
}

function enterframe () {
  ctx.fillStyle = "#000";
  //ctx.globalAlpha = 0.3;
  //ctx.fillRect(0,0,stageWidth, stageHeight);
  degree+=2;
  container.rotationY(degree);
  ctx.putImageData(idata, 0, 0);
  faidout();
}

function Particle () {
  this.x = 0;
  this.y = 0;
  this.z = 0;
}

function MyViewport3D () {
  this.children=[];
  this.addChild = function (p) {
      this.draw3D(p);
      this.children.push(p);
  }
  
  this.rotationY = function (degree) {
    var p;
    var length = this.children.length;
    for (var i = 0 ; i<length; i++) {
      p = this.children[i];
      var oldDeg = Math.atan2(p.z, p.x)*180/Math.PI;
      var newDeg = degree+oldDeg;
      var orginalDistance = Math.sqrt(Math.pow(p.x,2)+Math.pow(p.z,2));
      var newX = Math.cos(newDeg*Math.PI/180)*orginalDistance;
      var newZ = Math.sin(newDeg*Math.PI/180)*orginalDistance;
      var newObj = {x:newX, y:p.y, z:newZ};
      this.draw3D(newObj);
    }
  }
  
  this.draw3D = function (p) {
      var pos_3dX = p.x-(1/(p.z)*10);
      var pos_3dY = p.y-(1/(p.z)*10);
      pos_3dX+=stageWidth/2;
      //ctx.fillStyle = "#ffadf1";
      setPixel(pos_3dX, pos_3dY);
  }
}
