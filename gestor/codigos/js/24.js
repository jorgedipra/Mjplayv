var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE html>\n'+'<html lang="es">\n'+'<head>\n'+'<meta charset="utf-8" />\n'+'<title>Corazon css3</title>\n'+'</head>\n'+'<body>\n'+'<div id="background"></div>\n'+'<div id="chest">\n'+'<div class="heart left side top"></div>\n'+'<div class="heart center">&hearts;</div>\n'+'<div class="heart right side"></div>\n'+'</div>\n'+'</body>\n'+'</html>';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' @-webkit-keyframes beat {\n'+' 0% {-webkit-transform: scale(1) rotate(225deg); -webkit-box-shadow:0 0 40px rgba(213,9,60,1);}\n'+' 50% {-webkit-transform: scale(1.1) rotate(225deg); -webkit-box-shadow:0 0 70px rgba(213,9,60,0.6);}\n'+' 100% {-webkit-transform: scale(1) rotate(225deg); -webkit-box-shadow:0 0 40px rgba(213,9,60,1);}\n'+'}\n'+'@-moz-keyframes beat {  \n'+'    0% {-moz-transform: scale(1) rotate(225deg); -moz-box-shadow:0 0 40px rgba(213,9,60,1);}\n'+'    50% {-moz-transform: scale(1.1) rotate(225deg); -moz-box-shadow:0 0 70px rgba(213,9,60,0.6);}\n'+'    100% {-moz-transform: scale(1) rotate(225deg); -moz-box-shadow:0 0 40px rgba(213,9,60,1);}\n'+'}\n'+'@keyframes beat {  \n'+'    0% {transform: scale(1) rotate(225deg); box-shadow:0 0 40px #d5093c;}\n'+'    50% {transform: scale(1.1) rotate(225deg); box-shadow:0 0 70px #d5093c;}\n'+'    100% {transform: scale(1) rotate(225deg); box-shadow:0 0 40px #d5093c;}\n'+'}\n'+'\n'+'#background {\n'+'    position:fixed;\n'+'    top:0;\n'+'    left:0;\n'+'    z-index:-1;\n'+'    width:100%;\n'+'    height:100%;\n'+'    background: #ffa5a5;\n'+'    background: -moz-linear-gradient(top,  #ffa5a5 0%, #ffd3d3 100%);\n'+'    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ffa5a5), color-stop(100%,#ffd3d3));\n'+'    background: -webkit-linear-gradient(top,  #ffa5a5 0%,#ffd3d3 100%);\n'+'    background: linear-gradient(top,  #ffa5a5 0%,#ffd3d3 100%);\n'+'}\n'+'#chest {\n'+'    position:relative;\n'+'    width:500px;\n'+'    height:450px;\n'+'    margin:0 auto;\n'+'}\n'+'.heart {\n'+'    position:absolute;\n'+'    z-index:2;\n'+'    background: -moz-linear-gradient(-180deg,  #F50A45 0%, #d5093c 40%);\n'+'    background: -webkit-gradient(linear, right 50%, left 50%, color-stop(0%,#F50A45), color-stop(40%,#d5093c));\n'+'    background: -webkit-linear-gradient(-180deg,  #F50A45 0%,#d5093c 40%);\n'+'    background: linear-gradient(-180deg,  #F50A45 0%,#d5093c 40%);\n'+'    -webkit-animation: beat 0.7s ease 0s infinite normal;\n'+'    -moz-animation: beat 0.7s ease 0s infinite normal;\n'+'    animation: beat 0.7s ease 0s infinite normal;\n'+'}\n'+'.heart.center {\n'+'    background: -moz-linear-gradient(-45deg,  #B80734 0%, #d5093c 40%);\n'+'    background: -webkit-gradient(linear, left top, right bottom, color-stop(0%,#B80734), color-stop(40%,#d5093c));\n'+'    background: -webkit-linear-gradient(-45deg,  #B80734 0%,#d5093c 40%);\n'+'    background: linear-gradient(-45deg,  #B80734 0%,#d5093c 40%);\n'+'}\n'+'.heart.top {\n'+'    z-index:3;\n'+'}\n'+'.side {\n'+'    top:50px;\n'+'    width:220px;\n'+'    height:220px;\n'+'    -moz-border-radius: 220px;\n'+'    -webkit-border-radius: 220px;\n'+'    border-radius: 220px;\n'+'}\n'+'.center {\n'+'    width:210px;\n'+'    height:210px;\n'+'    bottom:100px;\n'+'    left:145px;\n'+'    font-size:0;\n'+'    text-indent:-9999px;\n'+'}\n'+'.left {\n'+'    left:62px;\n'+'}\n'+'.right {\n'+'    right:62px;\n'+'}@-webkit-keyframes beat {\n'+'    0% {-webkit-transform: scale(1) rotate(225deg); -webkit-box-shadow:0 0 40px rgba(213,9,60,1);}\n'+'    50% {-webkit-transform: scale(1.1) rotate(225deg); -webkit-box-shadow:0 0 70px rgba(213,9,60,0.6);}\n'+'    100% {-webkit-transform: scale(1) rotate(225deg); -webkit-box-shadow:0 0 40px rgba(213,9,60,1);}\n'+'}\n'+'@-moz-keyframes beat {  \n'+'    0% {-moz-transform: scale(1) rotate(225deg); -moz-box-shadow:0 0 40px rgba(213,9,60,1);}\n'+'    50% {-moz-transform: scale(1.1) rotate(225deg); -moz-box-shadow:0 0 70px rgba(213,9,60,0.6);}\n'+'    100% {-moz-transform: scale(1) rotate(225deg); -moz-box-shadow:0 0 40px rgba(213,9,60,1);}\n'+'}\n'+'@keyframes beat {  \n'+'    0% {transform: scale(1) rotate(225deg); box-shadow:0 0 40px #d5093c;}\n'+'    50% {transform: scale(1.1) rotate(225deg); box-shadow:0 0 70px #d5093c;}\n'+'    100% {transform: scale(1) rotate(225deg); box-shadow:0 0 40px #d5093c;}\n'+'}\n'+'\n'+'#background {\n'+'    position:fixed;\n'+'    top:0;\n'+'    left:0;\n'+'    z-index:-1;\n'+'    width:100%;\n'+'   height:100%;\n'+'   background: #ffa5a5;\n'+'   background: -moz-linear-gradient(top,  #ffa5a5 0%, #ffd3d3 100%);\n'+'   background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ffa5a5), color-stop(100%,#ffd3d3));\n'+'   background: -webkit-linear-gradient(top,  #ffa5a5 0%,#ffd3d3 100%);\n'+'   background: linear-gradient(top,  #ffa5a5 0%,#ffd3d3 100%);\n'+'}\n'+'#chest {\n'+'    position:relative;\n'+'    width:500px;\n'+'    height:450px;\n'+'    margin:0 auto;\n'+'}\n'+'.heart {\n'+'    position:absolute;\n'+'    z-index:2;\n'+'    background: -moz-linear-gradient(-180deg,  #F50A45 0%, #d5093c 40%);\n'+'    background: -webkit-gradient(linear, right 50%, left 50%, color-stop(0%,#F50A45), color-stop(40%,#d5093c));\n'+'    background: -webkit-linear-gradient(-180deg,  #F50A45 0%,#d5093c 40%);\n'+'    background: linear-gradient(-180deg,  #F50A45 0%,#d5093c 40%);\n'+'    -webkit-animation: beat 0.7s ease 0s infinite normal;\n'+'    -moz-animation: beat 0.7s ease 0s infinite normal;\n'+'    animation: beat 0.7s ease 0s infinite normal;\n'+'}\n'+'.heart.center {\n'+'    background: -moz-linear-gradient(-45deg,  #B80734 0%, #d5093c 40%);\n'+'    background: -webkit-gradient(linear, left top, right bottom, color-stop(0%,#B80734), color-stop(40%,#d5093c));\n'+'    background: -webkit-linear-gradient(-45deg,  #B80734 0%,#d5093c 40%);\n'+'    background: linear-gradient(-45deg,  #B80734 0%,#d5093c 40%);\n'+'}\n'+'.heart.top {\n'+'    z-index:3;\n'+'}\n'+'.side {\n'+'    top:50px;\n'+'    width:220px;\n'+'    height:220px;\n'+'    -moz-border-radius: 220px;\n'+'    -webkit-border-radius: 220px;\n'+'    border-radius: 220px;\n'+'}\n'+'.center {\n'+'    width:210px;\n'+'    height:210px;\n'+'    bottom:100px;\n'+'    left:145px;\n'+'    font-size:0;\n'+'    text-indent:-9999px;\n'+'}\n'+'.left {\n'+'    left:62px;\n'+'}\n'+'.right {\n'+'    right:62px;\n'+'}';

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

