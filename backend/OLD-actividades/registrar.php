<?php


    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

    require_once "../connect.php";
    require_once "../validar_token.php";


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
        $query = "INSERT INTO `actividades`(nombre_act,plazo,financiamiento,tipo_proceso,fecha_act,fecha_mod_act,proyectos_idproyecto,usuarios_idusuario,dependencias_iddependencia) VALUES ('$data->nombre_act','$data->plazo','$data->financiamiento','$data->tipo_proceso',now(),now(),'$data->idproyecto',NULL,NULL);";
    }else{
        die("Usuario no autorizado!");
    }


   
    $result = $mysqli->query($query);
    if(!$result){
        die("Query error " . mysqli_error($mysqli));
    }else{
        $resultadoBD = true;

        $rs = $mysqli->query("SELECT idactividad FROM actividades ORDER BY idactividad DESC LIMIT 1");
        if ($row = $rs->fetch_array()) {
            $last_actividad = trim($row['idactividad']);
            $last_actividad = floatval($last_actividad);
        }

        $resultadoBD2 = false;
        /*$query = "INSERT INTO `etapas`(nombre_etapa,duracion,comienzo,fin,estado,fecha_fin,dias_efectivos,fecha_etapa,fecha_mod_etapa,actividades_idactividad) */
        $query2 = "INSERT INTO `etapas`(nombre_etapa,estado,fecha_etapa,fecha_mod_etapa,actividades_idactividad) 
                VALUES 
                ('PLAN DE TRABAJO','0',now(),now(),'$last_actividad'),
                ('PRESENTACIÓN DE TDR/EETT/EXPEDIENTE TÉCNICO A DGA','0',now(),now(),'$last_actividad'),
                ('INICIO DE INDAGACIÓN DE MERCADO','0',now(),now(),'$last_actividad'),
                ('CULMINACIÓN Y APROBACIÓN DE INDAGACIÓN DE MERCADO','0',now(),now(),'$last_actividad'),
                ('TIPO DE PROCESO DE SELECCIÓN/VALOR ESTIMADO / VALOR REFERENCIAL','0',now(),now(),'$last_actividad'),
                ('APROBACIÓN DE CERTIFICACIÓN PRESUPUESTAL','0',now(),now(),'$last_actividad'),
                ('APROBACIÓN DEL EXPEDIENTE DE CONTRATACIÓN','0',now(),now(),'$last_actividad'),
                ('DESIGNACIÓN DEL COMITÉ ESPECIAL / PERMANENTE','0',now(),now(),'$last_actividad'),
                ('APROBACIÓN DE BASES ADMINISTRATIVAS','0',now(),now(),'$last_actividad'),
                ('CONVOCATORIA','0',now(),now(),'$last_actividad'),
                ('CONSULTAS Y OBSERVACIONES','0',now(),now(),'$last_actividad'),
                ('PRESENTACIÓN DE PROPUESTAS','0',now(),now(),'$last_actividad'),
                ('BUENA PRO','0',now(),now(),'$last_actividad'),
                ('CONSENTIMIENTO DE LA BUENA PRO','0',now(),now(),'$last_actividad'),
                ('PERFECCIONAMIENTO DEL CONTRATO/ COMPROMISO','0',now(),now(),'$last_actividad'),
                ('EJECUCIÓN CONTRACTUAL','0',now(),now(),'$last_actividad'),
                ('ENTREGA, RECEPCIÓN, CONFORMIDAD','0',now(),now(),'$last_actividad'),
                ('DEVENGADO','0',now(),now(),'$last_actividad'),
                ('GIRADO/ PAGADO','0',now(),now(),'$last_actividad')
                ;";
        
        $result2 = $mysqli->query($query2);
        if(!$result2){
            die("Query error " . mysqli_error($mysqli));
        }else{
            $resultadoBD2 = true;
        }
    }

   
    if($resultadoBD && $resultadoBD2){
        echo '200';
    }else{
        echo '302';
    }
   


?>