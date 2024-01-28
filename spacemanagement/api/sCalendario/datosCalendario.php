<?php
include "../config/corsConfig.php";
include "config/autocarga.php";
$base = new Base();

if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    if (isset($_GET['var'])) {

    } else {
        if ($data = Datos::getData($base->link)) {
            header("HTTP/1.1 200 OK");
            echo json_encode(Datos::getData($base->link), JSON_UNESCAPED_UNICODE);
            exit();
        } else {
            echo json_encode(false);
            exit();
        }
    }
    
} else if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $inputJSON = file_get_contents('php://input');
    $inputData = json_decode($inputJSON, true);

    $datos = new Datos($inputData['espacio'], $inputData['horario'], $inputData['horaInicio'], $inputData['tipo'], $inputData['duracion']);
    if (!$existe = $datos->getEspacioByInicio($base->link)) {
        header("HTTP/1.1 200 OK");
        echo json_encode($datos->insertarEspacio($base->link), JSON_UNESCAPED_UNICODE);
        exit();
    } else {
        echo json_encode(false);
        exit();
    }
}

header("HTTP/1.1 400 Bad Request");

?>