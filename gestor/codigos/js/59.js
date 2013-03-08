var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE html>\n'+'<html lang="es">\n'+'<head>\n'+'<meta charset="utf-8" />\n'+'<title>GAME -Animate</title>\n'+'</head>\n'+'<body>\n'+'<div id="atari">\n'+'        <div class="monitor">\n'+'            <div class="canvas">\n'+'                <div class="screen">\n'+'                    <div class="icon">\n'+'                        <div class="side1 side">\n'+'                            <div class="atari1"></div>\n'+'                            <div class="atari2"></div>\n'+'                            <div class="atari3"></div>\n'+'                            <div class="atari4"></div>\n'+'                        </div>\n'+'                        <div class="side2 side">\n'+'                            <div class="atari1"></div>\n'+'                            <div class="atari2"></div>\n'+'                            <div class="atari3"></div>\n'+'                            <div class="atari4"></div>\n'+'                        </div>\n'+'                    </div>\n'+'                    <div class="pong">\n'+'                        <div class="score1 score"></div>\n'+'                        <div class="score2 score"></div>\n'+'                        <div class="player1 player"></div>\n'+'                        <div class="player2 player"></div>\n'+'                        <div class="ball"></div>\n'+'                    </div>\n'+'                    <div class="resolution canvas">\n'+'                        <div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div> <div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div><div class="line"></div>\n'+'                    </div>\n'+'                    <div class="shadow"></div>\n'+'                </div>\n'+'            </div>\n'+'        </div>\n'+'    </div>\n'+'</body>\n'+'</html>\n'+'';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' body {\n'+'background: url(http://mjplay-v.16mb.com/imagenes/fondos/fondoF.png) center fixed;\n'+'background-color:#bbb;\n'+'text-align:center;\n'+'}\n'+'#atari {\n'+'	width: 600px;\n'+'	margin: 0 auto;\n'+'}\n'+'\n'+'#atari .screen, #atari .atari2,#atari .atari4,#atari .line,#atari .line:after,#atari .line:before {\n'+'    background: #111;\n'+'}\n'+'#atari .screen { \n'+'    height: 304px;\n'+'    position: absolute;\n'+'    width:540px;\n'+'}\n'+'#atari .resolution { \n'+'    background: none;\n'+'    margin:0;\n'+'    position: absolute;\n'+'    top:0;\n'+'}\n'+'#atari .inner-shadow {\n'+'    height: 300px;\n'+'    left: 0;\n'+'    position: absolute;\n'+'    top: 0;\n'+'    width: 500px;\n'+'    z-index: 100;\n'+'}\n'+'#atari .line,#atari .line:after,#atari .line:before {\n'+'    height: 1px;\n'+'    margin-bottom: 5px;\n'+'    position: relative;\n'+'    width:530px;\n'+'}\n'+'#atari .line:before,#atari .line:after {\n'+'    content:"#";\n'+'    display: block;\n'+'    margin: 0 none;\n'+'    position: absolute;\n'+'    text-indent:-9999px;\n'+'    top:2px;\n'+'    width:530px;\n'+'}\n'+'#atari .line:after {\n'+'    top:4px;\n'+'}\n'+'#atari .line:nth-child(1),#atari .line:nth-child(1):before,#atari .line:nth-child(1):after,#atari .line:nth-child(2),#atari .line:nth-child(2):before,#atari .line:nth-child(2):after,#atari .line:nth-child(50),#atari .line:nth-child(50):before,#atari .line:nth-child(50):after,#atari .line:nth-child(49),#atari .line:nth-child(49):before,#atari .line:nth-child(49):after{\n'+'    width: 500px;\n'+'}\n'+'#atari .line:nth-child(1),#atari .line:nth-child(2),#atari .line:nth-child(49),#atari .line:nth-child(50) {\n'+'    left:15px;\n'+'}\n'+'#atari .line:nth-child(1){\n'+'    background: transparent;\n'+'}\n'+'#atari .pong {\n'+'    left:20px;\n'+'    position: absolute;\n'+'    top:2px;\n'+'}\n'+'#atari .pong * {\n'+'    background: #fff;\n'+'    position: absolute;\n'+'}\n'+'@-moz-keyframes ball { 0%, 100% { left:30px; top:107px } 30% { left:300px; top:294px } 50% { left:464px; top:192px } 80% { left:198px; top:0px } }\n'+'@-moz-keyframes player1 { 0%, 90%, 100% { top:70px } 30% { top:90px } 50% { top:80px } 80% { top:60px } }\n'+'@-moz-keyframes player2 { 0%, 90%, 100% { top:180px } 30% { top:200px } 50% { top:190px } 80% { top:160px } }\n'+'@-webkit-keyframes ball { 0%, 100% { left:30px; top:107px } 30% { left:300px; top:294px } 50% { left:464px; top:192px } 80% { left:198px; top:0px } }\n'+'@-webkit-keyframes player1 { 0%, 90%, 100% { top:70px } 30% { top:90px } 50% { top:80px } 80% { top:60px } }\n'+'@-webkit-keyframes player2 { 0%, 90%, 100% { top:180px } 30% { top:200px } 50% { top:190px } 80% { top:160px } }\n'+'@keyframes ball { 0%, 100% { left:30px; top:107px } 30% { left:300px; top:294px } 50% { left:464px; top:192px } 80% { left:198px; top:0px } }\n'+'@keyframes player1 { 0%, 90%, 100% { top:70px } 30% { top:90px } 50% { top:80px } 80% { top:60px } }\n'+'@keyframes player2 { 0%, 90%, 100% { top:180px } 30% { top:200px } 50% { top:190px } 80% { top:160px } }\n'+'#atari .pong .ball {\n'+'    -moz-animation: ball 4s linear 0s infinite normal;\n'+'    -webkit-animation: ball 4s linear 0s infinite normal;\n'+'    animation: ball 4s linear 0s infinite normal;\n'+'    height: 6px;\n'+'    left:300px;\n'+'    top:294px;\n'+'    width:6px;\n'+'}\n'+'#atari .pong .player {\n'+'    height: 54px;\n'+'    width:8px;\n'+'}\n'+'#atari .pong .player1 {\n'+'    -moz-animation: player1 4s linear 0s infinite alternate;\n'+'    -webkit-animation: player1 4s linear 0s infinite alternate;\n'+'    animation: player1 4s linear 0s infinite alternate;\n'+'    left: 22px;\n'+'    top: 70px;\n'+'}\n'+'\n'+'#atari .pong .player2 { \n'+'    -moz-animation: player2 4s linear 0s infinite normal;\n'+'    -webkit-animation: player2 4s linear 0s infinite normal;\n'+'    animation: player2 4s linear 0s infinite normal;\n'+'    left:470px;\n'+'    top: 180px;\n'+'}\n'+'#atari .pong .midfield {\n'+'    height: 240px;\n'+'    left: 247px;\n'+'    top:30px;\n'+'    width:6px;\n'+'}\n'+'#atari .icon {\n'+'    height: 200px;\n'+'    left:153px;\n'+'    overflow: hidden;\n'+'    position: absolute;\n'+'    top:52px;\n'+'    width:234px;\n'+'}\n'+'#atari .icon * {\n'+'    position: absolute;\n'+'}\n'+'#atari .side2 {\n'+'    left:234px;\n'+'    position: absolute;\n'+'    top:0px;\n'+'    -o-transform:scalex(-1);\n'+'    -moz-transform:scalex(-1);\n'+'    -ms-transform:scalex(-1);\n'+'    -webkit-transform:scalex(-1);\n'+'    transform:scalex(-1);\n'+'}\n'+'#atari .atari1,.atari3 {\n'+'    background: #fa000f;\n'+'}\n'+'#atari .atari1 {\n'+'    height: 200px;\n'+'    left: 85px;\n'+'    width: 32px;\n'+'}\n'+'#atari .atari2 {\n'+'    height:256px;\n'+'    top:-53px;\n'+'    width:141px}\n'+'#atari .atari2 {\n'+'    border-radius:0 0 141px 141px/256px 256px 256px 256px;\n'+'    left: -34px;\n'+'    top:-22px;\n'+'}\n'+'#atari .atari3 {\n'+'    border-radius:0 0 200px 200px/334px 334px 334px 334px;\n'+'    bottom:0;\n'+'    height: 334px;\n'+'    left:-101px;\n'+'    top:-135px;\n'+'    width:200px;\n'+'}\n'+'#atari .atari4 {\n'+'    border-radius:0 0 183px 183px/239px 239px 239px 239px;\n'+'    height:239px;\n'+'    left:-100px;\n'+'    top:-89px;\n'+'    width:183px;\n'+'}\n'+'/* general styles */\n'+'.canvas { \n'+'    display: block;\n'+'    overflow: hidden;\n'+'    position: relative;\n'+'    top: 0px;\n'+'    text-indent:-9999px;\n'+'    z-index: 10;\n'+'}\n'+'.icon, .icon * {\n'+'    display: block;\n'+'    position: absolute;\n'+'}\n'+'.monitor,\n'+'.monitor .canvas {\n'+'    height: 304px;\n'+'    width:540px;\n'+'}\n'+'.monitor {\n'+'    background: #000;\n'+'    border:30px solid #000;\n'+'    border-radius:20px;\n'+'    float:left;\n'+'    position:relative;\n'+'}\n'+'.monitor:before { /* shadow */\n'+'    box-shadow: 0 360px 10px rgba(0,0,0,0.2);\n'+'    border-radius:50%;\n'+'    content: "#";\n'+'    display: block;\n'+'    height: 20px;\n'+'    left: 30px;\n'+'    position: absolute;\n'+'    text-indent: -9999px;\n'+'    width: 540px;\n'+'}\n'+'.monitor:after { /* shine */\n'+'    background: -webkit-linear-gradient(top left, rgba(255,255,255,0) 60%, rgba(255,255,255,0.2) 60%, rgba(255,255,255,0) 100%);\n'+'	background: -moz-linear-gradient(top left, rgba(255,255,255,0) 60%, rgba(255,255,255,0.2) 60%, rgba(255,255,255,0) 100%);\n'+'	background: linear-gradient(to bottom right, rgba(255,255,255,0) 60%, rgba(255,255,255,0.2) 60%, rgba(255,255,255,0) 100%);\n'+'    border-radius:20px 20px 0 0;\n'+'    height: 364px;\n'+'    content: "#";\n'+'    display: block;\n'+'    position: absolute;\n'+'    right: -30px;\n'+'    text-indent: -9999px;\n'+'    top:-30px;\n'+'    width:600px;\n'+'    z-index: 10;\n'+'}';

var jat = '<script>';
var jaf = '</script>';

var defaultjas =' ';

var old = '';
var oldcss = '';
var oldjas = '';
                        
function init()
{
  window.editbox.document.write(editboxHTML);
  window.editbox.document.close();
  window.editbox.document.f.ta.value = defaultStuff;
  update();
}

function initcss()
{
  window.editboxcss.document.write( editboxCSS );
  window.editboxcss.document.close();
  window.editboxcss.document.f.ta.value = defaultcss;
  update();
}

function initjas()
{
  window.editboxjas.document.write( editboxJAS );
  window.editboxjas.document.close();
  window.editboxjas.document.f.ta.value = defaultjas;
  update();
}

function update()
{
  var textarea = window.editbox.document.f.ta; 
  var textareacss = window.editboxcss.document.f.ta;
  var textareajas = window.editboxjas.document.f.ta;
  
  var d = dynamicframe.document; 
  if (old != textarea.value || oldcss != textareacss.value || oldjas != textareajas.value) {
    old = textarea.value;
    oldcss = textareacss.value; 
    oldjas = textareajas.value; 
    o =  st + oldcss + sf;
    oo =  jat + oldjas + jaf;
    d.open();
    d.write(o);
    d.write(oo);
    d.write(old);
    
    if ( old.replace(/[\r\n]/g,'') == defaultStuff.replace(/[\r\n]/g,''))
      d.write(extraStuff);
    d.close();
  }

  window.setTimeout(update, 150);
} 

function tab(pestana,panel)
	{
		pst 	= document.getElementById(pestana);
		pnl 	= document.getElementById(panel);
		psts	= document.getElementById('tabs').getElementsByTagName('li');
		pnls	= document.getElementById('paneles').getElementsByTagName('div');		
		
		for(i=0; i< psts.length; i++)
		{
			psts[i].className = '';
		}	
		
		pst.className = 'actual';		
		
		for(i=0; i< pnls.length; i++)
		{
			pnls[i].style.display = 'none';
		}	
		
		pnl.style.display = 'block';
	}

