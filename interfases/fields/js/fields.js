"use strict"
function guardarInfo() {
    let diacita = document.getElementById("diacita").value;
    if (diacita == "") {
        alert("Por favor ingrese el dia de de la cita");
        return false;
    }
    let horacita = document.getElementById("horacita").value;
    if (horacita == "") {
        alert("Por favor ingrese la hora de la cita");
        return false;
    }
    let nombre = document.getElementById("nombre").value;
    if (nombre == "") {
        alert("Por favor ingrese el nombre del usuario");
        return false;
    }
    let direc = document.getElementById("direc").value;
    if (direc == "") {
        alert("Por favor ingrese la dirección");
        return false;
    }
    let fnac = document.getElementById("fnac").value;
    if (fnac == "") {
        alert("Por favor ingrese la fecha de nacimiento");
        return false;
    }
    alert("Información guardada con exito");
    limpiarUsuario();
    return true;
}
function limpiarUsuario() {
    document.getElementById("diacita").value = "";
    document.getElementById("horacita").value = "";
    document.getElementById("nombre").value = "";
    document.getElementById("direc").value = "";
    document.getElementById("fnac").value = "";
}
