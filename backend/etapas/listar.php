<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    require_once "../connect.php";

    $id_actividad = $_GET['id'];

    if(isset($_GET['size']) && isset($_GET['offset'])){
        $size = $_GET['size'];
        $offset = $_GET['offset'];
        $query = "SELECT * FROM etapas 
        INNER JOIN actividades ON actividades.idactividad = etapas.actividades_idactividad
        LEFT JOIN usuarios ON etapas.usuarios_idusuario_etapa = usuarios.idusuario 
        LEFT JOIN dependencias ON etapas.dependencias_iddependencia_etapa = dependencias.iddependencia
        WHERE actividades.idactividad = '$id_actividad'
        ORDER BY idetapa ASC LIMIT $size OFFSET $offset;"; 
    }else{
        $query = "SELECT * FROM etapas 
        INNER JOIN actividades ON actividades.idactividad = etapas.actividades_idactividad
        LEFT JOIN usuarios ON etapas.usuarios_idusuario_etapa = usuarios.idusuario 
        LEFT JOIN dependencias ON etapas.dependencias_iddependencia_etapa = dependencias.iddependencia
        WHERE actividades.idactividad = '$id_actividad'
        ORDER BY idetapa ASC;";
    }
    

    $result = $mysqli->query($query);


    if(!$result){
        die("Query error " . mysqli_error($mysqli));
    }

    $json = array();

    while($row = $result->fetch_array()){

        $json[] = array(
            'id' => $row['idetapa'],
            'nombre_etapa' => $row['nombre_etapa'],
            'duracion' => $row['duracion'],
            'comienzo' => $row['comienzo'],
            'fin' => $row['fin'],
            'estado' => $row['estado'],
            'fecha_fin' => $row['fecha_fin'],
            'dias_efectivos' => $row['dias_efectivos'],
            'fecha_etapa' => $row['fecha_etapa'],
            'fecha_mod_etapa' => $row['fecha_mod_etapa'],

            'nombre_act' => $row['nombre_act'],
            'index_dependencia' => $row['nombre_dep'],
            'index_usuario' => $row['name'],

            'idactividad' => $row['actividades_idactividad'],
            'idusuario' => $row['usuarios_idusuario'],
            'iddependencia' => $row['iddependencia']
        );   
    
    }

    echo json_encode($json);



?>