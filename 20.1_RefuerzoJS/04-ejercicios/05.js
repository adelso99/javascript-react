
//Ejericio 5
//Crean un algoritmo que devuelva numero
//menor y mayor de un array

let array = [2, 5 , 7, 15, -5, -100, 55];

function getMenorMayor(arr){
    let menor = arr[0];
    let mayor = arr[0];

    for (let i = 0; i < arr.length; i++){
        if(menor > arr[i] ){
            menor = arr[i];
        }
        
        if(mayor < arr[i]){
            mayor = arr[i];
        }
    }

    return [menor, mayor];

    /* Forma 2
        let menor = arr[0];
        let mayor = arr[0];

        for (numero of arr){
            menor = menor < numero ? menor : numero;
            mayor = mayor > numero ? mayor : numero;
        }

        return [menor, mayor];     

     */
    

}

let numeros = getMenorMayor(array)
console.log(numeros);


