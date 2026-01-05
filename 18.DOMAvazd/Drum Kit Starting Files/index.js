


var datoBotones = document.querySelectorAll(".drum").length;

for (var i = 0; i < datoBotones; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", clickBoton);

    function clickBoton(){
        alert("Has realizado un click: ");
    }

}


/*
Solucion 1:
document.querySelector(".set").addEventListener("click", clickBoton);

function clickBoton(){
    alert("Has realizado un click: ");
}

*/


/*
FUNCION ANONIMA
document.querySelector("button").addEventListener("click", function (){
    alert("Has realizado un click: ");
});

    
*/