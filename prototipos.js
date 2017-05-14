'use strict';

//Definimos una función constructora de objetos

function Persona(name) {
    this.name = name;
}

const tomas = new Persona("Tomás Ignacio Moyano");

//Añadimos propiedades al prototipo de las personas

Persona.prototype.saluda = function() {
    console.log("Hola, me llamo:", this.name);
}

console.log(Persona.prototype);
tomas.saluda();

// Herencia ----------------------------------

function Agente(name) {
    //Heredamos el constructor de personas
    Persona.call(this, name); //Ejecuto el constructor de Persona con mi this, es como ejecutar super, le paso el parametro que espera    
}

//Heredamos sus propiedades y métodos
Agente.prototype = new Persona("soy un prototipo");

const smith = new Agente("Smith");

smith.saluda(); // Smith se fija si su agente tiene la propiedad saluda y como no, va a su prototipo (Persona) que tampoco lo tiene,
//busca en su prototipo que si lo tiene, y lo ejecuta con el this del agente Smith

//Herencia multiple ---------------------------------

function Superheroe() {
    this.vuela = function() {
        console.log(this.name, "Vuela");
    }

    this.esquivaBalas = function() {
        console.log(this.name, "Esquiva balas");
    }
}

Object.assign(Agente.prototype, new Superheroe());

smith.esquivaBalas();
smith.vuela();