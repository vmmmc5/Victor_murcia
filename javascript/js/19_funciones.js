"use estrict"
function mostrarhora() {
var fechactual = new Date();
var horaactual = fechactual.getHours();
var minutosactual = fechactual.getMinutes();
if (horaactual > 12){
    horaactual = horaactual - 12;
}
if (horaactual < 10 ){
    horaactual = "0" + horaactual;
}
if (minutosactual < 10 ){
    minutosactual = "0" + minutosactual;
}
alert("horaactual: " + horaactual + ":" + minutosactual);
}
function presentacion(nombre,titulado){
    alert("bienvenido" + " " + nombre + " " + titulado)
}

function validardescuento(compra){
    var total = 0;
    /* Si la compra es mayor a 10000 tiene un descuento de 10%*/
    if(compra >= 10000){
        total = compra *.90;
    } 
    /*si la compra esta entre  5.000 y menos de de 10.000 tiene descuento del 5%*/
    else if(compra <= 5000 && compra <= 9999){
        total = compra *.95;
    }
    else{
        total = compra;
    }
    return total;
}
function calculardescuento(compra) {
    alert("costo total $" + validardescuento(compra));

}