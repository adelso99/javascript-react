

var dato = document.querySelectorAll(".drum").length;


// Aca se detecta los clicks con el mouse
for(var i = 0; i < dato; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        //sonido(this.innerHTML); --> o mejor esto para resumir
        var botonPresionado = this.innerHTML;  
        
        sonido(botonPresionado);   // verifica que boton fue

        botonAnimado(botonPresionado);  // reraliza la aniamcion del boton que fue clickeado
        

    }); 
}

// Aca se detecta las teclas precionadas
document.addEventListener("keydown", function(event){

     sonido(event.key); //verifica el boton que fue precionado

     botonAnimado(event.key);  // reraliza la aniamcion del boton que fue presionado

});


function sonido(key) {
    switch (key) {
        case "w":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
        break;

        case "a":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
        break;

        case "s":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
        break;

        case "d":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
        break;

        case "j":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
        break;

        case "k":
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
        break;

        case "l":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
        break;
    
        default:
            console.log(botonPresionado);
        break;
    }
}


function botonAnimado(aniamcion){

    var activaAnimacion = document.querySelector("."+aniamcion);

   
    activaAnimacion.classList.add("pressed");  // con ".classList.add" se agrega el estilo "pressed"
    
    setTimeout(function(){
        activaAnimacion.classList.remove("pressed");
    }, 100); // ese 100 son los milisegundos que se desea esperar para que se quite la clase añadida que es pressed
}