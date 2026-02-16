
function juego(numero){
  const dato = document.querySelectorAll(".programar")[numero];


  if (!dato.classList.contains('solicitar1')) {
        dato.classList.add('solicitar1');
      } else {
        dato.classList.remove('solicitar1');
      }


}



function test(){
 const dato = document.querySelector(".js-buttton");

 console.log(dato.classList.contains("js-buttton"));
}





