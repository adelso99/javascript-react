
let buttonColoursy  = ["red", "blue", "green", "yellow"];
let gamePattern = [];

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);

    let randomChosenColour =  buttonColoursy[randomNumber];

    gamePattern.push(randomChosenColour);

    //selecionar el boton que se esta generando
    let color = $("#"+randomChosenColour)
    
    //Animacion de boton
    color.animate({opacity: 0.2}).animate({opacity: 1});

    switch (randomChosenColour) {
        case "blue": let blue = new Audio("./sounds/blue.mp3");
        blue.play();
            break;

        case "green": let green = new Audio("./sounds/green.mp3");
        green.play();
            break;

        case "red": let red = new Audio("./sounds/red.mp3");
        red.play();
            break;

        case "yellow": let yellow = new Audio("./sounds/yellow.mp3");
        yellow.play();
            break;
    
        default:
            let wrong = new Audio("./sounds/wrong.mp3");
            wrong.play();
            break;
    }
    

    return randomChosenColour;
}

//selecionar el id del boton aleatorio que se esta generando




 


