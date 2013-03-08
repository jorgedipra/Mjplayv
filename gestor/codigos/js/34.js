var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff ='  <!DOCTYPE html>\n'+'<html>\n'+'<head>\n'+'<meta charset="UTF-8" />\n'+'<title>HTML5 video player</title>\n'+'</head>\n'+'<body>\n'+'  <video width="300">\n'+'      <source src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"><!-- Safari / iOS, IE9 -->\n'+'      <source src="http://clips.vorwaerts-gmbh.de/VfE.webm"><!-- Chrome10+, Ffx4+, Opera10.6+ -->\n'+'      <source src="http://clips.vorwaerts-gmbh.de/VfE.ogv"><!-- Firefox3.6+ / Opera 10.5+ -->\n'+'  </video>\n'+'  <div title="video progress bar" class="ProgressBar"><span></span></div>\n'+'  <a title="Play video" href="#" class="Play">►</a>\n'+'  <a title="Stop video" href="#" class="Pause">■</a>\n'+'  <div class="Volume" title="Volume bar"><div></div><span></span></div>\n'+'<script>\n'+'// Búsqueda de las etiquetas HTML\n'+'var mouseDown   = false, // Esto var se utiliza para detectar el momento en que podamos actualizar la barra de volumen\n'+'    Video       = document.querySelector("video"),\n'+'    Play        = document.querySelector(".Play"),\n'+'    ProgressBar = document.querySelector(".ProgressBar span"),\n'+'    Volume      = document.querySelector(".Volume"),\n'+'    VolumeDrag  = document.querySelector(".Volume span"),\n'+'    VolumeStat  = document.querySelector(".Volume div"),\n'+'    Pause       = document.querySelector(".Pause");\n'+'\n'+'\n'+'var play = function () {\n'+'  Video.play();\n'+'};\n'+'\n'+'var pause = function () {\n'+'  Video.pause();\n'+'};\n'+'\n'+'var updateProgressBar = function () {\n'+'    var percentage = (Video.currentTime / Video.duration) * 100;\n'+'    ProgressBar.style.width = percentage + "%";\n'+'};\n'+'var updateVolume = function ( volumeValue ) {\n'+'  VolumeDrag.style.left   = volumeValue * 100 + "%";\n'+'  VolumeStat.style.width  = volumeValue * 100 +  "%";\n'+'\n'+'  Video.volume = volumeValue;\n'+'};\n'+'\n'+'var setVolume = function ( e ) {\n'+'\n'+'  e.preventDefault();\n'+'\n'+'  if(mouseDown) {\n'+'    var mouseX = e.pageX,\n'+'        realX  = e.pageX - Volume.offsetLeft,\n'+'        volumePosition = realX + "px",\n'+'        volume = ((100 / Volume.offsetWidth) * realX) / 100;\n'+'\n'+'        if (volume < 1 && volume > 0) {\n'+'          updateVolume( volume );\n'+'        }\n'+'  }\n'+'};\n'+'\n'+'updateVolume ( 0.5 );\n'+'\n'+'Play.addEventListener("click", play, false);\n'+'Pause.addEventListener("click", pause, false);\n'+'Video.addEventListener("timeupdate",updateProgressBar, false);\n'+'Volume.addEventListener("mousedown", function () {mouseDown = true}, false);\n'+'Volume.addEventListener("click", function (e) {mouseDown = true; setVolume(e);mouseDown = false;}, false);\n'+'window.addEventListener("mouseup", function () {mouseDown = false}, false);\n'+'window.addEventListener("mousemove", setVolume, false);\n'+'</script>\n'+'</body>\n'+'</html>';

var st = '<style>';
var sf = '</style>';

var defaultcss = '      body {\n'+'      width:300px;\n'+'      margin:30px auto;\n'+'    }\n'+'    video {\n'+'      box-shadow:0 0 15px #333;\n'+'      border-radius:10px;\n'+'    }\n'+'    .ProgressBar {\n'+'      width:100%;\n'+'      height:30px;\n'+'      margin:10px 0;\n'+'      background: #3d3d3d;\n'+'      box-shadow:0 0 10px #000 inset;\n'+'      border-radius:30px;\n'+'      overflow: hidden;\n'+'    }\n'+'    .ProgressBar span {\n'+'      display: block;\n'+'      height:30px;\n'+'      width:0;\n'+'      border-radius:30px;\n'+'      background: #0088CC;\n'+'    }\n'+'    .Volume {\n'+'      float:right;\n'+'      width:200px;\n'+'      border-radius:5px;\n'+'      background: #fff;\n'+'      box-shadow:0 0 2px #999 inset;\n'+'      height:10px;\n'+'      position:relative;\n'+'      cursor:pointer;\n'+'    }\n'+'    .Volume span {\n'+'      width:10px;\n'+'      height:10px;\n'+'      border-radius: 10px;\n'+'      display: block;\n'+'      position: absolute;\n'+'      margin-left:-5px;\n'+'      left:0;\n'+'      top:0;\n'+'      background: #0088CC;\n'+'    }\n'+'    .Volume div {\n'+'      width:0;\n'+'      height:10px;\n'+'      border-radius: 10px;\n'+'      background: #3d3d3d;\n'+'\n'+'    }\n'+'    .Volume div , .Volume span {\n'+'      transition: all 0.1s ease-in-out;\n'+'      -moz-transition: all 0.1s ease-in-out; /* Firefox 4+ */\n'+'      -webkit-transition: all 0.1s ease-in-out; /* Safari and Chrome */\n'+'      -o-transition: all 0.1s ease-in-out; /* Opera */\n'+'    }\n'+'    .Volume div,\n'+'    .ProgressBar span {\n'+'      box-shadow:0 0 10px #000 inset;\n'+'    }\n'+'    a, a:hover {\n'+'      text-decoration: none;\n'+'    }\n'+'    a.Play  {\n'+'      font-size:20px;\n'+'      text-decoration:none;\n'+'    }\n'+'    .Pause {\n'+'      font-size:28px;\n'+'      text-decoration:none;\n'+'    }';

var jat = '<script>';
var jaf = '</script>';

var defaultjas ='  /* código en html con etiqueta script*/';

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

