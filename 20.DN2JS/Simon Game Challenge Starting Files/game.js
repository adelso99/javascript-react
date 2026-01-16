
let buttonColoursy  = ["red", "blue", "green", "yellow"];
let gamePattern = [];

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);

    let randomChosenColour =  buttonColoursy[randomNumber];

    gamePattern.push(randomChosenColour);

    //selecionar el boton que se esta generando
    $("#"+randomChosenColour).animate({opacity: 0.5}).animate({opacity: 1});
    

    return randomChosenColour;
}

//selecionar el id del boton aleatorio que se esta generando




 


