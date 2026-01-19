
//Definicion de un array con "[]"

let ensalada = ["Naranja", "Mango"]; //sus elementos se separan con una "," y sus elementos o index empiezan desde "0"


console.log(ensalada); //accede a todo los elementos

console.log(ensalada[0]); //accede al primer elemento que es "Naranja"

//para anadir un elemento pude ser de varias formas esta 
//Forma 1, agregarlo con su index si sabemos cual es el que sigue
ensalada[2] = "Tomate";

console.log(ensalada);

//Forma 2; con ".push()" y esta es la que usare ya que no se ocupa saber el index
ensalada.push("limon");

console.log(ensalada);

