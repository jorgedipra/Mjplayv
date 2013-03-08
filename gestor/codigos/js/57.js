var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE html>\n'+'<html lang="es">\n'+'<head>\n'+'<meta charset="utf-8" />\n'+'<title>Ajedres</title>\n'+'</head>\n'+'<body>\n'+'<table id="chess_board" cellpadding="0" cellspacing="0">\n'+'	<tr>\n'+'		<td id="A8"><a href="#" class="rook black">&#9820;</a></td>\n'+'		<td id="B8"><a href="#" class="night black">&#9822;</a></td>\n'+'		<td id="C8"><a href="#" class="bishop black">&#9821;</a></td>\n'+'		<td id="D8"><a href="#" class="king black">&#9819;</a></td>\n'+'		<td id="E8"><a href="#" class="queen black">&#9818;</a></td>\n'+'		<td id="F8"><a href="#" class="bishop black">&#9821;</a></td>\n'+'		<td id="G8"><a href="#" class="night black">&#9822;</a></td>\n'+'		<td id="H8"><a href="#" class="rook black">&#9820;</a></td>\n'+'	</tr>\n'+'	<tr>\n'+'		<td id="A7"><a href="#" class="pawn black">&#9823;</a></td>\n'+'		<td id="B7"><a href="#" class="pawn black">&#9823;</a></td>\n'+'		<td id="C7"><a href="#" class="pawn black">&#9823;</a></td>\n'+'		<td id="D7"><a href="#" class="pawn black">&#9823;</a></td>\n'+'		<td id="E7"><a href="#" class="pawn black">&#9823;</a></td>\n'+'		<td id="F7"><a href="#" class="pawn black">&#9823;</a></td>\n'+'		<td id="G7"><a href="#" class="pawn black">&#9823;</a></td>\n'+'		<td id="H7"><a href="#" class="pawn black">&#9823;</a></td>\n'+'	</tr>\n'+'	<tr>\n'+'		<td id="A6"></td>\n'+'		<td id="B6"></td>\n'+'		<td id="C6"></td>\n'+'		<td id="D6"></td>\n'+'		<td id="E6"></td>\n'+'		<td id="F6"></td>\n'+'		<td id="G6"></td>\n'+'		<td id="H6"></td>\n'+'	</tr>\n'+'	<tr>\n'+'		<td id="A5"></td>\n'+'		<td id="B5"></td>\n'+'		<td id="C5"></td>\n'+'		<td id="D5"></td>\n'+'		<td id="E5"></td>\n'+'		<td id="F5"></td>\n'+'		<td id="G5"></td>\n'+'		<td id="H5"></td>\n'+'	</tr>\n'+'	<tr>\n'+'		<td id="A4"></td>\n'+'		<td id="B4"></td>\n'+'		<td id="C4"></td>\n'+'		<td id="D4"></td>\n'+'		<td id="E4"></td>\n'+'		<td id="F4"></td>\n'+'		<td id="G4"></td>\n'+'		<td id="H4"></td>\n'+'	</tr>\n'+'	<tr>\n'+'		<td id="A3"></td>\n'+'		<td id="B3"></td>\n'+'		<td id="C3"></td>\n'+'		<td id="D3"></td>\n'+'		<td id="E3"></td>\n'+'		<td id="F3"></td>\n'+'		<td id="G3"></td>\n'+'		<td id="H3"></td>\n'+'	</tr>\n'+'	<tr>\n'+'		<td id="A2"><a href="#" class="pawn white">&#9817;</a></td>\n'+'		<td id="B2"><a href="#" class="pawn white">&#9817;</a></td>\n'+'		<td id="C2"><a href="#" class="pawn white">&#9817;</a></td>\n'+'		<td id="D2"><a href="#" class="pawn white">&#9817;</a></td>\n'+'		<td id="E2"><a href="#" class="pawn white">&#9817;</a></td>\n'+'		<td id="F2"><a href="#" class="pawn white">&#9817;</a></td>\n'+'		<td id="G2"><a href="#" class="pawn white">&#9817;</a></td>\n'+'		<td id="H2"><a href="#" class="pawn white">&#9817;</a></td>\n'+'	</tr>\n'+'	<tr>\n'+'		<td id="A1"><a href="#" class="rook white">&#9814;</a></td>\n'+'		<td id="B1"><a href="#" class="night white">&#9816;</a></td>\n'+'		<td id="C1"><a href="#" class="bishop white">&#9815;</a></td>\n'+'		<td id="D1"><a href="#" class="king white">&#9813;</a></td>\n'+'		<td id="E1"><a href="#" class="wife white">&#9812;</a></td>\n'+'		<td id="F1"><a href="#" class="bishop white">&#9815;</a></td>\n'+'		<td id="G1"><a href="#" class="night white">&#9816;</a></td>\n'+'		<td id="H1"><a href="#" class="rook white">&#9814;</a></td>\n'+'	</tr>\n'+'</table>\n'+'</body>\n'+'</html>';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' body{\n'+' background: url(/imagenes/fondos/fondoB.png) center fixed;\n'+'}\n'+'html{\n'+'color:#fff;\n'+'margin: 0 auto;\n'+'width:670px;\n'+'}\n'+'a {\n'+'	color:#000;\n'+'	display:block;\n'+'	font-size:60px;\n'+'	height:80px;\n'+'	position:relative;\n'+'	text-decoration:none;\n'+'	text-shadow:0 1px #fff;\n'+'	width:80px;\n'+'}\n'+'#chess_board { border:5px solid #333; }\n'+'#chess_board td {\n'+'	background:#fff;\n'+'	background:-moz-linear-gradient(top, #fff, #eee);\n'+'	background:-webkit-gradient(linear,0 0, 0 100%, from(#fff), to(#eee));\n'+'	box-shadow:inset 0 0 0 1px #fff;\n'+'	-moz-box-shadow:inset 0 0 0 1px #fff;\n'+'	-webkit-box-shadow:inset 0 0 0 1px #fff;\n'+'	height:80px;\n'+'	text-align:center;\n'+'	vertical-align:middle;\n'+'	width:80px;\n'+'}\n'+'#chess_board tr:nth-child(odd) td:nth-child(even),\n'+'#chess_board tr:nth-child(even) td:nth-child(odd) {\n'+'	background:#ccc;\n'+'	background:-moz-linear-gradient(top, #ccc, #eee);\n'+'	background:-webkit-gradient(linear,0 0, 0 100%, from(#ccc), to(#eee));\n'+'	box-shadow:inset 0 0 10px rgba(0,0,0,.4);\n'+'	-moz-box-shadow:inset 0 0 10px rgba(0,0,0,.4);\n'+'	-webkit-box-shadow:inset 0 0 10px rgba(0,0,0,.4);\n'+'}';

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

