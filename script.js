let empate = 0;
let jugador1 = 0;
let jugador2 = 0; 

function mostrarNombre(){
    let nombre = document.querySelector("#nombreUsuario").value;
    document.querySelector('#jugador1Nombre').textContent=nombre;
}


function jugadaUsuario(jugada) {
    const Jusuario = document.getElementById('Jusuario');
    if (jugada === 1) {
        Jusuario.src = "img/piedra.png";
    } else if (jugada === 2) {
        Jusuario.src = "img/papel.png";
    } else if (jugada === 3) {
        Jusuario.src = "img/tijera.png";
    }

    const bot = jugadaBot();
    PuntajeJuego(jugada, bot);
}

function jugadaBot() {
    const Jusuario = document.getElementById('Jbot');
    let azar = Math.floor(Math.random()*3)+1
    if (azar === 1) {
        Jusuario.src = "img/piedra.png";
    } else if (azar === 2) {
        Jusuario.src = "img/papel.png";
    } else if (azar === 3) {
        Jusuario.src = "img/tijera.png";
    }

    return azar
  
}

function PuntajeJuego(u,b){
    if((u==1 && b == 1) || (u == 2 && b == 2) || (u == 3 && b == 3)){
        empate++;
        document.querySelector('#ptsEmpates').textContent = empate; 
    }else if((u==1 && b == 2) || (u == 2 && b == 3) || (u == 3 && b == 1)){
        jugador2++;
        document.querySelector('#ptsJugador2').textContent = jugador2; 
    }else if((u==1 && b == 3) || (u == 2 && b == 1) || (u == 3 && b == 2)){
        jugador1++;
        document.querySelector('#ptsJugador1').textContent = jugador1; 
    }
}

function reiniciar(){
    empate=0
    jugador1=0
    jugador2=0

    document.querySelector("#ptsJugador2").textContent = jugador2;
    document.querySelector("#ptsJugador1").textContent = jugador1;
    document.querySelector("#ptsEmpates").textContent = empate;
}

