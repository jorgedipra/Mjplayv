var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE html>\n'+'<html lang="es">\n'+'<head>\n'+'<meta charset="utf-8" />\n'+'<title>FONDO CSS</title>\n'+'</head>\n'+'<body>\n'+'</body>\n'+'</html>';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' html{ /*linear-gradient*/\n'+'background:-webkit-gradient(linear,0 100%,100% 0,color-stop(rgba(69,76,86,1),0),color-stop(rgba(52,56,64,1),0.04),color-stop(rgba(71,78,88,1),0.29),color-stop(rgba(71,77,87,1),0.29),color-stop(rgba(52,56,64,1),0.3),color-stop(rgba(71,78,88,1),0.57),color-stop(rgba(52,56,64,1),0.57),color-stop(rgba(71,78,88,1),0.86),color-stop(rgba(52,56,64,1),0.87),color-stop(rgba(52,56,64,1),1));\n'+'background:-webkit-linear-gradient(45deg, 		rgba(69,76,86,1) 0%,		rgba(52,56,64,1) 4%,		rgba(71,78,88,1) 29%,		rgba(71,77,87,1) 29%,		rgba(52,56,64,1) 30%,		rgba(71,78,88,1) 57%,		rgba(52,56,64,1) 57%,		rgba(71,78,88,1) 86%,		rgba(52,56,64,1) 87%,		rgba(52,56,64,1) 100%);\n'+'background:   -moz-linear-gradient(45deg, 		rgba(69,76,86,1) 0%,		rgba(52,56,64,1) 4%,		rgba(71,78,88,1) 29%,		rgba(71,77,87,1) 29%,		rgba(52,56,64,1) 30%,		rgba(71,78,88,1) 57%,		rgba(52,56,64,1) 57%,		rgba(71,78,88,1) 86%,		rgba(52,56,64,1) 87%,		rgba(52,56,64,1) 100%);\n'+'background:     -o-linear-gradient(45deg, 		rgba(69,76,86,1) 0%,		rgba(52,56,64,1) 4%,		rgba(71,78,88,1) 29%,		rgba(71,77,87,1) 29%,		rgba(52,56,64,1) 30%,		rgba(71,78,88,1) 57%,		rgba(52,56,64,1) 57%,		rgba(71,78,88,1) 86%,		rgba(52,56,64,1) 87%,		rgba(52,56,64,1) 100%);\n'+'background:        linear-gradient(45deg, 		rgba(69,76,86,1) 0%,		rgba(52,56,64,1) 4%,		rgba(71,78,88,1) 29%,		rgba(71,77,87,1) 29%,		rgba(52,56,64,1) 30%,		rgba(71,78,88,1) 57%,		rgba(52,56,64,1) 57%,		rgba(71,78,88,1) 86%,		rgba(52,56,64,1) 87%,		rgba(52,56,64,1) 100%);\n'+'/*background-size*/\n'+'-webkit-background-size:8px 8px;\n'+'   -moz-background-size:8px 8px;\n'+'     -o-background-size:8px 8px;\n'+'        background-size:8px 8px;\n'+'margin:0;\n'+'padding:0;\n'+'width:100%;\n'+'height:100%;\n'+'/*box-shadow:inset 0 0 300px #34*/\n'+'/*box-shadow:inset 0 0 300px #343840;\n'+':/;}';

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

