<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

    require_once "../connect.php";
    

    $id_certificado = $_GET['id'];
    $key = $_GET['index'];
    $type = $_GET['type'];

    switch ($type) {
        case 'nombre':
            $query = "SELECT participantes.* FROM participantes 
            INNER JOIN certificados ON participantes.certificados_idcertificado = certificados.idcertificado
            WHERE certificados.idcertificado = '$id_certificado' AND CONCAT(participantes.nombres,' ',participantes.apellidos) LIKE '%$key%' GROUP BY idparticipante ORDER BY idparticipante DESC LIMIT 20;";
            break;
        
        case 'codigo':
            $query = "SELECT participantes.* FROM participantes 
            INNER JOIN certificados ON participantes.certificados_idcertificado = certificados.idcertificado
            WHERE certificados.idcertificado = '$id_certificado' AND participantes.codigo LIKE '%$key%' GROUP BY idparticipante ORDER BY idparticipante DESC LIMIT 20;";
            break;
    }


    $result = $mysqli->query($query);


    if(!$result){
        die("Query error " . mysqli_error($mysqli));
    }

    $json = array();

    while($row = $result->fetch_array()){
        
        $json[] = array(
            'id' => $row['idparticipante'],
            'nro' => $row['nro'],
            'nombres' => $row['nombres'],
            'apellidos' => $row['apellidos'],
            'participacion' => $row['participacion'],
            'codigo' => $row['codigo'],
            'idcertificado' => $row['certificados_idcertificado']
        ); 
    
    }

    echo json_encode($json);


    function br2nl($string){
        return preg_replace('/\<br(\s*)?\/?\>/i', "\n", $string);
    }

?>