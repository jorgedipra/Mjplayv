var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE html>\n'+'<html lang="es">\n'+'<head>\n'+'<meta charset="utf-8" />\n'+'<title>Imagen</title>\n'+'</head>\n'+'<body>\n'+' <div class="box">\n'+'        <div class="reflection"></div>\n'+'    </div>\n'+'</body>\n'+'</html>\n'+'';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' body {\n'+'    -webkit-perspective: 700;\n'+'	-moz-perspective: 700;\n'+'	perspective: 700;\n'+'	background: #fff;\n'+'}\n'+'\n'+'.box {\n'+'    width:500px;\n'+'    height:375px;\n'+'    background:#fff;\n'+'    overflow:hidden;\n'+'    -webkit-animation: box-animation 5s ease infinite alternate;\n'+'	-moz-animation: box-animation 5s ease infinite alternate;\n'+'	animation: box-animation 5s ease infinite alternate;\n'+'	position: relative;\n'+'	margin: 50px auto;\n'+'}\n'+'\n'+'.reflection {\n'+'    width:300%;\n'+'    height:700%;\n'+'    -webkit-animation: reflection-animation 5s ease infinite alternate;\n'+'	-moz-animation: reflection-animation 5s ease infinite alternate;\n'+'	animation: reflection-animation 5s ease infinite alternate;\n'+'    background:-webkit-gradient(linear,100% 0%,0% 100%,color-stop(0,rgba(255,255,255,.5)),color-stop(.5,rgba(255,255,255,.1)),color-stop(.5,rgba(255,255,255,0)),color-stop(1,rgba(255,255,255,0)));\n'+'	background:url(http://mjplay-v.16mb.com/Escritorio/explorer/carpetas/Galeria/images/large/8.jpg) repeat-y;\n'+'}\n'+'\n'+'@-webkit-keyframes box-animation {\n'+'    0% { -webkit-transform:rotateY(30deg); }\n'+'    50% { -webkit-transform:rotateY(0deg);}\n'+'	100% { -webkit-transform:rotateY(-30deg);}\n'+'}\n'+'@-webkit-keyframes reflection-animation {\n'+'    0% { -webkit-transform: translateX(-40%); }\n'+'    100% { -webkit-transform: translateX(0%); }\n'+'}\n'+'\n'+'@-moz-keyframes box-animation {\n'+'    0% { -moz-transform:rotateY(30deg); }\n'+'    50% { -moz-transform:rotateY(0deg);}\n'+'	100% { -moz-transform:rotateY(-30deg);}\n'+'}\n'+'@-moz-keyframes reflection-animation {\n'+'    0% { -moz-transform: translateX(-60%); }\n'+'    100% { -moz-transform: translateX(0%); }\n'+'}\n'+'\n'+'@keyframes box-animation {\n'+'    0% { transform:rotateY(30deg); }\n'+'    50% { transform:rotateY(0deg);}\n'+'	100% { transform:rotateY(-30deg);}\n'+'}\n'+'@keyframes reflection-animation {\n'+'    0% { transform: translateX(-60%); }\n'+'    100% { transform: translateX(0%); }\n'+'}';

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

