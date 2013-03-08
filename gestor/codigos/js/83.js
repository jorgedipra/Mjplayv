var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE html>\n'+'<html lang="es">\n'+'<head>\n'+'<meta charset="utf-8" />\n'+'<title>Liston</title>\n'+'</head>\n'+'<body>\n'+'<h1 class="ribbon"> \n'+'   <strong class="ribbon-contentenido">liston</strong> \n'+'</h1> \n'+'</body>\n'+'</html>';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' body{\n'+'background:url(http://mjplay-v.16mb.com/imagenes/fondos/fondoZz.png) center fixed;\n'+'color:#fff;\n'+'}\n'+'.ribbon{\n'+'font-size:1.2em !important;\n'+'width:85%;\n'+'position:relative;\n'+'background:#006694;\n'+'color:#fff;\n'+'padding:0.5em;\n'+'margin:1em;\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:0 2px 0 #fff, 0 4px 0 rgba(0,0,0,0.5);\n'+'   -moz-box-shadow:0 2px 0 #fff, 0 4px 0 rgba(0,0,0,0.5);\n'+'        box-shadow:0 2px 0 #fff, 0 4px 0 rgba(0,0,0,0.5);\n'+'}\n'+'.ribbon:after{\n'+'content:"";\n'+'position:absolute;\n'+'display:block;\n'+'border:1.1em solid #006694;\n'+'z-index:-1;\n'+'top:0;\n'+'right:-2.6em;\n'+'border-left-width:1.6em;\n'+'border-right-color:transparent;\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:0 2px 0 #fff, 0 4px 0 rgba(0,0,0,0.5);\n'+'   -moz-box-shadow:0 2px 0 #fff, 0 4px 0 rgba(0,0,0,0.5);\n'+'        box-shadow:0 2px 0 #fff, 0 4px 0 rgba(0,0,0,0.5);\n'+'}\n'+'';

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

