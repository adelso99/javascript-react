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
          /*esto es lo mismo
          const name = elementoObject.name;
          const fecha = elementoObject.fecha;
          que lo de abajo solo que a eso se le llama destructuracion
          */
          const {name, fecha} = elementoObject;

          const datoHtml = `
          <div>${name}</div>
          <div>${fecha}</div> 
            <button onclick="
                  lista.splice(${i}, 1);
                  añadirHtml();  
            " class="btn-eliminar" >Eliminar</button>
          `;

          listaHtml += datoHtml;
      }

      document.querySelector(".js-elementos-lista").innerHTML = listaHtml;

}



function añadirLista(){

      const dato = document.querySelector(".js-dato");
      const name = dato.value;

      const fechaInput = document.querySelector(".js-fecha");
      const fecha = fechaInput.value;

      lista.push({
            /*Los Objeto tambien tiene atajos hacer esto:
            name: name,
            fecha: fecha, 
            es lo mismo que lo de abajo --> propiedad abreviada
            */
            name,
            fecha,
      });

      dato.value = "";

      añadirHtml();// llamado de funcion para ver actualice los elementos en la web


}



/*
Pasos (Algoritmo)
1. Recorrer la matriz
2. Crear código HTML para cada tarea
3. Colocar el HTML en la página web

*/