// forked from gryng02's "SAKURA" http://jsdo.it/gryng02/vWCA
/*
コーディングコンテスト Q vol.2 のエントリー用コードです。
このコードをフォークするとコンテストに参加できます。
http://jsdo.it/event/q/vol2
*/

// 桜の木に宿る「桜姫」
//  "Sakura Hime" dwells in the cherry tree

// 満月の夜
//   風に舞う桜の花びら
//     髪を揺らせて
//       何を想う

// Night of full moon,
//  Cherry blossom petals dancing in the wind.
//   Shaking the hair,
//    What does She think?



//canvas描画
var canvas = document.getElementById('sakura');
var ctx = canvas.getContext('2d');

var sound= new Audio("http://springreen.jp/INDEX/themes/ShunsuiKobo/bg/sakura.mp3");

var sakuras =new Array(300);
for(var i=0;i<300;i++){
    sakuras[i]={
	x:Math.floor(Math.random()*800-800),
	y:Math.floor(Math.random()*465-250),
	degree:Math.floor(Math.random()*360),
	dx:0.5+Math.floor(Math.random()*5)*0.5
    };
}

var click=10;

var mus={x:0,y:0};

function hanabira(x,y,degree,scale){    
    g=ctx.createLinearGradient(0,-14,0,10);
    g.addColorStop(0, 'pink');   
    g.addColorStop(1 , 'white');
    ctx.fillStyle=g;
    
    ctx.save();
    ctx.translate(x,y);
    ctx.scale(scale,scale*Math.abs(Math.cos(degree/180*Math.PI)));
    ctx.rotate(degree/180*Math.PI);
    ctx.beginPath();
    ctx.moveTo(0,-4);
    ctx.lineTo(-2,-6);
    ctx.lineTo(-4,-10);
    ctx.lineTo(-7,-6);
    ctx.lineTo(-8,-2);
    ctx.lineTo(-5,4);
    ctx.lineTo(0,10);
    ctx.lineTo(5,4);
    ctx.lineTo(8,-2);
    ctx.lineTo(7,-6);
    ctx.lineTo(4,-10);
    ctx.lineTo(2,-6);
    ctx.closePath();
    ctx.fill();
    ctx.globalAlpha=0.3;
    ctx.strokeStyle="white";
    ctx.stroke();
    ctx.restore();
}






frame = 0;
var count = 0;
function sakurafubuki(){
    if(frame%30==0){click++;sakuras[click].x=-100;}
    if(frame<3050){
	frame++;
	//背景
	ctx.globalAlpha=0.5;
	ctx.fillStyle='black';
	ctx.fillRect(0,0,500,500);
	//月
	ctx.beginPath();
	ctx.arc(500,0,250,0,2*Math.PI,true);
	ctx.fillStyle="ivory";
	ctx.globalAlpha=frame/3050;
	ctx.fill();
	
	ctx.globalAlpha=1;
        count = 0;
        for(var i=0;i<300;i++){
	    if(click>i){
	        hanabira(sakuras[i].x,sakuras[i].y,frame+sakuras[i].degree,1); 
	        if((sakuras[i].x>0)&&(sakuras[i].x<465)&&(sakuras[i].y>0)&&(sakuras[i].y<465)){
		    count++;
		}
	    }
	    sakuras[i].x = sakuras[i].x + sakuras[i].dx;
	    if(sakuras[i].x>700)sakuras[i].x=0;
	
	    sakuras[i].y +=0.5;
	    if(sakuras[i].y>465)sakuras[i].y=0;
	}
        ctx.fillStyle="pink";
        ctx.fillText('桜姫',50,460);
        ctx.fillText('created by Shunji Nakashima',310,460);
        sakurako(click);
    }
}



