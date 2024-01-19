<?php
include "../config/corsConfig.php";
include "config/autocarga.php";
$base = new Base();

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    if (isset($_GET['nombre'])) {
        $clase = new Clase($_GET['id'], $_GET['nombre']);
        $existe = $clase->getClase($base->link);
        if ($existe) {
            header("HTTP/1.1 200 OK");
            echo json_encode($clase->getClase($base->link), JSON_UNESCAPED_UNICODE);
            exit();
        } else {
            echo json_encode($existe);
            exit();
        }
    } else {
        if ($users = Clase::getAllClasses($base->link)) {
            header("HTTP/1.1 200 OK");
            echo json_encode(Clase::getAllClasses($base->link), JSON_UNESCAPED_UNICODE);
            exit();
        } else {
            echo json_encode(false);
            exit();
        }
    }
} else if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $inputJSON = file_get_contents('php://input');
    $inputData = json_decode($inputJSON, true);
    
    $clase = new Clase($inputData['id'], $inputData['nombre']);
    $existe = $clase->getClase($base->link);
    if (!$existe) {
        header("HTTP/1.1 200 OK");
        echo json_encode($clase->crear($base->link), JSON_UNESCAPED_UNICODE);
        exit();
    } else {
        echo json_encode(false);
        exit();
    }
}

header("HTTP/1.1 400 Bad Request");

?>