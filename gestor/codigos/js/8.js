var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE html>\n'+'<html lang="es">\n'+'<head>\n'+'<meta charset="utf-8" />\n'+'<title>Boton clasico</title>\n'+'</head>\n'+'<body>\n'+'<div class="wrapleather">\n'+'<div class="outside">\n'+'   <div class="inside">\n'+'      <p class="font">MJ Play-V</p>\n'+'  </div>\n'+' </div>    \n'+'</div>\n'+'</body>\n'+'</html>';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' body{\n'+'background:url(/imagenes/fondos/fondoF.jpg) center fixed;\n'+'}\n'+'p.font{\n'+'color:#8c8b8b;\n'+'font-family:Georgia;\n'+'font-size:50px;\n'+'margin-left:20px;\n'+'margin-top:60px;\n'+'text-shadow:-2px 2px 2px #fff;\n'+'}\n'+'.wrapleather{\n'+'background:url("http://4.bp.blogspot.com/_STpHmGjLrlU/S6RG7-KpqYI/AAAAAAAAAdI/saUavg7Aq_0/s400/fondo-rosa-vector.jpg");\n'+'/*border-radius*/\n'+'-webkit-border-radius:5px;\n'+'   -moz-border-radius:5px;\n'+'        border-radius:5px;\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:-2px 2px 10px rgba(0,0,0,0.4);\n'+'   -moz-box-shadow:-2px 2px 10px rgba(0,0,0,0.4);\n'+'        box-shadow:-2px 2px 10px rgba(0,0,0,0.4);\n'+'height:202px;\n'+'margin:10% 35%;\n'+'width:302px;\n'+'}\n'+'.wrapleather .outside{\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:0 0 5px rgba(184,184,184,1);\n'+'   -moz-box-shadow:0 0 5px rgba(184,184,184,1);\n'+'        box-shadow:0 0 5px rgba(184,184,184,1);\n'+'/*border-radius*/\n'+'-webkit-border-radius:10px;\n'+'   -moz-border-radius:10px;\n'+'        border-radius:10px;\n'+'border:2px solid #cccccc;\n'+'height:180px;\n'+'margin:10px;\n'+'position:absolute;\n'+'width:280px;\n'+'}\n'+'.wrapleather .inside{\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:inset 0 0 5px rgba(184,184,184,1);\n'+'   -moz-box-shadow:inset 0 0 5px rgba(184,184,184,1);\n'+'        box-shadow:inset 0 0 5px rgba(184,184,184,1);\n'+'/*border-radius*/\n'+'-webkit-border-radius:10px;\n'+'   -moz-border-radius:10px;\n'+'        border-radius:10px;\n'+'border:2px dashed #f0f0f0;\n'+'height:180px;\n'+'left:-2px;\n'+'position:relative;\n'+'top:-2px;\n'+'width:280px;\n'+'}\n'+'';

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

