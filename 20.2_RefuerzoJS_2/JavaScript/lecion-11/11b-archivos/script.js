const lista = [];

function añadirLista(){

  const dato = document.querySelector(".js-dato");
  const dato2 = dato.value;

  lista.push(dato2);

  console.log(lista);

  dato.value = "";


}