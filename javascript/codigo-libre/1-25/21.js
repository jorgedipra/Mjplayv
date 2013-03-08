var editboxHTML = 
'<html class="expand close">' +
'<head>' +
'<style type="text/css">' +
'.expand { width: 100%; height: 100%; }' +
'.close { border: none; margin: 0px; padding: 0px; }' +
'html,body { overflow: hidden; }' +
'<\/style>' +
'<\/head>' +
'<body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();">' +
'<form class="expand close" name="f">' +
'<textarea class="expand close" style=" background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false">' +
'<\/textarea>' +
'<\/form>' +
'<\/body>' +
'<\/html>';


var editboxCSS = 
'<html class="expand close">' +
'<head>' +
'<style type="text/css">' +
'.expand { width: 100%; height: 100%; }' +
'.close { border: none; margin: 0px; padding: 0px; }' +
'html,body { overflow: hidden; }' +
'<\/style>' +
'<\/head>' +
'<body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();">' +
'<form class="expand close" name="f">' +
'<textarea class="expand close" style=" background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false">' +
'<\/textarea>' +
'<\/form>' +
'<\/body>' +
'<\/html>';

var editboxJAS = 
'<html class="expand close">' +
'<head>' +
'<style type="text/css">' +
'.expand { width: 100%; height: 100%; }' +
'.close { border: none; margin: 0px; padding: 0px; }' +
'html,body { overflow: hidden; }' +
'<\/style>' +
'<\/head>' +
'<body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();">' +
'<form class="expand close" name="f">' +
'<textarea class="expand close" style=" background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false">' +
'<\/textarea>' +
'<\/form>' +
'<\/body>' +
'<\/html>';

