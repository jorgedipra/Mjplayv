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

var defaultStuff = '<div id="canvas">\n'+
     '<div id="head">\n'+
      '   <div id="hat">\n'+
       '      <div id="hat_top"></div>\n'+
       '      <div id="hat_bottom"></div>\n'+
       '  </div>\n'+
       '  <div id="face">\n'+
       '      <div id="eyes_nose">\n'+
       '             <div id="eye_left" class="eyes"></div>\n'+
       '             <div id="nose"></div>\n'+
        '            <div id="eye_right" class="eyes"></div>\n'+
       '      </div>\n'+
'         </div>\n'+
'         <div id="beard"></div>\n'+
'     </div>\n'+
'     <div id="body">\n'+
'         <div id="torso">\n'+
 '           <div id="torso_bottom"></div>\n'+
 '        </div>\n'+
 '        <div id="arm_left">\n'+
 '           <div id="hand_left"></div>\n'+
 '        </div>\n'+
 '        <div id="arm_right">\n'+
 '           <div id="hand_right"></div>\n'+
 '        </div>\n'+
 '    </div>\n'+
 '    <div id="legs">\n'+
 '        <div id="leg_left"></div>\n'+
 '        <div id="leg_right"></div>\n'+
 '    </div>\n'+
'</div>';


var st = '<style>';
var sf = '</style>';

var defaultcss = 'body {\n'+
'	background: #56c7ff;\n'+
'	background: -moz-linear-gradient(top, #56c7ff 0%, #ffffff 100%);\n'+
'	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#56c7ff), color-stop(100%,#ffffff));\n'+
'	background: -webkit-linear-gradient(top, #56c7ff 0%,#ffffff 100%);\n'+
'	background: -o-linear-gradient(top, #56c7ff 0%,#ffffff 100%);\n'+
'	background: -ms-linear-gradient(top, #56c7ff 0%,#ffffff 100%);\n'+
'	background: linear-gradient(top, #56c7ff 0%,#ffffff 100%);\n'+
'	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#56c7ff", endColorstr="#ffffff",GradientType=0 );\n'+
'}\n'+
'#canvas {\n'+
 '   width:900px;\n'+
'}\n'+
'\n'+
'#head {\n'+
'    position:relative;\n'+
'    z-index:10;\n'+
'}\n'+
'\n'+
'#face{\n'+
'    width:126px;\n'+
'    height:140px;\n'+
'    margin: 0 auto;\n'+
'    background-color:#edddb4;\n'+
    '-webkit-border-radius: 83px 83px 83px 83px / 90px 90px 100px 100px;\n'+
    '-moz-border-radius: 83px 83px 83px 83px / 90px 90px 100px 100px;\n'+
    'border-radius: 83px 83px 83px 83px / 90px 90px 100px 100px;\n'+
	'background: -moz-linear-gradient(top, rgba(250,195,130,1) 0%, rgba(255,255,255,0) 100%);\n'+
	'background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(250,195,130,1)), color-stop(100%,rgba(255,255,255,0)));\n'+
	'background: -webkit-linear-gradient(top, rgba(250,195,130,1) 0%,rgba(255,255,255,0) 100%);\n'+
	'background: -o-linear-gradient(top, rgba(250,195,130,1) 0%,rgba(255,255,255,0) 100%);\n'+
	'background: -ms-linear-gradient(top, rgba(250,195,130,1) 0%,rgba(255,255,255,0) 100%);\n'+
	'background: linear-gradient(top, rgba(250,195,130,1) 0%,rgba(255,255,255,0) 100%);\n'+
	'filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#fac382", endColorstr="#00ffffff",GradientType=0 );\n'+	
	
	'box-shadow: inset 13px 3px 30px rgba(0,0,0,0.1);\n'+
