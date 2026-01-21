//For In -- Iterar las propiedades de un Objeto
let usuario = {
    id: 1,
    name: "John",
    edad: 20,

};

for (let propiedad in usuario){//uso de in
    //console.log(propiedad); //Mostrara las propiedades no los valores "propiedad"
    console.log(propiedad, usuario[propiedad]); //Mostrara las propiedades y valores "usuario[propiedad]""
}



//se puede con array pero es mejor for of
let frutas = ["limon", "tomate", "Naranja"];

for (let indice in frutas) { //aplicacion de in
   
    console.log(indice, frutas[indice]); //muestra en consola fruta por fruta

}
