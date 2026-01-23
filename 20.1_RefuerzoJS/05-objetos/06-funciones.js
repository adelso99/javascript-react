
//Funciones son objeto de primera clase

function Usuario(nombre){
    this.nombre = nombre;
}

console.log(Usuario.name); // devuelve el nombre de la funcion
console.log(Usuario.length); // Cantidad de argumentos que recibe la funcion


const u = Usuario;
let user = new u("Adelso");

console.log(user);

function of(Fn, arg){
    return new Fn(arg);
}

let user1 = of(Usuario, "Hola");

console.log(user1);


function returned() {
    return function (){
        console.log("Hola");
    }
}

let saludo = returned();

saludo();