'}\n'+
'#beard{\n'+
'    width:160px;\n'+
'    height:130px;\n'+
'    margin: -80px auto 0;\n'+
'    background-color:#fff;\n'+
'    -webkit-border-radius: 40px 40px 160px 160px/100px 100px 150px 150px;\n'+
'    -moz-border-radius: 40px 40px 160px 160px/100px 100px 150px 150px;\n'+
'    border-radius: 40px 40px 160px 160px/100px 100px 150px 150px;\n'+
'    -webkit-box-shadow: inset 13px 0 50px rgba(0,0,0,0.1);\n'+
'    -moz-box-shadow: inset 13px 0 50px rgba(0,0,0,0.1);\n'+
'    box-shadow: inset 13px 0 50px rgba(0,0,0,0.1);\n'+
'}\n'+
'#beard:after{\n'+
 '   content:"";\n'+
  '  position:absolute;\n'+
   ' width:60px;\n'+
  '  height:30px;\n'+
  '  margin: 30px 50px 0;\n'+
  '  -webkit-border-radius: 100px 100px 100px 100px/50px 50px 50px 50px;\n'+
  '  -moz-border-radius: 100px 100px 100px 100px/50px 50px 50px 50px;\n'+
'	border-radius: 100px 100px 100px 100px/50px 50px 50px 50px;\n'+
'    -webkit-box-shadow: inset 0 -2px 0 rgba(0,0,0,0.7);\n'+
'    -moz-box-shadow: inset 0 -2px 0 rgba(0,0,0,0.7);\n'+
'    box-shadow: inset 0 -2px 0 rgba(0,0,0,0.7);\n'+
'}\n'+


'#eyes_nose{\n'+
'    position:relative;\n'+
'    left:20px;\n'+
'    top:37px;\n'+
'}\n'+

'.eyes {\n'+
'    width:15px;\n'+
'    height:20px;\n'+
'    background-color:#000;\n'+
'    float: left;\n'+
'    -webkit-border-radius: 40px 40px 40px 40px/60px 60px 40px 40px;\n'+
'    -moz-border-radius: 40px 40px 40px 40px/60px 60px 40px 40px;\n'+
'    border-radius: 40px 40px 40px 40px/60px 60px 40px 40px;\n'+
'    z-index: 1;\n'+
'}\n'+

'#eye_left{\n'+
 '   margin-right:10px;\n'+
'    -webkit-transform: rotate(10deg);\n'+
'    -moz-transform: rotate(10deg);\n'+
'    -o-transform: rotate(10deg);\n'+
'    -ms-transform: rotate(10deg);\n'+
'    transform: rotate(10deg);\n'+
'    position:relative;\n'+
'    left:18px;\n'+
'}\n'+

'#eye_right{\n'+
'    margin-left:10px;\n'+
'    -webkit-transform: rotate(-10deg);\n'+
'    -moz-transform: rotate(-10deg);\n'+
'    -o-transform: rotate(-10deg);\n'+
'    -ms-transform: rotate(-10deg);\n'+
'    transform: rotate(-10deg);\n'+
'    position:relative;\n'+
'    left: -18px;\n'+
'}\n'+
'.eyes:after{\n'+
'    content:"";\n'+
'    width:6px;\n'+
'    height:6px;\n'+
'    background:#fff;\n'+
'    position:absolute;\n'+
'    -webkit-border-radius:3px;\n'+
'    -moz-border-radius:3px;\n'+
'    border-radius:3px;\n'+
'    top:9px;\n'+
'    left:4px;\n'+
'}\n'+

'.eyes:before{\n'+
'    content:"";\n'+
'    width:20px;\n'+
'    height:16px;\n'+
'    position:absolute;\n'+
'    top:-15px;\n'+
 '   left:-3px;\n'+
 '   -webkit-border-radius: 20px 20px 20px 20px/10px 10px 10px 10px;\n'+
 '   -moz-border-radius: 20px 20px 20px 20px/10px 10px 10px 10px;\n'+
 '   border-radius: 20px 20px 20px 20px/10px 10px 10px 10px;\n'+
 '   -webkit-box-shadow: inset 0 5px 0 rgba(255,255,255,1);\n'+
 '   -moz-box-shadow: inset 0 5px 0 rgba(255,255,255,1);\n'+
 '   box-shadow: inset 0 5px 0 rgba(255,255,255,1);\n'+
'}\n'+

'#eye_left:before{\n'+
'    -webkit-transform:rotate(-25deg);\n'+
'    -moz-transform:rotate(-25deg);\n'+
'    -o-transform:rotate(-25deg);\n'+
'    -ms-transform:rotate(-25deg);\n'+
'    transform:rotate(-25deg);\n'+
'}\n'+
'#eye_right:before{\n'+
'    -webkit-transform:rotate(25deg);\n'+
'    -moz-transform:rotate(25deg);\n'+
'    -o-transform:rotate(25deg);\n'+
'    -ms-transform:rotate(25deg);\n'+
'    transform:rotate(25deg);\n'+
'}\n'+


