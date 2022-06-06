
class automovil{
    constructor(marca,modelo,version,year,precio,kilometraje,ciudad,imagen){
        this.marca=marca;
        this.modelo=modelo;
        this.version=version;
        this.year=year;
        this.precio=precio;
        this.kilometraje=kilometraje;
        this.ciudad=ciudad;
        this.imagen=imagen;
    }
}

let car1 =new automovil();
car1.marca="SEAT";
car1.modelo="Atena";
car1.version="Turbo";
car1.year=2023;
car1.precio=128990000;
car1.kilometraje=0;
car1.ciudad="Bogotá";
car1.imagen="img/seat1.jpg";

let car5 = new automovil();
car5.marca="SEAT";
car5.modelo="ibiza style";
car5.version="";
car5.year=2022;
car5.precio=72900000;
car5.kilometraje=7702;
car5.ciudad="Bogota";
car5.imagen="img/seat2.jpg";

let car6 = new automovil();
car6.marca="SEAT";
car6.modelo="Arona";
car6.version="fr";
car6.year=2023;
car6.precio=91990000;
car6.kilometraje=0;
car6.ciudad="Bogota";
car6.imagen="img/seat3.jpg";

let car2 = new automovil();
car2.marca="Mazda";
car2.modelo="cx-30";
car2.version="Grand Touring";
car2.year=2022;
car2.precio=119000000;
car2.kilometraje=3990;
car2.ciudad="Bogota";
car2.imagen="img/mazda1.jpg";

let car8 = new automovil();
car8.marca="Mazda";
car8.modelo="cx-30";
car8.version="Grand Touring lx";
car8.year=2021;
car8.precio=116500000;
car8.kilometraje=13100;
car8.ciudad="Bogota";
car8.imagen="img/mazda2.jpg";
    

let car3 = new automovil();
car3.marca="Mercedes";
car3.modelo="Benz Clase";
car3.version="C 1.6";
car3.year=2017;
car3.precio=108000000;
car3.kilometraje=30418;
car3.ciudad="Bogotá";
car3.imagen="img/mercedes.jpg";



function Busqueda(car){
    let contenedorPrincipal=document.getElementById("contenidoPrincipal");
    let contenedorProducto= document.createElement("div");
    contenedorPrincipal.appendChild(contenedorProducto);
    contenedorProducto.setAttribute("class","contenido");

    let img= document.createElement("img");
    img.setAttribute("src", car.imagen);
    img.setAttribute("class","img");
    contenedorProducto.appendChild(img);

    

    let valorcar= document.createElement("label");

    let precioFormat = new Intl.NumberFormat('es-ES', {}).format(car.precio);

    let textValorCar= document.createTextNode("$" + precioFormat);
    valorcar.appendChild(textValorCar);
    valorcar.setAttribute("class","precio");
    contenedorProducto.appendChild(valorcar);

    let descripcion= document.createElement("label");
    let textdesccar=document.createTextNode(car.marca+" " +car.modelo+" "+ car.version);
    descripcion.appendChild(textdesccar);
    descripcion.setAttribute("class","descripcion");

    contenedorProducto.appendChild(descripcion);

    let yearcar=document.createElement("label");
    let textyear=document.createTextNode(car.year);
    yearcar.appendChild(textyear);
    yearcar.setAttribute("class","year");
    contenedorProducto.appendChild(yearcar);

    let kilometrajecar=document.createElement("label");
    let textkilometraje=document.createTextNode(car.kilometraje+" kilometros");
    kilometrajecar.appendChild(textkilometraje);
    kilometrajecar.setAttribute("class","kilometraje");
    contenedorProducto.appendChild(kilometrajecar);

    let city=document.createElement("label");
    let textcity=document.createTextNode(car.ciudad);
    city.appendChild(textcity);
    city.setAttribute("class","ciudad");
    contenedorProducto.appendChild(city);

}

window.addEventListener("keydown",function(event){
    let Busq=document.getElementById("textBuscador").value;
    if(event.key=="Enter"){
        console.log(Busq);
        cleanwindow();
        if(Busq=="seat"){
            Busqueda(car1); 
            Busqueda(car5); 
            Busqueda(car6);               
        }
        else if(Busq=="mazda"){
            Busqueda(car2);
            Busqueda(car8);
        }
        
        else if(Busq=="mercedes"){
            Busqueda(car3);
        }
        else{
            alert("sin coincidencias");
        }
    }
})
function cleanwindow(){
    document.getElementById("contenidoPrincipal").innerHTML="";
}