'use strict';

//Modulo que uso para conectarme a la db, no necesito exportar nada ya que Mongoose se guarda la conexión internamente
const mongoose = require('mongoose');
const connec = mongoose.connection;

//le decimos a mongoose que libreria de promesas vamos a usar
mongoose.Promise = global.Promise;

//Agrego un listener para escuchar posibles errores de conexión a la base de datos
connec.on('error', err => {
    console.log('Error de conexión', err);
    process.exit(1);  //Cierro la aplicación porque no puedo usar la app sin la db
});

//Listener pero solo una vez para logear solo la primera vez que se conecte
connec.once('open', () => {
    console.log('Conectado a MongoDb.');
})

mongoose.connect('mongodb://localhost/cursonode')