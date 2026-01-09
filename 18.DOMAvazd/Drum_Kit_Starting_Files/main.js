
var dato = document.querySelectorAll(".drum").length;


for(var i = 0; i < dato; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        this.style.color = "blue";

    }); 
}




/*
    var audio = new Audio("./sounds/tom-1.mp3");
    
    audio.play();

*/