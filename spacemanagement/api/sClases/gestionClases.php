<?php
include "../config/corsConfig.php";
include "config/autocarga.php";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}
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
} else if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    $id = $_GET['delete'];
    $clase = new Clase($id);
    $eliminado = $clase->eliminar($base->link);
    if ($eliminado) {
        header("HTTP/1.1 200 OK");
        echo json_encode("Aula eliminada exitosamente");
        exit();
    } else {
        header("HTTP/1.1 500 Internal Server Error");
        echo json_encode("Error al eliminar el aula");
        exit();
    }
}

header("HTTP/1.1 400 Bad Request");

?>