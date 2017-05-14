'use strict';

const mongoose = require('mongoose');

//Primero definimos un esquema
const agenteSchema = mongoose.Schema({

    name:String,
    age:Number,
    email: {
        type: String,
        index: true,
        unique: true       //Es indice único, para que no acepte duplicados
    }
});

//Creamos un método estático para Listar los agentes con distintas opciones
agenteSchema.statics.list = function(filter, limit, skip, fields, sort, callback) {
    const query = Agente.find(filter);
    query.limit(limit);
    query.skip(skip);
    query.select(fields); //Especificio que campos quiero recuperar
    query.sort(sort); 

    query.exec(callback); //Para que llame al callback que nos pasaron cuando termine de ejecutar el query
}

// creamos el modelo partiendo del schema  //all poner var, se hace hoisting y pasa arriba y está visible en todo su contexto, entonces lo puedo usar arriba
var Agente = mongoose.model('Agente', agenteSchema);

//Realmente no es necesario exportarl, porque en otros sitios podríamos recuperar el modelo usando: moongoose.model('Agente')
module.exports = Agente;