
//Objeto Dinamico

const usuario = {  //no se puede cambiar el valor a la variable
    id: 1,
    
};

//Pero si se pueden modificar, agregar, eliminar, editar las propiedades
usuario.nombre = "Adelso";
usuario.guardar = function (){
    console.log("Guardando: "+usuario.nombre);
}

usuario.guardar();

delete usuario.nombre;
delete usuario.guardar;

console.log(usuario);



//Para no poder modificar el objeto se usa el metodo "Object.freeze()"
/*
const user1 = Object.freeze({id: 1});

user1.name = "Hola"; //Intenando agregar nueva propiedad --> no dejara
user1.id = 2; //Intenando cambiar un valor de una propiedad --> no dejara

console.log(user1);
*/

//pero si quisieramos poder cambiar los valores a las propiedades que tiene el objeto 
//se usa el metodo "Object.seal()"

const user1 = Object.seal({id: 1});

user1.name = "Hola"; //Intenando agregar nueva propiedad --> no dejara
user1.id = 2; //Intenando cambiar un valor de una propiedad --> SI DEJA

console.log(user1);