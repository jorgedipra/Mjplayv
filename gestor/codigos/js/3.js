var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff ='<!DOCTYPE HTML> \n'+'<html> \n'+'<head> \n'+'<title>HTML5 Canvas example</title> \n'+'</head> \n'+'<body onload="drawPicture();"> \n'+'<center>\n'+'<canvas id="example" width="260" height="200"> \n'+' El navegador no soporta canvas \n'+' </canvas> \n'+'</center>\n'+'</body> \n'+'</html>';

var st = '<style>';
var sf = '</style>';

var defaultcss = 'body{\n'+'background: url(/imagenes/fondos/fondoB.png) center fixed;\n'+'height:100%;\n'+'width:100%;\n'+'}\n'+'canvas { \n'+'border: 2px solid #4f13f5; \n'+'}';

var jat = '<script>';
var jaf = '</script>';

var defaultjas =' function drawPicture(){\n'+' // Primero se recupera el objeto canvas a modificar\n'+' var canvas = document.getElementById("example");\n'+'  \n'+' // Luego se le indicar la forma de trabajar 2D o 3D \n'+' var context = canvas.getContext("2d");\n'+'\n'+'// Se comienza a dibujar en el lienzo utilizando objetos  \n'+'// graficos \n'+'\n'+'      context.fillStyle = "#4f13f5";\n'+'     context.fillRect (90, 70, 70, 100);\n'+'\n'+'      context.fillStyle = "#edf513";\n'+'     context.beginPath();\n'+'    context.arc(125,40,30,0,Math.PI*2,true);\n'+'   context.fill();\n'+'\n'+'       context.fillStyle = "#000000";\n'+'      context.beginPath();\n'+'     context.arc(115,30,10,0,Math.PI*2,true);\n'+'    context.fill();\n'+'\n'+'       context.fillStyle = "#000000";\n'+'      context.beginPath();\n'+'     context.arc(135,30,10,0,Math.PI*2,true);\n'+'    context.fill();\n'+'   \n'+'  context.fillStyle = "#ffffff";\n'+' context.beginPath();\n'+'context.arc(115,30,4,0,Math.PI*2,true);\n'+'        context.fill();\n'+'\n'+'       context.fillStyle = "#fffff";\n'+'      context.beginPath();\n'+'     context.arc(135,30,4,0,Math.PI*2,true);\n'+'    context.fill(); \n'+'\n'+'  context.fillStyle = "#f51313";\n'+'        context.fillRect (110, 50, 30, 10);\n'+'\n'+'      context.fillStyle = "#f51313";\n'+'     context.fillRect (70, 170, 50, 20);\n'+'\n'+'       context.fillStyle = "#f51313";\n'+'      context.fillRect (135, 170, 50, 20);\n'+'\n'+'       context.fillStyle = "#f51313";\n'+'      context.beginPath();\n'+'     context.moveTo(125,100);\n'+'    context.lineTo(0,50);\n'+'        context.lineTo(22,200);\n'+'       context.fill();\n'+'\n'+'       context.fillStyle = "#f59b13";\n'+'      context.beginPath();\n'+'     context.arc(49,113,40,0,Math.PI*2,true);\n'+'        context.fill();\n'+'       \n'+'      context.fillStyle = "#000";\n'+'     context.beginPath();\n'+'    context.arc(49,113,20,0,Math.PI*2,true);\n'+'   context.fill();\n'+'\n'+'     }';

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

