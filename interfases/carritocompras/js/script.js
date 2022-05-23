"use strict"
let cantidadLibrosGlobal = document.getElementById("cantidadLibros").innerHTML;

function pruebaSuma() {
    if (cantidadLibrosGlobal < 10) {
        cantidadLibrosGlobal =Number(cantidadLibrosGlobal) + 1;
        document.getElementById("cantidadLibros").innerHTML = cantidadLibrosGlobal;
    }    
    modificarTotal();
}
function pruebaResta() {
    cantidadLibrosGlobal = document.getElementById("cantidadLibros").innerHTML;
    if (cantidadLibrosGlobal > 0 ) {
        cantidadLibrosGlobal = Number(cantidadLibrosGlobal) - 1;
        document.getElementById("cantidadLibros").innerHTML = cantidadLibrosGlobal;
    }  
    modificarTotal();
}
function modificarTotal() {
    let cantidadLibros = document.getElementById("cantidadLibros").innerHTML;
    if (cantidadLibros == "1") {
        document.getElementById("cantidadSingularPlural").innerHTML = cantidadLibros + " producto";
    } else {
        document.getElementById("cantidadSingularPlural").innerHTML = cantidadLibros + " productos";
    }
    mostrarTotal();
}
function mostrarTotal() {
    let valorUnitario = document.getElementById("valorUnitario").innerHTML;
    let costoTotal = Number(valorUnitario) * Number(cantidadLibrosGlobal);
    document.getElementById("costoTotal").innerHTML = costoTotal;
}

