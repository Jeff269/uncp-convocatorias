<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

    require_once "../connect.php";
    


    $key = $_GET['index'];
    $type = $_GET['type'];

    switch ($type) {
        case 'name':
            $query = "SELECT * FROM usuarios LEFT JOIN dependencias ON usuarios.dependencias_iddependencia = dependencias.iddependencia WHERE name LIKE '%$key%' ORDER BY idusuario DESC LIMIT 20;";
            break;
        
        case 'email':
            $query = "SELECT * FROM usuarios LEFT JOIN dependencias ON usuarios.dependencias_iddependencia = dependencias.iddependencia WHERE email LIKE '%$key%' ORDER BY idusuario DESC LIMIT 20;";
            break;
    }


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


    function br2nl($string){
        return preg_replace('/\<br(\s*)?\/?\>/i', "\n", $string);
    }

?>