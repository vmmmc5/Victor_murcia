"use strict"

class Automovil{
    constructor(marca, modelo, anyo){
        this.Marca = marca;
        this.Modelo = modelo;
        this.Anyo = anyo;
    }
}

let auto = new Automovil();

auto.Anyo = 2021;
auto.Marca = "Mazda";
auto.Modelo = "3 prime";

let buscarAutos = document.getElementById("buscarAutos");

buscarAutos.addEventListener("click", function() {
    maquetacion();
    let infoAutomovil = auto.Marca + " " + auto.Modelo + " Modelo " + auto.Anyo;
    document.getElementById("infoAuto").innerHTML = infoAutomovil;
});

function maquetacion() {
    let mainContent = document.getElementById("mainContent");
    let marca = document.createElement("label");
    let textoMarca = document.createTextNode("holis yo soy un label");
    marca.appendChild(textoMarca);
    marca.setAttribute("class", "style-marca");
    mainContent.appendChild(marca);  
    let imagenAuto = document.createElement
}