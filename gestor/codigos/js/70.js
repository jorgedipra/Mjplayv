var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE html>\n'+'<html lang="es">\n'+'<head>\n'+'<meta charset="utf-8" />\n'+'<title> Revista </title>\n'+'</head> \n'+'<body>\n'+'	<div id="all">\n'+'		<div id="page-flip">\n'+'			<div id="r1"><div id="p1"><div><div></div></div></div></div>\n'+'			<div id="p2"><div></div></div>\n'+'			<div id="r3"><div id="p3"><div><div></div></div></div></div>\n'+'			<div class="s"><div id="s3"><div id="sp3"></div></div></div>\n'+'			<div class="s" id="s4"><div id="s2"><div id="sp2"></div></div></div>\n'+'			<a id="coke" href="#" title="Pure CSS Coke Can"></a>\n'+'			<a id="meninas" href="#" title="CSS 3D Meninas"></a>\n'+'		</div>\n'+'	</div>\n'+'\n'+'</body>\n'+'</html>';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' body {\n'+'    padding: 0;\n'+'    margin: 0;\n'+'}\n'+'\n'+'#all {\n'+'    width: 680px;\n'+'    margin-left: auto;\n'+'    margin-right: auto;\n'+'}\n'+'\n'+'#page-flip {\n'+'    background-image: url(http://cssdeck.com/uploads/media/items/6/6h4pDpK.jpg);\n'+'    position: absolute;\n'+'    padding: 40px 40px 40px 340px;\n'+'    width: 300px;\n'+'    height: 400px;\n'+'    overflow: hidden;\n'+'}\n'+'\n'+'#r1 {\n'+'    position: absolute;\n'+'    z-index: 2;\n'+'    -webkit-transform-origin: 1315px 500px;\n'+'    -webkit-transform: translate(-1030px, -500px) rotate(-32deg);\n'+'    -webkit-transition-property: -webkit-transform, -webkit-transform-origin;\n'+'    -webkit-transition-duration: 1s;\n'+'}\n'+'\n'+'#p1 {\n'+'    width: 1285px;\n'+'    height: 1388px;\n'+'    overflow: hidden;\n'+'}\n'+'\n'+'#p1 > div {\n'+'    -webkit-transform-origin: 285px 0;\n'+'    -webkit-transform: translate(1030px, 500px) rotate(32deg);\n'+'    -webkit-transition-property: -webkit-transform, -webkit-transform-origin;\n'+'    -webkit-transition-duration: 1s;\n'+'    width: 285px;\n'+'    height: 388px;\n'+'    background-image: url(http://cssdeck.com/uploads/media/items/8/87WOlJH.jpg);\n'+'}\n'+'\n'+'#p1 > div > div {\n'+'    width: 10px;\n'+'    height: 388px;\n'+'    background: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .25)), to(rgba(0,0,0,0)));\n'+'}\n'+'\n'+'#p2 > div {\n'+'    width: 285px;\n'+'    height: 388px;\n'+'    -webkit-box-shadow: 0 0 11px rgba(0, 0, 0, .5);\n'+'    position: absolute;\n'+'    z-index: 1;\n'+'    background-image: url(http://cssdeck.com/uploads/media/items/4/4FpEEbu.jpg);\n'+'}\n'+'\n'+'#r3 {\n'+'    -webkit-transform-origin: 1315px 500px;\n'+'    -webkit-transform: translate(-1030px, -500px) rotate(-32deg);\n'+'    -webkit-transition-property: -webkit-transform, -webkit-transform-origin;\n'+'    -webkit-transition-duration: 1s;\n'+'    position: absolute;\n'+'    z-index: 2;\n'+'}\n'+'\n'+'#s3 {\n'+'    -webkit-transform-origin: 70px 500px;\n'+'    -webkit-transform: translate(215px, -500px) rotate(-32deg) translate(40px, 0);\n'+'    -webkit-transition-property: -webkit-transform, -webkit-transform-origin;\n'+'    -webkit-transition-duration: 1s;\n'+'    position: absolute;\n'+'    z-index: 1;\n'+'}\n'+'\n'+'#page-flip:hover #s3 {\n'+'    -webkit-transform-origin: 325px 500px;\n'+'    -webkit-transform: translate(-40px, -500px) rotate(0deg) translate(40px, 0);\n'+'}\n'+'\n'+'#sp3 {\n'+'    width: 25px;\n'+'    height: 1000px;\n'+'    background: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, .25)), to(rgba(0,0,0,0)));\n'+'    -webkit-transition-property: width;\n'+'    -webkit-transition-duration: 1s;\n'+'    overflow: hidden;\n'+'}\n'+'\n'+'#page-flip:hover #sp3 { width: 11px }\n'+'\n'+'.s {\n'+'    width: 285px;\n'+'    height: 388px;\n'+'    position: absolute;\n'+'    overflow: hidden;\n'+'    z-index: 3;\n'+'}\n'+'\n'+'#s2 {\n'+'    -webkit-transform-origin: 45px 500px;\n'+'    -webkit-transform: translate(240px, -500px) rotate(-32deg);\n'+'    -webkit-transition-property: -webkit-transform, -webkit-transform-origin;\n'+'    -webkit-transition-duration: 1s;\n'+'    position: absolute;\n'+'}\n'+'\n'+'#sp2 {\n'+'    width: 15px;\n'+'    height: 1000px;\n'+'    background: -webkit-gradient(linear, right top, left top, from(rgba(0, 0, 0, .18)), to(rgba(0,0,0,0)));\n'+'    overflow: hidden;\n'+'}\n'+'\n'+'#s4 {\n'+'    opacity: 1;\n'+'    -webkit-transition-duration: 0.5s;\n'+'}\n'+'\n'+'#page-flip:hover #s4 { opacity: 0 }\n'+'\n'+'#page-flip:hover #s2 {\n'+'    -webkit-transform-origin: 300px 500px;\n'+'    -webkit-transform: translate(-15px, -500px) rotate(0deg);\n'+'}\n'+'\n'+'#p3 {\n'+'    width: 1285px;\n'+'    height: 1388px;\n'+'    overflow: hidden;\n'+'}\n'+'\n'+'#p3 > div {\n'+'    -webkit-transform-origin: 0 0;\n'+'    -webkit-transform: translate(1255px, 500px) rotate(-32deg);\n'+'    -webkit-transition-property: -webkit-transform, -webkit-transform-origin;\n'+'    -webkit-transition-duration: 1s;\n'+'    -webkit-box-shadow: 0 0 11px rgba(0, 0, 0, .5);\n'+'    width: 285px;\n'+'    height: 388px;\n'+'    background-image: url(http://cssdeck.com/uploads/media/items/6/6S8oF28.jpg);\n'+'    overflow: hidden;\n'+'}\n'+'\n'+'#p3 > div > div {\n'+'    width: 9px;\n'+'    height: 500px;\n'+'    float: right;\n'+'    background: -webkit-gradient(linear, left top, right top, from(rgba(0, 0, 0, 0)), to(rgba(0,0,0,.20)));\n'+'}\n'+'\n'+'#page-flip:hover #r1 {\n'+'    -webkit-transform-origin: 1570px 500px;\n'+'    -webkit-transform: translate(-1285px, -500px) rotate(0deg);\n'+'}\n'+'\n'+'#page-flip:hover #p1 > div {\n'+'    -webkit-transform-origin: 285px 0;\n'+'    -webkit-transform: translate(1285px, 500px) rotate(0deg);\n'+'}\n'+'\n'+'#page-flip:hover #r3 {\n'+'    -webkit-transform-origin: 1570px 500px;\n'+'    -webkit-transform: translate(-1285px, -500px) rotate(0deg);\n'+'}\n'+'\n'+'#page-flip:hover #p3 > div {\n'+'    -webkit-transform-origin: 0 0;\n'+'    -webkit-transform: translate(1000px, 500px) rotate(0deg);\n'+'}\n'+'\n'+'a {\n'+'    display: block;\n'+'    position: absolute;\n'+'    margin: -20000px 0 0 0;\n'+'    padding: 1px;\n'+'    z-index: 3;\n'+'    -webkit-transition-property: margin;\n'+'    -webkit-transition-duration: 0.01s;\n'+'}\n'+'\n'+'#coke {\n'+'    width: 253px;\n'+'    height: 158px;\n'+'}\n'+'\n'+'a:hover {\n'+'    padding: 0;\n'+'    border: 1px dotted #92C7C1;\n'+'}\n'+'\n'+'#page-flip:hover #coke {\n'+'    -webkit-transition-delay: .8s;\n'+'    margin: 33px 0 0 14px;\n'+'}\n'+'\n'+'#meninas {\n'+'    width: 253px;\n'+'    height: 167px;\n'+'}\n'+'\n'+'#page-flip:hover #meninas {\n'+'    -webkit-transition-delay: .8s;\n'+'    margin: 203px 0 0 14px;\n'+'}';

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

