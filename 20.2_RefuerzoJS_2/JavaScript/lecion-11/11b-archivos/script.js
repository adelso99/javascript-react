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


localStorage.getItem("tareas", JSON.stringify(lista));


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

      localStorage.setItem("tareas", JSON.stringify(lista))

      añadirHtml();// llamado de funcion para ver actualice los elementos en la web


}



/*

11x. Crea 3 archivos: 11x.html, 11x.css y 11x.js, y copia el código del proyecto de la lista de tareas pendientes en estos archivos.
  - Actualiza los elementos <link> y <script> para cargar 11x.css y 11x.js
  - Actualiza la lista de tareas pendientes para usar localStorage (si modificamos la lista de tareas pendientes y actualizamos la página, la lista de    tareas pendientes debería permanecer igual).
  - Consejo: recuerda que localStorage solo admite cadenas. Puedes usar JSON.stringify() para convertir una matriz en una cadena
*/