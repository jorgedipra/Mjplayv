var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE html>\n'+'<html>\n'+'<head>\n'+'<meta charset="UTF-8" />\n'+'<title>Colita de gato</title>\n'+'</head>\n'+'<body>\n'+'<div class="bone">\n'+'  <div class="bone">\n'+'   <div class="bone">\n'+'      <div class="bone">\n'+'        <div class="bone">\n'+'          <div class="bone">\n'+'            <div class="bone">\n'+'            </div>\n'+'          </div>\n'+'        </div>\n'+'      </div>\n'+'    </div>\n'+'  </div>\n'+'</div>\n'+'<p>Miau</p>\n'+'<label><input type="checkbox" onclick="document.body.className = this.checked ? &#039;x-ray&#039; : &#039;&#039;">mostrar hueso</label>\n'+'</body>\n'+'</html>';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' body{\n'+'color:#fff;\n'+'background:#432;\n'+'}\n'+'.bone{\n'+'background-image:url(/imagenes/fondos/mas/Ajdcm.png);\n'+'background-repeat:no-repeat;  \n'+'height:80px;\n'+'left:50%;\n'+'margin:-20px 0 0 -20px;\n'+'position:absolute;\n'+'top:-25px;\n'+'width:40px;\n'+'-webkit-transform-origin:center 20px;\n'+'-moz-transform-origin:center 20px;\n'+'-ms-transform-origin:center 20px;\n'+'-o-transform-origin:center 20px;\n'+'transform-origin:center 20px;\n'+'-webkit-animation:swing 1s cubic-bezier(0.8,0,0.2,1) infinite alternate;\n'+'-moz-animation:swing 1s cubic-bezier(0.8,0,0.2,1) infinite alternate;\n'+'-ms-animation:swing 1s cubic-bezier(0.8,0,0.2,1) infinite alternate;\n'+'-o-animation:swing 1s cubic-bezier(0.8,0,0.2,1) infinite alternate;\n'+'animation:swing 1s cubic-bezier(0.8,0,0.2,1) infinite alternate;\n'+'}\n'+'.bone > .bone{\n'+'left:50%;\n'+'top:100%;\n'+'margin-top:-40px;\n'+'}\n'+'.bone > .bone{\n'+'background-position:0px -80px;\n'+'}\n'+'.bone > .bone > .bone{\n'+'background-position:0px -160px;\n'+'}\n'+'.bone > .bone > .bone  > .bone{\n'+'background-position:0px -240px;\n'+'}\n'+'.bone > .bone > .bone  > .bone > .bone{\n'+'background-position:0px -320px;\n'+'}\n'+'.bone > .bone > .bone  > .bone > .bone > .bone{\n'+'background-position:0px -400px;\n'+'}\n'+'.bone > .bone > .bone  > .bone > .bone > .bone > .bone{\n'+'background-position:0px -480px;\n'+'}\n'+'@-moz-keyframes swing{\n'+'0% { -moz-transform:rotate(-10deg) }\n'+'  100% { -moz-transform:rotate(10deg) }\n'+'}\n'+'@-webkit-keyframes swing{\n'+'0% { -webkit-transform:rotate(-10deg) }\n'+'  100% { -webkit-transform:rotate(10deg) }\n'+'}\n'+'body.x-ray .bone{\n'+'background:none;  \n'+'-webkit-box-shadow:inset 0 0 2px 2px #fff;\n'+'-moz-box-shadow:inset 0 0 2px 2px #fff;\n'+'box-shadow:inset 0 0 2px 2px #fff;\n'+'}\n'+'body.x-ray .bone:before,\n'+'body.x-ray .bone:after{\n'+'content:"";\n'+'display:block;\n'+'position:absolute;\n'+'left:50%;\n'+'}\n'+'body.x-ray .bone:before{\n'+'border-radius:10px;\n'+'background:rgba(255,255,255,0.2);  \n'+'height:20px;\n'+'margin:-10px 0 0 -10px;\n'+'top:20px;\n'+'width:20px;\n'+'-webkit-border-radius:10px;\n'+'-moz-border-radius:10px;\n'+'}\n'+'body.x-ray .bone:after{\n'+'border-radius:5px;\n'+'background:rgba(255,255,255,0.3); \n'+'bottom:20px;\n'+'height:10px;\n'+'margin:0 0 -5px -5px;\n'+'width:10px;\n'+'-webkit-border-radius:5px;\n'+'-moz-border-radius:5px;\n'+'}';

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

