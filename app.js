// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let inputAmigo = document.getElementById("amigo");
let listaAmigos = [];
let listaAmigosAgregados = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

function agregarAmigo(){
    if (inputAmigo.value == ""){
        alert("No se puede agregar un texto vacio, ingrese un nombre valido");
    }
    listaAmigos.push(inputAmigo.value);
    listaAmigosAgregados.innerHTML += `<li>${inputAmigo.value}</li>`;
};


function sortearAmigo(){
    if (listaAmigos.length===0){
        alert("No se puede sortear al amigo secreto si no ingresas nombres de tus amigos, sal y consigue amigos antes de jugar");
    } else {
        let numeroAleatorio = Math.floor(Math.random()*listaAmigos.length);
        let amigoSecreto = listaAmigos[numeroAleatorio];
        resultado.innerHTML = `<li>¡Felicidades, tu amigo secreto es: ${amigoSecreto}!</li>`;
    }    
}