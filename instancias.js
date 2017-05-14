'use strict'

//Function as constructor of objects
function Fruit(name) {
    //this.name = name; //Con esta variable de la función, hago pública la propiedad y se puede leer y modificar desde afuera.
    //This to add things to the object that will be created
    this.setName = function(value) {name = value;}
    this.getName = function() {return name}

    //The property name is not visible from outside, you can only access it with the getter
}

//We create an object with the constructor

const lemon = new Fruit("Yellow lemon");

console.log(lemon);

console.log(lemon.getName());

lemon.setName("Yelly");

console.log(lemon.getName());