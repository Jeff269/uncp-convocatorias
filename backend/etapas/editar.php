<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

    require_once "../connect.php";
    require_once "../validar_token.php";
    
    $tipo_resp = $_REQUEST['tipo_resp'];
    $json = $_REQUEST['data'];
    $data = json_decode($json);   


    function saltoLinea($str) { 
        return str_replace(array("\r\n", "\r", "\n"), "<br />", $str); 
    }  


    if(isset($_REQUEST['authorization']) && $_REQUEST['authorization']!=null && $_REQUEST['authorization']!=""){
        $token = $_REQUEST['authorization'];
        $val_token = validarToken($token);
        $parset_token = json_decode($val_token);
    }else{
        die('{"code":404}');
    }

    if($parset_token->code=="200" && $parset_token->privilegios=="1"){
        $resultadoBD = false;
        switch($tipo_resp){
            case 1: 
                    if(isset($data->idusuario)){ 
                        $query = "UPDATE `etapas` SET `nombre_etapa`='$data->nombre_etapa', `duracion`='$data->duracion', `comienzo`='$data->comienzo', `fin`='$data->fin', `estado`='$data->estado', `dias_efectivos`='$data->dias_efectivos', `fecha_mod_etapa`=now(), `usuarios_idusuario_etapa`='$data->idusuario', `dependencias_iddependencia_etapa`=NULL WHERE `idetapa`='$data->id';";
                    }else{
                        $query = "UPDATE `etapas` SET `nombre_etapa`='$data->nombre_etapa', `duracion`='$data->duracion', `comienzo`='$data->comienzo', `fin`='$data->fin', `estado`='$data->estado', `dias_efectivos`='$data->dias_efectivos', `fecha_mod_etapa`=now(), `usuarios_idusuario_etapa`=NULL, `dependencias_iddependencia_etapa`=NULL WHERE `idetapa`='$data->id';";
                    }
                    break;

            case 2: 
                    if(isset($data->iddependencia)){
                        $query = "UPDATE `etapas` SET `nombre_etapa`='$data->nombre_etapa', `duracion`='$data->duracion', `comienzo`='$data->comienzo', `fin`='$data->fin', `estado`='$data->estado', `dias_efectivos`='$data->dias_efectivos', `fecha_mod_etapa`=now(), `usuarios_idusuario_etapa`=NULL, `dependencias_iddependencia_etapa`='$data->iddependencia' WHERE `idetapa`='$data->id';";
                    }else{
                        $query = "UPDATE `etapas` SET `nombre_etapa`='$data->nombre_etapa', `duracion`='$data->duracion', `comienzo`='$data->comienzo', `fin`='$data->fin', `estado`='$data->estado', `dias_efectivos`='$data->dias_efectivos', `fecha_mod_etapa`=now(), `usuarios_idusuario_etapa`=NULL, `dependencias_iddependencia_etapa`=NULL WHERE `idetapa`='$data->id';";
                    }
                    break;
        }    
    }else{
        die("Usuario no autorizado!");
    }
    

   
    $result = $mysqli->query($query);
    if(!$result){
        die("Query error " . mysqli_error($mysqli));
    }else{
        $resultadoBD = true;
    }
    
   
    if($resultadoBD){
        echo '200';
    }else{
        echo '302';
    }
   


?>