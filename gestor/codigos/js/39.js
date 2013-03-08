var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE html>\n'+'<html lang="es">\n'+'<head>\n'+'<meta charset="utf-8" />\n'+'<title>Barra de desplazamiento vertical</title>\n'+'</head>\n'+'<body>\n'+'<div id="wrapper">\n'+'    <div class="scrollbar" id="style-default">\n'+'      <div class="force-overflow"></div>\n'+'    </div>\n'+'\n'+'    <div class="scrollbar" id="style-1">\n'+'      <div class="force-overflow"></div>\n'+'    </div>\n'+'\n'+'    <div class="scrollbar" id="style-2">\n'+'      <div class="force-overflow"></div>\n'+'    </div>\n'+'\n'+'    <div class="scrollbar" id="style-3">\n'+'      <div class="force-overflow"></div>\n'+'    </div>\n'+'\n'+'    <div class="scrollbar" id="style-4">\n'+'      <div class="force-overflow"></div>\n'+'    </div>\n'+'\n'+'    <div class="scrollbar" id="style-5">\n'+'      <div class="force-overflow"></div>\n'+'    </div>\n'+'\n'+'    <div class="scrollbar" id="style-6">\n'+'      <div class="force-overflow"></div>\n'+'    </div>\n'+'\n'+'    <div class="scrollbar" id="style-7">\n'+'      <div class="force-overflow"></div>\n'+'    </div>\n'+'\n'+'    <div class="scrollbar" id="style-8">\n'+'      <div class="force-overflow"></div>\n'+'    </div>\n'+'\n'+'    <div class="scrollbar" id="style-9">\n'+'      <div class="force-overflow"></div>\n'+'    </div>\n'+'\n'+'    <div class="scrollbar" id="style-10">\n'+'      <div class="force-overflow"></div>\n'+'    </div>\n'+'\n'+'    <div class="scrollbar" id="style-11">\n'+'      <div class="force-overflow"></div>\n'+'    </div>\n'+'\n'+'    <div class="scrollbar" id="style-13">\n'+'      <div class="force-overflow"></div>\n'+'    </div>\n'+'\n'+'    <div class="scrollbar" id="style-14">\n'+'      <div class="force-overflow"></div>\n'+'    </div>\n'+'\n'+'    <div class="scrollbar" id="style-15">\n'+'      <div class="force-overflow"></div>\n'+'    </div>\n'+'</body>\n'+'</html>';

var st = '<style>';
var sf = '</style>';

