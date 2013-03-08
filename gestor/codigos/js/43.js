var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE html>\n'+'<html lang="es">\n'+'<head>\n'+'<meta charset="utf-8" />\n'+'<title>Botones</title>\n'+'</head>\n'+'<body>\n'+'<label class="buttonmenu">\n'+'<span class="outer"><span class="inner"></span></span>\n'+'<a class="aindex" href="##">\n'+'CODIGO LIBRE\n'+'&nbsp;&nbsp;</a>\n'+'</label>\n'+'\n'+'<label class="buttonmenu">\n'+'<span class="outer"><span class="inner"></span></span>\n'+'<a  class="aindex" href="##">\n'+'TECNOLOGIAS\n'+'&nbsp;&nbsp;</a>\n'+'</label>\n'+'\n'+'<label class="buttonmenu">\n'+'<span class="outer"><span class="inner"></span></span>\n'+'<a  class="aindex" href="##">\n'+'CODIGOS WEB\n'+'&nbsp;&nbsp;</a>\n'+'</label>\n'+'</body>\n'+'</html>\n'+'';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' @font-face{\n'+'font-family: "Aclonica";\n'+'  font-style: normal;\n'+'  font-weight: normal;\n'+'  src: local("Aclonica"), local("Aclonica-Regular"), url("http://themes.googleusercontent.com/static/fonts/aclonica/v3/VVH16EjBQLZ2NYB8eVnrO_esZW2xOQ-xsNqO47m55DA.woff") format("woff");\n'+'}\n'+'.aindex{\n'+'text-decoration:none;\n'+'opacity:0.8;\n'+'color:#121e82;\n'+'}\n'+'.aindex:hover{\n'+'color:#fff;\n'+'}\n'+'body{\n'+'background:#fff;\n'+'text-align:center;\n'+'margin:11%;\n'+'}\n'+'.buttonmenu{\n'+'background:#fff;\n'+'display:inline-block;\n'+'*zoom:1;\n'+'*display:inline;\n'+'padding:0px .30em 0px .15em;\n'+'border-width:1px;\n'+'border-style:solid;\n'+'outline:none;\n'+'border-color:#2129cc;\n'+'opacity:1;\n'+'position:relative;\n'+'margin:10px;\n'+'font-size:27px;\n'+'font-family:"Aclonica",Arial;\n'+'text-shadow:2px 2px 4px #005fed;\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:-3px 3px 6px #3691d6;\n'+'   -moz-box-shadow:-3px 3px 6px #3691d6;\n'+'        box-shadow:-3px 3px 6px #3691d6;\n'+'}\n'+'.buttonmenu:hover{\n'+'opacity:1;\n'+'background:#fff;\n'+'font-size:27px;\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:0px 0px 0px #FFF;\n'+'   -moz-box-shadow:0px 0px 0px #FFF;\n'+'        box-shadow:0px 0px 0px #FFF;\n'+'}\n'+'.buttonmenu:before, .buttonmenu:after{\n'+'content:"";\n'+'display:block;\n'+'position:absolute;\n'+'border-style:solid;\n'+'border-width:0 .7em .7em 0;\n'+'width:.1em;\n'+'border-color:#fff;\n'+'}\n'+'.buttonmenu:before{\n'+'top:-1px;\n'+'right:-1px;\n'+'border-bottom-color:#2129cc;\n'+'}\n'+'.buttonmenu:after{\n'+'top:-.1px;\n'+'right:-.9px;\n'+'border-color:transparent;\n'+'border-bottom-color:#fff;\n'+'}\n'+'.buttonmenu:hover .inner{\n'+'opacity:0.7;\n'+'}\n'+'.buttonmenu .outer{\n'+'background:#2989d8;\n'+'background:-moz-radial-gradient(center, ellipse cover,  #2989d8 0%, #101354 99%);\n'+'background:-webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%,#2989d8), color-stop(99%,#101354));\n'+'background:-webkit-radial-gradient(center, ellipse cover,  #2989d8 0%,#101354 99%);\n'+'background:-o-radial-gradient(center, ellipse cover,  #2989d8 0%,#101354 99%);\n'+'background:-ms-radial-gradient(center, ellipse cover,  #2989d8 0%,#101354 99%);\n'+'background:radial-gradient(center, ellipse cover,  #2989d8 0%,#101354 99%);\n'+'border:1px solid black;\n'+'/*border-radius*/\n'+'-webkit-border-radius:20px;\n'+'   -moz-border-radius:20px;\n'+'        border-radius:20px;\n'+'display:block;\n'+'float:left;\n'+'height:25px;\n'+'margin:10px;\n'+'width:25px;\n'+'}\n'+'.buttonmenu .inner{\n'+'background:#e4f5fc;\n'+'background:-moz-radial-gradient(center, ellipse cover,  #e4f5fc 0%, #bfe8f9 50%, #9fd8ef 51%, #2ab0ed 100%);\n'+'background:-webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%,#e4f5fc), color-stop(50%,#bfe8f9),   color-stop(51%,#9fd8ef), color-stop(100%,#2ab0ed));\n'+'background:-webkit-radial-gradient(center, ellipse cover,  #e4f5fc 0%,#bfe8f9 50%,#9fd8ef 51%,#2ab0ed 100%);\n'+'background:-o-radial-gradient(center, ellipse cover,  #e4f5fc 0%,#bfe8f9 50%,#9fd8ef 51%,#2ab0ed 100%);\n'+'background:-ms-radial-gradient(center, ellipse cover,  #e4f5fc 0%,#bfe8f9 50%,#9fd8ef 51%,#2ab0ed 100%);\n'+'background:radial-gradient(center, ellipse cover,  #e4f5fc 0%,#bfe8f9 50%,#9fd8ef 51%,#2ab0ed 100%);\n'+'/*border-radius*/\n'+'-webkit-border-radius:20px;\n'+'   -moz-border-radius:20px;\n'+'        border-radius:20px;\n'+'display:block;\n'+'height:19px;\n'+'/*bola*/\n'+'margin:3px;\n'+'opacity:0;\n'+'/*transition*/\n'+'-webkit-transition:opacity .5s;\n'+'   -moz-transition:opacity .5s;\n'+'     -o-transition:opacity .5s;\n'+'        transition:opacity .5s;\n'+'width:19px;\n'+':;\n'+'}\n'+'';

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

