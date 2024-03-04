<?php

class Clase {

    private $id;
    private $name;

    function __construct($id, $name='') {
        $this->id = $id;
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
            $consulta = $link->prepare("INSERT INTO aulas (id, nombre) VALUES (:id, :nombre)");
            $consulta->bindParam(':id', $this->id);
            $consulta->bindParam(':nombre', $this->name);
            return $consulta->execute();
        } catch (PDOException $e) {
            $dato = "¡Error!: " . $e->getMessage() . "<br/>";
            require "../view/mensaje.php";
            die();
        }
    }

    function eliminar($link) {
        try {
            $consulta = $link->prepare("DELETE FROM aulas WHERE id = :id");
            $consulta->bindParam(':id', $this->id);
            return $consulta->execute();
        } catch (PDOException $e) {
            $dato = "¡Error!: " . $e->getMessage() . "<br/>";
            require "../view/mensaje.php";
            die();
        }
    }
    

}