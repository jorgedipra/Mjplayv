var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE html>\n'+'<html lang="es">\n'+'<head>\n'+'<meta charset="utf-8" />\n'+'<title>boton</title>\n'+'</head>\n'+'<body>\n'+'<button class="depth" type="button">&#10004;</button>\n'+'</body>\n'+'</html>';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' html {\n'+' -webkit-tap-highlight-color: hsla(0,0,0,0);\n'+' tap-highlight-color: hsla(0,0,0,0);\n'+'}\n'+'\n'+'body {\n'+'    background-color: #363636;\n'+'    background-image: -webkit-linear-gradient(45deg, hsla(0,0%,0%,.25) 25%, transparent 25%, transparent 75%, hsla(0,0%,0%,.25) 75%, hsla(0,0%,0%,.25)), -webkit-linear-gradient(45deg, hsla(0,0%,0%,.25) 25%, transparent 25%, transparent 75%, hsla(0,0%,0%,.25) 75%, hsla(0,0%,0%,.25));\n'+'    background-image: -moz-linear-gradient(45deg, hsla(0,0%,0%,.25) 25%, transparent 25%, transparent 75%, hsla(0,0%,0%,.25) 75%, hsla(0,0%,0%,.25)), -moz-linear-gradient(45deg, hsla(0,0%,0%,.25) 25%, transparent 25%, transparent 75%, hsla(0,0%,0%,.25) 75%, hsla(0,0%,0%,.25));\n'+'    background-image: -ms-linear-gradient(45deg, hsla(0,0%,0%,.25) 25%, transparent 25%, transparent 75%, hsla(0,0%,0%,.25) 75%, hsla(0,0%,0%,.25)), -ms-linear-gradient(45deg, hsla(0,0%,0%,.25) 25%, transparent 25%, transparent 75%, hsla(0,0%,0%,.25) 75%, hsla(0,0%,0%,.25));\n'+'   background-image: -o-linear-gradient(45deg, hsla(0,0%,0%,.25) 25%, transparent 25%, transparent 75%, hsla(0,0%,0%,.25) 75%, hsla(0,0%,0%,.25)), -o-linear-gradient(45deg, hsla(0,0%,0%,.25) 25%, transparent 25%, transparent 75%, hsla(0,0%,0%,.25) 75%, hsla(0,0%,0%,.25));\n'+'  background-image: linear-gradient(45deg, hsla(0,0%,0%,.25) 25%, transparent 25%, transparent 75%, hsla(0,0%,0%,.25) 75%, hsla(0,0%,0%,.25)), linear-gradient(45deg, hsla(0,0%,0%,.25) 25%, transparent 25%, transparent 75%, hsla(0,0%,0%,.25) 75%, hsla(0,0%,0%,.25));\n'+' background-position: 0 0, 2px 2px;\n'+'background-size: 4px 4px;\n'+'padding: 100px;\n'+'}\n'+'\n'+'button {\n'+'   left: 50%;\n'+'  margin: -40px;\n'+' position: absolute;\n'+'  top: 50%;\n'+'}\n'+'\n'+'button:hover, button:active { outline: 0 }\n'+'\n'+'/* 3D Button\n'+'   ================================================== */\n'+'\n'+'button.depth {\n'+'    background: #444;\n'+'    border: none;\n'+'    border-radius: 80px;\n'+'    box-shadow: inset 0 0 2px 2px hsla(0,0%,0%,.2), inset 0 0 2px 4px hsla(0,0%,0%,.2), inset 0 0 2px 6px hsla(0,0%,0%,.2), inset 0 0 1px 8px hsla(0,0%,0%,.5), inset 0 -4px 2px 4px hsla(0,0%,0%,.5), inset 0 1px 1px 8px hsla(0,0%,100%,.25), inset 0 -30px 30px hsla(0,0%,0%,.2), 0 -4px 8px 4px hsla(0,0%,0%,.5), 0 10px 10px hsla(0,0%,0%,.25), 0 0 2px 2px hsla(0,0%,0%,.2), 0 0 2px 4px hsla(0,0%,0%,.2), 0 0 2px 6px hsla(0,0%,0%,.2), 0 0 2px 8px hsla(0,0%,0%,.5), 0 1px 2px 8px hsla(0,0%,100%,.25), 0 -1px 2px 8px hsla(0,0%,0%,.5);\n'+'    color: #303030;\n'+'    cursor: pointer;\n'+'    font: bold 40px/85px sans-serif;\n'+'    height: 80px;\n'+'    padding: 0;\n'+'    text-shadow: 0 1px 1px hsla(0,0%,100%,.25), 0 -1px 1px hsla(0,0%,0%,.75);\n'+'    width: 80px;\n'+'}\n'+'\n'+'button.depth:hover, button.depth:focus {\n'+'   color: #0ab;\n'+'   text-shadow: 0 0 20px hsla(240,75%,75%,.5), 0 1px 1px hsla(0,0%,100%,.25), 0 -1px 1px hsla(0,0%,0%,.75);\n'+'}\n'+'\n'+'button.depth:active {\n'+'    box-shadow: inset 0 0 2px 2px hsla(0,0%,0%,.2), inset 0 0 2px 4px hsla(0,0%,0%,.2), inset 0 0 2px 6px hsla(0,0%,0%,.2), inset 0 0 1px 7px hsla(0,0%,0%,.5), inset 0 5px 15px 7px hsla(0,0%,0%,.15), inset 0 -4px 2px 3px hsla(0,0%,0%,.5), inset 0 1px 1px 7px hsla(0,0%,100%,.25), inset 0 -30px 30px hsla(0,0%,0%,.1), inset 0 30px 30px hsla(0,0%,0%,.2), 0 -4px 8px 4px hsla(0,0%,0%,.5), 0 5px 10px hsla(0,0%,0%,.25), 0 0 2px 2px hsla(0,0%,0%,.2), 0 0 2px 4px hsla(0,0%,0%,.2), 0 0 2px 6px hsla(0,0%,0%,.2), 0 0 2px 8px hsla(0,0%,0%,.5), 0 1px 2px 8px hsla(0,0%,100%,.25), 0 -1px 2px 8px hsla(0,0%,0%,.5);\n'+'    line-height: 86px;\n'+'}';

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

