var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE html>\n'+'<html lang="es">\n'+'<head>\n'+'<meta charset="utf-8" />\n'+'<title>Transition </title>\n'+'</head>\n'+'<body>\n'+'<div id="delay_demo" class="shadow hover">\n'+'<div id="dd_main"></div>\n'+'<div id="dd1"></div>\n'+'<div id="dd2"></div>\n'+'<div id="dd3"></div>\n'+'<div id="dd4"></div>\n'+'<div id="dd5"></div>\n'+'<div id="dd6"></div>\n'+'<div id="dd7"></div>\n'+'<div id="dd8"></div>\n'+'</div>\n'+'</body>\n'+'</html>';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' body{\n'+'background: url(/imagenes/fondos/fondoG.png) center fixed;\n'+'}\n'+'\n'+'#delay_demo {\n'+'position:relative;\n'+'width:500px;\n'+'height:400px;\n'+'margin:0 auto 10px;\n'+'border:1px #aaa solid;\n'+'padding:10px;\n'+'background: #ffffff; /* Old browsers */\n'+'background: -moz-radial-gradient(center, ellipse cover,  #ffffff 0%, #f1f1f1 33%, #dbbfa0 52%, #dbbfa0 60%, #dbbfa0 68%, #f6f6f6 100%); /* FF3.6+ */\n'+'background: -webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%,#ffffff), color-stop(33%,#f1f1f1), color-stop(52%, #dbbfa0), color-stop(60%,#dbbfa0), color-stop(68%,#dbbfa0), color-stop(100%,#f6f6f6)); /* Chrome,Safari4+ */\n'+'background: -webkit-radial-gradient(center, ellipse cover,  #ffffff 0%,#f1f1f1 33%,#dbbfa0 52%,#dbbfa0 60%,#dbbfa0 68%,#f6f6f6 100%); /* Chrome10+,Safari5.1+ */\n'+'background: -o-radial-gradient(center, ellipse cover,  #ffffff 0%,#f1f1f1 33%,#dbbfa0 52%,#dbbfa0 60%,#dbbfa0 68%,#f6f6f6 100%); /* Opera 12+ */\n'+'}\n'+'#dd_main {\n'+'	width:100px;\n'+'	height:100px;\n'+'	position:absolute;\n'+'	top:160px;\n'+'	left:210px;\n'+'	background-color:red;\n'+'	-webkit-border-radius:50px;\n'+'	-moz-border-radius:50px;\n'+'	border-radius:50px;\n'+'	-webkit-transition: all 2s ease-in-out;\n'+'		-moz-transition: all 2s ease-in-out;\n'+'		-o-transition: all 2s ease-in-out;\n'+'		-ms-transition: all 2s ease-in-out;\n'+'		transition: all 2s ease-in-out;}\n'+'\n'+'#dd1, #dd2, #dd3, #dd4, #dd5, #dd6, #dd7, #dd8 {\n'+'	width:20px;\n'+'	height:20px;\n'+'	-webkit-border-radius:10px;\n'+'	-moz-border-radius:10px;\n'+'	border-radius:10px;\n'+'	position:absolute;\n'+'	top:200px;\n'+'	left:250px;\n'+'	background-color:blue;\n'+'	-webkit-transition: all 2s ease-in-out;\n'+'		-moz-transition: all 2s ease-in-out;\n'+'		-o-transition: all 2s ease-in-out;\n'+'		-ms-transition: all 2s ease-in-out;\n'+'		transition: all 2s ease-in-out;	\n'+'	-webkit-transform: translate3d(0,0,0);\n'+'		-moz-transform: translate3d(0,0,0);\n'+'		-o-transform: translate3d(0,0,0);\n'+'		-ms-transform: translate3d(0,0,0);\n'+'		transform: translate3d(0,0,0);}\n'+'	#dd1 {\n'+'   -webkit-transition-delay: 0.1s;\n'+'  -moz-transition-delay: 0.1s;\n'+'  -ms-transition-delay: 0.1s;\n'+'  -o-transition-delay: 0.1s;\n'+'	transition-delay: 0.1s;\n'+'	}\n'+'	#dd2 {\n'+'   -webkit-transition-delay: 0.2s;\n'+'   -moz-transition-delay: 0.2s;\n'+'   -ms-transition-delay: 0.2s;\n'+'   -o-transition-delay: 0.2s;\n'+'		transition-delay: 0.2s;\n'+'	}\n'+'	#dd3 {\n'+'   -webkit-transition-delay: 0.3s;\n'+'   -moz-transition-delay: 0.3s;\n'+'   -ms-transition-delay: 0.3s;\n'+'   -o-transition-delay: 0.3s;\n'+'		transition-delay: 0.3s;\n'+'	}\n'+'	#dd4 {\n'+'    -webkit-transition-delay: 0.4s;\n'+'    -moz-transition-delay: 0.4s;\n'+'    -ms-transition-delay: 0.4s;\n'+'    -o-transition-delay: 0.4s;\n'+'		transition-delay: 0.4s;\n'+'	}\n'+'	#dd5 {\n'+'   -webkit-transition-delay: 0.5s;\n'+'   -moz-transition-delay: 0.5s;\n'+'   -ms-transition-delay: 0.5s;\n'+'   -o-transition-delay: 0.5s;\n'+'		transition-delay: 0.5s;\n'+'	}\n'+'	#dd6 {\n'+'   -webkit-transition-delay: 0.6s;\n'+'   -moz-transition-delay: 0.6s;\n'+'  -ms-transition-delay: 0.6s;\n'+'  -o-transition-delay: 0.6s;\n'+'		transition-delay: 0.6s;\n'+'	}\n'+'	#dd7 {\n'+'   -webkit-transition-delay: 0.7s;\n'+'   -moz-transition-delay: 0.7s;\n'+'   -ms-transition-delay: 0.7s;\n'+'   -o-transition-delay: 0.7s;\n'+'		transition-delay: 0.7s;\n'+'	}\n'+'	#dd8 {\n'+'   -webkit-transition-delay: 0.8s;\n'+'   -moz-transition-delay: 0.8s;\n'+'   -ms-transition-delay: 0.8s;\n'+'   -o-transition-delay: 0.8s;\n'+'		transition-delay: 0.8s;\n'+'	}\n'+'#delay_demo:hover #dd_main {\n'+'	opacity:0;\n'+'}\n'+'#delay_demo:hover #dd1, #delay_demo.hover_effect #dd1 {\n'+'	-webkit-transform: translate(-250px,-200px);\n'+'		-moz-transform: translate(-250px,-200px);\n'+'		-o-transform: translate(-250px,-200px);\n'+'		-ms-transform: translate(-250px,-200px);\n'+'		transform: translate(-250px,-200px);}\n'+'#delay_demo:hover #dd2, #delay_demo.hover_effect #dd2 {\n'+'	-webkit-transform: translate(0,-200px);\n'+'		-moz-transform: translate(0,-200px);\n'+'		-o-transform: translate(0,-200px);\n'+'		-ms-transform: translate(0,-200px);\n'+'		transform: translate(0,-200px);}\n'+'#delay_demo:hover #dd3, #delay_demo.hover_effect #dd3 {\n'+'	-webkit-transform: translate(250px,-200px);\n'+'		-moz-transform: translate(250px,-200px);\n'+'		-o-transform: translate(250px,-200px);\n'+'		-ms-transform: translate(250px,-200px);\n'+'		transform: translate(250px,-200px);}\n'+'#delay_demo:hover #dd4, #delay_demo.hover_effect #dd4 {\n'+'	-webkit-transform: translate(250px, 0);\n'+'		-moz-transform: translate(250px, 0);\n'+'		-o-transform: translate(250px, 0);\n'+'		-ms-transform: translate(250px, 0);\n'+'		transform: translate(250px, 0);}\n'+'#delay_demo:hover #dd5, #delay_demo.hover_effect #dd5 {\n'+'	-webkit-transform: translate(250px,200px);\n'+'		-moz-transform: translate(250px,200px);\n'+'		-o-transform: translate(250px,200px);\n'+'		-ms-transform: translate(250px,200px);\n'+'		transform: translate(250px,200px);}\n'+'#delay_demo:hover #dd6, #delay_demo.hover_effect #dd6 {\n'+'	-webkit-transform: translate(0,200px);\n'+'		-moz-transform: translate(0,200px);\n'+'		-o-transform: translate(0,200px);\n'+'		-ms-transform: translate(0,200px);\n'+'		transform: translate(0,200px);}\n'+'#delay_demo:hover #dd7, #delay_demo.hover_effect #dd7 {\n'+'	-webkit-transform: translate(-250px,200px);\n'+'		-moz-transform: translate(-250px,200px);\n'+'		-o-transform: translate(-250px,200px);\n'+'		-ms-transform: translate(-250px,200px);\n'+'		transform: translate(-250px,200px);}\n'+'#delay_demo:hover #dd8, #delay_demo.hover_effect #dd8 {\n'+'	-webkit-transform: translate(-250px,0);\n'+'		-moz-transform: translate(-250px,0);\n'+'		-o-transform: translate(-250px,0);\n'+'		-ms-transform: translate(-250px,0);\n'+'		transform: translate(-250px,0);}';

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

