const lista = ['Programar', 'Ir al Gym'];

añadirHtml();// llamado de funcion para ver elementos en la web


function añadirHtml(){
      let listaHtml = "";

      for(let i = 0; i < lista.length; i++){

          const elementoLista = lista[i];

          const datoHtml = `<p>${elementoLista}</p>`;

          listaHtml += datoHtml;
      }

      console.log(listaHtml);

      document.querySelector(".js-elementos-lista").innerHTML = listaHtml;

}



function añadirLista(){

      const dato = document.querySelector(".js-dato");
      const dato2 = dato.value;

      lista.push(dato2);

      console.log(lista);

      dato.value = "";

      añadirHtml();// llamado de funcion para ver actualice los elementos en la web


}



/*
Pasos (Algoritmo)
1. Recorrer la matriz
2. Crear código HTML para cada tarea
3. Colocar el HTML en la página web

*/