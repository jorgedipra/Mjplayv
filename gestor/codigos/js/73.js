var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE html>\n'+'<html lang="es">\n'+'<head>\n'+'<meta charset="utf-8" />\n'+'<meta name="Description" content="Una formato de ventana tipo FACEBOOK desarrollado con CSS3 " />\n'+'<meta name="Keywords"  content="Ventana de FACEBOOK" />\n'+'<title>FACEBOOK Ventana</title>\n'+'</head>\n'+'<body>\n'+'<div id="facebox">\n'+'	<div class="popup" >\n'+'		<div class="content" >\n'+'			<h1 class="fb">Compartir esta página</h1>\n'+'			<div class="fblikeContent">\n'+'		        <p>Actualidad y tecnología(Código Libré)</p>\n'+'                        <img src="https://fbexternal-a.akamaihd.net/safe_image.php?d=AQC9fjb5kXLSd_7s&url=https%3A%2F%2Ffbcdn-profile-a.akamaihd.net%2Fhprofile-ak-snc6%2F211171_227376447368257_1323865542_n.jpg"></img>\n'+'                        <b>MJplay-V</b>\n'+'                        <div>pagina_oficial_de_Mjplay_V: http://mjplay-v.16mb.com/<br>twitter: https://twitter.com/#!/MJPlayV <br>youtube: http://www.youtube.com/user/MJVIDEOPLAY <br> plus:  https://plus.google.com/102520169474839934484/about</div> \n'+'			</div>\n'+'			<div style="height: 80px;"></div>\n'+'		</div>\n'+'		<div id="closeBox">\n'+'			<a href="http://mjplay-v.16mb.com/" target="_blank" class="close">Compartir página</a>\n'+'		</div>\n'+'	</div>\n'+'</div>	\n'+'\n'+'</body>\n'+'</html>';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' body{\n'+'background:url(http://mjplay-v.16mb.com/imagenes/fondos/tileable_wood_texture.png) center fixed;\n'+'}\n'+'#facebox{\n'+'width:420px;\n'+'font-family:"lucida grande", tahoma, verdana, arial, sans-serif;\n'+'margin:25px auto 0;\n'+'}\n'+'.popup{\n'+'border:1px solid #999;\n'+'width:420px;\n'+'/*border-radius*/\n'+'-webkit-border-radius:2px;\n'+'   -moz-border-radius:2px;\n'+'        border-radius:2px;\n'+'}\n'+'#facebox .popup{\n'+'position:relative;\n'+'border:10px solid rgba(0,0,0,0.445);\n'+'/*border-radius*/\n'+'-webkit-border-radius:7px;\n'+'   -moz-border-radius:7px;\n'+'        border-radius:7px;\n'+'padding:0;\n'+'width:420px;\n'+'}\n'+'.popup:after{\n'+'content:"";\n'+'position:absolute;\n'+'top:-1px;\n'+'left:-1px;\n'+'width:100%;\n'+'height:100%;\n'+'border:1px solid #425693;\n'+'}\n'+'.content{\n'+'width:420px;\n'+'}\n'+'#facebox .content{\n'+'display:block;\n'+'width:420px;\n'+'overflow:show;\n'+'padding:0;\n'+'background:#fff;\n'+'font-family:"lucida grande", tahoma, verdana, arial, sans-serif;\n'+'}\n'+'#facebox .content>p:first-child{\n'+'margin-top:0;\n'+'}\n'+'#facebox .content>p:last-child{\n'+'margin-bottom:0;\n'+'}\n'+'#facebox .loading{\n'+'text-align:center;\n'+'}\n'+'#facebox .image{\n'+'text-align:center;\n'+'}\n'+'#facebox img{\n'+'border:0;\n'+'margin:0;\n'+'}\n'+'#facebox_overlay{\n'+'position:fixed;\n'+'top:0;\n'+'left:0;\n'+'height:100%;\n'+'width:100%;\n'+'}\n'+'.facebox_hide{\n'+'z-index:-100;\n'+'}\n'+'.facebox_overlayBG{\n'+'background-color:#000;\n'+'z-index:99;\n'+'}\n'+'#fblike{\n'+'margin:0;\n'+'padding:0;\n'+'font-family:"lucida grande", tahoma, verdana, arial, sans-serif;\n'+'position:relative;\n'+'background-color:#fff;\n'+'display:none;\n'+'}\n'+'#fblike h1,h1.fb{\n'+'background-color:#6d84b4;\n'+'font-size:14px;\n'+'color:#fff;\n'+'padding:5px 10px;\n'+'margin:0;\n'+'font-family:"lucida grande", tahoma, verdana, arial, sans-serif;\n'+'letter-spacing:normal;\n'+'border-bottom:1px solid #425693;\n'+'}\n'+'h2.fbCustomURL{\n'+'background-color:#f2f2f2;\n'+'border-bottom:1px solid #ccc;\n'+'color:#999;\n'+'font-size:12px;\n'+'font-weight:400;\n'+'margin:0 0 10px;\n'+'padding:5px 10px;\n'+'font-family:"lucida grande", tahoma, verdana, arial, sans-serif;\n'+'font-style:normal;\n'+'line-height:1.2;\n'+'}\n'+'#closeBox,.fblikeContent{\n'+'background-color:#f2f2f2;\n'+'height:41px;\n'+'position:relative;\n'+'width:420px;\n'+'padding:0;\n'+'font-family:"lucida grande", tahoma, verdana, arial, sans-serif;\n'+'border-top:1px solid #ccc;\n'+'border-bottom:1px solid #ccc;\n'+'z-index:3;\n'+'}\n'+'#closeBox a{\n'+'text-decoration:none;\n'+'color:#fff;\n'+'font-size:11px;\n'+'font-weight:700;\n'+'background-color:#5d76aa;\n'+'border:1px solid #2a437e;\n'+'display:block;\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:inset 0 1px 0 #8a9cc2;\n'+'   -moz-box-shadow:inset 0 1px 0 #8a9cc2;\n'+'        box-shadow:inset 0 1px 0 #8a9cc2;\n'+'padding:3px 6px;\n'+'position:absolute;\n'+'right:10px;\n'+'top:10px;\n'+'z-index:4;\n'+'cursor:pointer;\n'+'}\n'+'#closeBox a:hover{\n'+'color:#fff;\n'+'}\n'+'.fblikeContent div{\n'+'font-size:11px;\n'+'height:100px;\n'+'position:absolute;\n'+'top:0;\n'+'margin:45px 85px;\n'+'text-align:left;\n'+'width:330px;\n'+'}\n'+'.fblikeContent img{\n'+'width:80px;\n'+'padding:2px;\n'+'}\n'+'.fblikeContent p{\n'+'color:#111;\n'+'font:12px/20px Arial, sans-serif;\n'+'padding-left:10px;\n'+'}\n'+'';

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

