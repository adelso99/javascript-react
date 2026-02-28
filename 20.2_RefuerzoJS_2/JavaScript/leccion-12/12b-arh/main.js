
let puntuacion = JSON.parse(localStorage.getItem("puntuacion")) 
|| {
    victorias: 0,
    derrotas: 0,
    empates: 0
    };

actualizarPuntaje(); //llamado de funcion para actualizar puntaje que se visualice en la pagina web

/*
if(!puntuacion){ // es igual a esto "puntuacion === null"
puntuacion = {
victorias: 0,
derrotas: 0,   //tambien todo ese if se puede agregar a la variable "puntuacion" con el operador "||" y seguido del objeto
empates: 0
}
}*/


let juegoAuto = false;
let interaloId;

function autoPlay(){
    /* en el autoPlay mejor no dejarlo como funcion de flecha porque:
    1. Más fácil de leer
    2. Izamiento
    */

    if(!juegoAuto){
       interaloId = setInterval(() => { //Funcion de Flecha
        const playerMove = pickComputerMove();
        playGame(playerMove);
        }, 1000);

        juegoAuto = true;
    }else {
        clearInterval(interaloId);

        juegoAuto = false;
    }

}


//DOM de Boton de Piedra
const btnPiedra = document.querySelector(".js-btn-piedra");
btnPiedra.addEventListener("click", () => {
    playGame("piedra");
});

//DOM de Boton de Papel
const btnPapel = document.querySelector(".js-btn-papel");
btnPapel.addEventListener("click", () =>{
    playGame("papel")
});

//DOM de Boton Tijera
const btnTijera = document.querySelector(".js-btn-tijera");
btnTijera.addEventListener("click", ()=> {
    playGame("tijera")
});


function playGame(playerMove) {
        const computerMove = pickComputerMove();

        let result = '';

        if (playerMove === 'tijera') {
            if (computerMove === 'piedra') {
            result = 'Perdiste :(';
            } else if (computerMove === 'papel') {
            result = 'GANASTE :D';
            } else if (computerMove === 'tijera') {
            result = 'Empate *_*';
        }

        } else if (playerMove === 'papel') {
            if (computerMove === 'piedra') {
            result = 'GANASTE :D';
            } else if (computerMove === 'papel') {
            result = 'Empate *_*';
            } else if (computerMove === 'tijera') {
            result = 'Perdiste :(';
        }

        } else if (playerMove === 'piedra') {
            if (computerMove === 'piedra') {
            result = 'Empate *_*';
            } else if (computerMove === 'papel') {
            result = 'Perdiste :(';
            } else if (computerMove === 'tijera') {
            result = 'GANASTE :D';
        }
        }

        if (result === "GANASTE :D"){
            puntuacion.victorias += 1;
            } else if( result === "Perdiste :("){
            puntuacion.derrotas += 1;
            } else {
            puntuacion.empates += 1;
        }

        //Almacenamiemnto Local
        localStorage.setItem("puntuacion", JSON.stringify(puntuacion));

        actualizarPuntaje(); //llamado de funcion para actualizar puntaje que se visualice en la pagina web


        document.querySelector(".js-resultado").innerHTML = result;

        document.querySelector(".js-movimientos").innerHTML = `Tu <img src="./12b-arh/img/${playerMove}.png" class="movimiento"/> Computadora <img src="./12b-arh/img/${computerMove}.png" class="movimiento"/>`;
        


}


function actualizarPuntaje(){ //funcion para actualizar puntaje que se visualice en la pagina web
        document.querySelector(".js-puntuacion").innerHTML = `Victorias: ${puntuacion.victorias} -- Derrotas: ${puntuacion.derrotas} -- Empates: ${puntuacion.empates}`;



        }


        function pickComputerMove() {
            const randomNumber = Math.random();

            let computerMove = '';

            if (randomNumber >= 0 && randomNumber < 1 / 3) {
            computerMove = 'piedra';
            } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
            computerMove = 'papel';
            } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
            computerMove = 'tijera';
            }

            return computerMove;
}
