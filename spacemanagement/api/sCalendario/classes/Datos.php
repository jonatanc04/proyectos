<?php

class Datos {

    private $espacio;
    private $horario;
    private $horaInicio;
    private $tipo;
    private $duracion;

    public function __construct($espacio, $horario, $horaInicio, $tipo, $duracion) {
        $this->espacio = $espacio;
        $this->horario = $horario;
        $this->horaInicio = $horaInicio;
        $this->tipo = $tipo;
        $this->duracion = $duracion;
    }

    static function getData($link) {
        try{
            $consulta = $link->prepare("SELECT * FROM datos");
            $consulta->execute();
            return $consulta->fetchAll(PDO::FETCH_ASSOC);
        } catch(PDOException $e){
            $dato = "¡Error!: " . $e->getMessage() . "<br/>";
            require "../view/mensaje.php";
            die();
        }
    }

    function getEspacioByInicio($link){
        try{
            $consulta = $link->prepare("SELECT * FROM datos WHERE horaInicio = :horaInicio");
            $consulta->bindParam(':horaInicio', $this->horaInicio);
            $consulta->execute();
            return $consulta->fetch(PDO::FETCH_ASSOC);

        } catch(PDOException $e){
            $dato = "¡Error!: " . $e->getMessage() . "<br/>";
            require "../view/mensaje.php";
            die();
        }
    }

    function insertarEspacio($link) {
        try {
            $consulta = $link->prepare("INSERT INTO datos (espacio, horario, horaInicio, tipo, duracion) VALUES (:espacio, :horario, :horaInicio, :tipo, :duracion)");
            $consulta->bindParam(':espacio', $this->espacio);
            $consulta->bindParam(':horario', $this->horario);
            $consulta->bindParam(':horaInicio', $this->horaInicio);
            $consulta->bindParam(':tipo', $this->tipo);
            $consulta->bindParam(':duracion', $this->duracion);
            return $consulta->execute();
        } catch (PDOException $e) {
            $dato = "¡Error!: " . $e->getMessage() . "<br/>";
            require "../view/mensaje.php";
            die();
        }
    }

}