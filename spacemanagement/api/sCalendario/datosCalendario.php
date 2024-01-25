<?php
include "../config/corsConfig.php";
include "config/autocarga.php";
$base = new Base();

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    
} else if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $inputJSON = file_get_contents('php://input');
    $inputData = json_decode($inputJSON, true);

    $datos = new Datos($inputData['nombre'], $inputData['id_calendario'], $inputData['hora_inicio'], $inputData['tiempo_sesion'], $inputData['total_sesiones'], $inputData['descansos'], $inputData['tiempo_descanso'], $inputData['pos_descanso'], $inputData['hora_init_tarde'], $inputData['tiempo_ses_tarde'], $inputData['total_ses_tarde'], $inputData['descansos_tarde'], $inputData['tiempo_desc_tarde'], $inputData['pos_desc_tarde']);
}

header("HTTP/1.1 400 Bad Request");

?>