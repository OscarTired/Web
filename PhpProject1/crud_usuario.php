<?php
include_once 'conexion.php';
include_once 'usuario.php';

class CrudUsuario {
    private $conexion;

    public function __construct($conexion) {
        $this->conexion = $conexion;
    }

    public function insertar($usuario) {
        $sql = "INSERT INTO Usuarios (nombre, clave, email) VALUES (?, ?, ?)";
        $stmt = $this->conexion->prepare($sql);
        $stmt->execute([$usuario->getNombre(), $usuario->getClave(), $usuario->getEmail()]);
    }

    public function buscarUsuario($nombre) {
        $sql = "SELECT * FROM Usuarios WHERE nombre = ?";
        $stmt = $this->conexion->prepare($sql);
        $stmt->execute([$nombre]);
        $usuario = $stmt->fetch();
        if ($usuario) {
            return new Usuario($usuario['id'], $usuario['nombre'], $usuario['clave'], $usuario['email']);
        } else {
            return null;
        }
    }
}
?>
