var editboxHTML =
'<html class="expand close">' +
'<head>' +
'<style type="text/css">' +
'.expand { width: 100%; height: 100%; }' +
'.close { border: none; margin: 0px; padding: 0px; }' +
'html,body { overflow: hidden; }' +
'<\/style>' +
'<\/head>' +
'<body class="expand close" onload="document.f.code.focus(); document.f.code.select();">' +
'<form class="expand close" name="f">' +
'<input type="button" value="seleccionar todo" onClick="javascript:this.form.code.focus();this.form.code.select();" style="background-color: #000000; color:#4aed05; font:bold 10px verdana;">' +'<input type="button" value="Limpiar" onClick="javascript:limpiar();" style="background-color: #000000; color:#4aed05; font:bold 10px verdana;">' +
'<textarea  id="input" class="expand close" style="resize: none; background-color: #000000; color:#4aed05; height: 94%;" name="code" wrap="hard" spellcheck="false">' +
'<\/textarea>' +
'<\/form>' +
'<\/body>' +
'<\/html>' +
'<script type="text/javascript" src="/javascript/editor/content-assist.js"></script>' +
'<link rel="stylesheet" type="text/css" href="/css/editor/content-assist.css" media="all" />' +
'<script type="text/javascript">' +
'	var words = "a></a>,abbr></abbr>,address></address>,area></area>,article></article>,aside></aside>,audio></audio>,b></b>,bb></bb>,base></base>,bdo></bdo>,blockquote></blockquote>,body></body>,br>,button></button>,canvas></canvas>,command></command>,caption></caption>,cite></cite>,code></code>,col></col>,colgroup></colgroup>,datagrid></datagrid>,datalist></datalist>,details></details>,dialog></dialog>,dd></dd>,del></del>,div></div>,dfn></dfn>,dl></dl>,dt></dt>,embed></embed>,em></em>,figcaption></figcaption>,figure></figure>,footer></footer>,fieldset></fieldset>,form></form>,header></header>,hgroup></hgroup>,h1></h1>,h2></h2>,h3></h3>,h4></h4>,h5></h5>,h6></h6>,head></head>,hr></hr>,html></html>,i></i>,iframe></iframe>,img></img>,input></input>,ins></ins>,keygen></keygen>,kbd></kbd>,label></label>,legend></legend>,li></li>,link></link>,mark></mark>,menu></menu>,meter></meter>,map></map>,meta></meta>,nav></nav>,noscript></noscript>,output></output>,object></object>,ol></ol>,optgroup></optgroup>,option></option>,progress></progress>,p></p>,pre></pre>,param></param>,q></q>,rp></rp>,rt></rt>,ruby></ruby>,section></section>,source></source>,summary></summary>,samp></samp>,select></select>,small></small>,span></span>,strong></strong>,style></style>,sub></sub>,sup></sup>,table></table>,tbody></tbody>,td></td>,textarea></textarea>,tfoot></tfoot>,th></th>,thead></thead>,time></time>,title></title>,tr></tr>,u></u>,ul></ul>,var></var>,video></video>,rel=,src=,true,class=,id=,href=,onclick=,alt=,title=,method=,name=,url,maxlength,size,placeholder,width,height,javascript,tab,frameborder,type,lang,DOCTYPE html>,doctype html>,atl,item,target=,_blank,_self,_parent,_top,tabindex,accesskey,controls,autoplay,autobuffer,loop,value,onMouseOver,onMouseOver,this,onLoad,javascript:,script>,".split(",");' +
'			new BasicContentAssist(document.getElementById("input"), words, {visible_items: 5});' +
'			new BasicContentAssist(document.getElementById("str"), words, {visible_items: 7});' +
'function limpiar()' +
'{' +
'var statusConfirm = confirm("¿Desea limpiar el HTML?"); ' +
'            if (statusConfirm == true) ' +
'            { ' +
'                document.f.code.value="";' +
'            } ' +
'            ' +
'}' +
'</script>';

var editboxCSS = 
'<html class="expand close">' +
'<head>' +
'<\/head>' +
'<body class="expand close" onload="document.f.code.focus(); document.f.code.select();">' +
'<form class="expand close" name="f">' +
'<input type="button" value="seleccionar todo" onClick="javascript:this.form.code.focus();this.form.code.select();" style="background-color: #000000; color:#4aed05; font:bold 10px verdana;">'+'<input type="button" value="Limpiar" onClick="javascript:limpiar();" style="background-color: #000000; color:#4aed05; font:bold 10px verdana;">' +
'<textarea  id="code" class="expand close"  name="code" wrap="hard" spellcheck="false" style="">' +
'</textarea>' +
'</form>' +
'</body>' +
'</html>'+
'<script type="text/javascript" src="/javascript/editor/content-assist.js"></script> '+
'<link rel="stylesheet" type="text/css" href="/css/editor/content-assist.css" media="all" />'+
'<link rel="stylesheet" href="/javascript/editor/edit.css">'+
'<script src="/javascript/editor/editccs.js"></script>';

