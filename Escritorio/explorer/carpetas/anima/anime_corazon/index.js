// forked from ikotan69's "forked: CreateJS Test" http://jsdo.it/ikotan69/hcP5
// forked from Hiroaki.Komatsu's "CreateJS Test" http://jsdo.it/Hiroaki.Komatsu/q6Sl
var stage;
var mc;
var mousePoint;
var isMove=0;
var rot=0;
var rotCount=0;

window.onload=init;

function init(){
    var canvasObject=document.getElementById('myCanvas');
    stage=new Stage(canvasObject);
    
    //Draw the syake
    mc=new Bitmap("http://art60.photozou.jp/pub/806/2380806/photo/122451001.v1329577938.png");
    mc.regX=mc.image.width/2;
    mc.regY=mc.image.height/2;
    mc.x=canvasObject.width/2;
    mc.y=canvasObject.height/2;
    stage.addChild(mc);
    stage.update();
    mc.onPress=clickHandler;
    
    Ticker.setFPS(60);
    Ticker.addListener(window);
}

n=30;           
msec=50;       
imgsrc="http://art60.photozou.jp/pub/806/2380806/photo/122451001.v1329577938.png"     
wh=18;          
//-------------------------------------------------
for(i=0;i<n;i++){
document.write("<img src='"+imgsrc+"' style='position:absolute;z_index:2;top:-100px;left:-100px;'ID='Hearts"+i+"'>");
}
x=new Array();y=new Array();
for (i=0; i<=n; i++) {x[i] = -100;y[i] = -100; }
function H_move(NNevent){
if(document.all){x[0]=event.x;y[0]=event.y;}else{
x[0]= NNevent.pageX;y[0]= NNevent.pageY;}
}

function H_run(){
for (i=n-1; i>=0; i--){
if(i){x[i] = x[i-1];y[i] = y[i-1];}
if(i<(n/2)){
xh=x[i]+wh*i*Math.cos(i*2*3.14/n+3.14/2);
yh=y[i]-wh*i*Math.sin(i*2*3.14/n+3.14/2);
}else{
xh=x[i]+wh*(n-i)*Math.cos(i*2*3.14/n+3.14/2);
yh=y[i]-wh*(n-i)*Math.sin(i*2*3.14/n+3.14/2);
}
if(document.all){
document.all["Hearts"+i].style.pixelTop = -25+yh+document.body.scrollTop;
document.all["Hearts"+i].style.pixelLeft = -10+xh+document.body.scrollLeft;
}else{
document.getElementById("Hearts"+i).style.top=-25+yh+"px";
document.getElementById("Hearts"+i).style.left=-10+xh+"px";
}}
}
setInterval('H_run()',msec);
document.onmousemove = H_move;/* himajin.moo.jp */