var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE HTML>\n'+'<html>\n'+'<head>\n'+'<title>Ventana Face</title>\n'+'</head>\n'+'<body>	\n'+'<input type="checkbox" id="showDialog">\n'+'<div class="container">\n'+'<label for="showDialog" class="button">\n'+'<IMG SRC="http://mjplay-v.16mb.com/imagenes/facebook-logo.png" WIDTH=50 HEIGHT=50 title="Inicio">\n'+'</label>\n'+'	<div class="candrag">\n'+'		<div class="dialog">\n'+'			<div class="dialogTitle"> \n'+'                           <IMG SRC="http://mjplay-v.16mb.com/imagenes/facebook-logo.png" WIDTH=25 HEIGHT=25 title="Inicio">\n'+'			Mueveme (@MJPlayV)	 <label for="showDialog" class="closeButton"></label>\n'+'			</div>\n'+'			<div class="dialogContent">\n'+'				\n'+'<IMG SRC="http://mjplay-v.16mb.com/imagenes/facebook-logo.png" WIDTH=50 HEIGHT=50 title="Inicio">\n'+'\n'+'			</div>\n'+'		</div>\n'+'	</div>\n'+'</div>\n'+'</body>\n'+'</html>';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' /*ventana*/\n'+'body{\n'+'background: url(http://mjplay-v.16mb.com/imagenes/fondos/fondoVv.png);\n'+'margin:0;\n'+'height:100%;\n'+'min-height:320px;\n'+'font-family:sans-serif;\n'+'}\n'+'body > input{\n'+'display:none;\n'+'}\n'+'.candrag{\n'+'display:none;\n'+'position:fixed;\n'+'left:100%;\n'+'top:100%;\n'+'width:18px;\n'+'height:160px;\n'+'max-width:6.25%;\n'+'max-height:100%;\n'+'overflow:hidden;\n'+'resize:both;\n'+'/*transform-origin*/\n'+'-webkit-transform-origin:0 0;\n'+'   -moz-transform-origin:0 0;\n'+'    -ms-transform-origin:0 0;\n'+'     -o-transform-origin:0 0;\n'+'        transform-origin:0 0;\n'+'/*transform*/\n'+'-webkit-transform:rotate(180deg) scaleX(16);\n'+'   -moz-transform:rotate(180deg) scaleX(16);\n'+'    -ms-transform:rotate(180deg) scaleX(16);\n'+'     -o-transform:rotate(180deg) scaleX(16);\n'+'        transform:rotate(180deg) scaleX(16);\n'+'}\n'+'.candrag::-webkit-resizer{\n'+'visibility:hidden;\n'+'}\n'+'.candrag:not([style]){\n'+'left:400px;\n'+'top:200px;\n'+'}\n'+'.candrag:not([style]):active{\n'+'left:401px;\n'+'top:201px;\n'+'}\n'+'.candrag *{\n'+'box-sizing:border-box;\n'+'resize:none;\n'+'}\n'+'.dialog{\n'+'position:absolute;\n'+'left:100%;\n'+'top:100%;\n'+'width:288px;\n'+'background-image:-webkit-linear-gradient(bottom, #ddd, #eee 32px, #eee);\n'+'background-image:-moz-linear-gradient(bottom, #ddd, #eee 32px, #eee);\n'+'background-image:-o-linear-gradient(bottom, #ddd, #eee 32px, #eee);\n'+'background-image:-ms-linear-gradient(bottom, #ddd, #eee 32px, #eee);\n'+'background-image:linear-gradient(bottom, #ddd, #eee 32px, #eee);\n'+'/*border-radius*/\n'+'-webkit-border-radius:5px;\n'+'   -moz-border-radius:5px;\n'+'        border-radius:5px;\n'+'border:1px solid #888;\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:white 0px -1px 1px inset;\n'+'   -moz-box-shadow:white 0px -1px 1px inset;\n'+'        box-shadow:white 0px -1px 1px inset;\n'+'/*transform-origin*/\n'+'-webkit-transform-origin:0 0;\n'+'   -moz-transform-origin:0 0;\n'+'    -ms-transform-origin:0 0;\n'+'     -o-transform-origin:0 0;\n'+'        transform-origin:0 0;\n'+'/*transform*/\n'+'-webkit-transform:scaleX(0.0625) rotate(180deg);\n'+'   -moz-transform:scaleX(0.0625) rotate(180deg);\n'+'    -ms-transform:scaleX(0.0625) rotate(180deg);\n'+'     -o-transform:scaleX(0.0625) rotate(180deg);\n'+'        transform:scaleX(0.0625) rotate(180deg);\n'+'pointer-events:none;\n'+'}\n'+'.dialogContent p{\n'+'color:black;\n'+'font:13px/15px Arial, sans-serif;\n'+'}\n'+'.dialogTitle{\n'+'padding-left:5px;\n'+'height:30px;\n'+'overflow:hidden;\n'+'background:#000;\n'+'/*linear-gradient*/\n'+'background:-webkit-gradient(linear,21.92% 110.22%,78.08% -10.22%,from(rgba(0,0,0,0.6)),color-stop(rgba(0,0,0,0.9),0.33),color-stop(rgba(0,0,0,0.5),0.67),to(rgba(0,0,0,0.9)));\n'+'background:-webkit-linear-gradient(65deg,rgba(0,0,0,0.6),rgba(0,0,0,0.9),rgba(0,0,0,0.5),rgba(0,0,0,0.9));\n'+'background:   -moz-linear-gradient(65deg,rgba(0,0,0,0.6),rgba(0,0,0,0.9),rgba(0,0,0,0.5),rgba(0,0,0,0.9));\n'+'background:     -o-linear-gradient(65deg,rgba(0,0,0,0.6),rgba(0,0,0,0.9),rgba(0,0,0,0.5),rgba(0,0,0,0.9));\n'+'background:        linear-gradient(65deg,rgba(0,0,0,0.6),rgba(0,0,0,0.9),rgba(0,0,0,0.5),rgba(0,0,0,0.9));\n'+'color:#fff;\n'+'line-height:40px;\n'+'color:white;\n'+'/*border-radius*/\n'+'-webkit-border-radius:5px 5px 0 0;\n'+'   -moz-border-radius:5px 5px 0 0;\n'+'        border-radius:5px 5px 0 0;\n'+'}\n'+'.dialogTitle img{\n'+'padding-left:1px;\n'+'margin-top:-10px;\n'+'/* alto*/\n'+':;\n'+'}\n'+'.button{\n'+'cursor:pointer;\n'+'padding:0px;\n'+'text-decoration:none;\n'+'/*border-radius*/\n'+'-webkit-border-radius:5px;\n'+'   -moz-border-radius:5px;\n'+'        border-radius:5px;\n'+'display:inline-block;\n'+'text-shadow:0 1px 1px rgba(255, 255, 255, 0.75);\n'+'font-size:13px;\n'+'margin-top:20px;\n'+'line-height:normal;\n'+'border:1px solid #ccc;\n'+'border-bottom-color:#bbb;\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.2),0 1px 2px rgba(0, 0, 0, 0.05);\n'+'   -moz-box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.2),0 1px 2px rgba(0, 0, 0, 0.05);\n'+'        box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.2),0 1px 2px rgba(0, 0, 0, 0.05);\n'+'/*transition*/\n'+'-webkit-transition:0.1s linear all;\n'+'   -moz-transition:0.1s linear all;\n'+'     -o-transition:0.1s linear all;\n'+'        transition:0.1s linear all;\n'+'color:#ffffff;\n'+'filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#049cdb", endColorstr="#0064cd", GradientType=0);\n'+'text-shadow:0 -1px 0 rgba(0, 0, 0, 0.25);\n'+'border-color:#0064cd #0064cd #003f81;\n'+'border-color:rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);\n'+'}\n'+'.button:hover{\n'+'background-position:0 -15px;\n'+'background:rgba(204, 230, 255, 0.63);\n'+'text-decoration:none;\n'+'}\n'+'.button:focus{\n'+'outline:1px dotted #666;\n'+'}\n'+'.button:active{\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:inset 0 2px 4px rgba(0, 0, 0, 0.25),0 1px 2px rgba(0, 0, 0, 0.05);\n'+'   -moz-box-shadow:inset 0 2px 4px rgba(0, 0, 0, 0.25),0 1px 2px rgba(0, 0, 0, 0.05);\n'+'        box-shadow:inset 0 2px 4px rgba(0, 0, 0, 0.25),0 1px 2px rgba(0, 0, 0, 0.05);\n'+'}\n'+'.closeButton{\n'+'float:right;\n'+'width:48px;\n'+'height:30px;\n'+'color:white;\n'+'text-align:center;\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:black 0 -1px 1px inset, white 1px 0 1px inset;\n'+'   -moz-box-shadow:black 0 -1px 1px inset, white 1px 0 1px inset;\n'+'        box-shadow:black 0 -1px 1px inset, white 1px 0 1px inset;\n'+'line-height:30px;\n'+'pointer-events:auto;\n'+'}\n'+'.closeButton::before{\n'+'content:"x";\n'+'}\n'+'.closeButton:hover{\n'+'background:#d64;\n'+'cursor:pointer;\n'+'}\n'+'.closeButton:hover:active, .button:hover:active{\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:none;\n'+'   -moz-box-shadow:none;\n'+'        box-shadow:none;\n'+'}\n'+'.dialogContent{\n'+'padding:20px;\n'+'pointer-events:auto;\n'+'cursor:default;\n'+'}\n'+'#showDialog:checked + * .candrag{\n'+'display:block;\n'+'}\n'+'.container{\n'+'display:scroll;\n'+'position:fixed;\n'+'bottom:0px;\n'+'left:200px;\n'+'cursor:move;\n'+'}';

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

