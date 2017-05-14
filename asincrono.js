'use strict'

//Funcion que escribe un texto en la consola tras dos segundos
console.log('empiezo');

function escribeConDelay(texto, callback) {
    setTimeout(function(){
        console.log(texto);
        callback();
    }, 2000);
}

escribeConDelay("Texto 1 de prueba que viene con delay", function(){
    escribeConDelay("Texto 2 de prueba que viene con delay", function(){
        console.log("Fin");
    });
});