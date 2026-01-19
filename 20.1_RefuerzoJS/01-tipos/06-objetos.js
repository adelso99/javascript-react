

//Personaje de un Anime de Demon Slayer
let nombre = "Tanjiro";  
let anime = "Demon Slayer"; 
let edad = 16;  


//Uso de Objeto "{}" de un Personaje 
var personaje = {
     nombre: "Tanjiro",  // no es nesario escribir let ya que estos datos son propiedades del objeto
     anime: "Demon Slayer", //no se usa "=", se usa ":"
     edad: 16,             // y se separa con una "," menos la ultima priopiedad
};  //<-- con ello decimo que estamos creando un objeto con las llaves


console.log(personaje); //accede a todo el objeto
console.log(personaje.nombre); //accede a una propiedad del objeto


personaje.edad = 18; //Para poder cambiar una propiedad del objeto, No cambia el Objeto si no una propiedad de el
console.log(personaje.edad); //accede a una propiedad del objeto


delete personaje.anime; //elliminacion de una propiedad del objeto con "delete"

console.log(personaje);

