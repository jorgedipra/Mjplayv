var editboxHTML ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxCSS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var editboxJAS ='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';


var extraStuff ='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';


var defaultStuff =' <!DOCTYPE html>\n'+'\n'+'<html lang="en">\n'+'    <head>\n'+'        <meta charset="utf-8" />\n'+'        <title>PESTAÑAS</title>\n'+'    </head>\n'+'    <body>\n'+'    <div class="contenedor-tabs">\n'+'    	<span class="diana" id="una"></span>\n'+'			<div class="tab">\n'+'				<a href="#una" class="tab-e">Una</a>\n'+'				<div>\n'+'					<p> pestaña1</p>\n'+'				</div>\n'+'			</div>\n'+'			<span class="diana" id="dos"></span>\n'+'			<div class="tab">\n'+'				<a href="#dos" class="tab-e">Dos</a>\n'+'				<div>\n'+'					<p> pestaña2</p>\n'+'				</div>\n'+'			</div>\n'+'			<span class="diana" id="tres"></span>\n'+'			<div class="tab">\n'+'				<a href="#tres" class="tab-e">Tres</a>\n'+'				<div>\n'+'					<p> pestaña3</p>\n'+'       </div>\n'+'			</div>\n'+'			<span class="diana" id="cuatro"></span>\n'+'			<div class="tab">\n'+'				<a href="#cuatro" class="tab-e">Cuatro</a>\n'+'				<div>\n'+'					<p> pestaña4</p>\n'+'				</div>\n'+'			</div>\n'+'\n'+'	</div>    \n'+'\n'+'    </body>\n'+'</html>';

var st = '<style>';
var sf = '</style>';

var defaultcss = ' @import url(http://fonts.googleapis.com/css?family=Nunito:700|Carme);\n'+'*{\n'+'margin: 0;\n'+'  padding: 0;\n'+'  box-sizing: border-box;\n'+'}\n'+'.contenedor-tabs{\n'+'width:100%;\n'+'max-width:600px;\n'+'margin:50px auto 0;\n'+'position:relative;\n'+'}\n'+'span.diana{\n'+'position:fixed;\n'+'display:none;\n'+'}\n'+'.tab div{\n'+'background:#8AA9B8;\n'+'width:100%;\n'+'position:absolute;\n'+'top:1rem;\n'+'left:0;\n'+'padding:1rem;\n'+'font-size:1.2rem;\n'+'font-family:carme, sans-serif;\n'+'color:#fff;\n'+'line-height:1.2;\n'+'z-index:5;\n'+'opacity:0;\n'+'/*border-radius*/\n'+'-webkit-border-radius:0 5px 5px;\n'+'   -moz-border-radius:0 5px 5px;\n'+'        border-radius:0 5px 5px;\n'+'/*transition*/\n'+'-webkit-transition:all 1s ease;\n'+'   -moz-transition:all 1s ease;\n'+'     -o-transition:all 1s ease;\n'+'        transition:all 1s ease;\n'+'}\n'+'.tab .tab-e{\n'+'margin-top:-1rem;\n'+'float:left;\n'+'width:20%;\n'+'min-width:85px;\n'+'padding:5px;\n'+'background:#d5d5d5;\n'+'margin-right:3px;\n'+'text-decoration:none;\n'+'font-family:nunito, sans-serif;\n'+'font-size:1.3rem;\n'+'color:#dfdfdf;\n'+'text-align:center;\n'+'position:relative;\n'+'/*border-radius*/\n'+'-webkit-border-radius:5px 5px 0 0;\n'+'   -moz-border-radius:5px 5px 0 0;\n'+'        border-radius:5px 5px 0 0;\n'+'/*transition*/\n'+'-webkit-transition:all .5s ease;\n'+'   -moz-transition:all .5s ease;\n'+'     -o-transition:all .5s ease;\n'+'        transition:all .5s ease;\n'+'}\n'+'a.tab-e:hover{\n'+'color:#bbb;\n'+'}\n'+'p img{\n'+'float:left;\n'+'width:20%;\n'+'}\n'+'.diana:target + .tab div{\n'+'opacity:1;\n'+'background:#8AA9B8;\n'+'color:#fff;\n'+'}\n'+'.diana:target + .tab .tab-e{\n'+'background:#8AA9B8;\n'+'color:#f5f5f5;\n'+'/*box-shadow*/\n'+'-webkit-box-shadow:0 0 5px rgba(0, 0, 0, 0.2);\n'+'   -moz-box-shadow:0 0 5px rgba(0, 0, 0, 0.2);\n'+'        box-shadow:0 0 5px rgba(0, 0, 0, 0.2);\n'+'z-index:2;\n'+'}\n'+'@media screen and (max-width:370px){\n'+'.contenedor-tabs{\n'+'width:100%;\n'+'min-width:370px;\n'+'margin:2.5rem 0;\n'+'}\n'+'.tab div{\n'+'font-size:1rem;\n'+'line-height:1.1;\n'+'padding:1rem 5px;\n'+'width:100%;\n'+'}\n'+'.tab .tab-e{\n'+'font-size:1rem;\n'+'padding:.5rem 0;\n'+'text-align:center;\n'+'line-height:1.5rem;\n'+'width:25%;\n'+'margin-right:0;\n'+'}\n'+'}\n'+'';

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

