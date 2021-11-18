"use strict"
/* generar un consecutivo del 1 a 20 */
for(var i = 1; i <= 20; i++){
    console.log(i);
}
/* generar en pantalla */
for( i = 1; i <= 20; i++){
    console
    .log("aprendiz N. " + i);
}
var aprendiz1 = new Array();
aprendiz1[0] = 1;
aprendiz1[1] = "yeimi katherine";
aprendiz1[2] = "peña ariza";
aprendiz1[3] = 18;
aprendiz1[4] = "b.villa del prado";
aprendiz1[5] = 156;
/* metodo 2*/
var aprendiz2 = new Array(2,"Luiza Fernanda","Ramirez Montoya",19,"b.Simon bolivar",157);
/*metodo 3*/
var aprendiz3 = [ 3,"Jesus Nicolas","ayerbe Guarnizo",17,"b.las palmitas,177"];

for(var i= 0; i <=aprendiz1.length -1; i++){
    console.log(aprendiz1[i]);
}