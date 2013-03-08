
<?php
$thtml=$_POST['thtml']; 
$tcss=$_POST['tcss']; 
$tscript=$_POST['tscript']; 
$autor=$_POST['autor'];
$titulo=$_POST['titulo'];

$dbhost = "mysql.hostinger.es";
$dbuser = "u515592478_root";
$dbpassword = "tereamolaura";
$dbname = "u515592478_codigo";

$pres = $dire.$_POST['namepre'];
$poss = $dire.$_POST['namepos'];

$id = mysql_connect($dbhost, $dbuser, $dbpassword) or die("error en coneccion: " . mysql_error()); 
mysql_select_db($dbname, $id); 

    $query ="INSERT INTO codigos(pre,pos,name,html,css,script,autor) values($pres,$poss,'$titulo','$thtml','$tcss','$tscript','$autor')";
    $result = mysql_query($query);




$boxhtml='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';

$boxcss='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';

$boxja='<html class="expand close"> <head> <style type="text/css"> .expand { width: 100%; height: 100%; } .close { border: none; margin: 0px; padding: 0px; } html,body { overflow: hidden; } </style> </head> <body class="expand close" onload="document.f.ta.focus(); document.f.ta.select();"> <form class="expand close" name="f"><textarea class="expand close" style="resize: none; background-color: #000000; color:#4aed05;" name="ta" wrap="hard" spellcheck="false"></textarea></form></body></html>';

$extra='<iframe scrolling="no" src="/gestor/comparir.html" frameborder="0" height="670" width="360"></iframe><style>iframe{position: absolute;right:10px;top:0; margin-top: 0;}</style>';

$vari=$_POST['vari'];
$n = $_POST['n'];
$dire="/gestor/codigos/html/";  
$tag=".html";

$pre = $dire.$_POST['namepre'].$tag;
$pos = $dire.$_POST['namepos'].$tag;
 

$content = $_POST['html'];
$textohtml = str_replace ("'","\"",$content);
$textohtml = rawurlencode($textohtml);
$textohtml = rawurldecode(str_replace("%0D%0A","$n",$textohtml));

$contentc = $_POST['css'];
$textocss = str_replace ("'","\"",$contentc);

$textocss = rawurlencode($textocss);
$textocss = rawurldecode(str_replace("%0D%0A","$n",$textocss));

$contentj = $_POST['js'];
$textojs = str_replace ("'","\"",$contentj);
$textojs = rawurlencode($textojs);
$textojs = rawurldecode(str_replace("%0D%0A","$n",$textojs));


$archivo=$_POST['namep'];
$htmljs="$archivo.js";
$htmljsdire="codigos/js/$htmljs";
$namejs=$htmljsdire;
$fichero_salida=$namejs;
$tabla="var editboxHTML ='".$boxhtml."';


var editboxCSS ='".$boxcss."';


var editboxJAS ='".$boxja."';


var extraStuff ='".$extra."';


var defaultStuff ='".$textohtml."';

var st = '<style>';
var sf = '</style>';

var defaultcss = '".$textocss."';

var jat = '<script>';
var jaf = '</script>';

var defaultjas ='".$textojs."';

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
    
    if ($vari)
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

";

$fp=fopen($fichero_salida,w);
fwrite($fp,$tabla);
fclose($fp);