var extraStuff = '<script>var switchTo5x=true;</script>'+
'<script src="http://w.sharethis.com/button/buttons.js"></script>'+
'<script>stLight.options({publisher: "98a0c813-783d-461a-a536-cc46a03f65ee"}); </script>'+
'<article class="cuerpo">'+
'<ul>'+
'<li class="unico" id="MJ"><a href="/" target="_blank">IR&nbsp;A&nbsp;MJPLay&nbsp;V</a></li>'+
'<li class="unico" id="edit"><a href="http://youtu.be/hxWfkKK7kGw" target="_blank">COMO&nbsp;MANEJA&nbsp;EL&nbsp;EDITOR</a></li>'+
'<li class="unico" id="her"><a href="#" target="_blank">MANEJO&nbsp;DE&nbsp;HERRAMIENTAS</a></li>'+
'<li class="unico" id="es"><a href="/Escritorio/iniciarsecion.html" target="_blank">IR&nbsp;A&nbsp;Escritorio</a></li>'+
'<li class="unico" id="cod"><a href="/codigolibre/" target="_blank">Codigo&nbsp;Libre</a></li>'+
'<li class="unico" id="tec"><a href="/Tecnologia/" target="_blank">noticias&nbsp;de&nbsp;tecnologia</a></li>'+
'<li class="unico" id="com"><a>COMPARME</a></li>'+
'<div id="comp">'+
'<li id="vv" class="com"><a target="_blank" href="http://www.facebook.com/sharer.php?u=http://mjplay-v.16mb.com/recursos/editor-all.html"><span class="st_facebook_hcount" displayText="Facebook"></span></a></li>'+
'<li id="vv" class="com"><a href="#" ><span class="st_twitter_hcount" displayText="Tweet"></span></a></li>'+
'<li id="vv" class="com"><a href="#" ><span class="st_googleplus_hcount" displayText="Google +"></span></a></li>'+
'</div>'+
'<li class="unico" id="comm"><a>ME&nbsp;GUSTA</a></li>'+
'<div id="comp1">'+
'<li id="vv" class="com"><a href="#" ><span class="st_fblike_hcount" displayText="Facebook Like"></span></a></li>'+
'<li id="vv" class="com"><a href="#" ><span class="st_plusone_hcount" displayText="Google +1"></span></a></li>'+
'</div>'+  
'<li class="unico" id="coms"><a>Suscribite</a></li>'+
'<div id="comp2">'+
'<li id="vv" class="com"><a href="https://www.facebook.com/MJPlayV" target="_blank"><img src="/recursos/img/facebook.png" alt="face"></span></a></li>'+
'<li id="vv" class="com"><a href="https://twitter.com/mjplayv" target="_blank"><img src="/recursos/img/twitter.png" alt="twitter"></a></li>'+
'<li id="vv" class="com"><a href="http://www.youtube.com/subscription_center?add_user=MJVIDEOPLAY" target="_blank"><img src="/recursos/img/youtube.png" alt="twitter"></a></li>'+
'</div>'+
'</ul>'+
'</article>'+
'<style>'+
'@import url(http://fonts.googleapis.com/css?family=Life+Savers);'+
'.cuerpo{background:#000; width: 350px; text-align: center;position: absolute;right: 10px;  top: 5px;font-family: "Life Savers", cursive;}ul li#vv{display:inline-block;font-size:16px;height:50px;line-height:50px;padding:10px 0;vertical-align:top;width:25%;}ul li.unico{display:block;font-size:16px;height:50px;line-height:50px;padding:10px 0;vertical-align:top;width:25%;}ul li img{height:50px;}ul li a{color:#DDD;display:block;font-weight:bold;text-align:center;text-transform:uppercase;text-decoration:none;}#tec a,#cod a,#es a,#her a,#edit a,#MJ a{border:1px solid #000;background:#000;background:-webkit-gradient(linear,left top,left bottom,color-stop(#4a464a,0.5),color-stop(#000,1));background:-webkit-linear-gradient(top, #4a464a 50%, #000 100%);background:-moz-linear-gradient(top, #4a464a 50%, #000 100%);background:-o-linear-gradient(top, #4a464a 50%, #000 100%);background:linear-gradient(top, #4a464a 50%, #000 100%);background:-webkit-linear-gradient(top,#4a464a 50%, #000 100%);background:-moz-linear-gradient(top,#4a464a 50%, #000 100%);background:-o-linear-gradient(top,#4a464a 50%, #000 100%);background:linear-gradient(top,#4a464a 50%, #000 100%);cursor:pointer;font-size:21px;display:inline-block;position:relative;z-index:0;-webkit-box-shadow:0 3px 3px rgba(0, 0, 0, 0.4), inset 0 1px 0 #FFF;-moz-box-shadow:0 3px 3px rgba(0, 0, 0, 0.4), inset 0 1px 0 #FFF;box-shadow:0 3px 3px rgba(0, 0, 0, 0.4), inset 0 1px 0 #FFF;text-shadow:0 1px #FFF;color:#4aed05;}#MJ a{border-top-left-radius:6px;border-top-right-radius:6px;-webkit-border-top-left-radius:20px;-webkit-border-top-right-radius:20px;-moz-border-radius-topleft:20px;-moz-border-radius-topright:20px;border-top-left-radius:20px;border-top-right-radius:20px;margin:-33px;padding:0 85px;}#tec a,#cod a,#es a,#her a,#edit a{-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;}#edit a{margin:-50px -34px;padding:0 20px;}#her a{margin:-68px -34px;padding:0 10px;}#es a{margin:-85px -34px;padding:0 70px;}#cod a{margin:-100px -34px;padding:0 90px;}#tec a{margin:-120px -34px;padding:0 17px;}#coms a,#comm a,#com a{text-decoration:none;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;-webkit-box-shadow:0px 1px 3px #666666;-moz-box-shadow:0px 1px 3px #666666;box-shadow:0px 1px 3px #666666;text-shadow:1px 1px 3px #666666;font-size:21px;display:inline-block;position:relative;z-index:0;}#com a{color:#ffffff;background:-webkit-gradient(linear, 0 0, 0 100%, from(#ffffff), to(#0542fa));background:-webkit-gradient(linear,left top,left bottom,from(#ffffff),to(#0542fa));background:-webkit-linear-gradient(top, #ffffff, #0542fa);background:-moz-linear-gradient(top, #ffffff, #0542fa);background:-o-linear-gradient(top, #ffffff, #0542fa);background:linear-gradient(top, #ffffff, #0542fa);border:solid #0542fa 8px;margin:-135px -34px;padding:0 95px;}#comm a{color:#ffffff;border:solid #f5390a 8px;background:-webkit-gradient(linear, 0 0, 0 100%, from(#f5bd31), to(#f5390a));background:-webkit-gradient(linear,left top,left bottom,from(#f5bd31),to(#f5390a));background:-webkit-linear-gradient(top, #f5bd31, #f5390a);background:-moz-linear-gradient(top, #f5bd31, #f5390a);background:-o-linear-gradient(top, #f5bd31, #f5390a);background:linear-gradient(top, #f5bd31, #f5390a);margin:110px -30px;padding:0 100px;}#coms a{color:#ffffff;border:solid #4aa138 8px;background:-webkit-gradient(linear, 0 0, 0 100%, from(#31f586), to(#4aa138));background:-webkit-gradient(linear,left top,left bottom,from(#31f586),to(#4aa138));background:-webkit-linear-gradient(top, #31f586, #4aa138);background:-moz-linear-gradient(top, #31f586, #4aa138);background:-o-linear-gradient(top, #31f586, #4aa138);background:linear-gradient(top, #31f586, #4aa138);margin:-145px -30px;padding:0 91px;}.com a{text-decoration:none;-webkit-border-radius:6px;-moz-border-radius:6px;border-radius:6px;-webkit-box-shadow:0px 1px 3px #666666;-moz-box-shadow:0px 1px 3px #666666;box-shadow:0px 1px 3px #666666;text-shadow:1px 1px 3px #666666;font-size:21px;display:inline-block;position:relative;z-index:0;}#comp2, #comp1,#comp{background:#fff;width:100%;}#comp{margin:-130px -30px;padding:0 10px;}#comp1{margin:115px -30px;padding:0 10px;}#comp2{margin:-140px -30px;padding:0 10px;}#tec a:hover,#cod a:hover,#es a:hover,#her a:HOVER,#edit a:hover,#MJ a:hover{border:1px solid #000;background:#4aed05;background:-webkit-gradient(linear,left top,left bottom,color-stop(#0e8f0e,0.5),color-stop(#4aed05,1));background:-webkit-linear-gradient(top, #0e8f0e 50%, #4aed05 100%);background:-moz-linear-gradient(top, #0e8f0e 50%, #4aed05 100%);background:-o-linear-gradient(top, #0e8f0e 50%, #4aed05 100%);background:linear-gradient(top, #0e8f0e 50%, #4aed05 100%);background:-webkit-linear-gradient(top,#0e8f0e 50%, #4aed05 100%);background:-moz-linear-gradient(top,#0e8f0e 50%, #4aed05 100%);background:-o-linear-gradient(top,#0e8f0e 50%, #4aed05 100%);background:linear-gradient(top,#0e8f0e 50%, #4aed05 100%);-webkit-box-shadow:0 3px 3px rgba(0, 0, 0, 0.4), inset 0 1px 0 #FFF;-moz-box-shadow:0 3px 3px rgba(0, 0, 0, 0.4), inset 0 1px 0 #FFF;box-shadow:0 3px 3px rgba(0, 0, 0, 0.4), inset 0 1px 0 #FFF;text-shadow:0 1px #FFF;color:#000;z-index:2;border-bottom-color:#FFF;}'+
'</style>';


