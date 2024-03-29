<?php
include "../config/corsConfig.php";
include "config/autocarga.php";
$base = new Base();

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    if (isset($_GET['id'])) {
        $reserva = new Reserva($_GET['id']);
        if ($existe = $reserva->getReserva($base->link)) {
            header("HRRT/1.1 200 OK");
            echo json_encode($respuesta = $reserva->getReserva($base->link), JSON_UNESCAPED_UNICODE);
            exit();
        } else {
            echo json_encode(false);
            exit();
        }

    } else {
        if ($reservas = Reserva::todasLasReservas($base->link)) {
            header("HTTP/1.1 200 OK");
            echo json_encode(Reserva::todasLasReservas($base->link), JSON_UNESCAPED_UNICODE);
            exit();
        } else {
            echo json_encode(false);
            exit();
        }
    }
} else if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $inputJSON = file_get_contents('php://input');
    $inputData = json_decode($inputJSON, true);

    $reserva = new Reserva(null, $inputData['idAula'], $inputData['dniUser'], $inputData['diaInicio'], $inputData['horaInicio'], $inputData['diaFin'], $inputData['horaFin']);
    if (!$existe = $reserva->getReserva($base->link)) {
        header("HTTP/1.1 200 OK");
        echo json_encode($reserva->reservar($base->link), JSON_UNESCAPED_UNICODE);
        exit();
    } else {
        echo json_encode(false);
        exit();
    }
} else if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    if(isset($_GET['id'])) {
        $reserva = new Reserva($_GET['id']);
        if ($existe = $reserva->getReserva($base->link)) {
            header("HTTP/1.1 200 OK");
            echo json_encode($reserva->deleteReserva($base->link), JSON_UNESCAPED_UNICODE);
            exit();
        } else {
            echo json_encode(false);
            exit();
        }
    } else {
        if (Reserva::eliminarTodasLasReservas($base->link)) {
            header("HTTP/1.1 200 OK");
            echo json_encode(true);
            exit();
        } else {
            echo json_encode(false);
            exit();
        }
    }
}