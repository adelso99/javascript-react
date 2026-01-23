

//Funcion Constructora en js

//{id: 1, recuperarClave: funccton(){}}

function Usuario(){ // se debe de usar la primera letra MAYUSCULA --UpperCamelCase
    this.id = 1;
    this.recuperarClave = function(){ //Metodo
        console.log("Recuperando Clave...");
    }
} 

let usuario = new Usuario(); //con "new" se crea un onjeto {} y eso se le asigna a "this"
                             //despues se vincual el prototipo de la funcion "Usuario()"
                             //esto returna de manera automatica this, sin colocarle el return manual
                             

console.log(usuario);