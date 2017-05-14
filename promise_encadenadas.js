'use strict';

//Funciones que devuelven promesas

function conArroz(plato) {
    return new Promise((resolve, reject) => {
        resolve(plato + ' arroz,');
    });
}

function conAjo(plato) {
    return new Promise((resolve, reject) => {
        //resolve(plato + ' ajo,');
        reject(':@ error fatal viejaa :@');
    });
}

function con(plato, ingrediente) {
    return new Promise((resolve, reject) => {
        resolve(plato + ' ' + ingrediente);
    });
}

//encadenar promesas

const paella = 'paella con';

conArroz(paella)
    .then(conAjo) //conAjo recibe el plato que devolvió conArroz()
    .then((plato)=> {  //como la funcion con necesita un parámetro extra, 
                       // hay que hacer la funcion mano y devolverla para que la promesa siga con el otro then
       return con(plato, 'sal');
    })
    .then((plato)=> {
        console.log(plato);
    })
    .catch(err => { //Junta el error de cualquier promesa que falle
        console.log('Hubo un error: ', err);
    });