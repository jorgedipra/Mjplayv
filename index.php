<?php

$view= new stdClass(); 
$view->disableLayout=false;

if ($view->disableLayout==true)
{
    include_once ($view->contentTemplate);
}
else
{
    include_once ('php/layout.php');
} 
?>

