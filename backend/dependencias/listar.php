<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    require_once "../connect.php";

    if(isset($_GET['size']) && isset($_GET['offset'])){
        $size = $_GET['size'];
        $offset = $_GET['offset'];
        $query = "SELECT * FROM dependencias ORDER BY iddependencia DESC LIMIT $size OFFSET $offset;"; 
    }else{
        $query = "SELECT * FROM dependencias ORDER BY iddependencia DESC;";
    }
    

    $result = $mysqli->query($query);


    if(!$result){
        die("Query error " . mysqli_error($mysqli));
    }

    $json = array();

    while($row = $result->fetch_array()){

        $json[] = array(
            'id' => $row['iddependencia'],
            'nombre' => $row['nombre_dep']
        );   
    
    }

    echo json_encode($json);



?>