'use strict'

//Funcion con call back por si fuera asíncrono, no puedo devolver automáticamente
function suma(a,b, callback) {
    const resultado = a + b;
   //Algo que tarda mucho (asíncrono)
   setTimeout(function(){   //Asíncrono, el código sigue corriendo, y cuando pasan los 2 sec, se llama esta función
        callback(resultado);
   }, 2000);
   //return resultado;
}

const total = suma(3, 7, function(resultado){
    console.log('El resultado es: ', resultado);
});

console.log('Total: ', total); //Undefined porque la función suma no retorna nada