if(!file_exists($fichero_salida)) die("Error en la Generacion del Archivo");
else{
 
$java="javascript:'';";
$tab1="'tab_01','panel_01'";
$tab2="'tab_02','panel_02'";
$tab3="'tab_03','panel_03'";
$tab4="'tab_04','panel_04'";


$html="$archivo.html";
$htmldire="codigos/html/$html";
$fichero_salida2=$htmldire;;
$tabla2='<!DOCTYPE html>
<html>
<head>
<title>MJcodigoplay-V</title>
    <link rel="shortcut icon" href="/imagenes/icono.ico" />
   <meta charset="utf-8" />
   <meta property="og:title" content="'.$titulo.'" />
   <meta property="og:type" content="Codigo Libre con contenido:'.$thtml.'-'.$tcss.'-'.$tscript.'" />
   <meta property="og:url" content="http://mjplay-v.16mb.com/gestor/codigos/html/'.$archivo.'.html"/>
   <meta property="og:image" content="http://mjplay-v.16mb.com/gestor/img/codigo/'.$archivo.'.JPG" />
   <meta property="og:site_name" content="mjplay-v.16mb.com" />
    <script src="/gestor/codigos/js/'.$archivo.'.js"></script>   
   <link href="/css/editor/editor.css" rel="stylesheet" />
    <script src="http://code.jquery.com/jquery-latest.js"></script>   
    <script type="text/javascript" src="http://contadores.miarroba.es/ver.php?id=667398"></script>
    <script type="text/javascript" src="http://w.sharethis.com/button/buttons.js"></script>
   <script type="text/javascript">stLight.options({publisher: "ur-7a922a27-15d0-1169-8857-d1e91165ecd0"});</script>
</head>
     
    <article>

       <div class="browser1">
	   <div class="top-bar1">    
	       <span class="tab1">
	           <img src="/imagenes/principal/3YT7KIl.png" alt="" />
	            '.$titulo.'
	       </span>
	   </div><!-- #top-bar -->  
	   <div class="center-bar1">
     <form id="search" action="http://www.google.com/search" method="get" name="prikitiw">
       <span class="url"><span>
        <input maxlength="255" size="100" name="q" style=" border:none;top:0; margin-top:-2px;"             
        placeholder="http://mjplay-v.16mb.com/AUTOR:'.$autor.'"/></span>                     

 </form> 
			   </span> 
	   </div><!-- #center-bar -->
	   <div class="window1">
        <iframe width="100%" height="700px" name="dynamicframe" src="'.$java.'"></iframe>
    	</div>
	</div><!-- #browser -->
</div>	  
     <section class="clor">
      <ul>
<li><span class="st_facebook_hcount" displayText="Facebook"></span></li>
<li><span class="st_googleplus_hcount" displayText="Google +"></span></li>
<div class="addthis_toolbox addthis_default_style ">
<li><a class="addthis_button_facebook_like" fb:like:layout="button_count"></a></li>
<li><a href="https://twitter.com/share" class="twitter-share-button" data-via="MJPlayV" data-lang="es" data-related="MJPlayV">Twittear</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script></a></li>
<li><span class="st_plusone_hcount" displayText="Google +1"></span> </li>
</div>
<script type="text/javascript" src="http://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-4fb72c101636a284"></script>
       </ul>
 </section>   
 <section class="iredi">
  <a href="/recursos/editor-all.html"><img src="/imagenes/Esescri/editorALL.png" alt="" width="20px" height="20px" />
   <b>Editor con Herramientas</b> 
    <img src="/imagenes/Esescri/editorALL.png" alt="" width="20px" height="20px" /></a>
</section>
  <section class="masno">
        <a class="" href="'.$pre.'#Mjplay-V">Preview<<</a></li>
        <a class="" href="/codigolibre/codigo-libre/">Todos los codigos</a></li>  
        <a class="" href="'.$pos.'#Mjplay-V">Nex>></a></li>
    </section>
   <section>
    <div class="lb"  id="toolbar" ><a href="#pop" id="plop"><p><span></span><span></span><span></span></p></a></div>
<div class="nb"  id="newbar" ><a href="#plop" id="plopnew"><p>+</p></a></div>
  
   <article id="cl">
    
    <article class="browser" id="br" id="bn"> 

   <section class="barra1"></section>                
 <div class="boto-pan" >   
   
 	<ul id="tabs">
    	<li id="tab_01"><a class="button-edit" onclick="tab('.$tab1.');">HTML</a></li>
        <li id="tab_02"><a class="button-edit" onclick="tab('.$tab2.');">CSS</a></li>
        <li id="tab_03"><a class="button-edit"onclick="tab('.$tab3.');">JavaScript</a></li>
        <li id="tab_04"><a href="#br#bn" class="button-edit"onclick="tab('.$tab4.');">Esconder Editor</a></li>      
    </ul>
    </div>

 <div id="paneles">  
	<div id="panel_01">
        
         <article class="top-bar">
            <span class="orb green"><a href="#br" style="color:Black;" title="Maxinizar">Maximizar</a></span>
          <span id="btn"><a href="#br#bn"style="color:Black;"title="Minimizar" >Minimizar</a></span> 
        </article> 
       <article class="window" >
         <article id="screen" > 
            <section class="ff">
          <iframe  frameborder="0"   id="frm_catalogo" onload="init();resize();" name="editbox" src="'.$java.'">
        </iframe></section>
          </article> 
          
        </article>         
       </div>
    
        <div id="panel_02">
        <article class="top-bar">
            <span class="orb green"><a href="#br" style="color:Black;" title="Maxinizar">Maximizar</a></span>
          <span id="btn"><a href="#br#bn"style="color:Black;"title="Minimizar" >Minimizar</a></span> 
        </article> 
	   <article class="window" >
         <article id="screen">
         <section class="ff">
       <iframe  frameborder="0"  id="frm_catalogo" onload="initcss();resize();" name="editboxcss" src="'.$java.'"></iframe>
        </section>
        </article>   
      </article>
		</div>
        
       <div id="panel_03">   
        <article class="top-bar">
             <span class="orb green"><a href="#br" style="color:Black;" title="Maxinizar">Maximizar</a></span>
          <span id="btn"><a href="#br#bn"style="color:Black;"title="Minimizar" >Minimizar</a></span> 
        </article> 
          <article class="window" >
         <article id="screen">
             <section class="ff">
       <iframe   frameborder="0"  id="frm_catalogo" onload="initjas();resize();" name="editboxjas" src="'.$java.'"></iframe>
                </section>
         </article>   
      </article>
       </div>
    </article><!-- #browser -->
</article>    
              
     
    
    
	<script type="text/javascript">
		tab("tab_04","panel_04");
	</script>

    </div>    
    </section>
     </article>
</html>


';

$fp2=fopen($fichero_salida2,w);
fwrite($fp2,$tabla2);
fclose($fp2);

if(!file_exists($fichero_salida2)) die("Error en la Generacion del Archivo");
else{  
  if($archivo%11 == 0)
    header('Location: /codigolibre/crea.php');  
  else   
     include("index.php");
}
}

?>