var editboxJAS = 
'<html class="expand close">' +
'<head>' +
'<style type="text/css">' +
'.expand { width: 100%; height: 100%; }' +
'.close { border: none; margin: 0px; padding: 0px; }' +
'html,body { overflow: hidden; }' +
'<\/style>' +
'<\/head>' +
'<body class="expand close" onload="document.f.code.focus(); document.f.code.select();">' +
'<form class="expand close" name="f">' +
'<input type="button" value="seleccionar todo" onClick="javascript:this.form.code.focus();this.form.code.select();" style="background-color: #000000; color:#4aed05; font:bold 10px verdana;">'+'<input type="button" value="Limpiar" onClick="javascript:limpiar();" style="background-color: #000000; color:#4aed05; font:bold 10px verdana;">' +
'<textarea  id="input" class="expand close" style="resize: none; background-color: #000000; color:#4aed05; height: 94%;" name="code" wrap="hard" spellcheck="false">' +
'<\/textarea>' +
'<\/form>' +
'<\/body>' +
'<\/html>' +
'<script type="text/javascript" src="/javascript/editor/content-assist.js"></script>' +
'<link rel="stylesheet" type="text/css" href="/css/editor/content-assist.css" media="all" />' +
'<script type="text/javascript">' +
'			var words = "var,function,if(){},else{},for(){},alert();,write();,close();,length,getElementById():,getElementsByTagName();,document,getElementById();,style,display,setTimeout();,update,false,true,switch ( ) { case 1:  break;  default:  ;},case,break;,default:,while (){},do {}while();,return,get,new,date,set,Array(),Math,abs(-2),sin(Math.PI),cos(Math.PI), tan(Math.PI),asin(1),acos(1),atan(1),exp(Math.E),log(Math.E),ceil(),floor(),round(),min(),max(),pow(),sqrt(),random(),toUpperCase();,toLowerCase();,charAt();,substring();,value,options,options[],text,selectedIndex,checked,this,control,bgColor,focus();,open();,getDate(),getMonth(),getYear(),getHours(),getMinutes(),getSeconds(),appName,appVersion,cookieEnabled,platform,plugins,toolbar,location,directories,status,menubar,scrollbars,resizable,width,height,window,availHeight,availWidth,colorDepth,history,back(),forward(),go(),vector[],".split(",");' +
'			new BasicContentAssist(document.getElementById("input"), words, {visible_items: 5});' +
'			new BasicContentAssist(document.getElementById("str"), words, {visible_items: 7});' +
'function limpiar()' +
'{' +
'var statusConfirm = confirm("¿Desea limpiar el JavaScript?"); ' +
'            if (statusConfirm == true) ' +
'            { ' +
'                document.f.code.value="";' +
'            } ' +
'            ' +
'}' +
'</script>';


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


var defaultStuff = '<!DOCTYPE html>\n'+
'<html lang="es">\n'+
'<head>\n'+
'<meta charset="utf-8" />\n'+
'<title></title>\n'+
'</head>\n'+
'<body>\n'+
'<a class="buton" onclick="myFunction()">  Editor HTML-CSS-Javascript (MJPlay-V)</a>\n'+
'</body>\n'+
'</html>';

var st = '<style>';
var sf = '</style>';

var defaultcss = 'body{\n'+
  'background: url(/imagenes/fondos/dark_wood.png) center fixed;\n'+
  'color:#fff; \n'+
'}\n'+
'a,\n'+
'.buton{ \n'+
'color:white; \n'+
'font-size: 35px; \n'+
'}';

var jat = '<script>';
var jaf = '</script>';

var defaultjas = 'function myFunction()\n'+
'{\n'+
'alert("MJ Play-V");\n'+
'}';

var old = '';
var oldcss = '';
var oldjas = '';
                        
function init()
{
  window.editbox.document.write(editboxHTML);
  window.editbox.document.close();
  window.editbox.document.f.code.value = defaultStuff;
  update();
}

function initcss()
{
  window.editboxcss.document.write( editboxCSS );
  window.editboxcss.document.close();
  window.editboxcss.document.f.code.value = defaultcss;
  update();
}

function initjas()
{
  window.editboxjas.document.write( editboxJAS );
  window.editboxjas.document.close();
  window.editboxjas.document.f.code.value = defaultjas;
  update();
}

function update()
{
  var textarea = window.editbox.document.f.code; 
  var textareacss = window.editboxcss.document.f.code;
  var textareajas = window.editboxjas.document.f.code;
  
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