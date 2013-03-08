var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE html>\n'+'<html lang="es">\n'+'<head>\n'+'<meta charset="utf-8" />\n'+'<title>Fondo CSS</title>\n'+'</head>\n'+'<body>\n'+'</body>\n'+'</html>';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' body{\n'+'/*background-size*/\n'+'-webkit-background-size:66px 66px;\n'+'   -moz-background-size:66px 66px;\n'+'     -o-background-size:66px 66px;\n'+'        background-size:66px 66px;\n'+'background-color:hsl(200,100%,50%);\n'+'background-image:-webkit-repeating-radial-gradient( hsla(200,100%,80%,.8) 0px, hsla(200,100%,80%,.5) 4px, hsla(200,100%,80%,0) 50px), -webkit-repeating-radial-gradient( hsla(260,100%, 0%, 0) 0px, hsla(260,100%,50%,.1) 2px, hsla(260,100%, 0%,0) 10px);\n'+'background-image:-moz-repeating-radial-gradient( hsla(200,100%,80%,.8) 0px, hsla(200,100%,80%,.5) 4px, hsla(200,100%,80%,0) 50px), -moz-repeating-radial-gradient( hsla(260,100%, 0%, 0) 0px, hsla(260,100%,50%,.1) 2px, hsla(260,100%, 0%,0) 10px);\n'+'background-image:-ms-repeating-radial-gradient( hsla(200,100%,80%,.8) 0px, hsla(200,100%,80%,.5) 4px, hsla(200,100%,80%,0) 50px), -ms-repeating-radial-gradient( hsla(260,100%, 0%, 0) 0px, hsla(260,100%,50%,.1) 2px, hsla(260,100%, 0%,0) 10px);\n'+'background-image:-o-repeating-radial-gradient( hsla(200,100%,80%,.8) 0px, hsla(200,100%,80%,.5) 4px, hsla(200,100%,80%,0) 50px), -o-repeating-radial-gradient( hsla(260,100%, 0%, 0) 0px, hsla(260,100%,50%,.1) 2px, hsla(260,100%, 0%,0) 10px);\n'+'background-image:repeating-radial-gradient( hsla(200,100%,80%,.8) 0px, hsla(200,100%,80%,.5) 4px, hsla(200,100%,80%,0) 50px), repeating-radial-gradient( hsla(260,100%, 0%, 0) 0px, hsla(260,100%,50%,.1) 2px, hsla(260,100%, 0%,0) 10px);\n'+'}\n'+'';

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

