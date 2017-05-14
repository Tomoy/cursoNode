"use strict"

const fs = require('fs');
const async = require('async');
const versionModulo = require('./versionModulo.js');

//Versión de un módulo en particular
/*versionModulo("chance", (err, version) => {
    if (err) {
        console.error("Hubo un error: ", err);
        return;
    }

    console.log("La versión de chance es: ", version);
})*/

//Lista de todos los módulos

function versionModulos(callback) {
    //Leer contenido de node_modules
    fs.readdir('./node_modules', (err, lista) => {
        if (err) {
            callback(err);
            return;
        }

        //Esta función la vamos a ejecutar con cada elemento de la lista de directorios
        function iterador(item, callbackIterador) {
            //Descartamos archivos o carpetas que empiecen con .
            if (item[0] == ".") {
                callbackIterador(null); //Para que no lo cuente, se podría pasar nada tamb
                return;
            }
            versionModulo(item, (err, version)=> {
                if (err) {
                    callbackIterador(err);
                    return;
                }
                
                //sacar nombre y versión de cada modulo que encontremos
                //Devuelvo la respuesta como objeto para pasar mas data
                callbackIterador(null, {nombre: item, version: version});
            });
        }

        //devolvemos la lista de modulos
        async.concat(lista, iterador,  callback); // recorre la lista y les ejecuta el iterador y al terminar ejecuta el callback que devuelve iterador
    });
}

versionModulos( (err, listaModulos) => {
    if (err) {
        console.error("Hubo un error: ", err);
        return;
    }

    for (let i= 0; i < listaModulos.length; i++) {
        console.log("El módulo: ", listaModulos[i].nombre, " tiene la versión: ", listaModulos[i].version);
    }
});