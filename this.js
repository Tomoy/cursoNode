"use strict";

//constructor de objetos

function Coche(numRuedas) {
    this.nRuedas = numRuedas;
    this.cuantasRuedas = function() {
        console.log("This ", this);
        console.log("Tiene:", this.nRuedas, "ruedas");
    }
}

const auto = new Coche(4);

//Corregimos el problema de perder el this al llamarse el método por referencia
setTimeout(auto.cuantasRuedas.bind(auto), 1000);

const autobus = new Coche(8);

//Con call pasando como refe otro objeto
autobus.cuantasRuedas.call(auto);