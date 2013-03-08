var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE html>\n'+'<html lang="es">\n'+'<head>\n'+'<meta charset="utf-8" />\n'+'<title>CONTROL GAME</title>\n'+'</head>\n'+'<body>\n'+'<div class="sonydualshock">\n'+'<ul>  \n'+'  <li>&#9651;</li>\n'+'  <li>&#9675;</li>\n'+'  <li>&times;</li>\n'+'  <li>&#9633;</li>\n'+'</ul>\n'+'</div>\n'+'</body>\n'+'</html>\n'+'';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' html, body{\n'+'/*linear-gradient*/\n'+'background:-webkit-gradient(linear,left top,left bottom,from(#dddddd),color-stop(#cccccc),0));\n'+'background:-webkit-linear-gradient(#dddddd, #cccccc) #dddddd;\n'+'background:   -moz-linear-gradient(#dddddd, #cccccc) #dddddd;\n'+'background:     -o-linear-gradient(#dddddd, #cccccc) #dddddd;\n'+'background:        linear-gradient(#dddddd, #cccccc) #dddddd;\n'+'height:100%;\n'+'width:170px;\n'+'margin:0 auto;\n'+'padding:30px;\n'+'}\n'+'.sonydualshock{\n'+'/*linear-gradient*/\n'+'background:-webkit-gradient(linear,left top,left bottom,from(#2d3133),color-stop(#181b1f),0));\n'+'background:-webkit-linear-gradient(#2d3133, #181b1f) #181b1f;\n'+'background:   -moz-linear-gradient(#2d3133, #181b1f) #181b1f;\n'+'background:     -o-linear-gradient(#2d3133, #181b1f) #181b1f;\n'+'background:        linear-gradient(#2d3133, #181b1f) #181b1f;\n'+'width:114px;\n'+'height:114px;\n'+'position:absolute;\n'+'/*border-radius*/\n'+'-webkit-border-radius:20px;\n'+'   -moz-border-radius:20px;\n'+'        border-radius:20px;\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:0 1px 5px black, 0 1px 5px black inset;\n'+'   -moz-box-shadow:0 1px 5px black, 0 1px 5px black inset;\n'+'        box-shadow:0 1px 5px black, 0 1px 5px black inset;\n'+'/*transform*/\n'+'-webkit-transform:scale(1.5);\n'+'   -moz-transform:scale(1.5);\n'+'    -ms-transform:scale(1.5);\n'+'     -o-transform:scale(1.5);\n'+'        transform:scale(1.5);\n'+'}\n'+'ul{\n'+'margin:5px 0 0 -2px;\n'+'}\n'+'li{\n'+'/*linear-gradient*/\n'+'background:-webkit-gradient(linear,left top,left bottom,from(#272b2e),color-stop(#2c3033),0));\n'+'background:-webkit-linear-gradient(#272b2e, #2c3033) #2c3033;\n'+'background:   -moz-linear-gradient(#272b2e, #2c3033) #2c3033;\n'+'background:     -o-linear-gradient(#272b2e, #2c3033) #2c3033;\n'+'background:        linear-gradient(#272b2e, #2c3033) #2c3033;\n'+'width:35px;\n'+'height:35px;\n'+'color:white;\n'+'font-size:35px;\n'+'font-family:"Arial";\n'+'font-weight:normal;\n'+'line-height:27px;\n'+'text-align:center;\n'+'list-style:none;\n'+'border:solid 2px #111111;\n'+'/*border-radius*/\n'+'-webkit-border-radius:50%;\n'+'   -moz-border-radius:50%;\n'+'        border-radius:50%;\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:0 0 1px black inset;\n'+'   -moz-box-shadow:0 0 1px black inset;\n'+'        box-shadow:0 0 1px black inset;\n'+'}\n'+'li:hover{\n'+'/*linear-gradient*/\n'+'background:-webkit-gradient(linear,left top,left bottom,from(#2c3033),color-stop(#272b2e),0));\n'+'background:-webkit-linear-gradient(#2c3033, #272b2e) #2c3033;\n'+'background:   -moz-linear-gradient(#2c3033, #272b2e) #2c3033;\n'+'background:     -o-linear-gradient(#2c3033, #272b2e) #2c3033;\n'+'background:        linear-gradient(#2c3033, #272b2e) #2c3033;\n'+'cursor:pointer;\n'+'}\n'+'li:nth-child(1){\n'+'color:#086146;\n'+'margin:0;\n'+'}\n'+'li:nth-child(2){\n'+'color:#e65437;\n'+'font-size:45px;\n'+'line-height:30px;\n'+'margin:-6px 0 0 33px;\n'+'}\n'+'li:nth-child(3){\n'+'color:#8b94c7;\n'+'margin:-5px 0 0 0;\n'+'line-height:35px;\n'+'}\n'+'li:nth-child(4){\n'+'color:#d6a1c3;\n'+'margin:-71px 0 0 -33px;\n'+'}\n'+'::selection{\n'+'background:purple;\n'+'}\n'+'';

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

