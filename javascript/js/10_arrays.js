"use strict"
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
/*Mostrar en nombre del aprendiz 2*/
console.log(aprendiz2[1] +" "+ aprendiz2[2]);
/*añadiendo elementos al array*/
aprendiz3[6] = "031322456789";
console.log(aprendiz3[6]);

/*contando elementos*/
var cantidadelemtos = aprendiz1.length;
console.log("aprendiz 1 tiene " + cantidadelemtos + " elementos" );
/*contando caracteres */
var cantidadcaracteres = aprendiz2[1].length;
console.log("cantidad de caracteres " + cantidadcaracteres);