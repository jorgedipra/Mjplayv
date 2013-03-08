
<!DOCTYPE html>
<html>
<head>
<meta name="description" content="crea codigo y cuelgalo" />
<meta http-equiv="content-type" content="text/html; charset=utf-8" />
<title>NeW Codigo</title>
<link rel="shortcut icon" href="/imagenes/icono.ico" />
<link type="text/css" rel="stylesheet" href="css/style.css" />
<SCRIPT>
var x="1";
var isBack;
function handleBackButton(){
isBack = (x != document._mine._a1.value);
document._mine._a1.value=2;
document._mine._a1.defaultValue=2;
if(isBack)
location.href="./"
}
</SCRIPT>
</head>
<body ONLOAD="handleBackButton()">
	<div id="loginform"></div>

<?php
    
$dbhost = "mysql.hostinger.es";
$dbuser = "u515592478_root";
$dbpassword = "tereamolaura";
$dbname = "u515592478_codigo";

$id = mysql_connect($dbhost, $dbuser, $dbpassword) or die("error en coneccion: " . mysql_error()); 
mysql_select_db($dbname, $id); 

    function loginForm(){
      if (isset($_GET['oauth_token']) ||
            ( isset($_SESSION['oauth_token']) && 
                 isset($_SESSION['oauth_token_secret']) )){
                    }
         else{
	        echo'
	            <div id="loginform">
                  <form action="index.php" method="post" id="signup" >
                    <article class="header">
                        <h3>Codigo Libre!!!</h3> 
		                <p>Ingresa tu datos para iniciar</p> 
                    </article>
                    <article class="sep"></article>
                    <article class="inputs">  
		            <label for="name">Nick:</label>
		            <input type="text" name="nick" id="name" placeholder="" autofocus value="'.$datot.'" />
                     <label for="name">Contraseña:</label>
                    <input type="password" name="pass" id="pass" placeholder="" autofocus value="'.$datop.'" />
		            <input type="submit" name="enter" id="submit" value="Entrar a juego" />
                    </article>
	              </form >    
                  <a id="nuevo" href="nuevo.html">NUEVO USUARIO</a>
	            </div>
	            ';  
            }
    }

if(isset($_POST['enter'])){
if($_POST['nick'] != ""  || isset($_GET['oauth_token']) || 
           ( isset($_SESSION['oauth_token']) && 
                 isset($_SESSION['oauth_token_secret']) )){

$consulta = "SELECT * FROM usuario WHERE nick = '{$_POST['nick']}' AND pass = '{$_POST['pass']}'"; 
$datos = mysql_query($consulta, $id); 
$numDatos = @mysql_num_rows($datos); 

if ($numDatos <= 0) { 
    echo "<script>alert('EL NICK NO EXIXTE O DIGITO MAL LA CONTRASEÑA');</script>";
}else { 
  
   $_SESSION['nick'] = stripslashes(htmlspecialchars($_POST['nick']));
}
}
	else{
		echo '<span id="error">Por favor, escriba correctamente su nick y contraseña</span>';
	    }
}
?>

<?php
if(!isset($_SESSION['nick'])){
	loginForm();
}
else{
?>
<div id="wrapper">
	<div id="menu">
		<p class="welcome"><label>Bienvenido :<b><?php echo $_SESSION['nick'];?></b> </label></p>
        <p class="logout" id="abajo"><a id="menua" href="/codigolibre/codigo-libre/" target="_blank">Codigos</a><a id="menua" href="/recursos/editor-all.html" target="_blank">Editor</a><a id="exit" href="#">SALIR</a></p>
		<div style="clear:both"></div>
	</div>	

    <article id="formato">
	<form method="post" action="crea.php" name="forma1">
            <p>-Entra al <a href="/recursos/editor-all.html">EDITOR</a> y verifica que funcione antes de crearlo.<br><b>-Al subir la imagen verificar que se llame igual que el NOMBRE DEL  ARCHIVO, de lo contrario no aparesera la imagen en la pagina principal</b></p>
<?php        $query = "SELECT MAX(id) AS id FROM codigos";
              $result = mysql_query($query);
              if ($row = mysql_fetch_row($result)) {
              $id = trim($row[0]);
              $querym ="select * from codigos where id = $id";
              $resultm = mysql_query($querym); 
                   if ($rows = mysql_fetch_row($resultm)) {
                        
                        $PRE = $id;
                        $NAME = $id+1;
                        $POS =$NAME+1;
                   }else echo"error";
              } 
              else
              echo"error";

              echo 'Titulo:<input type="text" value="" name="titulo" required>';
              echo ' Nombre de Archivo:<input type="text" value="'.$NAME.'" name="namep" OnFocus="this.blur()" required>';
              echo '<p style="display:none;">pre:<input type="text" value="'.$PRE.'" name="namepre" OnFocus="this.blur()" required>';
              echo ' pos:<input type="text" value="'.$POS.'" name="namepos"  OnFocus="this.blur()" required></p>';

 ?>
            
            
            
            
             html<input type="checkbox" name="thtml" value="HTML5">
             css<input type="checkbox" name="tcss" value="CSS3">
             javascript<input type="checkbox" name="tscript" value="JavaScript">
             autor:<input type="text" value="<?php echo $_SESSION['nick'];?>" name="autor" required><br>
            <iframe scrolling="no" src="/gestor/img/codigo/subirimg.php"  height="120" width="50%"></iframe>
            <p>html</p>
            <textarea name="html" style="color: #0094ff"> </textarea></textarea></br>
            <p>css</p> 
            <textarea name="css" style="color: #1a8b1f" > </textarea></textarea></br>
            <p>javascript</p>
            <textarea name="js" style="color: #e11c1c"> </textarea></textarea>

            <input type="text" value="\n'+'" name="n" style="display: none;" >
            <input type="text" value=" old.replace(/[\r\n]/g,'') == defaultStuff.replace(/[\r\n]/g,'')" name="vari" style="display: none;"></br>
            <input type="submit" value="crear" name="enviar">
</form> 
    </article>
</div>


<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js"></script>
<script type="text/javascript">
// jQuery Document
$(document).ready(function(){	
	$("#exit").click(function(){
		var exit = confirm("Esta seguro que desea terminar la sesion?");
		if(exit==true){window.location = 'index.php';}		
	});
});
</script>
<?php
}
?>
<form name="_mine">
<INPUT type=hidden id="_a1" NAME="_a1" VALUE="1" STYLE="VISIBILITY:hidden">
</form>
</body>
</html>