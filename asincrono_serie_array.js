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
//llamar a una función con cada elemento de un array
function serie(numArray, fn, callbackEnd) {
    if (numArray.length === 0) {
        callbackEnd();
        return;
    }
    //Paso como parámetro la funcion que remueve el primer elemento del array a su vez lo devuelve como para pasarlo como param
    fn("Texto: " + numArray.shift(), function(){
        serie(numArray, fn, callbackEnd);
    });
}

//Invocamos a la función ayudante

//Paso la función como referencia sin ()
serie([1,2,3,4,5], escribeConDelay, function(){
    //hemos terminado todas las iteraciones  //callback de finalización
    console.log("Fin");
});