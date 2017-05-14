'use strict'

var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

//2 Formas de cargar, no hace falta requerir el modulo si no se quiere
//const Agente = Require('../../models/Agente');
const Agente = mongoose.model('Agente');


//Usando estas dos líneas puedo reutilizar la auth en cualquier rout
const basicAuth = require('../../lib/basicAuth');
router.use(basicAuth);

/* Pasado todo a un módulo para reutilizar
const basicAuth = require('basic-auth');

//Con esto protegemos solo esta ruta
router.use((req, res, next) => {
    const user = basicAuth(req);
    console.log(user);
    if (!user || user.name !== 'admin' || user.pass !== '12345') {
        res.set('WWW-Authenticate', 'Basic realm=Authorization Required'); //Cabecera
        res.send(401); //Status de auth
        return; // Para que no pase
    }
    next();
});*/


//Auth basica sin basic-auth
/*router.use((req, res, next) => {
    if (req.query.password != '1234') {
        req.send({success: false, error: 'necesitas autenticación'});
        return;
    }
    next();
});*/

//Peticion 1 para obtener agentes GET /apiv1/agentes
//Se puede agregar middlewares en las routes, los ejecuta primero y desp sigue, entonces se puede autenticar por ejemplo solo al get
router.get('/', basicAuth, function(req, res, next) {
    
    //Agente.find().exec((err, agentes) => {
    // filtros    
    const name = req.query.name;
    const age = req.query.age;
    const filter = {}

    if (name) { filter.name = name;}
    if (age) { filter.age = age;}

    //Limit
    const limit = parseInt(req.query.limit); //todo lo que viene por el query del request es string, hay que convertirlo a int
    //Skip
    const skip = parseInt(req.query.skip);
    //Fields
    const fields = req.query.fields; //Que campos devuelvo solo cuando me piden agentes
    //Sort
    const sort = req.query.sort;

    Agente.list(filter, limit, skip, fields, sort, (err, agentes) => {
        if (err) {
            next(err); // le decimos a express que devuelve el error
            return;
        }

        res.json({ success: true, result: agentes});
    })    
});

//Peticion 2 para crear un agente
router.post('/', (req,res,next) => {
    console.log(req.body);

    //Validar los tipos de datos, para estar seguro que son válidos, buena práctica

    //creamos un objeto de tipo Agente
    const agente = new Agente(req.body);
    //lo guardamos en la base de datos
    agente.save((err, agenteGuardado) => {
        if (err) {
            next(err);
            return;
        }
        res.json({success: true, result: agenteGuardado});
    })
});

module.exports = router;