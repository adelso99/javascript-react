let lista = [{
      name: 'Programar', 
      fecha: "22-03-2022"
      },

      {
      name: 'Ir al Gym',
      fecha: "23-03-2022"
      }];


const datosGuardados = localStorage.getItem("tareas");

if(datosGuardados !== null){
      lista = JSON.parse(datosGuardados);
}



addHtml();// llamado de funcion para ver elementos en la web


function addHtml(){
      let listaHtml = "";

      lista.forEach( (elementoObject, index) => { //Funcion de Flecha
            const {name, fecha} = elementoObject;
  
            const datoHtml = `
            <div>${name}</div>
            <div>${fecha}</div> 
              <button onclick="
                    lista.splice(${index}, 1);
                    localStorage.setItem('tareas', JSON.stringify(lista));
                    addHtml();  
              " class="btn-eliminar" >Eliminar</button>
            `;
  
            listaHtml += datoHtml;
            
      });

      document.querySelector(".js-elementos-lista").innerHTML = listaHtml;


}


//Dom Boton de Añadir
const btnAdd = document.querySelector(".js-btn-add");
btnAdd.addEventListener("click", () =>{
      addLista();
});



function addLista(){

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


      addHtml();// llamado de funcion para ver actualice los elementos en la web

      localStorage.setItem("tareas", JSON.stringify(lista));


}


