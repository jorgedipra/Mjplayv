var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE html>\n'+'<html lang="es">\n'+'<head>\n'+'<meta charset="utf-8" />\n'+'<title>Progress Bar</title>\n'+'</head>\n'+'<body>\n'+'<div class="msg">Loading of mjplay-v@gmail.com...</div>\n'+'<div class="loader_box">\n'+'	<div class="loader"></div>\n'+'</div>\n'+'</body>\n'+'</html>';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' body {\n'+' font-family: "Helvetica", "Helvetica Neue", sans-serif;\n'+' background: #F5F5F5;\n'+' font-size: 16px;\n'+'}\n'+'.msg {\n'+'    margin-top: 50px;\n'+'    text-align: center;\n'+'    font-weight: bold;\n'+'	margin-bottom:2px;\n'+'}\n'+'.loader_box {\n'+'   text-align: center;\n'+'   width: 320px;\n'+'   border: 1px solid #999;\n'+'   padding: 1px;\n'+'   height: 8px;\n'+'   margin-right: auto;\n'+'   margin-left: auto;\n'+'}\n'+'.loader {\n'+'    width: 0;\n'+'    height: 100%;\n'+'    background-color: #6188F5;\n'+'    background-repeat: repeat-x;\n'+'    background-position: 0 0;\n'+'    /*background-size*/\n'+'    -webkit-background-size: 16px 8px;\n'+'    -moz-background-size: 16px 8px;\n'+'    -o-background-size: 16px 8px;\n'+'    background-size: 16px 8px;\n'+'    background-image: -webkit-linear-gradient(315deg,transparent,transparent 33%,rgba(0, 0, 0, 0.12) 33%,rgba(0, 0, 0, 0.12) 66%,transparent 66%,transparent);\n'+'    background-image: -moz-linear-gradient(315deg,transparent,transparent 33%,rgba(0, 0, 0, 0.12) 33%,rgba(0, 0, 0, 0.12) 66%,transparent 66%,transparent);\n'+'    background-image: -o-linear-gradient(315deg,transparent,transparent 33%,rgba(0, 0, 0, 0.12) 33%,rgba(0, 0, 0, 0.12) 66%,transparent 66%,transparent);\n'+'    background-image: linear-gradient(315deg,transparent,transparent 33%,rgba(0, 0, 0, 0.12) 33%,rgba(0, 0, 0, 0.12) 66%,transparent 66%,transparent);\n'+'    /*animation*/\n'+'    -webkit-animation: load 5s linear 0 infinite;\n'+'    -moz-animation: load 5s linear 0 infinite;\n'+'    -ms-animation: load 5s linear 0 infinite;\n'+'    -o-animation: load 5s linear 0 infinite;\n'+'    animation: load 5s linear 0 infinite;\n'+'}\n'+'/* Then animate the stuff */\n'+'@-webkit-keyframes load { \n'+'    0% { width: 0% ;\n'+'background-position:0 0;}\n'+'100% { width: 100%;\n'+'			background-position:-40px 0;\n'+'			}\n'+'}\n'+'@-ms-keyframes load { \n'+'   0% { width: 0% ;\n'+'		background-position:0 0;}\n'+'    100% { width: 100%;\n'+'			background-position:-40px 0;\n'+'			}\n'+'}\n'+'@-o-keyframes load { \n'+'    0% { width: 0% ;\n'+'		background-position:0 0;}\n'+'   100% { width: 100%;\n'+'			background-position:-40px 0;\n'+'			}\n'+'}\n'+'@keyframes load { \n'+' 0% { width: 0% ;\n'+'		background-position:0 0;}\n'+'   100% { width: 100%;\n'+'			background-position:-40px 0;\n'+'			}\n'+'}';

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

