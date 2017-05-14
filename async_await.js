'use strict';


//funcion que retorna una promesa

function sleep(ms) {
    return new Promise((resolve, reject) => {
       setTimeout(()=> {
           resolve();
           //reject('fatal error');
       }, ms); 
    });
}

async function main() {
    console.log('empiezo');
    await sleep(2000); //el código se para aquí hasta que se completa la promesa
    console.log('pasaron 2 segundos');
    //Sirve para hace calls asincronas mas claras, por ejemplo bucles asincronos
    for (let i= 0; i < 5; i++) {
        await sleep(1000);
        console.log('pasó un segundo');
    }
    console.log('terminado');
}

main().then(() => {})
.catch(err => {
    console.log("Hubo un error", err);
});