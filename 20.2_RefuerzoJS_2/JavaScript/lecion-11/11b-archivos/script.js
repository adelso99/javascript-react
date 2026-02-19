const lista = [{
      name: 'Programar', 
      fecha: "22-03-2022"
      },

      {
      name: 'Ir al Gym',
      fecha: "23-03-2022"
      }];

añadirHtml();// llamado de funcion para ver elementos en la web


function añadirHtml(){
      let listaHtml = "";

      for(let i = 0; i < lista.length; i++){

          const elementoObject = lista[i];
          const name = elementoObject.name;
          const fecha = elementoObject.fecha;

          const datoHtml = `
          <p>
            ${name} ${fecha} 
            <button onclick="
                  lista.splice(${i}, 1);
                  añadirHtml();  
            ">Eliminar</button>
          </p>
          `;

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