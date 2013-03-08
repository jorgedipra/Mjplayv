var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE html>\n'+'<html lang="es">\n'+'<head>\n'+'<meta charset="utf-8" />\n'+'<title>CSS3 Aplicado</title>\n'+'</head>\n'+'<body>\n'+'<article class="tt">\n'+'<img src="http://mjplay-v.16mb.com/imagenes/Esescri/editorALL.png"></img>\n'+'</article>\n'+'<article class="ttt">\n'+'<img src="http://mjplay-v.16mb.com/imagenes/Esescri/editorALL.png"></img>\n'+'</article>\n'+'<article class="imagen">\n'+'</article>\n'+'<article id="fondo">\n'+'</article>\n'+'</body>\n'+'</html>';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' body{\n'+'background-image:url(http://mjplay-v.16mb.com/imagenes/fondos/fondoMm.png);\n'+'}\n'+'#fondo{\n'+'background:url(http://mjplay-v.16mb.com/imagenes/principal/home2.png) center center no-repeat,                url(http://mjplay-v.16mb.com/imagenes/fondos/fondoLl.png) top left repeat;\n'+'border:solid #000 2px;\n'+'height:100px;\n'+'margin:0 auto;\n'+'width:300px;\n'+'-webkit-border-bottom-right-radius:100px;\n'+'-webkit-border-bottom-left-radius:100px;\n'+'-moz-border-radius-bottomright:100px;\n'+'-moz-border-radius-bottomleft:100px;\n'+'border-bottom-right-radius:100px;\n'+'border-bottom-left-radius:100px;\n'+'}\n'+'#fondo:hover{\n'+'-webkit-box-reflect:below -5px -webkit-gradient(linear, left top, left bottom, from(transparent), to(rgba(255, 255, 255, 0.3)));\n'+'/*animation*/\n'+'-webkit-animation:cssAnimation 1.4907s 12 linear;\n'+'   -moz-animation:cssAnimation 1.4907s 12 linear;\n'+'    -ms-animation:cssAnimation 1.4907s 12 linear;\n'+'     -o-animation:cssAnimation 1.4907s 12 linear;\n'+'        animation:cssAnimation 1.4907s 12 linear;\n'+'}\n'+'.imagen{\n'+'background:url(http://mjplay-v.16mb.com/Escritorio/explorer/carpetas/Galeria/images/large/31.jpg) center center no-repeat;\n'+'border:solid #000 2px;\n'+'height:400px;\n'+'margin:0 auto;\n'+'width:400px;\n'+'/*background-size*/\n'+'-webkit-background-size:280px 388px;\n'+'   -moz-background-size:280px 388px;\n'+'     -o-background-size:280px 388px;\n'+'        background-size:280px 388px;\n'+'}\n'+'.imagen:hover{\n'+'/*transform*/\n'+'-webkit-transform:scale(1) rotate(5deg) translateX(5px) translateY(5px) skewX(5deg) skewY(5deg);\n'+'   -moz-transform:scale(1) rotate(5deg) translateX(5px) translateY(5px) skewX(5deg) skewY(5deg);\n'+'    -ms-transform:scale(1) rotate(5deg) translateX(5px) translateY(5px) skewX(5deg) skewY(5deg);\n'+'     -o-transform:scale(1) rotate(5deg) translateX(5px) translateY(5px) skewX(5deg) skewY(5deg);\n'+'        transform:scale(1) rotate(5deg) translateX(5px) translateY(5px) skewX(5deg) skewY(5deg);\n'+'}\n'+'.imagen:active{\n'+'/*transform*/\n'+'-webkit-transform:scale(1) rotate(-5deg) translateX(5px) translateY(5px) skewX(5deg) skewY(5deg);\n'+'   -moz-transform:scale(1) rotate(-5deg) translateX(5px) translateY(5px) skewX(5deg) skewY(5deg);\n'+'    -ms-transform:scale(1) rotate(-5deg) translateX(5px) translateY(5px) skewX(5deg) skewY(5deg);\n'+'     -o-transform:scale(1) rotate(-5deg) translateX(5px) translateY(5px) skewX(5deg) skewY(5deg);\n'+'        transform:scale(1) rotate(-5deg) translateX(5px) translateY(5px) skewX(5deg) skewY(5deg);\n'+'}\n'+'.ttt{\n'+'height:200px;\n'+'right:20%;\n'+'width:100px;\n'+'position:absolute;\n'+'}\n'+'.tt{\n'+'height:200px;\n'+'left:20%;\n'+'width:100px;\n'+'position:absolute;\n'+'}\n'+'.ttt img,\n'+'.tt img{\n'+'height:50%;\n'+'width:100%;\n'+'-webkit-box-reflect:below -5px -webkit-gradient(linear, left top, left bottom, from(transparent), to(rgba(255, 255, 255, 0.3)));\n'+'/*animation*/\n'+'-webkit-animation:cssAnimation 1.4907s 12 linear;\n'+'   -moz-animation:cssAnimation 1.4907s 12 linear;\n'+'    -ms-animation:cssAnimation 1.4907s 12 linear;\n'+'     -o-animation:cssAnimation 1.4907s 12 linear;\n'+'        animation:cssAnimation 1.4907s 12 linear;\n'+'}\n'+'@-webkit-keyframes cssAnimation{\n'+'from { -webkit-transform: rotate(4deg) scale(1) skew(1deg) translate(10px); }\n'+'to { -webkit-transform: rotate(360deg) scale(1) skew(1deg) translate(0px); }\n'+'}\n'+'@-moz-keyframes cssAnimation{\n'+'from { -moz-transform: rotate(4deg) scale(1) skew(1deg) translate(10px); }\n'+'to { -moz-transform: rotate(360deg) scale(1) skew(1deg) translate(0px); }\n'+'}\n'+'@-o-keyframes cssAnimation{\n'+'from { -o-transform: rotate(4deg) scale(1) skew(1deg) translate(10px); }\n'+'to { -o-transform: rotate(360deg) scale(1) skew(1deg) translate(0px); }\n'+'}\n'+'';

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

