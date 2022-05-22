function intercambiarImagen(ruta) {
    document.getElementById("imgPrincipal").src = ruta;
}
function cambiarTitulo(texto) {
    document.getElementById("tituloPrincipal").textContent = texto;
}
function cambiarContenido(contenido){
    document.getElementById("descripcion").textContent = contenido;
}