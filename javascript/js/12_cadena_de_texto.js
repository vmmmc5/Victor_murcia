"use strict"
//convertir todo a mayuscula

var ciudad ="pitalito";
var ciudadMayuscula = ciudad.toUpperCase();
console.log("ciudad:" + ciudadMayuscula);
//convertir todo a minuscula 
var frase = "eStA Es UnA FrAse En MiNuSCuLA";
var fraseminuscula = frase.toLowerCase();
console.log(fraseminuscula);
//convertir todo a minusculas exectuado la primera letra
var frase2 = "Este Es otro EjemPLo De uNa FraSe";
var frase2minuscula = frase2.toLowerCase();
var primerletra = frase2.charAt(0);
var primerletramayuscula = primerletra.toUpperCase();
console.log(primerletra);
var caracteresfrase = frase2.length;
var frasecompleta = primerletramayuscula + frase2minuscula.slice(1, caracteresfrase);
console.log(frasecompleta);
//metoo replace
//replazar texto
var frase3 ="programador de bogota se volvió millonario con este metodo";
var localizacion = "pitalito";
for (var i=0; i <=frase3.length -1; i++){
    
}
