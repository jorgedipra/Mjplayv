var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE HTML>\n'+'<html>\n'+'<head>\n'+'<title>Junturas o uniones de lineas en el canvas y Limites</title>\n'+'</head>\n'+'<body>\n'+'<h1>Junturas o uniones de li   neas en el canvas y miterLimit</h1>\n'+'<div style="width: 200px; float: left;">\n'+'<canvas id="micanvas" width="150" height="400">\n'+'Tu navegador no soporta canvas.\n'+'</canvas>\n'+'</div>\n'+'<div style="margin: 100px 0 0 200px;">\n'+'<form name="formulario">\n'+'   Valor de miterLimit: <input type="text" size=3 value="10" name="valormiterlimit"> * recomiendo poner valor entre 1 y 15\n'+'  <br>\n'+'  <button type="button" onclick="actualizarValorReiniciar()">Actualizar valor y reiniciar</button>\n'+'</form>\n'+'</div>\n'+'</body>\n'+'</html>';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' body{\n'+'background: url(/imagenes/fondos/fondoJ.jpg);\n'+'color:#07185c;\n'+'font-size:20;\n'+'}';

var jat = '<script>';
var jaf = '</script>';

var defaultjas =' function cargaContextoCanvas(idCanvas){\n'+' var elemento = document.getElementById(idCanvas);\n'+' if(elemento && elemento.getContext){\n'+'    var contexto = elemento.getContext("2d");\n'+'    if(contexto){\n'+'       return contexto;\n'+'    }\n'+' }\n'+' return false;\n'+'}\n'+'window.onload = function(){\n'+'   actualizarValorReiniciar();\n'+'   dibujaCaminoCambiaAngulo();\n'+'}\n'+'var altura_para_vertices = 1;\n'+'var valor_miteLimit = 10;\n'+'function actualizarValorReiniciar(){\n'+'   altura_para_vertices = 1;\n'+'   valor_miteLimit = parseInt(document.formulario.valormiterlimit.value);\n'+'}\n'+'function dibujaCaminoCambiaAngulo(){\n'+'   var ctx = cargaContextoCanvas("micanvas");\n'+'   if(ctx){\n'+'      //cambio el valor de miterLimit\n'+'      ctx.miterLimit = valor_miteLimit;\n'+'      //limpio el canvas\n'+'      ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);\n'+'      //cambio color\n'+'      ctx.strokeStyle = "#00c";\n'+'      //defino la union miter\n'+'      ctx.lineJoin = "miter";\n'+'      //anchura de la linea\n'+'      ctx.lineWidth = 10;\n'+'      //Dibujo dos lineas en angulo que va cambiando...\n'+'      ctx.beginPath();\n'+'      ctx.moveTo(20,380);\n'+'      ctx.lineTo(40,380-altura_para_vertices);\n'+'      ctx.lineTo(60,380);\n'+'      ctx.stroke();\n'+'      //pinto el punto donde estoy haciendo el angulo\n'+'      ctx.fillStyle = "#0f0";\n'+'      ctx.fillRect(39, 379-altura_para_vertices, 2, 2)\n'+'      //actualizo la altura del vertice y llamo a la funcion con un retardo\n'+'      altura_para_vertices += 2;\n'+'      setTimeout("dibujaCaminoCambiaAngulo()",100);\n'+'   }\n'+'}';

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

