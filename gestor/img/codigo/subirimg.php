<?php 
if (isset($_POST['submit'])) {  
    if(is_uploaded_file($_FILES['fichero']['tmp_name'])) { // verifica haya sido cargado el archivo 
        if(move_uploaded_file($_FILES['fichero']['tmp_name'], $_FILES['fichero']['name'])) { // se coloca en su lugar final 
                    echo "<b>Upload exitoso!. Datos:</b><br>"; 
            echo "Nombre: <i><a target='_blank' href=\"".$_FILES['fichero']['name']."\">".$_FILES['fichero']['name']."</a></i><br>"; 
            echo "Tipo de Archivo: <i>".$_FILES['fichero']['type']."</i><br>"; 
                    echo "Peso: <i>".$_FILES['fichero']['size']." bytes</i><br>"; 
                        echo "<br><hr><br>"; 
        } 
    } 

} 
?> 

<form action="<?php echo $_SERVER['PHP_SELF'] ?>" method="post" enctype="multipart/form-data"> 
    CAPTURA: <input name="fichero" type="file"> 
    <input name="submit" type="submit" value="Upload!">  
</form>