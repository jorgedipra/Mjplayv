var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE html>\n'+'<html lang="es">\n'+'<head>\n'+'<meta charset="utf-8" />\n'+'<title>CANVAS- RELOG</title>\n'+'</head>\n'+'<body>\n'+'<canvas id="canvas"></canvas>\n'+'<div id="info"></div>\n'+'</body>\n'+'</html>\n'+'<!---canvas-->\n'+'<script>\n'+'var FPS = 60;\n'+'var _width = 400;\n'+'var _height = 400;\n'+'var particleNum = 5000;\n'+'\n'+'var CLOCK_VIEW = 0, TEXT_VIEW = 1;\n'+'var nowDisp = CLOCK_VIEW;\n'+'var particles = [];\n'+'var ct = document.createElement("canvas");\n'+'var ctx = ct.getContext("2d");\n'+'ctx.fillStyle = "#fff";\n'+'\n'+'var canvas = document.getElementById("canvas");\n'+'var info = document.getElementById("info");\n'+'\n'+'ct.width  = canvas.width  = _width;\n'+'ct.height = canvas.height = _height;\n'+'canvas.onclick = mouseClick;\n'+'\n'+'var cc = canvas.getContext("2d");\n'+'cc.fillStyle = "rgba(255,255,255,0.01)";\n'+'cc.fillRect(0, 0, _width, _height);\n'+'bit = cc.getImageData(0, 0, _width, _height);\n'+'data = bit.data;\n'+'cc.clearRect(0, 0, _width, _height);\n'+'cc.fillStyle = "rgb(255, 255, 255)";\n'+'\n'+'var updateState = false;\n'+'var textData;\n'+'var prev_time;\n'+'var textWidth;\n'+'var textHeight;\n'+'var setX, setY;\n'+'\n'+'function setPixel(x, y){\n'+'  var idx = ((x|0) + (y|0) * _width)*4;\n'+'  data[idx+3] = 255;\n'+'}\n'+'function delPixel(x, y){\n'+'  var idx = ((x|0) + (y|0) * _width)*4;\n'+'  data[idx+3] = 0;\n'+'}\n'+'function faidout(){\n'+'  for (var i = 3, l = data.length;i < l;i+=4){\n'+'    var a = data[i];\n'+'    if (a !== 0){\n'+'      if (a < 36) {\n'+'        data[i] = 0;\n'+'      } else if (a < 66) {\n'+'        data[i] *= 0.96;\n'+'      } else {\n'+'        data[i] *= 0.7;\n'+'      }\n'+'    }\n'+'  }\n'+'}\n'+'\n'+'var num = particleNum;\n'+'while(num){\n'+'  num--;\n'+'  particles[num] = new particle();\n'+'}\n'+'var last = Date.now(), count = 0;\n'+'setInterval(process, 1000/FPS);\n'+'\n'+'function process() {\n'+'  var dispType = ["MJ", "ClOCK"];\n'+'  ctx.clearRect(0, 0, _width, _height);\n'+'  var time = timeDraw();\n'+'  if (prev_time !== time){\n'+'    updateState = true;\n'+'  }\n'+'  prev_time = time;\n'+'  if(updateState){\n'+'  if (nowDisp === CLOCK_VIEW) {\n'+'   \n'+'      var textSize = 60;\n'+'      var text = time;\n'+'      textWidth = textSize*4.5;\n'+'      textHeight = textSize;\n'+'      setX = _width/2 - textSize*2.25;\n'+'      setY = _height/2 - textSize/2;\n'+'\n'+'      ctx.font = textSize+"px sans-serif";\n'+'      ctx.textBaseline = "top";\n'+'      ctx.fillStyle = "#fff";\n'+'      ctx.fillText(text, setX, setY);\n'+'    } else if(nowDisp === TEXT_VIEW) {\n'+'    \n'+'      textSize = 60;\n'+'      text = "MJPLAY";\n'+'      textWidth = textSize * text.length;\n'+'      textHeight = textSize;\n'+'      setX = _width/2 - textSize * text.length/2 + 15;\n'+'      setY = _height/2 - textSize/2;\n'+'\n'+'      ctx.font = textSize+"px sans-serif";\n'+'      ctx.textBaseline = "top";\n'+'      ctx.fillStyle = "#fff";\n'+'      ctx.fillText(text, setX, setY);\n'+'  }\n'+'  updateState = false;\n'+'  \n'+'    textData = ctx.getImageData(setX, setY, textWidth, textHeight).data;\n'+'  }\n'+'  var m, _i = 0;\n'+'  for (var x = 0; x < textWidth;x++) {\n'+'    for(var y = 0; y < textHeight; y++) {\n'+'      var idx  = (x+y*textWidth)*4;\n'+'      if(textData[idx] > 100) {\n'+'        _i++;\n'+'        m = particles[_i];\n'+'        \n'+'        var X = x + setX - m.px;\n'+'        var Y = y + setY - m.py;\n'+'        var T = Math.sqrt(X*X + Y*Y);\n'+'       \n'+'        var A = Math.atan2(Y, X);\n'+'        var C = Math.cos(A);\n'+'        var S = Math.sin(A);\n'+'\n'+'        m.x = m.px + C*T*0.15;\n'+'        m.y = m.py + S*T*0.15;\n'+'        setPixel(m.x+Math.random()*3-1.5, m.y+Math.random()*3-1.5);\n'+'        drawDotLine(m.x, m.y, m.px, m.py);\n'+'        m.ran += 0.0007;\n'+'        m.timeFlg = true;\n'+'        //m.center = true;\n'+'        m.px = m.x;\n'+'        m.py = m.y;\n'+'      }\n'+'    }\n'+'  }\n'+'  for(var i = _i+1, L = particles.length;i < L;i++) {\n'+'    m = particles[i];\n'+'    m.ran += 0.0007;\n'+'\n'+'    if(m.timeFlg) {\n'+'      X = (_width/2 + Math.cos(m.ran*180/Math.PI) * m.range) - m.px;\n'+'      Y = (_height/2 + Math.sin(m.ran*180/Math.PI) * m.range) - m.py;\n'+'\n'+'      T = Math.sqrt(X*X + Y*Y);\n'+'      A = Math.atan2(Y, X);\n'+'      C = Math.cos(A);\n'+'      S = Math.sin(A);\n'+'\n'+'     \n'+'      m.x = m.px + C*T*0.15;\n'+'      m.y = m.py + S*T*0.15;\n'+'      if(m.x < 1 && m.y < 1) m.timeFlg = false;\n'+'\n'+'    } else {\n'+'      m.x = _width /2 + Math.cos(m.ran*180/Math.PI) * m.range;\n'+'      m.y = _height/2 + Math.sin(m.ran*180/Math.PI) * m.range;\n'+'    }\n'+'\n'+'\n'+'    drawDotLine(m.x, m.y, m.px, m.py);\n'+'  //setPixel(m.x, m.y);\n'+'\n'+'    m.px = m.x;\n'+'    m.py = m.y;\n'+'  }\n'+'  cc.putImageData(bit, 0, 0);\n'+'  faidout();\n'+'  count++;\n'+'  if (count === FPS){\n'+'    var now = Date.now();\n'+'    var _f = 1000 / ((now - last) / count);\n'+'    count = 0;\n'+'    info.innerHTML = "FPS "+_f.toFixed(2) +"<br>CLOCK : " + dispType[nowDisp];\n'+'    last = Date.now();\n'+'  }\n'+'}\n'+'\n'+'function particle() {\n'+'  var ran = Math.random()*360*180/Math.PI;\n'+'  var range = _width/2.2 - Math.random()*16;\n'+'\n'+'  this.x = 0;\n'+'  this.y = 0;\n'+'  this.px = _width/2 + (Math.cos(ran) * range);\n'+'  this.py = _height/2 + (Math.sin(ran) * range);\n'+'  this.range = range;\n'+'  this.ran = ran;\n'+'}\n'+'\n'+'function timeDraw() {\n'+'  var date = new Date();\n'+'  var H = (date.getHours() > 9)? date.getHours() : "0"+date.getHours();\n'+'  var M = (date.getMinutes() > 9)? date.getMinutes() : "0"+date.getMinutes();\n'+'  var S = (date.getSeconds() > 9)? date.getSeconds() : "0"+date.getSeconds();\n'+'  var timeTxt = H+":"+M+":"+S;\n'+'\n'+'  return timeTxt;\n'+'}\n'+'\n'+'function mouseClick() {\n'+'  if (nowDisp === CLOCK_VIEW){\n'+'    nowDisp = TEXT_VIEW;\n'+'  } else {\n'+'    nowDisp = CLOCK_VIEW;\n'+'  }\n'+'  updateState = true;\n'+'  return false;\n'+'}\n'+'\n'+'function drawDotLine(x, y, px, py) {\n'+'  var _x = (x > px ? 1 : -1) * (x - px);\n'+'  var _y = (y > py ? 1 : -1) * (y - py);\n'+'  var sx = (x > px) ? -1 : 1;\n'+'  var sy = (y > py) ? -1 : 1;\n'+'  var r, i;\n'+'  if (_x < 3 && _y < 3) return;\n'+'  var l,s;\n'+'  if(_x < _y){\n'+'    l = _y;\n'+'    s = _x;\n'+'    r = s/l;\n'+'    for (i = 0;i < l;i++){\n'+'      setPixel(x + sx*i*r, y+sy*i);\n'+'    }\n'+'  } else {\n'+'    l = _x;\n'+'    s = _y;\n'+'    r = s/l;\n'+'    for (i = 0;i < l;i++){\n'+'      setPixel(x + sx*i, y+sy*i*r);\n'+'    }\n'+'  }\n'+'}\n'+'</script>';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' body{\n'+'background:#000;\n'+'color:#fff; \n'+'}\n'+'html{\n'+'  padding:0px;\n'+'  background: #000;\n'+'}\n'+'canvas{\n'+'  background: #000;\n'+'  position:absolute;\n'+'  top:32px;\n'+'  left:25%;\n'+'}\n'+'#info{\n'+'  position:absolute;\n'+'  top:5px;\n'+'  left:5px;\n'+'  color:#fff;\n'+'  font-size:small;\n'+'}';

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
