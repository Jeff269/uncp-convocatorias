<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    require_once "../connect.php";

    if(isset($_GET['size']) && isset($_GET['offset'])){
        $size = $_GET['size'];
        $offset = $_GET['offset'];
        $query = "SELECT * FROM proyectos 
        LEFT JOIN usuarios ON proyectos.usuarios_idusuario = usuarios.idusuario 
        LEFT JOIN dependencias ON proyectos.dependencias_iddependencia = dependencias.iddependencia
        ORDER BY idproyecto DESC LIMIT $size OFFSET $offset;"; 
    }else{
        $query = "SELECT * FROM proyectos 
        LEFT JOIN usuarios ON proyectos.usuarios_idusuario = usuarios.idusuario 
        LEFT JOIN dependencias ON proyectos.dependencias_iddependencia = dependencias.iddependencia
        ORDER BY idproyecto DESC;";
    }
    

    $result = $mysqli->query($query);


    if(!$result){
        die("Query error " . mysqli_error($mysqli));
    }

    $json = array();

    while($row = $result->fetch_array()){

        $json[] = array(
            'id' => $row['idproyecto'],
            'nombre' => $row['nombre'],
            'index_dependencia' => $row['nombre_dep'],
            'index_usuario' => $row['name'],
            'fecha' => $row['fecha'],
            'fecha_mod' => $row['fecha_mod'],
            'idusuario' => $row['usuarios_idusuario'],
            'iddependencia' => $row['iddependencia']
        );   
    
    }

    echo json_encode($json);



?>