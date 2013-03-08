
<?php
    
$dbhost = "localhost";
$dbuser = "root";
$dbpassword = "123";
$dbname = "codigo";

$id = mysql_connect($dbhost, $dbuser, $dbpassword) or die("error en coneccion: " . mysql_error()); 
mysql_select_db($dbname, $id);    


$rs = mysql_query("SELECT MAX(id) AS id FROM codigos");
if ($rowmax = mysql_fetch_row($rs)) {
$idmax = trim($rowmax[0]);
}

$lim = $idmax - 10; 

$query = "SELECT * from codigos WHERE id BETWEEN $lim AND $idmax";
               $result = mysql_query($query);
                $numero = 1;
                $matriz[0][0]=9;

               
               while($row = mysql_fetch_array($result))
                {     
                 for ($i = 0; $i <= 7; $i++) 
                 {
                    $matriz[$numero][$i]= $row[$i];
                 }
                  $numero++;
                 }

$pora=$idmax/11;
$archivo="$pora";
$poramas=$pora+1;
$porameno=$pora-1;
$htmljs="$archivo.html";
$htmljsdire="codigos/$htmljs";
$namejs=$htmljsdire;
$fichero_salida=$namejs;
$tabla='
<!DOCTYPE HTML>
<html>
  <head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
    <meta name="viewport" content="width = device-width, initial-scale=1, maximum-scale=1"/> 
    <title>CODIGO LIBRE MJ</title>
    <link rel="shortcut icon" href="/imagenes/icono.ico" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <link rel="stylesheet" type="text/css" href="/codigolibre/css/style.css">       
    <script src="/codigolibre/sifr/sifr.js" type="text/javascript"></script>
    <script src="/codigolibre/sifr/sifr-addons.js" type="text/javascript"></script>         
    <script src="/codigolibre/js/jquery.js" type="text/javascript"></script>
    <script src="/codigolibre/js/jquery.localscroll.js" type="text/javascript"></script> 
      <script src="/javascript/codigo-libre/1-25/lista.js"></script>  
<script type="text/javascript">var switchTo5x=true;</script>
<script type="text/javascript" src="http://w.sharethis.com/button/buttons.js"></script>
<script type="text/javascript">stLight.options({publisher: "98a0c813-783d-461a-a536-cc46a03f65ee"}); </script>
<script type="text/javascript" src="http://contadores.miarroba.es/ver.php?id=667398"></script>
<!--[if lt IE 9]>
<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
 <![endif]--> 
       <script type="text/javascript" src="http://contadores.miarroba.es/ver.php?id=663899"></script>
       <script type="text/javascript">
			jQuery(document).ready(function(){
											

				//To switch directions up/down and left/right just place a "-" in front of the top/left attribute
				//Vertical Sliding
				
				//Horizontal Sliding
				jQuery(".boxgrid.slideright").hover(function(){
					jQuery(".cover", this).stop().animate({left:"325px"},{queue:false,duration:300});
				}, function() {
					jQuery(".cover", this).stop().animate({left:"0px"},{queue:false,duration:300});
				});
			});
		</script>
  </head>
  <body>
      <div class="wrapper">

<!-- Header Start -->
          
          <div class="header-holder">
              <div class="header padding-separator">
                  <a href="/codigolibre/" class="titlep">Codigo libre</a>
                  <ul class="header-menu" id="nav">
                      <li><a href="/" class="selected">Home</a></li>
                      <li><a href="/Escritorio/iniciarsecion.html">Escritorio MJ</a></li>
                      <li><a href="/web/">Lenguaje Web</a></li>              
                      <li><a href="/Tecnologia/">Tecnologia</a></li>
                      <li><a href="/codigolibre/codigo-libre/">Editor Web ALL</a></li>
                  </ul>
              </div>
          </div>

