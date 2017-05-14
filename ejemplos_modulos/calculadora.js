"use strict";

console.log("Inicializando ....");
console.log("Terminó de cargar");

function suma(a,b) {
    return a + b;
}

function resta(a,b) {
    return a - b;
}

module.exports = {
    suma : suma,
    resta : resta
} 