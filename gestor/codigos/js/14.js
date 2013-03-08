var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE html>\n'+'<html lang="es">\n'+'<head>\n'+'<meta charset="utf-8" />\n'+'<title>transition </title>\n'+'</head>\n'+'<body>\n'+'<div id="timings_demo" class="shadow hover">\n'+'<div id="ease" class="test_box"><p class="center">Ease</p></div>\n'+'<div id="ease-in" class="test_box"><p class="center">Ease In</p></div>\n'+'<div id="ease-out" class="test_box"><p class="center">Ease Out</p></div>\n'+'<div id="ease-in-out" class="test_box"><p class="center">Ease In Out</p></div>\n'+'<div id="linear" class="test_box"><p class="center">Linear</p></div>\n'+'<div id="custom" class="test_box"><p class="center">Custom</p></div>\n'+'</div>\n'+'</body>\n'+'</html>';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' body{\n'+'background: url(/imagenes/fondos/fondoH.jpg) center fixed;\n'+'}\n'+'#timings_demo {\n'+'position:relative;\n'+'width:500px;\n'+'height:400px;\n'+'margin:0 auto 10px;\n'+'border:1px #aaa solid;\n'+'padding:10px;\n'+'background: url(/imagenes/fondos/fondoHh.jpg) center fixed;\n'+'}\n'+'.test_box {\n'+'		position:relative;\n'+'		width:50px;\n'+'		height:50px;\n'+'		margin-bottom:10px;\n'+'		background-color:#ccc;\n'+'	}\n'+'	#ease.test_box {\n'+'		-webkit-transition: all 4s ease;\n'+'		-moz-transition: all 4s ease;\n'+'		-o-transition: all 4s ease;\n'+'		-ms-transition: all 4s ease;\n'+'		transition: all 4s ease;\n'+'		border:1px #f00 solid;\n'+'	}\n'+'	#ease-in.test_box {\n'+'		-webkit-transition: all 4s ease-in;\n'+'		-moz-transition: all 4s ease-in;\n'+'		-o-transition: all 4s ease-in;\n'+'		-ms-transition: all 4s ease-in;\n'+'		transition: all 4s ease-in;\n'+'		border:1px #0f0 solid;\n'+'	}\n'+'	#ease-out.test_box {\n'+'		-webkit-transition: all 4s ease-out;\n'+'		-moz-transition: all 4s ease-out;\n'+'		-o-transition: all 4s ease-out;\n'+'		-ms-transition: all 4s ease-out;\n'+'		transition: all 4s ease-out;\n'+'		border:1px #00f solid;\n'+'	}\n'+'	#ease-in-out.test_box {\n'+'		-webkit-transition: all 4s ease-in-out;\n'+'		-moz-transition: all 4s ease-in-out;\n'+'		-o-transition: all 4s ease-in-out;\n'+'		-ms-transition: all 4s ease-in-out;\n'+'		transition: all 4s ease-in-out;\n'+'		border:1px #ff0 solid;\n'+'	}\n'+'	#linear.test_box {\n'+'		-webkit-transition: all 4s linear;\n'+'		-moz-transition: all 4s linear;\n'+'		-o-transition: all 4s linear;\n'+'		-ms-transition: all 4s linear;\n'+'		transition: all 4s linear;\n'+'		border:1px #f0f solid;\n'+'	}\n'+'	#custom.test_box {\n'+'		-webkit-transition: all 4s cubic-bezier(1.000, 0.835, 0.000, 0.945);\n'+'		-moz-transition: all 4s cubic-bezier(1.000, 0.835, 0.000, 0.945);\n'+'		-o-transition: all 4s cubic-bezier(1.000, 0.835, 0.000, 0.945);\n'+'		-ms-transition: all 4s cubic-bezier(1.000, 0.835, 0.000, 0.945);\n'+'		transition: all 4s cubic-bezier(1.000, 0.835, 0.000, 0.945);\n'+'		border:1px #0ff solid;\n'+'	}\n'+'	#timings_demo:hover .test_box, #timings_demo.hover_effect .test_box {\n'+'		-webkit-border-radius:25px;\n'+'		-moz-border-radius:25px;\n'+'		-o-border-radius:25px;\n'+'		border-radius:25px;\n'+'		-webkit-transform: rotate(360deg);\n'+'		-moz-transform: rotate(360deg);\n'+'		-o-transform: rotate(360deg);\n'+'		-ms-transform: rotate(360deg);\n'+'		transform: rotate(360deg);    margin-left:440px;\n'+'		background-color:#fff;\n'+'	}';

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

