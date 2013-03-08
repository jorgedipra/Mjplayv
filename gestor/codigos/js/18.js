var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE HTML>\n'+'<html>\n'+'  <head>\n'+'    <title>Snake</title>\n'+'  </head>\n'+'  <body onload="checkSupported();">\n'+'<center>\n'+'    <div id="bar">\n'+'      <span id="logo">SNAKE</span>\n'+'      <div id="score_container">\n'+'        Score:\n'+'        <span id="score">0</span>\n'+'      </div>\n'+'      <div id="play_menu">\n'+'        <button onclick="pause();document.getElementById("play_menu").style.display="none";document.getElementById("pause_menu").style.display="block";">Pause</button>\n'+'      </div>\n'+'      <div id="pause_menu">\n'+'        <button onclick="restart();document.getElementById("play_menu").style.display="block";document.getElementById("pause_menu").style.display="none";">Restart</button>\n'+'        <button onclick="play();document.getElementById("play_menu").style.display="block";document.getElementById("pause_menu").style.display="none";">Resume</button>\n'+'      </div>\n'+'      <div id="restart_menu">\n'+'        <button onclick="restart();document.getElementById("play_menu").style.display="block";document.getElementById("restart_menu").style.display="none";">Restart</button>\n'+'      </div>\n'+'    </div>\n'+'    <canvas height="300" id="canvas" width="400">    </canvas>\n'+'</center>\n'+'  </body>\n'+'</html>';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' html, body div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a abbr, acronym, address, big, cite, code, del, dfn, em, font, img, ins, kdb, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td {\n'+'  margin: 0;\n'+'  padding: 0;\n'+'  font-size: 100%;\n'+'  vertical-align: baseline;\n'+'  border: 0;\n'+'  outline: 0;\n'+'  background: transparent; }\n'+'\n'+'ol, ul {\n'+'  list-style: none; }\n'+'\n'+'blockquote, q {\n'+'  quotes: none; }\n'+'\n'+'a, a:hover {\n'+'  text-decoration: none; }\n'+'\n'+'table {\n'+'  border-collapse: collapse;\n'+'  border-spacing: none; }\n'+'\n'+'body {\n'+'  background: #111;\n'+'  color: white;\n'+'  font-family: helvetica; }\n'+'  body canvas {\n'+'    border: solid 1px red; }\n'+'  body #bar {\n'+'    width: 400px; }\n'+'  body #logo {\n'+'    font-size: 1.4em; }\n'+'  body #score_container {\n'+'    float: right;\n'+'    display: inline; }\n'+'  body #pause_menu, body #restart_menu {\n'+'    display: none; }';

var jat = '<script>';
var jaf = '</script>';

var defaultjas =' function checkSupported() {\n'+'  canvas = document.getElementById("canvas");\n'+'  if (canvas.getContext){\n'+'    ctx = canvas.getContext("2d");\n'+'    this.gridSize = 10;\n'+'    start();\n'+'  } else {\n'+'    alert("Were sorry, but your browser does not support the canvas tag. Please use any web browser other than Internet Explorer.");\n'+'  }\n'+'}\n'+'\n'+'function start(){\n'+'  ctx.clearRect(0,0, canvas.width, canvas.height);\n'+'  this.currentPosition = {"x":50, "y":50};\n'+'  snakeBody = [];\n'+'  snakeLength = 3;\n'+'  updateScore();\n'+'  makeFoodItem();\n'+'  drawSnake();\n'+'  direction = "right";\n'+'  play();  \n'+'}\n'+'\n'+'function restart(){\n'+'  pause();\n'+'  start();\n'+'}\n'+'\n'+'function pause(){\n'+'  clearInterval(interval);\n'+'  allowPressKeys = false;\n'+'}\n'+'\n'+'function play(){\n'+'  interval = setInterval(moveSnake,100);\n'+'  allowPressKeys = true;\n'+'}\n'+'\n'+'function drawSnake() {\n'+'  if (snakeBody.some(hasEatenItself)) {\n'+'    gameOver();\n'+'    return false;\n'+'  }\n'+'  snakeBody.push([currentPosition["x"], currentPosition["y"]]);\n'+'  ctx.fillStyle = "rgb(200,0,0)";\n'+'  ctx.fillRect(currentPosition["x"], currentPosition["y"], gridSize, gridSize);\n'+'  if (snakeBody.length > snakeLength) {\n'+'    var itemToRemove = snakeBody.shift();\n'+'    ctx.clearRect(itemToRemove[0], itemToRemove[1], gridSize, gridSize);\n'+'  }  \n'+'  if (currentPosition["x"] == suggestedPoint[0] && currentPosition["y"] == suggestedPoint[1]) {\n'+'    makeFoodItem();\n'+'    snakeLength += 1;\n'+'    updateScore();\n'+'  }\n'+'}\n'+'\n'+'function leftPosition(){\n'+' return currentPosition["x"] - gridSize;  \n'+'}\n'+'\n'+'function rightPosition(){\n'+'  return currentPosition["x"] + gridSize;\n'+'}\n'+'\n'+'function upPosition(){\n'+'  return currentPosition["y"] - gridSize;  \n'+'}\n'+'\n'+'function downPosition(){\n'+'  return currentPosition["y"] + gridSize;\n'+'}\n'+'\n'+'function whichWayToGo(axisType){  \n'+'  if (axisType=="x") {\n'+'    a = (currentPosition["x"] > canvas.width / 2) ? moveLeft() : moveRight();\n'+'  } else {\n'+'    a = (currentPosition["y"] > canvas.height / 2) ? moveUp() : moveDown();\n'+'  }\n'+'}\n'+'\n'+'function moveUp(){\n'+'  if (upPosition() >= 0) {\n'+'    executeMove("up", "y", upPosition());\n'+'  } else {\n'+'    whichWayToGo("x");\n'+'  }\n'+'}\n'+'\n'+'function moveDown(){\n'+'  if (downPosition() < canvas.height) {\n'+'    executeMove("down", "y", downPosition());    \n'+'  } else {\n'+'    whichWayToGo("x");\n'+'  }\n'+'}\n'+'\n'+'function moveLeft(){\n'+'  if (leftPosition() >= 0) {\n'+'    executeMove("left", "x", leftPosition());\n'+'  } else {\n'+'    whichWayToGo("y");\n'+'  }\n'+'}\n'+'\n'+'function moveRight(){\n'+'  if (rightPosition() < canvas.width) {\n'+'    executeMove("right", "x", rightPosition());\n'+'  } else {\n'+'    whichWayToGo("y");\n'+'  }\n'+'}\n'+'\n'+'function executeMove(dirValue, axisType, axisValue) {\n'+'  direction = dirValue;\n'+'  currentPosition[axisType] = axisValue;\n'+'  drawSnake();\n'+'}\n'+'\n'+'function makeFoodItem(){\n'+'  suggestedPoint = [Math.floor(Math.random()*(canvas.width/gridSize))*gridSize, Math.floor(Math.random()*(canvas.height/gridSize))*gridSize];\n'+'  if (snakeBody.some(hasPoint)) {\n'+'    makeFoodItem();\n'+'  } else {\n'+'    ctx.fillStyle = "rgb(10,100,0)";\n'+'    ctx.fillRect(suggestedPoint[0], suggestedPoint[1], gridSize, gridSize);\n'+'  };\n'+'}\n'+'\n'+'function hasPoint(element, index, array) {\n'+'  return (element[0] == suggestedPoint[0] && element[1] == suggestedPoint[1]);\n'+'}\n'+'\n'+'function hasEatenItself(element, index, array) {\n'+'  return (element[0] == currentPosition["x"] && element[1] == currentPosition["y"]);  \n'+'}\n'+'\n'+'function gameOver(){\n'+'  var score = (snakeLength - 3)*10;\n'+'  pause();\n'+'  alert("Game Over. Your score was "+ score);\n'+'  ctx.clearRect(0,0, canvas.width, canvas.height);\n'+'  document.getElementById("play_menu").style.display="none";\n'+'  document.getElementById("restart_menu").style.display="block";\n'+'}\n'+'\n'+'function updateScore(){\n'+'  var score = (snakeLength - 3)*10\n'+'  document.getElementById("score").innerText = score;\n'+'}\n'+'\n'+'document.onkeydown = function(event) {\n'+'  if (!allowPressKeys){\n'+'    return null;\n'+'  }\n'+'  var keyCode; \n'+'  if(event == null)\n'+'  {\n'+'    keyCode = window.event.keyCode; \n'+'  }\n'+'  else \n'+'  {\n'+'    keyCode = event.keyCode; \n'+'  }\n'+' \n'+'  switch(keyCode)\n'+'  {\n'+'    case 37:\n'+'      if (direction != "right"){\n'+'        moveLeft();\n'+'      }\n'+'      break;\n'+'     \n'+'    case 38:\n'+'      if (direction != "down"){\n'+'        moveUp();\n'+'      }\n'+'      break; \n'+'      \n'+'    case 39:\n'+'      if (direction != "left"){\n'+'        moveRight();\n'+'      }\n'+'      break; \n'+'    \n'+'    case 40:\n'+'      if (direction != "up"){\n'+'        moveDown();\n'+'      }\n'+'      break; \n'+'    \n'+'    default: \n'+'      break; \n'+'  } \n'+'}\n'+'\n'+'function moveSnake(){\n'+'  switch(direction){\n'+'    case "up":\n'+'      moveUp();\n'+'      break;\n'+'\n'+'    case "down":\n'+'      moveDown();\n'+'      break;\n'+'      \n'+'    case "left":\n'+'      moveLeft();\n'+'      break;\n'+'\n'+'    case "right":\n'+'      moveRight();\n'+'      break;\n'+'  }\n'+'}';

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

