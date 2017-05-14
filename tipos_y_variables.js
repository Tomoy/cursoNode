var numero = 3;

console.log("El número es:", numero);
console.log(typeof(numero));

numero = "hola";
console.log(typeof(numero));

//strings
console.log("texto de prueba".split(" "));

//string multi linea

var multiLineText = 
    "Linea 1\n" + 
    "Linea 2\n" + 
    "Linea 3 y última";

console.log(multiLineText);

//Array
console.log("------------------- Arrays ------------------");
var textoArray = ["Línea11111", "Linea222", "Linea3333"];
console.log(textoArray.join("\n"));

//Con distintos tipo de elementos
var arrayMixto = [
    1,
    "hola",
    function(v) { return v + 2;},
    {valor:"hola"}
];

console.log(arrayMixto);
console.log(arrayMixto[0]);
console.log(arrayMixto[2](98));
console.log(arrayMixto[3].valor);
console.log("------------------- End arrays ------------------");

//Objects
console.log("------------------- Objects ------------------");
var object = {
    numero: 1,
    texto: "Holaaa",
    suma2: function(v) {
        return v + 2;
    }
};

console.log(object.numero);
console.log(object.texto);
console.log(object.suma2(15));
console.log("------------------- End Objects ------------------");

console.log("------------------- Hoisting ------------------");
//Hoisting
var x = 100;

function y() {
    if (x == 100) {
        var x = 30;
    }
    return x;
}

console.log(x, y()); //y devuelve undefined porque es redeclarado adentro de la función y
console.log("------------------- End Hoisting ------------------");
