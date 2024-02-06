<?php

class Reserva {

    private $id;
    private $idAula;
    private $dniUser;
    private $fecha_reserva;

    function __construct($id, $idAula='', $dniUser='', $fecha_reserva='') {
        $this->id = $id;
        $this->idAula = $idAula;
        $this->dniUser = $dniUser;
        $this->fecha_reserva = $fecha_reserva;
    }

    static function todasLasReservas($link) {
        try{
            $consulta = $link->prepare("SELECT * FROM reservas");
            $consulta->execute();
            return $consulta->fetchAll(PDO::FETCH_ASSOC);
        } catch(PDOException $e){
            $dato = "¡Error!: " . $e->getMessage() . "<br/>";
            require "../view/mensaje.php";
            die();
        }
    }

    function getReserva($link) {
        try {
            $consulta = $link->prepare("SELECT * FROM reservas WHERE id = :id");
            $consulta->bindParam(':id', $this->id);
            $consulta->execute();
            return $consulta->fetch(PDO::FETCH_ASSOC);

        } catch(PDOException $e){
            $dato = "¡Error!: " . $e->getMessage() . "<br/>";
            require "../view/mensaje.php";
            die();
        }
        
    }

    function reservar($link) {
        try {
            $consulta = $link->prepare("INSERT INTO reservas (id, idAula, dniUser, fecha_reserva) VALUES (:id, :idAula, :dniUser, :fecha_reserva)");
            $consulta->bindParam(':id', $this->id);
            $consulta->bindParam(':idAula', $this->idAula);
            $consulta->bindParam(':dniUser', $this->dniUser);
            $consulta->bindParam(':fecha_reserva', $this->fecha_reserva);
            return $consulta->execute();
        } catch (PDOException $e) {
            $dato = "¡Error!: " . $e->getMessage() . "<br/>";
            require "../view/mensaje.php";
            die();
        }
    }

}