<?php

class Reserva {

    private $id;
    private $idAula;
    private $dniUser;
    private $diaInicio;
    private $horaInicio;
    private $diaFin;
    private $horaFin;

    function __construct($id = null, $idAula='', $dniUser='', $diaInicio='', $horaInicio='', $diaFin='', $horaFin='') {
        $this->id = $id;
        $this->idAula = $idAula;
        $this->dniUser = $dniUser;
        $this->diaInicio = $diaInicio;
        $this->horaInicio = $horaInicio;
        $this->diaFin = $diaFin;
        $this->horaFin = $horaFin;
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

    function deleteReserva($link) {
        try {
            $consulta = $link->prepare("DELETE FROM reservas WHERE id = :id");
            $consulta->bindParam(':id', $this->id);
            $consulta->execute();
            return true;
    
        } catch(PDOException $e){
            $dato = "¡Error!: " . $e->getMessage() . "<br/>";
            require "../view/mensaje.php";
            die();
        }
    }
    

    function reservar($link) {
        try {
            $consulta = $link->prepare("INSERT INTO reservas (idAula, dniUser, diaInicio, horaInicio, diaFin, horaFin) VALUES (:idAula, :dniUser, :diaInicio, :horaInicio, :diaFin, :horaFin)");
            $consulta->bindParam(':idAula', $this->idAula);
            $consulta->bindParam(':dniUser', $this->dniUser);
            $consulta->bindParam(':diaInicio', $this->diaInicio);
            $consulta->bindParam(':horaInicio', $this->horaInicio);
            $consulta->bindParam(':diaFin', $this->diaFin);
            $consulta->bindParam(':horaFin', $this->horaFin);
            return $consulta->execute();
        } catch (PDOException $e) {
            $dato = "¡Error!: " . $e->getMessage() . "<br/>";
            echo "Error al ejecutar la consulta: " . $e->getMessage();
            die();
        }
    }
}
