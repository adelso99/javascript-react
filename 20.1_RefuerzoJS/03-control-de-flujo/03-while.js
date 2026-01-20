//Condicion While

/*
while (condicion) {

}
*/

//cuales son los numeros pares
let i = 0;

while (i <= 10) {

    if (i % 2 === 0) {
        console.log("Numeros Pares: "+i); //muestra en consola
    }

    i++; //incremento de la variable i
}

console.log("Fuera del While");