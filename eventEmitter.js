'use strict'

const EventEmitter = require("events");

const emisor = new EventEmitter();

function suenaTelefono(quien) {
    if (quien == "madre") {
        return;
    }
    console.log("Ring ring, suena el teléfono");
}

function vibrarTelefono() {
    console.log("brrr brrr");
}

//Ejecuto dos funciones distintas con el mismo evento
emisor.on('llamada telefono', suenaTelefono);
emisor.on("llamada telefono", vibrarTelefono);

emisor.emit("llamada telefono", "madre");