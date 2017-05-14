'use strict'

//funcion que retorna una promesa

function sleep(ms) {
    return new Promise((resolve, reject) => {
       setTimeout(()=> {
           //resolve();
           reject('fatal error');
       }, ms); 
    });
}

console.log('Empiezo');
const promesa = sleep(2000);

promesa.then(() => {
    console.log('termino');
}).catch(err=> {
    console.log('Hubo un error:', err);
})

console.log(promesa);