var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE html>\n'+'<html lang="es">\n'+'<head>\n'+'<meta charset="utf-8" />\n'+'<title>Bottones locos</title>\n'+'</head>\n'+'<body>\n'+'​<div id="cuadro1">\n'+'<p>Soy el boton 1</p>\n'+'</div>\n'+'\n'+'<div id="cuadro2">\n'+'<p>Soy el boton 2</p>\n'+'</div>\n'+'</body>\n'+'</html>';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' body{\n'+'	margin:0 auto;\n'+'	font-family:Verdana, Geneva, sans-serif;\n'+'	font-size:18px;\n'+'	font-weight:bold;\n'+'}\n'+'\n'+'#cuadro1\n'+'{\n'+'	border-radius: 10px;\n'+'	-webkit-border-radius: 10px;\n'+'	-moz-border-radius: 10px;\n'+'	-o-border-radius: 10px;\n'+'	background: #09F;\n'+'	/*Alinea los bloques en linea como si fuera un float:left*/\n'+'	display:inline-block;\n'+'	margin: 1%;\n'+'	padding: 1%;\n'+'	width: 28%;\n'+'	/*Animacion de transision con css3, Tipo de fondo, tiempo y tipo de animacion*/\n'+'	transition: transform 0.5s linear;\n'+'	-webkit-transition: -webkit-transform 0.5s linear;\n'+'	-moz-transition: -moz-transform 0.5s linear;\n'+'	-o-transition: -o-transform 0.5s linear;\n'+'}\n'+'\n'+'\n'+'#cuadro1:hover\n'+'{\n'+'	background:#6CF;\n'+'	position: relative; \n'+'	/*Anima el hover con aumento de tamaño 1.3*/\n'+'	transform: scale(1.3);\n'+'	-webkit-transform: scale(1.3);\n'+'	-moz-transform: scale(1.3);\n'+'	-o-transform: scale(1.3);\n'+'	transition: transform 0.5s linear;\n'+'	-webkit-transition: -webkit-transform 0.5s linear;\n'+'	-moz-transition: -webkit-transform 0.5s linear;\n'+'	-o-transition: -webkit-transform 0.5s linear;\n'+'	/*Hace que siempre que hagamos hover el article quede encima de todos*/\n'+'	z-index: 99;\n'+'	\n'+'}\n'+'\n'+'#cuadro2\n'+'{\n'+'	/*Bordes redondeados*/\n'+'	border-radius: 10px;\n'+'	-webkit-border-radius: 10px;\n'+'	-moz-border-radius: 10px;\n'+'	-o-border-radius: 10px;\n'+'	background: #09F;\n'+'	/*Alinea los bloques en linea como si fuera un float:left*/\n'+'	display:inline-block;\n'+'	margin: 1%;\n'+'	padding: 1%;\n'+'	width: 28%;\n'+'	/*Animacion de transision con css3, Tipo de fondo, tiempo y tipo de animacion*/\n'+'	transition: transform 0.5s linear;\n'+'	-webkit-transition: -webkit-transform 0.5s linear;\n'+'	-moz-transition: -moz-transform 0.5s linear;\n'+'	-o-transition: -o-transform 0.5s linear;\n'+'}\n'+'\n'+'\n'+'#cuadro2:hover\n'+'{\n'+'	background:#6CF;\n'+'	/*Crea una posicion relativa al article para el z-index*/\n'+'	position: relative; \n'+'	/*Animacion que hace girar un bloque dandole una rotacion de 720 grados */\n'+'	transform: rotate(720deg);\n'+'	-webkit-transform: rotate(720deg);\n'+'	-moz-transform: rotate(720deg);\n'+'	-o-transform: rotate(720deg);\n'+'	transition: transform 0.5s linear;\n'+'	-webkit-transition: -webkit-transform 0.5s linear;\n'+'	-moz-transition: -webkit-transform 0.5s linear;\n'+'	-o-transition: -webkit-transform 0.5s linear;\n'+'	/*Hace que siempre que hagamos hover el article quede encima de todos*/\n'+'	z-index: 99;\n'+'	\n'+'}';

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

