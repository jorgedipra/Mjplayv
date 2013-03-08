var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE html>\n'+'<html lang="es">\n'+'<head>\n'+'<meta charset="utf-8" />\n'+'<title>menu</title>\n'+'</head>\n'+'<body>\n'+'<div class="box">\n'+'	<div class="box2">\n'+'    </div>\n'+'    <div class="menu">\n'+'    	<ul>\n'+'            <li class="button">0</li>\n'+'            <li class="button">1</li>\n'+'           <li class="button">2</li>\n'+'            <li class="button">3</li>\n'+'            <li class="button">4</li>\n'+'        </ul>\n'+'    </div>\n'+'</div>\n'+'</body>\n'+'</html>';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' body{\n'+'	background-color:#fff;\n'+'	margin:0;\n'+'	padding:0;\n'+'}\n'+'li {\n'+'	text-decoration:none;\n'+'	display:inline;\n'+'}\n'+'.box{\n'+'	width:100%;\n'+'	height:100%;\n'+'	position:absolute;\n'+'	background-color:#fff;\n'+'}\n'+'.box2{\n'+'	display:block;\n'+'	right:0;\n'+'	width:100%;\n'+'	height:100%;\n'+'	position:absolute;\n'+'	background-color:#fff;\n'+'}\n'+'.button{\n'+'	width:100px;\n'+'	height:100px;\n'+'	background-color:#fff;\n'+'	padding: 14px 24px;\n'+'	-webkit-border-radius: 50%;\n'+'	 -moz-border-radius: 50%;\n'+'		  border-radius: 50%;\n'+'	 border: solid 1px #fff;\n'+'	 -webkit-box-shadow: 0px 0px 2px #000000;\n'+'		-moz-box-shadow: 0px 0px 2px #000000;\n'+'		box-shadow: 0px 0px 2px #000000;\n'+'	 margin:10px 10px;\n'+'	-webkit-transition:0.5s ease-out 0;\n'+'}\n'+'.button:hover{\n'+'	padding: 17px 28px;\n'+'	border: solid 5px #000;\n'+'	margin:10px 20px;\n'+'}\n'+'.menu{\n'+'	display:block;\n'+'	bottom:0;\n'+'	width:100%;\n'+'	height:80px;\n'+'	position:absolute;\n'+'	padding-top:10px;\n'+'	-webkit-box-shadow: 0px 0px 20px #000000;\n'+'	-moz-box-shadow: 0px 0px 20px #000000;\n'+'	box-shadow: 0px 0px 20px #000000;\n'+'	background-color: #fff;\n'+'}';

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

