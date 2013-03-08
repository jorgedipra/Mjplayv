var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE html>\n'+'<html lang="es">\n'+'<head>\n'+'<meta charset="utf-8" />\n'+'<title>camara</title>\n'+'</head>\n'+'<body>\n'+'<div class="camera"></div>​\n'+'</body>\n'+'</html>';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' html, body { height: 100%; }\n'+'body {\n'+'   background: -webkit-radial-gradient(center, circle, #f0f0f0, #74a9ad);\n'+'   background: -moz-radial-gradient(center, circle, #f0f0f0, #74a9ad);\n'+'	background: -ms-radial-gradient(center, circle, #f0f0f0, #74a9ad);\n'+'	background: -o-radial-gradient(center, circle, #f0f0f0, #74a9ad);\n'+'	background: radial-gradient(center, circle, #f0f0f0, #74a9ad);\n'+'	margin: 0; padding: 10px;  \n'+'}\n'+'\n'+'.camera {\n'+'   margin: -130px auto;\n'+'   width: 410px;\n'+'    height: 260px;\n'+'   border-radius: 18px;\n'+'   background: #000;\n'+'   position: relative;\n'+'   top: 50%;\n'+'}\n'+'\n'+'.camera:before {\n'+'    content:"";\n'+'    display: block;\n'+'     height: 10px;\n'+'      width: 80px;\n'+'   border-top-left-radius: 13px 10px;\n'+'    border-top-right-radius: 13px 10px;\n'+'    position: absolute;\n'+'    background: #000;\n'+'    top: -10px;\n'+'    left: 50px;\n'+'}\n'+'\n'+'.camera:after {\n'+'    content: "";\n'+'    display: block;\n'+'    width: 120px;\n'+'    height: 120px;\n'+'    border: 10px #949e9f solid;\n'+'    border-radius: 120px;\n'+'    position: absolute;\n'+'    top: 50%;\n'+'    left: 50%;\n'+'    margin-left: -70px;\n'+'    margin-top: -70px;\n'+'}​';

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