'#nose{\n'+
 '   float:left;\n'+
  '  width:40px;\n'+
'    height:20px;\n'+
'    position:relative;\n'+
'    z-index:2;\n'+
'    top:10px;\n'+
'	background: #fac382;\n'+
'	background: -moz-linear-gradient(top, #fac382 10%, #fadcaa 100%);\n'+
'	background: -webkit-gradient(linear, left top, left bottom, color-stop(10%,#fac382), color-stop(100%,#fadcaa));\n'+
'	background: -webkit-linear-gradient(top, #fac382 10%,#fadcaa 100%);\n'+
'	background: -o-linear-gradient(top, #fac382 10%,#fadcaa 100%);\n'+
'	background: -ms-linear-gradient(top, #fac382 10%,#fadcaa 100%);\n'+
'	background: linear-gradient(top, #fac382 10%,#fadcaa 100%);\n'+
'	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#fac382", endColorstr="#fadcaa",GradientType=0 );   \n'+
 '   -webkit-border-radius: 60px 60px 60px 60px/30px 30px 30px 30px;\n'+
  '  -moz-border-radius: 60px 60px 60px 60px/30px 30px 30px 30px;\n'+
  '  border-radius: 60px 60px 60px 60px/30px 30px 30px 30px;\n'+
  '  -webkit-box-shadow: inset 3px -3px 10px rgba(0,0,0,0.05);\n'+
  '  -moz-box-shadow: inset 3px -3px 10px rgba(0,0,0,0.05);\n'+
  '  box-shadow: inset 3px -3px 10px rgba(0,0,0,0.05);\n'+
'}\n'+



'#hat_bottom{\n'+
'    width:90px;\n'+
 '   height:30px;\n'+
 '   margin: 0 auto;\n'+
 '   background:#fff;\n'+
 '   position:relative;\n'+
 '   top:20px;\n'+
 '   -webkit-border-radius: 80px 80px 0 0/60px 60px 0 0;\n'+
 '   -moz-border-radius: 80px 80px 0 0/60px 60px 0 0;\n'+
 '   border-radius: 80px 80px 0 0/60px 60px 0 0;\n'+
 '   overflow:hidden;\n'+
 '   -webkit-box-shadow:inset 5px 0 20px rgba(0,0,0,0.1);\n'+
 '   -moz-box-shadow:inset 5px 0 20px rgba(0,0,0,0.1);\n'+
 '   box-shadow:inset 5px 0 20px rgba(0,0,0,0.1);\n'+
'}\n'+

'#hat_bottom:after{\n'+
'    content:"";\n'+
'    width:96px;\n'+
'    height:30px;\n'+
'    background-color:#edddb4;\n'+
'    position:absolute;\n'+
'    top:20px;\n'+
'    left:-3px;\n'+
'    -webkit-border-radius: 90px 90px 0 0/30px 30px 0 0;\n'+
'    -moz-border-radius: 90px 90px 0 0/30px 30px 0 0;\n'+
 '   border-radius: 90px 90px 0 0/30px 30px 0 0;\n'+
'	background: -moz-linear-gradient(top, rgba(250,195,130,1) 0%, rgba(250,220,170,0.6) 100%);\n'+
'	background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(250,195,130,1)), color-stop(100%,rgba(250,220,170,0.6)));\n'+
'	background: -webkit-linear-gradient(top, rgba(250,195,130,1) 0%,rgba(250,220,170,0.6) 100%);\n'+
'	background: -o-linear-gradient(top, rgba(250,195,130,1) 0%,rgba(250,220,170,0.6) 100%);\n'+
'	background: -ms-linear-gradient(top, rgba(250,195,130,1) 0%,rgba(250,220,170,0.6) 100%);\n'+
'	background: linear-gradient(top, rgba(250,195,130,1) 0%,rgba(250,220,170,0.6) 100%);\n'+
'	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#fac382", endColorstr="#99fadcaa",GradientType=0 );\n'+
 '   -webkit-box-shadow: inset 5px 5px 10px rgba(0,0,0,0.1);\n'+
  '  -moz-box-shadow: inset 5px 5px 10px rgba(0,0,0,0.1);\n'+
 '   box-shadow: inset 5px 5px 10px rgba(0,0,0,0.1);\n'+
