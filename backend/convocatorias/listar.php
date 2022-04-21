<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

    require_once "../connect.php";

    if(isset($_GET['size']) && isset($_GET['offset'])){
        $size = $_GET['size'];
        $offset = $_GET['offset'];
        $query = "SELECT * FROM certificados ORDER BY idcertificado DESC LIMIT $size OFFSET $offset;"; 
    }else{
        $query = "SELECT * FROM certificados ORDER BY idcertificado DESC;";
    }
    

    $result = $mysqli->query($query);


    if(!$result){
        die("Query error " . mysqli_error($mysqli));
    }

    $json = array();

    while($row = $result->fetch_array()){

        $json[] = array(
            'id' => $row['idcertificado'],
            'curso' => $row['curso'],
            'codigo' => $row['codigo'],
            'fecha_inicio' => $row['fecha_inicio'],
            'fecha_fin' => $row['fecha_fin'],
            'horas' => $row['horas'],
            'year' => $row['year'],
            'carpeta' => $row['carpeta'],
            'post_ruta' => $row['post_ruta']
        );   
    
    }

    echo json_encode($json);



?>