var randomNumber1 =  Math.floor((Math.random() * 6)+1);

var imagen1 = document.querySelector(".img1");

if (randomNumber1 === 1){
    imagen1.setAttribute("src", "./images/dice1.png");
}else if (randomNumber1 === 2){
    imagen1.setAttribute("src", "./images/dice2.png");
}else if (randomNumber1 === 3){
    imagen1.setAttribute("src", "./images/dice3.png");
}else if (randomNumber1 === 4){
    imagen1.setAttribute("src", "./images/dice4.png");
}else if (randomNumber1 === 5){
    imagen1.setAttribute("src", "./images/dice5.png");
} else {
    imagen1.setAttribute("src", "./images/dice6.png");
}


var randomNumber2 =  Math.floor((Math.random() * 6)+1);
var imagen2 = document.querySelector(".img2");

if (randomNumber2 === 1){
    imagen2.setAttribute("src", "./images/dice1.png");
}else if (randomNumber2 === 2){
    imagen2.setAttribute("src", "./images/dice2.png");
}else if (randomNumber2 === 3){
    imagen2.setAttribute("src", "./images/dice3.png");
}else if (randomNumber2 === 4){
    imagen2.setAttribute("src", "./images/dice4.png");
}else if (randomNumber2 === 5){
    imagen2.setAttribute("src", "./images/dice5.png");
} else {
    imagen2.setAttribute("src", "./images/dice6.png");
}


var cambio = document.querySelector("h1");

if (randomNumber1 > randomNumber2){
    cambio.innerHTML = ("El Jugador 1 Gano");
} else if (randomNumber1 < randomNumber2){
    cambio.innerHTML = ("El Jugador 2 Gano");
} else if (randomNumber1 === randomNumber2){
    cambio.innerHTML = ("Emapate");
} 