'}\n'+
'#hat_top{\n'+
 '   width:6px;\n'+
 '   height:0;\n'+
 '   margin: 0 auto;\n'+
 '   position:relative;\n'+
 '   top:30px;\n'+
 '   border-bottom: 60px solid #fa523c;\n'+
 '   border-left: 40px solid transparent;\n'+
 '   border-right: 20px solid transparent;\n'+
'}\n'+

'#hat_top:before{\n'+
'    content:"";\n'+
'    position:absolute;\n'+
'    width:0;\n'+
'    height:0;\n'+
'    border-bottom: 20px solid #c7402e;\n'+
'    border-left: 10px solid transparent;\n'+
'    border-right: 10px solid transparent;\n'+
'    -webkit-transform:rotate(72deg);\n'+
'    -moz-transform:rotate(72deg);\n'+
'    -o-transform:rotate(72deg);\n'+
'    -ms-transform:rotate(72deg);\n'+
'    transform:rotate(72deg);\n'+
'    left:8px;\n'+
'    top:-4px;\n'+
'}\n'+

'#hat_top:after{\n'+
'    content:"";\n'+
'    position:absolute;\n'+
'    left: 20px;\n'+
'    top:-5px;\n'+
'    width:20px;\n'+
'    height:20px;\n'+
'    background:#fff;\n'+
'    -webkit-border-radius:10px;\n'+
'    -moz-border-radius:10px;\n'+
'    border-radius:10px;\n'+
'    -webkit-box-shadow: inset 2px 2px 10px rgba(0,0,0,0.15);\n'+
'    -moz-box-shadow: inset 2px 2px 10px rgba(0,0,0,0.15);\n'+
'    box-shadow: inset 2px 2px 10px rgba(0,0,0,0.15);\n'+
'}\n'+

'#torso{\n'+
 '   width:100px;\n'+
 '   height:0;\n'+
 '   margin: 0 auto;\n'+
 '   position:relative;\n'+
 '   z-index:6;\n'+
 '   top:-20px;\n'+
 '   border-bottom: 150px solid #fa523c;\n'+
 '   border-left: 60px solid transparent;\n'+
 '   border-right: 60px solid transparent;\n'+
'}\n'+

'#torso:before{\n'+
'    content:"";\n'+
'    position:absolute;\n'+
'    width:20px;\n'+
'    height:30px;\n'+
'    top:40px;\n'+
'    left:50px;\n'+
'    background: #c79569;\n'+
 '   -webkit-border-radius:20px/30px;\n'+
 '   -moz-border-radius:20px/30px;\n'+
 '   border-radius:20px/30px;\n'+
 '   -webkit-box-shadow: inset 1px -2px 0 rgba(0,0,0,0.1);\n'+
 '   -moz-box-shadow: inset 1px -2px 0 rgba(0,0,0,0.1);\n'+
 '   box-shadow: inset 1px -2px 0 rgba(0,0,0,0.1);\n'+
'}\n'+

'#torso:after{\n'+
'    content:"";\n'+
'    position:absolute;\n'+
'    width:15px;\n'+
'    height:20px;\n'+
'    top:80px;\n'+
'    left:55px;\n'+
'    background: #e0923e;\n'+
'    -webkit-border-radius:30px/40px;\n'+
'    -moz-border-radius:30px/40px;\n'+
'    border-radius:30px/40px;\n'+
'    -webkit-box-shadow: inset 2px -3px 0 rgba(0,0,0,0.1);\n'+
'    -moz-box-shadow: inset 2px -3px 0 rgba(0,0,0,0.1);\n'+
'    box-shadow: inset 2px -3px 0 rgba(0,0,0,0.1);\n'+
'}\n'+

