<?php
header('Content-Type: text/html; charset=utf-8');
define("SERVER", "localhost");
define("USER", "root");
define("PASSWORD", "");
define("DBNAME", "certificados_fudec");

define("URI",dirname(__FILE__)."/");

$mysqli = new mysqli(
    SERVER,USER,PASSWORD,DBNAME
);


//date_default_timezone_set('America/Lima');

/* verificar la conexión */
if (mysqli_connect_errno()) {
    printf("Falló la conexión failed: %s\n", $mysqli->connect_error);
    exit();
}

$mysqli->set_charset("utf8");
$mysqli->query("SET time_zone = '-5:00';");

//printf("Conjunto de caracteres inicial: %s\n", $mysqli->character_set_name());



?>