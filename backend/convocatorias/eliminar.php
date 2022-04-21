<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

    require_once "../connect.php";
    require_once "../validar_token.php";

    
    $json = $_REQUEST['data'];
    $data = json_decode($json);   
   


    if(isset($_REQUEST['authorization']) && $_REQUEST['authorization']!=null && $_REQUEST['authorization']!=""){
        $token = $_REQUEST['authorization'];
        $val_token = validarToken($token);
        $parset_token = json_decode($val_token);
    }else{
        die('{"code":404}');
    }

    if($parset_token->code=="200" && $parset_token->privilegios=="1"){
        $resultadoBD1 = false;
        $resultadoBD2 = false;
        $query = "DELETE FROM `participantes` WHERE `certificados_idcertificado`='$data->id';";
    }else{
        die("Usuario no autorizado!");
    }
    

   
    $result = $mysqli->query($query);
    if(!$result){
        die("Query error " . mysqli_error($mysqli));
    }else{
        $resultadoBD1 = true;

        $query2 = "DELETE FROM `certificados` WHERE `idcertificado`='$data->id';";
        $result2 = $mysqli->query($query2);
        if(!$result2){
            die("Query error " . mysqli_error($mysqli));
        }else{
            $resultadoBD2 = true;
        }
    }
    
   
    if($resultadoBD1 & $resultadoBD2){
        echo '200';
    }else{
        echo '302';
    }
 

?>