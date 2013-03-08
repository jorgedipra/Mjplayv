var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE HTML> \n'+'<html> \n'+'<head> \n'+'<title>Formulario HTML5</title> \n'+'</head> \n'+'<body onload="drawPicture();"> \n'+'<center>\n'+'<div class="bb">\n'+' <input name="form_number" id="form_number" type="number" min="1" max="10" >\n'+' <input name="form_date" id="form_date" type="date">  \n'+' <input name="form_month" id="form_month" type="month">  \n'+' <input name="form_week" id="form_week" type="week">  \n'+' <input name="form_time" id="form_time" type="time">  \n'+' <input name="form_url" id="form_url" type="url" list="url_list">\n'+' <datalist id="url_list">  \n'+'     <option value="http://www.google.com" label="Google">  \n'+'     <option value="http://net.tutsplus.com" label="NetTuts+">  \n'+' </datalist>  \n'+' <input name="form_email" id="form_email" type="email" list="email_list" multiple>  \n'+' <datalist id="email_list">  \n'+'    <option value="jane.doe@test.com" label="Jane Doe">  \n'+'    <option value="john.doe@test.com" label="John Doe">  \n'+' </datalist>  \n'+' <input name="form_telephone" id="form_telephone" type="tel">  \n'+' <input name="form_color" id="form_color" type="color">  \n'+' <label>\n'+'     Attachments: \n'+'     <input type="file" multiple name="att">\n'+' </label>\n'+' <input name="x" type="range" min="100" max="700" step="9.09090909" value="509.090909">\n'+'<input type="text" x-webkit-speech /> \n'+'<select name="country" id="form-country">			 \n'+'<option value="" selected="selected"></option>\n'+'<option value="AF">Afghanistan</option>\n'+'<option value="AL">Albania</option>\n'+'<option value="DZ">Algeria</option>\n'+'<option value="AS">American Samoa</option>\n'+'<option value="AD">Andorra</option>\n'+'<option value="AO">Angola</option>\n'+'</select>\n'+'</div>\n'+'</center>\n'+'</body> \n'+'</html>';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' body{\n'+'background: url(/imagenes/fondos/fondoC.jpg) center fixed;\n'+'height:100%;\n'+'width:100%;\n'+'}\n'+'\n'+'\n'+'.bb{\n'+'/*linear-gradient*/\n'+'background:-webkit-gradient(linear,left top,left bottom,color-stop(#ffb367,0),to(#ff9d47));\n'+'background:-webkit-linear-gradient(		top,		#ffb367 0%,		#ff9d47);\n'+'background:   -moz-linear-gradient(		top,		#ffb367 0%,		#ff9d47);\n'+'background:     -o-linear-gradient(		top,		#ffb367 0%,		#ff9d47);\n'+'background:        linear-gradient(		top,		#ffb367 0%,		#ff9d47);\n'+'background:-webkit-gradient(		linear, left top, left bottom, 		from(#ffb367),		to(#ff9d47));\n'+'/*border-radius*/\n'+'-webkit-border-radius:6px;\n'+'   -moz-border-radius:6px;\n'+'        border-radius:6px;\n'+'border:1px solid #da791e;\n'+'color:#ffffff;\n'+'font-family:Arial, Helvetica, sans-serif;\n'+'font-size:12px;\n'+'padding:10px 20px;\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:0px 1px 3px rgba(000,000,000,0.5),		inset 0px 0px 3px rgba(255,255,255,1);\n'+'   -moz-box-shadow:0px 1px 3px rgba(000,000,000,0.5),		inset 0px 0px 3px rgba(255,255,255,1);\n'+'        box-shadow:0px 1px 3px rgba(000,000,000,0.5),		inset 0px 0px 3px rgba(255,255,255,1);\n'+'text-shadow:0px -1px 0px rgba(000,000,000,0.1),		0px 1px 0px rgba(255,255,255,1);\n'+'width:500px;\n'+'}\n'+'';

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

