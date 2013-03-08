
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

$htmljs="lista.js";
$namejs=$htmljs;
$fichero_salida=$namejs;

$li='"li1"';
$salida="";
for ($i = 1; $i <= $pora; $i++) {

 $codi[$i]='<a href="/codigolibre/codigos/'.$i.'.html">'.$i.'</a>,';
  $salida = $salida.$codi[$i];

}


$tabla="
 sessionStorage.recursos125 = '<style>a{color:#fff;font-size:26px;}'+
'a:hover{color:#1CD8FA;text-shadow: 0 3px 10px rgba(0,183,229,0.9);}'+
'#li1{color:#fff;font-size:26px; width:100%; height:100%;}'+
'</style>' +
'<div id=$li>'+
'$salida'+
'</div>';
";

$fp=fopen($fichero_salida,w);
fwrite($fp,$tabla);
fclose($fp);

if(!file_exists($fichero_salida)) die("Error en la Generacion del Archivo");
else{  
 header('Location: /codigolibre/index.html'); 
}

?>

