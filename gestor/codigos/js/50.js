var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE html>\n'+'<html>\n'+'<head>\n'+'<meta charset="UTF-8" />\n'+'<title>TEXT shadow</title>\n'+'<meta name="Description" content="Una manera de usar text-shadow" />\n'+'<meta name="Keywords"  content="text-shadow" />\n'+'</head>\n'+'<body>\n'+'<p class="more-hageshii">Text-shadow</p>\n'+'<p class="hageshii">La propiedad text-shadow permite crear sombra en el texto, pudiendo variar las posiciones de esta y el color de la sombra. Suele usarse en encabezados y títulos que deseen resaltarse, pero no se debe abusar de ella (Un ejemplo incorrecto sería usar esta sombra los párrafos).\n'+'Solo navegadores basados en Webkit, como Safari o Konqueror, o últimas versiones de navegadores basados en Gecko, como Firefox 3.5+ o basados en el motor Presto, como Opera, pueden interpretar la propiedad text-shadow. Los otros navegadores no la soportan. Mediante RGBA aplicaremos varios colores.</p>\n'+'<p class="mas">Un ejemplo de la propiedad text-shadow.</p>\n'+'<p class="ejemplo1">Ejemplo1 de la propiedad text-shadow.</p>\n'+'<b class="ejemplo2">Ejemplo2 de la propiedad text-shadow.</b>\n'+'<p class="ejemplo3">Ejemplo3 de la propiedad text-shadow.</p>\n'+'<p class="ejemplo4">Ejemplo4 de la propiedad text-shadow.</p>\n'+'<p class="ejemplo5">Ejemplo5 de la propiedad text-shadow.</p>\n'+'<p class="ejemplo6">Ejemplo6 de la propiedad text-shadow.</p>\n'+'<p class="ejemplo7">Ejemplo7 de la propiedad text-shadow.</p>\n'+'<p class="ejemplo8">Ejemplo8 de la propiedad text-shadow.</p>\n'+'<p class="ejemplo9">Ejemplo9 de la propiedad text-shadow.</p>\n'+'<p class="ejemplo10">Ejemplo10 de la propiedad text-shadow.</p>\n'+'<p class="ejemplo11">Ejemplo11 de la propiedad text-shadow.</p>\n'+'<p class="ejemplo12">Ejemplo12 de la propiedad text-shadow.</p>\n'+'<p class="ejemplo13">Ejemplo13 de la propiedad text-shadow.</p>\n'+'<p class="ejemplo14">Ejemplo14 de la propiedad text-shadow.</p>\n'+'<p class="ejemplo15">Ejemplo15 de la propiedad text-shadow.</p>\n'+'<p class="ejemplo16">Ejemplo16 de la propiedad text-shadow.</p>\n'+'<p class="ejemplo17">Ejemplo17 de la propiedad text-shadow IE.</p>\n'+'    \n'+'</body>\n'+'</html>';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' @import url(http://fonts.googleapis.com/css?family=Autour+One);\n'+'body {\n'+' background-color: #333; font: 30px sans-serif;\n'+' font-family: "Autour One", cursive;\n'+' font-size:26px;\n'+'  margin:0 auto;\n'+' text-align: center;\n'+' width:90%; \n'+' }\n'+'.ejemplo1{\n'+'background: white;\n'+'text-shadow: 0 1px 0 black, 0 -1px 0 black, 1px 0 0 black, -1px 0 0 black;  \n'+'color: white;\n'+'}\n'+'.ejemplo2{\n'+'color: #222;\n'+'text-shadow: 0px 1px 1px #4d4d4d;\n'+'}\n'+'.ejemplo3{\n'+'color: #fff;\n'+'text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #ff2d95, 0 0 30px #ff2d95, 0 0 40px #ff2d95, 0 0 50px #ff2d95, 0 0 75px #ff2d95;\n'+'letter-spacing: 5px;\n'+'}\n'+'.ejemplo4{\n'+'color: #fff;\n'+'text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135;\n'+'}\n'+'.ejemplo5{\n'+'color: rgba(255, 255, 255, 0.1);\n'+'text-shadow: 0px 0px 15px rgba(255, 255, 255, 0.5), 0px 0px 10px rgba(255, 255, 255, 0.5);\n'+'}\n'+'.ejemplo6{\n'+'text-shadow:2px 2px 0 #E51919;\n'+'}\n'+'.ejemplo7{\n'+'text-shadow:3px 3px 3px #B24C4C;\n'+'}\n'+'.ejemplo8{\n'+'text-shadow:0px 1px 0px white;\n'+'}\n'+'.ejemplo9{\n'+'text-shadow:0px   0px  4px white,    0px  -5px  4px #FFFF33,\n'+'2px -10px  6px #FFDD33, -2px -15px 11px #FF8800,\n'+'2px -25px 18px #FF2200; \n'+'}\n'+'.ejemplo10{\n'+'text-shadow:0 0 1px  #ffffff, 0 0 2px  #ffffff,\n'+'0 0 3px  #ffffff, 0 0 4px  #ff00de,\n'+'0 0 7px  #ff00de, 0 0 8px  #ff00de,\n'+'0 0 10px #ff00de, 0 0 15px #ff00de;\n'+'}\n'+'.ejemplo11{\n'+'background:#000;\n'+'color:#fff;\n'+'text-shadow:0 0 3px #fff;\n'+'}\n'+'.ejemplo12{\n'+'text-shadow:0 0 20px yellow, 0 0 60px yellow;\n'+'}\n'+'.ejemplo13{\n'+'color:#333;\n'+'text-shadow:-1px -1px white, 1px 1px #333333;\n'+'}\n'+'.ejemplo14{\n'+'color:#444;\n'+'text-shadow:1px 1px white, -1px -1px #444;\n'+'}\n'+'.ejemplo15{\n'+'text-shadow:1px 1px rgba(255,128,0,.7),\n'+'2px 2px rgba(255,128,0,.7),\n'+'3px 3px rgba(255,128,0,.7),\n'+'4px 4px rgba(255,128,0,.7),\n'+'5px 5px rgba(255,128,0,.7);\n'+'}\n'+'.ejemplo16{\n'+'-sand-chroma-override: #666666;\n'+'text-shadow:\n'+'	-4px 0px 0px #0f1128,\n'+'	-8px 0px 4px rgb(50, 152, 234),\n'+'	-10px 0px 4px rgba(50, 152, 234, 0.3),\n'+'	-8px -4px 4px rgba(50, 152, 234, 0.6),\n'+'	-8px 4px 4px rgba(50, 152, 234, 0.6);\n'+'}\n'+'.ejemplo17{\n'+'zoom: 1;\n'+'	background-color: white;\n'+'	filter: progid:DXImageTransform.Microsoft.Chroma(Color=white)\n'+'		progid:DXImageTransform.Microsoft.DropShadow(OffX=3, OffY=3, Color=#99cc99);\n'+'}\n'+'.hageshii {\n'+'    font-size: 16px;\n'+'    color: #000;\n'+'    margin:0 auto;\n'+'    text-shadow: \n'+'        1.5px 1.5px 1px white, \n'+'        1.5px 1px 1px white,\n'+'        1.5px 0 1px white,\n'+'        1.5px -1px 1px white,\n'+'        1.5px -1.5px 1px white, \n'+'        1px -1.5px 1px white,\n'+'        0 -1.5px 1px white,\n'+'        -1px -1.5px 1px white,\n'+'        -1.5px -1.5px 1px white,\n'+'        -1.5px -1px 1px white,\n'+'        -1.5px 0 1px white,\n'+'        -1.5px 1px 1px white,\n'+'        -1.5px 1.5px 1px white,\n'+'        -1px 1.5px 1px white,\n'+'        0 1.5px 1px white,\n'+'        1px 1.5px 1px white; \n'+'    width:80%;  \n'+'}\n'+'.mas{\n'+'color: rgba(8, 207, 252, 0.5);\n'+'text-shadow: #6374AB 20px -12px 2px;\n'+'}\n'+'.more-hageshii {\n'+'    \n'+'    font-size: 22px;\n'+'    color: #000;\n'+'	text-shadow: \n'+'        3px 3px 1px white, \n'+'        3px 1px 1px white,\n'+'        3px 0 1px white,\n'+'        3px -1px 1px white,\n'+'        3px -3px 1px white, \n'+'        1px -3px 1px white,\n'+'        0 -1.5px 1px white,\n'+'        -1px -3px 1px white,\n'+'        -3px -3px 1px white,\n'+'        -3px -1px 1px white,\n'+'        -3px 0 1px white,\n'+'        -3px 1px 1px white,\n'+'        -3px 3px 1px white,\n'+'        -1px 3px 1px white,\n'+'        0 3px 1px white,\n'+'        1px 3px 1px white;   \n'+'}';

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

