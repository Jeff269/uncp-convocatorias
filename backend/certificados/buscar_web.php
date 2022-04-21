<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

    require_once "../connect.php";
    


    $key = $_GET['index'];

    $index_1 = stripos($key,"-");
    $index_2 = strripos($key,"-");

    switch($index_2 - $index_1){
        case 6: break;
        case 5: $key = substr($key, 0, $index_1+1) . '0' . substr($key, $index_1+1); break;
        case 4: $key = substr($key, 0, $index_1+1) . '00' . substr($key, $index_1+1); break;
        case 3: $key = substr($key, 0, $index_1+1) . '000' . substr($key, $index_1+1); break;
        case 2: $key = substr($key, 0, $index_1+1) . '0000' . substr($key, $index_1+1); break;
        case 1: $key = substr($key, 0, $index_1+1) . '00000' . substr($key, $index_1+1); break;
    }

    $query = "SELECT participantes.*, certificados.curso, certificados.fecha_inicio, certificados.fecha_fin, certificados.horas, certificados.year, certificados.carpeta, certificados.post_ruta FROM participantes 
                INNER JOIN certificados ON participantes.certificados_idcertificado = certificados.idcertificado
                WHERE participantes.codigo = '$key'  LIMIT 1;";


    $result = $mysqli->query($query);


    if(!$result){
        die("Query error " . mysqli_error($mysqli));
    }

    $json = array();

    while($row = $result->fetch_array()){
        
        $json = array(
            'curso' => $row['curso'],
            //'codigo' => $row['codigo'],
            'fecha_inicio' => date("d/m/Y", strtotime($row['fecha_inicio'])),
            'fecha_fin' => date("d/m/Y", strtotime($row['fecha_fin'])),
            'horas' => $row['horas'],
            'year' => $row['year'],
            'carpeta' => $row['carpeta'],
            'post_ruta' => $row['post_ruta'],

            'id' => $row['idparticipante'],
            'nro' => $row['nro'],
            'nombres' => $row['nombres'],
            'apellidos' => $row['apellidos'],
            'participacion' => $row['participacion'],
            'codigo' => $row['codigo'],
        ); 
    
    }

    echo json_encode($json);


    function br2nl($string){
        return preg_replace('/\<br(\s*)?\/?\>/i', "\n", $string);
    }

?>