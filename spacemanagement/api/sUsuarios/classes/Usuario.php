<?php

class Usuario {

    private $user;
    private $pwd;
    private $dni;
    private $type;

    function __construct($user='', $pwd='', $dni='', $type='') {
        $this->user = $user;
        $this->pwd = $pwd;
        $this->dni = $dni;
        $this->type = $type;
    }

    static function getAllUsers($link) {
        try{
            $consulta = $link->prepare("SELECT * FROM usuarios");
            $consulta->execute();
            return $consulta->fetchAll(PDO::FETCH_ASSOC);
        } catch(PDOException $e){
            $dato = "¡Error!: " . $e->getMessage() . "<br/>";
            require "../view/mensaje.php";
            die();
        }
    }

    function validar($link){
        try{
            $consulta = $link->prepare("SELECT * FROM usuarios WHERE user = :user");
            $consulta->bindParam(':user', $this->user);
            $consulta->execute();
            $usuario = $consulta->fetch(PDO::FETCH_ASSOC);

            if ($usuario !== false) {
                if (password_verify($this->pwd, $usuario['pwd'])) {
                    return $usuario;
                } else {
                    return false;
                }
            } else {
                return false;
            }
        } catch(PDOException $e){
            $dato = "¡Error!: " . $e->getMessage() . "<br/>";
            require "../view/mensaje.php";
            die();
        }
    }

    function comprobar($link) {
        $consulta = $link->prepare("SELECT * FROM usuarios WHERE user = :user");
        $consulta->bindParam(':user', $this->user);
        $consulta->execute();
        $usuario = $consulta->fetch(PDO::FETCH_ASSOC);

        if ($usuario !== false) {
            return true;
        } else {
            return false;
        }
    }

    function registro($link) {
        try {
            $consulta = $link->prepare("INSERT INTO usuarios (user, pwd, dni, type) VALUES (:user, :pwd, :dni, :type)");
            $consulta->bindParam(':user', $this->user);
            $consulta->bindParam(':pwd', $this->pwd);
            $consulta->bindParam(':dni', $this->dni);
            $consulta->bindParam(':type', $this->type);
            return $consulta->execute();
        } catch (PDOException $e) {
            $dato = "¡Error!: " . $e->getMessage() . "<br/>";
            require "../view/mensaje.php";
            die();
        }
    }

}