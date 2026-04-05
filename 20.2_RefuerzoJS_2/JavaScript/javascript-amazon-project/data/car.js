
//Ejericios
/*
17a. Practiquemos la POO creando una clase que represente un coche.
  - Crea un nuevo archivo data/car.js y crea una clase Car {}
  - Dale a la clase Car 2 propiedades: marca y modelo. Luego, crea un constructor que establezca estas 2 propiedades.
  - Mantén todas las propiedades públicas por ahora (aprenderemos por qué en un ejercicio posterior).
  - Usa esta clase para generar algunos objetos de coche:
    { marca: 'Toyota', modelo: 'Corolla' }
    { marca: 'Tesla', modelo: 'Modelo 3' }

  - muestra los objetos de coche en la consola.
  - En checkout.js, carga data/car.js usando la sintaxis import '...'; y revisa la consola

*/

class Car{
  marca;
  modelo;

  constructor(dato1, dato2){
    this.marca = dato1;
    this.modelo = dato2;
  }
}

const carro1 = new Car("Toyota", "Corolla");
const carro2 = new Car("Tesla", "Modelo 3");

console.log(carro1);
console.log(carro2);
