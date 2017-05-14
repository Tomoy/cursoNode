'use strict'

//Funcion que escribe un texto en la consola tras dos segundos
console.log('empiezo');

function escribeConDelay(texto, callback) {
    setTimeout(function(){
        console.log(texto);
        callback();
    }, 2000);
}

// bucle asíncrono en serie 

for (let i = 0; i < 5; i ++) {
    escribeConDelay("texto: " + i, function() {

    });
}