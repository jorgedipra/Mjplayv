var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE HTML>\n'+'<html>\n'+'<head>\n'+'<meta charset="utf-8">\n'+'<meta name="viewport" content="initial-scale=1.0, width=device-width, minimum-scale=1, maximum-scale=1, user-scalable=no">\n'+'<title>CSS3 Galeria</title>\n'+'</head>\n'+'<body>\n'+'<div id="wrap">\n'+'	<form>\n'+'		<ul id="main_view_wrap">\n'+'			<li><input type="radio" id="radio_01" name="main"><div class="main_cell"><img src="/Escritorio/explorer/carpetas/Galeria/images/large/1.jpg">\n'+'				<p>imag1</p></div></li>\n'+'			<li><input type="radio" id="radio_02" name="main"><div class="main_cell"><img src="/Escritorio/explorer/carpetas/Galeria/images/large/2.jpg">\n'+'				<p>imag2</p></div></li>\n'+'			<li><input type="radio" id="radio_03" name="main"><div class="main_cell"><img src="/Escritorio/explorer/carpetas/Galeria/images/large/3.jpg">\n'+'				<p>imag3</p></div></li>\n'+'			<li><input type="radio" id="radio_04" name="main"><div class="main_cell"><img src="/Escritorio/explorer/carpetas/Galeria/images/large/15.jpg">\n'+'				<p>imag4</p></div></li>\n'+'			<li><input type="radio" id="radio_05" name="main"><div class="main_cell"><img src="/Escritorio/explorer/carpetas/Galeria/images/large/19.jpg">\n'+'				<p>imag5</p></div></li>\n'+'			<li><input type="radio" id="radio_06" name="main"><div class="main_cell"><img src="/Escritorio/explorer/carpetas/Galeria/images/large/23.jpg">\n'+'				<p>imag6</p></div></li>\n'+'			<li><input type="radio" id="radio_07" name="main"><div class="main_cell"><img src="/Escritorio/explorer/carpetas/Galeria/images/large/22.jpg">\n'+'				<p>imag1<br><a href="http://mjplay-v.16mb.com/" target="_blank">Dale like</a></p></div></li>\n'+'			<li><input type="radio" id="cover" name="main" checked><div class="main_cell"><img src="http://jsrun.it/assets/m/V/4/k/mV4kS.jpg"></div></li>\n'+'		</ul>\n'+'		<ul id="switch_wrap">\n'+'			<li class="switch"><label for="radio_01"><img src="/Escritorio/explorer/carpetas/Galeria/images/large/1.jpg"></label></li>\n'+'			<li class="switch"><label for="radio_02"><img src="/Escritorio/explorer/carpetas/Galeria/images/large/2.jpg"></label></li>\n'+'			<li class="switch"><label for="radio_03"><img src="/Escritorio/explorer/carpetas/Galeria/images/large/3.jpg"></label></li>\n'+'			<li class="switch"><label for="radio_04"><img src="/Escritorio/explorer/carpetas/Galeria/images/large/15.jpg"></label></li>\n'+'			<li class="switch"><label for="radio_05"><img src="/Escritorio/explorer/carpetas/Galeria/images/large/19.jpg"></label></li>\n'+'			<li class="switch"><label for="radio_06"><img src="/Escritorio/explorer/carpetas/Galeria/images/large/23.jpg"></label></li>\n'+'			<li class="switch"><label for="radio_07"><img src="/Escritorio/explorer/carpetas/Galeria/images/large/22.jpg"></label></li>\n'+'			<li class="switch"><img src="http://jsrun.it/assets/m/V/4/k/mV4kS.jpg"></li>\n'+'		</ul>\n'+'		<div style="clear:both; height:1px;"></div>\n'+'	</form>\n'+'</div>\n'+'</body>\n'+'</html>\n'+'</body>\n'+'</html>';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' @charset "utf-8";\n'+'*{\n'+'margin:0; \n'+'padding:0;\n'+'}\n'+'body{\n'+'background:#000;\n'+'text-align:center;\n'+'}\n'+'#wrap{\n'+'margin:0 auto;\n'+'overflow:hidden;\n'+'text-align:left;\n'+'width:320px;\n'+'}\n'+'a{color:#fff;}\n'+'#wrap li{list-style:none;}\n'+'#wrap form{padding-top:20px;}\n'+'#main_view_wrap{\n'+'float:right;\n'+'height:212px;\n'+'margin-bottom:1px;\n'+'overflow:hidden;\n'+'position:relative;\n'+'width:320px;\n'+'}\n'+'#main_view_wrap input{display:none;}\n'+'#main_view_wrap li{\n'+'left:0;\n'+'position:absolute;\n'+'top:0;\n'+'}\n'+'#main_view_wrap .main_cell{\n'+'height:212px;\n'+'overflow:hidden;\n'+'position:relative;\n'+'width:320px;\n'+'}\n'+'#main_view_wrap .main_cell p{\n'+'background:rgba(0,0,0, 0.5);\n'+'bottom:0;\n'+'color:#fff;\n'+'padding:5px;\n'+'position:absolute;\n'+'right:0;\n'+'text-align:right;\n'+'}\n'+'#main_view_wrap input:checked + .main_cell{\n'+'filter:alpha(opacity=100);\n'+'-moz-opacity:1;\n'+'opacity:1;\n'+'z-index:10;\n'+'display:block;\n'+'}\n'+'#main_view_wrap img{\n'+'border:1px solid #333;\n'+'height:210px;\n'+'width:318px;\n'+'}\n'+'#main_view_wrap .main_cell{\n'+'opacity:0;\n'+'-moz-opacity:0;\n'+'display:none;\n'+'filter:alpha(opacity=0);\n'+'z-index:0;\n'+'}\n'+'.switch label{\n'+'cursor:pointer;\n'+'}\n'+'.switch img{\n'+'border:1px solid #333;\n'+'height:50px;\n'+'width:77px;\n'+'}\n'+'.switch{\n'+'float:left;\n'+'height:52px;\n'+'margin:0 1px 1px 0;\n'+'width:79px;\n'+'}\n'+'.switch:nth-child(4n){\n'+'margin-right:0;\n'+'width:80px;\n'+'}\n'+'.switch:nth-child(4n) img{width:78px;}\n'+'.switch:nth-child(8) img{border:none;}\n'+'.switch label img{\n'+'opacity:1;\n'+'-moz-opacity:1;\n'+'filter:alpha(opacity=100);\n'+'-webkit-animation:"check_over_off" 0.5s ease 1;\n'+'-moz-animation:"check_over_off" 0.5s ease 1;\n'+'-ms-animation:"check_over_off" 0.5s ease 1;\n'+'-o-animation:"check_over_off" 0.5s ease 1;\n'+'animation:"check_over_off" 0.5s ease 1;\n'+'}\n'+'.switch label img:hover{\n'+'border:1px solid #999;\n'+'opacity:0.2;\n'+'-moz-opacity:0.2;\n'+'filter:alpha(opacity=20);\n'+'-webkit-animation:"check_over" 0.5s ease 1;\n'+'-moz-animation:"check_over" 0.5s ease 1;\n'+'-ms-animation:"check_over" 0.5s ease 1;\n'+'-o-animation:"check_over" 0.5s ease 1;\n'+'animation:"check_over" 0.5s ease 1;\n'+'}\n'+'@-webkit-keyframes check_over_off{\n'+'0%{opacity:0.2;}\n'+'		100%{opacity:1;}\n'+'}\n'+'@-moz-keyframes check_over_off{\n'+'0%{-moz-opacity:0.2;}\n'+'		100%{-moz-opacity:1;}\n'+'}\n'+'@-ms-keyframes check_over_off{\n'+'0%{ filter: alpha(opacity=20);}\n'+'		100%{ filter: alpha(opacity=100);}\n'+'}\n'+'@-o-keyframes check_over_off{\n'+'0%{opacity:0.2;}\n'+'		100%{opacity:1;}\n'+'}\n'+'@keyframes check_over_off{\n'+'0%{opacity:0.2;}\n'+'		100%{opacity:1;}\n'+'}\n'+'@-webkit-keyframes check_over{\n'+'0%{opacity:1;}\n'+'		100%{opacity:0.2;}\n'+'}\n'+'@-moz-keyframes check_over{\n'+'0%{-moz-opacity:1;}\n'+'		100%{-moz-opacity:0.2;}\n'+'}\n'+'@-ms-keyframes check_over{\n'+'0%{filter: alpha(opacity=20);}\n'+'		100%{filter: alpha(opacity=20);}\n'+'}\n'+'@-o-keyframes check_over{\n'+'0%{opacity:1;}\n'+'		100%{opacity:0.2;}\n'+'}\n'+'@keyframes check_over{\n'+'0%{opacity:1;}\n'+'		100%{opacity:0.2;}\n'+'}';

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

