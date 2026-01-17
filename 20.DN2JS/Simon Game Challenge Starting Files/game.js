
let buttonColoursy  = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let incio = false;


//Funcion Anonima de Clicks
$(".btn").on("click", function(){
    let userChosenColour = $(this).attr("id");

    userClickedPattern.push(userChosenColour);

    //salida para callback llamada a otras funciones
    //audio
    playSound(userChosenColour);
    //animacion
    animatePress(userChosenColour);

    //secuencia de juego
    checkAnswer(userClickedPattern.length -1);

        
 });

//Funcion anonima de precionar tecla para iniciar el juego
$(document).keydown( function(){

    //llamar a la funcion generar color    
     if (incio === false ){
        nextSequence()};

    return incio = true;

});



//funcion de generaddor de color
function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);

    let randomChosenColour =  buttonColoursy[randomNumber];

    gamePattern.push(randomChosenColour);

    //selecionar el boton que se esta generando
    let color = $("#"+randomChosenColour)
    
    //Animacion de boton
    color.animate({opacity: 0.2}).animate({opacity: 1});

     //aumento de valor de nivel
    level++;

    //cambio de texto de h1 segun el nivel
    $("h1").text("Nivel "+level);

    //salida para callback llamada a otras funciones
    playSound(randomChosenColour);


    
}

function checkAnswer(currentLevel) {

    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        if(userClickedPattern.length === gamePattern.length){
            setTimeout( function(){
                nextSequence();
            }, 1000);

            userClickedPattern = [];
        }
    } else {
        let error = $("body").addClass("game-over");

        setTimeout(function(){
            error.removeClass("game-over");
        }, 200);

        let wrong = new Audio("./sounds/wrong.mp3");
        wrong.play();

        $("h1").text("Game Over, Press Any Key to Restart");

        //llamodo de funcion para reinciar el juego
        startOver();
    }

}

//funcion para reinciar el juego
function startOver(){
    level = 0;
    gamePattern = [];
    incio = false;

}


//funcion de Audio
 function playSound(name){

        //Audio
        switch (name) {
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
                break;
        }
    
        /*forma mas facil del audio
      var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
      audio.play();
      */

 }



//funcion de animacion de clicks en gris
function animatePress(currentColor){

    $(".btn").on("click", function(){
        let boton = $(this).addClass("pressed");
    
        setTimeout(function(){
            boton.removeClass("pressed");
        }, 100);
    });

}






/*
Forma 2 de hacer la funcion de animacion de clicks en gris
//1. Create a new function called animatePress(), it should take a single input parameter called currentColour.
function animatePress(currentColor) {

  //2. Use jQuery to add this pressed class to the button that gets clicked inside animatePress().
  $("#" + currentColor).addClass("pressed");

  //3. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
  
*/








