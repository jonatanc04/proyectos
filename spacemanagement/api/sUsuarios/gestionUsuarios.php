<?php
include "../config/corsConfig.php";
include "config/autocarga.php";
$base = new Base();

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    if (isset($_GET['user'])) {
        if (isset($_GET['pwd'])) {
            $usuario = new Usuario($_GET['user'], $_GET['pwd'], '', '');
            $existe = $usuario->validar($base->link);
            if ($existe) {
                header("HTTP/1.1 200 OK");
                echo json_encode($usuario->validar($base->link), JSON_UNESCAPED_UNICODE);
                exit();
            } else {
                echo json_encode($existe);
                exit();
            }
        } else {
            if ($users = Usuario::getAllUsers($base->link)) {
                header("HTTP/1.1 200 OK");
                echo json_encode(Usuario::getAllUsers($base->link), JSON_UNESCAPED_UNICODE);
                exit();
            } else {
                echo json_encode(false);
                exit();
            }
        }
    } else {
        echo json_encode(false);
        exit();
    }
} else if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $json_data = file_get_contents('php://input');
    $data = json_decode($json_data, true);

    if (isset($data['user'])) {
        $usuario = new Usuario(
            $data['user'],
            password_hash($data['pass'], PASSWORD_DEFAULT),
            $data['dni'],
            $data['type']
        );

        $existe = $usuario->comprobar($base->link);

        if (!$existe) {
            header("HTTP/1.1 200 OK");
            echo json_encode($usuario->registro($base->link), JSON_UNESCAPED_UNICODE);
            exit();
        } else {
            echo json_encode(false);
            exit();
        }
    } else {
        echo json_encode(false);
        exit();
    }
}


header("HTTP/1.1 400 Bad Request");

?>