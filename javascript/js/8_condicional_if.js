/*operdor condicional*/
"use strict"
/*condicional simple*/
var edad = 18;
if (edad >= 18){
    console.log("Bienvenido, dirijase a la mesa de votación")
}
/*condicional compuesto*/
/*ambiente 1; 20 personas*/
/*ambiente 2; 40 personas */
/*Bioauditorio: 100 personas */
/*Informar si no hay ambientes con capacidad fisica*/
/*Informar si ha ocurrido un error*/
 
var cantidadpersonas = 30;
if(cantidadpersonas >1 && cantidadpersonas <20){
    console.log("por favor, utilice el ambinete 1");
}
else if(cantidadpersonas >20 && cantidadpersonas <=40){
    console.log("por favor utilice el ambiente 2");
}
else if(cantidadpersonas >40 && cantidadpersonas <=100){
    console.log("por favor utilice el auditorio");
}
else if(cantidadpersonas >100){
    console.log("no hay ambientes disponibles");
}  
else{
    console.log("ha ocurrido un error");
}
/*condicional anidado*/
/*sistema para determinar el descuento del usuario*/
/*si e usuario es menor de 10 años o mayor de 70 años tiene descuento sobre el valor del tiquete de 10 % si  el destino es cartaagenala aerolinea es latam tiene descuento de 10%*/

var edadusuario = 71;
var aerolineausuario = "latam";
var destinousuario = "San Andres";
var valortiquete = 250000;
var descuento = .10;
var valordescuento = (valortiquete * .10);

if (edadusuario <=10 || edadusuario >=70){
valortiquete = (valortiquete - valordescuento);
    if (destinousuario === "cartagena"){
        valortiquete = (valortiquete -valordescuento);
        if (aerolineausuario == "latam"){
            valortiquete = ( valortiquete - valordescuento)
        }
    }
}
console.log("valor del tiquete: $" + valortiquete);