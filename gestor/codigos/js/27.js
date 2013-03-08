var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE html>\n'+'<html lang="es">\n'+'<head>\n'+'<meta charset="utf-8" />\n'+'<title>Mensajes</title>\n'+'</head>\n'+'<body>\n'+'<div class="cuadrorojo">Cuadro de texto ROJO</div>\n'+'<div class="cuadroamarillo">Cuadro de texto AMARILLO</div>\n'+'<div class="cuadroazul">Cuadro de texto AZUL</div>\n'+' <div class="cuadroverde">Cuadro de texto VERDE</div> \n'+'<div class="cuadronegro">Cuadro de texto NEGRO</div> \n'+'</body>\n'+'</html>';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' body{\n'+'background: url(/imagenes/fondos/straws.png) center fixed;\n'+'}\n'+'.cuadrorojo {background-position: 10px center;  \n'+'background-repeat: no-repeat;   \n'+'font-family: Tahoma;  \n'+'font-size: 14px;   \n'+'margin: 10px 0px;   \n'+'padding: 15px 10px 15px 55px; \n'+'} \n'+'.cuadrorojo { \n'+'background-color: #F65050; \n'+'background-image: url(/imagenes/fondos/mas/3004bcl.png); \n'+'color: #000000; \n'+'border:2px solid #920707; \n'+'border-radius: 5px 5px 5px 5px; \n'+'}\n'+'.cuadroamarillo {  \n'+'background-position: 10px center;  \n'+'background-repeat: no-repeat;  \n'+'font-family: Tahoma;   \n'+'font-size: 14px;  \n'+'margin: 10px 0px;  \n'+'padding: 15px 10px 15px 55px; \n'+'} \n'+'.cuadroamarillo { \n'+'background-color: #F9D937; \n'+'background-image: url(/imagenes/fondos/mas/wu12lj.png); \n'+'color: #000000; \n'+'border:2px solid #DF7401; \n'+'border-radius: 2px 2px 2px 2px; \n'+'}\n'+'.cuadroazul {   \n'+'background-position: 10px center; \n'+'background-repeat: no-repeat;  \n'+'font-family: Tahoma;  \n'+'font-size: 14px; \n'+'margin: 10px 0px;  \n'+'padding: 15px 10px 15px 55px; \n'+'} \n'+'.cuadroazul { \n'+'background-color: #52ECFF; \n'+'background-image: url(/imagenes/fondos/mas/11t8pzq.png); \n'+'color: #000000; \n'+'border:2px solid #046E7C; \n'+'border-radius: 2px 2px 2px 2px; \n'+'} \n'+'.cuadroverde {   \n'+'background-position: 10px center;  \n'+'background-repeat: no-repeat;   \n'+'font-family: Tahoma;   \n'+'font-size: 14px;   \n'+'margin: 10px 0px;   \n'+'padding: 15px 10px 15px 55px; \n'+'} \n'+'.cuadroverde { \n'+'background-color: #72FF79; \n'+'background-image: url(/imagenes/fondos/mas/9qcsir.png); \n'+'color: #000000;\n'+' border:2px solid #0E8C15; \n'+'border-radius: 2px 2px 2px 2px; \n'+'}\n'+'.cuadronegro {   \n'+'background-position: 10px center;   \n'+'background-repeat: no-repeat;   \n'+'font-family: Tahoma;  \n'+'font-size: 14px;   \n'+'margin: 10px 0px;   \n'+'padding: 15px 10px 15px 55px; \n'+'} \n'+'.cuadronegro { \n'+'background-color: #A4A4A4; \n'+'background-image: url(/imagenes/fondos/mas/jfvxc0.png); \n'+'color: #000000; \n'+'border:2px solid #242424;\n'+'border-radius: 2px 2px 2px 2px; \n'+'} ';

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

