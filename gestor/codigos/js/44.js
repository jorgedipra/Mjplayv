var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff ='<!DOCTYPE html>\n'+'<html lang="es">\n'+'<head>\n'+'<meta charset="utf-8" />\n'+'<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />\n'+'<title>Dock Menu</title>\n'+'<script type="text/javascript" src="http://www.ndesign-studio.com/demo/css-dock-menu/js/jquery.js"></script>\n'+'<script type="text/javascript" src="http://www.ndesign-studio.com/demo/css-dock-menu/js/interface.js"></script>\n'+'<!--[if lt IE 7]>\n'+' <style type="text/css">\n'+' .dock img { behavior: url(iepngfix.htc) }\n'+' </style>\n'+'<![endif]-->\n'+'</head>\n'+'<body>\n'+'<!--top dock -->\n'+'<div class="dock" id="dock">\n'+'  <div class="dock-container">\n'+'<a class="dock-item" href="http://mjplay-v.16mb.com" target="_blank"><img src="http://mjplay-v.16mb.com/imagenes/Esescri/editorALL.png" alt="home" /><span>home</span></a>\n'+'\n'+'	  <a class="dock-item" href="https://www.facebook.com/MJPlayV" target="_blank"><img src="http://mjplay-v.16mb.com/recursos/img/facebook.png" alt="face" /><span>Face</span></a>  \n'+'\n'+'          <a class="dock-item" href="https://twitter.com/mjplayv" target="_blank"><img src="http://mjplay-v.16mb.com/recursos/img/twitter.png" alt="twitter" /><span>Twitter</span></a>\n'+'\n'+'<a class="dock-item" href="http://www.youtube.com/subscription_center?add_user=MJVIDEOPLAY" target="_blank"><img src="http://mjplay-v.16mb.com/recursos/img/youtube.png" alt="yotube" /><span>Youtube</span></a>\n'+'\n'+'<a class="dock-item" href="https://plus.google.com/u/0/102520169474839934484/posts" target="_blank"><img src="http://mjplay-v.16mb.com/recursos/img/plus.png" alt="plus" /><span>Plus</span></a>\n'+'\n'+'  </div> \n'+'</div>\n'+'\n'+'\n'+'<!--dock menu JS options -->\n'+'<script type="text/javascript">\n'+'	\n'+'	$(document).ready(\n'+'		function()\n'+'		{\n'+'			$("#dock").Fisheye(\n'+'				{\n'+'					maxWidth: 50,\n'+'					items: "a",\n'+'					itemsText: "span",\n'+'					container: ".dock-container",\n'+'					itemWidth: 40,\n'+'					proximity: 90,\n'+'					halign : "center"\n'+'				}\n'+'			)\n'+'			$("#dock2").Fisheye(\n'+'				{\n'+'					maxWidth: 60,\n'+'					items: "a",\n'+'					itemsText: "span",\n'+'					container: ".dock-container2",\n'+'					itemWidth: 40,\n'+'					proximity: 80,\n'+'					alignment : "left",\n'+'					valign: "bottom",\n'+'					halign : "center"\n'+'				}\n'+'			)\n'+'		}\n'+'	);\n'+'\n'+'</script>\n'+'</body>\n'+'</html>\n'+'';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' body{\n'+'font:11px Arial, Helvetica, sans-serif;\n'+'background:#ffffff url(/imagenes/fondos/fondoKk.png);\n'+'padding:0;\n'+'margin:0;\n'+'}\n'+'a, a:visited{\n'+'outline:none;\n'+'}\n'+'img{\n'+'border:none;\n'+'}\n'+'/* dock - top */\n'+'.dock{\n'+'position:relative;\n'+'height:50px;\n'+'text-align:center;\n'+'}\n'+'.dock-container{\n'+'position:absolute;\n'+'height:50px;\n'+'background:url(/imagenes/fondos/dark_wood.png);\n'+'padding-left:20px;\n'+'}\n'+'a.dock-item{\n'+'display:block;\n'+'width:40px;\n'+'color:#000;\n'+'position:absolute;\n'+'top:0px;\n'+'text-align:center;\n'+'text-decoration:none;\n'+'font:bold 12px Arial, Helvetica, sans-serif;\n'+'}\n'+'.dock-item img{\n'+'border:none;\n'+'margin:5px 10px 0px;\n'+'width:100%;\n'+'}\n'+'.dock-item span{\n'+'display:none;\n'+'padding-left:20px;\n'+'}\n'+'';

var jat = '<script>';
var jaf = '</script>';

var defaultjas =' /*\n'+'(jQuery 1.1.2)\n'+'http://www.ndesign-studio.com/demo/css-dock-menu/js/jquery.js    \n'+'http://www.ndesign-studio.com/demo/css-dock-menu/js/interface.js\n'+'*/';

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

