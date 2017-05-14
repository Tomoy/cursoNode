//tengo el módulo http disponible para usar
var http = require('http');

var server = http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'}); //Indico que la respuesta va a ser texto plano
    response.end('<h3>Response from the server!</h3> Wake up, Neo...\n');
});

//Arrancamos el server

//Usamos un puerto que no esté en uso y la ip de localhost, nuestra maquina local
var port = 1337;
var ip = '127.0.0.1';

server.listen(port, ip);
console.log('Servidor arrancado en 127.0.0.1:1337'); //Imprimo mensaje en consola


