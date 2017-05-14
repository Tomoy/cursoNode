var express = require('express');
var router = express.Router();

/* GET home page. */
const segundo = new Date().getSeconds();
//condicion que si es true asigna true al estado y sino false
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    valor: '<script>alert("Cuidado con la inyección de código")</script>',
    condicion: {
      segundo: segundo,
      estado: segundo % 2 == 0 
    },
    users: [
      { name: 'Smith', age: 20},
      { name: 'Tomás', age: 30},
      { name: 'Jones', age: 71}
    ] 
  });
});

router.get("/hola", (req, res, next)=>{
  res.send("Bienvenido!");
});

//Rout con parámetro
router.get('/paramenruta/:id', (req, res, next) => {
  console.log('req.params: ', req.params);
  res.send('ok recibido el id: ' + req.params.id);
});

//Parámetro opcional
router.get('/paramopcional/:dato?', (req, res, next) => {
  console.log('parametro opcional: ', req.params);
  res.send('Okkk');
});

//Param con condición (expresión regular), si no se cumple la condición, directamente no entra en este middleware
router.get('/param/:id([0-9]+)/piso/:piso/puerta/:puerta(A|B|C)', (req, res, next) => {
  console.log('Param con condición: ', req.params);
  res.send('Todo biennn');
});

//Param con query-string

router.get('/querystring', (req,res,next) => {
  console.log("Los param de query string son: ", req.query);
  res.send('Ok!');
});

//Parámetros en el body del request
router.put('/enelbody', (req,res,next) => {
  console.log("Los param en el body son: ", req.body);
  res.send("Okaaa!");
});

module.exports = router;
