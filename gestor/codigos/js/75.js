var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE html>\n'+'<html lang="es">\n'+'<head>\n'+'<meta charset="utf-8" />\n'+'<title>Iphone CSS</title>\n'+'</head>\n'+'<body>\n'+'<div class="iphone">\n'+'<br><br><br><br>\n'+'<p>APRENDE A CREAR WEB CON HTML5<br>\n'+' CSS3 Y JAVASCRIPT<span>|</span></p>\n'+'<img src="http://mjplay-v.16mb.com/imagenes/Esescri/editorALL.png"></img>\n'+'</div>\n'+'</body>\n'+'</html>\n'+'';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' body{\n'+'background:url(/imagenes/fondos/dark_wood.png) center fixed;\n'+'color:#fff;\n'+'}\n'+'body{\n'+'margin:0px;\n'+'padding:0px;\n'+'width:100%;\n'+'height:100%;\n'+'background-color:#111;\n'+'text-align:center;\n'+'}\n'+'p{\n'+'color:lime;\n'+'font-family:"Courier";\n'+'font-size:12px;\n'+'margin:10px 0 0 10px;\n'+'white-space:nowrap;\n'+'overflow:hidden;\n'+'width:220px;\n'+'/*animation*/\n'+'-webkit-animation:type 4s steps(60, end);\n'+'   -moz-animation:type 4s steps(60, end);\n'+'    -ms-animation:type 4s steps(60, end);\n'+'     -o-animation:type 4s steps(60, end);\n'+'        animation:type 4s steps(60, end);\n'+'}\n'+'p:nth-child(2){\n'+'/*animation*/\n'+'-webkit-animation:type2 8s steps(60, end);\n'+'   -moz-animation:type2 8s steps(60, end);\n'+'    -ms-animation:type2 8s steps(60, end);\n'+'     -o-animation:type2 8s steps(60, end);\n'+'        animation:type2 8s steps(60, end);\n'+'}\n'+'p a{\n'+'color:lime;\n'+'text-decoration:none;\n'+'}\n'+'span{\n'+'/*animation*/\n'+'-webkit-animation:blink 1s infinite;\n'+'   -moz-animation:blink 1s infinite;\n'+'    -ms-animation:blink 1s infinite;\n'+'     -o-animation:blink 1s infinite;\n'+'        animation:blink 1s infinite;\n'+'}\n'+'@keyframes "type"{\n'+'from {\n'+'    width: 0;\n'+' }\n'+'}\n'+'@-moz-keyframes type{\n'+'from {\n'+'   width: 0;\n'+' }\n'+'}\n'+'@-webkit-keyframes "type"{\n'+'from {\n'+'   width: 0;\n'+' }\n'+'}\n'+'@-ms-keyframes "type"{\n'+'from {\n'+'   width: 0;\n'+' }\n'+'}\n'+'@-o-keyframes "type"{\n'+'from {\n'+'   width: 0;\n'+' }\n'+'}\n'+'@keyframes "type2"{\n'+'0% {\n'+'    width: 0;\n'+' }\n'+' 50% {\n'+'    width: 0;\n'+' }\n'+' 100% {\n'+'    width: 100;\n'+' }\n'+'}\n'+'@-moz-keyframes type2{\n'+'0% {\n'+'   width: 0;\n'+' }\n'+' 50% {\n'+'   width: 0;\n'+' }\n'+' 100% {\n'+'   width: 100;\n'+' }\n'+'}\n'+'@-webkit-keyframes "type2"{\n'+'0% {\n'+'   width: 0;\n'+' }\n'+' 50% {\n'+'   width: 0;\n'+' }\n'+' 100% {\n'+'   width: 100;\n'+' }\n'+'}\n'+'@-ms-keyframes "type2"{\n'+'0% {\n'+'   width: 0;\n'+' }\n'+' 50% {\n'+'   width: 0;\n'+' }\n'+' 100% {\n'+'   width: 100;\n'+' }\n'+'}\n'+'@-o-keyframes "type2"{\n'+'0% {\n'+'   width: 0;\n'+' }\n'+' 50% {\n'+'   width: 0;\n'+' }\n'+' 100% {\n'+'   width: 100;\n'+' }\n'+'}\n'+'@keyframes "blink"{\n'+'to {\n'+'    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";\n'+'   	filter: alpha(opacity=0);\n'+'   	opacity: .0;\n'+' }\n'+'}\n'+'@-moz-keyframes blink{\n'+'to {\n'+'   filter: alpha(opacity=0);\n'+'   opacity: .0;\n'+' }\n'+'}\n'+'@-webkit-keyframes "blink"{\n'+'to {\n'+'   filter: alpha(opacity=0);\n'+'   opacity: .0;\n'+' }\n'+'}\n'+'@-ms-keyframes "blink"{\n'+'to {\n'+'   -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";\n'+'   filter: alpha(opacity=0);\n'+'   opacity: .0;\n'+' }\n'+'}\n'+'@-o-keyframes "blink"{\n'+'to {\n'+'   filter: alpha(opacity=0);\n'+'   opacity: .0;\n'+' }\n'+'}\n'+'.iphone{\n'+'margin:50px 35%;\n'+'padding:0;\n'+'position:absolute;\n'+'width:270px;\n'+'height:495px;\n'+'/*border-radius*/\n'+'-webkit-border-radius:30px;\n'+'   -moz-border-radius:30px;\n'+'        border-radius:30px;\n'+'/*linear-gradient*/\n'+'background:-webkit-gradient(linear,109.15% 9.15%,-9.15% 90.85%,from(rgba(255,255,255, 0.4)),color-stop(rgba(255,255,255,0.15),0.35),color-stop(transparent,0.35)),\n'+'-webkit-gradient(linear,left top,left bottom,color-stop(transparent,0.15),color-stop(#333,0.15),color-stop(#333,0.85),color-stop(transparent,0.85)),\n'+'-webkit-gradient(linear,left top,left bottom,from(#000),to(#000));\n'+'background:\n'+'-webkit-linear-gradient(-165deg, rgba(255,255,255, 0.4), rgba(255,255,255,0.15) 35%, transparent 35%),\n'+'-webkit-linear-gradient(top, transparent 15%, #333 15%, #333 85%, transparent 85%),		\n'+'-webkit-linear-gradient(top, #000, #000);\n'+'  background:  \n'+'  -moz-linear-gradient(-165deg, rgba(255,255,255, 0.4), rgba(255,255,255,0.15) 35%, transparent 35%),		\n'+'  -moz-linear-gradient(top, transparent 15%, #333 15%, #333 85%, transparent 85%),\n'+'  -moz-linear-gradient(top, #000, #000);\n'+'     background:     -o-linear-gradient(-165deg, rgba(255,255,255, 0.4), rgba(255,255,255,0.15) 35%, transparent 35%),		\n'+'     -o-linear-gradient(top, transparent 15%, #333 15%, #333 85%, transparent 85%),		\n'+'     -o-linear-gradient(top, #000, #000);\n'+'        background:       \n'+'        linear-gradient(-165deg, rgba(255,255,255, 0.4), rgba(255,255,255,0.15) 35%, transparent 35%),		\n'+'        linear-gradient(top, transparent 15%, #333 15%, #333 85%, transparent 85%),		\n'+'        linear-gradient(top, #000, #000);\n'+'background-repeat:no-repeat;\n'+'/*background-size*/\n'+'-webkit-background-size:100% 100%, 250px 100%, 100% 100%;\n'+'   -moz-background-size:100% 100%, 250px 100%, 100% 100%;\n'+'     -o-background-size:100% 100%, 250px 100%, 100% 100%;\n'+'        background-size:100% 100%, 250px 100%, 100% 100%;\n'+'background-position:0 0, 10px 0, 0 0;\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:0px 0px 0px 1px #000,\n'+'		0px 0px 0px 4px #bbb,\n'+'		0px 0px 0px 10px #777,\n'+'		70px -127px 0px -115px #bbb;\n'+'   -moz-box-shadow:0px 0px 0px 1px #000,\n'+'		0px 0px 0px 4px #bbb,\n'+'		0px 0px 0px 10px #777,\n'+'		70px -127px 0px -115px #bbb;\n'+'        box-shadow:0px 0px 0px 1px #000,		\n'+'                   0px 0px 0px 4px #bbb,\n'+'   		   0px 0px 0px 10px #777,				\n'+'                   70px -127px 0px -115px #bbb;\n'+'}\n'+'.iphone:after{\n'+'content:"▢";\n'+'position:absolute;\n'+'bottom:13px;\n'+'left:115px;\n'+'width:46px;\n'+'height:46px;\n'+'/*border-radius*/\n'+'-webkit-border-radius:50%;\n'+'   -moz-border-radius:50%;\n'+'        border-radius:50%;\n'+'background-color:white;\n'+'border:2px solid #111;\n'+'text-align:center;\n'+'color:#666;\n'+'font-size:37px;\n'+'font-weight:bold;\n'+'background-image:-webkit-linear-gradient(left, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.95) 100%);\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:-12px -420px 0 -22px #777,\n'+'		-9px -420px 0 -22px #777,\n'+'		-6px -420px 0 -22px #777,\n'+'		-3px -420px 0 -22px #777,\n'+'		0px -420px 0 -22px #777,\n'+'		3px -420px 0 -22px #777,\n'+'		6px -420px 0 -22px #777,\n'+'		9px -420px 0 -22px #777,\n'+'		12px -420px 0 -22px #777,\n'+'		15px -420px 0 -22px #777,\n'+'		18px -420px 0 -22px #777,\n'+'		21px -420px 0 -22px #777,\n'+'		24px -420px 0 -22px #777,\n'+'		-12px -420px 0 -20px #111,\n'+'		-9px -420px 0 -20px #111,\n'+'		-6px -420px 0 -20px #111,\n'+'		-3px -420px 0 -20px #111,\n'+'		0px -420px 0 -20px #111,\n'+'		3px -420px 0 -20px #111,\n'+'		6px -420px 0 -20px #111,\n'+'		9px -420px 0 -20px #111,\n'+'		12px -420px 0 -20px #111,\n'+'		15px -420px 0 -20px #111,\n'+'		18px -420px 0 -20px #111,\n'+'		21px -420px 0 -20px #111,\n'+'		24px -420px 0 -20px #111;\n'+'   -moz-box-shadow:-12px -420px 0 -22px #777,\n'+'		-9px -420px 0 -22px #777,\n'+'		-6px -420px 0 -22px #777,\n'+'		-3px -420px 0 -22px #777,\n'+'		0px -420px 0 -22px #777,\n'+'		3px -420px 0 -22px #777,\n'+'		6px -420px 0 -22px #777,\n'+'		9px -420px 0 -22px #777,\n'+'		12px -420px 0 -22px #777,\n'+'		15px -420px 0 -22px #777,\n'+'		18px -420px 0 -22px #777,\n'+'		21px -420px 0 -22px #777,\n'+'		24px -420px 0 -22px #777,\n'+'		-12px -420px 0 -20px #111,\n'+'		-9px -420px 0 -20px #111,\n'+'		-6px -420px 0 -20px #111,\n'+'		-3px -420px 0 -20px #111,\n'+'		0px -420px 0 -20px #111,\n'+'		3px -420px 0 -20px #111,\n'+'		6px -420px 0 -20px #111,\n'+'		9px -420px 0 -20px #111,\n'+'		12px -420px 0 -20px #111,\n'+'		15px -420px 0 -20px #111,\n'+'		18px -420px 0 -20px #111,\n'+'		21px -420px 0 -20px #111,\n'+'		24px -420px 0 -20px #111;\n'+'        box-shadow:-12px -420px 0 -22px #777,\n'+'		-9px -420px 0 -22px #777,\n'+'		-6px -420px 0 -22px #777,\n'+'		-3px -420px 0 -22px #777,\n'+'		0px -420px 0 -22px #777,\n'+'		3px -420px 0 -22px #777,\n'+'		6px -420px 0 -22px #777,\n'+'		9px -420px 0 -22px #777,\n'+'		12px -420px 0 -22px #777,\n'+'		15px -420px 0 -22px #777,\n'+'		18px -420px 0 -22px #777,\n'+'		21px -420px 0 -22px #777,\n'+'		24px -420px 0 -22px #777,\n'+'		-12px -420px 0 -20px #111,\n'+'		-9px -420px 0 -20px #111,\n'+'		-6px -420px 0 -20px #111,\n'+'		-3px -420px 0 -20px #111,\n'+'		0px -420px 0 -20px #111,\n'+'		3px -420px 0 -20px #111,\n'+'		6px -420px 0 -20px #111,\n'+'		9px -420px 0 -20px #111,\n'+'		12px -420px 0 -20px #111,\n'+'		15px -420px 0 -20px #111,\n'+'		18px -420px 0 -20px #111,\n'+'		21px -420px 0 -20px #111,\n'+'		24px -420px 0 -20px #111;\n'+'}\n'+'.iphone:before{\n'+'content:"";\n'+'position:absolute;\n'+'width:3px;\n'+'height:90px;\n'+'top:80px;\n'+'left:-13px;\n'+'background:black;\n'+'background-image:-webkit-linear-gradient(top, #aaa, #999 35%, transparent 45%, transparent 55%, #999 65%, #aaa 100%);\n'+'   background-image:-moz-linear-gradient(top, #aaa, #999 35%, transparent 45%, transparent 55%, #999 65%, #aaa 100%);\n'+'     background-image:-o-linear-gradient(top, #aaa, #999 35%, transparent 45%, transparent 55%, #999 65%, #aaa 100%);\n'+'       background-image:-linear-gradient(top, #aaa, #999 35%, transparent 45%, transparent 55%, #999 65%, #aaa 100%);\n'+'}\n'+'';

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

