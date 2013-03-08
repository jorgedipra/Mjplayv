
<?php
   
$dbhost = "localhost";
$dbuser = "root";
$dbpassword = "123";
$dbname = "codigo";


$id = mysql_connect($dbhost, $dbuser, $dbpassword) or die("error en coneccion: " . mysql_error()); 
mysql_select_db($dbname, $id);
$cuerpo = $_POST["nombre"];
$result = mysql_query("UPDATE urlyou SET name='$cuerpo'  WHERE id='1'"); 
   
   
    
//http://www.youtube.com/embed/9ZtwOQ1BP6o 
 header('Location: index.html'); 
?>

