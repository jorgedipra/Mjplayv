var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE html>\n'+'<html lang="es">\n'+'<head>\n'+'<meta charset="utf-8" />\n'+'<title>TECLADO</title>\n'+'</head>\n'+'<body>\n'+'<div id="keyboard">\n'+'    	<ul class="cf">\n'+'        	<li><a href="#" class="key c27 fn"><span id="esc">esc</span></a></li>\n'+'        	<li><a href="#" class="key c112 fn"><span>F1</span></a></li>\n'+'        	<li><a href="#" class="key c113 fn"><span>F2</span></a></li>\n'+'        	<li><a href="#" class="key c114 fn"><span>F3</span></a></li>\n'+'        	<li><a href="#" class="key c115 fn"><span>F4</span></a></li>\n'+'        	<li><a href="#" class="key c116 fn"><span>F5</span></a></li>\n'+'        	<li><a href="#" class="key c117 fn"><span>F6</span></a></li>\n'+'        	<li><a href="#" class="key c118 fn"><span>F7</span></a></li>\n'+'        	<li><a href="#" class="key c119 fn"><span>F8</span></a></li>\n'+'        	<li><a href="#" class="key c120 fn"><span>F9</span></a></li>\n'+'        	<li><a href="#" class="key c121 fn"><span>F10</span></a></li>\n'+'        	<li><a href="#" class="key c122 fn"><span>F11</span></a></li>\n'+'        	<li><a href="#" class="key c123 fn"><span>F12</span></a></li>\n'+'        	<li><a href="#" class="key fn"><span>Eject</span></a></li>\n'+'        </ul>\n'+'    	<ul class="cf" id="numbers">\n'+'	    	<li><a href="#" class="key c192"><b>~</b><span>`</span></a></li>\n'+'	    	<li><a href="#" class="key c49"><b>!</b><span>1</span></a></li>\n'+'	    	<li><a href="#" class="key c50"><b>@</b><span>2</span></a></li>\n'+'	    	<li><a href="#" class="key c51"><b>#</b><span>3</span></a></li>\n'+'	    	<li><a href="#" class="key c52"><b>$</b><span>4</span></a></li>\n'+'	    	<li><a href="#" class="key c53"><b>%</b><span>5</span></a></li>\n'+'	    	<li><a href="#" class="key c54"><b>^</b><span>6</span></a></li>\n'+'	    	<li><a href="#" class="key c55"><b>&amp;</b><span>7</span></a></li>\n'+'	    	<li><a href="#" class="key c56"><b>*</b><span>8</span></a></li>\n'+'	    	<li><a href="#" class="key c57"><b>(</b><span>9</span></a></li>\n'+'	    	<li><a href="#" class="key c48"><b>)</b><span>0</span></a></li>\n'+'	    	<li><a href="#" class="key c189 alt"><b>_</b><span>-</span></a></li>\n'+'	    	<li><a href="#" class="key c187"><b>+</b><span>=</span></a></li>\n'+'	    	<li><a href="#" class="key c46" id="delete"><span>Delete</span></a></li>\n'+'        </ul>\n'+'    	<ul class="cf" id="qwerty">\n'+'	    	<li><a href="#" class="key c9" id="tab"><span>tab</span></a></li>\n'+'	    	<li><a href="#" class="key c81"><span>q</span></a></li>\n'+'	    	<li><a href="#" class="key c87"><span>w</span></a></li>\n'+'	    	<li><a href="#" class="key c69"><span>e</span></a></li>\n'+'	    	<li><a href="#" class="key c82"><span>r</span></a></li>\n'+'	    	<li><a href="#" class="key c84"><span>t</span></a></li>\n'+'	    	<li><a href="#" class="key c89"><span>y</span></a></li>\n'+'	    	<li><a href="#" class="key c85"><span>u</span></a></li>\n'+'	    	<li><a href="#" class="key c73"><span>i</span></a></li>\n'+'	    	<li><a href="#" class="key c79"><span>o</span></a></li>\n'+'	    	<li><a href="#" class="key c80"><span>p</span></a></li>\n'+'	    	<li><a href="#" class="key c219 alt"><b>{</b><span>[</span></a></li>\n'+'	    	<li><a href="#" class="key c221 alt"><b>}</b><span>]</span></a></li>\n'+'	    	<li><a href="#" class="key c220 alt"><b>|</b><span>\</span></a></li>\n'+'        </ul>\n'+'        <ul class="cf" id="asdfg">\n'+'	    	<li><a href="#" class="key c20 alt" id="caps"><b></b><span>caps lock</span></a></li>\n'+'	    	<li><a href="#" class="key c65"><span>a</span></a></li>\n'+'	    	<li><a href="#" class="key c83"><span>s</span></a></li>\n'+'	    	<li><a href="#" class="key c68"><span>d</span></a></li>\n'+'	    	<li><a href="#" class="key c70"><span>f</span></a></li>\n'+'	    	<li><a href="#" class="key c71"><span>g</span></a></li>\n'+'	    	<li><a href="#" class="key c72"><span>h</span></a></li>\n'+'	    	<li><a href="#" class="key c74"><span>j</span></a></li>\n'+'	    	<li><a href="#" class="key c75"><span>k</span></a></li>\n'+'	    	<li><a href="#" class="key c76"><span>l</span></a></li>\n'+'	    	<li><a href="#" class="key c186 alt"><b>:</b><span>;</span></a></li>\n'+'	    	<li><a href="#" class="key c222 alt"><b>"</b><span>&#039;</span></a></li>\n'+'	    	<li><a href="#" class="key c13 alt" id="enter"><span>return</span></a></li>\n'+'        </ul>\n'+'        <ul class="cf" id="zxcvb">\n'+'	    	<li><a href="#" class="key c16 shiftleft"><span>Shift</span></a></li>\n'+'	    	<li><a href="#" class="key c90"><span>z</span></a></li>\n'+'	    	<li><a href="#" class="key c88"><span>x</span></a></li>\n'+'	    	<li><a href="#" class="key c67"><span>c</span></a></li>\n'+'	    	<li><a href="#" class="key c86"><span>v</span></a></li>\n'+'	    	<li><a href="#" class="key c66"><span>b</span></a></li>\n'+'	    	<li><a href="#" class="key c78"><span>n</span></a></li>\n'+'	    	<li><a href="#" class="key c77"><span>m</span></a></li>\n'+'	    	<li><a href="#" class="key c188 alt"><b>&lt;</b><span>,</span></a></li>\n'+'	    	<li><a href="#" class="key c190 alt"><b>&gt;</b><span>.</span></a></li>\n'+'	    	<li><a href="#" class="key c191 alt"><b>?</b><span>/</span></a></li>\n'+'	    	<li><a href="#" class="key c16 shiftright"><span>Shift</span></a></li>\n'+'        </ul>\n'+'		<ul class="cf" id="bottomrow">\n'+'	    	<li><a href="#" class="key" id="fn"><span>fn</span></a></li>\n'+'	    	<li><a href="#" class="key c17" id="control"><span>control</span></a></li>\n'+'	    	<li><a href="#" class="key option" id="optionleft"><span>option</span></a></li>\n'+'	    	<li><a href="#" class="key command" id="commandleft"><span>command</span></a></li>\n'+'	    	<li><a href="#" class="key c32" id="spacebar"></a></li>\n'+'	    	<li><a href="#" class="key command" id="commandright"><span>command</span></a></li>\n'+'	    	<li><a href="#" class="key option" id="optionright"><span>option</span></a></li>\n'+'            <ol class="cf">\n'+'            	<li><a href="#" class="key c37" id="left"><span></span></a></li>\n'+'                <li>\n'+'                	<a href="#" class="key c38" id="up"><span></span></a>\n'+'                	<a href="#" class="key c40" id="down"><span></span></a>\n'+'                </li>\n'+'            	<li><a href="#" class="key c39" id="right"><span></span></a></li>\n'+'            </ol>\n'+'        </ul>\n'+'    </div>\n'+'</body>\n'+'</html>';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' body {\n'+'background: url(http://mjplay-v.16mb.com/imagenes/fondos/pattern_40.gif) center fixed;;\n'+'}\n'+'\n'+'#keyboard {\n'+'	margin: 15px auto 0;\n'+'	width: 794px;\n'+'	height: 315px;\n'+'	background:	#d5d9dc  url("keyboard-background.jpg") repeat-x;\n'+'	-moz-border-radius-topleft: 7px 21px;\n'+'	-moz-border-radius-topright: 7px 21px;\n'+'	-moz-border-radius-bottomright: 10px;\n'+'	-moz-border-radius-bottomleft: 10px;\n'+'	border-top-left-radius: 7px 21px;\n'+'	border-top-right-radius: 7px 21px;\n'+'	border-bottom-right-radius: 10px;\n'+'	border-bottom-left-radius: 10px;\n'+'	padding: 50px 0 0 10px;\n'+'	-webkit-box-shadow:  \n'+'		inset 0 0 8px #bbb,\n'+'		0 1px 0 #aaa,\n'+'		0 4px 0 #bbb,\n'+'		0 10px 30px #ddd;\n'+'	-moz-box-shadow:  \n'+'		inset 0 0 8px #bbb,\n'+'		0 1px 0 #aaa,\n'+'		0 4px 0 #bbb,\n'+'		0 10px 30px #ddd;\n'+'	box-shadow:  \n'+'		inset 0 0 8px #bbb,\n'+'		0 1px 0 #aaa,\n'+'		0 4px 0 #bbb,\n'+'		0 10px 30px #ddd;}\n'+'\n'+'ul {list-style-type: none; width: 784px; margin: 0 auto;}\n'+'li {float: left;}\n'+'\n'+'\n'+'.key{\n'+'	display: block;\n'+'	color: #aaa;\n'+'	font: bold 9pt arial;\n'+'	text-decoration: none;\n'+'	text-align: center;\n'+'	width: 44px;\n'+'	height: 41px;\n'+'	margin: 5px;\n'+'	background: #eff0f2;\n'+'	-moz-border-radius: 4px;\n'+'	border-radius: 4px;\n'+'	border-top: 1px solid #f5f5f5;\n'+'	-webkit-box-shadow: \n'+'		inset 0 0 25px #e8e8e8,\n'+'		0 1px 0 #c3c3c3,\n'+'		0 2px 0 #c9c9c9,\n'+'		0 2px 3px #333;\n'+'	-moz-box-shadow: \n'+'		inset 0 0 25px #e8e8e8,\n'+'		0 1px 0 #c3c3c3,\n'+'		0 2px 0 #c9c9c9,\n'+'		0 2px 3px #333;\n'+'	box-shadow: \n'+'		inset 0 0 25px #e8e8e8,\n'+'		0 1px 0 #c3c3c3,\n'+'		0 2px 0 #c9c9c9,\n'+'		0 2px 3px #333;\n'+'	text-shadow: 0px 1px 0px #f5f5f5;}\n'+'\n'+'.key:active, .keydown {\n'+'	color: #888;\n'+'	background: #ebeced;\n'+'	margin: 7px 5px 3px;\n'+'	-webkit-box-shadow:\n'+'		inset 0 0 25px #ddd,\n'+'		0 0 3px #333;\n'+'	-moz-box-shadow: \n'+'		inset 0 0 25px #ddd,\n'+'		0 0 3px #333;\n'+'	box-shadow: \n'+'		inset 0 0 25px #ddd,\n'+'		0 0 3px #333;\n'+'	border-top: 1px solid #eee;}\n'+'	\n'+'.fn span {\n'+'	display: block;\n'+'	margin: 14px 5px 0 0;\n'+'	text-align: right;\n'+'	font: bold 6pt arial;\n'+'	text-transform: uppercase;}\n'+'#esc {\n'+'	margin: 6px 15px 0 0;\n'+'	font-size: 7.5pt;\n'+'	text-transform: lowercase;}\n'+'\n'+'\n'+'#numbers li a span {\n'+'	display: block;}\n'+'	\n'+'#numbers li a b {\n'+'	margin: 3px 0 3px;\n'+'	display: block;}\n'+'\n'+'#numbers li .alt b {display: block;margin: 0 0 3px;}\n'+'\n'+'#numbers li #delete span {\n'+'	text-align: right;\n'+'	margin: 23px 10px 0 0;\n'+'	font-size: 7.5pt;\n'+'	text-transform: lowercase;}\n'+'	\n'+'#qwerty li a span {\n'+'	display: block;\n'+'	margin: 13px 0 0;\n'+'	text-transform: uppercase;}\n'+'	\n'+'#qwerty li #tab span {\n'+'	text-align: left;\n'+'	margin: 23px 0 0 10px;\n'+'	font-size: 7.5pt;\n'+'	text-transform: lowercase;}	\n'+'\n'+'#qwerty li .alt b {display: block; margin: 3px 0 0;}\n'+'#qwerty li .alt span {margin: 2px 0 0;}\n'+'\n'+'\n'+'#asdfg li a span {\n'+'	display: block;\n'+'	margin: 13px 0 0;\n'+'	text-transform: uppercase;}\n'+'\n'+'#asdfg li .alt span {margin: 0; text-transform: lowercase;}\n'+'#asdfg li .alt b {display: block; margin: 3px 0 0;}\n'+'#asdfg li #caps b {\n'+'	display: block;\n'+'	background: #999;\n'+'	width: 4px;\n'+'	height: 4px;\n'+'	border-radius: 10px;\n'+'	margin: 9px 0 0 10px;\n'+'	-webkit-box-shadow: inset 0 1px 0 #666;\n'+'	-moz-box-shadow:inset 0 1px 0 #666;\n'+'	box-shadow:inset 0 1px 0 #666;}\n'+'#asdfg li #caps span {\n'+'	text-align: left;\n'+'	margin: 10px 0 0 10px;\n'+'	font-size: 7.5pt;}\n'+'#asdfg li #enter span {\n'+'	text-align: right;\n'+'	margin: 23px 10px 0 0;\n'+'	font-size: 7.5pt;}\n'+'\n'+'\n'+'#zxcvb li a span {\n'+'	display: block;\n'+'	margin: 13px 0 0;\n'+'	text-transform: uppercase;}\n'+'#zxcvb li .shiftleft span {\n'+'	text-align: left;\n'+'	margin: 23px 0 0 10px;\n'+'	font-size: 7.5pt;\n'+'	text-transform: lowercase;}\n'+'#zxcvb li .shiftright span {\n'+'	text-align: right;\n'+'	margin: 23px 10px 0 0;\n'+'	font-size: 7.5pt;\n'+'	text-transform: lowercase;}\n'+'#zxcvb li .alt b {display: block;margin: 4px 0 0;}\n'+'#zxcvb li .alt span {margin: 0;}\n'+'\n'+'	\n'+'#bottomrow li #fn span, #bottomrow li #control span, #bottomrow li #optionleft span, #bottomrow li #commandleft span {\n'+'	display: block;\n'+'	text-align: left;\n'+'	margin: 31px 0 0 8px;\n'+'	font-size: 7.5pt;\n'+'	text-transform: lowercase;}\n'+'\n'+'#bottomrow li #optionright span, #bottomrow li #commandright span {\n'+'	display: block;\n'+'	text-align: right;\n'+'	margin: 31px 8px 0 0;\n'+'	font-size: 7.5pt;\n'+'	text-transform: lowercase;}\n'+'\n'+'#bottomrow ol li #left span, #bottomrow ol li #right span, #bottomrow ol li #up span, #bottomrow ol li #down span {\n'+'	display: block;\n'+'	margin: 9px 0 0;}\n'+'\n'+'.fn {height: 26px; width: 46px;}\n'+'#delete {width: 72px;}\n'+'#tab {width: 72px;}\n'+'#caps {width: 85px;}\n'+'#enter {width: 85px;}\n'+'.shiftleft, .shiftright {width: 112px;}\n'+'#fn, #control, .option, .command, #spacebar {height: 49px;}\n'+'\n'+'#control {width: 56px;}\n'+'.option {width: 46px;}\n'+'.command {width: 67px;}\n'+'#spacebar {width: 226px;}\n'+'\n'+'#left img, #up img, #down img, #right img {border: none;}\n'+'ul ol {list-style-type: none;}\n'+'#down {height: 23px;}\n'+'#up, #left, #right {height: 24px;}\n'+'#left, #right {margin: 30px 5px 5px;}\n'+'#left:active, #right:active {margin: 32px 5px 3px;}\n'+'#up {margin: 5px 5px 1px; border-bottom-right-radius: 0px; border-bottom-left-radius: 0px;}\n'+'#up:active {margin: 8px 5px -2px;}\n'+'#down {margin: 0 5px 5px; border-top-left-radius: 0px; border-top-right-radius: 0px;}\n'+'#down:Active {margin: 3px 5px 4px;}\n'+'#main {\n'+'	width: 700px;\n'+'	padding: 20px 50px;\n'+'	margin: 0 auto 50px;\n'+'	background: #fff;\n'+'	border-radius: 5px;\n'+'	-webkit-box-shadow: 0 1px 2px #aaa;}\n'+'		\n'+'h1 {\n'+'	color: #888;\n'+'	text-align: center;\n'+'	font: bold 25pt/25pt arial;\n'+'	margin: 30px 0 60px;}\n'+'	\n'+'h2 {\n'+'	color: #666;\n'+'	font: 13pt/0pt arial;}\n'+'	\n'+'p {\n'+'	color: #999;\n'+'	font: 9pt/17pt arial;\n'+'	margin: 0 0 50px;}\n'+'	\n'+'small {\n'+'	font: italic 8pt/12pt arial;\n'+'	color: #aaa;\n'+'	padding: 0 130px 0 0;\n'+'	display: block;}\n'+'	\n'+'cite {\n'+'	display: block;\n'+'	padding: 0 0 30px;\n'+'	margin: 0 auto;\n'+'	text-align: center;\n'+'	color: #999;\n'+'	font: italic bold 8pt arial;}\n'+'\n'+'ul, ol {padding: 0px; margin: 0;}\n'+'	\n'+'/* Micro Clearfix by Nicolas Gallagher - http://nicolasgallagher.com/micro-clearfix-hack */\n'+'        /* For modern browsers */\n'+'        .cf:before, .cf:after {content:""; display:table;}\n'+'        .cf:after {clear:both;}\n'+'\n'+'        /* For IE 6/7 (trigger hasLayout) */\n'+'        .cf {zoom:1;}';

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
