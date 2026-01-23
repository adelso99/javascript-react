

//Factory Functions
//permite crear objetos pero de forma sensilla y no repetitiva

function crearUsuario(name, email){

    return {
        email,  //email: email,
        name: name,  //name,
        activo: true,
        recuperarClave: function(){
            console.log("Recuperando Clave...");
        },
    };
}

let user1 = crearUsuario("Adelso", "adelso@gmail.com");
let user2 = crearUsuario("John", "hola@gmail.com");

console.log(user1, user2);