'#torso_bottom{\n'+
'    width:240px;\n'+
'    height:60px;\n'+
'    background:#fff;\n'+
'    position:relative;\n'+
'    top:110px;\n'+
'    left:-70px;\n'+
'    -webkit-border-radius: 30px 30px 60px 60px/90px 90px 10px 10px;\n'+
'    -moz-border-radius: 30px 30px 60px 60px/90px 90px 10px 10px;\n'+
'    border-radius: 30px 30px 60px 60px/90px 90px 10px 10px;\n'+
'    -webkit-box-shadow: inset 15px 0 50px rgba(0,0,0,0.1);\n'+
'    -moz-box-shadow: inset 15px 0 50px rgba(0,0,0,0.1);\n'+
'    box-shadow: inset 15px 0 50px rgba(0,0,0,0.1);\n'+
'}\n'+
'#arm_left{\n'+
'    width:100px;\n'+
'    height:50px;\n'+
'    background:#f05239;\n'+
'    margin: 0 auto;\n'+
'    position:relative;\n'+
'    z-index:5;\n'+
'    top:-160px;\n'+
'    left:-60px;\n'+
'    -webkit-transform:rotate(30deg);\n'+
'    -moz-transform:rotate(30deg);\n'+
'    -o-transform:rotate(30deg);\n'+
'    -ms-transform:rotate(30deg);\n'+
'    transform:rotate(30deg);\n'+
'    -webkit-box-shadow: inset 0 -10px 20px rgba(0,0,0,0.1);\n'+
'    -moz-box-shadow: inset 0 -10px 20px rgba(0,0,0,0.1);\n'+
'    box-shadow: inset 0 -10px 20px rgba(0,0,0,0.1);\n'+
'}\n'+

'#arm_right{\n'+
'    width:100px;\n'+
'    height:50px;\n'+
'    background:#f05239;\n'+
'    margin: 0 auto;\n'+
'    position:relative;\n'+
'    z-index:5;\n'+
'    top:-210px;\n'+
'    left:60px;\n'+
'    -webkit-transform:rotate(-30deg);\n'+
'    -moz-transform:rotate(-30deg);\n'+
'    -o-transform:rotate(-30deg);\n'+
'    -ms-transform:rotate(-30deg);\n'+
'    transform:rotate(-30deg);\n'+
'    -webkit-box-shadow: inset 0 -10px 20px rgba(0,0,0,0.1);\n'+
'    -moz-box-shadow: inset 0 -10px 20px rgba(0,0,0,0.1);\n'+
'    box-shadow: inset 0 -10px 20px rgba(0,0,0,0.1);\n'+
'}\n'+

'#arm_left:after{\n'+
'    content:"";\n'+
'    position:absolute;\n'+
'    width:25px;\n'+
'    height:60px;\n'+
'    background:#fff;\n'+
'    top:-5px;\n'+
'    left:-10px;\n'+
'    -webkit-border-radius: 20px 10px 10px 20px/80px 60px 60px 80px;\n'+
'    -moz-border-radius: 20px 10px 10px 20px/80px 60px 60px 80px;\n'+
'    border-radius: 20px 10px 10px 20px/80px 60px 60px 80px;\n'+
'    -webkit-box-shadow: inset 0 -10px 20px rgba(0,0,0,0.1);\n'+
'    -moz-box-shadow: inset 0 -10px 20px rgba(0,0,0,0.1);\n'+
'    box-shadow: inset 0 -10px 20px rgba(0,0,0,0.1);\n'+
'}\n'+

'#arm_right:after{\n'+
'    content:"";\n'+
'    position:absolute;\n'+
'    width:25px;\n'+
'    height:60px;\n'+
'    background:#fff;\n'+
'    top:-5px;\n'+
'    left:80px;\n'+
'    -webkit-border-radius: 10px 20px 20px 10px/60px 80px 80px 60px;\n'+
'    -moz-border-radius: 10px 20px 20px 10px/60px 80px 80px 60px;\n'+
'    border-radius: 10px 20px 20px 10px/60px 80px 80px 60px;\n'+
'    -webkit-box-shadow: inset 0 -10px 20px rgba(0,0,0,0.1);\n'+
'    -moz-box-shadow: inset 0 -10px 20px rgba(0,0,0,0.1);\n'+
'    box-shadow: inset 0 -10px 20px rgba(0,0,0,0.1);\n'+
'}\n'+
'#hand_left{\n'+
'    width:40px;\n'+
'    height:40px;\n'+
'    background:#c44f3a;\n'+
'    position:relative;\n'+
'    left:-40px;\n'+
'    top:10px;\n'+
'    -webkit-border-radius: 20px 0 20px 20px;\n'+
'    -moz-border-radius: 20px 0 20px 20px;\n'+
'    border-radius: 20px 0 20px 20px;\n'+
'    -webkit-box-shadow: inset 3px -3px 15px rgba(0,0,0,0.1);\n'+
'    -moz-box-shadow: inset 3px -3px 15px rgba(0,0,0,0.1);\n'+
'    box-shadow: inset 3px -3px 15px rgba(0,0,0,0.1);\n'+
'}\n'+

