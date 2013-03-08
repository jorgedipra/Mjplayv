var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE html>\n'+'<html lang="es">\n'+'<head>\n'+'<meta charset="utf-8" />\n'+'<title>MENU</title>\n'+'</head>\n'+'<body>\n'+'<div class="barra1">\n'+'  \n'+'  <div class="circle">\n'+'     <div class="win">\n'+'      <IMG SRC="/imagenes/Esescri/editorALL.png" WIDTH=50 HEIGHT=50 alt="Menu">\n'+'     </div>\n'+'  </div>\n'+'  \n'+'  <article id="cont">\n'+'    <IMG SRC="/imagenes/principal/home2.png" WIDTH=50 HEIGHT=50 alt="Menu">\n'+'    <IMG SRC="/imagenes/TECNOLOGIA/technology-icon.png" WIDTH=50 HEIGHT=50 alt="Menu">\n'+'    <IMG SRC="/imagenes/ESCRITORIO/Desktop-icon.png" WIDTH=50 HEIGHT=50 alt="Menu">\n'+'    <IMG SRC="/imagenes/principal/twitter.png" WIDTH=50 HEIGHT=50 alt="Menu">\n'+'  </article>\n'+'  <article id="con">\n'+'    <IMG SRC="/imagenes/principal/face.png" WIDTH=50 HEIGHT=50 alt="Menu">\n'+'    <IMG SRC="/imagenes/ojos/html.png" WIDTH=50 HEIGHT=50 alt="Menu">\n'+'    <IMG SRC="/imagenes/WEB/WEB.png" WIDTH=50 HEIGHT=50 alt="Menu">\n'+'    <IMG SRC="/imagenes/ESCRITORIO/explorer.png" WIDTH=50 HEIGHT=50 alt="Menu">\n'+'  </article>\n'+'</div>\n'+'</body>\n'+'</html>';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' *{\n'+'margin:0;\n'+'padding:0;\n'+'}\n'+'html{\n'+'height:100%;\n'+'width:100%;\n'+'margin:0 auto;\n'+'background-color:#363636;\n'+'background-image:-webkit-linear-gradient(45deg, hsla(0,0%,0%,.25) 25%, transparent 25%, transparent 75%, hsla(0,0%,0%,.25) 75%, hsla(0,0%,0%,.25)), -webkit-linear-gradient(45deg, hsla(0,0%,0%,.25) 25%, transparent 25%, transparent 75%, hsla(0,0%,0%,.25) 75%, hsla(0,0%,0%,.25));\n'+'background-image:-moz-linear-gradient(45deg, hsla(0,0%,0%,.25) 25%, transparent 25%, transparent 75%, hsla(0,0%,0%,.25) 75%, hsla(0,0%,0%,.25)), -moz-linear-gradient(45deg, hsla(0,0%,0%,.25) 25%, transparent 25%, transparent 75%, hsla(0,0%,0%,.25) 75%, hsla(0,0%,0%,.25));\n'+'background-image:-ms-linear-gradient(45deg, hsla(0,0%,0%,.25) 25%, transparent 25%, transparent 75%, hsla(0,0%,0%,.25) 75%, hsla(0,0%,0%,.25)), -ms-linear-gradient(45deg, hsla(0,0%,0%,.25) 25%, transparent 25%, transparent 75%, hsla(0,0%,0%,.25) 75%, hsla(0,0%,0%,.25));\n'+'background-image:-o-linear-gradient(45deg, hsla(0,0%,0%,.25) 25%, transparent 25%, transparent 75%, hsla(0,0%,0%,.25) 75%, hsla(0,0%,0%,.25)), -o-linear-gradient(45deg, hsla(0,0%,0%,.25) 25%, transparent 25%, transparent 75%, hsla(0,0%,0%,.25) 75%, hsla(0,0%,0%,.25));\n'+'background-image:linear-gradient(45deg, hsla(0,0%,0%,.25) 25%, transparent 25%, transparent 75%, hsla(0,0%,0%,.25) 75%, hsla(0,0%,0%,.25)), linear-gradient(45deg, hsla(0,0%,0%,.25) 25%, transparent 25%, transparent 75%, hsla(0,0%,0%,.25) 75%, hsla(0,0%,0%,.25));\n'+'background-position:0 0, 2px 2px;\n'+'/*background-size*/\n'+'-webkit-background-size:4px 4px;\n'+'   -moz-background-size:4px 4px;\n'+'     -o-background-size:4px 4px;\n'+'        background-size:4px 4px;\n'+'}\n'+'body{\n'+'height:100%;\n'+'width:100%;\n'+'overflow:hidden;\n'+'margin:0 auto;\n'+'}\n'+'#cont{\n'+'left:5%;\n'+'}\n'+'#con{\n'+'right:5%;\n'+'}\n'+'#con,\n'+'#cont{\n'+'position:absolute;\n'+'top:0;\n'+'}\n'+'#con img,\n'+'#cont img{\n'+'height:40px;\n'+'padding-left:20px;\n'+'width:40px;\n'+'z-index:1;\n'+'}\n'+'.barra1{\n'+'/*border-radius*/\n'+'-webkit-border-radius:0 0 45px 45px;\n'+'   -moz-border-radius:0 0 45px 45px;\n'+'        border-radius:0 0 45px 45px;\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:0 0 0 1px #bfc1c7 inset, 0 0 15px rgba(250,250,250,0.99);\n'+'   -moz-box-shadow:0 0 0 1px #bfc1c7 inset, 0 0 15px rgba(250,250,250,0.99);\n'+'        box-shadow:0 0 0 1px #bfc1c7 inset, 0 0 15px rgba(250,250,250,0.99);\n'+'background:#d4d4d4;\n'+'background:-webkit-gradient(linear, left top, left bottom, from(#e9e9e9), to(#bcbcbc));\n'+'background:-webkit-gradient(linear,left top,left bottom,from(#e9e9e9),to(#bcbcbc));\n'+'/*linear-gradient*/\n'+'background:-webkit-linear-gradient(#e9e9e9, #bcbcbc);\n'+'background:   -moz-linear-gradient(#e9e9e9, #bcbcbc);\n'+'background:     -o-linear-gradient(#e9e9e9, #bcbcbc);\n'+'background:        linear-gradient(#e9e9e9, #bcbcbc);\n'+'background:-webkit-gradient(linear,,color-stop(#e9e9e9,0),color-stop(#bcbcbc,1));\n'+'background:-webkit-linear-gradient(center top, #e9e9e9 0%, #bcbcbc 100%);\n'+'background:   -moz-linear-gradient(center top, #e9e9e9 0%, #bcbcbc 100%);\n'+'background:     -o-linear-gradient(center top, #e9e9e9 0%, #bcbcbc 100%);\n'+'background:        linear-gradient(center top, #e9e9e9 0%, #bcbcbc 100%);\n'+'background:-moz-gradient(center top, #e9e9e9 0%, #bcbcbc 100%);\n'+'background:-webkit-gradient(linear,left top,left bottom,color-stop(#e9e9e9,0),color-stop(#bcbcbc,1));\n'+'background:-webkit-linear-gradient(#e9e9e9 0%, #bcbcbc 100%);\n'+'background:   -moz-linear-gradient(#e9e9e9 0%, #bcbcbc 100%);\n'+'background:     -o-linear-gradient(#e9e9e9 0%, #bcbcbc 100%);\n'+'background:        linear-gradient(#e9e9e9 0%, #bcbcbc 100%);\n'+'/*background-clip*/\n'+'-webkit-background-clip:padding-box;\n'+'   -moz-background-clip:/*@@prefixmycss->No equivalent*/;\n'+'        background-clip:padding-box;\n'+'/*@@prefixmycss->No equivalent*/\n'+':;\n'+'height:40px;\n'+'width:100%;\n'+'margin:0 auto;\n'+'display:scroll;\n'+'z-index:10;\n'+'position:absolute;\n'+'}\n'+'.barra1 .circle{\n'+'/*border-radius*/\n'+'-webkit-border-radius:500px;\n'+'   -moz-border-radius:500px;\n'+'        border-radius:500px;\n'+'height:100px;\n'+'width:100px;\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:0 0 0 1px #bfc1c7 inset, 0 0 15px rgba(250,250,250,0.99);\n'+'   -moz-box-shadow:0 0 0 1px #bfc1c7 inset, 0 0 15px rgba(250,250,250,0.99);\n'+'        box-shadow:0 0 0 1px #bfc1c7 inset, 0 0 15px rgba(250,250,250,0.99);\n'+'background:#d4d4d4;\n'+'background:-webkit-gradient(linear, left top, left bottom, from(#e9e9e9), to(#bcbcbc));\n'+'background:-webkit-gradient(linear,left top,left bottom,from(#e9e9e9),to(#bcbcbc));\n'+'/*linear-gradient*/\n'+'background:-webkit-linear-gradient(#e9e9e9, #bcbcbc);\n'+'background:   -moz-linear-gradient(#e9e9e9, #bcbcbc);\n'+'background:     -o-linear-gradient(#e9e9e9, #bcbcbc);\n'+'background:        linear-gradient(#e9e9e9, #bcbcbc);\n'+'background:-webkit-gradient(linear,,color-stop(#e9e9e9,0),color-stop(#bcbcbc,1));\n'+'background:-webkit-linear-gradient(center top, #e9e9e9 0%, #bcbcbc 100%);\n'+'background:   -moz-linear-gradient(center top, #e9e9e9 0%, #bcbcbc 100%);\n'+'background:     -o-linear-gradient(center top, #e9e9e9 0%, #bcbcbc 100%);\n'+'background:        linear-gradient(center top, #e9e9e9 0%, #bcbcbc 100%);\n'+'background:-moz-gradient(center top, #e9e9e9 0%, #bcbcbc 100%);\n'+'background:-webkit-gradient(linear,left top,left bottom,color-stop(#e9e9e9,0),color-stop(#bcbcbc,1));\n'+'background:-webkit-linear-gradient(#e9e9e9 0%, #bcbcbc 100%);\n'+'background:   -moz-linear-gradient(#e9e9e9 0%, #bcbcbc 100%);\n'+'background:     -o-linear-gradient(#e9e9e9 0%, #bcbcbc 100%);\n'+'background:        linear-gradient(#e9e9e9 0%, #bcbcbc 100%);\n'+'border:1px solid rgba(250,250,250,0.5);\n'+'/*background-clip*/\n'+'-webkit-background-clip:padding-box;\n'+'   -moz-background-clip:/*@@prefixmycss->No equivalent*/;\n'+'        background-clip:padding-box;\n'+'/*@@prefixmycss->No equivalent*/\n'+':;\n'+'margin:0 auto;\n'+'margin-top:-35px;\n'+'z-index:10;\n'+'}\n'+'.barra1 .circle .win{\n'+'width:65px;\n'+'height:65px;\n'+'background:-webkit-radial-gradient(50% 90%,circle closest-corner,#07D9F9,#03456F 100%,#fff 300% );\n'+'background:-moz-radial-gradient(50% 90%,circle closest-corner,#07D9F9,#03456F 100%,#fff 300% );\n'+'background:-ms-radial-gradient(50% 90%,circle closest-corner,#07D9F9,#03456F 100%,#fff 300% );\n'+'background:-o-radial-gradient(50% 90%,circle closest-corner,#07D9F9,#03456F 100%,#fff 300% );\n'+'background:radial-gradient(50% 90%,circle closest-corner,#07D9F9,#03456F 100%,#fff 300% );\n'+'/*border-radius*/\n'+'-webkit-border-radius:100px;\n'+'   -moz-border-radius:100px;\n'+'        border-radius:100px;\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:0 1px 1px rgba(255,255,255,0.9),inset 0px 2px 1px rgba(255,255,255,0.8),inset 0px 5px 2px rgba(255,255,255,0.5),inset 0px 10px 10px rgba(255,255,255,0.3),inset 0px -1px 1px rgba(255,255,255,0.8);\n'+'   -moz-box-shadow:0 1px 1px rgba(255,255,255,0.9),inset 0px 2px 1px rgba(255,255,255,0.8),inset 0px 5px 2px rgba(255,255,255,0.5),inset 0px 10px 10px rgba(255,255,255,0.3),inset 0px -1px 1px rgba(255,255,255,0.8);\n'+'        box-shadow:0 1px 1px rgba(255,255,255,0.9),inset 0px 2px 1px rgba(255,255,255,0.8),inset 0px 5px 2px rgba(255,255,255,0.5),inset 0px 10px 10px rgba(255,255,255,0.3),inset 0px -1px 1px rgba(255,255,255,0.8);\n'+'text-shadow:1px 1px 3px #000000;\n'+'cursor:pointer;\n'+'webkit-transition:all 0.4s linear;\n'+'/*transition*/\n'+'-webkit-transition:all 0.4s linear;\n'+'   -moz-transition:all 0.4s linear;\n'+'     -o-transition:all 0.4s linear;\n'+'        transition:all 0.4s linear;\n'+'border:1px solid #4A676F;\n'+'margin:0 auto;\n'+'margin-top:30px;\n'+'z-index:10;\n'+'}\n'+'.barra1 .circle .win img{\n'+'margin:0 auto;\n'+'margin-top:10px;\n'+'margin-left:7.5px;\n'+'z-index:10;\n'+'}\n'+'';

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

