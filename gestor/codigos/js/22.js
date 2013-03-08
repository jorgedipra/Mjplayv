var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE html>\n'+'<html lang="es">\n'+'<head>\n'+'<meta charset="utf-8" />\n'+'<title>transform (rotacion)</title>\n'+'</head>\n'+'<body>\n'+'<div id="transDemo4" class="shadow hover">\n'+'<div id="rotateX">rotateX</div>\n'+'<div id="rotateY">rotateY</div>\n'+'<div id="rotateZ">rotateZ</div>	\n'+'<div class="clear"></div>\n'+'</div>\n'+'</body>\n'+'</html>';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' body { background:#d2d6d6; }\n'+'#transDemo4 {\n'+'width:400px;\n'+'height:190px;\n'+'margin:0 auto 10px;\n'+'border:1px #aaa solid;\n'+'padding:10px;\n'+'}\n'+'#transDemo4 div:not(.clear) {\n'+'	-webkit-transition:all 2s ease-in-out;\n'+'	-moz-transition:all 2s ease-in-out;\n'+'	-o-transition:all 2s ease-in-out;\n'+'	-ms-transition:all 2s ease-in-out;\n'+'	transition:all 2s ease-in-out;			\n'+'	-webkit-perspective: 800px;\n'+'	-webkit-perspective-origin: 50% 100px;	\n'+'	-moz-perspective: 800px;\n'+'	-moz-perspective-origin: 50% 100px;\n'+'	\n'+'	-o-perspective: 800px;\n'+'	-o-perspective-origin: 50% 100px;\n'+'	\n'+'	-ms-perspective: 800px;\n'+'	-ms-perspective-origin: 50% 100px;	\n'+'	\n'+'	perspective: 800px;\n'+'	perspective-origin: 50% 100px;	\n'+'	\n'+'	width:70px;\n'+'	height:130px;\n'+'	margin:10px 20px;\n'+'	padding:10px;\n'+'	border:1px blue solid;\n'+'	float:left;\n'+'}\n'+'\n'+'#transDemo4:hover #rotateX, #transDemo4.hover_effect #rotateX {\n'+'	-webkit-transform:rotateX(180deg);\n'+'	-moz-transform:rotateX(180deg);\n'+'	-o-transform:rotateX(180deg);\n'+'	-ms-transform:rotateX(180deg);\n'+'	transform:rotateX(180deg);				\n'+'}\n'+'#transDemo4:hover #rotateY, #transDemo4.hover_effect #rotateY {\n'+'	-webkit-transform:rotateY(180deg);\n'+'	-moz-transform:rotateY(180deg);\n'+'	-o-transform:rotateY(180deg);\n'+'	-ms-transform:rotateY(180deg);\n'+'	transform:rotateY(180deg);	\n'+'}\n'+'#transDemo4:hover #rotateZ, #transDemo4.hover_effect #rotateZ {\n'+'	-webkit-transform:rotateZ(180deg);\n'+'	-moz-transform:rotateZ(180deg);\n'+'	-o-transform:rotateZ(180deg);\n'+'	-ms-transform:rotateZ(180deg);\n'+'	transform:rotateZ(180deg);\n'+'}';

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

