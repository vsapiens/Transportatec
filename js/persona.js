import { getDiffieHellman } from "crypto";

class Persona {

    constructor(nombre, apellido, telefono, correo, id){
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correo = correo;
        this.id = id;
    }

    getNombre() {
        return this.nombre;
    }

    getApellido() {
        return this.apellido;
    }

    getTelefono() {
        return this.telefono;
    }

    getCorreo() {
        return this.correo;
    }

    getId() {
        return this.id;
    }
    
}