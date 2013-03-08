var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' \n'+'<!DOCTYPE html>\n'+'<html>\n'+'<head>\n'+'<meta charset="UTF-8" />\n'+'<title>Ani-man</title>\n'+'</head>\n'+'<body>\n'+'<div id="page">\n'+'	<div id="choose"></div>\n'+'	<h1>Cabeza</h1>    \n'+'	<input type="checkbox" name="head" id="blink" checked="checked" />Blink<br />\n'+'    <input type="checkbox" name="head" id="lookaround" checked="checked" />Look around<br />\n'+'    <input type="checkbox" name="head" id="lifthead" checked="checked" />Lift head<br />\n'+'    <input type="checkbox" name="head" id="shakehead" checked="checked" />Shake head<br />\n'+'    <h1>bazos</h1>\n'+'    <input type="checkbox" id="leftshoulder" checked="checked" />Left shoulder<br />\n'+'    <input type="checkbox" id="leftarm" checked="checked" />Left arm<br />\n'+'    <input type="checkbox" id="rightshoulder" checked="checked" />Right shoulder<br />\n'+'    <input type="checkbox" id="rightarm" checked="checked" />Right arm<br />\n'+'    <h1>Piernas</h1>\n'+'    <input type="checkbox" id="leftthigh" checked="checked" />Left thigh<br />\n'+'    <input type="checkbox" id="leftleg" checked="checked" />Left leg<br />\n'+'    <input type="checkbox" id="rightthigh" checked="checked" />Right thigh<br />\n'+'    <input type="checkbox" id="rightleg" checked="checked" />Right leg<br />\n'+'    <h1>Cuerpo</h1>\n'+'    <input type="checkbox" id="move" checked="checked" />Move<br />\n'+'    <input type="checkbox" id="rotate" checked="checked" />Rotate<br />\n'+'    \n'+'	<div id="man">\n'+'    	<div id="body">\n'+'        	<div id="head">\n'+'            	<div id="face">\n'+'                    <div id="eye" class="el">   <span></span>   </div>\n'+'                    <div id="eye" class="er">   <span></span>   </div>\n'+'                </div>\n'+'            </div>\n'+'            <div id="arm" class="al">   <div></div>   </div>\n'+'            <div id="arm" class="ar">   <div></div>   </div>\n'+'            <div id="leg" class="ll">   <div></div>   </div>\n'+'            <div id="leg" class="lr">   <div></div>   </div>\n'+'        </div>\n'+'    </div>\n'+'</div>\n'+'</body>\n'+'</html>\n'+'';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' body {\n'+'	margin:0;\n'+'	font-family:Arial, Helvetica, sans-serif;\n'+'	font-size:60%;\n'+'	color:#FFF;\n'+'	background: -webkit-radial-gradient(#FFF, #0081b5);\n'+'    overflow:hidden;\n'+'}\n'+'div {\n'+'	position:absolute;\n'+'}\n'+'p {\n'+'	margin:0;\n'+'}\n'+'h1 {\n'+'	position:relative;\n'+'	margin:15px 0 5px 0;\n'+'	padding-left:10px;\n'+'	width:100px;\n'+'	font-size:170%;\n'+'	font-weight:normal;\n'+'	z-index:1;\n'+'	color:#666;\n'+'	border-bottom:1px solid #666;\n'+'}\n'+'#choose {\n'+'	left:0;\n'+'	height:100%;\n'+'	width:120px;\n'+'	background:rgba(0,0,0,.70);\n'+'	z-index:-1;\n'+'	box-shadow:0 0 5px #000;\n'+'}\n'+'#page {\n'+'    padding-left:10px;\n'+'	height:466px;\n'+'	width:466px;\n'+'	margin-left:-233px;\n'+'	margin-top:-233px;\n'+'	top:50%; left:50%;\n'+'	outline:1px solid #000;\n'+'	overflow:hidden;        \n'+'}\n'+'#man {\n'+'	bottom:20px; right:140px;\n'+'	height:180px;\n'+'	width:100px;\n'+'	-webkit-transform-origin:50% 100%;\n'+'	-webkit-animation:man 4s ease-in-out infinite;\n'+'	-webkit-animation-play-state:paused;\n'+'}\n'+'@-webkit-keyframes man {\n'+'	from {-webkit-transform:rotateZ(0deg);}\n'+'	25%  {-webkit-transform:rotateZ(10deg);}\n'+'	50%  {-webkit-transform:rotateZ(-10deg);}\n'+'	75%  {-webkit-transform:rotateZ(10deg);}\n'+'	to   {-webkit-transform:rotateZ(0deg);}				\n'+'}\n'+'#man div {	\n'+'	border-radius:50%;\n'+'}\n'+'#body {\n'+'	box-shadow:0 0 3px #000;\n'+'	top:40px;\n'+'	left:48px;\n'+'	height:70px;\n'+'	width:10px;\n'+'	background:rgba(0,0,0,.80);\n'+'	-webkit-animation:body 7s ease-in-out infinite;\n'+'	-webkit-animation-play-state:paused;\n'+'}\n'+'@-webkit-keyframes body {\n'+'	from {left:48px;}\n'+'	25%  {left:-42px;}\n'+'	75%  {left:138px;}\n'+'	to   {left:48px;}\n'+'}\n'+'#head {\n'+'	box-shadow:0 0 3px #000;\n'+'	height:40px;\n'+'	width:40px;\n'+'	top:-39px;\n'+'	left:-15px;\n'+'	overflow:hidden;\n'+'	background:rgba(0,0,0,.80);\n'+'	-webkit-animation:head 4s ease-in-out infinite;\n'+'	-webkit-transform-origin:50% 100%;\n'+'	-webkit-animation-play-state:paused;\n'+'}\n'+'@-webkit-keyframes head {\n'+'	from {-webkit-transform:rotateZ(0deg);}\n'+'	25%  {-webkit-transform:rotateZ(20deg);}	\n'+'	75%  {-webkit-transform:rotateZ(-20deg);}	\n'+'	to   {-webkit-transform:rotateZ(0deg);}				\n'+'}\n'+'#head #face {\n'+'	overflow:hidden;\n'+'	border-radius:50%;\n'+'	height:100%;\n'+'	width:100%;\n'+'	-webkit-animation:face 3s ease-in-out infinite;\n'+'	-webkit-animation-play-state:paused;\n'+'}\n'+'@-webkit-keyframes face {\n'+'	from {-webkit-transform:rotateZ(0deg);}\n'+'	25%  {-webkit-transform:rotateZ(20deg);}\n'+'	50%  {-webkit-transform:rotateZ(0deg);}\n'+'	75%  {-webkit-transform:rotateZ(-20deg);}\n'+'	to   {-webkit-transform:rotateZ(0deg);}	\n'+'}\n'+'#leg {\n'+'	box-shadow:0 0 3px #000;\n'+'	top:95%;\n'+'	height:40px;\n'+'	width:5px;\n'+'	background:rgba(0,0,0,.80);\n'+'}\n'+'.ll {\n'+'	left:3px;	\n'+'	-webkit-transform-origin:50% 0;\n'+'	-webkit-animation:ll 4s -0.5s ease-in-out infinite;\n'+'	-webkit-animation-play-state:paused;\n'+'}\n'+'@-webkit-keyframes ll {\n'+'	from {-webkit-transform:rotateZ(30deg);}\n'+'	25%  {-webkit-transform:rotateZ(50deg);}\n'+'	50%  {-webkit-transform:rotateZ(20deg);}\n'+'	75%  {-webkit-transform:rotateZ(40deg);}\n'+'	to   {-webkit-transform:rotateZ(30deg);}\n'+'}\n'+'.lr {\n'+'	right:3px;\n'+'	-webkit-transform:rotateZ(-30deg);\n'+'	-webkit-transform-origin:50% 0;\n'+'	-webkit-animation-play-state:paused;	\n'+'	-webkit-animation:lr 4s ease-in-out infinite;\n'+'}\n'+'@-webkit-keyframes lr {\n'+'	from {-webkit-transform:rotateZ(-30deg);}\n'+'	25%  {-webkit-transform:rotateZ(-50deg);}\n'+'	50%  {-webkit-transform:rotateZ(-20deg);}\n'+'	75%  {-webkit-transform:rotateZ(-40deg);}\n'+'	to   {-webkit-transform:rotateZ(-30deg);}\n'+'}\n'+'#leg div {\n'+'	box-shadow:0 0 3px #000;\n'+'	top:100%;\n'+'	height:100%;\n'+'	width:100%;\n'+'	-webkit-transform-origin:50% 0;	\n'+'	background:rgba(0,0,0,.80);\n'+'}\n'+'.ll div {\n'+'	-webkit-transform:rotateZ(-30deg);\n'+'	-webkit-animation:lld 4s -1.5 ease-in-out infinite;\n'+'	-webkit-animation-play-state:paused;	\n'+'}\n'+'@-webkit-keyframes lld {\n'+'	from {-webkit-transform:rotateZ(-30deg);}\n'+'	25%  {-webkit-transform:rotateZ(-80deg);}\n'+'	50%  {-webkit-transform:rotateZ(-30deg);}\n'+'	75%  {-webkit-transform:rotateZ(-5deg);}\n'+'	to   {-webkit-transform:rotateZ(-30deg);}\n'+'}\n'+'.lr div {\n'+'	-webkit-transform:rotateZ(30deg);\n'+'	-webkit-animation:lrd 4s ease-in-out infinite;\n'+'	-webkit-animation-play-state:paused;	\n'+'}\n'+'@-webkit-keyframes lrd {\n'+'	from {-webkit-transform:rotateZ(30deg);}\n'+'	25%  {-webkit-transform:rotateZ(80deg);}\n'+'	50%  {-webkit-transform:rotateZ(30deg);}\n'+'	75%  {-webkit-transform:rotateZ(5deg);}\n'+'	to   {-webkit-transform:rotateZ(30deg);}\n'+'}\n'+'#arm {\n'+'	box-shadow:0 0 3px #000;\n'+'	top:5px;\n'+'	width:35px;\n'+'	height:4px;\n'+'	background:rgba(0,0,0,.80);\n'+'}\n'+'.al {\n'+'	-webkit-transform-origin:100% 50%;\n'+'	-webkit-animation:al 5s ease-in-out infinite;\n'+'	-webkit-animation-play-state:paused;\n'+'	left:-33px;\n'+'}\n'+'@-webkit-keyframes al {\n'+'	from {-webkit-transform:rotateZ(-60deg);}\n'+'	25%  {-webkit-transform:rotateZ(10deg);}\n'+'	50%  {-webkit-transform:rotateZ(-40deg);}\n'+'	75%  {-webkit-transform:rotateZ(30deg);}\n'+'	to   {-webkit-transform:rotateZ(-60deg);}					\n'+'}\n'+'.ar {\n'+'	-webkit-transform-origin:0 50%;\n'+'	-webkit-animation:ar 5s -1s ease-in-out infinite;\n'+'	-webkit-animation-play-state:paused;\n'+'	right:-33px;\n'+'}\n'+'@-webkit-keyframes ar {\n'+'	from {-webkit-transform:rotateZ(60deg);}\n'+'	25%  {-webkit-transform:rotateZ(-10deg);}\n'+'	50%  {-webkit-transform:rotateZ(40deg);}\n'+'	75%  {-webkit-transform:rotateZ(-30deg);}\n'+'	to   {-webkit-transform:rotateZ(60deg);}					\n'+'}\n'+'#arm div {\n'+'	box-shadow:0 0 3px #000;\n'+'	height:100%;\n'+'	width:100%;	\n'+'	background:rgba(0,0,0,.80);		\n'+'}\n'+'.al div {\n'+'	right:100%;\n'+'	-webkit-transform-origin:100% 50%;\n'+'	-webkit-animation-play-state:paused;\n'+'	-webkit-animation:ald 5s -0.5s ease-in-out infinite;\n'+'}\n'+'@-webkit-keyframes ald {\n'+'	from {-webkit-transform:rotateZ(-50deg);}\n'+'	25%  {-webkit-transform:rotateZ(10deg);}\n'+'	50%  {-webkit-transform:rotateZ(-40deg);}\n'+'	75%  {-webkit-transform:rotateZ(60deg);}\n'+'	to   {-webkit-transform:rotateZ(-50deg);}	\n'+'}\n'+'.ar div {\n'+'	left:100%;\n'+'	-webkit-transform-origin:0 50%;\n'+'	-webkit-animation-play-state:paused;\n'+'	-webkit-animation:ard 5s ease-in-out infinite;\n'+'}\n'+'@-webkit-keyframes ard {\n'+'	from {-webkit-transform:rotateZ(50deg);}\n'+'	25%  {-webkit-transform:rotateZ(-10deg);}\n'+'	50%  {-webkit-transform:rotateZ(40deg);}\n'+'	75%  {-webkit-transform:rotateZ(-60deg);}\n'+'	to   {-webkit-transform:rotateZ(50deg);}	\n'+'}\n'+'#eye {	\n'+'	height:15px;\n'+'	width:15px;\n'+'	border-radius:50%;\n'+'}\n'+'#eye span {\n'+'	display:block;\n'+'	position:absolute;\n'+'	height:100%;\n'+'	width:100%;\n'+'	background:#FFF;\n'+'	box-shadow:0 0 3px #FFF;\n'+'	border-radius:50%;	\n'+'}\n'+'.el span {\n'+'	-webkit-animation:eyespan 1.5s ease-in-out infinite;\n'+'	-webkit-animation-play-state:paused;\n'+'}\n'+'.er span {\n'+'	-webkit-animation:eyespan 1.5s 0.1s ease-in-out infinite;\n'+'	-webkit-animation-play-state:paused;	\n'+'}\n'+'@-webkit-keyframes eyespan {\n'+'	from {height:100%; top:0;}\n'+'	10%  {height:0; top:50%;}\n'+'	20%  {height:100%; top:0;}\n'+'	to   {height:100%; top:0;}\n'+'}\n'+'.el {\n'+'	left:3px; top:10px;\n'+'	-webkit-animation:el 6s ease-in-out infinite;\n'+'	-webkit-animation-play-state:paused;	\n'+'}\n'+'@-webkit-keyframes el {\n'+'	from {left:3px; top:10px;}\n'+'	30%  {left:25px; top:10px;}\n'+'	50%  {left:3px; top:20px;}\n'+'	60%  {left:3px; top:10px;}\n'+'	80%  {left:-22px; top:10px;}\n'+'	to   {left:3px; top:10px;}\n'+'}\n'+'.er {\n'+'	right:3px; top:10px;\n'+'	-webkit-animation:er 6s ease-in-out infinite;\n'+'	-webkit-animation-play-state:paused;\n'+'}\n'+'@-webkit-keyframes er {\n'+'	from {right:3px; top:10px;}\n'+'	30%  {right:-22px; top:10px;}\n'+'	50%  {right:3px; top:20px;}\n'+'	60%  {right:3px; top:10px;}\n'+'	80%  {right:25px; top:10px;}\n'+'	to   {right:3px; top:10px;}\n'+'}\n'+'\n'+'\n'+'\n'+'\n'+'\n'+'/*----------------ANIMATION----------------*/\n'+'#blink:checked ~ #man #body #head #face #eye span {-webkit-animation-play-state:running;}\n'+'#lookaround:checked ~ #man #body #head #face div {-webkit-animation-play-state:running;}\n'+'#lifthead:checked ~ #man #body #head #face {-webkit-animation-play-state:running;}\n'+'#shakehead:checked ~ #man #body #head {-webkit-animation-play-state:running;}\n'+'\n'+'#leftshoulder:checked ~ #man #body .al {-webkit-animation-play-state:running;}\n'+'#leftarm:checked ~ #man #body .al div {-webkit-animation-play-state:running;}\n'+'#rightshoulder:checked ~ #man #body .ar {-webkit-animation-play-state:running;}\n'+'#rightarm:checked ~ #man #body .ar div {-webkit-animation-play-state:running;}\n'+'\n'+'#leftthigh:checked ~ #man #body .ll {-webkit-animation-play-state:running;}\n'+'#leftleg:checked ~ #man #body .ll div {-webkit-animation-play-state:running;}\n'+'#rightthigh:checked ~ #man #body .lr {-webkit-animation-play-state:running;}\n'+'#rightleg:checked ~ #man #body .lr div {-webkit-animation-play-state:running;}\n'+'\n'+'#move:checked ~ #man #body {-webkit-animation-play-state:running;}\n'+'#rotate:checked ~ #man {-webkit-animation-play-state:running;}';

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

