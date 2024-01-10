<?php

include "config/autocarga.php";
$base = new Base();

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    if (isset($_GET['nombre'])) {
        $clase = new Clase($_GET['nombre']);
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
    $clase = new Clase($_POST['nombre']);
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