var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE html>\n'+'<html lang="es">\n'+'<head>\n'+'<meta charset="utf-8" />\n'+'<title>botton Font</title>\n'+'</head>\n'+'<body>\n'+'<nav class="btnContainer">\n'+' <a href="javascript:abrirVentana()" data-role="button" id="Finger">MJplay-V</a>\n'+'<a href="javascript:abrirVentana()" data-role="button" id="IM">MJplay-V</a>\n'+' <a href="javascript:abrirVentana()" data-role="button" id="Metal">MJplay-V</a>\n'+' <a href="javascript:abrirVentana()" data-role="button" id="Montserrat">MJplay-V</a>\n'+' <a href="javascript:abrirVentana()" data-role="button" id="Nosifer">MJplay-V</a>\n'+' <a href="javascript:abrirVentana()" data-role="button" id="Stalinist">MJplay-V</a>\n'+' <a href="javascript:abrirVentana()" data-role="button" id="Trade">MJplay-V</a>\n'+'</nav>\n'+'</body>\n'+'</html>';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' @import url(http://fonts.googleapis.com/css?family=Finger+Paint);\n'+'@import url(http://fonts.googleapis.com/css?family=IM+Fell+English+SC);\n'+'@import url(http://fonts.googleapis.com/css?family=Metal+Mania);\n'+'@import url(http://fonts.googleapis.com/css?family=Montserrat+Subrayada:400,700);\n'+'@import url(http://fonts.googleapis.com/css?family=Nosifer);\n'+'@import url(http://fonts.googleapis.com/css?family=Stalinist+One);\n'+'@import url(http://fonts.googleapis.com/css?family=Trade+Winds);\n'+'body{\n'+'background: #000;\n'+'    height:100%;\n'+'    width:100%;\n'+'}\n'+'a[data-role="button"]{\n'+'/*border-radius*/\n'+'-webkit-border-radius:50px;\n'+'   -moz-border-radius:50px;\n'+'        border-radius:50px;\n'+'box-sizing:border-box;\n'+'-webkit-box-sizing:border-box;\n'+'color:#fff;\n'+'display:inline-block;\n'+'font-size:35px;\n'+'height:60px;\n'+'line-height:30px;\n'+'margin:0 10px;\n'+'padding:15px 10px;\n'+'text-align:center;\n'+'text-decoration:none;\n'+'text-shadow:0 0 1px #000;\n'+'width:100%;\n'+'background:\n'+'-webkit-gradient(    		linear, 0 0, 100% 0,        	color-stop(0, rgba(255,255,255,0)),            color-stop(.5, rgba(255,255,255,.2)),        	color-stop(1, rgba(255,255,255,0))        ) 10% center no-repeat,                -webkit-gradient(    		linear, 0 0, 100% 0,        	color-stop(0, rgba(255,255,255,0)),            color-stop(.5, rgba(255,255,255,.2)),        	color-stop(1, rgba(255,255,255,0))        ) 90% center no-repeat,                -webkit-gradient(    		linear, 0 0, 0 100%,        	color-stop(0, rgba(0,0,0, .2)),        	color-stop(.49999, rgba(0,0,0, .5)),       		color-stop(.5, rgba(0,0,0, 1)),            color-stop(1, rgba(0,0,0, .9))        ),                -webkit-gradient(    		radial, center center, 0, center center, 200,        	color-stop(0, rgba(255,255,255, .5)),        	color-stop(1, rgba(0,255,255, .5))        );\n'+'/*background-size*/\n'+'-webkit-background-size:1px 90%,        1px 90%,        auto,        auto;\n'+'   -moz-background-size:1px 90%,        1px 90%,        auto,        auto;\n'+'     -o-background-size:1px 90%,        1px 90%,        auto,        auto;\n'+'        background-size:1px 90%,        1px 90%,        auto,        auto;\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:inset 0 2px 0 1px rgba(255,255,255,.2),        inset 0 -2px 0 1px rgba(255,255,255,.2),        0 0 0 5px rgba(255,255,255,.1);\n'+'   -moz-box-shadow:inset 0 2px 0 1px rgba(255,255,255,.2),        inset 0 -2px 0 1px rgba(255,255,255,.2),        0 0 0 5px rgba(255,255,255,.1);\n'+'        box-shadow:inset 0 2px 0 1px rgba(255,255,255,.2),        inset 0 -2px 0 1px rgba(255,255,255,.2),        0 0 0 5px rgba(255,255,255,.1);\n'+'}\n'+'#Finger{\n'+'font-family:"Finger Paint", cursive;\n'+'}\n'+'#IM{\n'+'font-family:"IM Fell English SC", serif;\n'+'}\n'+'#Metal{\n'+'font-family:"Metal Mania", cursive;\n'+'}\n'+'#Montserrat{\n'+'font-family:"Montserrat Subrayada", sans-serif;\n'+'}\n'+'#Nosifer{\n'+'font-family:"Nosifer", cursive;\n'+'font-size:28px;\n'+'}\n'+'#Stalinist{\n'+'font-family:"Stalinist One", cursive;\n'+'font-size:22px;\n'+'}\n'+'#Trade{\n'+'font-family:"Trade Winds", cursive;\n'+'}\n'+'.btnContainer{\n'+'display:block;\n'+'text-align:center;\n'+'margin:5% 25%;\n'+'width:300px;\n'+'}\n'+'';

var jat = '<script>';
var jaf = '</script>';

var defaultjas =' function abrirVentana()\n'+'{\n'+'alert("Codigo libre");}';

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

