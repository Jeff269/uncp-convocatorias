<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

    require_once "../connect.php";


    $size = $_GET['size'];
    $offset = $_GET['offset'];
    $query = "SELECT * FROM usuarios LEFT JOIN dependencias ON usuarios.dependencias_iddependencia = dependencias.iddependencia ORDER BY idusuario DESC LIMIT $size OFFSET $offset;"; 

    $result = $mysqli->query($query);


    if(!$result){
        die("Query error " . mysqli_error($mysqli));
    }

    $json = array();

    while($row = $result->fetch_array()){

        $json[] = array(
            'id' => $row['idusuario'],
            'privilegios' => $row['privilegios'],
            //'accesos' => $row['accesos'],
            'sub' => $row['sub'],
            'email' => $row['email'],
            'name' => $row['name'],
            'family_name' => $row['family_name'],
            'given_name' => $row['given_name'],
            'iddependencia' => $row['dependencias_iddependencia']
        );   
    
    }

    echo json_encode($json);



?>