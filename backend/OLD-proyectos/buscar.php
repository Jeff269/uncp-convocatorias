<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

    require_once "../connect.php";
    


    $key = $_GET['index'];
    $type = $_GET['type'];

    switch ($type) {
        case 'nombre':
            $query = "SELECT * FROM proyectos 
            LEFT JOIN usuarios ON proyectos.usuarios_idusuario = usuarios.idusuario 
            LEFT JOIN dependencias ON proyectos.dependencias_iddependencia = dependencias.iddependencia WHERE proyectos.nombre LIKE '%$key%' GROUP BY idproyecto ORDER BY idproyecto DESC LIMIT 20;";
            break;
        
        case 'responsable':
            $query = "SELECT * FROM proyectos 
            LEFT JOIN usuarios ON proyectos.usuarios_idusuario = usuarios.idusuario 
            LEFT JOIN dependencias ON proyectos.dependencias_iddependencia = dependencias.iddependencia WHERE email LIKE '%$key%' GROUP BY idproyecto ORDER BY idproyecto DESC LIMIT 20;";
            break;
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


    function br2nl($string){
        return preg_replace('/\<br(\s*)?\/?\>/i', "\n", $string);
    }

?>