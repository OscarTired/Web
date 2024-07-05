<?php
class Usuario {
    private $id;
    private $nombre;
    private $clave;
    private $email;

    // Constructor
    public function __construct($id, $nombre, $clave, $email) {
        $this->id = $id;
        $this->nombre = $nombre;
        $this->clave = $clave;
        $this->email = $email;
    }

    // Getters
    public function getId() {
        return $this->id;
    }

    public function getNombre() {
        return $this->nombre;
    }

    public function getClave() {
        return $this->clave;
    }

    public function getEmail() {
        return $this->email;
    }

    // Setters
    public function setId($id) {
        $this->id = $id;
    }

    public function setNombre($nombre) {
        $this->nombre = $nombre;
    }

    public function setClave($clave) {
        $this->clave = $clave;
    }

    public function setEmail($email) {
        $this->email = $email;
    }
}
?>
