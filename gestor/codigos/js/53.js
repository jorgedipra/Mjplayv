var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE html>\n'+'<html lang="es">\n'+'<head>\n'+'<meta charset="utf-8" />\n'+'<title>HTML5</title>\n'+'</head>\n'+'<body>\n'+'<div class="html5">\n'+'    \n'+'    <div class="icon">\n'+'        \n'+'        <div class="bg">\n'+'            <div class="right"></div>\n'+'            <div class="left"></div>\n'+'            <div class="bottom"></div>\n'+'            <div class="middle"></div>\n'+'        </div>\n'+'        <div class="overlay">\n'+'            <div class="top"></div>\n'+'            <div class="bottom"></div>\n'+'        </div>\n'+'        <div class="text">\n'+'            <div class="left">\n'+'                <div class="top"></div>\n'+'                <div class="left"></div>\n'+'                <div class="middle"></div>\n'+'                <div class="bottom"></div>\n'+'                <div class="vert"></div>\n'+'            </div>\n'+'            <div class="right">\n'+'                <div class="top"></div>\n'+'                <div class="right"></div>\n'+'                <div class="middle"></div>\n'+'                <div class="bottom"></div>\n'+'            </div>\n'+'        </div>\n'+'        \n'+'    </div>\n'+'</div>\n'+'</body>\n'+'</html>';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' body {\n'+'background: url(http://mjplay-v.16mb.com/imagenes/fondos/fondoZz.png) center fixed;\n'+'\n'+'}\n'+'.html5 {\n'+'    width: 345px;\n'+'    height: 385px;\n'+'    display: block;\n'+'    margin: 20px auto;\n'+'    position: relative;\n'+'}\n'+'\n'+'.html5 .icon { }\n'+'\n'+'.html5 .icon .text { }\n'+'\n'+'.html5 .icon .text .left {\n'+'    display: block;\n'+'    position: absolute;\n'+'    width: 182px;\n'+'    height: 400px;\n'+'}\n'+'\n'+'.html5 .icon .text .left .left {\n'+'    display: block;\n'+'    position: absolute;\n'+'    width: 40px;\n'+'    height: 130px;\n'+'    background: #ebebeb;\n'+'    top: 72px;\n'+'    left: 82px;\n'+'    -webkit-transform: skew(5deg);\n'+'    -moz-transform: skew(5deg);\n'+'    -o-transform: skew(5deg);\n'+'    -ms-transform: skew(5deg);\n'+'    transform: skew(5deg);\n'+'}\n'+'\n'+'.html5 .icon .text .left .top {\n'+'    display: block;\n'+'    position: absolute;\n'+'    width: 104px;\n'+'    height: 40px;\n'+'    background: #ebebeb;\n'+'    top: 72px;\n'+'    left: 80px;\n'+'}\n'+'\n'+'.html5 .icon .text .left .middle {\n'+'    display: block;\n'+'    position: absolute;\n'+'    width: 96px;\n'+'    height: 40px;\n'+'    background: #ebebeb;\n'+'    top: 162px;\n'+'    left: 88px;\n'+'}\n'+'\n'+'.html5 .icon .text .left .bottom {\n'+'    display: block;\n'+'    position: absolute;\n'+'    width: 85px;\n'+'    height: 40px;\n'+'    background: #ebebeb;\n'+'    top: 261px;\n'+'    left: 102px;\n'+'    -webkit-transform: rotate(12deg);\n'+'    -moz-transform: rotate(12deg);\n'+'    -o-transform: rotate(12deg);\n'+'    -ms-transform: rotate(12deg);\n'+'    transform: rotate(12deg);\n'+'}\n'+'\n'+'.html5 .icon .text .left .vert {\n'+'    display: block;\n'+'    position: absolute;\n'+'    width: 40px;\n'+'    height: 70px;\n'+'    background: #ebebeb;\n'+'    top: 222px;\n'+'    left: 95px;\n'+'    -webkit-transform: skew(5deg);\n'+'    -moz-transform: skew(5deg);\n'+'    -o-transform: skew(5deg);\n'+'    -ms-transform: skew(5deg);\n'+'    transform: skew(5deg);\n'+'}\n'+'\n'+'.html5 .icon .text .right {\n'+'    height: 400px;\n'+'    width: 150px;\n'+'    left: 182px;\n'+'    display: block;\n'+'    position: absolute;\n'+'    overflow: hidden;\n'+'}\n'+'\n'+'.html5 .icon .text .right .top {\n'+'    display: block;\n'+'    position: absolute;\n'+'    width: 105px;\n'+'    height: 40px;\n'+'    background: #ffffff;\n'+'    top: 72px;\n'+'    left: -3px;\n'+'    -webkit-transform: skew(-5deg);\n'+'    -moz-transform: skew(-5deg);\n'+'    -o-transform: skew(-5deg);\n'+'    -ms-transform: skew(-5deg);\n'+'    transform: skew(-5deg);\n'+'}\n'+'\n'+'.html5 .icon .text .right .middle {\n'+'    display: block;\n'+'    position: absolute;\n'+'    width: 80px;\n'+'    height: 40px;\n'+'    background: #ffffff;\n'+'    top: 162px;\n'+'}\n'+'\n'+'.html5 .icon .text .right .right {\n'+'    display: block;\n'+'    position: absolute;\n'+'    width: 40px;\n'+'    height: 130px;\n'+'    background: #ffffff;\n'+'    top: 162px;\n'+'    left: 50px;\n'+'    -webkit-transform: skew(-5deg);\n'+'    -moz-transform: skew(-5deg);\n'+'    -o-transform: skew(-5deg);\n'+'    -ms-transform: skew(-5deg);\n'+'    transform: skew(-5deg);\n'+'}\n'+'\n'+'.html5 .icon .text .right .bottom {\n'+'    display: block;\n'+'    position: absolute;\n'+'    width: 85px;\n'+'    height: 40px;\n'+'    background: #ffffff;\n'+'    top: 261px;\n'+'    left: -5px;\n'+'    -webkit-transform: rotate(-12deg);\n'+'    -moz-transform: rotate(-12deg);\n'+'    -o-transform: rotate(-12deg);\n'+'    -ms-transform: rotate(-12deg);\n'+'    transform: rotate(-12deg);\n'+'}\n'+'\n'+'.html5 .icon .overlay {\n'+'    height: 400px;\n'+'    width: 150px;\n'+'    left: 182px;\n'+'    position: absolute;\n'+'    display: block;\n'+'    overflow: hidden;\n'+'}\n'+'\n'+'.html5 .icon .overlay .top {\n'+'    width: 160px;\n'+'    height: 300px;\n'+'    top: 28px;\n'+'    left: -35px;\n'+'    display: block;\n'+'    background: #f0652a;\n'+'    position: absolute;\n'+'    -webkit-transform: skew(-5deg);\n'+'    -moz-transform: skew(-5deg);\n'+'    -o-transform: skew(-5deg);\n'+'    -ms-transform: skew(-5deg);\n'+'    transform: skew(-5deg);\n'+'}\n'+'\n'+'.html5 .icon .overlay .bottom {\n'+'    position: absolute;\n'+'    top: 328px;\n'+'    left: -180px;\n'+'    display: block;\n'+'    border-color: #f0652a transparent transparent;\n'+'    border-style: solid;\n'+'    border-width: 35px 140px 0px;\n'+'    height: 0px;\n'+'    margin: 0px 10px;\n'+'    width: 0px;\n'+'}\n'+'\n'+'.html5 .icon .bg { }\n'+'\n'+'.html5 .icon .bg .middle {\n'+'    position: absolute;\n'+'    left: 132px;\n'+'    background: #e44c27;\n'+'    width: 50px;\n'+'    height: 355px;\n'+'    display: block;\n'+'}\n'+'\n'+'.html5 .icon .bg .right {\n'+'    position: absolute;\n'+'    left: 166px;\n'+'    background: #e44c27;\n'+'    width: 170px;\n'+'    height: 350px;\n'+'    display: block;\n'+'    -webkit-transform: skew(-5deg);\n'+'    -moz-transform: skew(-5deg);\n'+'    -o-transform: skew(-5deg);\n'+'    -ms-transform: skew(-5deg);\n'+'    transform: skew(-5deg);\n'+'}\n'+'\n'+'.html5 .icon .bg .left {\n'+'    position: absolute;\n'+'    left: 24px;\n'+'    background: #e44c27;\n'+'    width: 170px;\n'+'    height: 350px;\n'+'    display: block;\n'+'    -webkit-transform: skew(5deg);\n'+'    -moz-transform: skew(5deg);\n'+'    -o-transform: skew(5deg);\n'+'    -ms-transform: skew(5deg);\n'+'    transform: skew(5deg);\n'+'}\n'+'\n'+'.html5 .icon .bg .bottom {\n'+'    position: absolute;\n'+'    top: 350px;\n'+'    left: 30px;\n'+'    display: block;\n'+'    border-color: #e44c27 transparent transparent;\n'+'    border-style: solid;\n'+'    border-width: 35px 140px 0px;\n'+'    height: 0px;\n'+'    margin: 0px 10px;\n'+'    width: 0px;\n'+'}';

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

