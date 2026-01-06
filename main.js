
var lista = [];
var numero = 1;

function repaso(dato){

    for (var numero = 1; numero <= dato; numero++){
        if (numero % 3 === 0 && numero % 5 === 0){
            lista.push("FizzBuzz");
        }else if (numero % 3 === 0){
            lista.push("Fizz");
        }else if (numero % 5 === 0){
            lista.push("Buzz");
        } else {
            lista.push(numero)
        }

        

    } 

    console.log(lista);

}


repaso(15);
