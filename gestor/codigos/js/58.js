var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE html>\n'+'<html lang="es">\n'+'<head>\n'+'<meta charset="utf-8" />\n'+'<title>Ticket-CSS3</title>\n'+'</head>\n'+'<body>\n'+'<article id="fondo">\n'+' <h1>Ticket-CSS3</h1>\n'+'    <div class="tags">\n'+'        <div class="ticket"><span class="circle"></span><a href="#">Pure CSS3 Ticket</a></div>\n'+'        <div class="ticket"><span class="circle"></span><a href="#">CSS3</a></div>\n'+'        <div class="ticket"><span class="circle"></span><a href="#">Ticket</a></div>\n'+'        <div class="ticket"><span class="circle"></span><a href="#">HTML5</a></div>\n'+'        <div class="ticket"><span class="circle"></span><a href="#">Design</a></div>\n'+'        <div class="ticket"><span class="circle"></span><a href="#">Development</a></div>\n'+'        <div class="ticket"><span class="circle"></span><a href="#">JQuery</a></div>\n'+'        <div class="ticket"><span class="circle"></span><a href="#">Photoshop</a></div>\n'+'        <div class="ticket"><span class="circle"></span><a href="#">Javascript</a></div>\n'+'        <div class="ticket"><span class="circle"></span><a href="#">WordPress</a></div>\n'+'        <div class="ticket"><span class="circle"></span><a href="#">Tags</a></div>\n'+'        <div class="ticket"><span class="circle"></span><a href="#">Green</a></div>\n'+'        <div class="ticket"><span class="circle"></span><a href="#">Tutorial</a></div>\n'+'        <div class="ticket"><span class="circle"></span><a href="#">Resource</a></div>\n'+'        <div class="ticket"><span class="circle"></span><a href="#">Site Elements</a></div>\n'+'        <div class="ticket"><span class="circle"></span><a href="#">Application</a></div>\n'+'        <div class="ticket"><span class="circle"></span><a href="#">Coding</a></div>\n'+'    </div>\n'+'</article>\n'+'</body>\n'+'</html>';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' body {\n'+'    background: url(/imagenes/fondos/fondoI.png) center fixed;\n'+'    margin: 100px;\n'+'    padding: 20px 30px 60px 30px;\n'+'    text-align: center;\n'+'    font-family: Verdana;\n'+'    border: 1px dashed rgba(0,0,0,0.3);\n'+'    outline: 1px dashed #8DC63F;\n'+'}\n'+'\n'+'h1 {\n'+'    font-size: 36px;\n'+'    margin-bottom: 100px;\n'+'    color: #8DC63F;\n'+'    text-shadow: 0 1px 0 rgba(0,0,0,0.5);\n'+'}\n'+'#fondo {\n'+' background:#fff;\n'+'}\n'+'.tags {\n'+'    background:#fff;\n'+'    max-width: 600px;\n'+'    margin: 0 auto;\n'+'}\n'+'\n'+'.tags:after {\n'+'    content: "";\n'+'    display: block;\n'+'    clear: both;\n'+'    height: 0;\n'+'    width: 0;\n'+'}\n'+'.ticket {\n'+'    font-family: Arial;\n'+'    font-size: 12px;\n'+'    font-weight: bold;\n'+'    position: relative !important;\n'+'    background: #8dc63f;\n'+'    float: left;\n'+'    padding: 7px 3px;\n'+'    margin: 0 5px 5px 0;\n'+'}\n'+'\n'+'.ticket:after {\n'+'    content: "";\n'+'    position: absolute !important;\n'+'    z-index: 100;\n'+'    top: 0;\n'+'    left: 0;\n'+'    border-right: #fff 7px solid;\n'+'    border-bottom: #fff 7px solid;\n'+'    -moz-border-radius: 0 0 20px 0;\n'+'    -webkit-border-radius: 0 0 20px 0;\n'+'    border-radius: 0 0 20px 0;\n'+'}\n'+'\n'+'.ticket:before {\n'+'    content: "";\n'+'    position: absolute !important;\n'+'    z-index: 100;\n'+'    top: 0;\n'+'    right: 0;\n'+'    border-left: #fff 7px solid;\n'+'    border-bottom: #fff 7px solid;\n'+'    -moz-border-radius: 0 0 0 20px;\n'+'    -webkit-border-radius: 0 0 0 20px;\n'+'    border-radius: 0 0 0 20px;\n'+'}\n'+'\n'+'.ticket a {\n'+'    outline: 1px rgba(255,255,255,0.4) dashed;\n'+'    border: 1px rgba(0,0,0,0.3) dashed;\n'+'    padding: 4px 10px 4px 20px;\n'+'    text-decoration: none;\n'+'    color: rgba(255,255,255,0.5);\n'+'    white-space: nowrap;\n'+'}\n'+'\n'+'.ticket a:hover {color: rgba(0,0,0,0.5);}\n'+'\n'+'.ticket a:after {\n'+'    content: "";\n'+'    position: absolute !important;\n'+'    z-index: 100;\n'+'    bottom: 0;\n'+'    left: 0;\n'+'    border-right: #fff 7px solid;\n'+'    border-top: #fff 7px solid;\n'+'    -moz-border-radius: 0 20px 0 0;\n'+'    -webkit-border-radius: 0 20px 0 0;\n'+'    border-radius: 0 20px 0 0;\n'+'}\n'+'\n'+'.ticket a:before {\n'+'    content: "";\n'+'    position: absolute !important;\n'+'    z-index: 1000;\n'+'    bottom: 0;\n'+'    right: 0;\n'+'    border-left: #fff 7px solid;\n'+'    border-top: #fff 7px solid;\n'+'    -moz-border-radius: 20px 0 0 0;\n'+'    -webkit-border-radius: 20px 0 0 0;\n'+'    border-radius: 20px 0 0 0;\n'+'}\n'+'\n'+'.ticket .circle {\n'+'    position: absolute !important;\n'+'    z-index: 100;\n'+'    border: 5px #fff solid;\n'+'    -moz-border-radius: 10px;\n'+'    -webkit-border-radius: 10px;\n'+'    border-radius: 10px;\n'+'    margin-top: -5px;\n'+'    width: 0;\n'+'    height: 0;\n'+'    top: 50%;\n'+'    left: 8px;\n'+'    -moz-box-shadow: 0 -1px 0 rgba(0,0,0,0.5),\n'+'        0 1px 0 rgba(255,255,255,0.3);\n'+'    -webkit-box-shadow: 0 -1px 0 rgba(0,0,0,0.5),\n'+'        0 1px 0 rgba(255,255,255,0.3);\n'+'    box-shadow: 0 -1px 0 rgba(0,0,0,0.5),\n'+'        0 1px 0 rgba(255,255,255,0.3);\n'+'}';

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

