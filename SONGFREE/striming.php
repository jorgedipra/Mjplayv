
<script>   
$(document).ready( function() {
	stretch_portal_content();
	$(window).resize( stretch_portal_content );
});


function stretch_portal_content() {
	if( $(window).height() > $('body').height() ) {
		 $( '#portal-content' ).height( 
			 $(window).height() - ( $('body').height() - $('#portal-content').height() ) 
		);
	}
}

</script>
<style>
    body {
 background: #000;
    }
</style>
<?php
$dbhost = "localhost";
$dbuser = "root";
$dbpassword = "123";
$dbname = "codigo";


$id = mysql_connect($dbhost, $dbuser, $dbpassword) or die("error en coneccion: " . mysql_error()); 
mysql_select_db($dbname, $id);

$result = mysql_query("select name  from urlyou WHERE id='1'");
echo "
 <!DOCTYPE html>

<html lang='en'>
    <head>
        <meta charset='utf-8' />
        <title></title>
    </head>
    <body>
";
while($row=mysql_fetch_row ($result))
{
        echo "<iframe width='100%' height='93%' src='$row[0]' frameborder='0' allowfullscreen></iframe>";
}
echo " 
    </body>
</html>
";
?>


