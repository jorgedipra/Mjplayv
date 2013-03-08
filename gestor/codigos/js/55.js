var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE html>\n'+'<html lang="es">\n'+'    <head>\n'+'        <meta charset="utf-8" />\n'+'       \n'+'        <title>Elemento movil</title>\n'+'    </head>\n'+'    <body>\n'+'    <div candrag="true">\n'+' <div id="content">\n'+'    MUEVEME\n'+'  </div>\n'+'</div>\n'+'    </body>\n'+'</html>';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' html,body {\n'+'	height: 100%;\n'+'}\n'+'\n'+'body {\n'+'	height: 100%;\n'+'	margin: 0;\n'+'    position: absolute;\n'+'	width: 100%;\n'+'    background: url(http://mjplay-v.16mb.com/imagenes/fondos/tileable_wood_texture.png) center fixed;\n'+'	overflow: hidden;\n'+'	\n'+'    -webkit-box-shadow: inset 0px 0px 150px 0px rgba(0, 0, 0, 0.7);\n'+'    -moz-box-shadow: inset 0px 0px 150px 0px rgba(0, 0, 0, 0.7);\n'+'    box-shadow: inset 0px 0px 150px 0px rgba(0, 0, 0, 0.7);\n'+'}\n'+'\n'+'\n'+'*[candrag="true"] {\n'+'	position: absolute;\n'+'	width: 16px;\n'+'	height: 16px;\n'+'	max-width: 10%;\n'+'	max-height: 12.5%;\n'+'	-webkit-resize: both;\n'+'	-moz-resize: both;\n'+'	resize: both;\n'+'	overflow: hidden;\n'+'\n'+'	-webkit-transform-origin: 0 0;\n'+'	-moz-transform-origin: 0 0;\n'+'	-o-transform-origin: 0 0;\n'+'	-ms-transform-origin: 0 0;\n'+'	transform-origin: 0 0;\n'+'\n'+'	-webkit-transform: scale(10, 8);\n'+'	-moz-transform: scale(10, 8);\n'+'	-o-transform: scale(10, 8);\n'+'	-ms-transform: scale(10, 8);\n'+'	transform: scale(10, 8);\n'+'	left: 0;\n'+'	top: 0;\n'+'}\n'+'\n'+'*[candrag="true"]:not([style]) {\n'+'left: 100px;\n'+'	top: 100px;\n'+'}\n'+'\n'+'#content {\n'+'	position: absolute; \n'+'	right: 0;\n'+'	bottom: 0;\n'+'	width: 160px;\n'+'	height: 128px;\n'+' background: url(http://mjplay-v.16mb.com/imagenes/fondos/texturas-de-metal_05.jpg	) center fixed;	\n'+'\n'+'\n'+'\n'+'	-webkit-transform-origin: 100% 100%;\n'+'	-moz-transform-origin: 100% 100%;\n'+'	-o-transform-origin: 100% 100%;\n'+'	-ms-transform-origin: 100% 100%;\n'+'	transform-origin: 100% 100%;\n'+'\n'+'	-webkit-transform: scale(0.1, 0.125);\n'+'	-moz-transform: scale(0.1, 0.125);\n'+'	-o-transform: scale(0.1, 0.125);\n'+'	-ms-transform: scale(0.1, 0.125);\n'+'	transform: scale(0.1, 0.125);\n'+'	pointer-events: none;\n'+'	text-align: center;\n'+'	line-height: 128px;\n'+'	color: #fff;\n'+'text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135;\n'+'	font-size:26px;\n'+'	border-radius: 5px;\n'+'	-moz-border-radius: 5px;\n'+'	-webkit-border-radius: 5px;\n'+'	\n'+'	box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.5), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.4);\n'+'	-moz-box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.5), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.4);\n'+'	-webkit-box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.5), inset 0px 1px 0px 0px rgba(255, 255, 255, 0.4);\n'+'}';

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

