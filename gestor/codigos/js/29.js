var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE html>\n'+'<html>\n'+'<head>\n'+'<meta charset="UTF-8" />\n'+'<title>Transition</title>\n'+'</head>\n'+'<body>\n'+'<div class="container">\n'+'	<div class="info">\n'+'		<h3>MJPlayV</h3>\n'+'       		<p>Entra y dale like<a href="http://mjplay-v.16mb.com/" target="_blank">AQUI</a></p>\n'+'	</div>\n'+'</div>\n'+'<script type="text/javascript" src="http://jsdo.it/TFujinami/Prefixfree/js"></script>\n'+'</body>\n'+'</html>';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' body{\n'+'background: #ebf1f6; /* Old browsers */\n'+'background: -moz-linear-gradient(top,  #ebf1f6 0%, #abd3ee 50%, #89c3eb 51%, #d5ebfb 100%); /* FF3.6+ */\n'+'background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ebf1f6), color-stop(50%,#abd3ee), color-stop(51%,#89c3eb), color-stop(100%,#d5ebfb)); /* Chrome,Safari4+ */\n'+'background: -webkit-linear-gradient(top,  #ebf1f6 0%,#abd3ee 50%,#89c3eb 51%,#d5ebfb 100%); /* Chrome10+,Safari5.1+ */\n'+'background: -o-linear-gradient(top,  #ebf1f6 0%,#abd3ee 50%,#89c3eb 51%,#d5ebfb 100%); /* Opera 11.10+ */\n'+'background: -ms-linear-gradient(top,  #ebf1f6 0%,#abd3ee 50%,#89c3eb 51%,#d5ebfb 100%); /* IE10+ */\n'+'background: linear-gradient(to bottom,  #ebf1f6 0%,#abd3ee 50%,#89c3eb 51%,#d5ebfb 100%); /* W3C */\n'+'filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#ebf1f6", endColorstr="#d5ebfb",GradientType=0 ); /* IE6-9 */\n'+'}\n'+'@import url(http://fonts.googleapis.com/css?family=Molle:400italic);\n'+'@import url(http://fonts.googleapis.com/css?family=Underdog);\n'+'.container {\n'+'	background: url(http://mjplay-v.16mb.com/imagenes/Esescri/editorALL.png) center center no-repeat,url(/imagenes/fondos/fondoC.jpg) top left repeat;\n'+'	border-radius: 50%;\n'+'	box-shadow: inset 0 0 0 16px rgba(0,0,0,.5);\n'+'	cursor: default;\n'+'	height: 220px;\n'+'   margin: 0 auto;\n'+'	position: relative;\n'+'	text-align: center;\n'+'	transition: all 0.4s ease-in-out;\n'+'	width: 220px;\n'+'}\n'+'.container:hover {\n'+'	box-shadow: inset 0 0 0 1px rgba(0,0,0,0);\n'+'}\n'+'.container:hover .info {\n'+'	opacity: 1;\n'+'	transform: scale(1);\n'+'}\n'+'.container:hover .info p {\n'+'	opacity: 1;\n'+'}\n'+'.info {	\n'+'	background: rgba(0, 0, 0, 0.6);\n'+'	border-radius: 50%;\n'+'	height: inherit;\n'+'	opacity: 0;\n'+'	position: absolute;\n'+'	transform: scale(0);\n'+'	transition: all 0.4s ease-in-out;\n'+'	width: inherit;\n'+'}\n'+'.info h3 {\n'+'	color: #fff;\n'+'	font-family: "Underdog", cursive;\n'+'	font-size: 22px;\n'+'	height: 140px;\n'+'	margin: 30px 0 0 0;\n'+'	text-shadow: 0 1px 2px rgba(0, 0, 0, 1);\n'+'	text-transform: uppercase;\n'+'}\n'+'.info p {\n'+'	border-top: 1px solid rgba(255,255,255,0.5);\n'+'	color: #fff;\n'+'	font-size: 12px;\n'+'	font-style: italic;\n'+'	margin: -20px 30px 0;\n'+'	opacity: 0;\n'+'	padding-top: 10px;\n'+'	transition: all 1s ease-in-out;\n'+'}\n'+'.info p a {\n'+'	color: #fff;\n'+'	color: rgba(255,255,255,0.7);\n'+'	display: block;\n'+'	font-family: "Molle", cursive;\n'+'	font-size: 9px;\n'+'	font-style: normal;\n'+'	letter-spacing: 1px;\n'+'	padding-top: 5px;\n'+'	text-decoration: none;\n'+'	text-transform: uppercase;\n'+'}\n'+'.info p a:hover {\n'+'	color: rgba(255,242,34, 0.8);\n'+'}';

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

