var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE html>\n'+'<html lang="es">\n'+'<head>\n'+'<meta charset="utf-8" />\n'+'<title>Boton</title>\n'+'</head>\n'+'<body>\n'+'<article>\n'+'<div class="s-button">\n'+'    <a class="frame" href="#"></a>\n'+'    <div class="body">Original</div>\n'+'</div>\n'+'<div class="s-button" data-color="red">\n'+'    <a class="frame" href="#"></a>\n'+'    <div class="body">Red</div>\n'+'</div>\n'+'<div class="s-button" data-color="blue">\n'+'    <a class="frame" href="#"></a>\n'+'    <div class="body">Blue</div>\n'+'</div>\n'+'<div class="s-button" data-color="green">\n'+'    <a class="frame" href="#"></a>\n'+'    <div class="body">Green</div>\n'+'</div>\n'+'</article>\n'+'</body>\n'+'</html>';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' body{\n'+'background-color:#333;\n'+'font:30px sans-serif;\n'+'}\n'+'article{\n'+'margin:100px auto;\n'+'width:500px;\n'+'}\n'+'div.s-button{\n'+'position:relative;\n'+'float:left;\n'+'margin-right:20px;\n'+'margin-bottom:10px;\n'+'}\n'+'div.s-button a.frame{\n'+'position:absolute;\n'+'top:2px;\n'+'left:0px;\n'+'border:1px solid rgba(0,0,0, 0.3);\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:0 0px 8px rgba(0,0,0, 0.7) inset,         0 0px 2px rgba(255,255,255, 0.7);\n'+'   -moz-box-shadow:0 0px 8px rgba(0,0,0, 0.7) inset,         0 0px 2px rgba(255,255,255, 0.7);\n'+'        box-shadow:0 0px 8px rgba(0,0,0, 0.7) inset,         0 0px 2px rgba(255,255,255, 0.7);\n'+'/*linear-gradient*/\n'+'background:-webkit-gradient(linear,left top,left bottom,color-stop(rgba(255,255,255,0),0),color-stop(rgba(255,255,255,0.32),0.49),color-stop(rgba(255,255,255,0),0.51),color-stop(rgba(255,255,255,0),1));\n'+'background:-webkit-linear-gradient(top,  rgba(255,255,255,0) 0%, rgba(255,255,255,0.32) 49%, rgba(255,255,255,0) 51%, rgba(255,255,255,0) 100%);\n'+'background:   -moz-linear-gradient(top,  rgba(255,255,255,0) 0%, rgba(255,255,255,0.32) 49%, rgba(255,255,255,0) 51%, rgba(255,255,255,0) 100%);\n'+'background:     -o-linear-gradient(top,  rgba(255,255,255,0) 0%, rgba(255,255,255,0.32) 49%, rgba(255,255,255,0) 51%, rgba(255,255,255,0) 100%);\n'+'background:        linear-gradient(top,  rgba(255,255,255,0) 0%, rgba(255,255,255,0.32) 49%, rgba(255,255,255,0) 51%, rgba(255,255,255,0) 100%);\n'+'background:-webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(255,255,255,0)), color-stop(49%,rgba(255,255,255,0.32)), color-stop(51%,rgba(255,255,255,0)), color-stop(100%,rgba(255,255,255,0)));\n'+'text-decoration:none;\n'+'display:block;\n'+'}\n'+'div.s-button div{\n'+'background-color:#335;\n'+'border:3px solid rgb(255,240,40);\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:0 1px 8px rgba(0,0,0, 0.7),        0 1px 2px rgba(0,0,0, 1.0) inset,        0 0px 18px rgba(0,0,0, 1.0) inset;\n'+'   -moz-box-shadow:0 1px 8px rgba(0,0,0, 0.7),        0 1px 2px rgba(0,0,0, 1.0) inset,        0 0px 18px rgba(0,0,0, 1.0) inset;\n'+'        box-shadow:0 1px 8px rgba(0,0,0, 0.7),        0 1px 2px rgba(0,0,0, 1.0) inset,        0 0px 18px rgba(0,0,0, 1.0) inset;\n'+'/*transition*/\n'+'-webkit-transition:background-color 100ms linear 0, box-shadow 100ms linear 0;\n'+'   -moz-transition:background-color 100ms linear 0, box-shadow 100ms linear 0;\n'+'     -o-transition:background-color 100ms linear 0, box-shadow 100ms linear 0;\n'+'        transition:background-color 100ms linear 0, box-shadow 100ms linear 0;\n'+'}\n'+'div.s-button a:hover+div{\n'+'background-color:#436;\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:0 1px 8px rgba(255,240,30, 0.7),         0 1px 18px rgba(255,240,30, 0.7),        0 1px 2px rgba(0,0,0, 1.0) inset;\n'+'   -moz-box-shadow:0 1px 8px rgba(255,240,30, 0.7),         0 1px 18px rgba(255,240,30, 0.7),        0 1px 2px rgba(0,0,0, 1.0) inset;\n'+'        box-shadow:0 1px 8px rgba(255,240,30, 0.7),         0 1px 18px rgba(255,240,30, 0.7),        0 1px 2px rgba(0,0,0, 1.0) inset;\n'+'}\n'+'div.s-button a:active{\n'+'background-position:0 2px;\n'+'}\n'+'div.s-button a:active+div{\n'+'margin-top:2px;\n'+'margin-bottom:-2px;\n'+'}\n'+'div.s-button >*{\n'+'width:8em;\n'+'height:2.2em;\n'+'padding:0.5em;\n'+'text-align:center;\n'+'/*border-radius*/\n'+'-webkit-border-radius:1.6em;\n'+'   -moz-border-radius:1.6em;\n'+'        border-radius:1.6em;\n'+'color:#fff;\n'+'text-shadow:0 -1px 1px #000,         0 0 4px #000,        0 0 14px #000;\n'+'font-size:22px;\n'+'font-weight:bold;\n'+'box-sizing:border-box;\n'+'}\n'+'/* red */\n'+'div.s-button[data-color="red"] >div{\n'+'background-color:#622;\n'+'}\n'+'div.s-button[data-color="red"] a:hover+div{\n'+'background-color:#822;\n'+'}\n'+'/* green */\n'+'div.s-button[data-color="green"] >div{\n'+'background-color:#262;\n'+'}\n'+'div.s-button[data-color="green"] a:hover+div{\n'+'background-color:#483;\n'+'}\n'+'/* blue */\n'+'div.s-button[data-color="blue"] >div{\n'+'background-color:#226;\n'+'}\n'+'div.s-button[data-color="blue"] a:hover+div{\n'+'background-color:#349;\n'+'}\n'+'';

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

