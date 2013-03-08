var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE html>\n'+'<html lang="es">\n'+'<head>\n'+'<meta charset="utf-8" />\n'+'<meta name="Description" content="Figura creadas con css3 y html5" />\n'+'<meta name="Keywords"  content="Figuras CSS" />\n'+'<title>Figuras CSS</title>\n'+'</head>\n'+'<body>\n'+'<article id="figu">\n'+'<!-- Square -->\n'+'<div id="square"></div>\n'+'<hr>\n'+'\n'+'<!-- Rectangle -->\n'+'<div id="rectangle"></div>\n'+'<hr>\n'+'\n'+'<!-- Circle -->\n'+'<div id="circle"></div>\n'+'<hr>\n'+'\n'+'<!-- Oval -->\n'+'<div id="oval"></div>\n'+'<hr>\n'+'\n'+'<!-- Triangle Up -->\n'+'<div id="triangleup"></div>\n'+'<hr>\n'+'\n'+'<!-- Triangle Down -->\n'+'<div id="triangledown"></div>\n'+'<hr>\n'+'\n'+'<!-- Triangle Left -->\n'+'<div id="triangleleft"></div>\n'+'<hr>\n'+'\n'+'<!-- Triangle Right -->\n'+'<div id="triangleright"></div>\n'+'<hr>\n'+'\n'+'<!-- Triangle Top Left -->\n'+'<div id="triangletopleft"></div>\n'+'<hr>\n'+'\n'+'<!-- Triangle Top right -->\n'+'<div id="triangletopright"></div>\n'+'<hr>\n'+'\n'+'<!-- Triangle  Bottom Left -->\n'+'<div id="trianglebottomleft"></div>\n'+'<hr>\n'+'\n'+'<!-- Triangle  Bottom right -->\n'+'<div id="trianglebottomright"></div>\n'+'<hr>\n'+'\n'+'<!-- Curved Tail Arrow -->\n'+'<div id="curvedtailarrow"></div>\n'+'<hr>\n'+'\n'+'<!-- Trapezoid -->\n'+'<div id="trapezoid"></div>\n'+'<hr>\n'+'\n'+'<!-- Parallelogram -->\n'+'<div id="parallelogram"></div>\n'+'<hr>\n'+'\n'+'<!-- Star (6-points) -->\n'+'<div id="star-six"></div>\n'+'<hr>\n'+'\n'+'<!-- Star (5-points) -->\n'+'<div id="star-five"></div>\n'+'<hr>\n'+'\n'+'<!-- Pentagon -->\n'+'<div id="pentagon"></div>\n'+'<hr>\n'+'\n'+'<!-- Heart -->\n'+'<div id="heart"></div>\n'+'<hr>\n'+'\n'+'<!-- Infinity -->\n'+'<div id="infinity"></div>\n'+'<hr>\n'+'</article>\n'+'</body>\n'+'</html>';

var st = '<style>';
var sf = '</style>';

