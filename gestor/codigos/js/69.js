var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE html>\n'+'<html lang="es">\n'+'<head>\n'+'<meta charset="utf-8" />\n'+'<title>CONTROL GAME</title>\n'+'</head>\n'+'<body>\n'+'<div class="wrapper">\n'+'  <div class="gameboy">\n'+'    <div class="extra"><span>MJPLAY-videoGame @power</span></div>\n'+'    <a href="#"><div class="plus">+</div></a>\n'+'    <a href="#"><div class="select"><span>select</span></div></a>\n'+'    <a href="#"><div class="start"><span>start</span></div></a>\n'+'    <a href="#"><div class="buttonA"></div></a>\n'+'    <a href="#"><div class="buttonB"></div></a>\n'+'    <div class="speaker"></div>\n'+'  </div>\n'+'  <div class="display">\n'+'    <span>nintendo<sup>®</sup></span>\n'+'  </div>\n'+'</div>\n'+'</body>\n'+'</html>';

var st = '<style>';
var sf = '</style>';

var defaultcss = '@import url(http://fonts.googleapis.com/css?family=Coda+Caption:800);\n'+'body{\n'+'  background: #444;\n'+'  margin: 0 auto;\n'+'  padding: 25px;\n'+'}\n'+'.wrapper{\n'+'width:300px;\n'+'height:300px;\n'+'}\n'+'.gameboy{\n'+'/*linear-gradient*/\n'+'background:-webkit-gradient(linear,left top,left bottom,from(#dddddd),to(#eeeeee));\n'+'background:#dddddd -webkit-linear-gradient(#dddddd, #eeeeee);\n'+'background:   #dddddd -moz-linear-gradient(#dddddd, #eeeeee);\n'+'background:     #dddddd -o-linear-gradient(#dddddd, #eeeeee);\n'+'background:        #dddddd linear-gradient(#dddddd, #eeeeee);\n'+'width:250px;\n'+'height:250px;\n'+'/*border-radius*/\n'+'-webkit-border-radius:48px;\n'+'   -moz-border-radius:48px;\n'+'        border-radius:48px;\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:5px 10px 3px #cccccc inset, 3px 3px 25px black;\n'+'   -moz-box-shadow:5px 10px 3px #cccccc inset, 3px 3px 25px black;\n'+'        box-shadow:5px 10px 3px #cccccc inset, 3px 3px 25px black;\n'+'}\n'+'.gameboy:before{\n'+'content:"";\n'+'width:140px;\n'+'height:0px;\n'+'position:absolute;\n'+'margin:0 0 0 50px;\n'+'border-left:solid 5px transparent;\n'+'border-right:solid 5px transparent;\n'+'border-bottom:solid 11px #333333;\n'+'}\n'+'.gameboy:after{\n'+'content:"";\n'+'background:#565662;\n'+'width:198px;\n'+'height:117px;\n'+'position:absolute;\n'+'margin:30px 0 0 26px;\n'+'/*border-radius*/\n'+'-webkit-border-radius:8px 8px 25px 8px;\n'+'   -moz-border-radius:8px 8px 25px 8px;\n'+'        border-radius:8px 8px 25px 8px;\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:0 0 4px black inset;\n'+'   -moz-box-shadow:0 0 4px black inset;\n'+'        box-shadow:0 0 4px black inset;\n'+'}\n'+'.display{\n'+'/*linear-gradient*/\n'+'background:-webkit-gradient(linear,left top,left bottom,from(#516d23),to(#75942c));\n'+'background:-webkit-linear-gradient(#516d23, #75942c);\n'+'background:   -moz-linear-gradient(#516d23, #75942c);\n'+'background:     -o-linear-gradient(#516d23, #75942c);\n'+'background:        linear-gradient(#516d23, #75942c);\n'+'width:145px;\n'+'height:86px;\n'+'position:absolute;\n'+'margin:-204px 0 0 53px;\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:0 0 4px black inset;\n'+'   -moz-box-shadow:0 0 4px black inset;\n'+'        box-shadow:0 0 4px black inset;\n'+'}\n'+'.display:before{\n'+'/*linear-gradient*/\n'+'background:-webkit-gradient(linear,right top, left bottom,color-stop(rgba(255, 255, 255, 0.1),0.55),color-stop(rgba(255, 255, 255, 0),0.55),color-stop(rgba(255, 255, 255, 0),1));\n'+'background:-webkit-linear-gradient(top right, rgba(255, 255, 255, 0.1) 55%, rgba(255, 255, 255, 0) 55%, rgba(255, 255, 255, 0) 100%);\n'+'background:   -moz-linear-gradient(top right, rgba(255, 255, 255, 0.1) 55%, rgba(255, 255, 255, 0) 55%, rgba(255, 255, 255, 0) 100%);\n'+'background:     -o-linear-gradient(top right, rgba(255, 255, 255, 0.1) 55%, rgba(255, 255, 255, 0) 55%, rgba(255, 255, 255, 0) 100%);\n'+'background:        linear-gradient(top right, rgba(255, 255, 255, 0.1) 55%, rgba(255, 255, 255, 0) 55%, rgba(255, 255, 255, 0) 100%);\n'+'content:"";\n'+'width:196px;\n'+'height:117px;\n'+'margin:-18px 0 0 -26px;\n'+'position:absolute;\n'+'/*border-radius*/\n'+'-webkit-border-radius:8px 8px 25px 8px;\n'+'   -moz-border-radius:8px 8px 25px 8px;\n'+'        border-radius:8px 8px 25px 8px;\n'+'z-index:9999;\n'+'}\n'+'span{\n'+'color:#222222;\n'+'font-size:18px;\n'+'font-family:"Coda Caption", sans-serif;\n'+'font-style:normal;\n'+'text-transform:capitalize;\n'+'margin:30px 0 0 25px;\n'+'position:absolute;\n'+'}\n'+'sup{\n'+'font-size:11px;\n'+'font-family:sans-serif;\n'+'}\n'+'.extra{\n'+'background:#911427;\n'+'width:6px;\n'+'height:6px;\n'+'position:absolute;\n'+'margin:58px 0 0 37px;\n'+'/*border-radius*/\n'+'-webkit-border-radius:50%;\n'+'   -moz-border-radius:50%;\n'+'        border-radius:50%;\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:0 0 1px black;\n'+'   -moz-box-shadow:0 0 1px black;\n'+'        box-shadow:0 0 1px black;\n'+'z-index:99998;\n'+'}\n'+'.extra:before{\n'+'background:#565662;\n'+'content:"";\n'+'width:65px;\n'+'height:2px;\n'+'position:absolute;\n'+'margin:-23px 0 0 -3px;\n'+'border-top:solid 2px #d10277;\n'+'border-bottom:solid 2px #1e2969;\n'+'}\n'+'.extra:after{\n'+'background:#565662;\n'+'content:"";\n'+'width:16px;\n'+'height:2px;\n'+'position:absolute;\n'+'margin:-23px 0 0 165px;\n'+'border-top:solid 2px #d10277;\n'+'border-bottom:solid 2px #1e2969;\n'+'z-index:99998;\n'+'}\n'+'.extra span{\n'+'color:white;\n'+'font-family:"Arial", sans-serif;\n'+'font-size:5px;\n'+'width:110px;\n'+'position:absolute;\n'+'margin:-23px 0 0 70px;\n'+'text-transform:uppercase;\n'+'}\n'+'.plus{\n'+'color:#333333;\n'+'font-weight:bold;\n'+'font-size:71px;\n'+'position:absolute;\n'+'margin:140px 0 0 33px;\n'+'-webkit-text-stroke:14px #999999;\n'+'text-shadow:-2px -2px 5px black;\n'+'}\n'+'.plus:before{\n'+'content:"+";\n'+'color:#333333;\n'+'font-weight:bold;\n'+'font-size:76px;\n'+'position:absolute;\n'+'margin:-2px 0 0 -1px;\n'+'-webkit-text-stroke:8px #333333;\n'+'}\n'+'.select{\n'+'/*linear-gradient*/\n'+'background:-webkit-gradient(linear,left top,left bottom,from(#777777),to(#ffffff));\n'+'background:-webkit-linear-gradient(#777777, #ffffff);\n'+'background:   -moz-linear-gradient(#777777, #ffffff);\n'+'background:     -o-linear-gradient(#777777, #ffffff);\n'+'background:        linear-gradient(#777777, #ffffff);\n'+'width:34px;\n'+'height:16px;\n'+'position:absolute;\n'+'margin:205px 0 0 80px;\n'+'/*border-radius*/\n'+'-webkit-border-radius:8px;\n'+'   -moz-border-radius:8px;\n'+'        border-radius:8px;\n'+'/*transform*/\n'+'-webkit-transform:rotate(-28deg);\n'+'   -moz-transform:rotate(-28deg);\n'+'    -ms-transform:rotate(-28deg);\n'+'     -o-transform:rotate(-28deg);\n'+'        transform:rotate(-28deg);\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:0 0 1px #555555 inset;\n'+'   -moz-box-shadow:0 0 1px #555555 inset;\n'+'        box-shadow:0 0 1px #555555 inset;\n'+'}\n'+'.select:before{\n'+'/*linear-gradient*/\n'+'background:-webkit-gradient(linear,left top,left bottom,from(#888888),to(#666666));\n'+'background:-webkit-linear-gradient(#888888, #666666);\n'+'background:   -moz-linear-gradient(#888888, #666666);\n'+'background:     -o-linear-gradient(#888888, #666666);\n'+'background:        linear-gradient(#888888, #666666);\n'+'content:"";\n'+'width:26px;\n'+'height:8px;\n'+'position:absolute;\n'+'margin:3px 0 0 3px;\n'+'border:solid 1px #444444;\n'+'/*border-radius*/\n'+'-webkit-border-radius:5px;\n'+'   -moz-border-radius:5px;\n'+'        border-radius:5px;\n'+'z-index:99996;\n'+'}\n'+'.start{\n'+'/*linear-gradient*/\n'+'background:-webkit-gradient(linear,left top,left bottom,from(#777777),to(#ffffff));\n'+'background:-webkit-linear-gradient(#777777, #ffffff);\n'+'background:   -moz-linear-gradient(#777777, #ffffff);\n'+'background:     -o-linear-gradient(#777777, #ffffff);\n'+'background:        linear-gradient(#777777, #ffffff);\n'+'width:34px;\n'+'height:16px;\n'+'position:absolute;\n'+'margin:205px 0 0 120px;\n'+'/*border-radius*/\n'+'-webkit-border-radius:8px;\n'+'   -moz-border-radius:8px;\n'+'        border-radius:8px;\n'+'/*transform*/\n'+'-webkit-transform:rotate(-28deg);\n'+'   -moz-transform:rotate(-28deg);\n'+'    -ms-transform:rotate(-28deg);\n'+'     -o-transform:rotate(-28deg);\n'+'        transform:rotate(-28deg);\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:0 0 1px #555555 inset;\n'+'   -moz-box-shadow:0 0 1px #555555 inset;\n'+'        box-shadow:0 0 1px #555555 inset;\n'+'}\n'+'.start:before{\n'+'/*linear-gradient*/\n'+'background:-webkit-gradient(linear,left top,left bottom,from(#888888),to(#666666));\n'+'background:-webkit-linear-gradient(#888888, #666666);\n'+'background:   -moz-linear-gradient(#888888, #666666);\n'+'background:     -o-linear-gradient(#888888, #666666);\n'+'background:        linear-gradient(#888888, #666666);\n'+'content:"";\n'+'width:26px;\n'+'height:8px;\n'+'position:absolute;\n'+'margin:3px 0 0 3px;\n'+'border:solid 1px #444444;\n'+'/*border-radius*/\n'+'-webkit-border-radius:5px;\n'+'   -moz-border-radius:5px;\n'+'        border-radius:5px;\n'+'z-index:99996;\n'+'}\n'+'.select span, .start span{\n'+'color:#1e2969;\n'+'font-family:"Arial", sans-serif;\n'+'font-size:6px;\n'+'font-weight:bold;\n'+'width:110px;\n'+'position:absolute;\n'+'margin:16px 0 0 5px;\n'+'text-transform:uppercase;\n'+'-webkit-font-smoothing:subpixel-antialiased;\n'+'}\n'+'.buttonA{\n'+'/*linear-gradient*/\n'+'background:-webkit-gradient(linear,left top,left bottom,from(#666666),to(#ffffff));\n'+'background:-webkit-linear-gradient(#666666, #ffffff);\n'+'background:   -moz-linear-gradient(#666666, #ffffff);\n'+'background:     -o-linear-gradient(#666666, #ffffff);\n'+'background:        linear-gradient(#666666, #ffffff);\n'+'width:36px;\n'+'height:36px;\n'+'position:absolute;\n'+'margin:175px 0 0 157px;\n'+'/*border-radius*/\n'+'-webkit-border-radius:50%;\n'+'   -moz-border-radius:50%;\n'+'        border-radius:50%;\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:0 0 1px #444444;\n'+'   -moz-box-shadow:0 0 1px #444444;\n'+'        box-shadow:0 0 1px #444444;\n'+'}\n'+'.buttonA:before{\n'+'/*linear-gradient*/\n'+'background:-webkit-gradient(linear,left top,left bottom,from(#bd0055),to(#a10254));\n'+'background:-webkit-linear-gradient(#bd0055, #a10254);\n'+'background:   -moz-linear-gradient(#bd0055, #a10254);\n'+'background:     -o-linear-gradient(#bd0055, #a10254);\n'+'background:        linear-gradient(#bd0055, #a10254);\n'+'content:"";\n'+'width:30px;\n'+'height:30px;\n'+'position:absolute;\n'+'margin:3px 0 0 3px;\n'+'/*border-radius*/\n'+'-webkit-border-radius:50%;\n'+'   -moz-border-radius:50%;\n'+'        border-radius:50%;\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:1px 1px 2px black;\n'+'   -moz-box-shadow:1px 1px 2px black;\n'+'        box-shadow:1px 1px 2px black;\n'+'}\n'+'.buttonB{\n'+'/*linear-gradient*/\n'+'background:-webkit-gradient(linear,left top,left bottom,from(#666666),to(#ffffff));\n'+'background:-webkit-linear-gradient(#666666, #ffffff);\n'+'background:   -moz-linear-gradient(#666666, #ffffff);\n'+'background:     -o-linear-gradient(#666666, #ffffff);\n'+'background:        linear-gradient(#666666, #ffffff);\n'+'width:36px;\n'+'height:36px;\n'+'position:absolute;\n'+'margin:155px 0 0 197px;\n'+'/*border-radius*/\n'+'-webkit-border-radius:50%;\n'+'   -moz-border-radius:50%;\n'+'        border-radius:50%;\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:0 0 1px #444444;\n'+'   -moz-box-shadow:0 0 1px #444444;\n'+'        box-shadow:0 0 1px #444444;\n'+'}\n'+'.buttonB:before{\n'+'/*linear-gradient*/\n'+'background:-webkit-gradient(linear,left top,left bottom,from(#bd0055),to(#a10254));\n'+'background:-webkit-linear-gradient(#bd0055, #a10254);\n'+'background:   -moz-linear-gradient(#bd0055, #a10254);\n'+'background:     -o-linear-gradient(#bd0055, #a10254);\n'+'background:        linear-gradient(#bd0055, #a10254);\n'+'content:"";\n'+'width:30px;\n'+'height:30px;\n'+'position:absolute;\n'+'margin:3px 0 0 3px;\n'+'/*border-radius*/\n'+'-webkit-border-radius:50%;\n'+'   -moz-border-radius:50%;\n'+'        border-radius:50%;\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:1px 1px 2px black;\n'+'   -moz-box-shadow:1px 1px 2px black;\n'+'        box-shadow:1px 1px 2px black;\n'+'}\n'+'.speaker{\n'+'/*linear-gradient*/\n'+'background:-webkit-gradient(linear,left top,left bottom,from(#cccccc),to(#444444));\n'+'background:-webkit-linear-gradient(#cccccc, #444444);\n'+'background:   -moz-linear-gradient(#cccccc, #444444);\n'+'background:     -o-linear-gradient(#cccccc, #444444);\n'+'background:        linear-gradient(#cccccc, #444444);\n'+'width:30px;\n'+'height:6px;\n'+'position:absolute;\n'+'margin:220px 0 0 193px;\n'+'/*transform*/\n'+'-webkit-transform:rotate(61deg);\n'+'   -moz-transform:rotate(61deg);\n'+'    -ms-transform:rotate(61deg);\n'+'     -o-transform:rotate(61deg);\n'+'        transform:rotate(61deg);\n'+'}\n'+'.speaker:before{\n'+'/*linear-gradient*/\n'+'background:-webkit-gradient(linear,left top,left bottom,from(#cccccc),to(#444444));\n'+'background:-webkit-linear-gradient(#cccccc, #444444);\n'+'background:   -moz-linear-gradient(#cccccc, #444444);\n'+'background:     -o-linear-gradient(#cccccc, #444444);\n'+'background:        linear-gradient(#cccccc, #444444);\n'+'content:"";\n'+'width:30px;\n'+'height:6px;\n'+'position:absolute;\n'+'margin:-10px 0 0 0;\n'+'}\n'+'.speaker:after{\n'+'/*linear-gradient*/\n'+'background:-webkit-gradient(linear,left top,left bottom,from(#cccccc),to(#444444));\n'+'background:-webkit-linear-gradient(#cccccc, #444444);\n'+'background:   -moz-linear-gradient(#cccccc, #444444);\n'+'background:     -o-linear-gradient(#cccccc, #444444);\n'+'background:        linear-gradient(#cccccc, #444444);\n'+'content:"";\n'+'width:30px;\n'+'height:6px;\n'+'position:absolute;\n'+'margin:-20px 0 0 0;\n'+'}\n'+'::selection{\n'+'background:purple;\n'+'}\n'+'';

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

