'use strict'

//cargamos el driver 

const mysql = require('mysql');

//crear una conexión
const conexion = mysql.createConnection({
    host: 'didimo.es',
    user: 'usuariocurso',
    password: 'us3r',
    database: 'cursonode'
});

//Establezco la conexión creada
conexion.connect();

//Lanzar una consulta a la base de datos
conexion.query('SELECT * FROM agentes', (err, rows, fields) => {
    if (err) {
        console.log('Error: ', err);
        process.exit(0);
    }

    for (let i = 0; i < rows.length; i++) {
        const agente = rows[i];
        console.log(agente.idagentes, agente.name, agente.age);
    }

    conexion.end();
});