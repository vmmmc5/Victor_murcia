"use strict"
/*variable local*/
function asignaredad(){
    let edad = 5 + 3;
    console.log(edad);
}
asignaredad();
/*variable global*/
var nombre = "victor";
function mostrarnombre(){
    console.log("nombre: " + nombre);
}
mostrarnombre();