var defaultcss = 'body{\n'+'background: url(http://mjplay-v.16mb.com/imagenes/fondos/fondoCc.png) center fixed;\n'+'color:#fff; \n'+'}\n'+'hr{\n'+'margin:35px 0; \n'+'padding:5px;\n'+'background:#fff;\n'+'}\n'+'div {\n'+'    background:#2F2C80;\n'+'    margin:10px auto;\n'+'   \n'+'}\n'+'#figu{\n'+'margin: 0 25%;\n'+'text-align: center;\n'+'width:400px;\n'+'}\n'+'#square {\n'+'    width: 100px;\n'+'    height: 100px;\n'+'}\n'+'\n'+'#rectangle {\n'+'    width: 200px;\n'+'    height: 100px;\n'+'}\n'+'\n'+'#circle {\n'+'    width: 100px;\n'+'    height: 100px;\n'+'    -webkit-border-radius: 50px;\n'+'}\n'+'\n'+'#oval {\n'+'    width: 200px;\n'+'    height: 100px;\n'+'    -webkit-border-radius: 50%;\n'+'}\n'+'\n'+'#triangleup {\n'+'    background: transparent;\n'+'    width: 0;\n'+'    height: 0;\n'+'    border-left: 50px solid transparent;\n'+'    border-right: 50px solid transparent;\n'+'    border-bottom: 100px solid #2F2C80;\n'+'}\n'+'\n'+'#triangledown {\n'+'    background: transparent;\n'+'    width: 0;\n'+'    height: 0;\n'+'    border-left: 50px solid transparent;\n'+'    border-right: 50px solid transparent;\n'+'    border-top: 100px solid 2F2C80;\n'+'}\n'+'\n'+'#triangleleft {\n'+'    background: transparent;\n'+'    width: 0;\n'+'    height: 0;\n'+'    border-top: 50px solid transparent;\n'+'    border-right: 100px solid #2F2C80;\n'+'    border-bottom: 50px solid transparent;\n'+'}\n'+'\n'+'#triangleright {\n'+'    background: transparent;\n'+'    width: 0;\n'+'    height: 0;\n'+'    border-top: 50px solid transparent;\n'+'    border-left: 100px solid #2F2C80;\n'+'    border-bottom: 50px solid transparent;\n'+'}\n'+'\n'+'#triangletopleft {\n'+'    background: transparent;\n'+'    width: 0;\n'+'    height: 0;\n'+'    border-top: 100px solid #2F2C80;\n'+'    border-right: 100px solid transparent;\n'+'}\n'+'\n'+'#triangletopright {\n'+'    background: transparent;\n'+'    width: 0;\n'+'    height: 0;\n'+'    border-top: 100px solid #2F2C80;\n'+'    border-left: 100px solid transparent;\n'+'}\n'+'\n'+'#trianglebottomleft {\n'+'    background: transparent;\n'+'    width: 0;\n'+'    height: 0;\n'+'    border-bottom: 100px solid #2F2C80;\n'+'    border-right: 100px solid transparent;\n'+'}\n'+'\n'+'#trianglebottomright {\n'+'    background: transparent;\n'+'    width: 0;\n'+'    height: 0;\n'+'    border-bottom: 100px solid #2F2C80;\n'+'    border-left: 100px solid transparent;\n'+'}\n'+'\n'+'#curvedtailarrow {\n'+'    position: relative;\n'+'    width: 0;\n'+'    height: 0;\n'+'    background: transparent;\n'+'    border-bottom: 9px solid #2F2C80;\n'+'    border-left: 9px solid transparent;\n'+'    -webkit-transform: rotate(10deg);\n'+'}\n'+'#curvedtailarrow:after {\n'+'    content: "";\n'+'    position: absolute;\n'+'    border-top: 3px solid #2F2C80;\n'+'    border-radius: 20px 0 0 0;\n'+'    top: -3px;\n'+'    left: -18px;\n'+'    width: 12px;\n'+'    height: 12px;\n'+'    -webkit-transform: rotate(45deg);\n'+'}\n'+'\n'+'#trapezoid {\n'+'    background: transparent;\n'+'	border-bottom: 100px solid #2F2C80;\n'+'	border-left: 50px solid transparent;\n'+'	border-right: 50px solid transparent;\n'+'	height: 0;\n'+'	width: 100px;\n'+'}\n'+'\n'+'#parallelogram {\n'+'    width: 150px;\n'+'	height: 100px;\n'+'    -webkit-transform: skew(20deg);\n'+'}\n'+'\n'+'#star-six {\n'+'    background: transparent;\n'+'    width: 0;\n'+'    height: 0;\n'+'    border-left: 50px solid transparent;\n'+'    border-right: 50px solid transparent;\n'+'    border-bottom: 100px solid #2F2C80;\n'+'    position: relative;\n'+'}\n'+'#star-six:after {\n'+'    background: transparent;\n'+'    width: 0;\n'+'    height: 0;\n'+'    border-left: 50px solid transparent;\n'+'    border-right: 50px solid transparent;\n'+'    border-top: 100px solid #2F2C80;\n'+'    position: absolute;\n'+'    content: "";\n'+'    left: -50px;\n'+'    top: 30px;\n'+'}\n'+'\n'+'#star-five {\n'+'    background: transparent;\n'+'   margin: 50px 0;\n'+'   position: relative;\n'+'   width: 0px;\n'+'   height: 0px;\n'+'   border-right:  100px solid transparent;\n'+'   border-bottom: 70px  solid #2F2C80;\n'+'   border-left:   100px solid transparent;\n'+'   -webkit-transform: rotate(35deg);\n'+'}\n'+'#star-five:before {\n'+'   border-bottom: 80px solid #2F2C80;\n'+'   border-left: 30px solid transparent;\n'+'   border-right: 30px solid transparent;\n'+'   position: absolute;\n'+'   height: 0;\n'+'   width: 0;\n'+'   top: -45px;\n'+'   left: -65px;\n'+'   content: "";\n'+'   -webkit-transform: rotate(-35deg);\n'+'}\n'+'#star-five:after {\n'+'    background: transparent;\n'+'    position: absolute;\n'+'    width: 0;\n'+'    height: 0;\n'+'    border-right: 100px solid transparent;\n'+'    border-bottom: 70px solid #2F2C80;\n'+'    border-left: 100px solid transparent;\n'+'    content: "";\n'+'    -webkit-transform: rotate(-70deg);\n'+'    top :3px;\n'+'    left: -105px;\n'+'}\n'+'\n'+'#pentagon {\n'+'    background: transparent;    \n'+'    position: relative;\n'+'    width: 54px;\n'+'    border-left: 18px solid transparent;\n'+'    border-right: 18px solid transparent;\n'+'    border-top: 50px solid #2F2C80;\n'+'}\n'+'#pentagon:before {\n'+'    background: transparent;    \n'+'    position: absolute;\n'+'    width: 0;\n'+'    height: 0;\n'+'    top: -85px;\n'+'    left: -18px;\n'+'    border-left: 45px solid transparent;\n'+'    border-right: 45px solid transparent;\n'+'    border-bottom: 35px solid #2F2C80;\n'+'    content: "";\n'+'}\n'+'\n'+'#heart {\n'+'    background: transparent;    \n'+'    position: relative;\n'+'    width: 100px;\n'+'    height: 90px;\n'+'}\n'+'#heart:before,\n'+'#heart:after {\n'+'    position: absolute;\n'+'    content: "";\n'+'    left: 50px;\n'+'    top: 0;\n'+'    width: 50px;\n'+'    height: 80px;\n'+'    background: #2F2C80;\n'+'    -webkit-border-radius: 50px 50px 0 0;\n'+'    -webkit-transform: rotate(-45deg);\n'+'    -webkit-transform-origin: 0 100%;\n'+'}\n'+'\n'+'#heart:after {\n'+'    left: 0;\n'+'    -webkit-transform: rotate(45deg);\n'+'    -webkit-transform-origin: 100% 100%;\n'+'}\n'+'\n'+'#infinity {\n'+'    background: transparent;\n'+'    position: relative;\n'+'    width: 212px;\n'+'    height: 100px;\n'+'}\n'+'#infinity:before,\n'+'#infinity:after {\n'+'    content: "";\n'+'    position: absolute;\n'+'    top: 0;\n'+'    left: 0;\n'+'    width: 60px;\n'+'    height: 60px;\n'+'    border: 20px solid #2F2C80;\n'+'    border-radius: 50px 50px 0 50px;\n'+'    -webkit-transform: rotate(-45deg);\n'+'}\n'+'#infinity:after {\n'+'    left: auto;\n'+'    right: 0;\n'+'    border-radius: 50px 50px 50px 0;\n'+'    -webkit-transform: rotate(45deg);\n'+'}\n'+'';

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

