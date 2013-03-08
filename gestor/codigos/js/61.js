var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE html>\n'+'<html lang="es">\n'+'<head>\n'+'<meta charset="utf-8" />\n'+'<title>Cargando</title>\n'+'</head>\n'+'<body>\n'+'<span>Cargando</span>\n'+'<span class="l-1"></span>\n'+'<span class="l-2"></span>\n'+'<span class="l-3"></span>\n'+'<span class="l-4"></span>\n'+'<span class="l-5"></span>\n'+'<span class="l-6"></span>\n'+'</body>\n'+'</html>\n'+'';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' body {\n'+'    background: url(http://mjplay-v.16mb.com/imagenes/fondos/fondoH.png) center fixed;\n'+'    font-family: Lucida Grande, Helvetica Neue, Helvetica, Arial, sans-serif;\n'+'    text-align: center;\n'+'    margin-top: 200px;\n'+'    font-size: 24px;\n'+'    color: #333;\n'+'}\n'+'\n'+'span {\n'+'    display: block;\n'+'    margin: 10px auto;\n'+'}\n'+'\n'+'span[class*="l-"] {\n'+'    display: inline-block;\n'+'    background: url(http://mjplay-v.16mb.com/imagenes/fondos/fondoEe.png) center fixed;\n'+'    width: 40px;\n'+'    height: 40px;\n'+'	\n'+'    -webkit-border-radius: 100%;\n'+'	-moz-border-radius: 100%;\n'+'	border-radius: 100%;\n'+'	\n'+'    margin: 12px 2px;\n'+'    position: relative;\n'+'	\n'+'    -webkit-animation: loader 4s infinite;\n'+'    -webkit-animation-timing-function: cubic-bezier(0.030, 0.615, 0.995, 0.415);\n'+'    -webkit-animation-fill-mode: both;\n'+'    -moz-animation: loader 4s infinite;\n'+'    -moz-animation-timing-function: cubic-bezier(0.030, 0.615, 0.995, 0.415);\n'+'    -moz-animation-fill-mode: both;\n'+'    -ms-animation: loader 4s infinite;\n'+'    -ms-animation-timing-function: cubic-bezier(0.030, 0.615, 0.995, 0.415);\n'+'    -ms-animation-fill-mode: both;\n'+'    animation: loader 4s infinite;\n'+'    animation-timing-function: cubic-bezier(0.030, 0.615, 0.995, 0.415);\n'+'    animation-fill-mode: both;\n'+'}\n'+'\n'+'span.l-1 { -webkit-animation-delay: 1s; -moz-animation-delay: 1s; -ms-animation-delay: 1s; animation-delay: 1s; }\n'+'span.l-2 { -webkit-animation-delay: 0.8s; -moz-animation-delay: 0.8s; -ms-animation-delay: 0.8s; animation-delay: 0.8s; }\n'+'span.l-3 { -webkit-animation-delay: 0.6s; -moz-animation-delay: 0.6s; -ms-animation-delay: 0.6s; animation-delay: 0.6s; }\n'+'span.l-4 { -webkit-animation-delay: 0.4s; -moz-animation-delay: 0.4s; -ms-animation-delay: 0.4s; animation-delay: 0.4s; }\n'+'span.l-5 { -webkit-animation-delay: 0.2s; -moz-animation-delay: 0.2s; -ms-animation-delay: 0.2s; animation-delay: 0.2s; }\n'+'span.l-6 { -webkit-animation-delay: 0s; -moz-animation-delay: 0s; -ms-animation-delay: 0s; animation-delay: 0s; }\n'+'\n'+'@-webkit-keyframes loader {\n'+'    0% { -webkit-transform: translateX(-30px); opacity: 0; }\n'+'    25% { opacity: 1; }\n'+'    50% { -webkit-transform: translateX(30px); opacity: 0; }\n'+'    100% { opacity: 0; }\n'+'}\n'+'@-moz-keyframes loader {\n'+'    0% { -moz-transform: translateX(-30px); opacity: 0; }\n'+'    25% { opacity: 1; }\n'+'    50% { -moz-transform: translateX(30px); opacity: 0; }\n'+'    100% { opacity: 0; }\n'+'}\n'+'@-ms-keyframes loader {\n'+'    0% { -ms-transform: translateX(-30px); opacity: 0; }\n'+'    25% { opacity: 1; }\n'+'    50% { -ms-transform: translateX(30px); opacity: 0; }\n'+'    100% { opacity: 0; }\n'+'}\n'+'@keyframes loader {\n'+'    0% { transform: translateX(-30px); opacity: 0; }\n'+'    25% { opacity: 1; }\n'+'    50% { transform: translateX(30px); opacity: 0; }\n'+'    100% { opacity: 0; }\n'+'}';

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

