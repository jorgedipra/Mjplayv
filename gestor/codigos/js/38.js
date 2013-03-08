var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE html>\n'+'<html>\n'+'<head>\n'+'<meta charset="UTF-8" />\n'+'<title>90 Segundos</title>\n'+'</head>\n'+'<body>\n'+'<div class="scene">\n'+'    <div class="ring ringOuter1"></div>\n'+'    <div class="ring ringOuter2"></div>\n'+'    <div class="ring ringOuter3"></div>\n'+'    <div class="ring ringMiddle1"></div>\n'+'    <div class="ring ringMiddle2"></div>\n'+'    <div class="ring ringMiddle3"></div>\n'+'    <div class="ring ringInner1"></div>\n'+'    <div class="ring ringInner2"></div>\n'+'    <div class="ring ringInner3"></div>\n'+'    <div class="ring countdown">90</div>\n'+'</div>\n'+'\n'+'<script type="text/javascript" src="http://jsdo.it/lib/jquery-1.8.0/js"></script>\n'+'\n'+'<script>/*jquery*/\n'+'$(document).ready(function() {\n'+'\n'+'    var width = $("body").width(), halfWidth = width / 2;\n'+'    var height = $(document).height(), halfHeight = height / 2;\n'+'    var $scene = $(".scene");\n'+'    \n'+'	$(document).mousemove(function(e) {\n'+'	    var y = (e.clientX - halfWidth) / 9;\n'+'	    var x = (halfHeight - e.clientY) / 9;\n'+'	    var transformString = "scale3d(0.5, 0.5, 0.5) translateY(-100px) translateX(100px) " +\n'+'			"rotateX(" + x + "deg) rotateY(" + y + "deg)";\n'+'	    $scene.attr("style", \n'+'			"-moz-transform: " + transformString + "; " +\n'+'            "-webkit-transform: " + transformString);\n'+'	});\n'+'    \n'+'    var animationLength = 1000;\n'+'    var animationCounter = 0;\n'+'    var animationTimer;\n'+'    $(document).toggle(function(e) {\n'+'        clearInterval(animationTimer);\n'+'        animationTimer = null;\n'+'        animationTimer = setInterval(function() {\n'+'            var pctDone = animationCounter / animationLength;\n'+'            \n'+'            var z = (z <= 0) ? 0 : Number(125 - (pctDone * 125));\n'+'            var opacity = (opacity <= 0) ? 0 : Number(0.6 - (pctDone * 0.6));\n'+'            $(".ringInner1").attr("style", \n'+'				"-moz-transform:translateZ(" + z + "px);" +\n'+'            	"-webkit-transform:translateZ(" + z + "px);" /*+\n'+'                "opacity:" + opacity*/);\n'+'            \n'+'            var z2 = (z2 <= 0) ? 0 : Number(-125 + (pctDone * 125));\n'+'            var opacity2 = (opacity2 >= 0) ? 0 : Number(0.6 - (pctDone * 0.6));\n'+'            $(".ringInner2").attr("style", \n'+'				"-moz-transform:translateZ(" + z2 + "px);" +\n'+'            	"-webkit-transform:translateZ(" + z2 + "px);" +\n'+'                "opacity:" + opacity2);\n'+'            \n'+'            var z3 = (z3 <= 0) ? 0 : Number(75 - (pctDone * 75));\n'+'            var opacity3 = (opacity3 <= 0) ? 0 : Number(0.6 - (pctDone * 0.6));\n'+'            $(".ringInner3").attr("style", \n'+'				"-moz-transform:translateZ(" + z3 + "px);" +\n'+'            	"-webkit-transform:translateZ(" + z3 + "px);" +\n'+'                "opacity:" + opacity3);\n'+'            \n'+'            var z4 = (z4 <= 0) ? 0 : Number(100 - (pctDone * 100));\n'+'            $(".countdown").attr("style", \n'+'				"-moz-transform:translateZ(" + z4 + "px);" +\n'+'            	"-webkit-transform:translateZ(" + z4 + "px);");\n'+'            \n'+'            animationCounter += 33;\n'+'            if(animationCounter >= animationLength) {\n'+'                clearInterval(animationTimer);\n'+'                animationTimer = null;\n'+'                animationCounter = 0;\n'+'            }\n'+'        }, 33);\n'+'    }, function(e) {\n'+'    	\n'+'    });\n'+'    \n'+'    var wait = 5;\n'+'    var timer = setInterval(function() {\n'+'        var val = Number($(".countdown").html());\n'+'        if(val > 0) {\n'+'            val--;\n'+'            $(".countdown").html(val);\n'+'        } else {\n'+'            wait--;\n'+'            if(wait <= 0) {\n'+'            	$(".countdown").html("90");\n'+'                wait = 5;\n'+'            }\n'+'        }\n'+'    }, 1000);\n'+'\n'+'});\n'+'</script>\n'+'</body>\n'+'</html>\n'+'';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' @import url(http://fonts.googleapis.com/css?family=Oswald);\n'+'\n'+'body, html {\n'+'    height: 100%;\n'+'    overflow: hidden;\n'+'}\n'+'\n'+'body { \n'+'    background-color: #222; \n'+'    font: 30px sans-serif;  \n'+'    -moz-perspective: 1000px;\n'+'    -moz-user-select: -moz-none;\n'+'    -webkit-perspective-origin: 50% 50%;\n'+'    -webkit-perspective: 1000px;\n'+'    -webkit-user-select: -webkit-none;\n'+'}\n'+'\n'+'.scene {\n'+'    -moz-transform-style: preserve-3d;\n'+'    -moz-user-select: -moz-none;\n'+'    -moz-transform: \n'+'        scale3d(0.5, 0.5, 0.5) \n'+'        translateY(-100px)\n'+'        translateX(100px)\n'+'        rotateX(-15deg) \n'+'        rotateY(0deg); \n'+'    -moz-transition: \n'+'		none 0s ease 0s ;\n'+'    -webkit-transform-style: preserve-3d;\n'+'    -webkit-user-select: -webkit-none;\n'+'    -webkit-transform: \n'+'        scale3d(0.5, 0.5, 0.5) \n'+'        translateY(-100px)\n'+'        translateX(100px)\n'+'        rotateX(-15deg) \n'+'        rotateY(0deg); \n'+'    -webkit-transition: \n'+'		none 0s ease 0s;\n'+'    \n'+'    position: absolute;\n'+'    left: 0;\n'+'    top: 0;\n'+'    width: 65%;\n'+'    height: 100%;\n'+'    z-index: 0;\n'+'    \n'+'    border-radius: 15px;\n'+'}\n'+'\n'+'.ring {\n'+'    -moz-transform-style: preserve-3d;\n'+'    -webkit-transform-style: preserve-3d;\n'+'    \n'+'    position: absolute;\n'+'    left: 50%;\n'+'    top: 50%;\n'+'    width: 350px;\n'+'    height: 350px;\n'+'    margin: -175px 0 0 -175px;\n'+'    \n'+'    border: solid 5px #b8c2ff;\n'+'    border-radius: 1000px;\n'+'    box-shadow: \n'+'        0 0 2px 1px #b8c2ff,\n'+'        0 0 2px 1px #b8c2ff inset;\n'+'    \n'+'	-moz-box-sizing: border-box;\n'+'    -webkit-box-sizing: border-box;\n'+'	box-sizing: border-box;\n'+'}\n'+'\n'+'.ringOuter1 {\n'+' 	box-shadow: \n'+'        0 0 35px rgba(184, 194, 255, 0.25),\n'+'        0 0 2px 1px #b8c2ff,\n'+'        0 0 35px rgba(184, 194, 255, 0.25) inset,\n'+'        0 0 2px 1px #b8c2ff inset;   \n'+'}\n'+'\n'+'.ringMiddle2, .ringInner3 {\n'+' 	box-shadow: \n'+'        0 0 35px rgba(184, 194, 255, 0.5),\n'+'        0 0 2px 1px #b8c2ff,\n'+'        0 0 35px rgba(184, 194, 255, 0.5) inset,\n'+'        0 0 2px 1px #b8c2ff inset;   \n'+'}\n'+'\n'+'.ringOuter1 {\n'+'    width: 500px;\n'+'    height: 500px;\n'+'    margin: -250px 0 0 -250px;\n'+'    border-width: 4px;\n'+'    opacity: 0.6;\n'+'}\n'+'\n'+'.ringOuter2 {\n'+'    width: 462px;\n'+'    height: 462px;\n'+'    margin: -231px 0 0 -231px;\n'+'    border-width: 0px;\n'+'    opacity: 0.25;\n'+'}\n'+'\n'+'.ringOuter3 {\n'+'    width: 424px;\n'+'    height: 424px;\n'+'    margin: -212px 0 0 -212px;\n'+'    border-width: 0px;\n'+'    opacity: 0.25;\n'+'}\n'+'\n'+'.ringMiddle1 {\n'+'    width: 388px;\n'+'    height: 388px;\n'+'    margin: -194px 0 0 -194px;\n'+'    border-width: 3px;\n'+'    opacity: 0.45;\n'+'}\n'+'\n'+'.ringMiddle2 {\n'+'    width: 368px;\n'+'    height: 368px;\n'+'    margin: -184px 0 0 -184px;\n'+'    border-width: 24px;\n'+'    opacity: 0.45;\n'+'}\n'+'\n'+'.ringMiddle3 {\n'+'    width: 306px;\n'+'    height: 306px;\n'+'    margin: -153px 0 0 -153px;\n'+'    border-width: 3px;\n'+'    opacity: 0.45;\n'+'}\n'+'\n'+'.ringInner1, .ringInner2 {\n'+'    width: 276px;\n'+'    height: 276px;\n'+'    margin: -138px 0 0 -138px;\n'+'    border-width: 3px;\n'+'    opacity: 0.6;\n'+'    -moz-transform: translateZ(125px);\n'+'    -webkit-transform: translateZ(125px);\n'+'}\n'+'\n'+'.ringInner2 {\n'+'    width: 306px;\n'+'    height: 306px;\n'+'    margin: -153px 0 0 -153px;\n'+' 	 -moz-transform: translateZ(-125px);   \n'+' 	 -webkit-transform: translateZ(-125px);   \n'+'}\n'+'\n'+'.ringInner3 {\n'+'    width: 306px;\n'+'    height: 306px;\n'+'    margin: -153px 0 0 -153px;\n'+'    border-width: 18px;\n'+'    border-style: dashed !important;\n'+'    border-radius: 306px !important;\n'+'    opacity: 0.6;\n'+'    -moz-transform: translateZ(75px);\n'+'    -webkit-transform: translateZ(75px);\n'+'}\n'+'\n'+'.countdown {\n'+'	width: 306px;\n'+'    height: 306px;\n'+'    margin: -153px 0 0 -153px;\n'+'    border-width: 0px;\n'+'    border-style: none;\n'+'    border-radius: 0px;\n'+'    box-shadow: none;\n'+'    -moz-transform: translateZ(100px);\n'+'    -webkit-transform: translateZ(100px);\n'+'    color: #fff;\n'+'    font: 120pt/306px "Oswald",sans-serif;\n'+'    letter-spacing: -10px;\n'+'    text-align: center;\n'+'    text-shadow: \n'+'        0 0 4px #b8c2ff, \n'+'        0 0 50px rgba(184, 194, 255, 0.75);\n'+'}';

var jat = '<script>';
var jaf = '</script>';

var defaultjas =' function validateRotationAngle(angle) {\n'+'    if(angle > 360)\n'+'	return 0;\n'+'    if(angle < -360)\n'+'	return 0;\n'+'    return angle;\n'+'}\n'+'';

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

