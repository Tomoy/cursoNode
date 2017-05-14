'use strict'

const basicAuth = require('basic-auth');

module.exports = (req, res, next) => {
    const user = basicAuth(req);

    //Lo lógico sería buscar en la base de datos en la colección user, user.name y comprobar la passwd
    if (!user || user.name !== 'admin' || user.pass !== '123') {
        res.set('WWW-Authenticate', 'Basic realm=Authorization Required'); //Cabecera
        res.send(401); //Status de auth
        return; // Para que no pase
    }
    next();
}