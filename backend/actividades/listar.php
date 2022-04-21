<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    require_once "../connect.php";

    if(isset($_GET['size']) && isset($_GET['offset'])){
        $size = $_GET['size'];
        $offset = $_GET['offset'];
        $query = "SELECT * FROM actividades
        INNER JOIN proyectos ON proyectos.idproyecto = actividades.proyectos_idproyecto  
        LEFT JOIN usuarios ON proyectos.usuarios_idusuario = usuarios.idusuario 
        LEFT JOIN dependencias ON proyectos.dependencias_iddependencia = dependencias.iddependencia
        ORDER BY idproyecto, idactividad DESC LIMIT $size OFFSET $offset;"; 
    }else{
        $query = "SELECT * FROM actividades 
        INNER JOIN proyectos ON proyectos.idproyecto = actividades.proyectos_idproyecto   
        LEFT JOIN usuarios ON proyectos.usuarios_idusuario = usuarios.idusuario 
        LEFT JOIN dependencias ON proyectos.dependencias_iddependencia = dependencias.iddependencia
        ORDER BY idproyecto, idactividad DESC;";
    }
    

    $result = $mysqli->query($query);


    if(!$result){
        die("Query error " . mysqli_error($mysqli));
    }

    $json = array();

    while($row = $result->fetch_array()){

        $json[] = array(
            'id' => $row['idactividad'],
            'nombre' => $row['nombre'],
            'nombre_act' => $row['nombre_act'],
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



?>