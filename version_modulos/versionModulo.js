"use strict";

const fs = require("fs");
const path = require("path");

function versionModulo(nombreModulo, callback) {
    //Leemos contenido de un fichero package.json 
    const rutaArchivo = path.join("./node_modules", nombreModulo, "package.json");
    fs.readFile(rutaArchivo, function (err, data) {
        if (err) {
            callback(err);
            return;
        }
        // parsear el contenido del fichero convirtiendolo en un objeto
        try {
            const packageObj = JSON.parse(data);
            //Leemos la version del objeto y retornamos la versión
            callback(null, packageObj.version || "No hay version");
        } catch(err) {
            callback(err);
        }
    });
}

module.exports = versionModulo;
