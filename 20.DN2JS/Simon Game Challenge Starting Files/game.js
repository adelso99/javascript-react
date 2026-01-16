
let buttonColoursy  = ["red", "blue", "green", "yellow"];
let gamePattern = [];

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);

    let randomChosenColour =  buttonColoursy[randomNumber];

    gamePattern.push(randomChosenColour);
    return randomChosenColour;
}

//selecionar el id del boton aleatorio que se esta generando
$("#"+buttonColoursy);



 /*
console.log(nextSequence());
console.log(nextSequence());
console.log(nextSequence());
console.log(nextSequence());
console.log(gamePattern);
*/
