var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE html>\n'+'<html lang="es">\n'+'<head>\n'+'<meta charset="utf-8" />\n'+'<title>Progress Bar</title>\n'+'</head>\n'+'<body>\n'+'<div id="container">\n'+'<h1>Cargando...</h1>\n'+'<h2>MJ Play-V<h2/>\n'+'      <div id="back-loader">\n'+'	<div id="loader"></div>\n'+'     </div>\n'+'	<span class="dropdown"> <a href="" >Otra vez</a>  \n'+'        <div id="text">\n'+'          <p>click para Refresh</p>\n'+'        </div>\n'+'       </span>\n'+'</div>\n'+'</body>\n'+'</html>';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' body {\n'+'height: 100%;\n'+'margin: 0;\n'+'position: absolute;\n'+'width: 100%;\n'+'background: #FFF;\n'+' /*box-shadow*/\n'+' -webkit-box-shadow: inset 0px 0px 150px 0px rgba(0, 0, 0, 0.7);\n'+' -moz-box-shadow: inset 0px 0px 150px 0px rgba(0, 0, 0, 0.7);\n'+' box-shadow: inset 0px 0px 150px 0px rgba(0, 0, 0, 0.7);\n'+' color: #fff;\n'+' font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;\n'+' font-weight: 300;\n'+'}\n'+'span a {\n'+'    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;\n'+'    font-weight: 300;\n'+'    text-decoration: none;\n'+'    text-align: center;\n'+'    margin: auto;\n'+'    /*animation*/\n'+'    -webkit-animation: done 6s ease;\n'+'    -moz-animation: done 6s ease;\n'+'    -ms-animation: done 6s ease;\n'+'    -o-animation: done 6s ease;\n'+'    animation: done 6s ease;\n'+'    color: green;\n'+'    margin-bottom: 10px;\n'+'}\n'+'h2,H1 {\n'+'    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;\n'+'    font-weight: 300;\n'+'    text-align: center;\n'+'    text-stroke: 1px solid #fff;\n'+'    text-shadow: -1px -1px 2px #ccc;\n'+'    text-shadow: 0px 0px 10px lightgreen, 0px 0px 10px green, 0px 0px 10px lightgreen;\n'+'    color: green;\n'+'	-webkit-animation: color 6s ease;\n'+'	-moz-animation: color 6s ease;\n'+'   -ms-animation: color 6s ease;\n'+'  -o-animation: color 6s ease;\n'+'   animation: color 6s ease;\n'+'}\n'+'div {\n'+'    /*border-radius*/\n'+'    -webkit-border-radius: 20px 5px;\n'+'    -moz-border-radius: 20px 5px;\n'+'    border-radius: 20px 5px;\n'+'}\n'+'#container {\n'+'    margin-top: 100px;\n'+'    text-align: center;\n'+'}\n'+'#back-loader {\n'+'    width: 520px;\n'+'    height: 40px;\n'+'    margin: auto;\n'+'    background: rgba(0,0,0,0.6);\n'+'    /*animation*/\n'+'    -webkit-animation: extendBack 5s ease;\n'+'    -moz-animation: extendBack 5s ease;\n'+'    -ms-animation: extendBack 5s ease;\n'+'    -o-animation: extendBack 5s ease;\n'+'    animation: extendBack 5s ease;\n'+'    /*box-shadow*/\n'+'    -webkit-box-shadow: inset 0px 0px 15px 0px rgba(0, 0, 0, 0.7);\n'+'    -moz-box-shadow: inset 0px 0px 15px 0px rgba(0, 0, 0, 0.7);\n'+'    box-shadow: inset 0px 0px 15px 0px rgba(0, 0, 0, 0.7);\n'+'}\n'+'#loader {\n'+'    width: 500px;\n'+'    height: 20px;\n'+'    margin: 20px auto;\n'+'    position: relative;\n'+'    top: 10px;\n'+'    background: #0aab02;\n'+'	background-size: 50px 50px;\n'+'background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%,\n'+'                 transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%,\n'+'                transparent 75%, transparent);\n'+'background-image: -moz-linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%,\n'+'                 transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%,\n'+'                transparent 75%, transparent);\n'+'background-image: -ms-linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%,\n'+'                  transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%,\n'+'                  transparent 75%, transparent);\n'+'background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%,\n'+'                  transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%,\n'+'                  transparent 75%, transparent);\n'+'background-image: linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%,\n'+'                  transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%,\n'+'                  transparent 75%, transparent);\n'+'-pie-background: linear-gradient(45deg, rgba(255, 255, 255, .2) 25%, transparent 25%,\n'+'                 transparent 50%, rgba(255, 255, 255, .2) 50%, rgba(255, 255, 255, .2) 75%,\n'+'                 transparent 75%, transparent) 0 0 / 50px 50px #ac0;\n'+'    /*animation*/\n'+'    -webkit-animation: extend 7s ease;\n'+'    -moz-animation: extend 7s ease;\n'+'    -ms-animation: extend 7s ease;\n'+'    -o-animation: extend 7s ease;\n'+'    animation: extend 7s ease;\n'+'    border: 1px solid lightgreen;\n'+'    overflow: hidden;\n'+'    /*box-shadow*/\n'+'    -webkit-box-shadow: inset 0px 0px 15px 0px rgba(0, 0, 0, 0.7);\n'+'    -moz-box-shadow: inset 0px 0px 15px 0px rgba(0, 0, 0, 0.7);\n'+'    box-shadow: inset 0px 0px 15px 0px rgba(0, 0, 0, 0.7);\n'+'}\n'+'.dropdown div p:before {\n'+'    content: "";\n'+'    border-color: transparent green;\n'+'    border-style: dotted;\n'+'    /* "dotted" is better than"solid" for triangles, try to change "dotted" -> "solid" see the ugliest triangle ever !*/\n'+'    border-width: 0.35em 0 0.35em 0.45em;\n'+'    display: inline-block;\n'+'    height: 0;\n'+'    width: 0;\n'+'    top: -0.9em;\n'+'    : /;\n'+'    position: relative;\n'+'    left: 50px;\n'+'    /*transform*/\n'+'    -webkit-transform: rotate(-90deg);\n'+'    -moz-transform: rotate(-90deg);\n'+'    -ms-transform: rotate(-90deg);\n'+'    -o-transform: rotate(-90deg);\n'+'    transform: rotate(-90deg);\n'+'}\n'+'.dropdown div p {\n'+'    margin-top: 10px;\n'+'    color: #000;\n'+'    font-size: 15px;\n'+'    border-top: 1px solid green;\n'+'    width: 200px;\n'+'    margin: auto;\n'+'    /*animation*/\n'+'    -webkit-animation: done 6s ease;\n'+'    -moz-animation: done 6s ease;\n'+'    -ms-animation: done 6s ease;\n'+'    -o-animation: done 6s ease;\n'+'    animation: done 6s ease;\n'+'    font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;\n'+'    font-weight: 300;\n'+'	margin-bottom: 10px;\n'+'}\n'+'span.dropdown div {\n'+'    opacity: 0;\n'+'    height: 0px;\n'+'}\n'+'span.dropdown:hover div {\n'+'    opacity: 1;\n'+'    height: 20px;\n'+'}\n'+'#text { padding: 20px }\n'+'@-webkit-keyframes color { \n'+'    0% { color: #FFF }\n'+'    100% {\n'+'        color: green;\n'+'        text-shadow: -1px -1px 2px #ccc;\n'+'        text-shadow: 0px 0px 10px lightgreen, 0px 0px 10px green, 0px 0px 10px lightgreen;\n'+'    }\n'+'}\n'+'@-webkit-keyframes done { \n'+'    0% { visibility: hidden }\n'+'    97% { visibility: hidden }\n'+'    100% {\n'+'        visibility: visible;\n'+'        color: green;\n'+'    }\n'+'}\n'+'@-o-keyframes done { \n'+'    0% { visibility: hidden }\n'+'    97% { visibility: hidden }\n'+'    100% {\n'+'        visibility: visible;\n'+'        color: green;\n'+'    }\n'+'}\n'+'@-o-keyframes done { \n'+'    0% { visibility: hidden }\n'+'    97% { visibility: hidden }\n'+'    100% {\n'+'        visibility: visible;\n'+'        color: green;\n'+'    }\n'+'}\n'+'@-ms-keyframes done { \n'+'    0% { visibility: hidden }\n'+'    97% { visibility: hidden }\n'+'    100% {\n'+'        visibility: visible;\n'+'        color: green;\n'+'    }\n'+'}\n'+'@keyframes done { \n'+'    0% { visibility: hidden }\n'+'    97% { visibility: hidden }\n'+'    100% {\n'+'        visibility: visible;\n'+'        color: green;\n'+'    }\n'+'}\n'+'@-webkit-keyframes extend { \n'+'    0% { width: 0px }\n'+'    100% { width: 500px }\n'+'}\n'+'@-moz-keyframes extend { \n'+'    0% { width: 0px }\n'+'    100% { width: 500px }\n'+'}\n'+'@-o-keyframes extend { \n'+'    0% { width: 0px }\n'+'    100% { width: 500px }\n'+'}\n'+'@-ms-keyframes extend { \n'+'    0% { width: 0px }\n'+'    100% { width: 500px }\n'+'}\n'+'@keyframes extend { \n'+'    0% { width: 0px }\n'+'    100% { width: 500px }\n'+'}\n'+'@-webkit-keyframes extendBack { \n'+'    0% { width: 20px }\n'+'    100% { width: 500px }\n'+'}	\n'+'@-o-keyframes extendBack { \n'+'    0% { width: 20px }\n'+'    100% { width: 500px }\n'+'}	\n'+'@-moz-keyframes extendBack { \n'+'    0% { width: 20px }\n'+'    100% { width: 500px }\n'+'}\n'+'@-ms-keyframes extendBack { \n'+'    0% { width: 20px }\n'+'    100% { width: 500px }		\n'+'}	\n'+'@-keyframes extendBack { \n'+'    0% { width: 20px }\n'+'    100% { width: 500px }		\n'+'}';

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

