<?php
include_once 'crud_usuario.php';
include_once 'conexion.php';

$crudUsuario = new CrudUsuario($conn);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['login'])) {
        $nombre = $_POST['nombre'];
        $clave = $_POST['clave'];

        $usuario = $crudUsuario->buscarUsuario($nombre);
        if ($usuario && $usuario->getClave() == $clave) {
            session_start();
            $_SESSION['nombre'] = $usuario->getNombre();
            header('Location: cuenta.php');
        } else {
            header('Location: error.php');
        }
    } elseif (isset($_POST['registro'])) {
        $nombre = $_POST['nombre'];
        $clave = $_POST['clave'];
        $email = $_POST['email'];

        $usuario = new Usuario(null, $nombre, $clave, $email);
        $crudUsuario->insertar($usuario);
        header('Location: index.php');
    }
}
?>
