const http = require('http'); //Load http library

// Define a server
const server = http.createServer(function(request, response){  //Cada petición que se haga a mi server, va a ejecutar esta función con esos parámetros
    response.writeHead(200, {'Content-Type':'text/html'});

    response.end('Response <i>from</i> the <b>server</b> \n');
});

// Start server
server.listen(1330, '127.0.0.1');
console.log('Servidor arrancado en http://127.0.0.1:1330');