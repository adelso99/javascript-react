
function juego(numero){
  const dato = document.querySelectorAll(".programar")[numero];

      if (!dato.classList.contains('solicitar1')) {

        botonEncendido();
        dato.classList.add('solicitar1');
      } else {
        dato.classList.remove('solicitar1');
      }


}

function botonEncendido(){
   const estiloon = document.querySelector(".solicitar1");

   if(estiloon){
     estiloon.classList.remove('solicitar1');
   }
}

/*
10g. Modifica 10f para que solo 1 botón pueda estar ENCENDIDO a la vez.
    Juegos  Música   Tecnología
*/



function test(){
 const dato = document.querySelector(".js-buttton");

 console.log(dato.classList.contains("js-buttton"));
}