var defaultStuff = 	'<div class="msg">Loading of mjplay-v@gmail.com...</div>\n'+
'<div class="loader_box">\n'+
'	<div class="loader"></div>\n'+
'</div>';


var st = '<style>';
var sf = '</style>';

var defaultcss = 'body {\n'+
   ' font-family: "Helvetica", "Helvetica Neue", sans-serif;\n'+
   ' background: #F5F5F5;\n'+
   ' font-size: 16px;\n'+
'}\n'+
'.msg {\n'+
'    margin-top: 50px;\n'+
'    text-align: center;\n'+
'    font-weight: bold;\n'+
'	margin-bottom:2px;\n'+
'}\n'+
'.loader_box {\n'+
 '   text-align: center;\n'+
 '   width: 320px;\n'+
 '   border: 1px solid #999;\n'+
 '   padding: 1px;\n'+
 '   height: 8px;\n'+
 '   margin-right: auto;\n'+
 '   margin-left: auto;\n'+
'}\n'+
'.loader {\n'+
'    width: 0;\n'+
'    height: 100%;\n'+
'    background-color: #6188F5;\n'+
'    background-repeat: repeat-x;\n'+
'    background-position: 0 0;\n'+
'    /*background-size*/\n'+
'    -webkit-background-size: 16px 8px;\n'+
'    -moz-background-size: 16px 8px;\n'+
'    -o-background-size: 16px 8px;\n'+
'    background-size: 16px 8px;\n'+
'    background-image: -webkit-linear-gradient(315deg,transparent,transparent 33%,rgba(0, 0, 0, 0.12) 33%,rgba(0, 0, 0, 0.12) 66%,transparent 66%,transparent);\n'+
'    background-image: -moz-linear-gradient(315deg,transparent,transparent 33%,rgba(0, 0, 0, 0.12) 33%,rgba(0, 0, 0, 0.12) 66%,transparent 66%,transparent);\n'+
'    background-image: -o-linear-gradient(315deg,transparent,transparent 33%,rgba(0, 0, 0, 0.12) 33%,rgba(0, 0, 0, 0.12) 66%,transparent 66%,transparent);\n'+
'    background-image: linear-gradient(315deg,transparent,transparent 33%,rgba(0, 0, 0, 0.12) 33%,rgba(0, 0, 0, 0.12) 66%,transparent 66%,transparent);\n'+
'    /*animation*/\n'+
'    -webkit-animation: load 5s linear 0 infinite;\n'+
'    -moz-animation: load 5s linear 0 infinite;\n'+
'    -ms-animation: load 5s linear 0 infinite;\n'+
'    -o-animation: load 5s linear 0 infinite;\n'+
'    animation: load 5s linear 0 infinite;\n'+
'}\n'+
'/* Then animate the stuff */\n'+
'@-webkit-keyframes load { \n'+
'    0% { width: 0% ;\n'+
		'background-position:0 0;}\n'+
    '100% { width: 100%;\n'+
