<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    require_once "../connect.php";

    $id_certificado = $_GET['id'];

    if(isset($_GET['size']) && isset($_GET['offset'])){
        $size = $_GET['size'];
        $offset = $_GET['offset'];
        $query = "SELECT participantes.* FROM participantes 
        INNER JOIN certificados ON participantes.certificados_idcertificado = certificados.idcertificado
        WHERE certificados.idcertificado = '$id_certificado' 
        ORDER BY idparticipante ASC LIMIT $size OFFSET $offset;"; 
    }else{
        $query = "SELECT participantes.* FROM participantes 
        INNER JOIN certificados ON participantes.certificados_idcertificado = certificados.idcertificado
        WHERE certificados.idcertificado = '$id_certificado'
        ORDER BY idparticipante ASC;";
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



?>