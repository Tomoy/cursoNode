"use strict";

function crearAgente(nombre) {
    return {
        getNombre: function() {
            return nombre;
        },
        setNombre: function(valor) {
            nombre = valor;
        },
        saluda: function() {
            console.log("Hola mi nombre es: ", nombre);
        }
    }
}

const jones = crearAgente("Jones");

jones.saluda();

const brown = crearAgente("Brown");

brown.saluda();

setTimeout(brown.saluda, 1000);