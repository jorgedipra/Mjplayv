var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE html>\n'+'<html lang="es">\n'+'<head>\n'+'<meta charset="utf-8" />\n'+'<meta name="Description" content="CURSOR Hove con css html" />\n'+'<meta name="Keywords"  content="CURSOR Hove" />\n'+'<title>CURSOR- Hover</title>\n'+'</head>\n'+'<body>\n'+'<p>(Pase el ratón sobre cada título para ver el efecto del cursor).</p>\n'+'<h3 class="auto">HTML cursor codes - "Auto"</h3>\n'+'<h3 class="default">HTML cursor codes - "Default"</h3>\n'+'<h3 class="text">HTML cursor codes - "Text"</h3>\n'+'<h3 class="help">HTML cursor codes - "Help"</h3>\n'+'<h3 class="pointer">HTML cursor codes - "Pointer"</h3>\n'+'<h3 class="wait">HTML cursor codes - "Wait"</h3>\n'+'<h3 class="crosshair">HTML cursor codes - "Crosshair"</h3>\n'+'<h3 class="move">HTML cursor codes - "Move"</h3>\n'+'<h3 class="smile">HTML cursor codes - "Smile"</h3>\n'+'<h3 class="smile2">HTML cursor codes - "Smile2"</h3>\n'+'<h3 class="progress">HTML cursor codes - "Progress"</h3>\n'+'<h3 class="e-resize">HTML cursor codes - "e-resize"</h3>\n'+'<h3 class="ne-resize">HTML cursor codes - "ne-resize"</h3>\n'+'<h3 class="nw-resize">HTML cursor codes - "nw-resize"</h3>\n'+'<h3 class="n-resize">HTML cursor codes - "n-resize"</h3>\n'+'<h3 class="se-resize">HTML cursor codes - "se-resize"</h3>\n'+'<h3 class="sw-resize">HTML cursor codes - "sw-resize"</h3>\n'+'<h3 class="s-resize">HTML cursor codes - "s-resize"</h3>\n'+'<h3 class="w-resize">HTML cursor codes - "w-resize"</h3>\n'+'</body>\n'+'</body>\n'+'</html>\n'+'\n'+'\n'+'';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' body {\n'+'    background: url(http://mjplay-v.16mb.com/imagenes/fondos/fondoZz.png) center fixed;\n'+'    font-family: Lucida Grande, Helvetica Neue, Helvetica, Arial, sans-serif;\n'+'    text-align: center;\n'+'    margin-top: 20px;\n'+'    font-size: 24px;\n'+'    color: #333;\n'+'}\n'+'.auto { cursor: auto }\n'+'.default { cursor: default }\n'+'.text { cursor: text }\n'+'.help { cursor: help }\n'+'.pointer { cursor: pointer }\n'+'.wait { cursor: wait }\n'+'.crosshair { cursor: crosshair }\n'+'.move { cursor: move }\n'+'.smile { cursor:url(http://mjplay-v.16mb.com/imagenes/principal/tools_16.png),auto }\n'+'.smile2{ cursor:url(http://mjplay-v.16mb.com/imagenes/codigolibre/cursor.png),auto }\n'+'.progress { cursor: progress }\n'+'.e-resize { cursor: e-resize }\n'+'.ne-resize { cursor: ne-resize }\n'+'.nw-resize { cursor: nw-resize }\n'+'.n-resize { cursor: n-resize }\n'+'.se-resize { cursor: se-resize }\n'+'.sw-resize { cursor: sw-resize }\n'+'.s-resize { cursor: s-resize }\n'+'.w-resize { cursor: w-resize }';

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

