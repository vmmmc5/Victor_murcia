"use strict"
/* operadores logicos */
/* && .. y
  || .. o
  !0 .. negacion 
  xor ..  o exclusivo
*/

/*si el aprendiz tiene jovenes en acion o sisben puede acceder al subcidio de transporte
si el aprendiz tiene jovenes en accion y sisben NO puede acceder al subcidio de transporte
si el aprediz no tiene jovenes en accion */
var jovenaccionusuario = true;
var sisbenusuario = true;

if ( jovenaccionusuario == true ^ sisbenusuario == true){
    console.log(" usted puede acceder al beneficio  de transporte");
}
else {
    console.log("No puede acceder al subcidio de trasporte.");
}