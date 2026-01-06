
var dato = document.querySelectorAll(".drum").length;

for(var i = 0; i < dato; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        alert("Has hecho un Click");
    }); //aca se va estar cargando cada boton del index del var dato
}