<!-- Slider Start -->
  <div class="main-content-holder">
                <div class="main-content">
                    <div class="left-column">
                        <div class="titlepp"><h4>Codigos Libres</h4></div>

                        <ul class="left-content">
                            <li class="tttodo"><a href="/codigolibre/codigo-libre/">TODOS LOS CODIGOS</a></li>
                            <li><a href="#">Cozmparte<span class="st_facebook_hcount" displayText="Facebook"></span></a></li>
                            <li><a href="#">En Plus<span class="st_googleplus_hcount" displayText="Google +"></span></a></li>
                            <li><a href="#">Twittear <a href="https://twitter.com/share" class="twitter-share-button" data-via="MJPlayV" data-lang="es">Twittear</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script></a></li>
                            <li><a href="#">Enviar<span class="st_email_hcount" displayText="Email"></span></a></li>
                            <li><a href="#">Te Gusta</a></li>            
                            <span class="st_fblike_hcount" displayText="Facebook Like"></span>
                            <span class="st_plusone_hcount" displayText="Google +1"></span>
                        </ul>
                        <div class="bottom"></div>  
                    </div>


                 <article class="main">
                       <h6 class="titleh1">Pagina '.$pora.'</h6>
                     <article class="masno">       
                    <a class="" href="/codigolibre/codigos/'.$porameno.'.html">Preview&#60;&#60;</a>
                    <a class="" href="/codigolibre/codigo-libre/">Todos Los Codigo</Codigo></a>  
                     <a class="" href="/codigolibre/codigos/'.$poramas.'.html">Nex&#62;&#62;</a>
                    </article>
                        <p><strong></strong></p>

                        <div class="boxgrid slideright left">
                         <img class="cover" src="/gestor/img/codigo/'.$matriz[1][0].'.JPG" alt="'.$matriz[1][3].'" title="'.$matriz[1][3].'">
                            <h6>'.$matriz[1][3].'</h6>
                            <p style="font-size:16px">Tecnologia:</p>
                             <section class="html5">'.$matriz[1][4].'</section>
                             <section class="css3">'.$matriz[1][5].'</section>
                             <section class="javascript">'.$matriz[1][6].'</section><br><br>
                            <a href="/gestor/codigos/html/'.$matriz[1][0].'.html" target="_BLANK" title="'.$matriz[1][3].'">ver codigo ►</a>
			             </div>
             
                        
                    
                       <div class="boxgrid slideright right">
                            <img class="cover" src="/gestor/img/codigo/'.$matriz[2][0].'.JPG" alt="'.$matriz[2][3].'" title="'.$matriz[2][3].'">
                            <h6>'.$matriz[2][3].'</h6>
                            <p style="font-size:16px">Tecnologia:</p>
                             <section class="html5">'.$matriz[2][4].'</section>
                             <section class="css3">'.$matriz[2][5].'</section>
                             <section class="javascript">'.$matriz[2][6].'</section><br><br>
                            <a href="/gestor/codigos/html/'.$matriz[2][0].'.html" target="_BLANK" title="'.$matriz[2][3].'">ver codigo ►</a>
                            
			          </div>
                <article class="main1"> 
                            
                         <div class="boxgrid slideright left">
                            <img class="cover" src="/gestor/img/codigo/'.$matriz[3][0].'.JPG" alt="'.$matriz[3][3].'" title="'.$matriz[3][3].'">
                            <h6>'.$matriz[3][3].'</h6>
                            <p style="font-size:16px">Tecnologia:</p>
                             <section class="html5">'.$matriz[3][4].'</section>
                             <section class="css3">'.$matriz[3][5].'</section>
                             <section class="javascript">'.$matriz[3][6].'</section><br><br>
                            <a href="/gestor/codigos/html/'.$matriz[3][0].'.html" target="_BLANK" title="'.$matriz[3][3].'">ver codigo ►</a>
                            
			             </div>   

                    <div class="boxgrid slideright right">
                           <img class="cover" src="/gestor/img/codigo/'.$matriz[4][0].'.JPG" alt="'.$matriz[4][3].'" title="'.$matriz[4][3].'">
                            <h6>'.$matriz[4][3].'</h6>
                            <p style="font-size:16px">Tecnologia:</p>
                             <section class="html5">'.$matriz[4][4].'</section>
                             <section class="css3">'.$matriz[4][5].'</section>
                             <section class="javascript">'.$matriz[4][6].'</section><br><br>
                            <a href="/gestor/codigos/html/'.$matriz[4][0].'.html" target="_BLANK" title="'.$matriz[4][3].'">ver codigo ►</a>
			             </div>
                     
                    <div class="boxgrid slideright center">
                            <img class="cover" src="/gestor/img/codigo/'.$matriz[5][0].'.JPG" alt="'.$matriz[5][3].'" title="'.$matriz[5][3].'">
                            <h6>'.$matriz[5][3].'</h6>
                            <p style="font-size:16px">Tecnologia:</p>
                             <section class="html5">'.$matriz[5][4].'</section>
                             <section class="css3">'.$matriz[5][5].'</section>
                             <section class="javascript">'.$matriz[5][6].'</section><br><br>
                            <a href="/gestor/codigos/html/'.$matriz[5][0].'.html" target="_BLANK" title="'.$matriz[5][3].'">ver codigo ►</a>
			          </div>
   
                         <div class="boxgrid slideright left">
                            <img class="cover" src="/gestor/img/codigo/'.$matriz[6][0].'.JPG" alt="'.$matriz[6][3].'" title="'.$matriz[6][3].'">
                            <h6>'.$matriz[6][3].'</h6>
                            <p style="font-size:16px">Tecnologia:</p>
                             <section class="html5">'.$matriz[6][4].'</section>
                             <section class="css3">'.$matriz[6][5].'</section>
                             <section class="javascript">'.$matriz[6][6].'</section><br><br>
                            <a href="/gestor/codigos/html/'.$matriz[6][0].'.html" target="_BLANK" title="'.$matriz[6][3].'">ver codigo ►</a>
			             </div>
                    <div class="boxgrid slideright right">
                           <img class="cover" src="/gestor/img/codigo/'.$matriz[7][0].'.JPG" alt="'.$matriz[7][3].'" title="'.$matriz[7][3].'">
                            <h6>'.$matriz[7][3].'</h6>
                            <p style="font-size:16px">Tecnologia:</p>
                             <section class="html5">'.$matriz[7][4].'</section>
                             <section class="css3">'.$matriz[7][5].'</section>
                             <section class="javascript">'.$matriz[7][6].'</section><br><br>
                            <a href="/gestor/codigos/html/'.$matriz[7][0].'.html" target="_BLANK" title="'.$matriz[7][3].'">ver codigo ►</a>
			          </div>

                          
                      <div class="boxgrid slideright center">
                            <img class="cover" src="/gestor/img/codigo/'.$matriz[8][0].'.JPG" alt="'.$matriz[8][3].'" title="'.$matriz[8][3].'">
                            <h6>'.$matriz[8][3].'</h6>
                            <p style="font-size:16px">Tecnologia:</p>
                             <section class="html5">'.$matriz[8][4].'</section>
                             <section class="css3">'.$matriz[8][5].'</section>
                             <section class="javascript">'.$matriz[8][6].'</section><br><br>
                            <a href="/gestor/codigos/html/'.$matriz[8][0].'.html" target="_BLANK" title="'.$matriz[8][3].'">ver codigo ►</a> 
			          </div>
                     
                     <div class="boxgrid slideright left">
                          <img class="cover" src="/gestor/img/codigo/'.$matriz[9][0].'.JPG" alt="'.$matriz[9][3].'" title="'.$matriz[9][3].'">
                            <h6>'.$matriz[9][3].'</h6>
                            <p style="font-size:16px">Tecnologia:</p>
                             <section class="html5">'.$matriz[9][4].'</section>
                             <section class="css3">'.$matriz[9][5].'</section>
                             <section class="javascript">'.$matriz[9][6].'</section><br><br>
                            <a href="/gestor/codigos/html/'.$matriz[9][0].'.html" target="_BLANK" title="'.$matriz[9][3].'">ver codigo ►</a> 
			             </div>

                    <div class="boxgrid slideright right">
                          <img class="cover" src="/gestor/img/codigo/'.$matriz[10][0].'.JPG" alt="'.$matriz[10][3].'" title="'.$matriz[10][3].'">
                            <h6>'.$matriz[10][3].'</h6>
                            <p style="font-size:16px">Tecnologia:</p>
                             <section class="html5">'.$matriz[10][4].'</section>
                             <section class="css3">'.$matriz[10][5].'</section>
                             <section class="javascript">'.$matriz[10][6].'</section><br><br>
                            <a href="/gestor/codigos/html/'.$matriz[10][0].'.html" target="_BLANK" title="'.$matriz[10][3].'">ver codigo ►</a>    
			             </div>

                    <div class="boxgrid slideright center">
                          <img class="cover" src="/gestor/img/codigo/'.$matriz[11][0].'.JPG" alt="'.$matriz[11][3].'" title="'.$matriz[11][3].'">
                            <h6>'.$matriz[11][3].'</h6>
                            <p style="font-size:16px">Tecnologia:</p>
                             <section class="html5">'.$matriz[11][4].'</section>
                             <section class="css3">'.$matriz[11][5].'</section>
                             <section class="javascript">'.$matriz[11][6].'</section><br><br>
                            <a href="/gestor/codigos/html/'.$matriz[11][0].'.html" target="_BLANK" title="'.$matriz[11][3].'">ver codigo ►</a>
                      </div>
                    <h6 class="h6">
                        <center><b style=" color:White; font-size:40px;">'.$pora.'</b> 
                        <script>document.write(sessionStorage.getItem("recursos125"));</script>
                        </center><br></h6>
             </article>
                
          </article>
    
                </div> 
            </div>
          
 
