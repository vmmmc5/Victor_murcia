"use strict"
var voto = "luisa";
var candidatos = ["luisa","jesus","yolanda","nulo","en blanco"];
var votos = [0,0,0,0,0,0];

for(let i=0; i < candidatos.length; i++){
    if (voto === candidatos[i]){
        votos[i]++;
    }
}
for (let i=0; i < candidatos.length; i++){
    console.log(candidatos[i] +": " + votos[i]);
}