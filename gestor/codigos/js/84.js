var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE html>\n'+'<html lang="es">\n'+'<head>\n'+'<meta charset="utf-8" />\n'+'<title>Titulo</title>\n'+'</head>\n'+'<body>\n'+'<div id="container">\n'+'	<h1> titulo</h1>\n'+'</div>\n'+'</body>\n'+'</html>';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' body{\n'+'background:url(http://mjplay-v.16mb.com/imagenes/fondos/fondoV.png) center fixed;\n'+'}\n'+'#container{\n'+'background:url(http://mjplay-v.16mb.com/imagenes/fondos/fondoR.png) center fixed;\n'+'margin:auto;\n'+'width:500px;\n'+'height:200px;\n'+'padding-top:30px;\n'+'}\n'+'h1{\n'+'background:#a8c4c0;\n'+'/*linear-gradient*/\n'+'background:-webkit-gradient(linear,left top,left bottom,color-stop(#a8c4c0,0),color-stop(#7aa5a2,1));\n'+'background:-webkit-linear-gradient(top,  #a8c4c0 0%, #7aa5a2 100%);\n'+'background:   -moz-linear-gradient(top,  #a8c4c0 0%, #7aa5a2 100%);\n'+'background:     -o-linear-gradient(top,  #a8c4c0 0%, #7aa5a2 100%);\n'+'background:        linear-gradient(top,  #a8c4c0 0%, #7aa5a2 100%);\n'+'background:-webkit-gradient(linear, left top, left bottom, color-stop(0%,#a8c4c0), color-stop(100%,#7aa5a2));\n'+'background:-webkit-linear-gradient(top,  #a8c4c0 0%,#7aa5a2 100%);\n'+'background:   -moz-linear-gradient(top,  #a8c4c0 0%,#7aa5a2 100%);\n'+'background:     -o-linear-gradient(top,  #a8c4c0 0%,#7aa5a2 100%);\n'+'background:        linear-gradient(top,  #a8c4c0 0%,#7aa5a2 100%);\n'+'filter:progid:DXImageTransform.Microsoft.gradient( startColorstr="#a8c4c0", endColorstr="#7aa5a2",GradientType=0 );\n'+'padding:0 20px;\n'+'line-height:50px;\n'+'height:50px;\n'+'margin-left:-15px;\n'+'margin-top:0;\n'+'position:relative;\n'+'width:400px;\n'+'font-size:20px;\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:0px 3px 4px 0px rgba(0,0,0,0.3);\n'+'   -moz-box-shadow:0px 3px 4px 0px rgba(0,0,0,0.3);\n'+'        box-shadow:0px 3px 4px 0px rgba(0,0,0,0.3);\n'+'color:#3b3a3b;\n'+'text-shadow:0 1px 0 rgba(255, 255, 255, 0.4);\n'+'}\n'+'h1:after{\n'+'position:absolute;\n'+'content:"";\n'+'width:0;\n'+'height:0;\n'+'line-height:0;\n'+'border-left:15px solid transparent;\n'+'border-top:10px solid #729c9a;\n'+'bottom:-10px;\n'+'left:0;\n'+'z-index:-1;\n'+'}\n'+'h1:before{\n'+'content:"";\n'+'position:absolute;\n'+'top:5px;\n'+'height:39px;\n'+'border-top:1px solid rgba(255,255,255,0.5);\n'+'border-bottom:1px solid rgba(255,255,255,0.5);\n'+'width:100%;\n'+'left:0;\n'+'}\n'+'';

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

