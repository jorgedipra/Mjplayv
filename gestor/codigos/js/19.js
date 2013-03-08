var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE HTML>\n'+'<html>\n'+'<head>\n'+'<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />\n'+'<title>Transform MJ</title>\n'+'</head>\n'+'<body>\n'+'<div id="fuera">\n'+'<div id="ampliar">\n'+'       <center>\n'+'<img src="http://mjplay-v.16mb.com/imagenes/mj.png" width="168" height="91" />\n'+'   </center>\n'+'</div>\n'+'</div>\n'+'</body>\n'+'</html>';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' body { background: rgba(0,200,250, 0.85); }\n'+'#fuera{\n'+'margin:60px;	\n'+'}\n'+'/* la imagen en su forma normal */\n'+'#ampliar img{\n'+'-webkit-transform:scale(1); /*Webkit: Scale down image to 0.8x original size*/\n'+'-moz-transform:scale(1); /*Mozilla scale version*/\n'+'-o-transform:scale(1); /*Opera scale version*/\n'+'-webkit-transition-duration: 0.5s; /*Webkit: Animation duration*/\n'+'-moz-transition-duration: 0.5s; /*Mozilla duration version*/\n'+'-o-transition-duration: 0.5s; /*Opera duration version*/\n'+'opacity: 0.5;\n'+'}\n'+'/* al pasar el cursor por encima SE AMPLIA*/\n'+'#ampliar img:hover{\n'+'	-webkit-transform:scale(2); /*Webkit:Modificamos tamano a escala*/\n'+'	-moz-transform:scale(2); /*Mozilla:Modificamos tamano a escala*/\n'+'	-o-transform:scale(2); /*Opera:Modificamos tamano a escala*/\n'+'	-webkit-transition-duration: 0.5s; /*Webkit:Duracion de la animacion*/\n'+'	-moz-transition-duration: 0.5s; /*Mozilla:Duracion de la animacion*/\n'+'	-o-transition-duration: 0.5s; /*Opera:Duracion de la animacion*/	\n'+'	opacity: 1;\n'+'}';

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