'			background-position:-40px 0;\n'+
'			}\n'+
'}\n'+
'@-ms-keyframes load { \n'+
'   0% { width: 0% ;\n'+
'		background-position:0 0;}\n'+
'    100% { width: 100%;\n'+
'			background-position:-40px 0;\n'+
'			}\n'+
'}\n'+
'@-o-keyframes load { \n'+
'    0% { width: 0% ;\n'+
'		background-position:0 0;}\n'+
 '   100% { width: 100%;\n'+
'			background-position:-40px 0;\n'+
'			}\n'+
'}\n'+
'@keyframes load { \n'+
 ' 0% { width: 0% ;\n'+
'		background-position:0 0;}\n'+
 '   100% { width: 100%;\n'+
'			background-position:-40px 0;\n'+
'			}\n'+
'}';

var jat = '<script>';
var jaf = '</script>';

var defaultjas = '';

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
    
    if (old.replace(/[\r\n]/g,'') == defaultStuff.replace(/[\r\n]/g,''))
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
		
		// eliminamos las clases de las pestañas
		for(i=0; i< psts.length; i++)
		{
			psts[i].className = '';
		}
		
		// Añadimos la clase "actual" a la pestaña activa
		pst.className = 'actual';
		
		// eliminamos las clases de las pestañas
		for(i=0; i< pnls.length; i++)
		{
			pnls[i].style.display = 'none';
		}
		
		// Añadimos la clase "actual" a la pestaña activa
		pnl.style.display = 'block';
	}