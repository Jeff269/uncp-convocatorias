<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

    require_once "../connect.php";
    


    $key = $_GET['index'];
    $type = $_GET['type'];

    switch ($type) {
        case 'nombre':
            $query = "SELECT * FROM actividades 
            INNER JOIN proyectos ON proyectos.idproyecto = actividades.proyectos_idproyecto   
            LEFT JOIN usuarios ON proyectos.usuarios_idusuario = usuarios.idusuario 
            LEFT JOIN dependencias ON proyectos.dependencias_iddependencia = dependencias.iddependencia
            WHERE proyectos.nombre LIKE '%$key%' GROUP BY idactividad ORDER BY idactividad DESC LIMIT 20;";
            break;
        
        case 'responsable':
            $query = "SELECT * FROM actividades 
            INNER JOIN proyectos ON proyectos.idproyecto = actividades.proyectos_idproyecto   
            LEFT JOIN usuarios ON proyectos.usuarios_idusuario = usuarios.idusuario 
            LEFT JOIN dependencias ON proyectos.dependencias_iddependencia = dependencias.iddependencia
            WHERE email LIKE '%$key%' GROUP BY idactividad ORDER BY idactividad DESC LIMIT 20;";
            break;
    }


    $result = $mysqli->query($query);


    if(!$result){
        die("Query error " . mysqli_error($mysqli));
    }

    $json = array();

    while($row = $result->fetch_array()){
        
        $json[] = array(
            'id' => $row['idactividad'],
            'nombre' => $row['nombre_act'],
            'plazo' => $row['plazo'],
            'financiamiento' => $row['financiamiento'],
            'tipo_proceso' => $row['tipo_proceso'],
            'fecha' => $row['fecha_act'],
            'fecha_mod' => $row['fecha_mod_act'],
            'idproyecto' => $row['proyectos_idproyecto'],
            'idusuario' => $row['usuarios_idusuario'],
            'iddependencia' => $row['iddependencia']   
        ); 
    
    }

    echo json_encode($json);


    function br2nl($string){
        return preg_replace('/\<br(\s*)?\/?\>/i', "\n", $string);
    }

?>