"use strict"
function pruebaSuma() {
    let cantidadLibros = document.getElementById("cantidadLibros").innerHTML;
    if (cantidadLibros < 10) {
        cantidadLibros =Number(cantidadLibros) + 1;
        document.getElementById("cantidadLibros").innerHTML = cantidadLibros;
    }    
}
function pruebaResta() {
    let cantidadLibros = document.getElementById("cantidadLibros").innerHTML;
    if (cantidadLibros > 0 ) {
        cantidadLibros = Number(cantidadLibros) - 1;
        document.getElementById("cantidadLibros").innerHTML = cantidadLibros;
    }  
}
