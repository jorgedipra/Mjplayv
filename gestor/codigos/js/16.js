var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE html>\n'+'<html lang="es">\n'+'<head>\n'+'<meta charset="utf-8" />\n'+'<title>Canvas rectangulos</title>\n'+'</head>\n'+'<body>\n'+'<center>\n'+'<canvas id="micanvas" width="150" height="150">\n'+'Contenido que solo veran los usuarios que no soportan canvas en su navegador. Usa una version moderna de Firefox, Chrome, Safari, Opera... casi todos los navegadores excepto Explorer son compatibles con Canvas.\n'+'</canvas>\n'+'<a href="#" onclick="borrar_parcial()">Borrado parcial</a>\n'+'</center>\n'+'</body>\n'+'</html>';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' body{\n'+'background: -moz-radial-gradient(center, ellipse cover,  rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 15%, rgba(255,255,255,1) 19%, rgba(255,255,255,1) 20%, rgba(182,199,214,1) 50%, rgba(252,252,252,1) 81%, rgba(252,252,252,0.8) 85%, rgba(252,252,252,0) 100%); /* FF3.6+ */\n'+'background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%,rgba(255,255,255,0)), color-stop(15%,rgba(255,255,255,0.8)), color-stop(19%,rgba(255,255,255,1)), color-stop(20%,rgba(255,255,255,1)), color-stop(50%,rgba(182,199,214,1)), color-stop(81%,rgba(252,252,252,1)), color-stop(85%,rgba(252,252,252,0.8)), color-stop(100%,rgba(252,252,252,0))); /* Chrome,Safari4+ */\n'+'background: -webkit-radial-gradient(center, ellipse cover,  rgba(255,255,255,0) 0%,rgba(255,255,255,0.8) 15%,rgba(255,255,255,1) 19%,rgba(255,255,255,1) 20%,rgba(182,199,214,1) 50%,rgba(252,252,252,1) 81%,rgba(252,252,252,0.8) 85%,rgba(252,252,252,0) 100%); /* Chrome10+,Safari5.1+ */\n'+'background: -o-radial-gradient(center, ellipse cover,  rgba(255,255,255,0) 0%,rgba(255,255,255,0.8) 15%,rgba(255,255,255,1) 19%,rgba(255,255,255,1) 20%,rgba(182,199,214,1) 50%,rgba(252,252,252,1) 81%,rgba(252,252,252,0.8) 85%,rgba(252,252,252,0) 100%); /* Opera 12+ */\n'+'background: -ms-radial-gradient(center, ellipse cover,  rgba(255,255,255,0) 0%,rgba(255,255,255,0.8) 15%,rgba(255,255,255,1) 19%,rgba(255,255,255,1) 20%,rgba(182,199,214,1) 50%,rgba(252,252,252,1) 81%,rgba(252,252,252,0.8) 85%,rgba(252,252,252,0) 100%); /* IE10+ */\n'+'}';

var jat = '<script>';
var jaf = '</script>';

var defaultjas =' //Recibe un identificador del elemento canvas y carga el canvas\n'+'//Devueve el contexto del canvas o FALSE si no ha podido conseguise\n'+'function cargaContextoCanvas(idCanvas){\n'+'   var elemento = document.getElementById(idCanvas);\n'+'   if(elemento && elemento.getContext){\n'+'      var contexto = elemento.getContext("2d");\n'+'      if(contexto){\n'+'         return contexto;\n'+'      }\n'+'   }\n'+'   return FALSE;\n'+'}\n'+'window.onload = function(){\n'+'  //Recibimos el elemento canvas\n'+'  var contexto = cargaContextoCanvas("micanvas");\n'+'  if(contexto){\n'+'     //Si tengo el contexto \n'+'     //cambio el color de relleno de los rectangulos\n'+'     contexto.fillStyle = "#cc0000";\n'+'     for (i=0;i<=100;i+=10){\n'+'        // fillRect(x,y,width,height) dibuja un rectangulo relleno de color\n'+'        contexto.fillRect(i,i,5,50);\n'+'     }\n'+'     //cambio el color de la linea de borde del rectangulo\n'+'     contexto.strokeStyle = "#ff9933";\n'+'     for (i=100;i>=0;i-=10){\n'+'        //strokeRect(x,y,width,height) dibuja el borde de un rectangulo\n'+'        contexto.strokeRect(i,100-i,5,50);\n'+'     }\n'+'  }\n'+'}\n'+'function borrar_parcial(){\n'+'   var contexto = cargaContextoCanvas("micanvas");\n'+'   if(contexto){\n'+'      //clearRect(x,y,width,height) borra un area rectangular del canvas dejandola transparente\n'+'      contexto.clearRect(60,0,42,150);\n'+'   }\n'+'}';

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

