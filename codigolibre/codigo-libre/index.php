<!DOCTYPE html>
<html lang="en">
    <head>
		<meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
        <title>Direction-Aware Hover Effect with HTML5-CSS3 -JAVASCRIPT and jQuery</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
        <meta name="description" content="CODIGOLIBRE" />
        <meta name="keywords" content="CODIGO HTML-5- CSS-3- JAVASCRIPT" />
        <link rel="shortcut icon" href="/imagenes/icono.ico" />
		<link href='http://fonts.googleapis.com/css?family=Alegreya+SC:700,400italic' rel='stylesheet' type='text/css' />
        <link rel="stylesheet" type="text/css" href="css/demo.css" />
        <link rel="stylesheet" type="text/css" href="css/style.css" />
         <script type="text/javascript">var switchTo5x=true;</script>
<script type="text/javascript" src="http://w.sharethis.com/button/buttons.js"></script>
<script type="text/javascript">stLight.options({publisher: "98a0c813-783d-461a-a536-cc46a03f65ee"}); </script>
        <script type="text/javascript" src="http://contadores.miarroba.es/ver.php?id=663899"></script>
        <script type="text/javascript" src="http://contadores.miarroba.es/ver.php?id=667398"></script>
		<noscript>
			<style>
				.da-thumbs li a div {
					top: 0px;
					left: -100%;
					-webkit-transition: all 0.3s ease;
					-moz-transition: all 0.3s ease-in-out;
					-o-transition: all 0.3s ease-in-out;
					-ms-transition: all 0.3s ease-in-out;
					transition: all 0.3s ease-in-out;
				}
				.da-thumbs li a:hover div{
					left: 0px;
				}
			</style>
		</noscript>
    </head>
    <body>
        <div class="container">
			<!-- Codrops top bar -->
            <div class="codrops-top">
                <a href="/codigolibre/">
                    <strong style="font-size:25px">&laquo; Codigo Libre</strong>
                </a>
                <span style="position: absolute;top:0%;left:30%;">
                <span class='st_fblike_hcount' displayText='Facebook Like'></span>
                <span class='st_plusone_hcount' displayText='Google +1'></span>
                <span class='st_facebook_hcount' displayText='Facebook'></span>
               <a href="https://twitter.com/share" class="twitter-share-button" data-via="MJPlayV" data-lang="es">Twittear</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
                <span class='st_email_hcount' displayText='Email'></span></span>
                <span class="right">
                    <a href="/">
                        <strong style="font-size:25px">MJ PLAY-V</strong>
                    </a>
                </span>
                <div class="clr"></div>
            </div><!--/ Codrops top bar -->
			<header>
				<span style="text-shadow: 4px 4px 6px #1289c9;">Codigo &amp; Libre</span>
				<h1 style="text-shadow: 4px 4px 6px #1289c9;">Todos Los Codigos</span></h1>
			</header>
            <center>
			<section style="  width:90%;">
<?php
$dbhost = "localhost";
$dbuser = "root";
$dbpassword = "123";
$dbname = "codigo";

$id = mysql_connect($dbhost, $dbuser, $dbpassword) or die("error en coneccion: " . mysql_error()); 
mysql_select_db($dbname, $id); 

     $query ="SELECT * from codigos ORDER BY id DESC";
     $result = mysql_query($query);
     $numero = 1;
     echo ' <ul id="da-thumbs" class="da-thumbs" >';
     while($row = mysql_fetch_array($result))
        {
              
                 echo '<li>';
                 echo '<a href="/gestor/codigos/html/'.$row["id"].'.html" title="'.$row["name"].'"  >';
	             echo '<img src="/gestor/img/codigo/'.$row["id"].'.JPG"  />';
				 echo '<div><span>'.$row["name"].'</span></div></a>
                       </li>'; 
              
            
                 
         }
echo '</ul>
            ';
    
?>
  
				
			</section>
            </center>
        </div>
		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
		<script type="text/javascript" src="js/jquery.hoverdir.js"></script>
		
		<script type="text/javascript">
			$(function() {
			
				$('#da-thumbs > li').hoverdir();

			});
		</script>
    </body>
</html>