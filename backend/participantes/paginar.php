<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    require_once "../connect.php";


    $id_certificado = $_GET['id'];
    $pages_size = $_GET['size'];


    $rs = $mysqli->query("SELECT COUNT(*) AS filas FROM participantes INNER JOIN certificados ON participantes.certificados_idcertificado = certificados.idcertificado WHERE certificados.idcertificado = '$id_certificado';");
    if($row = $rs->fetch_array()) {
        $pages_total = $row['filas'];
    }
    $pages = ceil($pages_total / $pages_size); 



    $json = array();

    if($pages==0){
        $json[] = array(
            'pagina' => 1,
            'size' => 0,
            'offset' => 0,
            'rows' => $pages_total
        );   
    }else{
        for($i = 0; $i < $pages; $i++){
        
            $json[] = array(
                'pagina' => $i+1,
                'size' => $pages_size,
                'offset' => $i*$pages_size,
                'rows' => $pages_total
            );   
        
        }
    }
    

    echo json_encode($json);



?>