var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE html>\n'+'<html lang="es">\n'+'<head>\n'+'<meta charset="utf-8" />\n'+'<title>Monstruo Pared</title>\n'+'</head>\n'+'<body>\n'+'<div id="outer">\n'+'	<div class="eye">\n'+'		<div class="eyeball"></div>\n'+'	</div>\n'+'	<span class="mouth"></span>\n'+'</div>\n'+'</body>\n'+'</html>';

var st = '<style>';
var sf = '</style>';

var defaultcss = 'body {\n'+'background: url(http://mjplay-v.16mb.com/imagenes/fondos/fondoWw.png) center fixed;\n'+'background-color:#bbb;\n'+'text-align:center;\n'+'}\n'+'\n'+'#outer {\n'+'	margin:70px auto;\n'+'	width:200px;\n'+'	height:500px;\n'+'	text-align:center;\n'+'	position:relative;\n'+'}\n'+'\n'+'.eye {\n'+'	overflow:hidden;\n'+'	position:relative;\n'+'	width:200px;\n'+'	height:100px;\n'+'	margin:10px 0px;\n'+'	background-color:white;\n'+'	background-image:-webkit-radial-gradient(center, white, #ccc);\n'+'	background-image:-moz-radial-gradient(center, white, #ccc);\n'+'	background-image:-ms-radial-gradient(center, white, #ccc);\n'+'	background-image:-o-radial-gradient(center, white, #ccc);\n'+'	background-image:radial-gradient(center, white, #ccc);\n'+'	-webkit-box-shadow:inset 0px -4px 10px rgba(0,0,0,0.4), 0px 1px 7px white, 0px -1px 7px black;\n'+'	-moz-box-shadow:inset 0px -4px 10px rgba(0,0,0,0.4), 0px 1px 7px white, 0px -1px 7px black;\n'+'	box-shadow:inset 0px -4px 10px rgba(0,0,0,0.4), 0px 1px 7px white, 0px -1px 7px black;\n'+'	-webkit-border-radius:100%;\n'+'	-moz-border-radius:100%;\n'+'	border-radius:100%;\n'+'	-webkit-animation:eye 2s infinite alternate;\n'+'	-moz-animation:eye 2s infinite alternate;\n'+'	-ms-animation:eye 2s infinite alternate;\n'+'	-o-animation:eye 2s infinite alternate;\n'+'	animation:eye 2s infinite alternate;\n'+'}\n'+'\n'+'.eyeball {\n'+'	position:relative;\n'+'	width:20px;height:100%;\n'+'	background-color:black;\n'+'	background-image:-webkit-radial-gradient(center, circle, #555, #000);\n'+'	background-image:-moz-radial-gradient(center, circle, #555, #000);\n'+'	background-image:-ms-radial-gradient(center, circle, #555, #000);\n'+'	background-image:-o-radial-gradient(center, circle, #555, #000);\n'+'	background-image:radial-gradient(center, circle, #555, #000);\n'+'	margin:10px auto;\n'+'	-webkit-border-radius:100%;\n'+'	-moz-border-radius:100%;\n'+'	border-radius:100%;\n'+'	-webkit-box-shadow:0px 0px 10px red;\n'+'	-moz-box-shadow:0px 0px 10px red;\n'+'	box-shadow:0px 0px 10px red;\n'+'	-webkit-animation:\n'+'	  eye 3s infinite alternate,\n'+'	  move 7s infinite alternate,\n'+'	  scale 10s  cubic-bezier(1,0,0,1) infinite alternate;\n'+'	-moz-animation:\n'+'	  eye 3s infinite alternate,\n'+'	  move 7s infinite alternate,\n'+'	  scale 10s  cubic-bezier(1,0,0,1) infinite alternate;\n'+'	-ms-animation:\n'+'	  eye 3s infinite alternate,\n'+'	  move 7s infinite alternate,\n'+'	  scale 10s  cubic-bezier(1,0,0,1) infinite alternate;\n'+'	-o-animation:\n'+'	  eye 3s infinite alternate,\n'+'	  move 7s infinite alternate,\n'+'	  scale 10s  cubic-bezier(1,0,0,1) infinite alternate;\n'+'	animation:\n'+'	  eye 3s infinite alternate,\n'+'	  move 7s infinite alternate,\n'+'	  scale 10s  cubic-bezier(1,0,0,1) infinite alternate;\n'+'}\n'+'\n'+'.eye:after {\n'+'	content:"";\n'+'	position:absolute;\n'+'	top:10px;left:40%;\n'+'	background:rgba(255,255,255,0.7);\n'+'	width:10px;\n'+'	height:20px;\n'+'	margin:0px auto 0px;\n'+'	-webkit-border-radius:100%;\n'+'	-moz-border-radius:100%;\n'+'	border-radius:100%;\n'+'	-webkit-box-shadow:0px 0px 13px white;\n'+'	-moz-box-shadow:0px 0px 13px white;\n'+'	box-shadow:0px 0px 13px white;\n'+'}\n'+'\n'+'.mouth {\n'+'	display:block;\n'+'	width:30px;\n'+'	height:10px;\n'+'	border-top:2px solid black;\n'+'	border-radius:100px 100px 0px 0px;\n'+'	margin:30px auto;\n'+'	-webkit-animation:mouth 7s infinite;\n'+'	-moz-animation:mouth 7s infinite;\n'+'	-ms-animation:mouth 7s infinite;\n'+'	-o-animation:mouth 7s infinite;\n'+'	animation:mouth 7s infinite;\n'+'}\n'+'\n'+'\n'+'@-webkit-keyframes eye {\n'+'	0%              {top:50px;height:0px;}\n'+'	10%, 70%, 100%  {top:0px;height:100px;}\n'+'}\n'+'\n'+'@-webkit-keyframes move {\n'+'	25%             {left:20px;}\n'+'	72%             {margin-top:20px;}\n'+'	16%             {margin-top:-20px;}\n'+'	50%, 70%        {left:-20px;}\n'+'	0%, 80%, 100%   {left:0px;margin-top:0px;}\n'+'}\n'+'\n'+'@-webkit-keyframes scale {\n'+'	0%, 70%         {-webkit-transform:scale(0.5);-webkit-box-shadow:0px 0px 10px red;}\n'+'	100%            {-webkit-transform:scale(1);-webkit-box-shadow:0px 0px 30px red, 0px 0px 100px red;}\n'+'}\n'+'\n'+'@-webkit-keyframes mouth {\n'+'	0%, 20%, 76%    {border-top:10px solid black;width:20px;}\n'+'	10%, 50%, 100%  {border-top:2px solid black;width:30px;}\n'+'}\n'+'\n'+'\n'+'@-moz-keyframes eye {\n'+'	0%              {top:50px;height:0px;}\n'+'	10%, 70%, 100%  {top:0px;height:100px;}\n'+'}\n'+'\n'+'@-moz-keyframes move {\n'+'	25%             {left:20px;}\n'+'	72%             {margin-top:20px;}\n'+'	16%             {margin-top:-20px;}\n'+'	50%, 70%        {left:-20px;}\n'+'	0%, 80%, 100%   {left:0px;margin-top:0px;}\n'+'}\n'+'\n'+'@-moz-keyframes scale {\n'+'	0%, 70%         {-moz-transform:scale(0.5);-moz-box-shadow:0px 0px 10px red;}\n'+'	100%            {-moz-transform:scale(1);-moz-box-shadow:0px 0px 30px red, 0px 0px 100px red;}\n'+'}\n'+'\n'+'@-moz-keyframes mouth {\n'+'	0%, 20%, 76%    {border-top:10px solid black;width:20px;}\n'+'	10%, 50%, 100%  {border-top:2px solid black;width:30px;}\n'+'}\n'+'\n'+'\n'+'@-ms-keyframes eye {\n'+'	0%              {top:50px;height:0px;}\n'+'	10%, 70%, 100%  {top:0px;height:100px;}\n'+'}\n'+'\n'+'@-ms-keyframes move {\n'+'	25%             {left:20px;}\n'+'	72%             {margin-top:20px;}\n'+'	16%             {margin-top:-20px;}\n'+'	50%, 70%        {left:-20px;}\n'+'	0%, 80%, 100%   {left:0px;margin-top:0px;}\n'+'}\n'+'\n'+'@-ms-keyframes scale {\n'+'	0%, 70%         {-ms-transform:scale(0.5);box-shadow:0px 0px 10px red;}\n'+'	100%            {-ms-transform:scale(1);box-shadow:0px 0px 30px red, 0px 0px 100px red;}\n'+'}\n'+'\n'+'@-ms-keyframes mouth {\n'+'	0%, 20%, 76%    {border-top:10px solid black;width:20px;}\n'+'	10%, 50%, 100%  {border-top:2px solid black;width:30px;}\n'+'}\n'+'\n'+'\n'+'@-o-keyframes eye {\n'+'	0%              {top:50px;height:0px;}\n'+'	10%, 70%, 100%  {top:0px;height:100px;}\n'+'}\n'+'\n'+'@-o-keyframes move {\n'+'	25%             {left:20px;}\n'+'	72%             {margin-top:20px;}\n'+'	16%             {margin-top:-20px;}\n'+'	50%, 70%        {left:-20px;}\n'+'	0%, 80%, 100%   {left:0px;margin-top:0px;}\n'+'}\n'+'\n'+'@-o-keyframes scale {\n'+'	0%, 70%         {-o-transform:scale(0.5);box-shadow:0px 0px 10px red;}\n'+'	100%            {-o-transform:scale(1);box-shadow:0px 0px 30px red, 0px 0px 100px red;}\n'+'}\n'+'\n'+'@-o-keyframes mouth {\n'+'	0%, 20%, 76%    {border-top:10px solid black;width:20px;}\n'+'	10%, 50%, 100%  {border-top:2px solid black;width:30px;}\n'+'}\n'+'\n'+'\n'+'@keyframes eye {\n'+'	0%              {top:50px;height:0px;}\n'+'	10%, 70%, 100%  {top:0px;height:100px;}\n'+'}\n'+'\n'+'@keyframes move {\n'+'	25%             {left:20px;}\n'+'	72%             {margin-top:20px;}\n'+'	16%             {margin-top:-20px;}\n'+'	50%, 70%        {left:-20px;}\n'+'	0%, 80%, 100%   {left:0px;margin-top:0px;}\n'+'}\n'+'\n'+'@keyframes scale {\n'+'	0%, 70%         {transform:scale(0.5);box-shadow:0px 0px 10px red;}\n'+'	100%            {transform:scale(1);box-shadow:0px 0px 30px red, 0px 0px 100px red;}\n'+'}\n'+'\n'+'@keyframes mouth {\n'+'	0%, 20%, 76%    {border-top:10px solid black;width:20px;}\n'+'	10%, 50%, 100%  {border-top:2px solid black;width:30px;}\n'+'}';

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
