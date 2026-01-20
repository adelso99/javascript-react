//Condicion For Of

let frutas = ["limon", "tomate", "Naranja"];

for (fruta of frutas) { //aplicacion de of
   
     console.log(fruta); //muestra en consola fruta por fruta

}


//con while
let incremento = 0;
while (incremento < frutas.length){
    console.log(frutas[incremento]);
    incremento++;
}