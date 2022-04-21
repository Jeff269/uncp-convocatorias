<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");

    require_once "../connect.php";
    require_once "../validar_token.php";

    $json_cert = $_REQUEST['data'];
    $data_cert = json_decode($json_cert); 
    $nro_imports = 0;

    if(isset($_REQUEST['authorization']) && $_REQUEST['authorization']!=null && $_REQUEST['authorization']!=""){
        $token = $_REQUEST['authorization'];
        $val_token = validarToken($token);
        $parset_token = json_decode($val_token);
    }else{
        die('{"code":404}');
    }

    if($parset_token->code=="200" && $parset_token->privilegios=="1"){
        $resultadoUP = false;
        $resultadoBD = false;
        $data_csv_nro = [];
        $data_csv_nombres = [];
        $data_csv_apellidos = [];
        $data_csv_participacion = [];
        $data_csv_codigo = [];
    }else{
        die("Usuario no autorizado!");
    }


    
    
    if(!empty($_FILES["file"]["type"])){
        $fileName = uniqid();
        $valid_extensions = array("csv", "doc", "docx");
        $temporary = explode(".", $_FILES["file"]["name"]);
        $file_extension = strtolower(end($temporary));
        $fileName = $fileName.".".$file_extension;

        if((($_FILES["file"]["type"] == "application/vnd.ms-excel") || ($_FILES["file"]["type"] == "text/plain") || ($_FILES["file"]["type"] == "text/csv") || ($_FILES["file"]["type"] == "text/tsv")) && in_array($file_extension, $valid_extensions)){
            $fp = fopen ($_FILES['file']['tmp_name'],"r");
            while ($data = fgetcsv($fp, 1000, ";")){
                
                if(isset($data[1]) && $data[1]!="" && isset($data[2]) && $data[2]!=""){ 
                    $num = count($data);
                    $nro_imports += 1;
                    array_push($data_csv_nro, intval($data[0]));
                    array_push($data_csv_nombres, $data[1]);
                    array_push($data_csv_apellidos, $data[2]);
                    array_push($data_csv_participacion, $data[3]);
                    
                    $gen_cod = "";
                    switch(true){
                        case $data[0] < 10: 
                            $gen_cod = $data_cert->codigo.'-0000'.intval($data[0]).'-'.$data_cert->year;
                            break;
                        case $data[0] < 100: 
                            $gen_cod = $data_cert->codigo.'-000'.intval($data[0]).'-'.$data_cert->year;
                            break;
                        case $data[0] < 1000: 
                            $gen_cod = $data_cert->codigo.'-00'.intval($data[0]).'-'.$data_cert->year;
                            break;
                        case $data[0] < 10000: 
                            $gen_cod = $data_cert->codigo.'-0'.intval($data[0]).'-'.$data_cert->year;
                            break;
                        case $data[0] < 100000: 
                            $gen_cod = $data_cert->codigo.'-'.intval($data[0]).'-'.$data_cert->year;
                            break;
                        default:
                        $gen_cod = $data_cert->codigo.'-'.intval($data[0]).'-'.$data_cert->year;
                            break;
                    }
                    array_push($data_csv_codigo, $gen_cod);

                }
                //echo $data[1].' -> '.$data[2];
            }
            fclose ($fp);
            $resultadoUP = true;
        }
        
        /*
        if((($_FILES["file"]["type"] == "application/pdf") || ($_FILES["file"]["type"] == "application/msword") || ($_FILES["file"]["type"] == "application/vnd.openxmlformats-officedocument.wordprocessingml.document")) && in_array($file_extension, $valid_extensions)){
            $sourcePath = $_FILES['file']['tmp_name'];
            $targetPath = URI."upload/resoluciones/".$fileName;
            if(move_uploaded_file($sourcePath,$targetPath)){
                $uploadedFile = $fileName;
                $resultadoUP = true;
            }
        }
        */
    }
      
    
    $consulta = "";
    if($resultadoUP){
        for($i=1;$i< count($data_csv_nro); $i++){
            $consulta .= "('$data_csv_nro[$i]',UPPER('$data_csv_nombres[$i]'),UPPER('$data_csv_apellidos[$i]'),UPPER('$data_csv_participacion[$i]'),UPPER('$data_csv_codigo[$i]'),'$data_cert->id'),";
        }
        $consulta = substr($consulta, 0, -1);
        $query = "INSERT INTO participantes(nro,nombres,apellidos,participacion,codigo,certificados_idcertificado) VALUES $consulta;"; 
        //echo json_encode($consulta);  
    }
        
   
    
    if($resultadoUP){
        $result = $mysqli->query($query);
        if(!$result){
            die("Query error " . mysqli_error($mysqli));
        }else{
            $resultadoBD = true;
        }
    }
    
    if($resultadoUP){
        if($resultadoBD){
            $json_res = array(
                'state' => 200,
                'result' => $nro_imports,
            );  
            echo json_encode($json_res);
        }else{
            $json_res = array(
                'state' => 302
            );  
            echo json_encode($json_res);
        }
    }else{
        $json_res = array(
            'state' => 301
        ); 
        echo json_encode($json_res);
    }

    
    




?>