var defaultcss = 'header{\n'+'font-family:"Lobster", cursive;\n'+'text-align:center;\n'+'font-size:25px;\n'+'}\n'+'#info{\n'+'font-size:18px;\n'+'color:#555;\n'+'text-align:center;\n'+'margin-bottom:25px;\n'+'}\n'+'a{\n'+'color:#074E8C;\n'+'}\n'+'.scrollbar{\n'+'margin-left:30px;\n'+'float:left;\n'+'height:300px;\n'+'width:65px;\n'+'background:#F5F5F5;\n'+'overflow-y:scroll;\n'+'margin-bottom:25px;\n'+'}\n'+'.force-overflow{\n'+'min-height:450px;\n'+'}\n'+'#wrapper{\n'+'text-align:center;\n'+'width:90%;\n'+'margin:auto;\n'+'}\n'+'/*\n'+' *  STYLE 1\n'+' */\n'+'\n'+'#style-1::-webkit-scrollbar-track{\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);\n'+'   -moz-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);\n'+'        box-shadow:inset 0 0 6px rgba(0,0,0,0.3);\n'+'/*border-radius*/\n'+'-webkit-border-radius:10px;\n'+'   -moz-border-radius:10px;\n'+'        border-radius:10px;\n'+'background-color:#F5F5F5;\n'+'}\n'+'#style-1::-webkit-scrollbar{\n'+'width:12px;\n'+'background-color:#F5F5F5;\n'+'}\n'+'#style-1::-webkit-scrollbar-thumb{\n'+'/*border-radius*/\n'+'-webkit-border-radius:10px;\n'+'   -moz-border-radius:10px;\n'+'        border-radius:10px;\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);\n'+'   -moz-box-shadow:inset 0 0 6px rgba(0,0,0,.3);\n'+'        box-shadow:inset 0 0 6px rgba(0,0,0,.3);\n'+'background-color:#555;\n'+'}\n'+'/*\n'+' *  STYLE 2\n'+' */\n'+'\n'+'#style-2::-webkit-scrollbar-track{\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);\n'+'   -moz-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);\n'+'        box-shadow:inset 0 0 6px rgba(0,0,0,0.3);\n'+'/*border-radius*/\n'+'-webkit-border-radius:10px;\n'+'   -moz-border-radius:10px;\n'+'        border-radius:10px;\n'+'background-color:#F5F5F5;\n'+'}\n'+'#style-2::-webkit-scrollbar{\n'+'width:12px;\n'+'background-color:#F5F5F5;\n'+'}\n'+'#style-2::-webkit-scrollbar-thumb{\n'+'/*border-radius*/\n'+'-webkit-border-radius:10px;\n'+'   -moz-border-radius:10px;\n'+'        border-radius:10px;\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);\n'+'   -moz-box-shadow:inset 0 0 6px rgba(0,0,0,.3);\n'+'        box-shadow:inset 0 0 6px rgba(0,0,0,.3);\n'+'background-color:#D62929;\n'+'}\n'+'/*\n'+' *  STYLE 3\n'+' */\n'+'\n'+'#style-3::-webkit-scrollbar-track{\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);\n'+'   -moz-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);\n'+'        box-shadow:inset 0 0 6px rgba(0,0,0,0.3);\n'+'background-color:#F5F5F5;\n'+'}\n'+'#style-3::-webkit-scrollbar{\n'+'width:6px;\n'+'background-color:#F5F5F5;\n'+'}\n'+'#style-3::-webkit-scrollbar-thumb{\n'+'background-color:#000000;\n'+'}\n'+'/*\n'+' *  STYLE 4\n'+' */\n'+'\n'+'#style-4::-webkit-scrollbar-track{\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);\n'+'   -moz-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);\n'+'        box-shadow:inset 0 0 6px rgba(0,0,0,0.3);\n'+'background-color:#F5F5F5;\n'+'}\n'+'#style-4::-webkit-scrollbar{\n'+'width:10px;\n'+'background-color:#F5F5F5;\n'+'}\n'+'#style-4::-webkit-scrollbar-thumb{\n'+'background-color:#000000;\n'+'border:2px solid #555555;\n'+'}\n'+'/*\n'+' *  STYLE 5\n'+' */\n'+'\n'+'#style-5::-webkit-scrollbar-track{\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);\n'+'   -moz-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);\n'+'        box-shadow:inset 0 0 6px rgba(0,0,0,0.3);\n'+'background-color:#F5F5F5;\n'+'}\n'+'#style-5::-webkit-scrollbar{\n'+'width:10px;\n'+'background-color:#F5F5F5;\n'+'}\n'+'#style-5::-webkit-scrollbar-thumb{\n'+'background-color:#0ae;\n'+'background-image:-webkit-gradient(linear, 0 0, 0 100%,	                   color-stop(.5, rgba(255, 255, 255, .2)),					   color-stop(.5, transparent), to(transparent));\n'+'}\n'+'/*\n'+' *  STYLE 6\n'+' */\n'+'\n'+'#style-6::-webkit-scrollbar-track{\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);\n'+'   -moz-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);\n'+'        box-shadow:inset 0 0 6px rgba(0,0,0,0.3);\n'+'background-color:#F5F5F5;\n'+'}\n'+'#style-6::-webkit-scrollbar{\n'+'width:10px;\n'+'background-color:#F5F5F5;\n'+'}\n'+'#style-6::-webkit-scrollbar-thumb{\n'+'background-color:#F90;\n'+'background-image:-webkit-linear-gradient(45deg,	                                          rgba(255, 255, 255, .2) 25%,											  transparent 25%,											  transparent 50%,											  rgba(255, 255, 255, .2) 50%,											  rgba(255, 255, 255, .2) 75%,											  transparent 75%,											  transparent);\n'+'}\n'+'/*\n'+' *  STYLE 7\n'+' */\n'+'\n'+'#style-7::-webkit-scrollbar-track{\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);\n'+'   -moz-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);\n'+'        box-shadow:inset 0 0 6px rgba(0,0,0,0.3);\n'+'background-color:#F5F5F5;\n'+'/*border-radius*/\n'+'-webkit-border-radius:10px;\n'+'   -moz-border-radius:10px;\n'+'        border-radius:10px;\n'+'}\n'+'#style-7::-webkit-scrollbar{\n'+'width:10px;\n'+'background-color:#F5F5F5;\n'+'}\n'+'#style-7::-webkit-scrollbar-thumb{\n'+'/*border-radius*/\n'+'-webkit-border-radius:10px;\n'+'   -moz-border-radius:10px;\n'+'        border-radius:10px;\n'+'background-image:-webkit-gradient(linear,									   left bottom,									   left top,									   color-stop(0.44, rgb(122,153,217)),									   color-stop(0.72, rgb(73,125,189)),									   color-stop(0.86, rgb(28,58,148)));\n'+'}\n'+'/*\n'+' *  STYLE 8\n'+' */\n'+'\n'+'#style-8::-webkit-scrollbar-track{\n'+'border:1px solid black;\n'+'background-color:#F5F5F5;\n'+'}\n'+'#style-8::-webkit-scrollbar{\n'+'width:10px;\n'+'background-color:#F5F5F5;\n'+'}\n'+'#style-8::-webkit-scrollbar-thumb{\n'+'background-color:#000000;\n'+'}\n'+'/*\n'+' *  STYLE 9\n'+' */\n'+'\n'+'#style-9::-webkit-scrollbar-track{\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);\n'+'   -moz-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);\n'+'        box-shadow:inset 0 0 6px rgba(0,0,0,0.3);\n'+'background-color:#F5F5F5;\n'+'}\n'+'#style-9::-webkit-scrollbar{\n'+'width:10px;\n'+'background-color:#F5F5F5;\n'+'}\n'+'#style-9::-webkit-scrollbar-thumb{\n'+'background-color:#F90;\n'+'background-image:-webkit-linear-gradient(90deg,	                                          rgba(255, 255, 255, .2) 25%,											  transparent 25%,											  transparent 50%,											  rgba(255, 255, 255, .2) 50%,											  rgba(255, 255, 255, .2) 75%,											  transparent 75%,											  transparent);\n'+'}\n'+'/*\n'+' *  STYLE 10\n'+' */\n'+'\n'+'#style-10::-webkit-scrollbar-track{\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);\n'+'   -moz-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);\n'+'        box-shadow:inset 0 0 6px rgba(0,0,0,0.3);\n'+'background-color:#F5F5F5;\n'+'/*border-radius*/\n'+'-webkit-border-radius:10px;\n'+'   -moz-border-radius:10px;\n'+'        border-radius:10px;\n'+'}\n'+'#style-10::-webkit-scrollbar{\n'+'width:10px;\n'+'background-color:#F5F5F5;\n'+'}\n'+'#style-10::-webkit-scrollbar-thumb{\n'+'background-color:#AAA;\n'+'/*border-radius*/\n'+'-webkit-border-radius:10px;\n'+'   -moz-border-radius:10px;\n'+'        border-radius:10px;\n'+'background-image:-webkit-linear-gradient(90deg,	                                          rgba(0, 0, 0, .2) 25%,											  transparent 25%,											  transparent 50%,											  rgba(0, 0, 0, .2) 50%,											  rgba(0, 0, 0, .2) 75%,											  transparent 75%,											  transparent);\n'+'}\n'+'/*\n'+' *  STYLE 11\n'+' */\n'+'\n'+'#style-11::-webkit-scrollbar-track{\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);\n'+'   -moz-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);\n'+'        box-shadow:inset 0 0 6px rgba(0,0,0,0.3);\n'+'background-color:#F5F5F5;\n'+'/*border-radius*/\n'+'-webkit-border-radius:10px;\n'+'   -moz-border-radius:10px;\n'+'        border-radius:10px;\n'+'}\n'+'#style-11::-webkit-scrollbar{\n'+'width:10px;\n'+'background-color:#F5F5F5;\n'+'}\n'+'#style-11::-webkit-scrollbar-thumb{\n'+'background-color:#3366FF;\n'+'/*border-radius*/\n'+'-webkit-border-radius:10px;\n'+'   -moz-border-radius:10px;\n'+'        border-radius:10px;\n'+'background-image:-webkit-linear-gradient(0deg,	                                          rgba(255, 255, 255, 0.5) 25%,											  transparent 25%,											  transparent 50%,											  rgba(255, 255, 255, 0.5) 50%,											  rgba(255, 255, 255, 0.5) 75%,											  transparent 75%,											  transparent);\n'+'}\n'+'/*\n'+' *  STYLE 12\n'+' */\n'+'\n'+'#style-12::-webkit-scrollbar-track{\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.9);\n'+'   -moz-box-shadow:inset 0 0 6px rgba(0,0,0,0.9);\n'+'        box-shadow:inset 0 0 6px rgba(0,0,0,0.9);\n'+'/*border-radius*/\n'+'-webkit-border-radius:10px;\n'+'   -moz-border-radius:10px;\n'+'        border-radius:10px;\n'+'background-color:#444444;\n'+'}\n'+'#style-12::-webkit-scrollbar{\n'+'width:12px;\n'+'background-color:#F5F5F5;\n'+'}\n'+'#style-12::-webkit-scrollbar-thumb{\n'+'/*border-radius*/\n'+'-webkit-border-radius:10px;\n'+'   -moz-border-radius:10px;\n'+'        border-radius:10px;\n'+'background-color:#D62929;\n'+'background-image:-webkit-linear-gradient(90deg,											  transparent,											  rgba(0, 0, 0, 0.4) 50%,											  transparent,											  transparent);\n'+'}\n'+'/*\n'+' *  STYLE 13\n'+' */\n'+'\n'+'#style-13::-webkit-scrollbar-track{\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.9);\n'+'   -moz-box-shadow:inset 0 0 6px rgba(0,0,0,0.9);\n'+'        box-shadow:inset 0 0 6px rgba(0,0,0,0.9);\n'+'/*border-radius*/\n'+'-webkit-border-radius:10px;\n'+'   -moz-border-radius:10px;\n'+'        border-radius:10px;\n'+'background-color:#CCCCCC;\n'+'}\n'+'#style-13::-webkit-scrollbar{\n'+'width:12px;\n'+'background-color:#F5F5F5;\n'+'}\n'+'#style-13::-webkit-scrollbar-thumb{\n'+'/*border-radius*/\n'+'-webkit-border-radius:10px;\n'+'   -moz-border-radius:10px;\n'+'        border-radius:10px;\n'+'background-color:#D62929;\n'+'background-image:-webkit-linear-gradient(90deg,											  transparent,											  rgba(0, 0, 0, 0.4) 50%,											  transparent,											  transparent);\n'+'}\n'+'/*\n'+' *  STYLE 14\n'+' */\n'+'\n'+'#style-14::-webkit-scrollbar-track{\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.6);\n'+'   -moz-box-shadow:inset 0 0 6px rgba(0,0,0,0.6);\n'+'        box-shadow:inset 0 0 6px rgba(0,0,0,0.6);\n'+'background-color:#CCCCCC;\n'+'}\n'+'#style-14::-webkit-scrollbar{\n'+'width:10px;\n'+'background-color:#F5F5F5;\n'+'}\n'+'#style-14::-webkit-scrollbar-thumb{\n'+'background-color:#FFF;\n'+'background-image:-webkit-linear-gradient(90deg,	                                          rgba(0, 0, 0, 1) 0%,											  rgba(0, 0, 0, 1) 25%,											  transparent 100%,											  rgba(0, 0, 0, 1) 75%,											  transparent);\n'+'}\n'+'/*\n'+' *  STYLE 15\n'+' */\n'+'\n'+'#style-15::-webkit-scrollbar-track{\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.1);\n'+'   -moz-box-shadow:inset 0 0 6px rgba(0,0,0,0.1);\n'+'        box-shadow:inset 0 0 6px rgba(0,0,0,0.1);\n'+'background-color:#F5F5F5;\n'+'/*border-radius*/\n'+'-webkit-border-radius:10px;\n'+'   -moz-border-radius:10px;\n'+'        border-radius:10px;\n'+'}\n'+'#style-15::-webkit-scrollbar{\n'+'width:10px;\n'+'background-color:#F5F5F5;\n'+'}\n'+'#style-15::-webkit-scrollbar-thumb{\n'+'/*border-radius*/\n'+'-webkit-border-radius:10px;\n'+'   -moz-border-radius:10px;\n'+'        border-radius:10px;\n'+'background-color:#FFF;\n'+'background-image:-webkit-gradient(linear,									   40% 0%,									   75% 84%,									   from(#4D9C41),									   to(#19911D),									   color-stop(.6,#54DE5D));\n'+'}\n'+'/*\n'+' *  STYLE 16\n'+' */\n'+'\n'+'#style-16::-webkit-scrollbar-track{\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.1);\n'+'   -moz-box-shadow:inset 0 0 6px rgba(0,0,0,0.1);\n'+'        box-shadow:inset 0 0 6px rgba(0,0,0,0.1);\n'+'background-color:#F5F5F5;\n'+'/*border-radius*/\n'+'-webkit-border-radius:10px;\n'+'   -moz-border-radius:10px;\n'+'        border-radius:10px;\n'+'}\n'+'#style-16::-webkit-scrollbar{\n'+'width:10px;\n'+'background-color:#F5F5F5;\n'+'}\n'+'#style-16::-webkit-scrollbar-thumb{\n'+'/*border-radius*/\n'+'-webkit-border-radius:10px;\n'+'   -moz-border-radius:10px;\n'+'        border-radius:10px;\n'+'background-color:#FFF;\n'+'background-image:-webkit-linear-gradient(top,											  #e4f5fc 0%,											  #bfe8f9 50%,											  #9fd8ef 51%,											  #2ab0ed 100%);\n'+'}\n'+'';

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

