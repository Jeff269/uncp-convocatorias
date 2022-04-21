<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

    require_once "../connect.php";
    


    $key = $_GET['index'];
  

    $query = "SELECT * FROM certificados WHERE idcertificado='$key';";


    $result = $mysqli->query($query);


    if(!$result){
        die("Query error " . mysqli_error($mysqli));
    }

    $json = array();

    while($row = $result->fetch_array()){
        
        $json = array(
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


    function br2nl($string){
        return preg_replace('/\<br(\s*)?\/?\>/i', "\n", $string);
    }

?>