<!-- Content Start -->
        
             <div class="open-close"></div>
              <div class="content">
                 </div>
                </div>    
      
          <div class="clear"></div>

          <div class="footer-holder-copyright">
              <div class="footer-copyright">
                  <span>@ MJPLay-V</span>
                  <ul>
                  		<li><a href="/" class="selected">Home</a></li>
                      <li><a href="/Escritorio/iniciarsecion.html">Escritorio MJ</a></li>
                      <li><a href="/web/">Lenguaje Web</a></li>              
                      <li><a href="/Tecnologia/">Tecnologia</a></li>
                      <li><a href="/codigolibre/codigo-libre/">Editor Web ALL</a></li>
                  </ul>
                  <div class="clear"></div>
              </div>
              <div class="clear"></div>
          </div>

      </div>
      

<!-- Javascript code for using sIFR -->
<script type="text/javascript">
//<![CDATA[
/* Replacement calls. Please see documentation for more information. */

if(typeof sIFR == "function"){

	sIFR.replaceElement(named({sSelector:"body h1.h1-main-page", sFlashSrc:"sifr/h1-main-page.swf", sColor:"#0D112F", sLinkColor:"#6F6F6F", sBgColor:"#FFFFFF", sHoverColor:"#C90000", sWmode:"transparent"}));
        sIFR.replaceElement(named({sSelector:"body h2.h2-main-page", sFlashSrc:"sifr/h2-main-page.swf", sColor:"#32A700", sLinkColor:"#C90000", sBgColor:"#FFFFFF", sHoverColor:"#6F6F6F", sWmode:"transparent"}));
        sIFR.replaceElement(named({sSelector:".box-holder-top h1", sFlashSrc:"sifr/h1.swf", sColor:"#0D112F", sLinkColor:"#0D112F", sBgColor:"#FFFFFF", sHoverColor:"#0D112F", sWmode:"transparent", sFlashVars:"textalign=center"}));
        sIFR.replaceElement(named({sSelector:"body h1", sFlashSrc:"sifr/h1.swf", sColor:"#0D112F", sLinkColor:"#0D112F", sBgColor:"#FFFFFF", sHoverColor:"#0D112F", sWmode:"transparent"}));
        sIFR.replaceElement(named({sSelector:"body h2", sFlashSrc:"sifr/h2.swf", sColor:"#32A700", sLinkColor:"#32A700", sBgColor:"#FFFFFF", sHoverColor:"#32A700", sWmode:"transparent"}));
        sIFR.replaceElement(named({sSelector:"body h3", sFlashSrc:"sifr/h3.swf", sColor:"#0D112F", sLinkColor:"#0D112F", sBgColor:"#FFFFFF", sHoverColor:"#0D112F", sWmode:"transparent"}));
        sIFR.replaceElement(named({sSelector:".title h4", sFlashSrc:"sifr/left-title.swf", sColor:"#FFFFFF", sLinkColor:"#FFFFFF", sBgColor:"#FFFFFF", sHoverColor:"#FFFFFF", sWmode:"transparent", sFlashVars:"textalign=center"}));
        
       
}
/* Javascript code for the animation in the header menu */

jQuery(function() {
	jQuery(".content-holder .open-close").click(function(event) {
		event.preventDefault();
		jQuery(this).parent().parent().find(".content").slideToggle("slow");
 		return false;
	});

	jQuery.localScroll({
		duration: 500,
		target: jQuery(window)
	});

	jQuery(".footer-holder .open-close").click(function(event) {
		event.preventDefault();
		jQuery(this).parent().parent().find(".footer").slideToggle("slow");
 		return false;
	});

	jQuery.localScroll({
		duration: 500,
		target: jQuery(window)
	});
        jQuery(".footer-holder .open-close, .content-holder .open-close").parent().parent().find(".footer, .content").hide("slow");
});
</script>

  </body>
</html>

';

$fp=fopen($fichero_salida,w);
fwrite($fp,$tabla);
fclose($fp);

if(!file_exists($fichero_salida)) die("Error en la Generacion del Archivo");
else{  
 header('Location: /javascript/codigo-libre/1-25/crea.php'); 

}

?>