canvas.onmousemove = mouseMoveListener;
function mouseMoveListener(e){
    var rect = e.target.getBoundingClientRect();	// 四角形の位置を把握
    mus.x = e.clientX - rect.left;								//四角形の位置を引き算して、canvasの左を0にする
    mus.y = e.clientY- rect.top;							//四角形の位置を引き算して、canvasの上を0にする

/*　マウスが移動すると花びらが増えるようにしたのですが、
余りきれいでないのでやめました
   if(frame%10==0){
	click++;
	sakuras[click].x=mus.x;
	sakuras[click].y=mus.y;
    }
*/
    
}

function tuika(){
    if(frame==0){setInterval(sakurafubuki,30);
		 sound.play();}
    else{
    
    sakuras[click].x	=mus.x-Math.floor(Math.random()*20);
    sakuras[click].y	=mus.y+Math.floor(Math.random()*50)-25;
    sakuras[click+1].x	=mus.x-Math.floor(Math.random()*20);
    sakuras[click+1].y	=mus.y+Math.floor(Math.random()*50)-25;
    sakuras[click+2].x	=mus.x-Math.floor(Math.random()*20);
    sakuras[click+2].y	=mus.y+Math.floor(Math.random()*50)-25;
    sakuras[click+3].x	=mus.x-Math.floor(Math.random()*20);
    sakuras[click+3].y	=mus.y+Math.floor(Math.random()*50)-25;
    sakuras[click+4].x	=mus.x-Math.floor(Math.random()*20);
    sakuras[click+4].y	=mus.y+Math.floor(Math.random()*50)-25;
    sakuras[click+5].x	=mus.x-Math.floor(Math.random()*20);
    sakuras[click+5].y	=mus.y+Math.floor(Math.random()*50)-25;
    click += 5;

/* 左端から花びらを出す場合
    sakuras[click].x =-Math.floor(Math.random())*250-10;
    sakuras[click].y =Math.floor(Math.random()*500);
*/
    }
}




function sakurako(click){
    //頭
    g=ctx.createLinearGradient(100,200,400,450);
    g.addColorStop(0, 'gray');   
    g.addColorStop(1 , 'black');
    ctx.fillStyle=g;
    //後ろ髪
    ctx.beginPath();
    ctx.moveTo(195,250);
    ctx.lineTo(195+Math.abs(Math.sin(frame/50))*count,450);
    ctx.lineTo(305+Math.abs(Math.sin(frame/50))*count*3,450);
    ctx.lineTo(305,250);
    ctx.closePath();
    ctx.fill();
    //頭
    ctx.beginPath();
    ctx.fillStyle=g;
    ctx.arc(250,250,55,0,Math.PI,true);
    ctx.fill();
    //着物
    ctx.beginPath();
    g=ctx.createLinearGradient(200,400,300,500);
    g.addColorStop(0, 'pink');   
    g.addColorStop(1 , 'white');
    ctx.fillStyle=g;
    ctx.beginPath();
    ctx.arc(250,344,45,0,Math.PI,true);
    ctx.fill();
    ctx.fillRect(204,344,92,106);
    //襟元
    ctx.moveTo(240,300);
    ctx.lineTo(250,310);
    ctx.lineTo(260,300);
    ctx.lineTo(220,344);
    ctx.lineTo(204,344);
    ctx.lineTo(260,350);
    ctx.lineTo(260,440);
    ctx.lineTo(260,380);
    ctx.lineTo(280,380);
    ctx.strokeStyle="white";
    ctx.stroke();
    //顔
    ctx.fillStyle='rgb(241,187,147)';
    ctx.beginPath();
    ctx.arc(250,260,40,0,Math.PI,false);
    ctx.fill();
    //目    
    ctx.strokeStyle="black";
    ctx.beginPath();
    ctx.moveTo(220,265);
    ctx.lineTo(240,265);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(280,265);
    ctx.lineTo(260,265);
    ctx.stroke();
    //口   
    ctx.strokeStyle="red";
    ctx.beginPath();
    ctx.moveTo(245,285);
    ctx.lineTo(250,285+Math.floor(frame/1000));
    ctx.lineTo(255,285);
    ctx.stroke();
    
}
	    