const lista = [];

function añadirLista(){

  const dato = document.querySelector(".js-dato");
  const dato2 = dato.value;

  lista.push(dato2);

  console.log(lista);

  dato.value = "";


}



/*
Pasos (Algoritmo)
1. Recorrer la matriz
2. Crear código HTML para cada tarea
3. Colocar el HTML en la página web

*/