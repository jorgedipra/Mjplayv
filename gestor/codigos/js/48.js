var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff ='  <!DOCTYPE html>\n'+'<html lang="es">\n'+'<head>\n'+'<meta charset="utf-8" />\n'+'<title>Chrome Logo</title>\n'+'\n'+'</head>\n'+'\n'+'<body>\n'+'\n'+'<div id="trimmer">	\n'+'\n'+'  <div id="colors">\n'+'\n'+' 	<div id="white_shell">\n'+'\n'+' 		<div id="green" class="leaf"></div>\n'+'\n'+'		<div id="yellow" class="leaf"></div>\n'+'\n'+' 		<div id="yellow2" class="leaf"></div>\n'+'\n'+'	 	<div id="red" class="leaf"></div>\n'+'\n'+'		<div id="blue_core"></div>\n'+'\n'+'	</div>\n'+'\n'+'  </div>\n'+'\n'+'</div>\n'+'';

var st = '<style>';
var sf = '</style>';

var defaultcss = '  .leaf{\n'+'\n'+'	height:350px;\n'+'\n'+'	width:272px;\n'+'\n'+'	background: #edcf17;\n'+'\n'+'	-webkit-border-radius:55px 30px 245px 0px;\n'+'\n'+'	-moz-border-radius:55px 30px 245px 0px;\n'+'\n'+'	-o-border-radius:55px 30px 245px 0px;\n'+'\n'+'	border-radius:55px 30px 245px 0px;\n'+'\n'+'	position: absolute;\n'+'\n'+'	opacity:0.97;\n'+'\n'+'	-webkit-transform: rotate(0deg) translate(64px,-0.9258em);\n'+'\n'+'	-moz-transform: rotate(0deg) translate(64px,-0.9258em);\n'+'\n'+'	-o-transform: rotate(0deg) translate(64px,-0.9258em);\n'+'\n'+'	transform: rotate(0deg) translate(64px,-0.9258em);\n'+'\n'+'}\n'+'\n'+'\n'+'\n'+'#yellow{\n'+'\n'+'	z-index:-97;\n'+'\n'+'	background:-webkit-gradient(radial, \n'+'\n'+'	64 64, 279, -147 99, 100, from(#d9a919), to(white), color-stop(.35, #F0D418));\n'+'\n'+'}\n'+'\n'+'#yellow2{\n'+'\n'+'	background:-webkit-gradient(radial, \n'+'\n'+'	64 64, 279, -120 99, 115, from(#d9a919), to(white), color-stop(.35, #F0D418));\n'+'\n'+'	z-index:-94;\n'+'\n'+'	height:79px;\n'+'\n'+'	width:255px;\n'+'\n'+'}\n'+'\n'+'#green{\n'+'\n'+'	background: #44A73D;\n'+'\n'+'	background:-webkit-gradient(radial, \n'+'\n'+'	64 64, 329, -227 299, 100, from(#44A73D), to(white), color-stop(.40, #46ac3f));\n'+'\n'+'	background:-moz-radial-gradient(-100% 45%, circle cover, white 30%, #44A73D 82%);\n'+'\n'+'	-webkit-transform: rotate(120deg) translate(60px,152px);\n'+'\n'+'	-moz-transform: rotate(120deg) translate(60px,152px);\n'+'\n'+'	-o-transform: rotate(120deg) translate(60px,152px);\n'+'\n'+'	transform: rotate(120deg) translate(60px,152px);\n'+'\n'+'	z-index:-96;\n'+'\n'+'}\n'+'\n'+'#red{\n'+'\n'+'	background: #E03e39;\n'+'\n'+'	background:-webkit-gradient(radial, \n'+'\n'+'	164 100, 280, 466 400, 10, from(#e44d40), to(white), color-stop(.25, #df3b3f));\n'+'\n'+'	background:-moz-radial-gradient(160% 60%, white 0%, #e44d40 60%);\n'+'\n'+'	-webkit-transform: rotate(-120deg) translate(206px,73px);\n'+'\n'+'	-moz-transform: rotate(-120deg) translate(206px,73px);\n'+'\n'+'	-o-transform: rotate(-120deg) translate(206px,73px);\n'+'\n'+'	transform: rotate(-120deg) translate(206px,73px);\n'+'\n'+'	z-index:-95;\n'+'\n'+'}\n'+'\n'+'\n'+'\n'+'#blue_core{\n'+'\n'+'		width:180px;\n'+'\n'+'		height:180px;\n'+'\n'+'		-webkit-border-radius:180px;\n'+'\n'+'		-moz-border-radius:180px;\n'+'\n'+'		-o-border-radius:180px;\n'+'\n'+'		border-radius:180px;\n'+'\n'+'		background:#3f67bc;\n'+'\n'+'		background:-webkit-gradient(radial, 90 0, 90, 90 -20, 0, from(#466CC7), to(#72A0CF));\n'+'\n'+'		background:-moz-radial-gradient(50% -80px, circle cover, #89bbef 0%,  #466CC7 60%);\n'+'\n'+'		line-height:180px;\n'+'\n'+'		-webkit-box-shadow: 2px 12px 8px #aaa;\n'+'\n'+'		-moz-box-shadow: 2px 12px 8px #aaa;\n'+'\n'+'		-o-box-shadow: 2px 12px 8px #aaa;\n'+'\n'+'		box-shadow: 2px 12px 8px #aaa;\n'+'\n'+'		/*-webkit-transition:-webkit-transform 5s ease-out;*/\n'+'\n'+'}\n'+'\n'+'#white_shell{\n'+'\n'+'	width:180px;\n'+'\n'+'	height:180px;\n'+'\n'+'	-webkit-border-radius:180px;\n'+'\n'+'	-moz-border-radius:180px;\n'+'\n'+'	-o-border-radius:180px;\n'+'\n'+'	border-radius:180px;\n'+'\n'+'	border:15px solid white;\n'+'\n'+'	vertical-align: middle;\n'+'\n'+'	line-height:180px;\n'+'\n'+'}\n'+'\n'+'#colors{\n'+'\n'+'	-webkit-border-radius:360px;\n'+'\n'+'	-moz-border-radius:360px;\n'+'\n'+'	-o-border-radius:360px;	\n'+'\n'+'	border-radius:360px;\n'+'\n'+'	padding:140px;\n'+'\n'+'	-webkit-box-shadow: 0px 10px 15px #aaa;\n'+'\n'+'	-moz-box-shadow: 0px 10px 15px #aaa;\n'+'\n'+'	-o-box-shadow: 0px 10px 15px #aaa;\n'+'\n'+'	box-shadow: 0px 10px 15px #aaa;\n'+'\n'+'}\n'+'\n'+'#trimmer{\n'+'\n'+'	border:25px solid white;\n'+'\n'+'	-webkit-border-radius:370px;\n'+'\n'+'	-moz-border-radius:370px;\n'+'\n'+'	-o-border-radius:370px;\n'+'\n'+'	border-radius:370px;\n'+'\n'+'	z-index: 100;\n'+'\n'+'	padding:140px;\n'+'\n'+'	padding:0;\n'+'\n'+'	margin:0 30%;\n'+'\n'+'	width:491px;\n'+'\n'+'}\n'+'\n'+'.note{\n'+'\n'+'	color:#666;\n'+'\n'+'	padding-top:20px;\n'+'\n'+'	font-size:small;\n'+'\n'+'}\n'+'\n'+'#trimmer:hover {\n'+'\n'+'	-webkit-transform: rotate(1200deg);		\n'+'\n'+'}\n'+'\n'+'#trimmer:hover #blue_core{\n'+'\n'+'	-webkit-transform: rotate(-1200deg);		\n'+'\n'+'}';

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

