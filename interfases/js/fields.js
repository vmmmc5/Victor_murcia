  function validarInfo(diacita,horacita,nombre,direc,fnac){
    var dia = document.getElementById(diacita).value;
    var hora = document.getElementById(horacita).value;
    var nom = document.getElementById(nombre).value;
    var dir = document.getElementById(direc).value;
    var fna = document.getElementById(fnac).value;
    if (dia.length===0) {
        alert("Ingrese el dia de la cita");

    }
    if (hora.length===0) {
        alert("Ingrese la hora de la cita");
       
    }
    if (nom.length===0) {
        alert("Ingrese el Nombre");
      
    }
    if (dir.length===0) {
        alert("Ingrese la dirección");
    
    }
    if (fna.length===0) {
        alert("Ingrese la fecha de nacimiento");
    
    }
}
