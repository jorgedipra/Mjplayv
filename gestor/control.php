<?php


if(isset ($_POST['enviar']))
{


    $dbhost = "mysql.hostinger.es";
    $dbuser = "u515592478_root";
    $dbpassword = "tereamolaura";
    $dbname = "u515592478_codigo";
    $id = mysql_connect($dbhost, $dbuser, $dbpassword) or die("error en coneccion: " . mysql_error()); 
    mysql_select_db($dbname, $id);   
    mysql_query("insert into usuario(nick,pass) values('".$_POST['nick']."','".$_POST['pass']."');")or die('<script>
     alert("El nick ya existe...\n intentalo otravez");
    location.href="nuevo.html";</script>'.  mysql_error());
    include'index.php';
}

?>