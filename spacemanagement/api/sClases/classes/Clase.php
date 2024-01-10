<?php

class Clase {

    private $name;

    function __construct($name='') {
        $this->name = $name;
    }

    static function getAllClasses($link) {
        try{
            $consulta = $link->prepare("SELECT * FROM aulas");
            $consulta->execute();
            return $consulta->fetchAll(PDO::FETCH_ASSOC);
        } catch(PDOException $e){
            $dato = "¡Error!: " . $e->getMessage() . "<br/>";
            require "../view/mensaje.php";
            die();
        }
    }

    function getClase($link){
        try{
            $consulta = $link->prepare("SELECT * FROM aulas WHERE nombre = :nombre");
            $consulta->bindParam(':nombre', $this->name);
            $consulta->execute();
            return $consulta->fetch(PDO::FETCH_ASSOC);

        } catch(PDOException $e){
            $dato = "¡Error!: " . $e->getMessage() . "<br/>";
            require "../view/mensaje.php";
            die();
        }
    }

    function crear($link) {
        try {
            $consulta = $link->prepare("INSERT INTO aulas (nombre) VALUES (:nombre)");
            $consulta->bindParam(':nombre', $this->name);
            return $consulta->execute();
        } catch (PDOException $e) {
            $dato = "¡Error!: " . $e->getMessage() . "<br/>";
            require "../view/mensaje.php";
            die();
        }
    }

}