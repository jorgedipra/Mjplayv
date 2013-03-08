var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE html>\n'+'<html>\n'+'<head>\n'+'<meta charset="UTF-8" />\n'+'<title>Otoño</title>\n'+'<meta name="Description" content="Otoño Rosa,azul,rojo y verde al hacer click- javaScript-HTML5" />\n'+'<meta name="Keywords"  content="Otoño Rosa,azul,rojo y verde" />\n'+'</head>\n'+'<body>\n'+'<canvas id="canvas_main" width="600" height="600" ></canvas>\n'+'<canvas id="canvas_ground" width="600" height="600" ></canvas>\n'+'</body>\n'+'</html>\n'+'';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' ';

var jat = '<script>';
var jaf = '</script>';

var defaultjas =' var stageX = 0;\n'+'var stageY = 0;\n'+'\n'+'var mainCanvasContext;\n'+'var groundCanvasContext;\n'+'\n'+'var particles = new Array();\n'+'\n'+'var mouseX = 0;\n'+'var mouseY = 0;\n'+'\n'+'var windVelX = 0;\n'+'var windVelY = 0;\n'+'\n'+'var tornadoX = 0;\n'+'var tornadoZ = 1000;\n'+'\n'+'var TORNADO_LIFE = 300000;\n'+'var tornadoTime =-TORNADO_LIFE;\n'+'\n'+'\n'+'var G = 2;\n'+'\n'+'var AR = 0.8;\n'+'\n'+'\n'+'var image = new Image();\n'+'image.src = "http://jsrun.it/assets/1/Q/j/u/1QjuY.png";\n'+'var fLength = 0;\n'+'\n'+'\n'+'function Particle(){ };\n'+'Particle.prototype.x = 50;\n'+'Particle.prototype.y = 50;\n'+'Particle.prototype.z = 50;\n'+'Particle.prototype.velX = 50;\n'+'Particle.prototype.velY = 50;\n'+'Particle.prototype.velZ = 0;\n'+'Particle.prototype.rad = 0;\n'+'Particle.prototype.w = 0;\n'+'Particle.prototype.time = 0;\n'+'Particle.prototype.zrot = 0;\n'+'Particle.prototype.zrotW = 0;\n'+'\n'+'Particle.prototype.scale = function(){\n'+'\n'+'	return(fLength / (fLength + this.z));\n'+'}\n'+'\n'+'\n'+'\n'+'function initParitcle(initP){\n'+'	initP.w = 0.4*(0.5-Math.random());\n'+'	initP.rad = Math.PI*Math.random();\n'+'	initP.velY = Math.random()*3+7;\n'+'	initP.velX = (0.5-Math.random())*10;\n'+'	initP.zrot = Math.PI*Math.random();\n'+'	initP.zrotW = (0.5-Math.random())/20;\n'+'	initP.z = (0.5 - Math.random())*2*stageX;\n'+'	initP.time = 0;\n'+'	var scale = initP.scale();\n'+'	initP.y = -(stageY*0.5+image.height)/scale;\n'+'	initP.x = (0.5 - Math.random())*1.2*stageX/scale;\n'+'\n'+'\n'+'}\n'+'\n'+' function init( ){\n'+'	for(var i = 0 ; i < 1000 ; i++){\n'+'		var p = new Particle();\n'+'		initParitcle(p);\n'+'		p.y = -2*stageY*Math.random();\n'+'		particles.push(p);\n'+'	}\n'+' };\n'+'\n'+'\n'+'function sortParticle(p1,p2){\n'+'	return(p2.z-p1.z);\n'+'}\n'+'\n'+'function tornado(p){\n'+'	tornadoTime ++ ;\n'+'\n'+' 	if(tornadoTime<0){\n'+' 		return;\n'+' 	}else if(tornadoTime>TORNADO_LIFE){\n'+' 		tornadoTime = -TORNADO_LIFE*Math.random()*2;\n'+' 		tornadoX = stageX * (0.5-Math.random());\n'+' 		tornadoZ = stageX * (0.5-Math.random());\n'+' 	}\n'+'	var tx = tornadoX - p.x;\n'+'	var tz = tornadoZ - p.z;\n'+' 	var l = tx*tx + tz*tz;\n'+'	var s = Math.random()/10;\n'+' 	var vx = tz*s*Math.random()*4+tx*Math.random()*0.3;\n'+' 	var vz = -tx*s*Math.random()*4+tz*Math.random()*0.3;\n'+'	var t = 0;\n'+'	if( tornadoTime < TORNADO_LIFE / 2){\n'+'		t = tornadoTime;\n'+'	}else{\n'+'		t = TORNADO_LIFE - tornadoTime/1.2;\n'+'	}\n'+'	var w = Math.exp(-l/90000)*t/TORNADO_LIFE*2;\n'+'	\n'+'	p.velX+=vx*w;\n'+'	p.velZ+=vz*w;\n'+'	p.velY+=(0.5-Math.random())*2;\n'+'	\n'+'}\n'+'\n'+'function timerFunc( ){\n'+'	mainCanvasContext.setTransform(1,0, 0, 1, 0, 0 );\n'+'	groundCanvasContext.setTransform(1,0, 0, 1, 0, 0 );\n'+'	mainCanvasContext.clearRect(0,0,stageX,stageY);\n'+'	particles.sort(sortParticle);\n'+'	var yuragi = 2;\n'+'	for(var i = 0 ; i<particles.length; i++){\n'+'		var p = particles[i];\n'+'		var rad = p.rad;\n'+'		var scale = p.scale();\n'+'		var x = 0.5*stageX + p.x * scale;\n'+'		var y = 0.5*stageY +  p.y * scale;\n'+'		var s = Math.sin(p.zrot);\n'+'		var c = Math.cos(p.zrot);\n'+'			\n'+'		if(Math.abs(scale)<4){\n'+'			mainCanvasContext.setTransform(Math.cos(rad), Math.sin(rad), -Math.sin(rad), Math.cos(rad), x+image.width*0.5, y+image.height*0.5);\n'+'		\n'+'\n'+'\n'+'			mainCanvasContext.scale(scale*s,scale*c);\n'+'			mainCanvasContext.drawImage( image,\n'+'							 0, 0,\n'+'							 image.width, image.height ,\n'+'							 -image.width*0.5,-image.height*0.5,\n'+'							 image.width,image.height\n'+'			);\n'+'		}\n'+'		p.time ++;\n'+'		tornado(p);\n'+'		p.velY += (G + (0.5-Math.random())*yuragi);\n'+'		p.velY *= AR*(1+Math.random()/10);\n'+'		p.velX += (Math.random()-0.5)*yuragi;\n'+'		if(Math.abs(p.velX)>yuragi){\n'+'			p.velX *= AR*(1+Math.random()/10);\n'+'		}\n'+'		p.velZ += (Math.random()-0.5)*yuragi;\n'+'		if(Math.abs(p.velZ)>yuragi){\n'+'			p.velZ *= AR*(1+Math.random()/10);\n'+'		}\n'+'		p.x += p.velX + windVelX;\n'+'		p.y += p.velY + windVelY;\n'+'		p.z += p.velZ ;\n'+'		p.rad += p.w;\n'+'		p.zrot += p.zrotW;\n'+'\n'+'		if(p.rad > Math.PI){\n'+'			p.rad = -Math.PI;\n'+'		}else if(p.rad < -Math.PI){\n'+'			p.rad = Math.PI;\n'+'		}\n'+'	        \n'+'		var ts = image.width*scale;\n'+'		if(p.y>stageY*0.5||p.x<-stageX/scale||p.x>stageX/scale||p.z < -stageX){\n'+'			if(p.y > stageY*0.5){\n'+'				groundCanvasContext.setTransform(Math.cos(rad), Math.sin(rad), -Math.sin(rad), Math.cos(rad), x+image.width*0.5, y+image.height*0.5 );\n'+'		\n'+'\n'+'\n'+'				groundCanvasContext.scale(scale*s,scale*c);\n'+'				groundCanvasContext.drawImage(image,\n'+'								0, 0,\n'+'								image.width, image.height ,\n'+'								-image.width*0.5,-image.height*0.5,\n'+'								image.width,image.height\n'+'					);\n'+'			}\n'+'			\n'+'			initParitcle(p);\n'+'		}\n'+'\n'+'\n'+'	}\n'+'	if(Math.abs(windVelY)<5){\n'+'		windVelY+=(0.5-Math.random())/10;\n'+'	}\n'+'	if(Math.abs(windVelX<5)){\n'+'		windVelX+=(0.5-Math.random())/10;\n'+'	}\n'+'\n'+'\n'+'\n'+'}\n'+'\n'+'function onClick(e){\n'+'	tornadoTime = 0;\n'+'	var x = e.pageX;\n'+'	var y = e.pageY;\n'+'	if(e.pageY <=0.5*stageY){\n'+'		y=0.5*stageY;\n'+'	}\n'+'	var z = 0.5*stageY*fLength/(y-0.5*stageY) - fLength;\n'+'	if(z > stageX){\n'+'		z = stageX;\n'+'	}\n'+'\n'+'	tornadoZ = z;\n'+'	var s = fLength / (fLength + z);\n'+'	tornadoX = (x-stageX*0.5)/s;     \n'+'    if(image.src=="http://jsrun.it/assets/1/Q/j/u/1QjuY.png"){\n'+'        image.src="http://jsrun.it/assets/l/g/f/R/lgfRc.gif";\n'+'    }else if(image.src=="http://jsrun.it/assets/l/g/f/R/lgfRc.gif"){\n'+'        image.src="http://jsrun.it/assets/b/9/R/b/b9Rbs.png";\n'+'    }else if(image.src=="http://jsrun.it/assets/b/9/R/b/b9Rbs.png"){\n'+'        image.src="http://jsrun.it/assets/f/r/E/T/frET3.gif";\n'+'    }else{\n'+'        image.src="http://jsrun.it/assets/1/Q/j/u/1QjuY.png";\n'+'    }\n'+'}\n'+'\n'+'\n'+'window.onload = function(){\n'+'	var timer = setInterval(timerFunc,30);\n'+'	var canvas = window.document.getElementById("canvas_main");\n'+'	mainCanvasContext = canvas.getContext("2d");\n'+'	canvas.width = window.innerWidth;\n'+'	canvas.height = window.innerHeight;\n'+'	var groundCanvas = window.document.getElementById("canvas_ground");\n'+'	groundCanvasContext = groundCanvas.getContext("2d");\n'+'	stageX = canvas.width;\n'+'	stageY = canvas.height;\n'+'	groundCanvas.width = stageX;\n'+'	groundCanvas.height= stageY;\n'+'	fLength = stageX/4;\n'+'	init();\n'+'	canvas.onmousemove = function(e){\n'+'		mouseX=e.clientX;\n'+'		mouseY=e.clientY;\n'+'		windVelX = (0.5 - mouseX / stageX)*20;\n'+'		windVelY = (0.6 - mouseY / stageY)*15;\n'+'	}\n'+'	    \n'+'	canvas.addEventListener("click",onClick,true);\n'+'}\n'+'';

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