'#hand_right{\n'+
'    width:40px;\n'+
'    height:40px;\n'+
'    background:#c44f3a;\n'+
'    position:relative;\n'+
'    left:95px;\n'+
'    top:10px;\n'+
'    -webkit-border-radius: 0 20px 20px 20px;\n'+
'    -moz-border-radius: 0 20px 20px 20px;\n'+
'    border-radius: 0 20px 20px 20px;\n'+
'    -webkit-box-shadow: inset 3px -3px 15px rgba(0,0,0,0.1);\n'+
'    -moz-box-shadow: inset 3px -3px 15px rgba(0,0,0,0.1);\n'+
'    box-shadow: inset 3px -3px 15px rgba(0,0,0,0.1);\n'+
'}\n'+

'#hand_left:after{\n'+
'    content:"";\n'+
 '   position:absolute;\n'+
 '   width:20px;\n'+
 '   height:20px;\n'+
 '   background:#c44f3a;\n'+
 '   -webkit-border-radius:10px;\n'+
 '   -moz-border-radius:10px;\n'+
 '   border-radius:10px;\n'+
  '  left:15px;\n'+
'    top:-10px;\n'+
'}\n'+

'#hand_right:after{\n'+
'    content:"";\n'+
'    position:absolute;\n'+
'    width:20px;\n'+
'    height:20px;\n'+
'    background:#c44f3a;\n'+
'    -webkit-border-radius:10px;\n'+
'    -moz-border-radius:10px;\n'+
'    border-radius:10px;\n'+
'    left:5px;\n'+
'    top:-10px;\n'+
'}\n'+

'#leg_left{\n'+
'    width: 30px;\n'+
'    height: 40px;\n'+
'    background: #5c3018;\n'+
 '   margin: 0 auto;\n'+
 '   position: relative;\n'+
'    -webkit-transform: rotate(10deg);\n'+
'    -moz-transform: rotate(10deg);\n'+
'    -o-transform: rotate(10deg);\n'+
'    -ms-transform: rotate(10deg);\n'+
'    transform: rotate(10deg);\n'+
'    top: -110px;\n'+
'    left: -60px;\n'+
'}\n'+

'#leg_right{\n'+
'    width: 30px;\n'+
'    height: 40px;\n'+
'    background: #5c3018;\n'+
'    margin: 0 auto;\n'+
'    position: relative;\n'+
'    -webkit-transform: rotate(-10deg);\n'+
'    -moz-transform: rotate(-10deg);\n'+
'    -o-transform: rotate(-10deg);\n'+
'    -ms-transform: rotate(-10deg);\n'+
'    transform: rotate(-10deg);\n'+
'    top: -150px;\n'+
'    left: 60px;\n'+
'}\n'+

'#leg_left:after {\n'+
'    content: "";\n'+
'    width: 20px;\n'+
'    height: 20px;\n'+
'    position: absolute;\n'+
'    background: #5c3018;\n'+
'    -webkit-border-radius: 10px 0 0 0;\n'+
'    -moz-border-radius: 10px 0 0 0;\n'+
'    border-radius: 10px 0 0 0;\n'+
'    top: 20px;\n'+
'    left: -15px;\n'+
'}\n'+

'#leg_right:after {\n'+
'    content: "";\n'+
'    width: 20px;\n'+
'    height: 20px;\n'+
'    position: absolute;\n'+
'    background: #5c3018;\n'+
'    -webkit-border-radius: 0 10px 0 0;\n'+
'    -moz-border-radius: 0 10px 0 0;\n'+
'    border-radius: 0 10px 0 0;\n'+
'    top: 20px;\n'+
'    left: 25px;\n'+
'}\n'+
'';

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
		
		// eliminamos las clases de las pesta�as
		for(i=0; i< psts.length; i++)
		{
			psts[i].className = '';
		}
		
		// A�adimos la clase "actual" a la pesta�a activa
		pst.className = 'actual';
		
		// eliminamos las clases de las pesta�as
		for(i=0; i< pnls.length; i++)
		{
			pnls[i].style.display = 'none';
		}
		
		// A�adimos la clase "actual" a la pesta�a activa
		pnl.style.display = 'block';
	}



















