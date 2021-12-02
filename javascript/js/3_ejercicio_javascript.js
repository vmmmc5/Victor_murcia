"use strict"
console.log("cambiando a mayusculas");
var ciudad1 = "new york";
 ciudad1 = ciudad1.toUpperCase();
console.log(ciudad1);
console.log("Pasando todo a Minusculas");
var nombreminuscula = ("VICTOR MANUEL");
nombreminuscula = nombreminuscula.toLocaleLowerCase();
console.log(nombreminuscula);
console.log("Primera letra en Mayuscula");
var primerletramayuscula = "mexico";
primerletramayuscula= primerletramayuscula[0].toUpperCase() + primerletramayuscula.slice(1);
console.log(primerletramayuscula);
console.log("extrayendo partes de la cadena de texto (slice)");
var anyo2 = "156892";
var auxconsecutivo = anyo2.slice(3,5);
console.log(auxconsecutivo);
console.log("contando caracteres");
var materia = "Matematicas";
console.log(materia);
console.log("longitud:" + materia.length);
console.log("buscando espacios dobles");
var nombres = "Victor  Manuel";
for (var i = 0; i <= nombres.length; i++){
    if (nombres.slice(i, (i + 2)) ===  "  ") { 
    console.log(" la cadena tiene Espacios dobles");
    break;
}
}
console.log("remplazando texto");
var hobby = " jugar cartas";
var newlang = "poker";
for ( var i = 0; i < hobby.length; i++){
    if(hobby.slice(i, i + 6) === "cartas"){
        hobby = hobby.slice(0, i);
    }
}
console.log(hobby + newlang);
console.log("reemplazando texto con indexof");
console.log( hobby + newlang);
var hobby2 = "jugar uno hasta ganar";
var firstchar = hobby2.indexOf( "uno")
if (firstchar !== -1){
    hobby2 = hobby2.slice(0, firstchar) + "poker" + hobby2.slice(firstchar + 3);
    console.log(hobby2);
}
console.log("extraer primer caracter");
var primerapellido = "Murcia";
var primercaracter = primerapellido.charAt(0);
console.log(primercaracter);
console.log("extraer ultimo caracter");
var primernombre = "Victor";
var ultimocaracter = primernombre.charAt(primernombre.length -1);
console.log(ultimocaracter);
console.log("buscando caracteres especiales");
var frase = "¡Qué calor!"
for (var i = 0; i < frase.length; i++){
    if (frase.charAt(i) === "!"){
        console.log("La cadena tiene signos de admiración.");
    }
}
console.log("remplazando caracteres con el metodo replace");
var comida = "tenemos bandeja paisa";
comida = comida.replace("bandeja paisa","arroz con pollo");
console.log(comida);
