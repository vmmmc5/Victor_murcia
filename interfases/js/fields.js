function validarInfo(numeroDocumento,venombr){
    var doc = document.getElementById(numeroDocumento).value;
    var nom = document.getElementById(venombr).value;
    if (doc ==="") {
        alert("Ingrese el número de documento");
    }
    if (nom ==="") {
        alert("Ingrese su nombre");
    }
}
