var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' \n'+'<!DOCTYPE html>\n'+'<html>\n'+'<head>\n'+'<meta charset="UTF-8" />\n'+'<title>Television css3</title>\n'+'<meta name="Description" content="" />\n'+'<meta name="Keywords"  content="" />\n'+'\n'+'<link rel="stylesheet" type="text/css" media="screen,print" href="style.css" />\n'+'</head>\n'+'<body>\n'+'<input type="radio" name="power" id="power-on">\n'+'<input type="radio" name="power" id="power-off">\n'+'\n'+'<label for="power-on" onclick>ON</label>\n'+'<label for="power-off" onclick>OFF</label>\n'+'\n'+'<div id="monitor">\n'+'    <div>\n'+'        <img src="http://mjplay-v.16mb.com/Escritorio/explorer/carpetas/Galeria/images/large/8.jpg" width="320" height="240">\n'+'    </div>\n'+'</div>\n'+'\n'+'\n'+'<script type="text/javascript" src="index.js"></script>\n'+'</body>\n'+'</html>\n'+'';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' body{\n'+'background:#ebf1f6;\n'+'/* Old browsers */\n'+'/*linear-gradient*/\n'+'background:-webkit-gradient(linear,left top,left bottom,color-stop(#ebf1f6,0),color-stop(#abd3ee,0.5),color-stop(#89c3eb,0.51),color-stop(#d5ebfb,1));\n'+'background:-webkit-linear-gradient(top,  #ebf1f6 0%, #abd3ee 50%, #89c3eb 51%, #d5ebfb 100%);\n'+'background:   -moz-linear-gradient(top,  #ebf1f6 0%, #abd3ee 50%, #89c3eb 51%, #d5ebfb 100%);\n'+'background:     -o-linear-gradient(top,  #ebf1f6 0%, #abd3ee 50%, #89c3eb 51%, #d5ebfb 100%);\n'+'background:        linear-gradient(top,  #ebf1f6 0%, #abd3ee 50%, #89c3eb 51%, #d5ebfb 100%);\n'+'/* FF3.6+ */\n'+'background:-webkit-gradient(linear, left top, left bottom, color-stop(0%,#ebf1f6), color-stop(50%,#abd3ee), color-stop(51%,#89c3eb), color-stop(100%,#d5ebfb));\n'+'/* Chrome,Safari4+ */\n'+'background:-webkit-linear-gradient(top,  #ebf1f6 0%,#abd3ee 50%,#89c3eb 51%,#d5ebfb 100%);\n'+'background:   -moz-linear-gradient(top,  #ebf1f6 0%,#abd3ee 50%,#89c3eb 51%,#d5ebfb 100%);\n'+'background:     -o-linear-gradient(top,  #ebf1f6 0%,#abd3ee 50%,#89c3eb 51%,#d5ebfb 100%);\n'+'background:        linear-gradient(top,  #ebf1f6 0%,#abd3ee 50%,#89c3eb 51%,#d5ebfb 100%);\n'+'/* Chrome10+,Safari5.1+ */\n'+'/* Opera 11.10+ */\n'+'/* IE10+ */\n'+'/*@@prefixmycss->No equivalent*/\n'+'background:-webkit-linear-gradient(to bottom,  #ebf1f6 0%,#abd3ee 50%,#89c3eb 51%,#d5ebfb 100%);\n'+'background:   -moz-linear-gradient(to bottom,  #ebf1f6 0%,#abd3ee 50%,#89c3eb 51%,#d5ebfb 100%);\n'+'background:     -o-linear-gradient(to bottom,  #ebf1f6 0%,#abd3ee 50%,#89c3eb 51%,#d5ebfb 100%);\n'+'background:        linear-gradient(to bottom,  #ebf1f6 0%,#abd3ee 50%,#89c3eb 51%,#d5ebfb 100%);\n'+'/* W3C */\n'+'filter:progid:DXImageTransform.Microsoft.gradient( startColorstr="#ebf1f6", endColorstr="#d5ebfb",GradientType=0 );\n'+'/* IE6-9 */\n'+'position:absolute;\n'+'text-align:center;\n'+'width:90%;\n'+'}\n'+'html{\n'+'height:auto;\n'+'margin:30px auto;\n'+'width:95%;\n'+'}\n'+'input[name=power]{\n'+'display:none;\n'+'}\n'+'label{\n'+'/*linear-gradient*/\n'+'background:-webkit-gradient(linear,left top,left bottom,color-stop(rgba(131,155,195,1),0),color-stop(rgba(87,111,163,1),1));\n'+'background:-webkit-linear-gradient(top,  rgba(131,155,195,1) 0%,rgba(87,111,163,1) 100%);\n'+'background:   -moz-linear-gradient(top,  rgba(131,155,195,1) 0%,rgba(87,111,163,1) 100%);\n'+'background:     -o-linear-gradient(top,  rgba(131,155,195,1) 0%,rgba(87,111,163,1) 100%);\n'+'background:        linear-gradient(top,  rgba(131,155,195,1) 0%,rgba(87,111,163,1) 100%);\n'+'/*border-radius*/\n'+'-webkit-border-radius:5px 5px 5px 5px;\n'+'   -moz-border-radius:5px 5px 5px 5px;\n'+'        border-radius:5px 5px 5px 5px;\n'+'border:1px solid #566383;\n'+'border:1px solid #DDD;\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:0 1px 0 #CADBFE inset, 0 3px 0 0 #2D447F, 0 4px 2px #999999;\n'+'   -moz-box-shadow:0 1px 0 #CADBFE inset, 0 3px 0 0 #2D447F, 0 4px 2px #999999;\n'+'        box-shadow:0 1px 0 #CADBFE inset, 0 3px 0 0 #2D447F, 0 4px 2px #999999;\n'+'color:#000;\n'+'display:inline-block;\n'+'height:30px;\n'+'line-height:30px;\n'+'padding:0 10px;\n'+'position:relative;\n'+'text-align:center;\n'+'text-decoration:none;\n'+'text-shadow:0 0 2px rgba(0,0,0,0.3);\n'+'top:-1px;\n'+'/*transition-duration*/\n'+'-webkit-transition-duration:0.1s, 0.1s;\n'+'   -moz-transition-duration:0.1s, 0.1s;\n'+'     -o-transition-duration:0.1s, 0.1s;\n'+'        transition-duration:0.1s, 0.1s;\n'+'/*transition-property*/\n'+'-webkit-transition-property:top, box-shadow;\n'+'   -moz-transition-property:top, box-shadow;\n'+'     -o-transition-property:top, box-shadow;\n'+'        transition-property:top, box-shadow;\n'+'/*transition-timing-function*/\n'+'-webkit-transition-timing-function:linear, linear;\n'+'   -moz-transition-timing-function:linear, linear;\n'+'     -o-transition-timing-function:linear, linear;\n'+'        transition-timing-function:linear, linear;\n'+'width:80px;\n'+'}\n'+'label:active{\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:0 1px 0 #cadbfe inset, 0 1px 0 0 #2d447f, 0 2px 2px #999999;\n'+'   -moz-box-shadow:0 1px 0 #cadbfe inset, 0 1px 0 0 #2d447f, 0 2px 2px #999999;\n'+'        box-shadow:0 1px 0 #cadbfe inset, 0 1px 0 0 #2d447f, 0 2px 2px #999999;\n'+'top:2px;\n'+'}\n'+'label[for=power-on]{\n'+'display:inline-block;\n'+'}\n'+'label[for=power-off]{\n'+'display:none;\n'+'}\n'+'#power-off:checked ~ label[for=power-on]{\n'+'display:inline-block;\n'+'}\n'+'#power-off:checked ~ label[for=power-off]{\n'+'display:none;\n'+'}\n'+'#power-on:checked ~ label[for=power-on]{\n'+'display:none;\n'+'}\n'+'#power-on:checked ~ label[for=power-off]{\n'+'display:inline-block;\n'+'}\n'+'#monitor{\n'+'background-color:#000;\n'+'border:20px solid #1E1E1F;\n'+'height:240px;\n'+'margin:10px auto 0;\n'+'width:320px;\n'+'-webkit-box-reflect:below -5px -webkit-gradient(linear, left top, left bottom,   from(transparent), to(rgba(255, 255, 255, 0.3)));\n'+'}\n'+'#monitor > div{\n'+'background-color:#fff;\n'+'height:100%;\n'+'overflow:hidden;\n'+'position:relative;\n'+'width:100%;\n'+'/*transform*/\n'+'-webkit-transform:scale(0, 0);\n'+'   -moz-transform:scale(0, 0);\n'+'    -ms-transform:scale(0, 0);\n'+'     -o-transform:scale(0, 0);\n'+'        transform:scale(0, 0);\n'+'}\n'+'#power-on:checked ~ #monitor > div{\n'+'/*animation*/\n'+'-webkit-animation:on 200ms ease 0ms 1 normal both;\n'+'   -moz-animation:on 200ms ease 0ms 1 normal both;\n'+'    -ms-animation:on 200ms ease 0ms 1 normal both;\n'+'     -o-animation:on 200ms ease 0ms 1 normal both;\n'+'        animation:on 200ms ease 0ms 1 normal both;\n'+'}\n'+'#power-off:checked ~ #monitor > div{\n'+'/*animation*/\n'+'-webkit-animation:off 200ms ease 0ms 1 normal both;\n'+'   -moz-animation:off 200ms ease 0ms 1 normal both;\n'+'    -ms-animation:off 200ms ease 0ms 1 normal both;\n'+'     -o-animation:off 200ms ease 0ms 1 normal both;\n'+'        animation:off 200ms ease 0ms 1 normal both;\n'+'}\n'+'@-webkit-keyframes on{\n'+'0% {\n'+'        -webkit-transform: scale(0, 0.01);\n'+'    }\n'+'    50% {\n'+'        -webkit-transform: scale(1, 0.01);\n'+'    }\n'+'    100% {\n'+'        -webkit-transform: scale(1, 1);\n'+'    }\n'+'}\n'+'@-webkit-keyframes off{\n'+'0% {\n'+'        -webkit-transform: scale(1, 1);\n'+'    }\n'+'    50% {\n'+'        -webkit-transform: scale(1, 0.01);\n'+'    }\n'+'    100% {\n'+'        -webkit-transform: scale(0, 0.01);\n'+'    }\n'+'}\n'+'';

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

