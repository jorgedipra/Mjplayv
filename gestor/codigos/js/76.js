var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE html>\n'+'<html lang="es">\n'+'<head>\n'+'<meta charset="utf-8" />\n'+'<title>Menu</title>\n'+'</head>\n'+'<body>\n'+'<ul id="menu">\n'+'	<li><a class="selected" tihref="#">home</a></li>\n'+'	<li><a href="#">HTML5</a>\n'+'		<ul>\n'+'			<li><a href="#">semantic</a></li>\n'+'			<li><a href="#">Soft Móvil</a></li>\n'+'		</ul>\n'+'</li>\n'+'<li><a href="#">CSS3</a></li>\n'+'<li><a href="#">JavaScript</a>\n'+'     <ul>\n'+'         <li><a href="#">WebWorker</a></li>\n'+'        \n'+'    </ul>\n'+'</li>     \n'+'</ul>\n'+'</body>\n'+'</html>';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' body{\n'+'background:#fff;\n'+'}\n'+'/* Root = Horizontal, Secondary = Vertical */\n'+'ul#menu{\n'+'ba\n'+'  margin:0;\n'+'border:0 none;\n'+'padding:0;\n'+'/*  width: 50*/\n'+'*  width:500px;\n'+'/*For KHTML*/\n'+'width:360px;\n'+'list-style:none;\n'+'height:20px;\n'+'border:1px solid #eee;\n'+'padding-bottom:5px;\n'+'}\n'+'ul#menu li{\n'+'margin:0;\n'+'border:0 none;\n'+'padding:0;\n'+'float:left;\n'+'/*For Gecko*/\n'+'display:inline;\n'+'list-style:none;\n'+'position:relative;\n'+'height:20px;\n'+'}\n'+'ul#menu li{\n'+'padding-bottom:5px;\n'+'}\n'+'ul#menu li:hover{\n'+'background:#ddd;\n'+'}\n'+'ul#menu  ul{\n'+'margin:0;\n'+'border:0 none;\n'+'padding:0;\n'+'width:160px;\n'+'list-style:none;\n'+'display:none;\n'+'position:absolute;\n'+'top:25px;\n'+'left:10px;\n'+'background:#eee;\n'+'border:none;\n'+'opacity:0.8;\n'+'-moz-opacity:0.8;\n'+'filter:alpha(opacity=80);\n'+'}\n'+'ul#menu ul:after /*From IE 7 lack of compliance*/{\n'+'clear:both;\n'+'display:block;\n'+'font:1px/0px serif;\n'+'content:".";\n'+'height:0;\n'+'visibility:hidden;\n'+'}\n'+'ul#menu ul li{\n'+'width:160px;\n'+'float:left;\n'+'/*For IE 7 lack of compliance*/\n'+'display:block !important;\n'+'display:inline;\n'+'/*For IE*/\n'+':;\n'+'}\n'+'/* Root Menu */\n'+'ul#menu a{\n'+'padding:5px 15px 5px;\n'+'float:none !important;\n'+'/*For Opera*/\n'+'float:left;\n'+'/*For IE*/\n'+'display:block;\n'+'color:#9fcf21;\n'+'text-decoration:none;\n'+'font-weight:bold;\n'+'font-family:Arial, Helvetica, sans-serif;\n'+'font-size:12px;\n'+'/*  border-right:1px solid #818*/\n'+'*  border-right:1px solid #818181;\n'+'*/\n'+'  text-decoration:none;\n'+'height:auto !important;\n'+'height:1%;\n'+':;\n'+'}\n'+'/* Root Menu Hover Persistence */\n'+'ul#menu a:hover,\n'+'ul#menu li:hover a,\n'+'ul#menu li.iehover a{\n'+'color:#003300;\n'+'}\n'+'/* 2nd Menu */\n'+'ul#menu li:hover li a,\n'+'ul#menu li.iehover li a{\n'+'float:none;\n'+'border:none;\n'+'}\n'+'/* 2nd Menu Hover Persistence */\n'+'ul#menu li:hover li a:hover,\n'+'ul#menu li:hover li:hover a,\n'+'ul#menu li.iehover li a:hover,\n'+'ul#menu li.iehover li.iehover a{\n'+'background:#ddd;\n'+'color:#003300;\n'+'}\n'+'/* 3rd Menu */\n'+'ul#menu li:hover li:hover li a,\n'+'ul#menu li.iehover li.iehover li a{\n'+'background:#EEE;\n'+'color:#666;\n'+'}\n'+'/* 3rd Menu Hover Persistence */\n'+'\n'+'ul#menu li:hover li:hover li a:hover,\n'+'ul#menu li:hover li:hover li:hover a,\n'+'ul#menu li.iehover li.iehover li a:hover,\n'+'ul#menu li.iehover li.iehover li.iehover a{\n'+'background:#ddd;\n'+'color:#FFF;\n'+'}\n'+'/* 4th Menu */\n'+'ul#menu li:hover li:hover li:hover li a,\n'+'ul#menu li.iehover li.iehover li.iehover li a{\n'+'background:#ddd;\n'+'color:#666;\n'+'}\n'+'/* 4th Menu Hover */\n'+'ul#menu li:hover li:hover li:hover li a:hover,\n'+'ul#menu li.iehover li.iehover li.iehover li a:hover{\n'+'background:#CCC;\n'+'color:#FFF;\n'+'}\n'+'ul#menu ul ul,\n'+'ul#menu ul ul ul{\n'+'display:none;\n'+'position:absolute;\n'+'top:0;\n'+'left:160px;\n'+'}\n'+'/* Do Not Move - Must Come Before display:block for Gecko */\n'+'ul#menu li:hover ul ul,\n'+'ul#menu li:hover ul ul ul,\n'+'ul#menu li.iehover ul ul,\n'+'ul#menu li.iehover ul ul ul{\n'+'display:none;\n'+'}\n'+'ul#menu li:hover ul,\n'+'ul#menu ul li:hover ul,\n'+'ul#menu ul ul li:hover ul,\n'+'ul#menu li.iehover ul,\n'+'ul#menu ul li.iehover ul,\n'+'ul#menu ul ul li.iehover ul{\n'+'display:block;\n'+'}\n'+'ul#menu .selected{\n'+'color:#003300;\n'+'}\n'+'';

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

