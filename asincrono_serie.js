'use strict'

//Funcion que escribe un texto en la consola tras dos segundos
console.log('empiezo');

function escribeConDelay(texto, callback) {
    setTimeout(function(){
        console.log(texto);
        callback();
    }, 2000);
}

// vamos a hacer un bucle asíncrono
function serie(n, fn, callbackEnd) {
    if (n == 0) {
        callbackEnd();
        return;
    }
    n--;
    fn("Texto: " + n, function(){
        serie(n, fn, callbackEnd);
    });
}

//Invocamos a la función ayudante

//Paso la función como referencia sin ()
serie(5, escribeConDelay, function(){
    //hemos terminado todas las iteraciones  //callback de finalización
    console.log("Fin");
});